<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.cursordot', { x: window.innerWidth / 2, y: window.innerHeight / 2, opacity: 0 });
		gsap.set('.cursor_text', { opacity: 0, scale: 0 });

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const mouseMove = (event: MouseEvent | Event | any) => {
			let mousePos = {
				x: event?.clientX,
				y: event?.clientY
			};

			switch (event.type) {
				case 'mouseenter':
					gsap.fromTo('.cursordot', { scale: 1, duration: 0.25 }, { scale: 5, duration: 0.25 });
					gsap.to('.cursor_text', { opacity: 1, scale: 0.3, duration: 0.5, delay: 0.25 });
					break;

				case 'mouseleave':
					gsap.to('.cursordot', { scale: 1, duration: 0.25 });
					gsap.to('.cursor_text', { opacity: 0, scale: 0, duration: 0.5 });
					break;

				case 'click':
					['BUTTON', 'A'].forEach((tag) => {
						if (event.target.tagName == tag) {
							gsap.to('.cursordot', {
								scale: 6,
								duration: 0.25,
								onComplete: () => {
									gsap.to('.cursordot', { scale: 1, duration: 0.25 });
								}
							});
							gsap.to('.cursor_text', { opacity: 0, scale: 0, duration: 0.5 });
						}
					});
					break;

				default:
					gsap.to('.cursordot', {
						x: mousePos.x - 8,
						y: mousePos.y - 8,
						duration: 0.25,
						ease: 'power3.out',
						opacity: 1
					});

					break;
			}
		};

		// When Mouse move
		window.addEventListener('mousemove', (event) => {
			mouseMove(event);
			document.querySelectorAll('.object').forEach((object) => {
				['mouseenter', 'mouseleave', 'click'].forEach((event) => object.addEventListener(event, mouseMove));
			});
		});
	});
</script>

<div id="cursor" class="cursordot hidden lg:block fixed w-4 h-4 rounded-full text-white text-sm bg-[#CFCFCF] mix-blend-difference z-[999] pointer-events-none">
	<p id="cursor_text" class="cursor_text mix-blend-difference -mt-[10%] -ml-[10%]" />
</div>
