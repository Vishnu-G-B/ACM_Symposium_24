<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import Squiggle from '$lib/components/lottie/squiggle.svelte';
	import BackgroundFill from '$lib/components/lottie/backgroundFill.svelte';
	import StickyParas from '$lib/components/stickyParas.svelte';
	import PinContainer from '$lib/components/ui/ThreeDPin/PinContainer.svelte';
	import StickySchedule from '$lib/components/stickySchedule.svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import emblaCarousel from 'embla-carousel-svelte';
	import Layout from './+layout.svelte';

	let options = { loop: true };

	gsap.registerPlugin(ScrollTrigger);
	onMount(() => {
		let vw = document.getElementById('vw')?.getBoundingClientRect().width;
		let vh = window.innerHeight;
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
			onLoadTimeline.to(spans, {
				...tweenConfig,
				stagger: 0.1
			},"<");
			onLoadTimeline.to(
				'.textFlyin2',
				{
					y: 0,
					duration: 0.4,
					ease: 'expo.out',
				},
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
					end: vw < 479 ? 'center+=10% top' : '',
					scrub: 1
				}
			});
			themesTosched.to('.schedule', {
				rotate: 0,
				scale: 1,
				y: vw < 479 ? -400 : 0
			});
		});
	});
</script>

<!-- Landing Page -->
<div class="landingPg h-screen w-full bg-primary sticky top-0" id="vw">
	<div class="h-0 w-full bg-primaryContainer reveal-1 absolute bottom-0"></div>
	<div class="h-0 w-full bg-onPrimaryContainer reveal-2 absolute bottom-0"></div>
	<section class="h-0 w-full bg-primary reveal-3 absolute bottom-0">
		<div class="h-full w-full flex justify-around items-center flex-col hidden landing-content">
			<div
				class="h-full flex justify-center items-center
            text-[8rem] Smobile:text-[9rem] Mmobile:text-[10rem] sm:text-[17rem] md:text-[19rem] lg:text-[22rem] xl:text-[34rem]
            ml-4 lg:ml-[75px]
			-mt-[12rem] sm:-mt-[3rem]
			overflow-hidden
            tracking-widest font-normal font-outwardBlock text-onPrimary
			textFlyin1"
				style="text-align: center;"
			>
				<span class="textSpan overflow-hidden translate-y-[100vh]">I</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">S</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">C</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">A</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">D</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">S'</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">2</span>
				<span class="textSpan overflow-hidden translate-y-[100vh]">4</span>
			</div>
			<div
				class="
				text-center tracking-wide font-humaneSemiBold text-onSurface
				text-[3rem] leading-[2.3rem] translate-y-[100vh]
				overflow-hidden textFlyin2
        		-mt-[37rem] sm:-mt-[28rem] lg:-mt-[26rem] xl:-mt-[24rem] lg:ml-[25px] pt-1"
			>
				APRIL 3RD ONWARDS, <br /> MIT BENGALURU
			</div>
		</div>
	</section>
</div>

<!-- Themes Section -->

<div class="w-full h-fit themes scale-[0.55] rotate-12">
	<section class="bg-onSurface border-x-2 border-t-2 z-[99]">
		<StickyParas />
	</section>
</div>

<div class="schedule scale-[0.2] lg:scale-[0.65] -rotate-[8deg]">
	<section class="w-full h-fit bg-surface">
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
