import { writable } from 'svelte/store'

export const selectedPastWinnersCategoryId = writable<string>('all')
