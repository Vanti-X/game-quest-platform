FROM node:18-slim

WORKDIR /app

# Устанавливаем зависимости для разработки
COPY package.json package-lock.json* ./
RUN npm install

# Устанавливаем NestJS CLI глобально
RUN npm install -g @nestjs/cli

# Остальные файлы будут монтироваться как том

EXPOSE 3001

CMD ["npm", "run", "start:dev"]