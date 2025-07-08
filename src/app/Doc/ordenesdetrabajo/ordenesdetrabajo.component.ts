import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NavDocComponent } from '../nav-doc/nav-doc.component';
import { MenuDocumentacionComponent } from '../../menu-documentacion/menu-documentacion.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ordenesdetrabajo',
  imports: [NavbarComponent, NavDocComponent, MenuDocumentacionComponent, CommonModule, RouterLink],
  templateUrl: './ordenesdetrabajo.component.html',
  styleUrls: ['../Estilos-Globales.css']
})
export class OrdenesdetrabajoComponent {
  pageId!: string;

  constructor(private route: ActivatedRoute) {
    const data = this.route.snapshot.data;
    this.pageId = data['id'] || '';
  }
}
