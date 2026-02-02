#!/usr/bin/env bash
set -euo pipefail

# Create a new daily draft markdown file.
# Usage: ./scripts/new-draft.sh 2026-02-02 "Summary text"

DATE="${1:-$(date -u +%F)}"
SUMMARY="${2:-(draft)}"

OUT_DIR="src/content/drafts"
mkdir -p "$OUT_DIR"

OUT_FILE="$OUT_DIR/$DATE.md"

if [[ -f "$OUT_FILE" ]]; then
  echo "Already exists: $OUT_FILE" >&2
  exit 0
fi

cat >"$OUT_FILE" <<EOF
---
title: "Daily Draft — $DATE"
date: $DATE
summary: "$SUMMARY"
publishHint: "确认无敏感信息后，将此文件移动到 src/content/posts/ 并保留文件名为 $DATE.md"
---

## 今天做了什么

- 

## 关键决定/结论

- 

## 明天计划

- 
EOF

echo "Created draft: $OUT_FILE"
