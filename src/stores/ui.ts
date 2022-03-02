import { writable } from 'svelte/store'
import { browser } from '$app/env'

// let nzDate = ( new Date().getUTCHours() + 12 ) % 24
// let nightTime = nzDate > 19 || nzDate < 7

export const isLoading = writable<boolean>(true)

export const darkTheme = writable<boolean>((browser && localStorage.getItem('darkTheme') == 'true') || false)
export const displayHelp = writable<boolean>((browser && localStorage.getItem('displayHelp') == 'true') || true)

export const isMobile = writable<boolean>(browser && !!navigator.userAgent.toLowerCase().match(/mobile/g))
export const isMobileWeb = writable<boolean>(browser && !!navigator.userAgent.toLowerCase().match(/mobile/g) && !!window.matchMedia('(display-mode: browser)').matches)
export const isMobileApp = writable<boolean>(browser && !!window.matchMedia('(display-mode: standalone)').matches)

export const isSafari = writable<boolean>(browser && navigator.vendor.substring(0, 5) == 'Apple')
export const isChrome = writable<boolean>(browser && navigator.vendor.substring(0, 6) == 'Google')
export const isFirefox = writable<boolean>(browser && navigator.vendor.substring(0, 7) == 'Mozilla')
export const isIE = writable<boolean>(browser && navigator.vendor.substring(0, 9) == 'Microsoft')

export const burgerOpen = writable<boolean>(false)
export const navDrawerOpen = writable<boolean>(false)
export const drawerOpenedTitle = writable('')

export const deferredPrompt = writable<Event | null>(null) // for user to download app
