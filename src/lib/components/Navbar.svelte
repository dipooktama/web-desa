<script>
	import { navMenu } from "../navMenu";
    import { Navbar, NavBrand, NavLi, NavUl } from "flowbite-svelte";
</script>

<Navbar class="fixed start-0 top-0 z-20 w-full">
    <NavBrand href="/"></NavBrand>
    <NavUl>
        {#each navMenu as navItem (navItem.path) }
            <NavLi href={navItem.path} class="text-gray-300">{navItem.name}</NavLi>
        {/each}
    </NavUl>
</Navbar>



