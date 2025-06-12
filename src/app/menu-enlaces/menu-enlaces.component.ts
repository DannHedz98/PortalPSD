import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-enlaces',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-enlaces.component.html',
  styleUrl: './menu-enlaces.component.css',
  template: `<router-outlet></router-outlet>`
})
export class MenuEnlacesComponent {
  openSubmenuIndex: number | null = null;
  menuItems = [
    {
      name: 'Remedy Helix SaaS',
      url: 'HelixSaaS',  // URL para la opción principal
      subItems: [
        // { name: 'PDF', url: '/formatos/pdf' },
      ]
    },
    {
      name: 'IDM Cloud',
      url: 'IDMCloud',
      subItems: [
        //{ name: 'Google', url: 'https://www.google.com' },
      ]
    },
    {
      name: 'RemedyControl',
      url: 'RemedyControl',
      subItems: []
    },
    {
      name: 'Administrativas',
      url: 'Administrativas',
      subItems: [
        // { name: 'YouTube', url: 'https://www.youtube.com' }
      ]
    },
    {
      name: 'Portal IoT',
      url: 'PortalIoT',
      subItems: [
        // { name: 'YouTube', url: 'https://www.youtube.com' }
      ]
    }
  ];

  toggleSubmenu(index: number, event: Event) {
    event.preventDefault(); // Evita que la página salte por el `#`
    this.openSubmenuIndex = this.openSubmenuIndex === index ? null : index;
  }
}
