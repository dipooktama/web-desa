<script>
	import { navMenu } from "../navMenu";
    import { Address } from "$lib/linksAddressContact";
    import { Navbar, NavBrand, NavLi, NavUl } from "flowbite-svelte";
</script>

<Navbar class="fixed start-0 top-0 z-20 w-full">
    <NavBrand href="/">
        <div class="flex flex-col justify-start text-gray-300 pl-6">
            <p class="font-black">{ Address.village }</p>
            <p>{ Address.district }</p>
        </div>
    </NavBrand>
    <NavUl>
        {#each navMenu as navItem (navItem.path) }
            <NavLi href={navItem.path} class="text-gray-300">{navItem.name}</NavLi>
        {/each}
    </NavUl>
</Navbar>



