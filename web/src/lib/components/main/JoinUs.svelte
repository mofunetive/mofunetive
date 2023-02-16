<script lang="ts">
	import MetaData, { Discord } from '@mofunetive/metadata';
</script>

<div class=" relative mt-10 rounded-3xl overflow-hidden">
	<video class="bg absolute min-h-full min-w-full rounded-3xl object-cover" autoplay loop muted playsinline>
		<source src="/videos/bg_4.webm" type="video/webm" />
		<source src="/videos/bg_4.mp4" type="video/mp4" />
	</video>

	<div class="bg-cover absolute h-full w-full top-0 left-0 bg-black bg-opacity-30 rounded-3xl" />

	<div class="pt-16 pb-10 justify-center">
		<h1 class="join-us object w-fit bg-[#303030] rounded-xl m-auto px-8 py-2 text-3xl text-center text-white z-10">Join Us</h1>

		<div class="h-full w-full flex flex-col lg:flex-row mt-12">
			<div class="max-h-full lg:w-1/2 ml-8 mr-8 lg:mr-4 top-0 bottom-0 bg-red-400 rounded-3xl z-10">
				<div class="h-full rounded-3xl p-8 bg-white hover:translate-y-2 transition-all">
					<h1 class=" text-3xl">{MetaData.title}</h1>
					<p class=" text-lg lg:text-xl mt-4">
						ทีมพัฒนาหลายๆสิ่งให้ดีเท่าที่เราทำได้มากที่สุด คนที่ชื่นชอบในการ"สร้าง" หรือ "พัฒนา"สิ่งใหม่ๆ สำหรับทีมเรานั้น ต้องการคนอย่างคุณ!<br />
						ในส่วนของงานหรือโปรเจคจะเป็นเหมือนการพัฒนาสกิลหรือฝีมือของแต่ละคน คนที่มีใจรักและอยากจะพัฒนาส่วนที่ตัวเองไม่เก่ง สามารถเสนอความสามารถและผลงานของคุณได้ผ่านทางดิสคอร์ด<br
						/>ทั้งนี้ขอบคุณที่แวะมาชมผลงานของเรา หากมีข้อแนะนำหรืออยากแสดงความคิดเห็นก็เข้ามาดิสคอร์ดของเราเพื่อพูดคุยและปรึกษาหารือได้ที่
						<a href={Discord.invite_url} class="object underline hover:text-red-300 hover:mix-blend-difference">คลิกที่นี้</a> หรือ Discord Invite code : hHkP5S6p7Y ได้เลย!
					</p>
				</div>
			</div>

			<div class=" lg:w-1/2 mt-4 lg:mt-0 ml-8 lg:ml-4 mr-8 flex flex-col z-10">
				<div class=" h-fit lg:w-full lg:mt-0 rounded-3xl bg-red-400">
					<div class="rounded-3xl p-8 bg-white  hover:translate-y-2 transition-all">
						<h1 class=" text-3xl">Deverlop Team</h1>
						<p class=" mt-4 lg:mt-0 text-lg xl:text-base">
							สำหรับใครที่กำลังมองหาทีมที่จะพัฒนาเกี่ยวกับซอฟต์แวร์ไม่ว่าจะเป็น สร้างโปรแกรม สร้างเกม เขียนเว็บ สร้างแอพ พัฒนาโปรแกรม หรือมินิโปรเจคต่างๆ คุณมาถูกทางแล้วล่ะ!
							มาเป็นส่วนนึงของเราสิ เข้าร่วมพัฒนาและเก็บประสบการณ์ด้วยกันได้เลย!
						</p>
					</div>
				</div>

				<div class=" h-fit lg:w-full mt-4 rounded-3xl bg-red-400">
					<div class="rounded-3xl p-8 bg-white  hover:translate-y-2 transition-all">
						<h1 class=" text-3xl">Creator Team</h1>
						<p class=" mt-4 lg:mt-0 text-lg xl:text-base">
							หากคุณมีความคิดสร้างสรรค์ ไม่ว่าจะเป็น ออกแบบโมเดล2D/3D UX/UI วาดภาพ ทำอนิเมชั่น ระบบเสียง เสนอความครีเอทีฟหรือคอนเซ็ปต์ และต้องการเป็นส่วนนึงของโปรเจค
							ทีมเราไม่เน้นที่คนเก่ง แม้คุณไม่มีประสบการณ์หรือใช้โปรแกรมต่างๆเกี่ยวกับการออกแบบไม่คล่อง ก็สามารถเข้าร่วมกับเราและพัฒนาฝีมือไปด้วยกันได้เลย!
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class=" w-full mt-8 xl:mt-4 flex">
			<a href={Discord.invite_url} class="object w-fit m-auto mr-12 xl:mr-20 hover:mr-16 transition-all p-2 px-4 bottom-8 rounded-lg text-xl text-[#303030] bg-white z-10">
				Join now!
			</a>
		</div>
	</div>
</div>
