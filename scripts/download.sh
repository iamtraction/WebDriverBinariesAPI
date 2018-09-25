#!/usr/bin/env bash
set -e

# Run Chrome WebDriver downloader script.
python ./scripts/chrome.py

# Run Firefox WebDriver downloader script.
python ./scripts/firefox.py
