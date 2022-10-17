FROM node:18-alpine3.15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./

# Install yarn
RUN npm install yarn

# Install npm packages using yarn
RUN yarn install

# Bundle app source
COPY . .


EXPOSE 3000

CMD [ "yarn", "start", "api" ]