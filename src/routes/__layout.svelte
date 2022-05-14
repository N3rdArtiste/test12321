<script context="module" type="ts">
    import { Client, operationStore, query } from '@urql/svelte'

    import { get, writable } from 'svelte/store'

    import { HeaderAndFooterDocument } from '_config/graphql-tags/graphql-tags-generated'
    import { client } from '_config/graphql-client'

    export const load: Load = async ({ session }) => {
        const _client = client(session.directusURL)
        const getOperationStore = async (queryDocument: DocumentNode, variables?: Object): Promise<OperationStore> => {
            const store = operationStore(queryDocument, variables)
            const result = await _client.query(queryDocument, variables).toPromise()
            Object.assign(get(store), result)
            return store
        }
        return {
            props: { _client, headerAndFooterContent: writable({
  "data": {
    "header": {
      "id": "1",
      "logo": {
        "id": "a813faa8-493e-4ff2-90ba-31de57d714ad",
        "filename_disk": "a813faa8-493e-4ff2-90ba-31de57d714ad.svg",
        "description": null,
        "svg_code": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122 69.735\">\n  <defs>\n    <clipPath id=\"a\">\n      <path data-name=\"Path 199\" d=\"M0-59.633h122v-69.735H0Z\" transform=\"translate(0 129.368)\"/>\n    </clipPath>\n  </defs>\n  <g data-name=\"Group 2\" clip-path=\"url(#a)\">\n    <g data-name=\"Group 1\">\n      <path data-name=\"Path 198\" d=\"M38.05 19.459 17.216 69.735H7.161l6.51-16.06L0 19.459h10.488l8.536 22.063 8.825-22.063Zm5.857-12.514a6.979 6.979 0 0 0 6.872 6.944 6.979 6.979 0 0 0 6.872-6.944A6.931 6.931 0 0 0 50.779 0a6.931 6.931 0 0 0-6.872 6.945m46.672 37.76c-1.23 2.6-3.761 3.906-7.162 3.906-4.774 0-9.114-4.051-9.114-10.345 0-6.8 4.63-10.344 9.042-10.344a7.949 7.949 0 0 1 7.234 3.833Zm-25.825-6.438c0 11.792 8.391 19.387 17.361 19.387 4.557 0 7.017-1.373 8.463-3.183V57h9.4V19.459h-9.4v2.459c-1.736-2.026-4.558-3.038-8.247-3.038-9.043 0-17.577 7.741-17.577 19.387M122 61.449a6.872 6.872 0 1 0-6.872 6.945A6.979 6.979 0 0 0 122 61.449m-76-4.445h9.549V19.459H46Zm73.9-45.613h-9.547v37.544h9.549Z\"/>\n    </g>\n  </g>\n</svg>\n"
      }
    },
    "footer": {
      "id": "1",
      "text": "yia! is creating tomorrow’s innovators in local schools and preparing our future workforce with the skills they need to compete in a rapidly changing work environment.",
      "copyright_text": "© 2022 Young Innovator Awards",
      "footer_logo": {
        "id": "a47ad6ee-0beb-4c87-ae77-dc7adb048a21",
        "filename_disk": "a47ad6ee-0beb-4c87-ae77-dc7adb048a21.svg",
        "description": null,
        "svg_code": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122 69.735\">\n  <defs>\n    <clipPath id=\"a\">\n      <path data-name=\"Path 199\" d=\"M0-59.633h122v-69.735H0Z\" transform=\"translate(0 129.368)\"/>\n    </clipPath>\n  </defs>\n  <g data-name=\"Group 2\" clip-path=\"url(#a)\">\n    <g data-name=\"Group 1\">\n      <path data-name=\"Path 198\" d=\"M38.05 19.459 17.216 69.735H7.161l6.51-16.06L0 19.459h10.488l8.536 22.063 8.825-22.063Zm5.857-12.514a6.979 6.979 0 0 0 6.872 6.944 6.979 6.979 0 0 0 6.872-6.944A6.931 6.931 0 0 0 50.779 0a6.931 6.931 0 0 0-6.872 6.945m46.672 37.76c-1.23 2.6-3.761 3.906-7.162 3.906-4.774 0-9.114-4.051-9.114-10.345 0-6.8 4.63-10.344 9.042-10.344a7.949 7.949 0 0 1 7.234 3.833Zm-25.825-6.438c0 11.792 8.391 19.387 17.361 19.387 4.557 0 7.017-1.373 8.463-3.183V57h9.4V19.459h-9.4v2.459c-1.736-2.026-4.558-3.038-8.247-3.038-9.043 0-17.577 7.741-17.577 19.387M122 61.449a6.872 6.872 0 1 0-6.872 6.945A6.979 6.979 0 0 0 122 61.449m-76-4.445h9.549V19.459H46Zm73.9-45.613h-9.547v37.544h9.549Z\"/>\n    </g>\n  </g>\n</svg>\n"
      }
    },
    "partners": [
      {
        "id": "11",
        "link": "https://www.priorityone.co.nz/",
        "image": {
          "id": "d09ddebb-03a3-4c13-99fd-8e4eb0e60921",
          "filename_disk": "d09ddebb-03a3-4c13-99fd-8e4eb0e60921.png",
          "description": null,
          "svg_code": null
        }
      },
      {
        "id": "7",
        "link": "https://www.priorityone.co.nz/",
        "image": {
          "id": "8d6f3d20-9f0d-4b70-a0ca-7c7e84a37f96",
          "filename_disk": "8d6f3d20-9f0d-4b70-a0ca-7c7e84a37f96.png",
          "description": null,
          "svg_code": null
        }
      },
      {
        "id": "6",
        "link": "https://www.woodsagency.nz/",
        "image": {
          "id": "60020842-5308-4217-987f-268fb3668790",
          "filename_disk": "60020842-5308-4217-987f-268fb3668790.png",
          "description": null,
          "svg_code": null
        }
      },
      {
        "id": "8",
        "link": "https://bluelab.com/",
        "image": {
          "id": "c62bdcbb-47e3-4e65-8594-a32fe811bd9e",
          "filename_disk": "c62bdcbb-47e3-4e65-8594-a32fe811bd9e.png",
          "description": null,
          "svg_code": null
        }
      },
      {
        "id": "5",
        "link": "https://www.cucumber.co.nz/",
        "image": {
          "id": "16b18fe4-ad4f-46be-a74f-a755fce8511e",
          "filename_disk": "16b18fe4-ad4f-46be-a74f-a755fce8511e.png",
          "description": null,
          "svg_code": null
        }
      },
      {
        "id": "10",
        "link": "https://www.toikairawa.co.nz/",
        "image": {
          "id": "f0e1d02c-7fab-433d-923d-23a9cb0a52be",
          "filename_disk": "f0e1d02c-7fab-433d-923d-23a9cb0a52be.png",
          "description": null,
          "svg_code": null
        }
      }
    ],
    "our_sponsors": [
      {
        "id": "9",
        "image": {
          "filename_disk": "ea81a8bc-1889-47a4-aa29-352ee2efb897.svg",
          "id": "ea81a8bc-1889-47a4-aa29-352ee2efb897",
          "description": null,
          "svg_code": "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"139\" height=\"88\" viewBox=\"0 0 139 88\"><image width=\"139\" height=\"88\" xlink:href=\"data:image/png;base64,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\"/></svg>"
        },
        "link": "https://www.bayfair.co.nz/"
      },
      {
        "id": "11",
        "image": {
          "filename_disk": "49da1b3c-1f9e-4ea7-9aaa-eb30b7e824cd.svg",
          "id": "49da1b3c-1f9e-4ea7-9aaa-eb30b7e824cd",
          "description": null,
          "svg_code": "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"244\" height=\"61.394\" viewBox=\"0 0 244 61.394\"><image width=\"244\" height=\"61.394\" xlink:href=\"data:image/jpeg;base64,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\"/></svg>"
        },
        "link": "https://www.roboticsplus.co.nz/"
      },
      {
        "id": "10",
        "image": {
          "filename_disk": "2dae10cf-b5f4-48a2-b480-1dcd4d36738d.png",
          "id": "2dae10cf-b5f4-48a2-b480-1dcd4d36738d",
          "description": null,
          "svg_code": null
        },
        "link": "https://www.beca.com/"
      },
      {
        "id": "13",
        "image": {
          "filename_disk": "b0d023b4-b88f-423b-b3e6-2837fd8f5983.png",
          "id": "b0d023b4-b88f-423b-b3e6-2837fd8f5983",
          "description": null,
          "svg_code": null
        },
        "link": "https://www.page-macrae.co.nz/"
      },
      {
        "id": "14",
        "image": {
          "filename_disk": "28b4f864-7ea2-48d1-85af-7913a7523442.png",
          "id": "28b4f864-7ea2-48d1-85af-7913a7523442",
          "description": null,
          "svg_code": null
        },
        "link": "https://www.tauranga.govt.nz/"
      },
      {
        "id": "12",
        "image": {
          "filename_disk": "ff48c768-6567-4f2c-aa6a-801d569769c8.png",
          "id": "ff48c768-6567-4f2c-aa6a-801d569769c8",
          "description": null,
          "svg_code": null
        },
        "link": "https://www.waikato.ac.nz/"
      }
    ],
    "social_media_links": [
      {
        "id": "6",
        "link": "https://www.facebook.com/YoungInnovatorAwards",
        "image": {
          "id": "b2e580d2-da95-43ad-86c7-ec69cb706ae5",
          "filename_disk": "b2e580d2-da95-43ad-86c7-ec69cb706ae5.svg",
          "description": null,
          "svg_code": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.356\" height=\"16\" viewBox=\"0 0 8.356 16\">\n  <path id=\"Path_1\" data-name=\"Path 1\" d=\"M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z\" transform=\"translate(-80)\" fill-rule=\"evenodd\"/>\n</svg>\n"
        }
      },
      {
        "id": "4",
        "link": "https://twitter.com/YIA_NZ",
        "image": {
          "id": "1dad7e5b-4998-45a7-8529-9f54bcd9c97a",
          "filename_disk": "1dad7e5b-4998-45a7-8529-9f54bcd9c97a.svg",
          "description": null,
          "svg_code": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"12.978\" viewBox=\"0 0 16 12.978\">\n  <path id=\"Path_2\" data-name=\"Path 2\" d=\"M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6\" transform=\"translate(-38 -2)\" fill-rule=\"evenodd\"/>\n</svg>\n"
        }
      },
      {
        "id": "5",
        "link": "https://www.instagram.com/yia_nz/",
        "image": {
          "id": "784a6c2a-de83-47d9-b298-4c3eb41de672",
          "filename_disk": "784a6c2a-de83-47d9-b298-4c3eb41de672.svg",
          "description": null,
          "svg_code": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n  <path id=\"Path_3\" data-name=\"Path 3\" d=\"M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978\" fill-rule=\"evenodd\"/>\n</svg>\n"
        }
      },
      {
        "id": "8",
        "link": "mailto:projectmanager@yia.co.nz",
        "image": {
          "id": "96c86ffb-8b00-4ce9-b1cc-f03dd54f5193",
          "filename_disk": "96c86ffb-8b00-4ce9-b1cc-f03dd54f5193.svg",
          "description": null,
          "svg_code": "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"25\" height=\"18\" viewBox=\"0 0 256 256\" xml:space=\"preserve\">\n<desc>Created with Fabric.js 1.7.22</desc>\n<defs>\n</defs>\n<g transform=\"translate(128 128) scale(0.72 0.72)\" style=\"\">\n\t<g style=\"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;\" transform=\"translate(-175.05 -175.05) scale(3.89 3.89)\" >\n\t<path d=\"M 80.89 78.772 H 9.11 c -5.023 0 -9.11 -4.087 -9.11 -9.11 V 20.338 c 0 -5.023 4.087 -9.11 9.11 -9.11 h 71.78 c 5.023 0 9.11 4.087 9.11 9.11 v 49.324 C 90 74.686 85.913 78.772 80.89 78.772 z M 9.11 17.228 c -1.715 0 -3.11 1.396 -3.11 3.11 v 49.324 c 0 1.715 1.395 3.11 3.11 3.11 h 71.78 c 1.715 0 3.11 -1.396 3.11 -3.11 V 20.338 c 0 -1.715 -1.396 -3.11 -3.11 -3.11 H 9.11 z\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\" />\n\t<path d=\"M 45 55.427 c -5.408 0 -10.599 -2.292 -14.242 -6.288 L 2.493 18.125 l 4.435 -4.042 l 28.265 31.013 c 2.545 2.792 6.028 4.331 9.807 4.331 c 3.779 0 7.262 -1.538 9.808 -4.331 l 28.266 -31.013 l 4.434 4.042 L 59.241 49.138 C 55.599 53.135 50.408 55.427 45 55.427 z\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\" />\n\t<rect x=\"-0.96\" y=\"57.16\" rx=\"0\" ry=\"0\" width=\"38.98\" height=\"6\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;\" transform=\" matrix(0.7053 -0.7089 0.7089 0.7053 -37.1881 30.8639) \"/>\n\t<rect x=\"68.47\" y=\"40.67\" rx=\"0\" ry=\"0\" width=\"6\" height=\"38.98\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;\" transform=\" matrix(0.709 -0.7053 0.7053 0.709 -21.628 67.9146) \"/>\n</g>\n</g>\n</svg>"
        }
      }
    ]
  }
}) },
            stuff: {
                getOperationStore,
            },
        }
    }
