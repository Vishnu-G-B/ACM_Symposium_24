<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import Squiggle from '$lib/components/lottie/squiggle.svelte';
	import BackgroundFill from '$lib/components/lottie/backgroundFill.svelte';
	import StickyParas from '$lib/components/stickyParas.svelte';
	import PinContainer from '$lib/components/ui/ThreeDPin/PinContainer.svelte';
	import StickySchedule from '$lib/components/stickySchedule.svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import emblaCarousel from 'embla-carousel-svelte';

	let options = { loop: true };

	gsap.registerPlugin(ScrollTrigger);
	onMount(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline();
			tl.to('.squiggle', {
				duration: 240,
				rotation: 3600,
				repeat: -1
			});

			const onLoadTimeline = gsap.timeline();
			onLoadTimeline.to('.reveal-1', {
				height: '100vh'
			});
			onLoadTimeline.to(
				'.reveal-2',
				{
					height: '100vh',
					delay: 0.5
				},
				'<'
			);
			onLoadTimeline.to(
				'.reveal-3',
				{
					height: '100vh',
					delay: 0.5
				},
				'<'
			);
			onLoadTimeline.to(
				'.landing-content',
				{
					display: 'flex',
					opacity: 1,
					delay: 0.5
				},
				'<'
			);
			onLoadTimeline.to(
				'.squiggle,.bgfill',
				{
					opacity: 1
				},
				'<'
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
				scale: 0.9,
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
					scrub: 1
				}
			});
			themesTosched.to('.schedule', {
				rotate: 0,
				scale: 1,
			});
		});
	});
</script>

<!-- Landing Page -->
<div class="landingPg h-screen w-full bg-transparent sticky top-0">
	<div class="h-0 w-full bg-primaryContainer reveal-1 absolute bottom-0"></div>
	<div class="h-0 w-full bg-primary reveal-2 absolute bottom-0"></div>
	<section class="h-0 w-full bg-primary reveal-3 absolute bottom-0">
		<div class="h-full w-full flex justify-around items-center flex-col hidden landing-content opacity-0">
			<div
				class="h-full flex justify-center items-center
            text-[10rem] Smobile:text-[10rem] Mmobile:text-[15rem] sm:text-[20rem] md:text-[28rem] lg:text-[30rem] xl:text-[40rem]
            lg:ml-[75px] -mt-[3rem]
            tracking-wider font-normal font-outwardBlock text-onPrimary"
				style="text-align: center;"
			>
				ISCADS' 24 <br />
			</div>
			<div
				class="
				text-center tracking-wide font-humaneSemiBold text-onSurface
				text-[3rem] leading-[2.3rem]
        		-mt-[28rem] lg:ml-[25px]"
			>
				APRIL 3RD ONWARDS, <br /> MIT BENGALURU
			</div>
		</div>

		<!-- <div class="w-fit h-fit absolute top-[55%] left-0 squiggle opacity-0">
			<Squiggle />
		</div> -->

		<!-- <div class="w-fit h-fit absolute top-[-60px] right-0 bgfill opacity-0">
			<BackgroundFill />
		</div> -->
	</section>
</div>

<!-- Themes Section -->

<div class="w-full h-fit themes scale-[0.55] rotate-12">
	<section class="bg-onSurface border-x-2 border-t-2 z-[99]">
		<StickyParas />
	</section>
</div>

<div class="schedule scale-[0.65] -rotate-[8deg]">
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
								<h3 class="!m-0 max-w-xs text-6xl uppercase tracking-wider font-bold font-humaneThin text-slate-100">Speaker 1</h3>
								<div class="!m-0 !p-0 text-base font-normal">
									<span class="text-slate-500">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus alias expedita, similique cumque repellat voluptatem quia odit temporibus illo. Eligendi accusantium vero nemo deserunt quae quam rerum maxime eos.
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
