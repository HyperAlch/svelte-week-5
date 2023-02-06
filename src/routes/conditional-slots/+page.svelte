<script>
	import Profile from "./Profile.svelte";
</script>

<!-- Only display name and email -->
<Profile>
	<span slot="name">Bob</span>
	<span slot="email">bob@email.com</span>
</Profile>

<!-- Only display name and phone -->
<Profile>
	<span slot="name">Alice</span>
	<span slot="phone">12345678</span>
</Profile>

<!-- Display all 3 -->
<Profile>
	<span slot="name">Joe</span>
    <span slot="email">joe@email.com</span>
	<span slot="phone">12335674</span>
</Profile>