FROM balenalib/rpi-alpine-node:latest

RUN apk add yarn

EXPOSE 8081

CMD [ "npm start" ]