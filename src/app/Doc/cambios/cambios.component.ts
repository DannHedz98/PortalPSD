import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MenuDocumentacionComponent } from '../../menu-documentacion/menu-documentacion.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavDocComponent } from '../nav-doc/nav-doc.component';

@Component({
  selector: 'app-cambios',
  imports: [NavbarComponent, NavDocComponent, MenuDocumentacionComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './cambios.component.html',
  styleUrls: ['../Estilos-Globales.css']
})
export class CambiosComponent {
  pageId!: string;

  constructor(private route: ActivatedRoute) {
    const data = this.route.snapshot.data;
    this.pageId = data['id'] || '';
  }
}
