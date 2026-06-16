# Cookie Cleaner

A simple Firefox extension that deletes cookies with one click.

![Screenshot](screenshot.png)

## Features

- **Delete Page Cookies** — removes all cookies for the current website (including parent domain) and reloads the page
- **Delete All Cookies** — wipes all browser cookies

## Installation

Install from [Firefox Add-ons (AMO)](https://addons.mozilla.org/ru/firefox/addon/clean-my-cookies/).

## Manual Installation

1. Clone the repo
2. Open `about:debugging#/runtime/this-firefox` in Firefox
3. Click **Load Temporary Add-on** and select `manifest.json`

## Permissions

- `cookies` — to read and delete cookies
- `activeTab` — to access the current tab's URL
- `<all_urls>` — to remove cookies for any domain

## Privacy

This extension does **not** collect, store, or transmit any data. See [PRIVACY.md](PRIVACY.md).
