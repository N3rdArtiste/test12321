import { writable } from 'svelte/store'

export const selectedJudgesCategoryId = writable<string>('all')
