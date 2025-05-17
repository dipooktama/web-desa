<script>
	import { navMenu } from "../navMenu";
    import { Navbar, NavBrand, NavLi, NavUl } from "flowbite-svelte";
</script>

<Navbar>
    <NavBrand href="/"></NavBrand>
    <NavUl>
        {#each navMenu as navItem (navItem.path) }
            <NavLi href={navItem.path}>{navItem.name}</NavLi>
        {/each}
    </NavUl>
</Navbar>