</script>

<script type="ts">
    export let _client: Client
    export let headerAndFooterContent: any
    import 'styles/global.scss'

    import { setClient } from '@urql/svelte'

    import { onMount } from 'svelte'
    import { isLoading } from 'stores/ui'

    import Header from 'components/page/header.svelte'
    import Footer from 'components/page/footer.svelte'
    import type { DocumentNode } from 'graphql'

    setClient(_client)
    // query(headerAndFooterContent)

    onMount(() => {
        if ($isLoading) {
            const appWrapper = document.getElementById('svelte') as HTMLElement
            appWrapper.style.display = 'block'
            setTimeout(() => {
                appWrapper.style.filter = 'none'
            }, 300)
        }
        $isLoading = false
    })
</script>

{#if $headerAndFooterContent.data}
    <Header data={$headerAndFooterContent?.data} />
    <main id="content">
        <slot />
    </main>
    <Footer data={$headerAndFooterContent?.data} />
{/if}

<style lang="scss">
    #content {
        display: grid;
        transition: background-color 0.3s;
        background-color: var(--color-primary);

        min-height: calc(100vh - var(--header-height));
        padding-top: calc(2rem + var(--header-height));
        align-content: flex-start;
        @media (min-width: 769px) {
            padding-top: calc(6.2rem + var(--header-height));
        }
    }
</style>
