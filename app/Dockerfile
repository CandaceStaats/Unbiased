FROM node

RUN apt update && apt upgrade

WORKDIR /app/hackathon

COPY ./hackathon/package*.json /app/

RUN npm install

COPY ./hackathon /app/

EXPOSE 3000

CMD [ "npm", "start" ]