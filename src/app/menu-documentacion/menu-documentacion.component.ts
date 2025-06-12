import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-documentacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-documentacion.component.html',
  styleUrl: './menu-documentacion.component.css',
  template: `<router-outlet></router-outlet>`
})
export class MenuDocumentacionComponent {

  sidebarCollapsed = true;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }


  openSubmenuIndex: number | null = null;
  menuItems = [
    {
      name: 'Generales',
      url: 'ModeloEstandar/index',
      subItems: []
    },


    {
      name: 'Proceso de Accesos',
      url: 'ModeloEstandar/PAccesos',  // URL para la opción principal
      subItems: [
        {
          name: 'Solicitud de accesos', url: '', 
          subItems: [
            { name: 'Creacion de solicitud ADM', url: 'Accesos/SolicitarAcceso' },
            { name: 'Aprobacion de ADM', url: 'Accesos/AprobarADM' },
             { name: 'Seguimiento de solicitud', url: 'Accesos/SeguimientoADM' },
             { name: 'Renovacion de vigencia', url: 'Accesos/RenovacionADM' },
             { name: 'Cancelar ADMs', url: 'Accesos/CancelarADM' }
          ]
           },
           {
             name: 'Solicitud de acceso COR', url: '', subItems: [
               { name: 'Perfil FO', url: 'Accesos/CreacionCorFO' },
               { name: 'Perfil BO', url: 'Accesos/CreacionCorBO' }
             ]
        }
      ]
    },


    {
      name: 'Proceso Correctivo',
      url: 'ModeloEstandar/PCorrectivo',  // URL para la opción principal
      subItems: [
        // {
        //   name: 'Alarmas', url: '', subItems: [
        //     { name: 'Creacion de alarma', url: 'Incidentes/CrearAlarma' },
        //     { name: 'Niveles de serivicio', url: 'Incidentes/SLAalarma' },
        //     { name: 'Atencion de la alarma', url: 'Incidentes/AtencionAlarma' },
        //     { name: 'Documentacion de la alarma', url: 'Incidentes/DocumentarAlarma' },
        //     { name: 'Escalacion de la alarma', url: 'Incidentes/EscalarAlarma' },
        //     { name: 'Creacion de tarea(s)', url: 'Incidentes/CrearTarea' },
        //     { name: 'Cierre de la alarma', url: 'Incidentes/CerrarAlarma' }
        //   ]
        // },
        // {
        //   name: 'CPDs', url: '', subItems: [
        //     { name: 'Creacion de CPD', url: 'Incidentes/CrearCPD' },
        //     { name: 'Niveles de serivicio', url: 'Incidentes/SLAcpd' },
        //     { name: 'Atencion de CPD', url: 'Incidentes/AtencionCPD' },
        //     { name: 'Documentacion del CPD', url: 'Incidentes/DocumentarCPD' },
        //     { name: 'Escalacion del CPD', url: 'Incidentes/EscalarCPD' },
        //     { name: 'Creacion de tarea(s)', url: 'Incidentes/CrearTareaCPD' },
        //     { name: 'Cierre del CPD', url: 'Incidentes/CerrarCPD' }
        //   ]
        // },
        {
          name: 'Incidentes de TI', url: '',
          subItems: [
            { name: 'Creacion', url: 'Incidentes/CrearTI' },
             { name: 'Niveles de serivicio', url: 'Incidentes/SLAti' },
            { name: 'Atencion', url: 'Incidentes/AtencionTI' },
             { name: 'Documentacion', url: 'Incidentes/DocumentarTI' },
             { name: 'Escalacion', url: 'Incidentes/EscalarTI' },
             { name: 'Creacion de tarea(s)', url: 'Incidentes/CrearTareaTI' },
             { name: 'Cierre', url: 'Incidentes/CerrarTI' }
          ]
        },
        {
          name: 'Conocimiento', url: '', subItems: [
            // { name: 'Busqueda desde Alarmas', url: 'Incidentes/AtencionAlarma' },
            // { name: 'Busqueda desde CPDs', url: 'Incidentes/AtencionCPD' },
            // { name: 'Busqueda desde incidentes de TI', url: 'Incidentes/AtencionTI' },
            { name: 'Creacion de conocimiento', url: 'Conocimientos/CrearConocimiento' },
            { name: 'Revision y publicacion', url: 'Conocimientos/PublicarConocimiento' },
            { name: 'Solicitud de modificacion', url: 'Conocimientos/ModificarConocimiento' }
          ]
        },
        {
          name: 'Problemas', url: '', subItems: [
            { name: 'Ciclo de vida', url: 'Problemas/index' },
            { name: 'Creacion de un Problema', url: 'Problemas/CreacionProblema' },
            { name: 'Atencion de  un Problema', url: 'Problemas/AtencionProblema' },
            { name: 'Cierre de un Problema', url: 'Problemas/CierreProblema' }
          ]
        }
      ]
    },



    {
      name: 'Proceso de Emergencia',
      url: 'ModeloEstandar/PEmergencias',
      subItems: [
        {
          name: 'Declarar una emergencia', url: '',
          subItems: [
            // { name: 'Desde una alarma', url: 'Incidentes/index' },
            { name: 'Desde un incidente', url: 'Incidentes/index' }
          ]
        },
        {
          name: 'Resolver la emergencia', url: '',
          subItems: [
            { name: 'Generar una solicitud de cambio', url: 'Cambios/index' }
          ]
        }
      ]
    },


    {
      name: 'Proceso Estadistico',
      url: 'ModeloEstandar/PEstadistico',
      subItems: []
    },



    {
      name: 'Proceso de Intervencion de red',
      url: 'ModeloEstandar/PIntervenciones',
      subItems: [
        {
          name: 'Cambios', url: '',
          subItems: [
            { name: 'Generar un cambio', url: 'Cambios/CrearCambio' },
            { name: 'Cerrar un cambio', url: 'Cambios/CerrarCambio' }
          ]
        },
        // {
        //   name: 'Cambios normales', url: '',
        //   subItems: [
        //     { name: 'Generar un cambio normal individual', url: 'Cambios/CrearCambioNormal' },
        //     { name: 'Generar un cambio normal multiple', url: 'Cambios/CrearCambioNormal' },
        //     { name: 'Cerrar un cambio', url: 'Cambios/CerrarCambio' }
        //   ]
        // },
        // {
        //   name: 'Cambios de emergencia', url: '',
        //   subItems: [
        //     { name: 'Generar un cambio de emergencia', url: 'Cambios/CrearCambioEmergencia' },
        //     { name: 'Cerrar un cambio', url: 'Cambios/CerrarCambio' }
        //   ]
        // }
      ]
    },


    {
      name: 'Procesos Preventivo',
      url: 'ModeloEstandar/PPreventivo',
      subItems: [
        {
          name: 'Rutinas de Mantenimiento', url: '',
          subItems: [
            { name: 'Solicitud de Rutina', url: 'RutinasMantenimiento/SolicitudRutina' },
            { name: 'Llenado de formato', url: 'RutinasMantenimiento/FormatoRutina' },
            { name: 'Cambio o baja de rutina', url: 'RutinasMantenimiento/CambioBajaRutina' },
            { name: 'Atencion y ejecucion de Rutina', url: 'RutinasMantenimiento/AtencionWORutina' }
          ]
        }
      ]
    },


    {
      name: 'Movilidad',
      url: 'Movilidad/index',
      subItems: [
        {
          name: 'Smart-IT', url: '',
          subItems: [
            { name: 'Smart-IT', url: 'Movilidad/SmartIt' },
            { name: 'Instalacion y configuracion', url: 'Movilidad/SmartIt_InstalarConfigurar' },
            { name: 'Navegacion', url: 'Movilidad/SmartIt_Navegar' },
            { name: 'Atencion de tareas', url: 'Movilidad/SmartIt_AtenderTarea' },
            { name: 'Atencion de Ordenes de trabajo', url: 'Movilidad/SmartIt_AtenderWO' },
            { name: 'Atencion de incidentes', url: 'Movilidad/SmartIt_AtenderINC' }
          ]
        },
        {
          name: 'DWP',
          url: '',
          subItems: [
            { name: 'DWP', url: 'Movilidad/DWP' },
            { name: 'Instalacion y configuracion', url: 'Movilidad/DWP_InstalarConfigurar' },
            { name: 'Navegacion', url: 'Movilidad/DWP_Navegar' },
            { name: 'Aprovacion de peticiones', url: 'Movilidad/DWP_Aprueba' },
            { name: 'Alta de Usuario DWP', url: 'Movilidad/AltaUsuarioDWP' }
          ]
        }
      ]
    },

    {
      name: 'Procesos de integracion de infraestructura',
      url: 'ModeloEstandar/PRecibir',
      subItems: [
        {
          name: 'SITE-EP', url: '',
          subItems: [
            { name: 'Creacion de un CI', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Consulta de un CI', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Puesta en operacion de radiobases 2G y 3G', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Puesta en operacion de radiobases 4G', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Puesta en operacion de radiobases 2G y 3G por autoentrega', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Puesta en operacion de radiobases 4G por autoentrega', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Puesta en operacion del resto de los nodos', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Puesta en operacion del resto de los nodos por autoentrega', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Modificacion de atributos de un CI antes del estado OPERANDO', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Modificacion de atributos de un CI durante el estado OPERANDO', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Solicitar modificacion de un CI a travez del servicio en la nube (SRM)', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Generacion de ATP para liberacion de alarmas', url: 'https://www.youtube.com/watch?v=456' },
            { name: 'Eliminacion de un CI', url: 'https://www.youtube.com/watch?v=456' }
          ]
        }
      ]
    }
    // ,    {
    //   name: 'Portafolio Empresarial',
    //   url: 'PortafolioEmpresarial/index',
    //   subItems: []
    // }
  ];


  openSubSubmenus: { [key: number]: number[] } = {};

  toggleSubmenu(index: number, event: Event) {
    if (this.openSubmenuIndex === index) {
      event.preventDefault(); 
      this.openSubmenuIndex = null;
    } else {
      this.openSubmenuIndex = index;
    }
  }



  toggleSubSubmenu(parentIndex: number, subIndex: number, event: Event) {
    event.preventDefault();

    if (!this.openSubSubmenus[parentIndex]) {
      this.openSubSubmenus[parentIndex] = [];
    }

    const subSubmenuArray = this.openSubSubmenus[parentIndex];
    const subIndexPosition = subSubmenuArray.indexOf(subIndex);

    if (subIndexPosition > -1) {
      subSubmenuArray.splice(subIndexPosition, 1);
    } else {
      subSubmenuArray.push(subIndex);
    }
  }

}
