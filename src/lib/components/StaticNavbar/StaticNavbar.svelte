<!-- -top-[36.7%] -->

<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
	let tl;
	let isActive = false;

	const handleSignIn = async () => {
		console.log('Signing IN');
		await signIn('google', { callbackUrl: '/?signedIn' });
	};

	const handleSignOut = async () => {
		console.log('signing Out');
		await signOut({ callbackUrl: '/?signedOut' });
	};

	function toggleNav() {
		const nav = document.getElementById('navbar');
		let navResetTop = getComputedStyle(nav).top;
		console.log(navResetTop);
		const navbar = document.getElementById('navbar');
		const hamburgerBtn = document.getElementById('hamburger');

		// @ts-ignore
		if (hamburgerBtn.classList.contains('is-active')) {
			gsap.to(navbar, {
				top: '-275.15px',
				duration: 0.6,
				ease: 'bounce.out'
			});
			isActive = !isActive;
		} else {
			gsap.to(navbar, {
				top: '0',
				duration: 0.6,
				ease: 'bounce.out'
			});
			isActive = !isActive;
		}
	}

	function navRedirect(link) {
		toggleNav();
		window.location.href = link;
	}

	onMount(() => {
		const ctx = gsap.context(() => {
			tl = gsap.timeline();
		});
	});
</script>

