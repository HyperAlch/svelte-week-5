<script>
	import Box from './Box.svelte';
</script>

<!-- 
    In the past, we have used props to pass displayable content into components, 
    but there is a better way: slots
 -->

 <!-- Still pass non-content related data via props -->
<Box bgColor="grey"> 
    <!-- Put the content in between the beginning and ending tags of your component -->
	<h2>Hello!</h2>
	<p>This is a box. It can contain anything.</p>
</Box>