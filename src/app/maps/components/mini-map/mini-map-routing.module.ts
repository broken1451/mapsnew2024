import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniMapComponent } from './mini-map.component';

const routes: Routes = [
  {
    path: '',
    component: MiniMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiniMapRoutingModule { }
