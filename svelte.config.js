import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter({
            // if true, will create a Netlify Edge Function rather
            // than using standard Node-based functions
            edge: true,
        }),
        vite: {
            optimizeDeps: {
                exclude: ['@urql/svelte'],
            },
            server: {
                fs: {
                    allow: [
                        './src', // default
                        './api', // static api for quick dev
                    ],
                },
            },

            resolve: {
                alias: {
                    api: path.resolve('./api'),
                    _auth: path.resolve('./src/_auth'),
                    _config: path.resolve('./src/_config'),
                    constants: path.resolve('./src/_config/constants'),
                    enums: path.resolve('./src/_config/enumerations'),
                    types: path.resolve('./src/_config/typeDefs'),
                    assets: path.resolve('./src/assets'),
                    components: path.resolve('./src/components'),
                    helpers: path.resolve('./src/helpers'),
                    generated: path.resolve('./src/generated'),
                    modules: path.resolve('./src/modules'),
                    resolvers: path.resolve('./src/resolvers'),
                    schemas: path.resolve('./src/schemas'),
                    services: path.resolve('./src/services'),
                    styles: path.resolve('./src/styles'),
                    stores: path.resolve('./src/stores'),
                    utilities: path.resolve('./src/utilities'),
                },
            },
        },
    },
}

export default config
