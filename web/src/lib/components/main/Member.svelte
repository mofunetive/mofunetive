<script lang="ts">
	import type { GetMembers } from '@mofunetive/api';
	import MetaData from '@mofunetive/metadata';
	export let mainData: GetMembers['response'];
</script>

<div class=" relative flex mt-2 rounded-3xl overflow-hidden">
	<video class="bg absolute min-h-full min-w-full rounded-3xl object-cover" autoplay loop muted playsinline>
		<source src="/videos/bg_1.webm" type="video/webm" />
		<source src="/videos/bg_1.mp4" type="video/mp4" />
	</video>

	<div class="background w-full flex flex-row bg-black bg-opacity-50 bg-cover rounded-3xl z-10">
		<div class="profile_card w-full lg:w-1/2 p-4 py-12 lg:p-14 2xl:mb-24">
			<h1 class="object w-fit text-3xl font-bold text-white">Hello World!</h1>
			{#await mainData}
				<div class=" relative mt-12 xl:mt-14 2xl:mt-24">
					<div class="flex flex-col items-start lg:ml-24 rounded-3xl -z-10 ">
						<div class=" h-32 w-32 lg:h-40 lg:w-40 bg-white bg-cover rounded-full animate-pulse" />

						<div class=" h-36 w-full 2xl:w-[80%] mt-4 bg-white rounded-3xl ">
							<div class="content h-full w-full relative p-4 pr-2 pb-12 animate-pulse space-y-3">
								<div class="h-6 max-w-[50%] bg-gray-300 rounded-md" />
								<div class="h-4 max-w-[80%] bg-gray-300 rounded-md " />
								<div class="h-4 max-w-[40%] bg-gray-300 rounded-md " />
								<div class="contact absolute right-4 bottom-4 flex ">
									<div class=" h-8 w-8 rounded-full bg-gray-300 mr-2" />
									<div class=" h-8 w-8 rounded-full bg-gray-300 mr-2" />
								</div>
							</div>
						</div>
					</div>
				</div>
			{:then Members}
				<div class=" relative mt-12 xl:mt-14 2xl:mt-24">
					<div class="flex flex-col items-start lg:ml-24 rounded-3xl -z-10 ">
						<div class=" h-32 w-32 lg:h-40 lg:w-40 bg-white bg-cover rounded-full ">
							<img
								class=" h-full w-full object-cover rounded-full border-4 border-white text-center "
								src={Members[Members.length - 1].avatar_url}
								alt="gh_profile_image"
								loading="lazy"
							/>
						</div>
						<div class=" h-36 w-full 2xl:w-[80%] mt-4 bg-white rounded-3xl ">
							<div class="content h-full w-full relative p-4 pr-2 pb-12 text-[#505050]">
								<h1 class=" text-xl font-semibold">{Members[Members.length - 1].login}</h1>
								<p class=" line-clamp-2">{Members[Members.length - 1].bio}</p>
								<div class="contact absolute right-4 bottom-4 flex ">
									<div class="github h-8 w-8 rounded-full bg-[#ffdab9] mr-2" />
									<div class="github h-8 w-8 rounded-full bg-[#505050] mr-2" />
								</div>
							</div>
						</div>
					</div>

					{#each Members as userData}
						<div class="name_card absolute w-full top-0 flex flex-col items-start lg:pl-24 rounded-3xl">
							<div class="h-32 w-32 lg:h-40 lg:w-40 bg-white bg-cover rounded-full ">
								<img class=" h-full w-full object-cover rounded-full border-4 border-white text-center " src={userData.avatar_url} alt="gh_profile_image" loading="lazy" />
							</div>
							<div class=" h-36 w-full 2xl:w-[80%] mt-4 bg-white rounded-3xl">
								<div class="content h-full relative p-4 pr-2 pb-12 text-[#505050]">
									<h1 class=" text-xl font-semibold">{userData.login}</h1>
									<p class=" line-clamp-2">{userData.bio}</p>
									<div class="contact absolute right-4 bottom-4 flex ">
										<div class="github h-8 w-8 rounded-full bg-[#ffdab9] mr-2" />
										<div class="github h-8 w-8 rounded-full bg-[#505050] mr-2" />
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{:catch error}
				<h1 class=" px-4 py-2 text-red-400 text-xl z-10">Error code: {error}</h1>
			{/await}
		</div>

		<div class="welcome_text w-1/2 hidden lg:flex flex-col justify-center  text-white text-6xl text-center">
			<h1 class="object w-fit m-auto mb-0">We Are</h1>
			<h1 class="object w-fit m-auto mt-0">{MetaData.title}</h1>
		</div>
	</div>
</div>
