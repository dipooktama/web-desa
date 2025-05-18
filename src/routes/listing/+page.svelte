<script>
    import Section from "$lib/components/Section.svelte";
    import Map from "$lib/components/Map.svelte";
</script>

<Section classNames="px-8 py-6 flex flex-row justify-between">
    <div class="w-full flex flex-col">
        <h1 class="font-bold text-3xl text-primary-700 mb-4">Peta Desa</h1>
        <Map zoomLevel={10} />
    </div>
</Section>