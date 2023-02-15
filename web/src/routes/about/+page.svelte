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
	<div class="w-full text-column">
		<div class=" mt-4">
			<h1 class="text-xl">About This Website</h1>
			<div class=" ml-4">
				<p>This website make by {MetaData.name} to show repository from github organization about project now we developing</p>
				<p>เว็บไซต์นี้สร้างโดย โมฟุเนะทีฟ เป็นเว็บไซต์ที่นำเสนอโปรเจคและผลงานของทีมเราจากกิตฮับ ที่เรากำลังพัฒนาอยู่</p>
			</div>
		</div>
		<div class=" mt-4">
			<p>Who build this website</p>
			<div class=" ml-4">
				<p>Z0TEExt [ตี๋] &#60;front end/&#62;</p>
				<ul class="w-fit list-disc list-inside">
					<li><a class="object hover:text-[#ffdab9] hover:mix-blend-difference" href="https://github.com/Z0TEExt">GitHub</a></li>
					<li><a class="object hover:text-[#ffdab9] hover:mix-blend-difference" href="https://twitter.com/Z0TEExt">Twitter</a></li>
				</ul>
				<p>Faelayis [เฟริส] &#60;/back end&#62;</p>
				<ul class="w-fit list-disc list-inside">
					<li><a class="object hover:translate-x-4 hover:text-[#ff936c] hover:mix-blend-difference" href="https://github.com/Faelayis">GitHub</a></li>
					<li><a class="object hover:text-[#ff936c] hover:mix-blend-difference" href="https://twitter.com/Faelayis">Twitter</a></li>
				</ul>
			</div>
		</div>
		<div class="mt-4">
			<!-- <p>Web Ver. {versionWeb}</p> -->
			<p>Version. {versionMain}</p>
		</div>
	</div>
</section>
