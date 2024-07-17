<script>
	// @ts-nocheck

	// import tempImg from '$lib/images/tempImg.jpg';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);
	let bigBall;
	let smallBall;
	let hoverables;

	onMount(() => {
		let sections = gsap.utils.toArray('.event1');
		let offsetWidth = document.querySelector('.container').offsetWidth - 500;

		bigBall = document.querySelector('.cursor__ball--big');
		smallBall = document.querySelector('.cursor__ball--small');
		hoverables = document.querySelectorAll('.hoverable');

		document.body.addEventListener('mousemove', onMouseMove);
		hoverables.forEach((element) => {
			element.addEventListener('mouseenter', onMouseHover);
			element.addEventListener('mouseleave', onMouseHoverOut);
		});

		// const ctx2 = gsap.context(()=> {
		//     const onLoadTimeline = gsap.timeline();
		//     onLoadTimeline.to(".reveal-1",{
		//         height: "100vh",
		//         ease: "power4.inOut",
		//         duration:1
		//     });
		//     onLoadTimeline.to(".reveal-2",{
		//         height:"100vh",
		//         delay:0.1,
		//         ease:"power4.inOut",
		//         duration:1
		//     },"<");
		//     onLoadTimeline.to(".reveal-3",{
		//         height: "100vh",
		//         delay:0.1,
		//         ease:"power4.inOut",
		//         duration:1,
		//         zIndex: 10
		//     },"<");

		// })

		function onMouseMove(e) {
			const container = document.querySelector('.container');
			const containerRect = container.getBoundingClientRect();
			const containerScrollLeft = container.scrollLeft;
			const mouseX = Math.max(
				0,
				Math.min(e.clientX - containerRect.left + containerScrollLeft, containerRect.width)
			);
			const mouseY = Math.max(0, Math.min(e.clientY, window.innerHeight));

			gsap.to(bigBall, {
				duration: 0.4,
				x: mouseX - 15,
				y: mouseY - 15,
				ease: 'power2.out'
			});

			gsap.to(smallBall, {
				duration: 0.1,
				x: mouseX - 5,
				y: mouseY - 7,
				ease: 'power2.out'
			});
		}

		function onMouseHover() {
			gsap.to(bigBall, {
				duration: 0.3,
				scale: 2,
				ease: 'power2.out'
			});
			gsap.to(smallBall, {
				duration: 0.3,
				scale: 2,
				ease: 'power2.out'
			});
		}

		function onMouseHoverOut() {
			gsap.to(bigBall, {
				duration: 0.3,
				scale: 1,
				ease: 'power2.out'
			});
			gsap.to(smallBall, {
				duration: 0.3,
				scale: 1,
				ease: 'power2.out'
			});
		}

		const ctx = gsap.context(() => {
			const HScrollTimeline = gsap.timeline();
			HScrollTimeline.to(sections, {
				xPercent: -100 * (sections.length - 2.5),
				ease: 'none',
				scrollTrigger: {
					trigger: '.container',
					pin: true,
					scrub: 1,
					end: () => '+=' + offsetWidth
				}
			});
		});
	});
</script>

<body class="cursor-none relative">
	<div class="cursor">
		<div class="cursor__ball cursor__ball--big">
			<svg height="30" width="30">
				<circle cx="15" cy="15" r="12" stroke-width="0"></circle>
			</svg>
		</div>

		<div class="cursor__ball cursor__ball--small">
			<svg height="10" width="10">
				<circle cx="5" cy="5" r="4" stroke-width="0"></circle>
			</svg>
		</div>
	</div>
	<div class="h-0 w-full bg-primaryContainer reveal-1 absolute z-[5] bottom-0"></div>
	<!-- <div class="h-0 w-full bg-onPrimaryContainer reveal-2 absolute bottom-0"></div> -->
	<div class="h-full w-auto bg-surface container overscroll-none">
		<div
			class=" h-[97vh] w-full pt-14 pb-4 ml-4 flex flex-nowrap items-center
            border-b-[1px] border-slate-500"
		>
			<div
				class="event1 w-[76vh] h-full border-r-[1px] border-slate-300 mr-[1vw] pr-[1vw] flex-none"
			>
				<div class="h-full w-full flex flex-col justify-center items-start">
					<img src="" alt="TEMP IMG" class="w-full h-full object-cover hoverable" />
					<div class=" text-3xl text-onSurface font-basebornSans mb-0 pb-0">
						STOCK SIMULATOR<br />
					</div>
					<div class=" text-sm text-onSurface font-TWK opacity-80">Stock trading extravaganza</div>
				</div>
			</div>
			<div
				class="event1 w-[76vh] h-full border-r-[1px] border-slate-300 mr-[1vw] pr-[1vw] flex-none"
			>
				<div class="h-full w-full flex flex-col justify-center items-start">
					<img src="" alt="TEMP IMG" class="w-full h-full object-cover hoverable" />
					<div class=" text-3xl text-onSurface font-basebornSans mb-0 pb-0">
						STOCK SIMULATOR<br />
					</div>
					<div class=" text-sm text-onSurface font-TWK opacity-80">Stock trading extravaganza</div>
				</div>
			</div>
			<div
				class="event1 w-[76vh] h-full border-r-[1px] border-slate-300 mr-[1vw] pr-[1vw] flex-none"
			>
				<div class="h-full w-full flex flex-col justify-center items-start">
					<img src="" alt="TEMP IMG" class="w-full h-full object-cover hoverable" />
					<div class=" text-3xl text-onSurface font-basebornSans mb-0 pb-0">
						STOCK SIMULATOR<br />
					</div>
					<div class=" text-sm text-onSurface font-TWK opacity-80">Stock trading extravaganza</div>
				</div>
			</div>
			<div
				class="event1 w-[76vh] h-full border-r-[1px] border-slate-300 mr-[1vw] pr-[1vw] flex-none"
			>
				<div class="h-full w-full flex flex-col justify-center items-start">
					<img src="" alt="TEMP IMG" class="w-full h-full object-cover hoverable" />
					<div class=" text-3xl text-onSurface font-basebornSans mb-0 pb-0">
						STOCK SIMULATOR<br />
					</div>
					<div class=" text-sm text-onSurface font-TWK opacity-80">Stock trading extravaganza</div>
				</div>
			</div>
			<div class="event1 w-[76vh] h-full pr-[1vw] flex-none">
				<div class="h-full w-full flex flex-col justify-center items-start">
					<img src="" alt="TEMP IMG" class="w-full h-full object-cover hoverable" />
					<div class=" text-3xl text-onSurface font-basebornSans mb-0 pb-0">
						STOCK SIMULATOR<br />
					</div>
					<div class=" text-sm text-onSurface font-TWK opacity-80">Stock trading extravaganza</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="h-screen w-full overflow-hidden">TESTING</div> -->
</body>

<style>
	body .cursor {
		pointer-events: none;
	}
	body .cursor__ball {
		position: fixed;
		top: 0;
		left: 0;
		mix-blend-mode: difference;
		z-index: 1000;
	}
	body .cursor__ball circle {
		fill: #f7f8fa;
	}
</style>
