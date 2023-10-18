# This dockerfile is loosly based on https://www.tomray.dev/nestjs-docker-production

FROM node

RUN apt update && apt upgrade

WORKDIR /app

COPY ./hackathon/package*.json /app/

RUN npm install

COPY ./hackathon /app/

# Create dist folder
RUN npm run build

EXPOSE 3000

CMD [ "node", "/app/dist/main.js" ]