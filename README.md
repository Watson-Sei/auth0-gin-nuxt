# auth0-gin-nuxt
Auth0 + Gin(golang) + Nuxt.js(JavaScript)

- [Authentication in Golang with JWTs](https://auth0.com/blog/authentication-in-golang/)

- [Invalid audience with Go API backend (Frontend: React SPA)](https://community.auth0.com/t/invalid-audience-with-go-api-backend-frontend-react-spa/60267/2)

- [gin-contrib/cors](https://github.com/gin-contrib/cors)

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
