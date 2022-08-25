FROM node:18.7.0
WORKDIR /usr/src/app
COPY . . 
RUN npm install 
EXPOSE 3000
CMD ["npx", "next", "dev", "-p", "3000"]