<div class="fixed -top-[275.15px] left-0 right-0 z-50" id="navbar">
	<nav
		class="w-[18rem] sm:w-[23rem] h-[20rem] flex justify-center items-center ml-auto mr-auto relative"
	>
		<div
			class="w-full h-[12rem] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[20px] rounded-bl-[20px] bg-onPrimaryContainer
  flex justify-center items-center relative z-50"
		>
			<div
				class="links flex justify-center items-center flex-col
    w-full h-full pl-8 pr-8 absolute z-[49] mt-5"
			>
				<div
					class="w-full h-fit text-center mb-1 text-2xl uppercase font-subjectivityMedSlant tracking-widest"
				>
					<button on:click={() => navRedirect('/')}>
						<a data-replace="HOME"> <span class="!uppercase">Home</span></a></button
					>
				</div>
				<div
					class="w-full h-fit text-center mb-1 text-2xl uppercase font-subjectivityMedSlant tracking-widest"
				>
					<button on:click={() => navRedirect('/events')}
						><a data-replace="EVENTS"> <span class="!uppercase">Events</span></a></button
					>
				</div>
				<div
					class="w-full h-fit text-center mb-1 text-2xl uppercase font-subjectivityMedSlant tracking-widest"
				>
					<button on:click={() => navRedirect('/registeredEvents')}>
						<a data-replace="MY EVENTS"> <span class="!uppercase">MY EVENTS</span></a>
					</button>
				</div>
				<div
					class="w-full h-fit text-center mb-1 text-2xl uppercase font-subjectivityMedSlant tracking-widest"
				>
					<button on:click={() => navRedirect('/team')}
						><a data-replace="Team"> <span class="!uppercase">Team</span></a></button
					>
				</div>
				<div
					class="w-full h-fit text-center mb-1 text-2xl uppercase font-subjectivityMedSlant tracking-widest"
				>
					{#if !$page.data.session?.user}
						<button on:click={handleSignIn}>
							<a data-replace="Login" class="uppercase"> <span>Login</span></a>
						</button>
					{:else}
						<button on:click={handleSignOut}>
							<a href="/" data-replace="Logout" class="uppercase"> <span>Logout</span></a>
						</button>
					{/if}
				</div>
			</div>
		</div>
		<svg
			class="w-full h-fit absolute top-auto bottom-[0.5rem] sm:bottom-0 left-0 right-0 z-0"
			xmlns="http://www.w3.org/2000/svg"
			width="521"
			height="170"
			viewBox="0 0 521 170"
			fill="none"
		>
			<path
				d="M0 52V50C0 22.3858 22.3858 0 50 0H471C498.614 0 521 22.3858 521 50V52C521 79.6142 498.614 102 471 102H404C385.222 102 370 117.222 370 136C370 154.778 354.778 170 336 170H186C167.222 170 152 154.778 152 136C152 117.222 136.778 102 118 102H50C22.3858 102 0 79.6142 0 52Z"
				fill="#c6e7ff"
			/>
		</svg>
		<div
			class="w-fit h-fit absolute top-auto -bottom-[11%] sm:-bottom-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[49]"
		>
			<button
				class="hamburger hamburger--emphatic"
				class:is-active={isActive}
				type="button"
				id="hamburger"
				on:click={toggleNav}
			>
				<span class="hamburger-box">
					<span class="hamburger-inner"> </span>
				</span>
			</button>
		</div>
	</nav>
</div>

<style>
	a {
		overflow: hidden;
		position: relative;
		display: inline-block;
	}

	a::before,
	a::after {
		content: '';
		position: absolute;
		width: 100%;
		left: 0;
	}
	a::before {
		background-color: #71bcff;
		height: 2px;
		bottom: 0;
		transform-origin: 100% 50%;
		transform: scaleX(0);
		transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
	}
	a::after {
		content: attr(data-replace);
		height: 100%;
		top: 0;
		transform-origin: 100% 50%;
		transform: translate3d(200%, 0, 0);
		transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
		color: #71bcff;
	}

	a:hover::before {
		transform-origin: 0% 50%;
		transform: scaleX(1);
	}
	a:hover::after {
		transform: translate3d(0, 0, 0);
	}

	a span {
		display: inline-block;
		transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
	}

	a:hover span {
		transform: translate3d(-200%, 0, 0);
	}

	/* Presentational Styles */
	body {
		display: grid;
		font-family: 'Poppins', sans-serif;
		font-size: 27px;
		line-height: 1.5;
		height: 100vh;
		place-items: center;
	}

	a {
		text-decoration: none;
		color: #18272f;
		font-weight: 700;
		vertical-align: top;
	}

	.hamburger {
		padding: 15px 15px;
		display: inline-block;
		cursor: pointer;
		transition-property: opacity, filter, transform; /* Added transform */
		transition-duration: 0.15s;
		transition-timing-function: linear;
		font: inherit;
		color: inherit;
		text-transform: none;
		background-color: transparent;
		border: 0;
		margin: 0;
		overflow: visible;
	}

	.hamburger:hover {
		opacity: 1;
	}

	.hamburger.is-active:hover {
		opacity: 1;
	}

	/* Added transform property */
	.hamburger.is-active .hamburger-inner,
	.hamburger.is-active .hamburger-inner::before,
	.hamburger.is-active .hamburger-inner::after {
		background-color: #000;
		transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1); /* Added */
	}

	.hamburger-box {
		width: 40px;
		height: 24px;
		display: inline-block;
		position: relative;
	}

	.hamburger-inner {
		display: block;
		top: 50%;
		margin-top: -2px;
		transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1); /* Added */
	}

	.hamburger-inner,
	.hamburger-inner::before,
	.hamburger-inner::after {
		width: 40px;
		height: 4px;
		background-color: #000;
		border-radius: 4px;
		position: absolute;
	}

	.hamburger-inner::before {
		content: '';
		display: block;
		top: -10px;
	}

	.hamburger-inner::after {
		content: '';
		display: block;
		bottom: -10px;
	}

	.hamburger--emphatic {
		overflow: hidden;
	}

	.hamburger--emphatic .hamburger-inner {
		transition: background-color 0.125s 0.175s ease-in;
	}

	.hamburger--emphatic .hamburger-inner::before {
		left: 0;
		transition:
			transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
			top 0.05s 0.125s linear,
			left 0.125s 0.175s ease-in;
	}

	.hamburger--emphatic .hamburger-inner::after {
		top: 10px;
		right: 0;
		transition:
			transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
			top 0.05s 0.125s linear,
			right 0.125s 0.175s ease-in;
	}

	.hamburger--emphatic.is-active .hamburger-inner {
		transition-delay: 0.3s;
		transition-timing-function: ease-out;
		background-color: transparent !important;
	}

	.hamburger--emphatic.is-active .hamburger-inner::before {
		left: -80px;
		top: -80px;
		transform: translate3d(80px, 80px, 0) rotate(45deg);
		transition:
			left 0.125s ease-out,
			top 0.05s 0.125s linear,
			transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.hamburger--emphatic.is-active .hamburger-inner::after {
		right: -80px;
		top: -80px;
		transform: translate3d(-80px, 80px, 0) rotate(-45deg);
		transition:
			right 0.125s ease-out,
			top 0.05s 0.125s linear,
			transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
</style>
