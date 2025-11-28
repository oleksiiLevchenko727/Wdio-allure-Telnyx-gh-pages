FROM node:18-bullseye

RUN apt-get update && apt-get install -y \
    wget gnupg --no-install-recommends && \
    wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list' && \
    apt-get update && apt-get install -y google-chrome-stable && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV CHROME_BIN=/usr/bin/google-chrome

CMD ["npx", "wdio", "./wdio/wdio.runner.js"]
