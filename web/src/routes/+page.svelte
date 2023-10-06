<script lang="ts">
	import MetaData from '@mofunetive/metadata';

	import JoinUs from '$component/main/JoinUs.svelte';
	import Member from '$component/main/Member.svelte';
	import OutCollection from '$component/main/OutCollection.svelte';

	// import OutProject from '$component/main/OutProject.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ gitMembers, gitProject, gitRepository } = data);
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

	<!-- <OutProject mainData={gitRepository} /> -->

	<OutCollection mainData={gitProject} />

	<JoinUs />
</section>
