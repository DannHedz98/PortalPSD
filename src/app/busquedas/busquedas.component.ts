import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { NominaService } from '../service/nomina.service';
import { AuthService } from '../service/auth.service';
import { GrupoSService } from '../service/grupo-s.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-busquedas',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, HttpClientModule],
  providers: [AuthService, NominaService, GrupoSService],  
  templateUrl: './busquedas.component.html',
  styleUrl: './busquedas.component.css'
})

export class BusquedasComponent {

  numeroEmpleado: string = '';
  resultados: any[] = [];
  nombreGrupo: string = '';
  resultados2: any[] = [];


  constructor(private authService: AuthService, private nominaService: NominaService, private grupoService: GrupoSService) { }
  mostrarBusquedas: boolean = false;
  
  buscarEmpleado() {
    if (!this.numeroEmpleado) {
      alert('Por favor, ingrese un número de empleado.');
      return;
    }
    this.authService.login().subscribe({
      next: () => {
        this.nominaService.buscarEmpleado(this.numeroEmpleado).subscribe({
          next: (data) => {
            console.log(data.entries)
            this.resultados = data.entries || []; // Extrae los resultados
          },
          error: (err) => {
            console.error('Error en la búsqueda:', err);
            alert('No se encontraron resultados o hubo un error en la petición.');
          }
        })
      }
    });
  }


  buscarGrupo() {
    if (!this.nombreGrupo) {
      alert('Por favor, ingrese un nombre de Grupo de Soporte.');
      return;
    }
    this.authService.login().subscribe({
      next: () => {
        console.log(this.nombreGrupo)
        this.grupoService.buscarGrupo(this.nombreGrupo).subscribe({
          next: (data) => {
            console.log(data.entries)
            this.resultados2 = data.entries || []; // Extrae los resultados
          },
          error: (err) => {
            console.error('Error en la búsqueda:', err);
            alert('No se encontraron resultados o hubo un error en la petición.');
          }
        })
      }
    });
  }


  limpiarBusqueda() {
    this.numeroEmpleado = '';
    this.resultados = [];
    this.nombreGrupo = '';
    this.resultados2 = [];
  }

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('authToken'); 
      this.mostrarBusquedas = this.validarToken(token);    
    }
  }

  private validarToken(token: string | null): boolean {
    if (!token) return false; // Si no hay token, retorna false
  
    const jwtRegex = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/; // 🔹 Expresión regular para validar JWT
    return jwtRegex.test(token); // Retorna true si cumple el formato
  }


  activeTab: string = 'Nombre'; // Pestaña activa por defecto
  setActive(tab: string) {
    this.activeTab = tab;
  }
}
