<script>
	import Hoverable from './Hoverable.svelte';
</script>

<!-- 
    We can use props defined instead a component directly inside slots.
    This is because the content in the slot is technically inside the component it'self  
 -->

 <!-- 
    Bind the prop named hoveringProp to a temporary variable named isActive.
    Any change to hoveringProp with reflect in isActive as well.
 -->
<Hoverable let:hoveringProp={isActive}>
    <!-- Toggle the .highlight class based on isActive -->
	<div class:highlight={isActive}>
        <!-- Changed the content of the slot base on isActive -->
		{#if isActive}
			<p>I am being hovered upon.</p>
		{:else}
			<p>Hover over me!</p>
		{/if}
	</div>
</Hoverable>

<style>
	div {
		padding: 1em;
		margin: 0 0 1em 0;
		background-color: #eee;
	}

	.highlight {
		background-color: #ff3e00;
		color: white;
	}
	
	p {
		pointer-events: none;
	}
</style>
