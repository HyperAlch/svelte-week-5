<script>
	import { count } from './stores.js';
    import ButtonGroup from './ButtonGroup.svelte';


	let countValueDouble;

	// Instead of getting the default value via auto-subscriptions
	// we can use a manual subscribe and do something with the value.
	// (such as double it)
	const unsubscribe = count.subscribe(value => {
		countValueDouble = value * 2;
	});
    
</script>

<h1>The double count is {countValueDouble}</h1>
<ButtonGroup />
