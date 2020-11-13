# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /soceton-world-frontend

# add `/reactApp/node_modules/.bin` to $PATH
ENV PATH /soceton-world-frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
# RUN npm cache verify
# RUN npm cache clean --force
RUN npm ci --production
RUN npm install
RUN npm install --no-package-lock
RUN npm install react-scripts@3.4.1 -g
RUN npm install -g npm-install-peers
RUN npm-install-peers

# add app
COPY . ./

# start app
CMD ["npm", "start"]
