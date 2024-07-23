import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { MiniMapModule } from "../../components/mini-map/mini-map.module";


@NgModule({
  declarations: [
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    MiniMapModule
]
})
export class PropertiesModule { }
