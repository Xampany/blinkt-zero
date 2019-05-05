FROM balenalib/rpi-alpine-node:latest

RUN apk add yarn python make gcc

EXPOSE 80

# Defines our working directory in container
WORKDIR /usr/src/app

# This will copy all files in our root to the working  directory in the container
COPY . ./

# This install npm dependencies on the resin.io build server,
# making sure to clean up the artifacts it creates in order to reduce the image size.
RUN JOBS=MAX yarn --unsafe-perm && yarn cache clean && rm -rf /tmp/*

# Enable systemd init system in container
ENV INITSYSTEM=on

# server.js will run when container starts up on the device
CMD ["yarn", "start"]