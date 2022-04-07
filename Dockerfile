# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/cert/huaan.me.crt /usr/nginx/huaan.me.crt
COPY --from=build /app/cert/huaan.me.key /usr/nginx/huaan.me.key
EXPOSE 80:443
CMD ["nginx", "-g", "daemon off;"]