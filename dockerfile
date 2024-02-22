# Use official Node.js 16 image as base
FROM node:18

WORKDIR /usr/src/app


COPY . .
COPY package*.json ./

RUN npm ci

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]
