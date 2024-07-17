<script>
    import {onMount} from "svelte";
    import {browser} from "$app/environment";
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

    let timer;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (browser) {
            document.addEventListener("mousemove", (e) => {
                gsap.to(".box", {
                    opacity: 1,
                    display: 'flex',
                    x: e.clientX,
                    y: e.clientY,
                    stagger: 0.1
                });
                clearTimeout(timer);
                timer = setTimeout(clearImages, 300);
            });
        }
        function clearImages() {
            gsap.to('.box', {
                opacity: 0,
                display: 'none',
            })
        }
    })
</script>

<div class="box"><div class="h-full w-full bg-white"></div></div>
<div class="box"><div class="h-full w-full bg-white"></div></div>
<div class="box"><div class="h-full w-full bg-white"></div></div>
<div class="box"><div class="h-full w-full bg-white"></div></div>

<style>
    body {
        overflow: hidden;
    }

    .box {
        position: absolute;
        width: 20vw;
        height: 20vw;
        transform: translate(-50%, -50%);
        pointer-events: none;
        /*@for $i from 1 through 5 {*/
        /*    &:nth-child(#{$i}) {*/
        /*        z-index: #{-$i};*/
        /*    }*/
        /*}*/
    }

    .box img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>