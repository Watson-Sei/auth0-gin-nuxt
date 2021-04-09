# auth0-gin-nuxt
Auth0 + Gin(golang) + Nuxt.js(JavaScript)

## クイックスタート

フロント側とバック側の環境変数ファイルに設定する。

```
# ./backend/.env

AUTH0_IDENTIFIER="YOUR_IDENTIFIER"
AUTH0_DOMAIN="YOUR_DOMAIN"
```

```
# ./frontend/.env

AUTHENTICATION_AUTH0_DOMAIN="YOUR_DOMAIN"
AUTHENTICATION_AUTH0_CLIENT_ID="YOUR_CLIENT_ID"
AUTHENTICATION_AUTH0_AUDIENCE="YOUR_AUDIENCE"
```

実行

```shell
sh exec.sh
```
