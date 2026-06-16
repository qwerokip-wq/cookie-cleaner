# Cookie Cleaner

Простое расширение для Firefox, которое удаляет куки одним нажатием.

A simple Firefox extension that deletes cookies with one click.

![Screenshot](screenshot.png)

## Возможности / Features

- **Удалить куки страницы** — удаляет все куки для текущего сайта (включая родительский домен) и перезагружает страницу
- **Delete Page Cookies** — removes all cookies for the current website (including parent domain) and reloads the page
- **Удалить все куки** — очищает все куки в браузере
- **Delete All Cookies** — wipes all browser cookies

## Установка / Installation

Установить из [Firefox Add-ons (AMO)](https://addons.mozilla.org/firefox/addon/cookie-cleaner/).

Install from [Firefox Add-ons (AMO)](https://addons.mozilla.org/firefox/addon/cookie-cleaner/).

## Ручная установка / Manual Installation

1. Клонируйте репозиторий / Clone the repo
2. Откройте `about:debugging#/runtime/this-firefox` в Firefox / Open `about:debugging#/runtime/this-firefox` in Firefox
3. Нажмите **Временное дополнение** и выберите `manifest.json` / Click **Load Temporary Add-on** and select `manifest.json`

## Разрешения / Permissions

- `cookies` — чтение и удаление кук / to read and delete cookies
- `activeTab` — доступ к URL текущей вкладки / to access the current tab's URL
- `<all_urls>` — удаление кук для любого домена / to remove cookies for any domain

## Конфиденциальность / Privacy

Расширение **не** собирает, не хранит и не передаёт никаких данных. См. [PRIVACY.md](PRIVACY.md).

This extension does **not** collect, store, or transmit any data. See [PRIVACY.md](PRIVACY.md).
