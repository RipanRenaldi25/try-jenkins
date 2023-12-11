FROM node:18-alpine as development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD npm run start

FROM node:18-alpine as production
WORKDIR /app
COPY package*.json /app
RUN npm install
RUN npx tsc --build
COPY ./dist /app
CMD npm run start:prod