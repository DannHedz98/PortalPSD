import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MenuDocumentacionComponent } from '../../menu-documentacion/menu-documentacion.component';
import { NavDocComponent } from '../nav-doc/nav-doc.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modelo-estandar',
  imports: [NavbarComponent, NavDocComponent, MenuDocumentacionComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './modelo-estandar.component.html',
  styleUrls: ['../Estilos-Globales.css']
})
export class ModeloEstandarComponent {
  pageId!: string;

  constructor(private route: ActivatedRoute) {
    const data = this.route.snapshot.data;
    this.pageId = data['id'] || '';
  }
}
