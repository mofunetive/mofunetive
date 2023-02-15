import gsap from 'gsap';
import { ScrollTrigger, CustomEase, Flip } from 'gsap/all';

class animation {
	constructor() {
		gsap.registerPlugin(ScrollTrigger, CustomEase, Flip);

		gsap.set('.profile_card', { xPercent: -200 });
		gsap.to('.profile_card', {
			xPercent: 0,
			opacity: 1,
			duration: 1,
			onComplete: () => {
				gsap.fromTo(
					'.name_card',
					{ y: 200, opacity: 0 },
					{
						y: 0,
						duration: 2,
						opacity: 1,
						delay: 3,
						stagger: {
							each: 7
						},
						repeat: -1,
						repeatDelay: 3
					}
				);
			}
		});

		gsap.set('.welcome_text', { yPercent: -100 });
		gsap.to('.welcome_text', {
			yPercent: 0,
			duration: 1
		});

		// Out Project Section
		gsap.set('.out-project', { yPercent: -250 });
		gsap.to('.out-project', {
			scrollTrigger: {
				trigger: '.out-project',
				start: 'top center'
			},
			yPercent: 0,
			ease: 'bounce({strength:0.5, endAtStart:true})',
			duration: 1
		});

		function moveRan(target: string, min: number, max: number) {
			gsap.to(target, {
				x: () => {
					return gsap.utils.random(min, max);
				},
				y: () => {
					return gsap.utils.random(min, max);
				},
				ease: 'none',
				duration: 1,
				repeat: -1,
				repeatRefresh: true
			});
		}

		['.box0', '.box2'].forEach((event) => {
			gsap.set(event, { xPercent: -200, opacity: 0 });
		});

		['.box1', '.box3'].forEach((event) => {
			gsap.set(event, { xPercent: 200, opacity: 0 });
		});

		const cards = document.querySelectorAll('.box');
		const container = document.querySelector('.container');
		const old_container = document.querySelectorAll('.old_container');
		const bg_container = document.querySelector('.container_block');
		const comp_close = document.querySelectorAll('.close_project');
		const comp_link = document.querySelectorAll('.link_project');
		const comp_info = document.querySelectorAll('.info_project');

		cards.forEach((card, i) => {
			card.addEventListener('click', () => {
				const state = Flip.getState(cards, container);
				const isCardActive = card.classList.contains('active');

				cards.forEach((otherCard, otherIndex) => {
					otherCard.classList.remove('active', 'p-8');
					if (!isCardActive && i !== otherIndex) {
						old_container[otherIndex].classList.remove('z-50');
					}
				});

				const anim_link = gsap.to(comp_link[i], {
					opacity: 1,
					display: 'block',
					duration: 1,
					onComplete: () => {
						gsap.set(comp_link[i], { pointerEvents: 'auto' });
					}
				});

				const anim_closeBtn = gsap.to(comp_close[i], {
					opacity: 1,
					display: 'block',
					duration: 1,
					onComplete: () => {
						gsap.set(comp_close[i], { pointerEvents: 'auto' });
					}
				});

				if (!anim_link.isActive()) {
					if (!isCardActive) {
						container?.appendChild(card);
						old_container[i].classList.remove('z-50');
						anim_link.play().delay(1);
						anim_closeBtn.play().delay(1);

						gsap.to(bg_container, {
							autoAlpha: 1,
							duration: 1
						});
						card.classList.add('active', 'p-8');
					} else {
						old_container[i].appendChild(card);
						old_container[i].classList.add('z-50');
						card.classList.remove('active', 'p-8');
						gsap.to(comp_link[i], {
							opacity: 0,
							display: 'hidden',
							duration: 1,
							pointerEvents: 'none'
						});
						gsap.to(comp_close[i], {
							opacity: 0,
							display: 'hidden',
							duration: 1,
							pointerEvents: 'none'
						});
						gsap.to(bg_container, {
							autoAlpha: 0,
							duration: 1
						});
					}
				}
				Flip.from(state, {
					duration: 1,
					ease: 'power1.inOut',
					absolute: true
				});
			});
		});

		gsap.to('.box0', {
			scrollTrigger: {
				trigger: '.box0',
				start: 'top center'
			},
			xPercent: 0,
			marginRight: window.innerWidth < 640 ? 0 : '50%',
			opacity: 1,
			duration: 1,
			onComplete: () => {
				window.innerWidth > 640 ? moveRan('.box0', -15, 15) : 0;
			}
		});

		gsap.to('.box1', {
			scrollTrigger: {
				trigger: '.box1',
				start: 'top center'
			},
			xPercent: 0,
			marginLeft: window.innerWidth < 640 ? 0 : '50%',
			opacity: 1,
			duration: 1,
			onComplete: () => {
				window.innerWidth > 640 ? moveRan('.box1', -15, 15) : 0;
			}
		});

		gsap.to('.box2', {
			scrollTrigger: {
				trigger: '.box2',
				start: 'top center'
			},
			xPercent: window.innerWidth < 640 ? 0 : 30,
			marginRight: window.innerWidth < 640 ? 0 : '50%',
			opacity: 1,
			duration: 1,
			onComplete: () => {
				window.innerWidth > 640 ? moveRan('.box2', -15, 15) : 0;
			}
		});

		gsap.to('.box3', {
			scrollTrigger: {
				trigger: '.box3',
				start: 'top center'
			},
			xPercent: window.innerWidth < 640 ? 0 : -20,
			marginLeft: window.innerWidth < 640 ? 0 : '50%',
			opacity: 1,
			duration: 1,
			onComplete: () => {
				window.innerWidth > 640 ? moveRan('.box3', -15, 15) : 0;
			}
		});

		// Out Collections Section
		gsap.set('.out-col', { yPercent: -250 });
		gsap.to('.out-col', {
			scrollTrigger: {
				trigger: '.out-col',
				start: 'top center'
			},
			yPercent: 0,
			ease: 'bounce({strength:0.5, endAtStart:true})',
			duration: 1
		});

		gsap.set('.projects', { yPercent: 250 });

		gsap.to('.projects', {
			scrollTrigger: {
				trigger: '.out-col',
				start: '300% center'
			},
			yPercent: 0,
			stagger: 0.2
		});

		// Join us Section
		gsap.set('.join-us', { yPercent: -250 });

		gsap.to('.join-us', {
			scrollTrigger: {
				trigger: '.join-us',
				start: 'top center'
			},
			yPercent: 0,
			ease: 'bounce({strength:0.5, endAtStart:true})',
			duration: 1
		});
	}
}

export default animation;
