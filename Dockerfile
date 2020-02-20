FROM node:8-alpine
LABEL author=pk13055 version=1.0

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./

USER node
RUN npm install

COPY --chown=node:node . .
RUN npm run-script build

EXPOSE 5000
ENTRYPOINT ["npm", "run-script", "serve"]
