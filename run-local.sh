#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT="${1:-4174}"

cd "$ROOT_DIR"
exec python3 -m http.server "$PORT"
