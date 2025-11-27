
FROM node:18-bullseye AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci


FROM node:18-bullseye AS production

ENV CHROME_BIN=/usr/bin/google-chrome
ENV CHROME_PATH=/usr/bin/google-chrome


RUN apt-get update && \
    apt-get install -y curl unzip wget default-jre gnupg2 jq --no-install-recommends && \
    wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt install -y ./google-chrome-stable_current_amd64.deb || apt --fix-broken install -y && \
    rm google-chrome-stable_current_amd64.deb && \
    CHROME_VERSION=$(google-chrome --version | awk '{print $3}') && \
    MAJOR=$(echo $CHROME_VERSION | cut -d '.' -f 1) && \
    URL="https://storage.googleapis.com/chrome-for-testing-public/$CHROME_VERSION/linux64/chromedriver-linux64.zip" && \
    echo "Trying exact ChromeDriver URL: $URL" && \
    wget -q "$URL" -O /tmp/chromedriver.zip || \
    (echo "Exact not found, using latest major version..." && \
     LATEST=$(curl -s https://googlechromelabs.github.io/chrome-for-testing/known-good-versions.json | jq -r ".versions[] | select(.version | startswith(\"$MAJOR.\")) | .version" | tail -1) && \
     wget -q "https://storage.googleapis.com/chrome-for-testing-public/$LATEST/linux64/chromedriver-linux64.zip" -O /tmp/chromedriver.zip) && \
    unzip /tmp/chromedriver.zip -d /usr/local/bin/ && \
    mv /usr/local/bin/chromedriver-linux64/chromedriver /usr/local/bin/chromedriver && \
    chmod +x /usr/local/bin/chromedriver && \
    rm -rf /tmp/chromedriver.zip /usr/local/bin/chromedriver-linux64 && \
    npm install -g allure-commandline --no-save --loglevel error && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app


COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=node:node /usr/src/app/package*.json ./


COPY --chown=node:node . .


USER node

CMD ["npm", "run", "test:chrome"]