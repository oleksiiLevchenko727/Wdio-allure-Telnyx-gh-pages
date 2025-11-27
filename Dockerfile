FROM selenium/standalone-chrome:134.0-20250323
WORKDIR /app
ADD . /app

RUN npm install

CMD npx wdio
