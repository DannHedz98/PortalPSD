import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'
import { PrincipalComponent } from './principal/principal.component'
import { EnlacesComponent } from './enlaces/enlaces.component';
import { FormatosComponent } from './formatos/formatos.component';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { IndexComponent } from './Doc/index/index.component';
import { NavDocComponent } from './Doc/nav-doc/nav-doc.component';
import { GeneralesComponent } from './Doc/generales/generales.component';
import { ModeloEstandarComponent } from './Doc/modelo-estandar/modelo-estandar.component';
import { IncidentesComponent } from './Doc/incidentes/incidentes.component';
import { CambiosComponent } from './Doc/cambios/cambios.component';
import { OrdenesdetrabajoComponent } from './Doc/ordenesdetrabajo/ordenesdetrabajo.component';
import { TareasComponent } from './Doc/tareas/tareas.component';
import { AccesosComponent } from './Doc/accesos/accesos.component';
import { MovilidadComponent } from './Doc/movilidad/movilidad.component';
import { ProblemasComponent } from './Doc/problemas/problemas.component';
import { ConocimientosComponent } from './Doc/conocimientos/conocimientos.component';
import { RutinasMantenimientoComponent } from './Doc/rutinas-mantenimiento/rutinas-mantenimiento.component';
import { SolicitudesServiciosComponent } from './Doc/solicitudes-servicios/solicitudes-servicios.component';
import { SiteEPComponent } from './Doc/site-ep/site-ep.component';
import { FuncionalidadComponent } from './Doc/funcionalidad/funcionalidad.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'busquedas', component: BusquedasComponent },
    { path: 'enlaces', component: EnlacesComponent },
    { path: 'enlaces/HelixSaaS', component: EnlacesComponent, data: { renderMode: 'client', id: 'HelixSaaS' } },
    { path: 'enlaces/RemedyControl', component: EnlacesComponent, data: { renderMode: 'client', id: 'RemedyControl' } },
    { path: 'enlaces/IDMCloud', component: EnlacesComponent, data: { renderMode: 'client', id: 'IDMCloud' } },
    { path: 'enlaces/Administrativas', component: EnlacesComponent, data: { renderMode: 'client', id: 'Administrativas' } },
    { path: 'enlaces/PortalIoT', component: EnlacesComponent, data: { renderMode: 'client', id: 'PortalIoT' } },

    { path: 'formatos', component: FormatosComponent },
    { path: 'formatos/DatosMaestros', component: FormatosComponent, data: { renderMode: 'client', id: 'DatosMaestros' } },
    { path: 'formatos/GestionAccesos', component: FormatosComponent, data: { renderMode: 'client', id: 'GestionAccesos' } },
    { path: 'formatos/DiccionarioDatos', component: FormatosComponent, data: { renderMode: 'client', id: 'DiccionarioDatos' } },
    { path: 'formatos/ProcesosCorrectivos', component: FormatosComponent, data: { renderMode: 'client', id: 'ProcesosCorrectivos' } },
    { path: 'formatos/ProcesoPreventivo', component: FormatosComponent, data: { renderMode: 'client', id: 'ProcesoPreventivo' } },
    { path: 'formatos/ProcesoRecepcion', component: FormatosComponent, data: { renderMode: 'client', id: 'ProcesoRecepcion' } },
    { path: 'formatos/ServiciosCorporativos', component: FormatosComponent, data: { renderMode: 'client', id: 'ServiciosCorporativos' } },
    { path: 'formatos/Manuales', component: FormatosComponent, data: { renderMode: 'client', id: 'Manuales' } },
    { path: 'formatos/NuevasIntegraciones', component: FormatosComponent, data: { renderMode: 'client', id: 'NuevasIntegraciones' } },
    { path: 'formatos/NuevosProyectos', component: FormatosComponent, data: { renderMode: 'client', id: 'NuevosProyectos' } },


    { path: 'doc/index', component: IndexComponent },
    { path: 'doc/NavDoc', component: NavDocComponent },
    { path: 'doc/Generales/index', component: GeneralesComponent, data: { renderMode: 'client', id: 'index' } },
    { path: 'doc/Generales/Acceso', component: GeneralesComponent, data: { renderMode: 'client', id: 'Acceso' } },
    { path: 'doc/Generales/PaginaTI', component: GeneralesComponent, data: { renderMode: 'client', id: 'PaginaTI' } },
    { path: 'doc/Generales/AprobadorSuplente', component: GeneralesComponent, data: { renderMode: 'client', id: 'AprobadorSuplente' } },
    { path: 'doc/Generales/Consolas', component: GeneralesComponent, data: { renderMode: 'client', id: 'Consolas' } },
    { path: 'doc/Generales/ConsolaAprobaciones', component: GeneralesComponent, data: { renderMode: 'client', id: 'ConsolaAprobaciones' } },
    { path: 'doc/Generales/ConsolaCambios', component: GeneralesComponent, data: { renderMode: 'client', id: 'ConsolaCambios' } },
    { path: 'doc/Generales/ConsolaIncidentes', component: GeneralesComponent, data: { renderMode: 'client', id: 'ConsolaIncidentes' } },
    { path: 'doc/Generales/ConsolaOrdenesTrabajo', component: GeneralesComponent, data: { renderMode: 'client', id: 'ConsolaOrdenesTrabajo' } },
    { path: 'doc/Generales/ConsolaRM', component: GeneralesComponent, data: { renderMode: 'client', id: 'ConsolaRM' } },
    { path: 'doc/Generales/Funcionalidades', component: GeneralesComponent, data: { renderMode: 'client', id: 'Funcionalidades' } },

    { path: 'doc/Cambios/index', component: CambiosComponent, data: { renderMode: 'client', id: 'index' } },
    { path: 'doc/Cambios/CerrarCambio', component: CambiosComponent, data: { renderMode: 'client', id: 'CerrarCambio' } },
    { path: 'doc/Cambios/CrearCambio', component: CambiosComponent, data: { renderMode: 'client', id: 'CrearCambio' } },
    { path: 'doc/Cambios/CalendarioCambios', component: CambiosComponent, data: { renderMode: 'client', id: 'CalendarioCambios' } },

    { path: 'doc/SolicitudServicio/index', component: SolicitudesServiciosComponent, data: { renderMode: 'client', id: 'index' } },
    { path: 'doc/SolicitudServicio/Acceso', component: SolicitudesServiciosComponent, data: { renderMode: 'client', id: 'Acceso' } },
    { path: 'doc/SolicitudServicio/Categorias', component: SolicitudesServiciosComponent, data: { renderMode: 'client', id: 'Categorias' } },
    { path: 'doc/SolicitudServicio/SolicitudServicio', component: SolicitudesServiciosComponent, data: { renderMode: 'client', id: 'SolicitudServicio' } },
    { path: 'doc/SolicitudServicio/ConsultaPeticiones', component: SolicitudesServiciosComponent, data: { renderMode: 'client', id: 'ConsultaPeticiones' } },

    { path: 'doc/OrdenesTrabajo/index', component: OrdenesdetrabajoComponent, data: { renderMode: 'client', id: 'index' } },
    { path: 'doc/OrdenesTrabajo/CrearTareaWO', component: OrdenesdetrabajoComponent, data: { renderMode: 'client', id: 'CrearTareaWO' } },


    { path: 'doc/Accesos/SolicitarAcceso', component: AccesosComponent, data: { renderMode: 'client', id: 'SolicitarAcceso' } },
    { path: 'doc/Accesos/CreacionCorFO', component: AccesosComponent, data: { renderMode: 'client', id: 'CreacionCorFO' } },
    { path: 'doc/Accesos/CreacionCorBO', component: AccesosComponent, data: { renderMode: 'client', id: 'CreacionCorBO' } },
    { path: 'doc/Accesos/AprobarADM', component: AccesosComponent, data: { renderMode: 'client', id: 'AprobarADM' } },
    { path: 'doc/Accesos/SeguimientoADM', component: AccesosComponent, data: { renderMode: 'client', id: 'SeguimientoADM' } },
    { path: 'doc/Accesos/RenovacionADM', component: AccesosComponent, data: { renderMode: 'client', id: 'RenovacionADM' } },
    { path: 'doc/Accesos/CancelarADM', component: AccesosComponent, data: { renderMode: 'client', id: 'CancelarADM' } },


    { path: 'doc/ModeloEstandar/index', component: ModeloEstandarComponent, data: { renderMode: 'client', id: 'index' } },
    { path: 'doc/ModeloEstandar/PAccesos', component: ModeloEstandarComponent, data: { renderMode: 'client', id: 'PAccesos' } },
    { path: 'doc/ModeloEstandar/PCorrectivo', component: ModeloEstandarComponent, data: { renderMode: 'client', id: 'PCorrectivo' } },
    { path: 'doc/ModeloEstandar/PEmergencias', component: ModeloEstandarComponent, data: { renderMode: 'client', id: 'PEmergencias' } },
    { path: 'doc/ModeloEstandar/PEstadistico', component: ModeloEstandarComponent, data: { renderMode: 'client', id: 'PEstadistico' } },
    { path: 'doc/ModeloEstandar/PIntervenciones', component: ModeloEstandarComponent, data: { renderMode: 'client', id: 'PIntervenciones' } },
    { path: 'doc/ModeloEstandar/PPreventivo', component: ModeloEstandarComponent, data: { renderMode: 'client', id: 'PPreventivo' } },
    { path: 'doc/ModeloEstandar/PRecibir', component: ModeloEstandarComponent, data: { renderMode: 'client', id: 'PRecibir' } },

    { path: 'doc/SiteEP/SiteEP_AccesoDWP-Remedy', component: SiteEPComponent, data: { renderMode: 'client', id: 'SiteEP_AccesoDWP-Remedy' } },
    { path: 'doc/SiteEP/SiteEP_AccesoHelix-ITSM', component: SiteEPComponent, data: { renderMode: 'client', id: 'SiteEP_AccesoHelix-ITSM' } },
    { path: 'doc/SiteEP/SiteEP_CrearCI', component: SiteEPComponent, data: { renderMode: 'client', id: 'SiteEP_CrearCI' } },
    { path: 'doc/SiteEP/SiteEP_BuscarCI', component: SiteEPComponent, data: { renderMode: 'client', id: 'SiteEP_BuscarCI' } },
    { path: 'doc/SiteEP/SiteEP_ModificarCI', component: SiteEPComponent, data: { renderMode: 'client', id: 'SiteEP_ModificarCI' } },
    { path: 'doc/SiteEP/SiteEP_ReportesCI', component: SiteEPComponent, data: { renderMode: 'client', id: 'SiteEP_ReportesCI' } },

    { path: 'doc/Incidentes/index', component: IncidentesComponent, data: { renderMode: 'client', id: 'index' } },
    { path: 'doc/Incidentes/CrearTI', component: IncidentesComponent, data: { renderMode: 'client', id: 'CrearTI' } },
    { path: 'doc/Incidentes/SLAti', component: IncidentesComponent, data: { renderMode: 'client', id: 'SLAti' } },
    { path: 'doc/Incidentes/AtencionTI', component: IncidentesComponent, data: { renderMode: 'client', id: 'AtencionTI' } },
    { path: 'doc/Incidentes/DocumentarTI', component: IncidentesComponent, data: { renderMode: 'client', id: 'DocumentarTI' } },
    { path: 'doc/Incidentes/RelacionINC', component: IncidentesComponent, data: { renderMode: 'client', id: 'RelacionINC' } },
    { path: 'doc/Incidentes/EscalarTI', component: IncidentesComponent, data: { renderMode: 'client', id: 'EscalarTI' } },
    { path: 'doc/Incidentes/CrearTareaTI', component: IncidentesComponent, data: { renderMode: 'client', id: 'CrearTareaTI' } },
    { path: 'doc/Incidentes/CerrarTI', component: IncidentesComponent, data: { renderMode: 'client', id: 'CerrarTI' } },


    { path: 'doc/Tareas/index', component: TareasComponent, data: { renderMode: 'client', id: 'index' } },
    { path: 'doc/Tareas/AtenderTarea', component: TareasComponent, data: { renderMode: 'client', id: 'AtenderTarea' } },
    { path: 'doc/Tareas/CerrarTarea', component: TareasComponent, data: { renderMode: 'client', id: 'CerrarTarea' } },
    { path: 'doc/Tareas/CrearTarea', component: TareasComponent, data: { renderMode: 'client', id: 'CrearTarea' } },
    { path: 'doc/Tareas/DocumentarTarea', component: TareasComponent, data: { renderMode: 'client', id: 'DocumentarTarea' } },

    { path: 'doc/Movilidad/index', component: MovilidadComponent, data: { renderMode: 'client', id: 'index' } },
    { path: 'doc/Movilidad/AltaUsuarioDWP', component: MovilidadComponent, data: { renderMode: 'client', id: 'AltaUsuarioDWP' } },
    { path: 'doc/Movilidad/DWP_Movil', component: MovilidadComponent, data: { renderMode: 'client', id: 'DWP_Movil' } },
    { path: 'doc/Movilidad/DWP_Movil_Aprueba', component: MovilidadComponent, data: { renderMode: 'client', id: 'DWP_Movil_Aprueba' } },
    { path: 'doc/Movilidad/DWP_Movil_InstalarConfigurar', component: MovilidadComponent, data: { renderMode: 'client', id: 'DWP_Movil_InstalarConfigurar' } },
    { path: 'doc/Movilidad/DWP_Movil_Navegar', component: MovilidadComponent, data: { renderMode: 'client', id: 'DWP_Movil_Navegar' } },
    { path: 'doc/Movilidad/DWP_Movil_Preferencias', component: MovilidadComponent, data: { renderMode: 'client', id: 'DWP_Movil_Preferencias' } },
    { path: 'doc/Movilidad/DWP_Movil_Rechaza', component: MovilidadComponent, data: { renderMode: 'client', id: 'DWP_Movil_Rechaza' } },
    { path: 'doc/Movilidad/SmartIt_Movil', component: MovilidadComponent, data: { renderMode: 'client', id: 'SmartIt_Movil' } },
    { path: 'doc/Movilidad/SmartIt_Movil_AtenderINC', component: MovilidadComponent, data: { renderMode: 'client', id: 'SmartIt_Movil_AtenderINC' } },
    { path: 'doc/Movilidad/SmartIt_Movil_AtenderTarea', component: MovilidadComponent, data: { renderMode: 'client', id: 'SmartIt_Movil_AtenderTarea' } },
    { path: 'doc/Movilidad/SmartIt_Movil_AtenderWO', component: MovilidadComponent, data: { renderMode: 'client', id: 'SmartIt_Movil_AtenderWO' } },
    { path: 'doc/Movilidad/SmartIt_Movil_InstalarConfigurar', component: MovilidadComponent, data: { renderMode: 'client', id: 'SmartIt_Movil_InstalarConfigurar' } },
    { path: 'doc/Movilidad/SmartIt_Movil_Navegar', component: MovilidadComponent, data: { renderMode: 'client', id: 'SmartIt_Movil_Navegar' } },
    { path: 'doc/Movilidad/SmartIT', component: MovilidadComponent, data: { renderMode: 'client', id: 'SmartIT' } },
    { path: 'doc/Movilidad/SmartIT_Calendario', component: MovilidadComponent, data: { renderMode: 'client', id: 'SmartIT_Calendario' } },
    { path: 'doc/Movilidad/SmartIT_Consola', component: MovilidadComponent, data: { renderMode: 'client', id: 'SmartIT_Consola' } },
    { path: 'doc/Movilidad/SmartIT_CrearNuevo', component: MovilidadComponent, data: { renderMode: 'client', id: 'SmartIT_CrearNuevo' } },
    { path: 'doc/Movilidad/SmartIT_Panel', component: MovilidadComponent, data: { renderMode: 'client', id: 'SmartIT_Panel' } },


    { path: 'doc/Problemas/index', component: ProblemasComponent, data: { renderMode: 'client', id: 'index' } },
    { path: 'doc/Problemas/AtencionProblema', component: ProblemasComponent, data: { renderMode: 'client', id: 'AtencionProblema' } },
    { path: 'doc/Problemas/CierreProblema', component: ProblemasComponent, data: { renderMode: 'client', id: 'CierreProblema' } },
    { path: 'doc/Problemas/CreacionProblema', component: ProblemasComponent, data: { renderMode: 'client', id: 'CreacionProblema' } },
    { path: 'doc/Problemas/DocumentarProblema', component: ProblemasComponent, data: { renderMode: 'client', id: 'DocumentarProblema' } },

    { path: 'doc/Conocimientos/index', component: ConocimientosComponent, data: { renderMode: 'client', id: 'index' } },
    { path: 'doc/Conocimientos/CrearConocimiento', component: ConocimientosComponent, data: { renderMode: 'client', id: 'CrearConocimiento' } },
    { path: 'doc/Conocimientos/ModificarConocimiento', component: ConocimientosComponent, data: { renderMode: 'client', id: 'ModificarConocimiento' } },
    { path: 'doc/Conocimientos/PublicarConocimiento', component: ConocimientosComponent, data: { renderMode: 'client', id: 'PublicarConocimiento' } },
    { path: 'doc/Conocimientos/SolicitarConocimiento', component: ConocimientosComponent, data: { renderMode: 'client', id: 'SolicitarConocimiento' } },
    { path: 'doc/Conocimientos/ValorarConocimiento', component: ConocimientosComponent, data: { renderMode: 'client', id: 'ValorarConocimiento' } },

    { path: 'doc/RutinasMantenimiento/SolicitudRutina', component: RutinasMantenimientoComponent, data: { renderMode: 'client', id: 'SolicitudRutina' } },
    { path: 'doc/RutinasMantenimiento/FormatoRutina', component: RutinasMantenimientoComponent, data: { renderMode: 'client', id: 'FormatoRutina' } },
    { path: 'doc/RutinasMantenimiento/CambioBajaRutina', component: RutinasMantenimientoComponent, data: { renderMode: 'client', id: 'CambioBajaRutina' } },
    { path: 'doc/RutinasMantenimiento/AtencionWORutina', component: RutinasMantenimientoComponent, data: { renderMode: 'client', id: 'AtencionWORutina' } },

    { path: 'doc/Funcionalidad/index', component: FuncionalidadComponent, data: { renderMode: 'client', id: 'index' } },
    { path: 'doc/Funcionalidad/Calendario', component: FuncionalidadComponent, data: { renderMode: 'client', id: 'Calendario' } },
    { path: 'doc/Funcionalidad/Consola', component: FuncionalidadComponent, data: { renderMode: 'client', id: 'Consola' } },
    { path: 'doc/Funcionalidad/CrearNuevo', component: FuncionalidadComponent, data: { renderMode: 'client', id: 'CrearNuevo' } },
    { path: 'doc/Funcionalidad/Panel', component: FuncionalidadComponent, data: { renderMode: 'client', id: 'Panel' } },

    { path: '**', redirectTo: 'doc/Generales/1' }
];
