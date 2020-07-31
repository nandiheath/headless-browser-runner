from cypress/base:12

workdir /opt

copy . .

RUN yarn install

CMD ["./start.sh"]