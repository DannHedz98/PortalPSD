import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private apiUrl = `${enviroment.apiBaseUrl}/api/jwt/login`;
  // private apiUrl = '/api/jwt/login';

  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    const username = "rc_rutinas"
    const password = "Rc_#rm15"
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `username=${encodeURIComponent(username)}&password=${password}`;

    return this.http.post(this.apiUrl, body, { 
      headers, 
      withCredentials: true,
      responseType: 'text'
    }).pipe(



      tap(token => {
        if (token) {
          localStorage.setItem('authToken', token); 
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('authToken'); // Obtener el token almacenado
  }

  logout(): void {
    localStorage.removeItem('authToken'); // Eliminar el token al cerrar sesión
  }
}
