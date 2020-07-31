from cypress/base:12

workdir /opt

copy . .

CMD ["./start.sh"]