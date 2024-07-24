import { Component } from '@angular/core';
import { MenuItem } from '../../../maps/interfaces/menu.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [ CommonModule, RouterModule],
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
    },
    {
      name: 'Alone Page',
      route: '/alone'
    }
  ]



}
