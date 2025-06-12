import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { enviroment } from '../../enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})

export class NominaService {
   private apiUrl = `${enviroment.apiBaseUrl}/api/arsys/v1/entry/NominaTelcel/`;
  // private apiUrl = '/api/arsys/v1/entry/NominaTelcel/';
  
  constructor(private http: HttpClient, private authService: AuthService) {}

  buscarEmpleado(numeroEmpleado: string): Observable<any> {
    console.log(this.apiUrl)
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No hay token disponible.');
    }
    const headers = new HttpHeaders({
      'Authorization': `AR-JWT ${token}`, 
      'Content-Type': 'application/json'
    });

    const url = `${this.apiUrl}?q=%27536870913%27%3D%22${numeroEmpleado}%22&fields=values(8,536870913,536870914,536870920,536870922,536870923)`;

    return this.http.get(url, { headers });
  }
}
