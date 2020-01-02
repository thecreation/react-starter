FROM node:10

ENV WORKDIR /app

WORKDIR ${WORKDIR}
ADD . $WORKDIR

RUN npm install

EXPOSE 8080