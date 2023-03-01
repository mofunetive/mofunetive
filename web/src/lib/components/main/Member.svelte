<script lang="ts">
	import type { GetMembers } from '@mofunetive/api';
	import MetaData from '@mofunetive/metadata';
	export let mainData: GetMembers['response'];
</script>

<div class=" relative mt-2 flex overflow-hidden rounded-3xl">
	<video class="bg absolute min-h-full min-w-full rounded-3xl object-cover" autoplay loop muted playsinline>
		<source src="/videos/bg_1.webm" type="video/webm" />
		<source src="/videos/bg_1.mp4" type="video/mp4" />
	</video>

	<div class="background z-10 flex w-full flex-row rounded-3xl bg-black bg-opacity-50 bg-cover">
		<div class="profile_card w-full -translate-x-[100%] p-4 py-12 lg:w-1/2 lg:p-14 2xl:mb-24">
			<h1 class="object w-fit text-3xl font-bold text-white">Hello World!</h1>
			{#await mainData}
				<div class=" relative mt-12 xl:mt-14 2xl:mt-24">
					<div class="-z-10 flex flex-col items-start rounded-3xl lg:ml-24 ">
						<div class=" h-32 w-32 animate-pulse rounded-full bg-white bg-cover lg:h-40 lg:w-40" />

						<div class=" mt-4 h-36 w-full rounded-3xl bg-white 2xl:w-[80%] ">
							<div class="content relative h-full w-full animate-pulse space-y-3 p-4 pr-2 pb-12">
								<div class="h-6 max-w-[50%] rounded-md bg-gray-300" />
								<div class="h-4 max-w-[80%] rounded-md bg-gray-300 " />
								<div class="h-4 max-w-[40%] rounded-md bg-gray-300 " />
								<div class="contact absolute right-4 bottom-4 flex ">
									<div class=" mr-2 h-8 w-8 rounded-full bg-gray-300" />
									<div class=" mr-2 h-8 w-8 rounded-full bg-gray-300" />
								</div>
							</div>
						</div>
					</div>
				</div>
			{:then Members}
				<div class=" relative mt-12 xl:mt-14 2xl:mt-24">
					<div class="-z-10 flex flex-col items-start rounded-3xl lg:ml-24 ">
						<div class=" h-32 w-32 rounded-full bg-white bg-cover lg:h-40 lg:w-40 ">
							<img
								class=" h-full w-full rounded-full border-4 border-white object-cover text-center "
								src={Members[Members.length - 1].avatar_url}
								alt="gh_profile_image"
								loading="lazy"
							/>
						</div>
						<div class=" mt-4 h-36 w-full rounded-3xl bg-white 2xl:w-[80%] ">
							<div class="content relative h-full w-full p-4 pr-2 pb-12 text-[#505050]">
								<h1 class=" text-xl font-semibold">{Members[Members.length - 1].login}</h1>
								<p class=" line-clamp-2">{Members[Members.length - 1].bio}</p>
								<div class="contact absolute right-4 bottom-4 flex ">
									<div class="github mr-2 h-8 w-8 rounded-full bg-[#ffdab9]" />
									<div class="github mr-2 h-8 w-8 rounded-full bg-[#505050]" />
								</div>
							</div>
						</div>
					</div>

					{#each Members as userData}
						<div class="name_card absolute top-0 flex w-full flex-col items-start rounded-3xl lg:pl-24">
							<div class="h-32 w-32 rounded-full bg-white bg-cover lg:h-40 lg:w-40 ">
								<img class=" h-full w-full rounded-full border-4 border-white object-cover text-center " src={userData.avatar_url} alt="gh_profile_image" loading="lazy" />
							</div>
							<div class=" mt-4 h-36 w-full rounded-3xl bg-white 2xl:w-[80%]">
								<div class="content relative h-full p-4 pr-2 pb-12 text-[#505050]">
									<h1 class=" text-xl font-semibold">{userData.login}</h1>
									<p class=" line-clamp-2">{userData.bio}</p>
									<div class="contact absolute right-4 bottom-4 flex ">
										<div class="github mr-2 h-8 w-8 rounded-full bg-[#ffdab9]" />
										<div class="github mr-2 h-8 w-8 rounded-full bg-[#505050]" />
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{:catch error}
				<h1 class=" z-10 px-4 py-2 text-xl text-red-400">Error code: {error}</h1>
			{/await}
		</div>

		<div class="welcome_text hidden w-1/2 -translate-y-[100%] flex-col justify-center  text-center text-6xl text-white lg:flex">
			<h1 class="object m-auto mb-0 w-fit">We Are</h1>
			<h1 class="object m-auto mt-0 w-fit">{MetaData.title}</h1>
		</div>
	</div>
</div>
