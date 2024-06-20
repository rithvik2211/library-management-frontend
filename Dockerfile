# FROM node:lts-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY package*.json .
# RUN npm install 
# COPY . . 
# RUN npm install -g vite
# RUN npx vite --v
# EXPOSE 4173
# CMD ["npm", "run", "dev"]
##############################
# FROM node:18-alpine
FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4173
CMD [ "npm", "run", "preview" ]