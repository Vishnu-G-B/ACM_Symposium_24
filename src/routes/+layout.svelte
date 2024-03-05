<script>
    import "../app.css";
    import StaticNavbar from "$lib/components/StaticNavbar/StaticNavbar.svelte";
    const navItems = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/"
        },
        {
            name: "Contact Us",
            link: "/",
        }
    ];
</script>

<StaticNavbar />
<slot></slot>