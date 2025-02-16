FROM oven/bun:1.2.2-distroless
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "bun.lock", "./"]
RUN bun i --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["bun", "start"]
