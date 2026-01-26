<script lang="ts">
	import './layout.css';
	import '../App.scss';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import Button, { Label, Icon } from '@smui/button';

	let { children } = $props();

	let clicked = 0;
	// Contains logging information used by tests
	let logbox = '';

	// Dynamic links
	let dynamicLinks = [
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
	];

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
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono" />
</svelte:head>

<h1>SvelteKit example</h1>
<div class="container">
	<Button on:click={() => clicked++}>
		<Icon class="material-icons">thumb_up</Icon>
		<Label>Click Me</Label>
	</Button>
	<p class="mdc-typography--body1">
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
	<button on:click={goToWild}>Visit /wild/something</button>
	<button on:click={goBack}>Go back</button>
	<button on:click={replaceRoute}>Replace current page</button>
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
			<i
				id="delete-link-{dl.id}"
				on:click={() => (dynamicLinks = dynamicLinks.filter((e) => e.id != dl.id))}>
				delete link
			</i>
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
</style>
