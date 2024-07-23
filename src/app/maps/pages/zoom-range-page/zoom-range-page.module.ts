import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoomRangePageRoutingModule } from './zoom-range-page-routing.module';
import { ZoomRangePageComponent } from './zoom-range-page.component';


@NgModule({
  declarations: [
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    ZoomRangePageRoutingModule
  ]
})
export class ZoomRangePageModule { }
