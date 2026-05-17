#!/usr/bin/env python3
"""
Replace multiplication signs outside LaTeX math blocks only.

Default: dry-run (no file changes). Use `--apply` to write files.

Replacements performed outside math blocks:
 - Unicode multiplication sign `×` -> middle dot `·` (U+00B7)
 - literal `\times` -> `·` (rare outside math, kept for safety)

Math blocks preserved (no changes inside `$...$`, `$$...$$`, `\(...\)`, `\[...\]`).
"""
import re
import argparse
from pathlib import Path


def find_math_spans(text):
    spans = []
    # display $$...$$
    for m in re.finditer(r"\$\$(?:.|\n)*?\$\$", text):
        spans.append((m.start(), m.end()))
    # display \[ ... \]
    for m in re.finditer(r"\\\[(?:.|\n)*?\\\]", text):
        spans.append((m.start(), m.end()))
    # inline \( ... \)
    for m in re.finditer(r"\\\((?:[^\\)]|\\.)*?\\\)", text):
        spans.append((m.start(), m.end()))
    # inline $...$ (not $$)
    inline_pat = re.compile(r"(?<!\$)\$(?:[^$\\]|\\.)*?\$(?!\$)")
    for m in inline_pat.finditer(text):
        spans.append((m.start(), m.end()))
    spans.sort()
    return spans


def replace_outside(s):
    # Replace \times and × outside math with middle dot
    s = s.replace('\\times', '·')
    s = s.replace('×', '·')
    return s


def process_path(path: Path, apply: bool = False):
    text = path.read_text(encoding='utf-8')
    spans = find_math_spans(text)
    if not spans:
        new = replace_outside(text)
    else:
        parts = []
        last = 0
        for a, b in spans:
            if a > last:
                parts.append(replace_outside(text[last:a]))
            parts.append(text[a:b])
            last = b
        if last < len(text):
            parts.append(replace_outside(text[last:]))
        new = ''.join(parts)

    if new != text:
        # count replacements for reporting
        before = text.count('×') + text.count('\\times')
        after = new.count('×') + new.count('\\times')
        replaced = before - after
        if apply:
            path.write_text(new, encoding='utf-8')
        return replaced
    return 0


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--apply', action='store_true', help='Write changes to files')
    parser.add_argument('--path', default='.', help='Workspace root or path to scan')
    args = parser.parse_args()

    p = Path(args.path)
    md_files = list(p.rglob('*.md'))
    total_changed = 0
    report = []
    for f in md_files:
        try:
            replaced = process_path(f, apply=args.apply)
            if replaced:
                total_changed += 1
                report.append((str(f), replaced))
        except Exception as e:
            print('ERROR processing', f, e)

    print(f"Files with replacements: {total_changed}")
    for fn, cnt in report:
        print(fn, cnt)
    if args.apply:
        print('Changes written to disk.')
    else:
        print('Dry-run complete. Use --apply to write changes.')


if __name__ == '__main__':
    main()
