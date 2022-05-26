
# Stage 1
FROM node:lts as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
EXPOSE 4200
COPY --from=node /app/dist/bonbon /usr/share/nginx/html
CMD [ "sh", "-c", "ng serve -o --watch" ]
