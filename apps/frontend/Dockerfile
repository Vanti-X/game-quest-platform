FROM node:18-slim

WORKDIR /app

# Устанавливаем зависимости для разработки
COPY package.json package-lock.json* ./
RUN npm install

# Устанавливаем глобальные утилиты, если нужно
RUN npm install -g next

# Остальные файлы будут монтироваться как том

EXPOSE 3000

CMD ["npm", "run", "dev"]