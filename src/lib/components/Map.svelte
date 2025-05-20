<script>
    import { MapLibre, Marker, NavigationControl, ScaleControl } from 'svelte-maplibre-gl';
    export let zoomLevel = 10;
    export let classNames = "h-[400px]";
    export let latitude =   0.2346780;
    export let longitude = 110.4515515;
    export let mapStyle = "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json";
</script>

<MapLibre
    zoom={zoomLevel}
    center={[longitude, latitude]}
    class={classNames}
    style={mapStyle}
>
    <NavigationControl />
    <ScaleControl />
    <Marker lnglat={[longitude, latitude]} />
</MapLibre>
