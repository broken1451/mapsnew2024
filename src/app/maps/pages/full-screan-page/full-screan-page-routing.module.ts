import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreanPageComponent } from './full-screan-page.component';

const routes: Routes = [
  {
    path: '',
    component: FullScreanPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullScreanPageRoutingModule { }
