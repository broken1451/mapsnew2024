import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsLayoutRoutingModule } from './maps-layout-routing.module';
import { MapsLayoutComponent } from './maps-layout.component';
import { SideMenuModule } from '../../components/side-menu/side-menu.module';


@NgModule({
  declarations: [
    MapsLayoutComponent
  ],
  imports: [
    CommonModule,
    MapsLayoutRoutingModule,
    SideMenuModule
  ]
})
export class MapsLayoutModule { }
