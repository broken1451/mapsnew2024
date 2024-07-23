import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-full-screan-page',
  templateUrl: './full-screan-page.component.html',
  styleUrl: './full-screan-page.component.scss'
})
export class FullScreanPageComponent implements AfterViewInit {

  @ViewChild('map') map!: ElementRef;

  ngAfterViewInit(): void {
    if (!this.map) {
      throw new Error('Map not found');
    }

    const map = new mapboxgl.Map({
      accessToken: environment.mapbox_key,
      container: this.map.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }


}
