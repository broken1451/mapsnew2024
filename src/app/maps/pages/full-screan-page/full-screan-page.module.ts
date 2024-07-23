import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullScreanPageRoutingModule } from './full-screan-page-routing.module';
import { FullScreanPageComponent } from './full-screan-page.component';


@NgModule({
  declarations: [
    FullScreanPageComponent
  ],
  imports: [
    CommonModule,
    FullScreanPageRoutingModule
  ]
})
export class FullScreanPageModule { }
