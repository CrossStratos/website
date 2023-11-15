FROM scratch

COPY build/website-linux.elf /app/website
COPY certs /app/certs

WORKDIR /app

CMD [ "website" ]