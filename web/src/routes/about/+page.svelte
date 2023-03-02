<script lang="ts">
	import MetaData from '@mofunetive/metadata';
	import gsap from 'gsap';
	import { version as versionMain } from 'packageMain';
	import { onMount } from 'svelte';

	import CursorAnimation from '$animation/cursor';

	onMount(() => {
		new CursorAnimation();
		gsap.to('.text_1', {
			translateX: '-65%',
			duration: 3,
			repeat: -1,
			ease: 'linear'
		});

		gsap.to('.text_3', {
			translateX: 0,
			duration: 10,
			repeat: -1,
			ease: 'linear'
		});
	});
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<div class=" text-column m-auto max-w-full p-4 lg:max-w-6xl">
		<div class="banner relative h-80 w-full space-y-3 overflow-hidden rounded-3xl bg-[#303030]">
			<div class="text_1 flex gap-12 whitespace-nowrap text-8xl font-bold">
				<h1 class=" text-white">ABOUT</h1>
				<h1 class=" text-white-outline">ABOUT</h1>
				<h1 class=" text-white">ABOUT</h1>
				<h1 class=" text-white-outline">ABOUT</h1>
				<h1 class=" text-white">ABOUT</h1>
			</div>
			<div class="text_2 flex gap-24 whitespace-nowrap text-8xl font-bold">
				<h1 class="text-white-outline -ml-64">โมฟุเนะทีฟ</h1>
				<div class="inline-flex gap-4">
					<h1 class="text-white">เกี่ยวกับ</h1>
					<h1 class="text-white">โมฟุ</h1>
					<h1 class="text-white-outline">เนะทีฟ</h1>
				</div>

				<h1 class="text-white-outline">เกี่ยวกับ</h1>
			</div>
			<div class="text_3 flex -translate-x-[97%] gap-12 text-8xl font-bold">
				<h1 class="text-white-outline">MofuNetive</h1>
				<h1 class="text-white">MofuNetive</h1>
				<h1 class="text-white-outline">MofuNetive</h1>
				<h1 class="text-white">MofuNetive</h1>
			</div>
		</div>

		<div class=" mt-4 text-[#505050]">
			<h1 class="text-xl">About</h1>
			<div class=" ml-4">
				<p>This website make by {MetaData.name} to show repository from github organization about project now we developing</p>
				<p>เว็บไซต์นี้สร้างโดย โมฟุเนะทีฟ เป็นเว็บไซต์ที่นำเสนอโปรเจคและผลงานของทีมเราจากกิตฮับ ที่เรากำลังพัฒนาอยู่</p>
			</div>
		</div>
		<div class=" mt-4 text-[#505050]">
			<h1 class="text-xl">Who build this website?</h1>
			<div class=" ml-4">
				<p>Z0TEExt [Tee/ตี๋] &#60;front end/&#62;</p>
				<ul class="w-fit list-inside list-disc">
					<li><a class="object hover:text-[#ffdab9] hover:mix-blend-difference" href="https://github.com/Z0TEExt" target="_blank" rel="noreferrer">GitHub</a></li>
					<li><a class="object hover:text-[#ffdab9] hover:mix-blend-difference" href="https://twitter.com/Z0TEExt" target="_blank" rel="noreferrer">Twitter</a></li>
					<li><a class="object hover:text-[#ffdab9] hover:mix-blend-difference" href="https://wakatime.com/@Z0TEExt" target="_blank" rel="noreferrer">Wakatime</a></li>
				</ul>
				<p>Faelayis [First/เฟริส] &#60;/back end&#62;</p>
				<ul class="w-fit list-inside list-disc">
					<li>
						<a class="object hover:translate-x-4 hover:text-[#ff936c] hover:mix-blend-difference" href="https://github.com/Faelayis" target="_blank" rel="noreferrer">GitHub</a>
					</li>
					<li><a class="object hover:text-[#ff936c] hover:mix-blend-difference" href="https://twitter.com/Faelayis" target="_blank" rel="noreferrer">Twitter</a></li>
					<li><a class="object hover:text-[#ff936c] hover:mix-blend-difference" href="https://wakatime.com/@Faelayis" target="_blank" rel="noreferrer">Wakatime</a></li>
				</ul>
			</div>
		</div>
		<div class="mt-4 text-[#505050]">
			<!-- <p>Web Ver. {versionWeb}</p> -->
			<a class="object" target="_blank" rel="noreferrer" href="{MetaData.url}/{MetaData.name}/releases/tag/v{versionMain}">Version. {versionMain}</a>
		</div>
	</div>
</section>

<style>
	h1.text-white-outline {
		color: transparent;
		-webkit-text-stroke: 0.5px white;
	}
</style>
