<script>
	import { count } from './stores.js';
</script>

<h1>The count is {$count}</h1>

<!-- 
    Instead of mutating a store by accessing it's value directly,
    we can also create internal functions to do the same thing
-->
<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>