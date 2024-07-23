import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkerPageRoutingModule } from './marker-page-routing.module';
import { MarkerPageComponent } from './marker-page.component';


@NgModule({
  declarations: [
    MarkerPageComponent
  ],
  imports: [
    CommonModule,
    MarkerPageRoutingModule
  ]
})
export class MarkerPageModule { }
