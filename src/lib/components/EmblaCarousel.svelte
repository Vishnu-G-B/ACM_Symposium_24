<script>
	// @ts-nocheck

	import { onMount, onDestroy } from 'svelte';
	import EmblaCarousel from 'embla-carousel';
	import { setupTweenParallax } from './tweenParallax.js';
	import { addDotBtnsAndClickHandlers } from './emblaCarouselDotButtons.js';
	import { addPrevNextBtnsClickHandlers } from './emblaCarouselArrowButtons.js';

	export let options = { dragFree: true, loop: true };

	let emblaNode;
	let viewportNode;
	let prevBtn;
	let nextBtn;
	let dotsNode;

	let emblaApi;
	let removeTweenParallax;
	let removePrevNextBtnsClickHandlers;
	let removeDotBtnsAndClickHandlers;

	onMount(() => {
		viewportNode = emblaNode.querySelector('.embla__viewport');
		prevBtn = emblaNode.querySelector('.embla__button--prev');
		nextBtn = emblaNode.querySelector('.embla__button--next');
		dotsNode = emblaNode.querySelector('.embla__dots');

		emblaApi = EmblaCarousel(viewportNode, options);
		removeTweenParallax = setupTweenParallax(emblaApi);

		removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevBtn, nextBtn);
		removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(emblaApi, dotsNode);
	});
</script>

<div class="embla h-full w-full bg-surface z-50" bind:this={emblaNode}>
	<div class="embla__viewport">
		<div class="embla__container">
			<slot />
		</div>
	</div>
	<button class="embla__button embla__button--prev" type="button">Prev</button>
	<button class="embla__button embla__button--next" type="button">Next</button>
	<div class="embla__dots" />
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
</style>
