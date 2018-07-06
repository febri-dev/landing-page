FROM node:alpine
WORKDIR /srv/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 6796
ENV NODE_ENV=production
CMD [ "node", "server.js" ]
