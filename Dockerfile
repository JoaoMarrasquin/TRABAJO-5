FROM node:19.2-alpine3.16 as Build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:19.2-alpine3.16 as Deps-Produ
WORKDIR /app
COPY package.json ./
RUN npm install --prod

FROM node:19.2-alpine3.16 as Produccion
WORKDIR /app
COPY --from=Build /app/dist ./dist
COPY --from=Deps-Produ /app/node_modules ./node_modules
ENV NODE_ENV='production'
ENV DB_PASSWORD='bYxTjMSTca6hv7wFwUST'
ENV DB_NAME='prueba'
ENV DB_HOST='containers-us-west-70.railway.app'
ENV DB_PORT='7471'
ENV DB_USERNAME='postgres'
EXPOSE 3000

CMD [ "node", "dist/main"]