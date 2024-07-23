import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniMapRoutingModule } from './mini-map-routing.module';
import { MiniMapComponent } from './mini-map.component';


@NgModule({
  declarations: [
    MiniMapComponent
  ],
  imports: [
    CommonModule,
    MiniMapRoutingModule
  ], 
  exports: [
    MiniMapComponent
  ]
})
export class MiniMapModule { }
