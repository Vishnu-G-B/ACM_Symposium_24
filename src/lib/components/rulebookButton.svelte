<script>
	export let link = "";
	
	function redirectToLink(){
		if(link) {
			window.location.href = link;
		}	
	}
</script>

<button class="button" data-text="Awesome" on:click={redirectToLink}>
	<span class="actual-text">&nbsp;Rule&nbsp;Book&nbsp;</span>
	<span aria-hidden="true" class="hover-text">&nbsp;Rule&nbsp;Book&nbsp;</span>
</button>

<style>
	/* === removing default button style ===*/
	.button {
		margin: 0;
		height: auto;
		background: transparent;
		padding: 0;
		border: none;
	}

	/* button styling */
	.button {
		--border-right: 6px;
		--text-stroke-color: #c6e7ff;
		--animation-color: #c6e7ff;
		--fs-size: 1.5rem;
		letter-spacing: 3px;
		text-decoration: none;
		font-size: var(--fs-size);
		font-family: 'Arial';
		position: relative;
		text-transform: uppercase;
		color: transparent;
		-webkit-text-stroke: 1px var(--text-stroke-color);
	}
	/* this is the text, when you hover on button */
	.hover-text {
		position: absolute;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		content: attr(data-text);
		color: var(--animation-color);
		width: 0%;
		inset: 0;
		border-right: var(--border-right) solid var(--animation-color);
		overflow: hidden;
		-webkit-transition: 0.5s;
		transition: 0.5s;
		-webkit-text-stroke: 1px var(--animation-color);
	}
	/* hover */
	.button:hover .hover-text {
		width: 100%;
		-webkit-filter: drop-shadow(0 0 23px var(--animation-color));
		filter: drop-shadow(0 0 23px var(--animation-color));
	}
</style>
