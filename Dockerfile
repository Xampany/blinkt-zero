FROM balenalib/rpi-alpine-node:latest

EXPOSE 8081

CMD [ "yarn start" ]