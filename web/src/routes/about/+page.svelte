<script lang="ts">
	import MetaData from '@mofunetive/metadata';
	import { version as versionMain } from 'packageMain';
	// import { version as versionWeb } from 'packageWeb';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<div class=" max-w-full lg:max-w-6xl m-auto p-4 text-column">
		<div class="banner h-80 w-full flex rounded-3xl bg-red-400">
			<h1 class="text-5xl lg:text-9xl m-auto inset-0 text-white">Background</h1>
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
				<ul class="w-fit list-disc list-inside">
					<li><a class="object hover:text-[#ffdab9] hover:mix-blend-difference" href="https://github.com/Z0TEExt" target="_blank" rel="noreferrer">GitHub</a></li>
					<li><a class="object hover:text-[#ffdab9] hover:mix-blend-difference" href="https://twitter.com/Z0TEExt" target="_blank" rel="noreferrer">Twitter</a></li>
					<li><a class="object hover:text-[#ffdab9] hover:mix-blend-difference" href="https://wakatime.com/@Z0TEExt" target="_blank" rel="noreferrer">Wakatime</a></li>
				</ul>
				<p>Faelayis [First/เฟริส] &#60;/back end&#62;</p>
				<ul class="w-fit list-disc list-inside">
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
			<p>Version. {versionMain}</p>
		</div>
	</div>
</section>
