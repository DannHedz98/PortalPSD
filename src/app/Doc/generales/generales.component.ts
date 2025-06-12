import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MenuDocumentacionComponent } from '../../menu-documentacion/menu-documentacion.component';
import { NavDocComponent } from '../nav-doc/nav-doc.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccesoService } from '../../service/acceso.service';
import { AuthService } from '../../service/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-generales',
  standalone: true,
  imports: [HttpClientModule,NavbarComponent, NavDocComponent, MenuDocumentacionComponent, CommonModule, RouterLink, FormsModule],
  providers: [AuthService, AccesoService],  
  templateUrl: './generales.component.html',
  styleUrls: ['../Estilos-Globales.css']
})
export class GeneralesComponent {
  pageId!: string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private accesoService: AccesoService) {
    const data = this.route.snapshot.data;
    this.pageId = data['id'] || '';
    
  }

  numeroEmpleado: string = '';
  remedyLoginId: string | null = null;
  empresa: string = '';
  pais: string = '';
  busquedaRealizada: boolean = false;  // 🔹 Nueva variable de control


  buscarEmpleado() {
    if (!this.numeroEmpleado.trim()) {
      alert('Por favor, ingrese un número de empleado.');
      return;
    }
    this.authService.login().subscribe({
      next: () => {
        this.accesoService.buscarPersona(this.numeroEmpleado).subscribe(
          (response) => {
            this.busquedaRealizada = true; 
            if (response.entries && response.entries.length > 0) {
              this.remedyLoginId = response.entries[0].values["Remedy Login ID"] || null;

              if (this.remedyLoginId) {
                const partes = this.remedyLoginId.split('.');
                this.empresa = partes[1] || 'Empresa desconocida';
                this.pais = partes[2] || 'País desconocido';
              }
            } else {
              this.remedyLoginId = null;
            }
          },
          (error) => {
            console.error('Error al buscar empleado:', error);
            this.remedyLoginId = null;
          }
        );
      }
    });
  }
}
