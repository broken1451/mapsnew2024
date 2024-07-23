import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.scss'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') map!: ElementRef;
  @ViewChild('map') mapDiv!: mapboxgl.Map;
  public zoomLevel: number = 10;
  public lngLat: mapboxgl.LngLat = new mapboxgl.LngLat(-74.5, 40);

  ngAfterViewInit(): void {
    if (!this.map) {
      throw new Error('Map not found');
    }

    this.mapDiv = new mapboxgl.Map({
      accessToken: environment.mapbox_key,
      container: this.map.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom
    });

    this.mapListener();
  }

  mapListener(){
    if (!this.mapDiv) {
      throw new Error('Map not found');
    }
    this.mapDiv.on('zoom', (ev) => {
      this.zoomLevel = this.mapDiv.getZoom();
    });

    this.mapDiv.on('zoomend', (ev) => {
      // console.log ('zoomend se para de hacer zoom en el mapa' );
      if (this.mapDiv.getZoom() < 18) {
       return;
      }
      this.mapDiv.zoomTo(18);
    });

    this.mapDiv.on('move', (ev) => {
      const target = ev.target;
      const { lng, lat } = target.getCenter();
      this.lngLat = new mapboxgl.LngLat(lng, lat)
    });
  }

  zoomIn(){
    this.mapDiv.zoomIn();
  }

  zoomOut(){
    this.mapDiv.zoomOut();
  }

  zoomChange(value: any){
    this.mapDiv.zoomTo(Number(value));
  }

  // zoomChange2(value: any){
  //   this.mapDiv.zoomTo(Number(value.target.value));
  // }
  
  ngOnDestroy(): void {
    this.mapDiv.off('zoom', () => {});
    this.mapDiv.off('zoomend', () => {});
    this.mapDiv.off('move', () => {});
    this.mapDiv.remove();
  }

}
