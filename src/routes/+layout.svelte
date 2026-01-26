<script lang="ts">
	import './layout.css';
	import '../App.scss';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from '$lib/components/ui/button';
	import { ThumbsUp } from 'lucide-svelte';

	let { children } = $props();

	let clicked = $state(0);
	// Contains logging information used by tests
	let logbox = $state('');

	// Dynamic links
	let dynamicLinks = $state([
		{
			id: 1,
			link: '/hello/dynamic-link-1'
		},
		{
			id: 2,
			link: '/hello/dynamic-link-2'
		},
		{
			id: 3,
			link: '/hello/dynamic-link-3'
		}
	]);

	// Navigation functions
	function goToWild() {
		goto('/wild/something');
	}

	function goBack() {
		window.history.back();
	}

	function replaceRoute() {
		goto('/wild/replaced', { replaceState: true });
	}

	// Helper to check if path is active
	function isActive(path: string): boolean {
		return $page.url.pathname === path || $page.url.pathname.startsWith(path + '/');
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
		rel="stylesheet" />
</svelte:head>

<h1>SvelteKit example</h1>
<div class="container">
	<Button onclick={() => clicked++}>
		<ThumbsUp class="size-4" />
		Click Me
	</Button>
	<p>
		{#if clicked}
			You've clicked the button {clicked} time{clicked === 1 ? '' : 's'}.
		{:else}
			<span class="grayed">You haven't clicked the button.</span>
		{/if}
	</p>
</div>

<!-- Navigation links, using SvelteKit's <a> tags -->
<ul class="navigation-links">
	<li>
		<a href="/" class:active={isActive('/')}>Home</a>
	</li>
	<li>
		<a href="/brand" class:active={isActive('/brand')}>
			<b>Brand</b>
		</a>
	</li>
	<li>
		<a href="/hello/svelte" class:active={$page.url.pathname.startsWith('/hello/')}>
			Say hi!
		</a>
	</li>
	<li>
		<a href="/does/not/exist">Not found</a>
	</li>
</ul>

<!-- Navigate with buttons -->
<p class="navigation-buttons">
	<button onclick={goToWild}>Visit /wild/something</button>
	<button onclick={goBack}>Go back</button>
	<button onclick={replaceRoute}>Replace current page</button>
</p>

<!-- Query string -->
<a href="/hello/svelte?quantity=100" class:active={$page.url.pathname.startsWith('/hello/')}>
	Querystring args
</a>

<!-- Show the current path -->
<p>
	Current path:
	<code id="currentpath">{$page.url.pathname}</code>
	<br />
	Querystring:
	<code id="currentqs">{$page.url.search}</code>
</p>

<!-- Testing dynamic list of links -->
<h2>Dynamic links</h2>
<ul class="navigation-dynamic-links">
	{#each dynamicLinks as dl (dl.id)}
		<li>
			<a id="dynamic-link-{dl.id}" href={dl.link} class:active={isActive(dl.link)}>
				Dynamic Link {dl.id}
			</a>
			-
			<button
				type="button"
				id="delete-link-{dl.id}"
				onclick={() => (dynamicLinks = dynamicLinks.filter((e) => e.id != dl.id))}
				class="delete-link-button">
				delete link
			</button>
		</li>
	{/each}
</ul>

<!-- Used for testing -->
<pre id="logbox">{logbox}</pre>

{@render children()}

<style>
	/* Style for "active" links */
	:global(a.active) {
		color: crimson;
	}
	.grayed {
		opacity: 0.6;
	}
	.delete-link-button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		font: inherit;
		cursor: pointer;
		font-style: italic;
		text-decoration: none;
		color: inherit;
	}
	.delete-link-button:hover {
		text-decoration: underline;
	}
</style>
