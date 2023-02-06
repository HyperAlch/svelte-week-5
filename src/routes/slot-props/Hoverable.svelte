<script>
	let hovering;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
    <!-- Here we define a slot prop. This prop is sent up the stack of components -->
	<slot hoveringProp={hovering}></slot>
</div>