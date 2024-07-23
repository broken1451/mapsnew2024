import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './maps-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      {
        path: 'full-screen',
        loadChildren: () => import('../../pages/full-screan-page/full-screan-page.module').then(m => m.FullScreanPageModule),
      },
      {
        path: 'zoom-range',
        loadChildren: () => import('../../pages/zoom-range-page/zoom-range-page.module').then(m => m.ZoomRangePageModule),
      },
      {
        path: 'markers',
        loadChildren: () => import('../../pages/marker-page/marker-page.module').then(m => m.MarkerPageModule),
      },
      {
        path: 'properties',
        loadChildren: () => import('../../pages/properties/properties.module').then(m => m.PropertiesModule),
      },
      {
        path: '**',
        redirectTo: 'full-screen'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsLayoutRoutingModule { }
