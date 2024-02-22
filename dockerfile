# Use official Node.js 16 image as base
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --verbose

COPY . .

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]
