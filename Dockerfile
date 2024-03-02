FROM node:21.6.2-alpine
WORKDIR /app/ai-keyword-generator
RUN npm install -g nodemon
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 2188
CMD [ "npm", "start" ]