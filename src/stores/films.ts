import { writable } from 'svelte/store'

export const films = writable<Film[]>([])
