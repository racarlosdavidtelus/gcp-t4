FROM node:16-alpine
WORKDIR /backendTarea4
COPY . .
RUN npm install
ENV MYSQL_HOST default
ENV MYSQL_USER default
ENV MYSQL_PASSWORD default
ENV MYSQL_DATABASE default   
ENV VM_NAME=default
EXPOSE 2000
CMD ["npm","start"]