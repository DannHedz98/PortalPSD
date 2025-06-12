import { Component, importProvidersFrom } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuEnlacesComponent } from '../menu-enlaces/menu-enlaces.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enlaces',
  standalone: true,
  imports: [NavbarComponent, MenuEnlacesComponent, CommonModule],
  templateUrl: './enlaces.component.html',
  styleUrl: './enlaces.component.css'
})
export class EnlacesComponent {
  pageId: string = '';
  content: any;

  pagesData: Record<string, { title: string; text: string; text2: string; links: { label: string; url: string }[] }> = {
    'HelixSaaS': {
      title: 'Remedy Helix SaaS',
      text: 'Contenido de Helix SaaS',
      text2: 'Enlaces relacionados:',
      links: [
        { label: 'Acceso', url: 'https://remedycloudamx-rsso.onbmc.com/rsso/start' },
        { label: 'DWP', url: 'https://dwp.oymcloud.americamovil.com/dwp/app/#/account/login?returnUrl=%2F' },
        { label: 'Smart IT', url: 'https://remedycloudamx-rsso.onbmc.com/rsso/start' }
      ]
    },
    'IDMCloud': {
      title: 'IDM Cloud',
      text: 'Contenido de IDM Cloud',
      text2: 'Enlaces relacionados:',
      links: [
        { label: 'Manual IDM', url: 'http://idm.oymcloud.americamovil.com:9090/IDM/usuarios.html' },
        { label: 'Administradores IDM', url: 'http://idm.oymcloud.americamovil.com:8080/idm81/login.jsp' },
        { label: 'Usuarios IDM', url: 'http://idm.oymcloud.americamovil.com:8080/idm81/user/login.jsp' }
      ]
    },
    'RemedyControl': {
      title: 'Remedy Control',
      text: 'Contenido de Remedy Control',
      text2: 'Enlaces relacionados:',
      links: [
        { label: 'Manual de Componentes', url: 'http://remedycontrold.oymcloud.americamovil.com:8080/RControl/' },
        { label: 'Pagina de Sitios', url: 'http://remedycontrold.oymcloud.americamovil.com:8080/SitiosV3/' },
        { label: 'Calendario Rutinas', url: 'http://remedycontrold.oymcloud.americamovil.com:8081/CatalogoRutinasMantenimiento/index.jsp' },
        { label: 'Ventanas de mantenimiento', url: 'http://remedycontrold.oymcloud.americamovil.com:8081/SCVMProject/' },
        { label: 'Mesa de ayuda', url: 'http://remedycontrold.oymcloud.americamovil.com:8081/MesaAyudaV3#/' }
      ]
    },
    'Administrativas': {
      title: 'Administrativas',
      text: 'Contenido de administrativas',
      text2: 'Enlaces relacionados:',
      links: [
        { label: 'SF MOM', url: 'http://10.119.154.130/sf/index.php' },
        { label: '@Doc', url: 'http://adoc.telcel.com/adoc/loginPage' },
        { label: 'INTRANET', url: 'http://intranet.telcel.com:9045/portalIntranet/#/' },
        { label: 'SISTEMA DE CONTROL INCIDENCIAS', url: 'http://intranet.telcel.com:8020/drh/incidencias/index.jsp' },
        { label: 'Monitor de rgistros', url: 'http://10.119.111.106:8080/Monitor/Login.jsp?cerrar=true' },
        { label: 'SISTEMA DE VACACIONES', url: 'http://intranet.telcel.com:8020/Vacaciones/inicio.do' },
        { label: 'SISTEMA DE MEJORA CONTINUA', url: 'http://mejoracontinua.telcelinstitucional.com:8089/' },
        { label: 'Operacion y Mantenimiento', url: 'http://operaciones.telcel.com:8480/web/oym' },
        { label: 'Micrositio de Cumplimiento de America Movil', url: 'https://www.complianceamx.com/login.html?ln=es' },
        { label: 'Pagina de Eventos', url: 'http://10.119.155.42/infoview/eventosSSGTI/index.php' },
        { label: 'NAGIOS 1', url: 'https://10.59.230.86/nagiosxi/login.php' },
        { label: 'NAGIOS 2', url: 'https://10.59.230.87/nagiosxi/login.php' }
      ]
    },
    'PortalIoT': {
      title: 'Portal IoT',
      text: 'Contenido de administrativas',
      text2: 'Enlaces relacionados:',
      links: [
        { label: 'PORTAL IOT PRODUCCION', url: 'https://telceliot.lightning.force.com/' },
        { label: 'PORTAL IOT QA', url: 'https://telceliot--dev2.sandbox.lightning.force.com/' },
        { label: 'PORTAL IOT DESARROLLO', url: 'https://telceliot--iotdev.sandbox.lightning.force.com/' },
        { label: 'CLARO CONNECT COMUNIDAD', url: 'https://soporte.claroconnect.com/' },
      ]
    }
  };

  constructor(private route: ActivatedRoute) {
    // Obtener los datos directamente desde el snapshot
    const data = this.route.snapshot.data;
    this.pageId = data['id'] || '';  // Si no hay un 'id', establece una cadena vacía
  
    // Asignar el contenido según el 'pageId' desde el objeto 'pagesData'
    this.content = this.pagesData[this.pageId] || {
      title: 'Enlaces OYM Corporativo',
      text: 'En esta sección se muestran los enlaces(URL) relacionados a sitios propios del área de OYM Digitalización y útiles para la operación de la misma.',
      text2: 'Enlaces relacionados a:\n- Remedy Helix SaaS\n- IDM Cloud\n- Remedy Control\n- Administrativas\n- Portal IoT'
    };
  }
  
}
