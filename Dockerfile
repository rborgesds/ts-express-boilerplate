FROM node:12-alpine as builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:12-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder app/dist /app/dist
COPY package*.json /app/
RUN npm ci
EXPOSE 3000
CMD [ "npm", "start" ]