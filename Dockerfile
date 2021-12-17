# stage0
# stage1
FROM nginx:alpine AS RUN-stage
USER root

## Remove default nginx index page

# Copy from the stage 1
COPY ./build /usr/share/nginx/html
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# start app 
# CMD ["npm", "start"]