import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MenuDocumentacionComponent } from '../../menu-documentacion/menu-documentacion.component';
import { NavDocComponent } from '../nav-doc/nav-doc.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-portafolio-emp',
  imports: [NavbarComponent, NavDocComponent, MenuDocumentacionComponent, CommonModule, FormsModule],
  templateUrl: './portafolio-emp.component.html',
  styleUrls: ['../Estilos-Globales.css']
})
export class PortafolioEmpComponent {

  pageId!: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.pageId = params['id'];
    });
  }

}
