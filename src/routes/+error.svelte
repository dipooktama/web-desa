<script>
    import { page } from "$app/state"; 
</script>

<main class="h-screen flex flex-col text-center justify-center">
    <h1 class="text-3xl font-black">{page.status} Error</h1>
    <p>{page.error?.message}</p>
</main>