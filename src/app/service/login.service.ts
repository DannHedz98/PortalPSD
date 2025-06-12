import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
}) 

export class LoginService {
  private apiUrl = `${enviroment.apiBaseUrl}/api/arsys/v1/entry/NominaTelcel/`;
  // private apiUrl = '/api/arsys/v1/entry/NominaTelcel/';
  
  constructor(private http: HttpClient, private authService: AuthService) { }

  buscarEmpleado(numeroEmpleado: string, usuarioUniversal: string): Observable<string | null> {
    const token = this.authService.getToken();
    
    if (!token) {
      throw new Error('No hay token disponible.');
    }

    const headers = new HttpHeaders({
      'Authorization': `AR-JWT ${token}`,
      'Content-Type': 'application/json'
    });

    const url = `${this.apiUrl}?q=%27536870913%27%3D%22${numeroEmpleado}%22%20AND%20%27536870914%27%3D%22${usuarioUniversal}%22%20AND%20%27536870923%27%3D%22DEPTO%20OYM%20DIGITALIZACION%20DE%20SERVICIOS%22&fields=values(8)`;

    return this.http.get<any>(url, { headers }).pipe(
      map(response => {
        if (response.entries && response.entries.length > 0) {
          return response.entries[0].values["Short Description"] || null;
        }
        return null;
      }),
      catchError(error => {
        console.error('Error en la petición:', error);
        return of(null);
      })
    );
  }
}
