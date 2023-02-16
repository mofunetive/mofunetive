import gsap from 'gsap';
import { ScrollTrigger, CustomEase, Flip, Elastic } from 'gsap/all';

class animation {
	constructor() {
		gsap.registerPlugin(ScrollTrigger, CustomEase, Flip, Elastic);
		gsap.config({ nullTargetWarn: false });
		
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

		gsap.set('.project_text', { height:0 });
		gsap.set('.project_text_content', { yPercent: -200 });

		
		const projectBtn = document.querySelectorAll('.project_button');
		const projectBoxContent = document.querySelectorAll('.project_box_info');
		const projectText = document.querySelectorAll('.project_text');
		const projectContent = document.querySelectorAll('.project_text_content');
		const closeprojectBtn = document.querySelectorAll('.project_closeBtn');


		gsap.to('.project_button', {
			y:10,
			yoyo:true,
			ease:"liner",
			repeat:-1,
			duration:0.5
		});

		projectBtn.forEach((btn, i) => {
			btn.addEventListener('click',() => {
				gsap.to(btn, {
					y: 20,
					autoAlpha:0,
					duration:1
				});

				gsap.to(projectText[i], {
					height: "auto",
					delay: 0.5,
					duration:1,
					onComplete:()=> {
						gsap.to(projectContent[i], {yPercent:0, duration:1 });
					}
				})

				gsap.to(projectBoxContent[i], {
					autoAlpha:0,
					onComplete:()=> {
						gsap.to(projectBoxContent[i], {height:0});
					}
				});

				gsap.to('.project_up', {
					yPercent:100,
					autoAlpha:0,
					duration:1
				});

				gsap.to('.project_down', {
					yPercent:-100,
					autoAlpha:0,
					duration:1
				});
			});
		});

		closeprojectBtn.forEach((btn, i) => {
			btn.addEventListener('click',() => {
				gsap.to(projectContent[i], {
					yPercent: -200,
					duration:1,
					onComplete:() => {
						gsap.to(projectText[i], {
							height: 0,
							duration:1,
							onComplete:()=> {
								gsap.set(projectText[i], { height:0 });

								gsap.to(projectBtn[i], {
									y: 0,
									autoAlpha:1,
									duration:1
								});
							}
						})

						gsap.to(projectBoxContent[i], {
							height: "auto",
							duration:1,
							onComplete:()=> {
								gsap.to(projectBoxContent[i], { autoAlpha:1 });
								gsap.to('.project_up', {
									yPercent: 0,
									autoAlpha: 1,
									duration:1
								});
				
								gsap.to('.project_down', {
									yPercent: 0,
									autoAlpha: 1,
									duration:1
								});
							}
						});
					}
				});
			});
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
