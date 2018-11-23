FROM node:8

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install app dependencies
# Copy all configs to /app folder
COPY *.json /app/
COPY .prettierrc /app/
RUN npm install

# Download wait tool
# TODO: is it actually the best way to wait for mongodb to load
RUN curl -o /wait -SL https://github.com/ufoscout/docker-compose-wait/releases/download/2.4.0/wait
RUN chmod +x /wait

# Src folder will be mounted using volumes
# in docker compose
# Needed to simplify hot files reloading

EXPOSE 3000

CMD /wait && npm run start:dev
