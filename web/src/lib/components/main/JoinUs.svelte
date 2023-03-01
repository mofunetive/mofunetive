<script lang="ts">
	import MetaData, { Discord } from '@mofunetive/metadata';
</script>

<div class=" relative mt-10 overflow-hidden rounded-3xl">
	<video class="bg absolute min-h-full min-w-full rounded-3xl object-cover" autoplay loop muted playsinline>
		<source src="/videos/bg_4.webm" type="video/webm" />
		<source src="/videos/bg_4.mp4" type="video/mp4" />
	</video>

	<div class="absolute top-0 left-0 h-full w-full rounded-3xl bg-black bg-opacity-30 bg-cover" />

	<div class="justify-center pt-16 pb-10">
		<h1 class="join-us object z-10 m-auto w-fit rounded-xl bg-[#303030] px-8 py-2 text-center text-3xl text-white">Join Us</h1>

		<div class="mt-12 flex h-full w-full flex-col text-[#505050] lg:flex-row">
			<div class="top-0 bottom-0 z-10 ml-8 mr-8 max-h-full rounded-3xl bg-red-400 lg:mr-4 lg:w-1/2">
				<div class="h-full rounded-3xl bg-white p-8 transition-all hover:translate-y-2">
					<h1 class=" text-3xl">{MetaData.title}</h1>
					<p class=" mt-4 text-lg lg:text-xl">
						ทีมพัฒนาหลายๆสิ่งให้ดีเท่าที่เราทำได้มากที่สุด คนที่ชื่นชอบในการ"สร้าง" หรือ "พัฒนา"สิ่งใหม่ๆ สำหรับทีมเรานั้น ต้องการคนอย่างคุณ!<br />
						ในส่วนของงานหรือโปรเจคจะเป็นเหมือนการพัฒนาสกิลหรือฝีมือของแต่ละคน คนที่มีใจรักและอยากจะพัฒนาส่วนที่ตัวเองไม่เก่ง สามารถเสนอความสามารถและผลงานของคุณได้ผ่านทางดิสคอร์ด<br
						/>ทั้งนี้ขอบคุณที่แวะมาชมผลงานของเรา หากมีข้อแนะนำหรืออยากแสดงความคิดเห็นก็เข้ามาดิสคอร์ดของเราเพื่อพูดคุยและปรึกษาหารือได้ที่
						<a href={Discord.invite_url} class="object underline hover:text-red-300 hover:mix-blend-difference" target="_blank" rel="noreferrer"> คลิกที่นี้ </a> หรือ Discord Invite
						code : hHkP5S6p7Y ได้เลย!
					</p>
				</div>
			</div>

			<div class=" z-10 mt-4 ml-8 mr-8 flex flex-col lg:mt-0 lg:ml-4 lg:w-1/2">
				<div class=" h-fit rounded-3xl bg-red-400 lg:mt-0 lg:w-full">
					<div class="rounded-3xl bg-white p-8  transition-all hover:translate-y-2">
						<h1 class=" text-3xl">Developer Team</h1>
						<p class=" mt-4 text-lg lg:mt-0 xl:text-base">
							สำหรับใครที่กำลังมองหาทีมที่จะพัฒนาเกี่ยวกับซอฟต์แวร์ไม่ว่าจะเป็น สร้างโปรแกรม สร้างเกม เขียนเว็บ สร้างแอพ พัฒนาโปรแกรม หรือมินิโปรเจคต่างๆ คุณมาถูกทางแล้วล่ะ!
							มาเป็นส่วนนึงของเราสิ เข้าร่วมพัฒนาและเก็บประสบการณ์ด้วยกันได้เลย!
						</p>
					</div>
				</div>

				<div class=" mt-4 h-fit rounded-3xl bg-red-400 lg:w-full">
					<div class="rounded-3xl bg-white p-8  transition-all hover:translate-y-2">
						<h1 class=" text-3xl">Creator Team</h1>
						<p class=" mt-4 text-lg lg:mt-0 xl:text-base">
							หากคุณมีความคิดสร้างสรรค์ ไม่ว่าจะเป็น ออกแบบโมเดล2D/3D UX/UI วาดภาพ ทำอนิเมชั่น ระบบเสียง เสนอความครีเอทีฟหรือคอนเซ็ปต์ และต้องการเป็นส่วนนึงของโปรเจค
							ทีมเราไม่เน้นที่คนเก่ง แม้คุณไม่มีประสบการณ์หรือใช้โปรแกรมต่างๆเกี่ยวกับการออกแบบไม่คล่อง ก็สามารถเข้าร่วมกับเราและพัฒนาฝีมือไปด้วยกันได้เลย!
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class=" mt-8 flex w-full text-[#505050] xl:mt-4">
			<a
				href={Discord.invite_url}
				class="object bottom-8 z-10 m-auto mr-12 inline-flex w-fit rounded-lg bg-white p-2 px-4 text-base transition-all hover:mr-16 xl:mr-20"
				target="_blank"
				rel="noreferrer"
			>
				Join now
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 rotate-180">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
					/>
				</svg>
			</a>
		</div>
	</div>
</div>
