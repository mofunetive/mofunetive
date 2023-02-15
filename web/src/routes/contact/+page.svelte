<script lang="ts">
	import { Discord } from '@mofunetive/metadata';
</script>

<svelte:head>
	<title>Contant</title>
	<meta name="description" content="Contact us" />
</svelte:head>

<section>
	<div class=" w-fit text-column mt-4">
		<h1 class=" text-xl">Contant</h1>
		<p>
			We Discord Server <a href={Discord.invite_url} class="object underline hover:text-red-300 hover:mix-blend-difference transition-color">Click</a> or Server Code: {Discord.invite_code}
		</p>
		<p>Email: zenlektomyum@gmail.com</p>
	</div>
</section>
