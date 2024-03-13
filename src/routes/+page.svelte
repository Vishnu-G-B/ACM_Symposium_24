<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import StickyParas from '$lib/components/stickyParas.svelte';
	import PinContainer from '$lib/components/ui/ThreeDPin/PinContainer.svelte';
	import StickySchedule from '$lib/components/stickySchedule.svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import emblaCarousel from 'embla-carousel-svelte';
	import * as THREE from 'three';
	import NET from 'vanta/dist/vanta.net.min';

	let options = { loop: true };
	function vanta(node) {
		let vw = document.getElementById('vw')?.getBoundingClientRect().width;
		let vh = document.getElementById('vw')?.getBoundingClientRect().height;
		NET({
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
			const dateSpan = document.querySelectorAll('span.dateSpan');
			const dateTweenConfig = {
				y: 0,
				duration: 1,
				ease: 'elastic.out(1,0.75)'
			};
			onLoadTimeline.to(
				dateSpan,
				{
					...dateTweenConfig,
					stagger: 0.1
				},
				'+1.2'
			);
			let eg = gsap.timeline({
				scrollTrigger: {
					trigger: '.landingPg',
					start: 'top top',
					end: 'bottom top',
					scrub: 1
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
			let themesTosched = gsap.timeline({
				scrollTrigger: {
					id: 'themes to sched',
					trigger: '.themes',
					start: 'center-=20% top',
					end: vw < 479 ? 'center top' : '',
					scrub: 2
				}
			});
			themesTosched.to(
				'.schedule',
				{
					rotate: 0,
					scale: 1,
					y: vw < 479 ? -400 : 0,
					duration: 1
				},
				'<'
			);
		});
	});
</script>

<!-- Landing Page -->
<div class="landingPg h-screen w-full bg-primary sticky top-0" id="vw">
	<div class="h-0 w-full bg-primaryContainer reveal-1 absolute bottom-0"></div>
	<div class="h-0 w-full bg-onPrimaryContainer reveal-2 absolute bottom-0"></div>
	<div class="h-0 w-full bg-primary reveal-3 absolute bottom-0" id="HeroBGAnim" use:vanta>
		<div class="h-full w-full flex justify-around items-center flex-col hidden landing-content">
			<div
				class="h-full flex justify-center items-center
            text-[6rem] Smobile:text-[7rem] Mmobile:text-[8rem] sm:text-[15rem] md:text-[17rem] lg:text-[20rem] xl:text-[32rem]
            ml-4 lg:ml-[45px]
			-mt-[12rem] sm:-mt-[5rem]
			overflow-hidden
            tracking-[2.8rem] font-normal font-outwardBlock text-primary
			textFlyin1"
				style="text-align: center;"
			>
				<span class="textSpan overflow-hidden translate-y-[100vh]">T</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">U</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">R</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">I</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">N</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">G</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">E</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">R'</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">2</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">4</span>
			</div>
			<div
				class="
				text-center tracking-wide font-humaneSemiBold text-onPrimaryContainer
				text-[3rem] leading-[2.3rem]
        		-mt-[37rem] sm:-mt-[28rem] lg:-mt-[26rem] xl:-mt-[24rem] lg:ml-[25px] py-1"
			>
				<span class="dateSpan inline-block overflow-hidden translate-y-[20rem] py-1 text-center"
					>APRIL 3RD ONWARDS,</span
				>
				<br />
				<span class="dateSpan inline-block overflow-hidden translate-y-[20rem] py-1 text-center"
					>@ MIT BENGALURU</span
				>
			</div>
		</div>
	</div>
</div>

<!-- Themes Section -->

<div class="w-full h-fit themes scale-[0.55] rotate-12">
	<section class= " bg-surface border-x-2 border-t-2 z-[99]">
		<StickyParas />
	</section>
</div>

<div class="schedule scale-[0.2] lg:scale-[0.65] -rotate-[8deg]">
	<section class="w-full h-fit bg-primaryContainer">
		<StickySchedule />
	</section>
</div>

<div class="w-full h-fit">
	<section class="w-full h-dvh bg-onSurface border-x-2 border-t-2">
		<div class="embla" use:emblaCarousel={{ options }}>
			<div class="embla__container">
				<div class="embla__slide">
					<div class="flex h-full w-full items-center justify-center">
						<PinContainer title="Their linkedin or smthng" href="#">
							<div
								class="flex h-[30rem] w-[25rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2"
							>
								<h3
									class="!m-0 max-w-xs text-6xl uppercase tracking-wider font-bold font-humaneThin text-slate-100"
								>
									Speaker 1
								</h3>
								<div class="!m-0 !p-0 text-base font-normal">
									<span class="text-slate-500">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus alias
										expedita, similique cumque repellat voluptatem quia odit temporibus illo.
										Eligendi accusantium vero nemo deserunt quae quam rerum maxime eos.
									</span>
								</div>
								<div
									class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
								/>
							</div>
						</PinContainer>
					</div>
				</div>
				<div class="embla__slide">
					<div class="flex h-[40rem] w-full items-center justify-center">
						<PinContainer title="Their linkedin or smthng" href="#">
							<div
								class="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2"
							>
								<h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">Speaker 1</h3>
								<div class="!m-0 !p-0 text-base font-normal">
									<span class="text-slate-500">
										Short Description of Speaker. Below which is an image or smthng.
									</span>
								</div>
								<div
									class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
								/>
							</div>
						</PinContainer>
					</div>
				</div>
				<div class="embla__slide">
					<div class="flex h-[40rem] w-full items-center justify-center">
						<PinContainer title="their linkekin or smthng" href="#">
							<div
								class="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2"
							>
								<h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">Speaker 1</h3>
								<div class="!m-0 !p-0 text-base font-normal">
									<span class="text-slate-500">
										Short Description of Speaker. Below which is an image or smthng.
									</span>
								</div>
								<div
									class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
								/>
							</div>
						</PinContainer>
					</div>
				</div>
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
		flex: 0 0 33%;
		min-width: 0;
	}
</style>
