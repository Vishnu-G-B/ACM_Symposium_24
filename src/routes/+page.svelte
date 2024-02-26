<script>
    import { onMount } from "svelte";
    import gsap from "gsap/dist/gsap";

    onMount(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.to(".box", {x:300, y:300, rotation: 2880, duration: 3})
        })
    });

</script>

<section class="min-h-screen">

</section>

<style>

</style>