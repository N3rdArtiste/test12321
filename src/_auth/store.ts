import { writable } from 'svelte/store'

export const authenticating = writable(false)
export const isAuthenticated = writable(null)
export const userToken = writable(null)

export const userProfile = writable(null)
