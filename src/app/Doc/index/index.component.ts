import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';
import { MenuDocumentacionComponent } from '../../menu-documentacion/menu-documentacion.component';
import { NavDocComponent } from '../nav-doc/nav-doc.component';
import { LoginService } from '../../service/login.service';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-index',
  imports: [CommonModule, NavbarComponent, MenuDocumentacionComponent, NavDocComponent, RouterLink ],
  providers: [AuthService, LoginService],
  templateUrl: './index.component.html',
  styleUrls: ['../Estilos-Globales.css']
})

export class IndexComponent {
  irASeccion(segundos: number): void {
    const video = document.getElementById('Video') as HTMLVideoElement;
    if (video) {
      video.currentTime = segundos;
      video.play();
    }
  }
}
