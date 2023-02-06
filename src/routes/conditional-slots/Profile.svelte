<section>
	<div>Name</div>
    <!-- The name slot is always here -->
	<slot name="name" />

    <!-- The email and phone slot only render if they are provided by the part component -->
	{#if $$slots.email}
		<div>Email</div>
		<slot name="email" />
	{/if}
	{#if $$slots.phone}
		<div>Phone</div>
		<slot name="phone" />
	{/if}
</section>

<style>
	section {
		width: 200px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 16px;
		box-shadow: 2px 2px 4px #dedede;
		border: 1px solid #888;
		margin-bottom: 16px;
	}
</style>