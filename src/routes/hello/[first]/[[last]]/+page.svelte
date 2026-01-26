<script lang="ts">
	import { page } from '$app/stores';
</script>

<h2 class="routetitle">Hi there!</h2>

<p id="nameparams">
	Your name is: <b>{$page.params.first}</b>
	{#if $page.params.last}
		<b>{$page.params.last}</b>
	{/if}
</p>
<p><em>Hint:</em> Try changing the URL and add your name, e.g. <code>/hello/jane/doe</code></p>
