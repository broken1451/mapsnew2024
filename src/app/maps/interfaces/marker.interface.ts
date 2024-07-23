export interface MarkerColor{
    color: string;
    marker: mapboxgl.Marker;
}

export interface CleanMarker {
    color: string;
    // lngLat: [number, number];
    lngLat: number[];
}