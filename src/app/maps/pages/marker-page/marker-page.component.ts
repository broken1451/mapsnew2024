import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';
import { CleanMarker, MarkerColor } from '../../interfaces/marker.interface';
import { Marker } from 'mapbox-gl';
import { LngLat } from 'mapbox-gl';

@Component({
  selector: 'app-marker-page',
  templateUrl: './marker-page.component.html',
  styleUrl: './marker-page.component.scss'
})
export class MarkerPageComponent implements AfterViewInit{

  @ViewChild('map') map!: ElementRef;
  public mapDiv!: mapboxgl.Map;
  public zoomLevel: number = 13;
  public lngLat: mapboxgl.LngLat = new mapboxgl.LngLat(-74.5, 40);
  public marker: MarkerColor[] = [];

  ngAfterViewInit(): void {
    if (!this.map) {
      throw new Error('Map not found');
    }
    // Initialize the map in a timeout to avoid the ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.mapDiv = new mapboxgl.Map({
        accessToken: environment.mapbox_key,
        container: this.map.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: this.lngLat, // starting position [lng, lat]
        zoom: this.zoomLevel, // starting zoom
      });

      this.readMarkerLocalStorage();
      // const marker = new mapboxgl.Marker({
      // color: 'red',
      // draggable: true
      // }).setLngLat(this.lngLat).addTo(this.mapDiv);
    });
  }

  createMarker(): void {
    if (!this.mapDiv) {
      throw new Error('Map not found');
    }
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.addMarker(this.lngLat, color);
  }

  addMarker(lngLat: mapboxgl.LngLat, color: string): void{

    if (!this.mapDiv) {
      throw new Error('Map not found');
    }

    const marker = new mapboxgl.Marker({
      color,
      draggable: true
    }).setLngLat(lngLat).addTo(this.mapDiv);

    this.marker.push({
      color,
      marker
    });
    this.saveMarkerLocalStorage();

    // Drag end event
    marker.on('dragend', () => {
      this.saveMarkerLocalStorage();
    });
  }

  deleteMarker(index: number): void {
    this.marker[index].marker.remove();
    this.marker.splice(index, 1);
    this.saveMarkerLocalStorage();
  }

  goMarker(marker: Marker): void {
    if (!this.mapDiv) {
      throw new Error('Map not found');
    }
    this.mapDiv.flyTo({
      zoom: 15,
      center: marker.getLngLat()
    });
  }

  saveMarkerLocalStorage(): void{
    const cleanMarker: CleanMarker[] = this.marker.map(m => {
      return{
        color: m.color,
        lngLat: m.marker.getLngLat().toArray()
      };
    });
    localStorage.setItem('marker', JSON.stringify(cleanMarker));
  }

  readMarkerLocalStorage(): void{

    const plaincleanMarker = localStorage.getItem('marker') ?? '[]';
    const cleanMarker: CleanMarker[] = JSON.parse(plaincleanMarker);
    
    cleanMarker.forEach(({color, lngLat}) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMarker(coords, color);
    });
  }
}
