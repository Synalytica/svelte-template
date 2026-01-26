<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let users: string[] = [];

	onMount(async () => {
		try {
			const response = await fetch('/api/core/');
			const data = await response.json();
			users = Object.keys(data.users || {});
			console.log(users);
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	});
</script>

<div id="users">
	{#each users as user}
		<div>{JSON.stringify(user)}</div>
	{/each}
</div>
