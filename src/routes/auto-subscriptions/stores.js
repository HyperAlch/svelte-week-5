import { readable, writable } from 'svelte/store';

// Writable Stores have a misleading name
// In reality a Writable Store can:
//      1) Write / edit it's internal state
//      2) Read it's internal state
export const count = writable(0);