FROM node:8-alpine
LABEL author=pk13055 version=0.5

WORKDIR /app
RUN npm i node-sass@latest
COPY package*.json .
RUN npm install

COPY . .
EXPOSE 5000
RUN npm run-script build
ENTRYPOINT ["npm", "run-script", "serve"]
