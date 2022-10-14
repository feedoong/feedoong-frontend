FROM node:16.18.0-alpine

WORKDIR /app

COPY package.json yarn.lock* ./

RUN yarn set version berry 
RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
