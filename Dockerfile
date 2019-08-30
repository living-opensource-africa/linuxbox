FROM node:10

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY . .

RUN npm install

EXPOSE 9000:9000

CMD ["node", "app.js"]