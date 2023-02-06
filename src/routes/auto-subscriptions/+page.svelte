<script>
	import { count } from './stores.js';
    import ButtonGroup from './ButtonGroup.svelte';
</script>

<!-- Use the count store directly via auto subscription -->
<h1>The count is {$count}</h1>
<ButtonGroup />
