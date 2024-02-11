FROM node:20-alpine

WORKDIR /app

COPY package* yarn.lock .pnp*  ./
COPY .yarnrc.yml               ./
COPY .yarn                     .yarn

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
