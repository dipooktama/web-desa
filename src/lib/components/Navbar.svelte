<script>
    import { page } from "$app/state";
	import { navMenu } from "../navMenu";
    import { Address } from "$lib/linksAddressContact";
    import { Navbar, NavBrand, NavLi, NavUl } from "flowbite-svelte";
    let activeUrl = $derived(page.url.pathname)
</script>

<Navbar>
    <NavBrand href="/">
        <div class="flex flex-col justify-start text-gray-300 pl-6">
            <p class="font-black">{ Address.village }</p>
            <p>{ Address.district }</p>
        </div>
    </NavBrand>
    <NavUl {activeUrl}>
        {#each navMenu as navItem (navItem.path) }
            <NavLi href={navItem.path} class="text-gray-300">{navItem.name}</NavLi>
        {/each}
    </NavUl>
</Navbar>



