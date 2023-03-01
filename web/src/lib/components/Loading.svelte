<script lang="ts">
	import { writable } from 'svelte/store';

	import { navigating } from '$app/stores';

	const loading = writable(false);

	$: $loading = !!$navigating;
</script>

{#if $loading}
	<div class="loading fixed z-50 flex h-full w-full bg-[#fcfcfc]">
		<img src="https://media.tenor.com/m1MbVZDgHkIAAAAC/sad-disappointed.gif" alt="loading_gif" class=" m-auto h-48 justify-center" />
	</div>
{/if}
