<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import animation from '$animation/homepage';
	import MetaData from '@mofunetive/metadata';

	import Member from '$component/main/Member.svelte';
	import JoinUs from '$component/main/JoinUs.svelte';
	import OutProject from '$component/main/OutProject.svelte';
	import OutCollection from '$component/main/OutCollection.svelte';

	export let data: PageData;

	$: ({ gitMembers, gitProject, gitRepository } = data);

	onMount(() => {
		new animation();
	});
</script>

<svelte:head>
	<title>{MetaData.title}</title>
	<meta
		name="description"
		content="{MetaData.title} ทีมพัฒนาหลายๆสิ่งให้ดีเท่าที่เราทำได้มากที่สุด คนที่ชื่นชอบในการ สร้าง หรือ พัฒนา สิ่งใหม่ๆ สำหรับทีมเรานั้น ต้องการคนอย่างคุณ!"
	/>
</svelte:head>

<section class="overflow-x-auto">
	<Member mainData={gitMembers} />

	<OutProject mainData={gitRepository} />

	<OutCollection mainData={gitProject} />

	<JoinUs />
</section>
