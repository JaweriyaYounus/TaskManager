FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=10s \
  CMD curl --fail http://localhost:5000/health || exit 1

CMD ["npm", "start"]