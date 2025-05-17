<script>
    import { Carousel, Controls } from "flowbite-svelte";
    import { images } from "$lib/imagesPlaceHolder";
</script>

<div class="h-screen w-auto">
    <Carousel {images} imgClass="object-contain h-screen w-fit">
        <Controls />
    </Carousel>
</div>