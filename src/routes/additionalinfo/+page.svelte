<script>
	// @ts-nocheck

	let email = '';
	let mobileNo;
	let branch = '';
	let selectedRadio = '';
	export let form;
</script>

<div class="w-full h-dvh flex justify-center items-center">
	<div class="flex flex-col justify-center items-center flex-1 p-[24px] w-full h-full">
		<form method="POST">
			<h1 class="!font-basebornSans !uppercase">Welcome&nbsp;Again!</h1>
			<h6 class="font-TWK text-center">
				Please fill this form correctly as we will use this information to contact you, when you win
				an event!
			</h6>
			{#if form?.error || false}
				<p class="error">The information you have entered is not correct</p>
			{/if}
			<label>
				<p class={email ? ' above' : ' center'}>Your Name</p>
				<input bind:value={email} type="text" id="name" name="name" placeholder="Your Name" />
			</label>
			<label>
				<p class={mobileNo ? ' above' : ' center'}>Mobile Number</p>
				<input
					bind:value={mobileNo}
					type="tel"
					id="mobileNo"
					name="mobileNo"
					placeholder="Mobile Number"
				/>
			</label>
			<div class="flex justify-around items-center self-center w-full h-full">
				<div class="flex flex-col justify-center items-center">
					<input
						type="radio"
						id="non_mahe"
						name="maheCheck"
						value="non_mahe"
						bind:group={selectedRadio}
						on:change={() => (branch = '')}
					/>
					<label for="non_mahe" class="text-white whitespace-nowrap" style="border: none;"
						>NON MAHE</label
					>
				</div>
				<div class="flex flex-col justify-center items-center">
					<input type="radio" id="mahe" name="maheCheck" value="mahe" bind:group={selectedRadio} />
					<label for="mahe" class="text-white" style="border: none;">MAHE</label>
				</div>
			</div>
			{#if selectedRadio === 'mahe'}
				<label>
					<p class={branch ? ' above' : ' center'}>Branch</p>
					<input bind:value={branch} type="text" id="branch" name="branch" placeholder="Branch" />
				</label>
			{/if}
			<button type="submit" class="submitBtn">
				{#if form?.authenticating || false}
					<i class="fa-solid fa-spinner loadingSpinner" />
				{:else}
					Submit
				{/if}
			</button>
		</form>
	</div>
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	form,
	.options {
		width: 400px;
		max-width: 100%;
		margin: 0 auto;
	}

	form input {
		width: 100%;
	}

	h1 {
		text-align: center;
		font-size: 3rem;
	}

	form label {
		position: relative;
		border: 1px solid navy;
		border-radius: 5px;
	}

	form input {
		border: none;
		background: transparent;
		color: white;
		padding: 14px;
	}

	form input:focus {
		border: none;
		outline: none;
	}

	form label:focus-within {
		border-color: blue;
	}

	form button {
		background: navy;
		color: white;
		border: none;
		padding: 14px 0;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1rem;
		display: grid;
		place-items: center;
	}

	form button:hover {
		background: blue;
	}

	.above,
	.center {
		position: absolute;
		transform: translateY(-50%);
		pointer-events: none;
		color: white;
		border-radius: 4px;
		padding: 0 6px;
		font-size: 0.8rem;
		transition: all 200ms ease;
	}

	.above {
		top: 0;
		left: 24px;
		background: navy;
		border: 1px solid blue;
		font-size: 1.1rem;
	}

	.center {
		top: 50%;
		left: 6px;
		border: 1px solid transparent;
		opacity: 0;
	}

	.error {
		color: coral;
		font-size: 0.9rem;
		text-align: center;
	}

	.options {
		padding: 14px 0;
		overflow: hidden;
		font-size: 0.9rem;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.options > p {
		position: relative;
		text-align: center;
		width: fit-content;
		font-size: 1.5rem;
		margin: 0 auto;
		padding: 0 8px;
	}

	.options > p::after,
	.options > p::before {
		position: absolute;
		content: '';
		top: 50%;
		transform: translateY(-50%);
		width: 100vw;
		height: 1.5px;
		background: white;
	}

	.options > p::after {
		right: 100%;
	}

	.options > p::before {
		left: 100%;
	}

	.options div {
		display: flex;
		align-items: center;
		gap: 8px;
		justify-content: center;
		font-size: 1.1rem;
	}

	.options div p:last-of-type {
		color: cyan;
		cursor: pointer;
	}

	.loadingSpinner {
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
