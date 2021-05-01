FROM node:15.11.0-alpine3.13 AS base
WORKDIR /base
COPY package.json yarn.lock ./
RUN yarn install

FROM node:15.11.0-alpine3.13
WORKDIR /base
COPY --from=base /base ./
COPY . .
RUN yarn build

CMD [ "yarn", "start", "-p", "3001" ]
EXPOSE 3001
