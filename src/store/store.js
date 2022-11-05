import { writable } from 'svelte/store'

export const store = writable({
    tasks: ['test1', 'test2', 'test3'],
})
