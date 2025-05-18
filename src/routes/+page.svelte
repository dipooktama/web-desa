<script>
	import Section from './../lib/components/Section.svelte';
    import HomeBanner from "$lib/components/HomeBanner.svelte";
</script>

<HomeBanner showIndicators={false} />

<Section classNames="px-8 py-6 flex flex-row justify-between">
    <div class="w-1/2">
        <h1 class="font-bold text-3xl text-primary-700 mb-4">Jelajahi Desa</h1>
        <p class="text-pretty">Melalui website ini Anda dapat menjelajahi segala hal yang terkait dengan Desa. Aspek pemerintahan, penduduk, demografi, potensi Desa, dan juga berita tentang Desa.</p>
    </div>
</Section>

<Section classNames="px-8 py-6 flex flex-row justify-between">
    <div class="w-1/2"></div>
    <div class="w-1/2">
        <h1 class="font-bold text-3xl text-primary-700 mb-4">Sambutan Kepala Desa</h1>
        <p class="text-pretty">
            Assalamu Alaikum Warohmatullahi Wabarakatu.
            Website ini hadir sebagai wujud transformasi desa Kersik menjadi desa yang mampu memanfaatkan teknologi informasi dan komunikasi, terintegrasi kedalam sistem online. Keterbukaan informasi publik, pelayanan publik dan kegiatan perekonomian di desa, guna mewujudkan desa Kersik sebagai desa wisata yang berkelanjutan, adaptasi dan mitigasi terhadap perubahan iklim serta menjadi desa yang mandiri.
            Terima kasih kepada semua pihak yang telah banyak memberi dukungan dan kontribusi baik berupa tenaga, pikiran dan semangat, terkhusus kepada Pertamina Hulu Kalimantan Timur (PHKT) dengan bantuan CSRnya sehingga website ini dapat terealisasi.
        </p>
    </div>
</Section>