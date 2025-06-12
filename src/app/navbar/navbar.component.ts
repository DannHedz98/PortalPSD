import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mostrarSesionActiva: boolean = false;
  mostrarBusquedas: boolean = false;
  nombreEmpleado: string | null = '';
  constructor(private router: Router) {}



  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('authToken'); 
      this.mostrarSesionActiva = this.validarToken(token);
      this.mostrarBusquedas = this.mostrarSesionActiva;   
      this.nombreEmpleado = localStorage.getItem('nombreEmpleado') || 'Usuario desconocido';
    }
  }

  private validarToken(token: string | null): boolean {
    if (!token) return false; // Si no hay token, retorna false
  
    const jwtRegex = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/; // 🔹 Expresión regular para validar JWT
    return jwtRegex.test(token); // Retorna true si cumple el formato
  }


  CerrarSesion() {
    localStorage.removeItem('authToken'); 
    localStorage.removeItem('Bandera'); 
    localStorage.removeItem('nombreEmpleado'); 
    this.router.navigate(['/']); 
  }
}
