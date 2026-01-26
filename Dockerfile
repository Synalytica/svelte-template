FROM oven/bun:alpine
LABEL author=pk13055 version=1.0

WORKDIR /app
COPY package*.json bun.lock* ./
RUN bun install --verbose
ADD . .

EXPOSE 5000
ENTRYPOINT ["./entrypoint.sh"]
