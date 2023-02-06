import { readable } from 'svelte/store';

// Some times we want our stores to be read-only from the outside 
// Note that the store is still mutable from the inside 

// So what's happening here?
// 1) readable gets a date object which is our initial value
// 2) The "start" function is then ran ONCE at the creation of store
export const time = readable(new Date(), function start(set) {
    // Log to prove that this function is only run once at creation
    console.log("Store Created");

    // setInterval will keep running a function indefinitely
    // In this case we are reassigning the internal value of the `time` store via
    // the "set()" function. We set this to run every 1000 milliseconds. 
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

    // This function is only called when the store is destroyed.
    // Think of this as a "onDestroy()" component life cycle, but for stores
	return function stop() {
        // Watch your console and press the "Go Back" link.
        // You should see the message below because the store was destroyed
		console.log("Store Destroyed");
        clearInterval(interval);
	};
});