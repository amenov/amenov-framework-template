FROM node:14.17.1

WORKDIR /app

COPY . /app

RUN npm ci && npm i -g pm2

CMD npm run start
