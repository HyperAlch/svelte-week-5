<script>
	import { count } from './stores.js';

	function increment() {
		count.update(n => n + 1);
	}

    function decrement() {
		count.update(n => n - 1);
	}

    function reset() {
		count.set(0);
	}
</script>

<button on:click={increment}>
	+
</button>

<button on:click={decrement}>
	-
</button>

<button on:click={reset}>
	reset
</button>