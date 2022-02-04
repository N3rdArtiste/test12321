import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            scss: {
                prependData: '@use "src/variables.scss" as *;',
            },
        }),
    ],

    kit: {
        adapter: adapter({ fallback: '200.html' }),

        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',

        vite: {
            optimizeDeps: {
                exclude: ['@urql/svelte'],
            },

            resolve: {
                alias: {
                    _config: path.resolve('./src/_config'),
                    constants: path.resolve('./src/_config/constants'),
                    enums: path.resolve('./src/_config/enumerations'),
                    types: path.resolve('./src/_config/typeDefs'),
                    components: path.resolve('./src/components'),
                    helpers: path.resolve('./src/helpers'),
                    generated: path.resolve('./src/generated'),
                    modules: path.resolve('./src/modules'),
                    schemas: path.resolve('./src/schemas'),
                    services: path.resolve('./src/services'),
                    stores: path.resolve('./src/stores'),
                    utilities: path.resolve('./src/utilities'),
                },
            },

            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@use "src/variables.scss" as *;',
                    },
                },
            },
        },
    },
}

export default config
