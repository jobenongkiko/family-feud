FROM node:20

RUN npm install -g yarn -f

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "yarn build && yarn start"]