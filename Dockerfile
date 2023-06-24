FROM node:20-alpine as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn prepack


FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/bin ./bin
COPY --from=builder /app/npm-shrinkwrap.json ./npm-shrinkwrap.json
COPY --from=builder /app/oclif.manifest.json ./oclif.manifest.json

RUN yarn link

ENTRYPOINT ["docker-hash-build"]
