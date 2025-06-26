import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../service/login.service';
import { AuthService } from '../service/auth.service';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterModule, HttpClientModule, CommonModule ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {

   currentYear: number = new Date().getFullYear();

  cargando: boolean = false;
  mostrarModal: boolean = false;
  usuario: string = '';
  contrasena: string = '';



  constructor(private authService: AuthService, private loginService: LoginService, private router: Router) { }

  // Función para abrir el modal
  abrirModal(event: Event): void {
    event.preventDefault(); // Evita que se ejecute la acción predeterminada del enlace
    this.mostrarModal = true;
  }

  // Función para cerrar el modal
  cerrarModal() {
    this.mostrarModal = false;
  }



  GuardarBandera(): void {
    if (!this.usuario || !this.contrasena) {
      alert('Por favor, ingresa todos los campos.');
      return;
    }

    this.cargando = true; // ⏳ Mostrar spinner

    this.authService.login().subscribe({
      next: () => {
        console.log(this.usuario);

        this.loginService.buscarEmpleado(this.usuario, this.contrasena).subscribe({
          next: (nombre) => {
            this.cargando = false; // ✅ Ocultar spinner
            if (nombre) {
              localStorage.setItem('nombreEmpleado', nombre);
              this.router.navigate(['/principal']); // Redirige a la otra página
              this.cerrarModal(); // Solo cerrar si fue exitoso
            } else {
              alert('Credenciales inválidas, verifica la información.');
            }
          },
          error: () => {
            this.cargando = false;
            alert('Error al buscar el empleado.');
          }
        });
      },
      error: () => {
        this.cargando = false;
        alert('Error de autenticación.');
      }
    });
  }



  guardarBanderaVisita(): void {
    localStorage.setItem('Bandera', '0');
    console.log('Ingreso como visitante');
  }
}
