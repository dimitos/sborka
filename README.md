# Краснодар. Строительная компания.

## Установка зависимостей

```bash
composer install
```

```bash
npm install
```

## Папки артефактов сборки фронтенда

Создать следующие каталоги:

- `/dist/css/dev`
- `/dist/css/prod`
- `/dist/js`

## Папка шаблонов smarty

Создать каталог
- `/cache/templates`

## Локальные настройки (!! не заливать на сервер)
Необходимо создать файл .env в корне с переменными:
- MODE - "prod" или "dev"
- DB_HOST
- DB_USER
- DB_PASS
- DB_NAME
- SMSC_LOGIN
- SMSC_PASSWORD

## Таски Gulp

- `styles` - билдит стили
- `scripts` - билдит скрипты
- `build` - билдит стили и скрипты
- `default` - билдит стили, скрипты и поднимает dev-сервер для локальной разработки

## Запуск dev-сервера для локальной разработки

```bash
npm run serve
```

или

```bash
npx gulp
```
