<script>
	// @ts-nocheck

	import emblaCarousel from 'embla-carousel-svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import * as THREE from 'three';
	import NET from 'vanta/dist/vanta.net.min';
	import RulebookButton from '$lib/components/rulebookButton.svelte';
	import Empty from '$lib/components/empty.svelte';
	import LightButton from '$lib/components/lightButton.svelte';

	let emblaAPI;
	let vw;
	let options = { loop: true, dragFree: true };
	function onInit(event) {
		emblaAPI = event.detail;
	}

	gsap.registerPlugin(ScrollTrigger);
	export let data;
	console.log(data);
	let effect;
	function vanta(node) {
		let vw = document.getElementById('vw')?.getBoundingClientRect().width;
		let vh = document.getElementById('vw')?.getBoundingClientRect().height;
		effect = NET({
			el: node,
			THREE: THREE,
			mouseControls: true,
			touchControls: true,
			gyroControls: vw < 479 ? true : false,
			minHeight: vh,
			minWidth: vw,
			scale: 1.0,
			scaleMobile: 1.0,
			points: vw < 479 ? 8.0 : 13.0,
			maxDistance: vw < 479 ? 15.0 : 20.0,
			spacing: vw < 479 ? 15.0 : 18.0,
			color: 0x7accfe,
			backgroundColor: 0x010f18
		});
	}

	onMount(() => {
		window.scrollTo(0, 0);
		vw = document.getElementById('vw')?.getBoundingClientRect().width;
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
			let landingToFirst = gsap.timeline({
				scrollTrigger: {
					id: 'events landing to first set of events',
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
							gyroControls: vw < 479 ? true : false,
							minHeight: vh,
							minWidth: vw,
							scale: 1.0,
							scaleMobile: 1.0,
							points: vw < 479 ? 8.0 : 13.0,
							maxDistance: vw < 479 ? 15.0 : 20.0,
							spacing: vw < 479 ? 15.0 : 18.0,
							color: 0x7accfe,
							backgroundColor: 0x010f18
						});
					}
				}
			});
			landingToFirst.to('.landingPg', {
				rotate: '-5deg',
				scale: vw < 479 ? 0.6 : 0.9,
				y: 50
			});
			landingToFirst.to(
				'.first-carousel',
				{
					rotate: 0,
					scale: 1
				},
				'<'
			);
			landingToFirst.to('.landingPg', {
				opacity: 0
			});
		});
	});

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
	onDestroy(() => {
		if (effect) {
			effect.destroy();
		}
	});
</script>

