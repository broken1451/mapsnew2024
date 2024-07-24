import { Component } from '@angular/core';
import { CounterComponent } from '../../components/counter/counter.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  // selector: 'app-alone-page',
  standalone: true,
  imports: [CounterComponent, SideMenuComponent],
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.scss'
})
export class AlonePageComponent {

}
