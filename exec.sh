#!/bin/sh
export $(cat ./backend/.env | grep -v ^# | xargs);
cd ./frontend && npm run dev & cd ./backend && go run main.go & echo $AUTH0_DOMAIN
wait
echo "終了しました"