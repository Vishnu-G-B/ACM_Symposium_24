<script>
	import '../app.css';
	import StaticNavbar from '$lib/components/StaticNavbar/StaticNavbar.svelte';
    import Notif from '$lib/components/notif.svelte';
	// console.log($page.data.session);
</script>

<StaticNavbar />
<Notif />
<slot />


