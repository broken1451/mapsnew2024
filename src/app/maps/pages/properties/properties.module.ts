import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { MiniMapModule } from "../../components/mini-map/mini-map.module";
import { CounterComponent } from '../../../alone/components/counter/counter.component';


@NgModule({
  declarations: [
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    MiniMapModule,
    CounterComponent // StandAlone component
  ]
})
export class PropertiesModule { }
