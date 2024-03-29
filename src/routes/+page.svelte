<script>
	// @ts-nocheck

	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import StickyParas from '$lib/components/stickyParas.svelte';
	import PinContainer from '$lib/components/ui/ThreeDPin/PinContainer.svelte';
	import StickySchedule from '$lib/components/stickySchedule.svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import emblaCarousel from 'embla-carousel-svelte';
	import * as THREE from 'three';
	import NET from 'vanta/dist/vanta.net.min';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let options = { loop: true };
	let effect;
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
	async function showNotif(message) {
		const notif = document.getElementById('notif');
		const notifText = document.getElementById('notifText');
		notifText.innerText = message;
		gsap.to(notif, {
			top: '55',
			duration: 2,
			ease: 'elastic.inOut(1,0.3)'
		});
		setTimeout(() => {
			gsap.to(notif, {
				top: '-100%',
				duration: 3,
				ease: 'elastic.inOut(1,0.3)'
			});
		}, 4000);
	}

	gsap.registerPlugin(ScrollTrigger);
	onMount(() => {
		window.scrollTo(0,0)
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
			if (browser) {
				const urlParams = new URLSearchParams(window.location.search);
				if (urlParams.has('signedIn')) {
					setTimeout(() => {
						window.history.pushState({}, document.title, window.location.pathname);
					}, 1000);
					showNotif('Logged In!');
				}
				if (urlParams.has('signedOut')) {
					setTimeout(() => {
						window.history.pushState({}, document.title, window.location.pathname);
					}, 1000);
					showNotif('Logged Out!');
				}
			}
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
			let themesTosched = gsap.timeline({
				scrollTrigger: {
					id: 'themes to sched',
					trigger: '.themes',
					start: 'top+=20% top',
					end: vw < 479 ? 'center-=20% top' : '',
					scrub: 1
				}
			});
			themesTosched.to(
				'.schedule',
				{
					rotate: 0,
					scale: 1,
					y: 0,
					duration: 1
				},
				'<'
			);
		});
	});
	onDestroy(() => {
		if (effect) {
			effect.destroy();
		}
	});
</script>

<!-- Landing Page -->
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
				class="h-full flex justify-center items-center self-center
            text-[3rem] Smobile:text-[3.5rem] Mmobile:text-[3.7rem] sm:text-[6rem] md:text-[6.5rem] lg:text-[9rem] xl:text-[13rem]
            lg:ml-[20px]
			-mt-[12rem] sm:-mt-[5rem]
			overflow-hidden
             font-normal font-basebornSans text-onPrimaryContainer
			textFlyin1"
				style="text-align: center;"
			>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">T</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">U</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">R</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">I</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">N</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">G</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">E</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">R'</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">2</span>
				<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">4</span>
			</div>
			<div
				class="
				text-center tracking-wide font-TWK text-onSurface
				text-[1rem] lg:text-[1.5rem] leading-[2.3rem]
        		-mt-[37rem] sm:-mt-[28rem] lg:-mt-[26rem] xl:-mt-[24rem] lg:ml-[25px] py-1"
			>
				<span class="dateSpan block overflow-hidden translate-y-[20rem] py-1 -mb-14 text-center"
					>APRIL 8<sup>th</sup> ONWARDS,</span
				>
				<br />
				<span class="dateSpan block overflow-hidden translate-y-[20rem] py-1 text-center"
					>@ MIT BENGALURU</span
				>
			</div>
		</div>
	</div>
</div>

<!-- Themes Section -->

<div class="w-full h-fit themes scale-[0.55] rotate-12">
	<section class=" bg-surface border-x-2 border-t-2 z-[99]">
		<StickyParas />
	</section>
</div>

<div class="schedule scale-[0.2] lg:scale-[0.65] -rotate-[8deg]">
	<section class="w-full h-fit bg-primaryContainer">
		<StickySchedule />
	</section>
</div>
