FROM node

RUN apt update && apt upgrade && npm install -g @nestjs/cli

WORKDIR /app

COPY init.sh /tmp

EXPOSE 3000

ENTRYPOINT [ "bash", "/tmp/init.sh"]

CMD [ "npm", "start" ]