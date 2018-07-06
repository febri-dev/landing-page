FROM node:alpine
WORKDIR /srv/app

COPY . .
RUN yarn install

EXPOSE 6796
ENV NODE_ENV=production
RUN yarn build
CMD [ "node", "server.js" ]
