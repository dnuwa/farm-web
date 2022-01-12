FROM node:10.18.0

WORKDIR /famunera-web-client

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001
CMD [ "npm", "run", "dev" ]