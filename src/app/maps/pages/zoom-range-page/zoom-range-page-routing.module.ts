import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomRangePageComponent } from './zoom-range-page.component';

const routes: Routes = [
  {
    path: '',
    component: ZoomRangePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoomRangePageRoutingModule { }
