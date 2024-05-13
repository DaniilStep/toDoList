#STAGE 1
FROM node:18-alpine as build

WORKDIR /usr/src/test
COPY . .
RUN echo no | npm i @angular/cli
RUN echo no | npm i
CMD echo no | node_modules/.bin/ng build

#STAGE 2
FROM nginx:1.17.1-alpine as run
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/test/dist/to-do-list/browser /usr/share/nginx/html/test
