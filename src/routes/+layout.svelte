<script>
	import '../app.css';
	import StaticNavbar from '$lib/components/StaticNavbar/StaticNavbar.svelte';
	import Notif from '$lib/components/notif.svelte';
	import acmLogo from '$lib/Team/acm_logo_pureWhite.svg';
	import connectLogo from '$lib/Team/ConnectEdLogo.png';
	import NSSLogo from '$lib/Team/new-nss-seeklogo.svg';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
	// console.log($page.data.session);
</script>

<!-- <StaticNavbar /> -->
<!-- <Notif /> -->
<slot />

<!-- <footer class="h-full w-full">
	<div class="w-full h-full bg-primaryContainer flex justify-start items-center overflow-visible">
		<div class="w-full h-full flex flex-row justify-evenly items-center  overflow-visible">
			<div class="h-full w-full flex flex-col justify-start items-center md:-mt-[2.5rem] overflow-visible">
				<div class="text-onPrimaryContainer text-center font-basebornSans text-5xl uppercase">Hosted By</div>
				<div>
					<img src={acmLogo} alt="ACM Logo" class="w-[30vw] h-auto" />
				</div>
			</div>
			<div class="h-full w-full flex flex-col justify-start items-center -ml-6">
				<div class="text-onPrimaryContainer text-center font-basebornSans text-5xl uppercase">Our Sponsors</div>
				<div class="w-full h-full flex flex-row justify-center items-center">
					<img src={connectLogo} alt="sponsor 1" class="w-[30vw] h-auto object-contain" />
					<img src={NSSLogo} alt="sponsor 2" class="w-[20vw] h-auto object-contain" />
				</div>
			</div>
		</div>
	</div>
</footer> -->
