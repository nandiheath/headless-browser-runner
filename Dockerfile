from cypress/included:3.2.0

workdir /opt

copy . .

RUN yarn install

CMD ["yarn", "listen"]
