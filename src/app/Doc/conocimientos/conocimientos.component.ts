import { Component } from '@angular/core';
import { NavDocComponent } from '../nav-doc/nav-doc.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MenuDocumentacionComponent } from '../../menu-documentacion/menu-documentacion.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-conocimientos',
  imports: [NavDocComponent, NavbarComponent,MenuDocumentacionComponent, CommonModule, RouterLink],
  templateUrl: './conocimientos.component.html',
  styleUrls: ['../Estilos-Globales.css']
})
export class ConocimientosComponent {
  pageId!: string;

  constructor(private route: ActivatedRoute) {
    const data = this.route.snapshot.data;
    this.pageId = data['id'] || '';
  }
}
