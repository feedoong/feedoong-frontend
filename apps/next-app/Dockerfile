FROM node:20-alpine

WORKDIR /app

COPY ./apps/next-app/package*  ./
COPY yarn.lock .pnp*           ./
COPY .yarnrc.yml               ./
COPY .yarn                     .yarn

RUN yarn install

COPY ./apps/next-app .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
