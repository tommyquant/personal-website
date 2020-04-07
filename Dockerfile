FROM node:12.16-alpine

RUN apk add util-linux

CMD ["echo", "Hello"]