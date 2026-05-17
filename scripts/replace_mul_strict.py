#!/usr/bin/env python3
r"""
Strict replacement of multiplication signs:
- Inside math blocks ($...$, $$...$$, \(...\), \[...\]):
  replace '\\times' and Unicode '×' -> '\\cdot'
- Outside math blocks (plain text): replace Unicode '×' -> middle dot '·'

This scanner is conservative and does NOT alter any dollar/bracket delimiters.
"""
from pathlib import Path


def scan_and_replace(text):
    i = 0
    n = len(text)
    out = []
    state = 'text'  # 'text', 'inline_math', 'display_math', 'paren_math', 'bracket_math'
    while i < n:
        ch = text[i]
        # handle backslash sequences: preserve math delimiters and \times for special handling
        if ch == '\\' and i + 1 < n:
            if text.startswith('\\times', i) or text.startswith('\\[', i) or text.startswith('\\(', i) or text.startswith('\\]', i) or text.startswith('\\)', i):
                # fall through and let state-specific logic handle these
                pass
            else:
                out.append(text[i:i+2])
                i += 2
                continue

        if state == 'text':
            # check for $$
            if ch == '$':
                if i+1 < n and text[i+1] == '$':
                    out.append('$$')
                    i += 2
                    state = 'display_math'
                    continue
                else:
                    out.append('$')
                    i += 1
                    state = 'inline_math'
                    continue
            if text.startswith('\\[', i):
                out.append('\\[')
                i += 2
                state = 'bracket_math'
                continue
            if text.startswith('\\(', i):
                out.append('\\(')
                i += 2
                state = 'paren_math'
                continue
            # normal text: replace unicode × only (do not replace letter x)
            if ch == '×':
                out.append('·')
            else:
                out.append(ch)
            i += 1

        elif state == 'inline_math':
            if ch == '$':
                out.append('$')
                i += 1
                state = 'text'
                continue
            # inside math: we want to replace \times and × with \cdot
            if text.startswith('\\times', i):
                out.append('\\cdot')
                i += len('\\times')
                continue
            if ch == '×':
                out.append('\\cdot')
                i += 1
                continue
            out.append(ch)
            i += 1

        elif state == 'display_math':
            if text.startswith('$$', i):
                out.append('$$')
                i += 2
                state = 'text'
                continue
            if text.startswith('\\times', i):
                out.append('\\cdot')
                i += len('\\times')
                continue
            if text[i] == '×':
                out.append('\\cdot')
                i += 1
                continue
            out.append(text[i])
            i += 1

        elif state == 'paren_math':
            if text.startswith('\\)', i):
                out.append('\\)')
                i += 2
                state = 'text'
                continue
            if text.startswith('\\times', i):
                out.append('\\cdot')
                i += len('\\times')
                continue
            if text[i] == '×':
                out.append('\\cdot')
                i += 1
                continue
            out.append(text[i])
            i += 1

        elif state == 'bracket_math':
            if text.startswith('\\]', i):
                out.append('\\]')
                i += 2
                state = 'text'
                continue
            if text.startswith('\\times', i):
                out.append('\\cdot')
                i += len('\\times')
                continue
            if text[i] == '×':
                out.append('\\cdot')
                i += 1
                continue
            out.append(text[i])
            i += 1

    return ''.join(out)


def process_all(apply=False):
    md_files = list(Path('.').rglob('*.md'))
    changed = []
    for p in md_files:
        s = p.read_text(encoding='utf-8')
        new = scan_and_replace(s)
        if new != s:
            changed.append(str(p))
            if apply:
                p.write_text(new, encoding='utf-8')
    return changed


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    changed = process_all(apply=args.apply)
    print('Files changed:', len(changed))
    for c in changed:
        print(c)
