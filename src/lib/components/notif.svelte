<script>
	// @ts-nocheck

</script>

<div class="fixed -translate-x-2/4 translate-y-0 left-2/4 -top-full z-50 notif" id="notif">
	<a class="fancy">
		<span class="top-key"></span>
		<span class="text" id="notifText">Sample Text</span>
		<span class="bottom-key-1"></span>
		<span class="bottom-key-2"></span>
	</a>
</div>

<style>
	.fancy {
		background-color: white;
        background: white;
		border: 2px solid #fff;
		border-radius: 10px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		color: white;
		cursor: default;
		display: inline-block;
		float: right;
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
        width: 0.9375rem;
		background: black;
		content: ' ';
		height: 2px;
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
        color: black;
		padding-left: 1.5em;
        font-family: "BaseBornSans","Helvetica";
		font-size: 1.5rem;
		line-height: 1.33333em;
		display: block;
		text-align: left;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		text-transform: uppercase;
		text-decoration: none;
	}

	.fancy .top-key {
		height: 2px;
		width: 1.5625rem;
		top: -2px;
		left: 0.625rem;
		position: absolute;
		background: #212121;
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
		background: #212121;
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
		background: #212121;
		-webkit-transition:
			width 0.5s ease-out,
			right 0.3s ease-out;
		transition:
			width 0.5s ease-out,
			right 0.3s ease-out;
	}
	.fancy:hover .text {
		color: black;
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
