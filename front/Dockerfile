FROM node:18

# WORKDIR /usr/src/todolist

# COPY srcs/package*.json ./

COPY srcs .

RUN npm install

CMD ["npm", "run", "serve"]
