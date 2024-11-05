FROM public.ecr.aws/docker/library/node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application (if required)
RUN npm run build

EXPOSE 3000
CMD ["node", "app.js"]