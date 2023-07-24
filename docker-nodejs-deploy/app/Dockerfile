FROM node:lts

WORKDIR /usr/src/app

# first copy packages file. It will install npm packages ONLY if the 
#   pacjage.json file has changed, i.e some new packages installed
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
