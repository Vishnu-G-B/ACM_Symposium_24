<script>
// @ts-nocheck

	import { onMount, onDestroy } from 'svelte';

	let container;
	let moveAmount = 150; // The amount by which the container moves
	let moveSpeed = 0.3; // The speed of the movement

	const handleMouseMove = (event) => {
		const { clientX, clientY, currentTarget } = event;
		const { offsetWidth, offsetHeight } = currentTarget;

		// Calculate the position of the mouse relative to the center of the container
		const offsetX = (clientX / window.innerWidth - 0.5) * 2;
		const offsetY = (clientY / window.innerHeight - 0.5) * 2;

		// Adjust the translation based on the offset and the moveAmount
		const translateX = -offsetX * moveAmount;
		const translateY = -offsetY * moveAmount;

		// Apply the translation with the defined speed
		container.style.transition = `transform ${moveSpeed}s ease-out`;
		container.style.transform = `translate(${translateX}px, ${translateY}px)`;
	};

	onMount(() => {
		document.addEventListener('mousemove', handleMouseMove);
	});

	onDestroy(() => {
		document.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<div class="container" bind:this={container}>
	<div class="item"></div>
	<div class="item"></div>
	<div class="item"></div>
	<div class="item"></div>
	<div class="item"></div>
	<div class="item"></div>
	<div class="item"></div>
	<div class="item"></div>
	<div class="item"></div>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		background-color: #ff0; /* Yellow background */
		padding: 20px;
		height: 100vh;
		position: relative;
		transition: transform 0.2s ease-out;
	}

	.item {
		background-color: black;
		width: 200px;
		height: 200px;
		margin: 10px;
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	}

	.item:nth-child(odd) {
		margin-top: 50px;
	}
</style>
