FROM node:18.18 as build-stage

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve
ENTRYPOINT []
CMD ["serve", "-s", "build"]
