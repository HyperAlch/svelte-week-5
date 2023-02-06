import { readable, derived } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const start = new Date();

// We can piggy back off the time store and perform operations to create a unique
// store that is synced with it's parent 
export const elapsed = derived(
	time,
	$time => Math.round(($time - start) / 1000)
);