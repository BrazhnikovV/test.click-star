FROM node:18.17.0

# set working directory
WORKDIR /app

# add `/app/node_modules.bin` to $PATH
ENV PATH /app/node_modules.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install -g npm@10.2.5
RUN npm install
RUN npm install -g @angular/cli@17.0.8

RUN apt-get update && apt-get install -y tzdata
ENV TZ='Europe/Moscow'
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY . /app

CMD ng serve --host 0.0.0.0

