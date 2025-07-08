import { Component } from '@angular/core';
import { NavDocComponent } from '../nav-doc/nav-doc.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MenuDocumentacionComponent } from '../../menu-documentacion/menu-documentacion.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accesos',
  imports: [NavDocComponent, NavbarComponent, MenuDocumentacionComponent, CommonModule, RouterLink],
  templateUrl: './accesos.component.html',
  styleUrls: ['../Estilos-Globales.css']
})
export class AccesosComponent {
  pageId!: string;

  constructor(private route: ActivatedRoute) {
    const data = this.route.snapshot.data;
    this.pageId = data['id'] || '';
  }
}
