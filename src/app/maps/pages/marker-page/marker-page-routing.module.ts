import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkerPageComponent } from './marker-page.component';

const routes: Routes = [
  {
    path: '',
    component: MarkerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkerPageRoutingModule { }
