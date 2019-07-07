FROM golang:alpine3.10

USER root
RUN apk update
RUN apk add hugo

COPY ./ /site

WORKDIR /site

CMD ["hugo"]
