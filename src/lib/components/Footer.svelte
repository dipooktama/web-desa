<script>
    import { Address, Contacts, PersonalContacts, Socials, OuterLinks } from "$lib/linksAddressContact";
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterIcon } from "flowbite-svelte";
    import { PhoneOutline, MailBoxOutline, InstagramSolid, FacebookSolid, TwitterSolid, YoutubeSolid } from "flowbite-svelte-icons";
</script>

<Footer footerType="socialmedia">
    <div class="md:flex md:justify-between px-2">
        <div class="mb-6 md:mb-0 text-sm text-gray-900 dark:text-white">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {Address.name}
            </h2>
            <p>{Address.street}</p>
            <p>{Address.village}</p>
            <p>{Address.district}</p>
            <p>{Address.city}</p>
            <p>{Address.province}, {Address.postal_code}</p>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 text-sm text-gray-900 dark:text-white">
            <div>
                <h2 class="mb-6 font-semibold text-gray-900 uppercase dark:text-white">
                    Hubungi Kami
                </h2>
                <FooterLinkGroup class="text-gray-900">
                    {#each Contacts as item }
                    <div class="flex flex-row gap-2">
                        {#if item.type === "phone"}
                        <PhoneOutline />
                        <FooterLink href="tel:{item.contact}">{item.contact}</FooterLink>
                        {:else if item.type ==="email"}
                        <MailBoxOutline />
                        <FooterLink href="mailto:{item.contact}">{item.contact}</FooterLink>
                        {/if}
                    </div>
                    {/each}
                    <div class="pt-6 flex space-x-4 sm:mt-0 sm:justify-start rtl:space-x-reverse">
                        <div class="flex flex-row gap-2">
                        {#each Socials as item }
                            <FooterIcon href={item.contact}>
                            {#if item.social_media_type === "ig"}
                                <InstagramSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                            {:else if item.social_media_type === "fb"}
                                <FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                            {:else if item.social_media_type === "yt"}
                                <YoutubeSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                            {:else if item.social_media_type === "x"}
                                <TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                            {/if}
                            </FooterIcon>
                            {#if item.label != undefined}
                                <p>{item.label}</p>
                            {/if}
                        {/each}
                        </div>
                    </div>
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Nomor Telepon Penting
                </h2>
                <FooterLinkGroup>
                    {#each PersonalContacts as item }
                        {#if item.type === "phone"}
                            <FooterLink href="tel:{item.contact}">{item.label ? item.label : item.contact}</FooterLink>
                        {:else if item.type ==="email"}
                            <FooterLink href="mailto:{item.contact}">{item.label ? item.label : item.contact}</FooterLink>
                        {/if}
                    {/each}
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Jelajahi
                </h2>
                <FooterLinkGroup>
                    {#each OuterLinks as item }
                    <FooterLink href="{item.url}">{item.name}</FooterLink>
                    {/each}
                </FooterLinkGroup>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
    <div class="sm:flex sm:items-center sm:justify-between md:flex md:items-center md:justify-center">
        <FooterCopyright spanClass="text-sm text-gray-900 dark:text-gray-200 sm:text-center" href="/" by={Address.name} />
    </div>
</Footer>