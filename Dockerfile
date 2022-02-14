FROM node:16-alpine

# install dependencies
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci

# Copy all local files into the image.
COPY . .

RUN npm install
RUN npm run build

###
# Only copy over the Node pieces we need
# ~> Saves 35MB
###
# COPY --from=build /app/package.json /app/.svelte-kit/build /app/

WORKDIR /usr/src/app/build

EXPOSE 3131
CMD ["npx", "serve"]