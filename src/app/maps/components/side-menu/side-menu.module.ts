import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideMenuRoutingModule } from './side-menu-routing.module';
import { SideMenuComponent } from './side-menu.component';


@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SideMenuRoutingModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }
