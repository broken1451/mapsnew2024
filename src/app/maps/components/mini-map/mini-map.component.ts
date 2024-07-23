import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.scss'
})
export class MiniMapComponent implements AfterViewInit {

  @Input({ required: true }) lngLat!: [number, number];
  @ViewChild('map') map!: ElementRef;
  public mapDiv!: mapboxgl.Map;
  public zoomLevel: number = 13;

  constructor() { }

  ngAfterViewInit(): void {

    if (!this.lngLat) {
      throw new Error('El componente MiniMapComponent necesita una propiedad lngLat');
    }
    if (!this.map) {
      throw new Error('Map not found');
    }

    setTimeout(() => {
      this.mapDiv = new mapboxgl.Map({
        accessToken: environment.mapbox_key,
        container: this.map.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: this.lngLat, // starting position [lng, lat]
        zoom: this.zoomLevel, // starting zoom,
        dragPan: false,
        interactive: false
      });

      const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
      const marker = new mapboxgl.Marker({
        color,
        draggable: false
      }).setLngLat(this.lngLat).addTo(this.mapDiv);
    });
  }

}
