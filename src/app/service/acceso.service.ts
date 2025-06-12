import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
   private apiUrl = `${enviroment.apiBaseUrl}/api/arsys/v1/entry/CTM:People/`;
  // private apiUrl = '/api/arsys/v1/entry/CTM:People/';
  
  
  constructor(private http: HttpClient, private authService: AuthService) {}

  buscarPersona(numeroEmpleado: string): Observable<any> {
    console.log(this.apiUrl)
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No hay token disponible.');
    }

    const headers = new HttpHeaders({
      'Authorization': `AR-JWT ${token}`,
      'Content-Type': 'application/json'
    });

    const url = `${this.apiUrl}?q=%271000000054%27%3D%22${numeroEmpleado}%22%20AND%20%277%27%3D%221%22&fields=values(1,4)`;
    
    return this.http.get(url, { headers });
  }
}
