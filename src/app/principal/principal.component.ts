import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {
  mostrarBusquedas: boolean = false;

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
}
