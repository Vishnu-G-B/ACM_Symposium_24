<script>
	// @ts-nocheck
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import emblaCarousel from 'embla-carousel-svelte';
	import * as THREE from 'three';
	import NET from 'vanta/dist/vanta.net.min';
	import CardBody from '$lib/components/ui/ThreeDCardEffect/CardBody.svelte';
	import CardContainer from '$lib/components/ui/ThreeDCardEffect/CardContainer.svelte';
	import CardItem from '$lib/components/ui/ThreeDCardEffect/CardItem.svelte';

	const images = import.meta.glob('$lib/Team/*.*', { eager: true });
	let imgArr = [];
	for (const [path, module] of Object.entries(images)) {
		let name = path.split('/').pop().split('.')[0];
		let imgSrc = module.default;
		let obj = {
			personName: name,
			personImg: imgSrc
		};
		imgArr.push(obj);
	}
	const desiredOrder = ['Dr Gururaj', 'Dr Shreyas'];
    const lastPerson = imgArr.find(obj => obj.personName == "Vedang Patil");
    const firstTwo = imgArr.filter(obj => desiredOrder.includes(obj.personName));
    const remaining = imgArr.filter(obj => !desiredOrder.includes(obj.personName) && obj.personName != "Vedang Patil");
    const newArr = [...firstTwo,...remaining,lastPerson];
    console.log(imgArr);
    

	let isMouseEntered = false;
	let options = { loop: true, dragFree:true };
	let effect;
	let isMobile = false;

	function vanta(node) {
		let vw = document.getElementById('vw')?.getBoundingClientRect().width;
		let vh = document.getElementById('vw')?.getBoundingClientRect().height;
		effect = NET({
			el: node,
			THREE: THREE,
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: vh,
			minWidth: vw,
			scale: 1.0,
			scaleMobile: 1.0,
			points: 13.0,
			maxDistance: 20.0,
			sapcing: 18.0,
			color: 0x7accfe,
			backgroundColor: 0x010f18
		});
	}

	gsap.registerPlugin(ScrollTrigger);
	onMount(() => {
		let vw = document.getElementById('vw')?.getBoundingClientRect().width;
		const handleResize = () => {
			isMobile = window.innerWidth <= 479;
		};

		handleResize(); // Set initial value
		window.addEventListener('resize', handleResize);

		const ctx = gsap.context(() => {
			const onLoadTimeline = gsap.timeline();
			onLoadTimeline.to('.reveal-1', {
				height: '100vh',
				ease: 'power4.inOut',
				duration: 1
			});
			onLoadTimeline.to(
				'.reveal-2',
				{
					height: '100vh',
					delay: 0.1,
					ease: 'power4.inOut',
					duration: 1
				},
				'<'
			);
			onLoadTimeline.to(
				'.reveal-3',
				{
					height: '100vh',
					delay: 0.1,
					ease: 'power4.inOut',
					duration: 1
				},
				'<'
			);
			onLoadTimeline.to(
				'.landing-content',
				{
					display: 'flex',
					height: '100%',
					delay: 0.5,
					duration: 1
				},
				'<'
			);
			const spans = document.querySelectorAll('span.textSpan');
			const tweenConfig = {
				y: 0,
				duration: 1,
				ease: 'elastic.out(1,0.75)'
			};
			onLoadTimeline.to(
				spans,
				{
					...tweenConfig,
					stagger: 0.1
				},
				'<'
			);
			let eg = gsap.timeline({
				scrollTrigger: {
					trigger: '.landingPg',
					start: 'top top',
					end: 'bottom top',
					scrub: 1,
					onLeave: () => {
						console.log('Detroying the BG animation now');
						effect ? effect.destroy() : console.log('effect does not exist apparently');
					},
					onEnterBack: () => {
						console.log('Redoing the BG animation now');
						let vw = document.getElementById('vw')?.getBoundingClientRect().width;
						let vh = document.getElementById('vw')?.getBoundingClientRect().height;
						effect = NET({
							el: '.HeroBGAnim',
							THREE: THREE,
							mouseControls: true,
							touchControls: true,
							gyroControls: false,
							minHeight: vh,
							minWidth: vw,
							scale: 1.0,
							scaleMobile: 1.0,
							points: 13.0,
							maxDistance: 20.0,
							sapcing: 18.0,
							color: 0x7accfe,
							backgroundColor: 0x010f18
						});
					}
				}
			});
			eg.to('.landingPg', {
				rotate: '-5deg',
				scale: vw < 479 ? 0.6 : 0.9,
				y: 50
			});
			eg.to(
				'.themes',
				{
					rotate: '0',
					scale: 1
				},
				'<'
			);
			eg.to('.landingPg', {
				opacity: 0
			});
		});
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
	onDestroy(() => {
		if (effect) {
			effect.destroy();
		}
	});
</script>

<div class="landingPg h-screen w-full bg-primary sticky top-0" id="vw">
	<div class="h-0 w-full bg-primaryContainer reveal-1 absolute bottom-0"></div>
	<div class="h-0 w-full bg-onPrimaryContainer reveal-2 absolute bottom-0"></div>
	<div
		class="h-0 w-full bg-primary reveal-3 absolute bottom-0 HeroBGAnim"
		id="HeroBGAnim"
		use:vanta
	>
		<div class="h-full w-full flex justify-around items-center flex-col hidden landing-content">
			<div
				class="h-full flex justify-center items-center
            text-[3rem] Smobile:text-[3.5rem] Mmobile:text-[4rem] sm:text-[6rem] md:text-[6.5rem] lg:text-[9rem] xl:text-[13rem]
            lg:ml-[20px]
			-mt-[12rem] sm:-mt-[5rem]
			overflow-hidden
             font-normal font-basebornSans text-onPrimaryContainer
			textFlyin1"
				style="text-align: center;"
			>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">O</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">U</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">R&nbsp;</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">T</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">E</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">A</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">M</span>
			</div>
			<div
				class="
				text-center tracking-wide font-TWK text-onSurface
				text-[1rem] lg:text-[1.5rem] leading-[2.3rem]
        		-mt-[37rem] sm:-mt-[28rem] lg:-mt-[26rem] xl:-mt-[24rem] lg:ml-[25px] py-1"
			></div>
		</div>
	</div>
</div>

<div class="w-full h-fit themes scale-[0.55] rotate-12">
	<section class="w-full h-dvh bg-surface border-x-2 border-t-2 flex flex-col">
		<div class=" font-basebornSans text-6xl uppercase -mb-4 mt-6 ml-2">Tech Summit Leads</div>
		<div class:embla={!isMobile} use:emblaCarousel={{ options }}>
			<div class="embla__container">
				{#each newArr as person}
					<div class="embla__slide h-fit w-fit">
						<CardContainer bind:isMouseEntered className="inter-var">
							<CardBody
								className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[600px] h-[35rem] rounded-xl p-6 border  "
							>
								<CardItem
									{isMouseEntered}
									translateZ="50"
									className="text-xl font-bold text-neutral-600 dark:text-white"
								>
									{person.personName}
								</CardItem>
								<CardItem {isMouseEntered} translateZ="100" className="w-full h-[90%] mt-4">
									<img
										src={person.personImg}
										class="h-full w-full rounded-xl object-cover group-hover/card:shadow-xl"
										alt="thumbnail"
                                        loading="lazy"
									/>
								</CardItem>
							</CardBody>
						</CardContainer>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 45%;
		min-width: 0;
	}
</style>
