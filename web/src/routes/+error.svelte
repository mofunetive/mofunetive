<script lang="ts">
	import gsap from 'gsap';
	import { CustomEase } from 'gsap/all';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';

	const ranWord = ['ไม่พบหน้าที่ค้นหา', 'หาหน้าไรอยู่อ่ะ', 'ชายสี่บะหมี่เกี๊ยว', 'ที่นี้ที่ไหน', 'นายหลงทางมาสินะ'];

	onMount(() => {
		gsap.registerPlugin(CustomEase);
		gsap.fromTo(
			'.error',
			{ yPercent: 100, opacity: 0 },
			{
				yPercent: -50,
				opacity: 1,
				onComplete: () => {
					gsap.to('.error', { ease: 'linear', rotate: 360, duration: 5, repeat: -1 });
				}
			}
		);
	});
</script>

<section>
	<div class="error absolute top-1/2 left-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#303030] p-4 text-xl text-white">
		<h1>{$page.status} {$page.error?.message}</h1>
		<p>{ranWord[Math.floor(Math.random() * ranWord.length)]}</p>
	</div>
</section>
