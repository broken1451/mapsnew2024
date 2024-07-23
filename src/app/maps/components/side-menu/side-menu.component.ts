import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  public menu: MenuItem[] = [
    {
      name: 'Full-screen',
      route: '/maps/full-screen'
    },
    {
      name: 'Zoom-range',
      route: '/maps/zoom-range'
    },
    {
      name: 'Markers',
      route: '/maps/markers'
    },
    {
      name: 'Properties',
      route: '/maps/properties'
    }
  ]



}
