FROM node:18

WORKDIR /app

COPY srcs/package*.json ./

RUN npm ci

COPY srcs/ .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]