from cypress/included

workdir /opt

copy . .

RUN yarn install

CMD ["./start.sh"]