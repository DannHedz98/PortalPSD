import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-formatos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-formatos.component.html',
  styleUrl: './menu-formatos.component.css',
    template: `<router-outlet></router-outlet>`
})
export class MenuFormatosComponent {

  openSubmenuIndex: number | null = null;
  menuItems = [
    {
      name: 'Datos Maestros',
      url: 'DatosMaestros',  // URL para la opción principal
      subItems: [
        // { name: 'PDF', url: '/formatos/pdf' },
      ]
    },
    {
      name: 'Gestion de Accesos',
      url: 'GestionAccesos',
      subItems: []
    },
    {
      name: 'Diccionario de Datos',
      url: 'DiccionarioDatos',
      subItems: [
        // { name: 'YouTube', url: 'https://www.youtube.com' }
      ]
    },
    {
      name: 'Procesos Correctivos',
      url: 'ProcesosCorrectivos',
      subItems: [
        //{ name: 'Google', url: 'https://www.google.com' },
      ]
    },
    {
      name: 'Proceso Preventivo',
      url: 'ProcesoPreventivo',
      subItems: [
        // { name: 'YouTube', url: 'https://www.youtube.com' }
      ]
    },
    {
      name: 'Proceso de Recepcion',
      url: 'ProcesoRecepcion',
      subItems: [
        // { name: 'YouTube', url: 'https://www.youtube.com' }
      ]
    },
    {
      name: 'Servicios Corporativos',
      url: 'ServiciosCorporativos',
      subItems: [
        // { name: 'YouTube', url: 'https://www.youtube.com' }
      ]
    },
    {
      name: 'Manuales',
      url: 'Manuales',
      subItems: [
        // { name: 'YouTube', url: 'https://www.youtube.com' }
      ]
    },
    {
      name: 'Nuevas Integraciones',
      url: 'NuevasIntegraciones',
      subItems: [
        // { name: 'YouTube', url: 'https://www.youtube.com' }
      ]
    },
    {
      name: 'Nuevos Proyectos',
      url: 'NuevosProyectos',
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
