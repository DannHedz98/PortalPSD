import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { enviroment } from '../../enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class GrupoSService {
   private apiUrl = `${enviroment.apiBaseUrl}/api/arsys/v1/entry/CTM:Support Group/`;
  // private apiUrl = '/api/arsys/v1/entry/CTM:Support Group/';
  
  constructor(private http: HttpClient, private authService: AuthService) { }

  buscarGrupo(nombreGrupo: string): Observable<any> {
    console.log(this.apiUrl);
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No hay token disponible.');
    }

    const headers = new HttpHeaders({
      'Authorization': `AR-JWT ${token}`,
      'Content-Type': 'application/json'
    });

    const url = `${this.apiUrl}?q=%271000000015%27%3D%22${nombreGrupo}%22&fields=values(1,7,1000000001,1000000014,1000000015)`;

    return this.http.get(url, { headers });
  }
}
