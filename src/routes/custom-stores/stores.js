import { writable } from 'svelte/store';

function createCount() {
    // Pull the features we need out of writable
	const { subscribe, set, update } = writable(0);

    // Setup the store functionality
	return {
        // Needed in order for count to be subscribable 
		subscribe,
        // An internal implementation of increment 
		increment: () => update(n => n + 1),
        // An internal implementation of decrement
		decrement: () => update(n => n - 1),
        // An internal implementation of reset
		reset: () => set(0)
	};
}

// Export the custom store object we created 
export const count = createCount();