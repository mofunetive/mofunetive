<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';
	
	import animation from '$animation/main';
	import Cursor from '$component/Cursor.svelte';
	// import Nightmode from '$component/Nightmode.svelte';
	import Footer from '$component/Footer.svelte';
	import Header from '$component/Header.svelte';
	import Loading from '$component/Loading.svelte';

	onMount(() => {
		new animation();
	});
</script>

<div class="app flex min-h-screen flex-col overflow-x-clip bg-white dark:bg-[#303030]">
	<Loading />

	<Cursor />

	<Header />

	<main class="flex max-w-full flex-1 flex-col p-4 lg:px-10">
		<slot />
	</main>

	<!-- <Nightmode /> -->

	<Footer />
</div>
