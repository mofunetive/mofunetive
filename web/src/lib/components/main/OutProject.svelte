<script lang="ts">
	import type { GetRepository } from '@mofunetive/api';
	export let mainData: GetRepository['response'];
</script>

<div class=" relative mt-10 pb-10 rounded-3xl overflow-hidden ">
	<video class="bg absolute min-h-full min-w-full rounded-3xl object-cover" autoplay loop muted playsinline>
		<source src="/videos/bg_2.webm" type="video/webm" />
		<source src="/videos/bg_2.mp4" type="video/mp4" />
	</video>

	<h1 class="out-project object w-fit bg-[#303030] rounded-xl m-auto mt-16 px-8 py-2 text-3xl text-center text-white">Our Projects</h1>
	<div class="project_group flex flex-col items-center mt-8 pt-4 pb-4 overflow-hidden">
		<div class="container_block fixed h-full w-full top-0 bg-white/30 backdrop-blur-sm opacity-0 invisible z-50">
			<div class="container absolute flex inset-0 h-fit lg:max-h-fit max-w-fit my-auto mx-4 lg:mx-96" />
		</div>

		<div class="out_project flex mx-8 lg:mx-16 lg:p-12 bg-white bg-opacity-30 backdrop-blur-md rounded-3xl z-10">
			<div class="h-fit w-full lg:w-[70%] lg:mr-8 rounded-3xl bg-white">
				<div class="project_video h-48 lg:h-96 max-h-96 max-w-full m-auto rounded-3xl bg-gray-300" />
				<!-- <img class="max-h-96 min-w-full object-cover rounded-3xl" src="https://media.tenor.com/L3Qg0iKD5YwAAAAC/doors-roblox-roblox-doors.gif" alt="video" /> -->
				<div class="project_text h-fit relative p-4 lg:p-8 overflow-hidden">
					<button class="project_button object w-fit absolute m-auto -mt-4 lg:-mt-6 left-0 right-0 rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:w-10 lg:h-10 pointer-events-none">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</button>
					<div class="project_text_content mb-8 text-[#505050]">
						<button
							class="project_closeBtn object absolute w-fit -mt-2 lg:-mt-4 right-0 px-4 py-2 rounded-full text-base text-white bg-[#303030] transition-colors hover:bg-[#505050]"
						>
							X
						</button>
						<h1 class=" w-[80%] text-xl lg:text-3xl">Project : {'อะไรก็ไม่รู้1'}</h1>
						<h1 class=" text-base lg:text-xl">
							Description : {'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maiores eum nisi facilis explicabo animi exercitationem provident. Exercitationem, amet maxime?'}
						</h1>
						<h1 class=" text-base lg:text-xl ">Period : {'~10-15 สัปดาร์'}</h1>
						<a href={'#'} class="link_project object absolute w-fit right-0 px-4 py-2 rounded-full text-base text-white bg-[#303030] transition-colors hover:bg-[#505050]">
							Link To Project
						</a>
					</div>
				</div>
			</div>

			<div class="relative hidden lg:flex flex-col m-auto ">
				<button class="project_up object m-auto p-4 text-white rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 pointer-events-none">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
					</svg>
				</button>

				<div class="project_box hidden lg:block w-80 m-auto p-4 rounded-3xl bg-white">
					<div class="h-40 w-full rounded-3xl bg-gray-300 animate-pulse" />
					<div class="project_box_info mt-4 animate-pulse space-y-3">
						<div class="h-6 max-w-[50%] bg-gray-300 rounded-md" />
						<div class="h-6 max-w-[50%] bg-gray-300 rounded-md" />
					</div>
				</div>

				<div class="project_box absolute hidden lg:block h-fit w-80 m-auto inset-y-0 p-4 rounded-3xl bg-white">
					<div class="h-40 w-full relative flex">
						<img
							class=" absolute max-h-full max-w-full m-auto inset-0 object-cover rounded-3xl shadow-2xl"
							src={'https://tr.rbxcdn.com/d094089ebea6915874f61cfbf47b8c9f/768/432/Image/Png'}
							alt="project_box_image"
							loading="lazy"
						/>
					</div>
					<div class="project_box_info mt-4 text-[#505050] text-center">
						<h1 class=" lg:text-2xl font-bold line-clamp-1">{'gitRepo.name'}</h1>
						<p class="info_project line-clamp-2 break-words">
							{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia tempore debitis, itaque, aut distinctio dignissimos possimus exercitationem nostrum quisquam consectetur sunt, ea repudiandae.'}
						</p>
					</div>
				</div>

				<button class="project_down object m-auto p-4 text-white rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 pointer-events-none">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
				</button>
			</div>
		</div>

		<!-- {#await mainData}
			<div class="object h-60 w-64 lg:h-72 lg:w-96 mt-4 z-10">
				<div class=" h-full w-full p-4 pb-24 bg-white rounded-3xl">
					<div class=" min-h-[80%] max-w-[80%] mx-auto bg-gray-300 rounded-3xl animate-pulse" />
					<div class=" mt-4 space-y-3 animate-pulse">
						<div class="h-6 max-w-[50%] bg-gray-300 rounded-md" />
						<div class="h-4 max-w-[80%] bg-gray-300 rounded-md " />
						<div class="h-4 max-w-[80%] bg-gray-300 rounded-md " />
					</div>
				</div>
			</div>
		{:then data}
			{#each data as gitRepo, i}
				<div class="box{i} old_container object h-60 w-64 lg:h-72 lg:w-96 mt-4">
					<div class="box h-full w-full p-4 pb-24 bg-white rounded-3xl">
						<button
							class="close_project object absolute w-fit p-2 px-4 top-4 lg:top-8 right-4 lg:right-8 rounded-lg text-base lg:text-xl opacity-0 hidden text-white bg-[#303030] transition-colors hover:bg-[#505050]"
						>
							X
						</button>
						<img class="img_project w-[80%] mx-auto rounded-3xl transition-all" src="https://i.ytimg.com/vi/HCz3JVH0h9c/maxresdefault.jpg" alt="logo" loading="lazy" />
						<h1 class=" mt-4 lg:text-2xl font-bold line-clamp-1">{gitRepo.name}</h1>
						<p class="info_project line-clamp-2 break-words">
							{gitRepo.description ? gitRepo.description : 'no information'}
						</p>
						<a
							href={gitRepo.html_url}
							class="link_project object absolute w-fit p-2 px-4 bottom-8 right-8 rounded-lg text-xl opacity-0 hidden text-white bg-[#303030] transition-colors hover:bg-[#505050] pointer-events-none"
						>
							Link To Project
						</a>
					</div>
				</div>
			{/each}
		{:catch error}
			<h1 class=" px-4 py-2 text-red-400 text-xl z-10">Error code: {error}</h1>
		{/await} -->
	</div>
</div>
