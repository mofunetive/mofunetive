<script lang="ts">
	import '../app.css';

	import Loading from '$component/Loading.svelte';
	import Cursor from '$component/Cursor.svelte';
	import Header from '$component/Header.svelte';
	// import Nightmode from '$component/Nightmode.svelte';
	import Footer from '$component/Footer.svelte';
</script>

<div class="app flex flex-col min-h-screen bg-white dark:bg-[#303030] overflow-x-clip">
	<Loading />

	<Cursor />

	<Header />

	<main class="max-w-full flex flex-col flex-1 p-4 lg:px-10">
		<slot />
	</main>

	<!-- <Nightmode /> -->

	<Footer />
</div>
