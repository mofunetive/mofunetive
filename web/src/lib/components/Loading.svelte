<script lang="ts">
	import { writable } from 'svelte/store';

	import { navigating } from '$app/stores';

	const loading = writable(false);

	$: $loading = !!$navigating;
</script>

{#if $loading}
	<div class="loading fixed h-full w-full flex bg-[#fcfcfc] z-50">
		<img src="https://media.tenor.com/m1MbVZDgHkIAAAAC/sad-disappointed.gif" alt="loading_gif" class=" h-48 m-auto justify-center" />
	</div>
{/if}