<div class="landingPg h-screen w-full bg-primary sticky top-0 z-0" id="vw">
	<div class="h-0 w-full bg-primaryContainer reveal-1 absolute bottom-0 z-[1]"></div>
	<div class="h-0 w-full bg-onPrimaryContainer reveal-2 absolute bottom-0 z-[2]"></div>
	<div
		class="h-0 w-full bg-primary reveal-3 absolute bottom-0 HeroBGAnim z-[3]"
		id="HeroBGAnim"
		use:vanta
	>
		<div
			class="h-full w-full flex justify-around items-center flex-col hidden landing-content z-[4]"
		>
			<div class="h-full w-full flex justify-around items-center flex-col hidden landing-content">
				<div
					class="h-full flex flex-col sm:flex-row justify-center items-center
            text-[3rem] Smobile:text-[3rem] Mmobile:text-[3.5rem] sm:text-[3.5rem] md:text-[4.31rem] lg:text-[5.54rem] xl:text-[8rem]
        	lg:ml-[20px]
			-mt-[12rem] sm:-mt-[5rem]
             font-normal font-basebornSans text-onPrimaryContainer
			textFlyin1"
					style="text-align: center;"
				>
					<div class="flex justify-center items-center">
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">R</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">E</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">G</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">I</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">S</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">T</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">E</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">R</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">E</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">D</span>
					</div>
					<div class="flex justify-center items-center -mb-[13rem] sm:-ml-[20.5rem]">
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">E</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">V</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">E</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">N</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">T</span>
						<span class="textSpan text-inherit overflow-hidden translate-y-[100vh]">S</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#if data.signedIn == true}
	{#if data.events.length > 0}
		<div
			class="first-carousel h-full sm:h-screen w-full bg-surface flex justify-center items-center scale-[0.25] sm:scale-[0.55] rotate-[8deg] sm:rotate-[20deg]
		sm:border-b-2 sm:border-onSurface sm:border-dashed"
		>
			{#if vw < 479}
				<div class="h-full w-full flex relative">
					<div
						class="h-fit w-[10%] self-start text-3xl font-basebornSans uppercase text-white -rotate-90 sticky top-[11.5rem]"
					>
						Your&nbsp;Events!
					</div>
					<div class="h-full w-full flex flex-col justify-between items-center -ml-1 pl-1 pr-2">
						{#each data.events as event}
							<div class="card self-center">
								<div class="card-side front flex justify-start items-end relative">
									<div class="h-fit w-fit absolute top-1 right-1">
										<button disabled>
											<a class="fancy !cursor-default" disabled>
												<span class="top-key"></span>
												<span class="text">You're Registered!!</span>
												<span class="bottom-key-1"></span>
												<span class="bottom-key-2"></span>
											</a>
										</button>
									</div>
									<div class="h-fit w-full flex justify-between items-center">
										<div class=" font-basebornSans text-2xl uppercase">
											{event.eventName}<br />
											<span class=" font-TWK text-sm uppercase leading-none block"
												>{event.eventTimings}</span
											>
										</div>
										<div>
											<button
												title="Add New"
												class="group cursor-pointer outline-none hover:rotate-90 duration-300"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="50px"
													height="50px"
													viewBox="0 0 24 24"
													class="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
												>
													<path
														d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
														stroke-width="1.5"
													></path>
													<path d="M8 12H16" stroke-width="1.5"></path>
													<path d="M12 16V8" stroke-width="1.5"></path>
												</svg>
											</button>
										</div>
									</div>
								</div>
								<div class="card-side back flex flex-col justify-start items-start relative">
									<div class=" font-basebornSans text-2xl uppercase">About The Event :</div>
									<div class=" font-subjectivityMedSlant text-sm">
										{event.eventDesc}
									</div>
									<div class=" border-2 border-white mt-4 mb-4">
										<RulebookButton />
									</div>
									<div class=" font-basebornSans text-[1.75rem] uppercase">Prize Pool :</div>
									<div class="flex flex-col justify-between items-center flex-nowrap gap-2">
										<span class="block font-subjectivityMedSlant text-lg">
											1<sup>st</sup>- ₹6,000</span
										>
										<span class="block font-subjectivityMedSlant text-lg">
											2<sup>nd</sup>- ₹4,000</span
										>
										<span class="block font-subjectivityMedSlant text-lg">
											3<sup>rd</sup>- ₹2,000</span
										>
									</div>
									<div class="h-fit w-fit absolute bottom-1 right-1">
										<button disabled>
											<a class="fancy !cursor-default" disabled>
												<span class="top-key"></span>
												<span class="text">You're Registered!!</span>
												<span class="bottom-key-1"></span>
												<span class="bottom-key-2"></span>
											</a>
										</button>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{:else}
				<div class="h-full w-full flex flex-col justify-center items-center px-4">
					<div
						class=" h-fit w-full text-left pt-8 pl-4 text-5xl -mb-10 z-40 font-basebornSans uppercase"
					>
						Your Events!
					</div>
					<div
						class="h-full w-full bg-surface z-10 embla"
						use:emblaCarousel={{ options }}
						on:emblaInit={onInit}
					>
						<div class="h-full w-full z-10 embla__container">
							{#each data.events as event}
								<div class="card embla__slide self-center">
									<div class="card-side front flex justify-start items-end leading-none relative">
										<div class="h-fit w-fit absolute top-1 right-1">
											<button disabled>
												<a class="fancy !cursor-default" disabled>
													<span class="top-key"></span>
													<span class="text">You're Registered!!</span>
													<span class="bottom-key-1"></span>
													<span class="bottom-key-2"></span>
												</a>
											</button>
										</div>
										<div class=" font-basebornSans text-3xl uppercase leading-none">
											{event.eventName} <br />
											<span class=" font-TWK text-lg uppercase leading-none block"
												>{event.eventTimings}</span
											>
										</div>
									</div>
									<div class="card-side back flex flex-col justify-start items-start relative">
										<div class=" font-basebornSans text-4xl uppercase">About The Event :</div>
										<div class=" font-subjectivityMedSlant text-md">
											{event.eventDesc}
										</div>
										<!-- <div class=" border-2 border-white mt-4 mb-4">
											<RulebookButton />
										</div>
										<div class=" font-basebornSans text-4xl uppercase">Prize Pool :</div>
										<div class="flex flex-col justify-between items-center flex-nowrap gap-2">
											<span class="block font-subjectivityMedSlant text-lg">
												1<sup>st</sup>- ₹6,000</span
											>
											<span class="block font-subjectivityMedSlant text-lg">
												2<sup>nd</sup>- ₹4,000</span
											>
											<span class="block font-subjectivityMedSlant text-lg">
												3<sup>rd</sup>- ₹2,000</span
											>
										</div> -->
										<div class="h-fit w-fit absolute bottom-1 right-1">
											<button disabled>
												<a class="fancy !cursor-default" disabled>
													<span class="top-key"></span>
													<span class="text">You're Registered!!</span>
													<span class="bottom-key-1"></span>
													<span class="bottom-key-2"></span>
												</a>
											</button>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>
	{:else}
		<!-- show user needs to register for events text here -->
		<div
			class="first-carousel h-full sm:h-screen w-full bg-surface flex justify-center items-center scale-[0.25] sm:scale-[0.55] rotate-[8deg] sm:rotate-[20deg]
		sm:border-b-2 sm:border-onSurface sm:border-dashed"
		>
			<div class="h-full w-full flex flex-col justify-center items-center px-4">
				<div
					class=" h-fit w-full text-left pt-8 sm:pl-4 text-3xl text-center sm:text-5xl sm:mb-6 z-40 font-basebornSans uppercase"
				>
					Your Events??
				</div>
				<div class="h-full w-full bg-surface z-10 self-center">
					<div class="h-full w-full z-10 flex justify-center items-center">
						<div class="card self-center !ml-0 !mr-0 !max-w-[100%] sm:!max-w-[80%]">
							<div class="card-side front flex justify-center items-center leading-none relative">
								<div class="h-fit w-fit absolute top-1 right-1">
									<button>
										<a class="fancy !cursor-default" href="/events">
											<span class="top-key"></span>
											<span class="text">Register Now!!</span>
											<span class="bottom-key-1"></span>
											<span class="bottom-key-2"></span>
										</a>
									</button>
								</div>
								<div class=" font-basebornSans text-2xl sm:text-3xl uppercase leading-none">
									WoW, such empty!
								</div>
							</div>
							<div class="card-side back flex flex-col justify-center items-center relative">
								<div class=" font-basebornSans text-2xl sm:text-4xl uppercase text-center">
									We have a vast array of events lined up!<br /> There is something for everyone
									don't miss out!<br /> Register Now!!
								</div>
								<div class="h-fit w-fit absolute bottom-1 right-1">
									<button>
										<a class="fancy !cursor-default" href="/events">
											<span class="top-key"></span>
											<span class="text">Register Now!!</span>
											<span class="bottom-key-1"></span>
											<span class="bottom-key-2"></span>
										</a>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}

	{#if data.non_mahe}
		{#if data.paymentProcessing}
			<div class="w-full h-screen flex flex-col justify-center items-center">
				<div class="text-center">
					<h2 class="text-3xl font-bold mb-4">Your payment is still processing</h2>
					<p class="text-lg">
						Please wait while we process your payment. You will receive your unique token once the
						payment is successful.
					</p>
				</div>
				<div class=" w-full h-fit text-center flex-col justify-center items-center">
					<h3 class="text-3xl font-bold mt-8 mb-4">Not Paid yet?</h3>
					<div class="w-full h-fit flex justify-center items-center">
						<LightButton link="https://forms.gle/q6yKKKqmM7VFvqBS7" buttonText="Pay Now!" />
					</div>
				</div>
			</div>
		{:else if data.token}
			<div class="w-full h-screen flex justify-center items-center">
				<div class="text-center">
					<h2 class="text-3xl font-bold mb-4">Your Unique Token</h2>
					<p class="text-4xl">{data.token}</p>
				</div>
			</div>
		{/if}
	{/if}
{:else}
	<div class="relative w-full h-full overflow-hidden">
		<Empty
			errorText="Looks Like you're not signed in!"
			errorPara="Please Login so that you can access the events that you have registered for!"
			errorLink="/"
			errorLinkText="Home"
		/>
	</div>
{/if}

<style>
	.card {
		perspective: 150rem;
		position: relative;
		height: 35rem;
		width: 100%;
		max-width: 600px;
		margin: 0.5rem;
		box-shadow: none;
		@media screen and (max-width: 479px) {
			max-width: 400px;
			margin-bottom: 35rem;
			margin-left: 2rem;
			margin-right: 2rem;
			height: 100%;
		}
	}

	.card-side {
		height: 35rem;
		border-radius: 15px;
		transition: all 0.8s ease;
		backface-visibility: hidden;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding: 1rem;
		color: white;
	}

	.card-side.back {
		transform: rotateY(-180deg);
		background-color: #4158d0;
		background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
	}

	.card-side.front {
		background-color: #0093e9;
		background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
	}

	.card:hover .card-side.front {
		transform: rotateY(180deg);
	}

	.card:hover .card-side.back {
		transform: rotateY(0deg);
	}

	/* Vendor prefixes */
	@supports (-webkit-backface-visibility: hidden) or (backface-visibility: hidden) {
		.card-side {
			-webkit-backface-visibility: hidden;
			backface-visibility: hidden;
		}

		.card-side.back {
			-webkit-transform: rotateY(-180deg);
			transform: rotateY(-180deg);
		}

		.card-side.front {
			-webkit-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		.card:hover .card-side.front {
			-webkit-transform: rotateY(180deg);
			transform: rotateY(180deg);
		}

		.card:hover .card-side.back {
			-webkit-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
	.fancy {
		background-color: transparent;
		border: 2px solid #000;
		border-radius: 10px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		float: right;
		font-weight: 700;
		letter-spacing: 0.05em;
		margin: 0;
		outline: none;
		overflow: visible;
		padding: 1.25em 2em;
		position: relative;
		text-align: center;
		text-decoration: none;
		text-transform: none;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		font-size: 13px;
	}

	.fancy::before {
		content: ' ';
		width: 1.5625rem;
		height: 2px;
		background: black;
		top: 50%;
		left: 1.5em;
		position: absolute;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		-webkit-transform-origin: center;
		-ms-transform-origin: center;
		transform-origin: center;
		-webkit-transition:
			background 0.3s linear,
			width 0.3s linear;
		transition:
			background 0.3s linear,
			width 0.3s linear;
	}

	.fancy .text {
		font-size: 1.125em;
		line-height: 1.33333em;
		padding-left: 2em;
		display: block;
		text-align: left;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		text-transform: uppercase;
		text-decoration: none;
		color: black;
	}

	.fancy .top-key {
		height: 2px;
		width: 1.5625rem;
		top: -2px;
		left: 0.625rem;
		position: absolute;
		background: #e8e8e8;
		-webkit-transition:
			width 0.5s ease-out,
			left 0.3s ease-out;
		transition:
			width 0.5s ease-out,
			left 0.3s ease-out;
	}

	.fancy .bottom-key-1 {
		height: 2px;
		width: 1.5625rem;
		right: 1.875rem;
		bottom: -2px;
		position: absolute;
		background: #e8e8e8;
		-webkit-transition:
			width 0.5s ease-out,
			right 0.3s ease-out;
		transition:
			width 0.5s ease-out,
			right 0.3s ease-out;
	}

	.fancy .bottom-key-2 {
		height: 2px;
		width: 0.625rem;
		right: 0.625rem;
		bottom: -2px;
		position: absolute;
		background: #e8e8e8;
		-webkit-transition:
			width 0.5s ease-out,
			right 0.3s ease-out;
		transition:
			width 0.5s ease-out,
			right 0.3s ease-out;
	}

	.fancy:hover {
		color: white;
		background: black;
	}

	.fancy:hover::before {
		width: 0.9375rem;
		background: white;
	}

	.fancy:hover .text {
		color: white;
		padding-left: 1.5em;
	}

	.fancy:hover .top-key {
		left: -2px;
		width: 0px;
	}

	.fancy:hover .bottom-key-1,
	.fancy:hover .bottom-key-2 {
		right: 0;
		width: 0;
	}
</style>
