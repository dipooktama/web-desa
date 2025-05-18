<script>
    import Section from "$lib/components/Section.svelte";
    import { VillageMission } from "$lib/mission";
</script>

<main class="py-8">
    <Section classNames="mx-auto w-1/2 px-8 py-6">
        <h1 class="font-bold text-3xl text-primary-700 mb-4 text-center">Visi</h1>
        <p class="text-pretty">
            Desa Hibun sebagai Desa Wisata yang mampu mengelolah potensi Desa dan pembangunan berkelanjutan untuk mewujudkan masyarakat yang sejahtera
        </p>
    </Section>
    <Section classNames="mx-auto w-1/2 px-8 py-6">
        <h1 class="font-bold text-3xl text-primary-700 mb-4 text-center">Misi</h1>
        <ol class="list-decimal px-2">
            {#each VillageMission as mission }
                <li class="mx-auto text-pretty">{mission}</li>
            {/each}
        </ol>
    </Section>
</main>
