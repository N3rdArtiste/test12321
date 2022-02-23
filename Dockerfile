FROM node:16-alpine

ENV VITE_DIRECTUS_URL=https://yia-cms-qa.dev.eks.cucumbersoftware.com
ENV VITE_GRAPHQL_URL=https://yia-cms-qa.dev.eks.cucumbersoftware.com/graphql

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

EXPOSE 3000
CMD ["node", "index.js"]
