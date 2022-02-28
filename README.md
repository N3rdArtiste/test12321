## Developing

Once you've cloned the project and installed dependencies with `npm install`, run the following command to make the .env file effective:

```sh
cp .env.bac .env
```

then start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Generating

create schema file in `./src/schemas/foo.gql`
each block needs to have an `id` field for caching handling with @urql

run:

```sh
npm run generate
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## Code formatting

install: [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

```text
Name: Prettier - Code formatter
Id: esbenp.prettier-vscode
Description: Code formatter using prettier
Publisher: Prettier
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
```

## Typescript required knowledge

```typescript
/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
    [P in K]: T
}

/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P]
}

/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

/**
 * Make all properties in T required
 */
type Required<T> = {
    [P in keyof T]-?: T[P]
}
```
