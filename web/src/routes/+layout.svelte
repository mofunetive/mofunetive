<script lang="ts">
	import '../app.css';

	import Cursor from '$component/Cursor.svelte';
	// import Nightmode from '$component/Nightmode.svelte';
	import Footer from '$component/Footer.svelte';
	import Header from '$component/Header.svelte';
	import Loading from '$component/Loading.svelte';

	console.log('%cขออภัยถ้าเขียนเว็บดีเกินไป >_<', 'color:red; font-size: 50px;');
</script>

<div class="app flex flex-col min-h-screen bg-white dark:bg-[#303030] overflow-x-clip">
	<Loading />

	<Cursor />

	<Header />

	<main class=" w-full flex flex-col flex-1 p-4 lg:p-10">
		<slot />
	</main>

	<!-- <Nightmode /> -->

	<Footer />
</div>
