import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuFormatosComponent } from '../menu-formatos/menu-formatos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { text } from 'node:stream/consumers';

@Component({
  selector: 'app-formatos',
  imports: [NavbarComponent, MenuFormatosComponent, CommonModule],
  templateUrl: './formatos.component.html',
  styleUrl: './formatos.component.css'
})
export class FormatosComponent {

   pageId: string = '';
    content: any;
    // URL: string = '/PortalPSD';  //RC
      URL: string = '/smartit/PortalPSD'; //SmartIT
    // URL: string = '';  //Local

    pagesData: Record<string, { title: string; text: string; text2: string; links: { label: string; url: string }[] }> = {
      'DatosMaestros': {
        title: 'Datos Maestros',
        text: 'Formatos relacionados a Datos Maestros',
        text2: 'Enlaces relacionados:',
        links: [
          { label: '01COMPANY.XLSM', url: `${this.URL}/Formatos/Datos_Maestros/01Company.xlsm` },
          { label: '02LOCATION.XLSM', url: `${this.URL}/Formatos/Datos_Maestros/02Location.xlsm` },
          { label: '03PEOPLEORG.XLSM', url: `${this.URL}/Formatos/Datos_Maestros/03PeopleOrg.xlsm` },
          { label: '04SUPPORT_GROUP.XLSM', url: `${this.URL}/Formatos/Datos_Maestros/04Support_Group.xlsm` },
          { label: '05PEOPLE.XLSM', url: `${this.URL}/Formatos/Datos_Maestros/05People.xlsm` },
          { label: '06ONBOARDING_OPERATIONALCATALOG.XLSM', url: `${this.URL}/Formatos/Datos_Maestros/06Onboarding_OperationalCatalog.xlsm` },
          { label: '07PRODUCT_CATALOG.XLSM', url: `${this.URL}/Formatos/Datos_Maestros/07Product_Catalog.xlsm` },
          { label: '08ASSIGMENT.XLSM', url: `${this.URL}/Formatos/Datos_Maestros/08Assignment.xlsm` },
          { label: '09FORMATO NIVELES DE SERVICIOS.XLSM', url: `${this.URL}/Formatos/Datos_Maestros/09Formato_Niveles_de_Servicios.xlsx` },
          { label: 'FORMATO ALTA DE CATEGORIA DE PRODUCTO (SOFTWARE).XLSM', url: `${this.URL}/Formatos/Datos_Maestros/Formato_Alta_de_Categoria_de_Producto_(Software).xlsx` }
        ]
      },
      'GestionAccesos': {
        title: 'Gestion de Accesos',
        text: 'Formatos relacionados a la Gestion de accesos',
        text2: 'Enlaces relacionados:',
        links: [
          { label: 'FORMATO ALTA DE PERFILES ADM.XLSX', url: `${this.URL}/Formatos/Gestion_Accesos/Formato Alta de Perfiles ADM.xlsx` },
          { label: '200ONBOARDING_ADM_USUARIOS_LDAP.XLS', url: `${this.URL}/Formatos/Gestion_Accesos/ONBOARDING_ADM_USUARIOS_LDAP.xls` },
          { label: '22ONBOARDING_ADM_CORRESPONDENCIA_DEPTOS_GRUPOS DE SOPORTE.XLSX', url: `${this.URL}/Formatos/Gestion_Accesos/22ONBOARDING_ADM_CORRESPONDENCIA_DEPTOS_GRUPOS DE SOPORTE.xlsx` },
          { label: '23ONBOARDING ADM CORRESPONDENCIA ROLES GRUPO SOPORTE.XLSX', url: `${this.URL}/Formatos/Gestion_Accesos/23Onboarding ADM CorrespondenciaRolesGrupoSoporte.xlsx` },
          { label: 'FORMATO RECONCILIACION IDM CLOUD.XLSX', url: `${this.URL}/Formatos/Gestion_Accesos/Formato Reconciliacion IDM Cloud.zip` }
        ]
      },
      'DiccionarioDatos': {
        title: 'Diccionario de datos',
        text: 'Formatos relacionados a diccionario de datos',
        text2: 'Enlaces relacionados:',
        links: [
          { label: 'DICCIONARIO DE DATOS (CREAR CRQ DE IXTOOLS).XLSX', url: `${this.URL}/Formatos/Diccionario_Datos/Diccionario de Datos (Crear CRQ de iXtools).xlsx` },
          { label: 'DICCIONARIO DE DATOS CAMBIOS.DOCX', url: `${this.URL}/Formatos/Diccionario_Datos/Diccionario de datos CAMBIOS.docx` },
          { label: 'DICCIONARIO DE DATOS CAMBIOS.XLSX', url: `${this.URL}/Formatos/Diccionario_Datos/Diccionario de Datos Cambios.xlsx` },
          { label: 'DICCIONARIO DE DATOS DE INCIDENTES DE TI.XLSX', url: `${this.URL}/Formatos/Diccionario_Datos/Diccionario de Datos de Incidentes de TI.xlsx` },
          { label: 'DICCIONARIO DE DATOS INCIDENTE CPD.XLSX', url: `${this.URL}/Formatos/Diccionario_Datos/Diccionario de Datos Incidente CPD.xlsx` },
          { label: 'DICCIONARIO DE DATOS INCIDENTES.XLSX', url: `${this.URL}/Formatos/Diccionario_Datos/Diccionario de Datos INCIDENTES.xlsx` },
          { label: 'DICCIONARIO DE DATOS SITEEP.XLSX', url: `${this.URL}/Formatos/Diccionario_Datos/Diccionario de datos SiteEP.csv` },
          { label: 'DICCIONARIO KM INCIDENTES.XLSX', url: `${this.URL}/Formatos/Diccionario_Datos/Diccionario KM Incidentes.xlsx` },
          { label: 'PASOS PARA EL FLUJO DE CRQS CON IXTOOLS.PDF', url: `${this.URL}/Formatos/Diccionario_Datos/Pasos para el flujo de CRQs con iXtools.pdf` }
        ]
      },
      'ProcesosCorrectivos': {
        title: 'Procesos Correctivos',
        text: 'Formatos relacionados a Procesos correctivos',
        text2: 'Enlaces relacionados:',
        links: [
          { label: 'FORMATO ALTA DE CATEGORIAS DE FALLAS CPD.ZIP', url: `${this.URL}/Formatos/Proceso_Correctivo/Formato Alta de categorias de Fallas CPD.zip` },
          { label: 'FORMATOCATEGORIASRESOLUCIONINCIDENTESCPD.ZIP', url: `${this.URL}/Formatos/Proceso_Correctivo/FormatoCategoriasResolucionIncidentesCPD.zip` },
          { label: 'FORMATO SERVICIOS EN LA NUBE.XLSX', url: `${this.URL}/Formatos/Proceso_Correctivo/Formato Servicios en la Nube.xlsx` },
          { label: 'FORMATO DETALLE DE INCIDENTES_TI_SRM.XLSX', url: `${this.URL}/Formatos/Proceso_Correctivo/Formato Detalle de Incidentes_TI_SRM.xlsx` }
        ]
      },
      'ProcesoPreventivo': {
        title: 'Proceso Preventivo',
        text: 'Formatos relacionados a procesos preventivos',
        text2: 'Enlaces relacionados:',
        links: [
          { label: 'CARGARM.XLSX', url: `${this.URL}/Formatos/Procesos_Preventivos/CargaRM.xlsx` }
        ]
      },
      'ProcesoRecepcion': {
        title: 'Proceso de Recepcion',
        text: 'Formatos relacionados a diccionario de datos',
        text2: 'Enlaces relacionados:',
        links: [
          { label: 'ALTA_DE_SITIOS.CSV', url: `${this.URL}/Formatos/Procesos_recepcion/csv/ALTA_DE_SITIOS_coma.csv` },
          { label: 'ASIGNACION_GRUPO.CSV', url: `${this.URL}/Formatos/Procesos_recepcion/csv/ASIGNACION_GRUPO_coma.csv` },
          { label: 'CAMBIO_ESTADO.CSV', url: `${this.URL}/Formatos/Procesos_recepcion/csv/CAMBIO_ESTADO_coma.csv` },
          { label: 'CAMBIO_NOMBRE.CSV', url: `${this.URL}/Formatos/Procesos_recepcion/csv/CAMBIO_NOMBRE_coma.csv` },
          { label: 'CAMBIO_TECNOLOGIA_SITIO.CSV', url: `${this.URL}/Formatos/Procesos_recepcion/csv/CAMBIO_TECNOLOGIA_TIPO_coma.csv` },
          { label: 'CAMBIO_USU_PRIO.CSV', url: `${this.URL}/Formatos/Procesos_recepcion/csv/CAMBIO_USU_PRIO_coma.csv` },
          { label: 'ORDEN_ESTADO.CSV', url: `${this.URL}/Formatos/Procesos_recepcion/csv/ORDEN_ESTADO_coma.csv` },
          { label: 'RELACION_CSR_NUEVA.CSV', url: `${this.URL}/Formatos/Procesos_recepcion/csv/RELACION_CSR_NUEVA_coma.csv` },
          { label: 'RELACION_NUEVA.CSV', url: `${this.URL}/Formatos/Procesos_recepcion/csv/RELACION_NUEVA_coma.csv` },
          { label: 'SITIO_CONECTADO.CSV', url: `${this.URL}/Formatos/Procesos_recepcion/csv/SITIO_CONECTADO_coma.csv` },
          { label: 'ALTA_DE_SITIOS.XLSX', url: `${this.URL}/Formatos/Procesos_recepcion/excel/ALTA_DE_SITIOS.xlsx` },
          { label: 'ASIGNACION_GRUPO.XLSX', url: `${this.URL}/Formatos/Procesos_recepcion/excel/ASIGNACION_GRUPO.xlsx` },
          { label: 'CAMBIO_ESTADO.XLSX', url: `${this.URL}/Formatos/Procesos_recepcion/excel/CAMBIO_ESTADO.xlsx` },
          { label: 'CAMBIO_NOMBRE.XLSX', url: `${this.URL}/Formatos/Procesos_recepcion/excel/CAMBIO_NOMBRE.xlsx` },
          { label: 'CAMBIO_TECNOLOGIA_SITIO.XLSX', url: `${this.URL}/Formatos/Procesos_recepcion/excel/CAMBIO_TECNOLOGIA_TIPO.xlsx` },
          { label: 'CAMBIO_USU_PRIO.XLSX', url: `${this.URL}/Formatos/Procesos_recepcion/excel/CAMBIO_USU_PRIO.xlsx` },
          { label: 'ORDEN_ESTADO.XLSX', url: `${this.URL}/Formatos/Procesos_recepcion/excel/ORDEN_ESTADO.xlsx` },
          { label: 'RELACION_CSR_NUEVA.XLSX', url: `${this.URL}/Formatos/Procesos_recepcion/excel/RELACION_CSR_NUEVA.xlsx` },
          { label: 'RELACION_NUEVA.XLSX', url: `${this.URL}/Formatos/Procesos_recepcion/excel/RELACION_NUEVA.xlsx` },
          { label: 'SITIO_CONECTADO.XLSX', url: `${this.URL}/Formatos/Procesos_recepcion/excel/SITIO_CONECTADO.xlsx` }
        ]
      },
      'ServiciosCorporativos': {
        title: 'Servicios Corporativos',
        text: 'Formatos relacionados a Servicios Corporativos',
        text2: 'Enlaces relacionados:',
        links: [
          { label: 'FORMATO_CASOS_V5.5.XLSX', url: `${this.URL}/Formatos/Servicios_corporativos/Formato_Casos_V5.5.XLSX` },
          { label: 'FORMATO_CLIENTES.XLSX', url: `${this.URL}/Formatos/Servicios_corporativos/Formato1_Clientes.xlsx` },
          { label: 'FORMATOV1_ALTA_USUARIOS_SALESFORCE.XLSX', url: `${this.URL}/Formatos/Servicios_corporativos/FormatoV1_Alta_Usuarios_SALESFORCE.xlsx` }
        ]
      },

      'Manuales': {
        title: 'Manuales',
        text: 'Formatos relacionados a manuales',
        text2: 'Enlaces relacionados:',
        links: [
          { label: 'MANUAL PARA ADJUNTAR ARCHIVOS A INCIDENTES', url: `${this.URL}/Formatos/Manuales/Manual_para_adjuntar_archivos_a_incidentes.pdf` },
          { label: 'MANUAL PARA CREAR CAMBIOS PARA CROTALO', url: `${this.URL}/Formatos/Manuales/Manual_para_crear_cambios_para_CROTALO.pdf` },
          // { label: 'MANUAL ACCESOS TM', url: `${this.URL}/Formatos/Manuales/Manual_AccesosTM.pdf` },
          { label: 'MANUAL PARA EL USO DE REST API CALLS V4', url: `${this.URL}/Formatos/Manuales/Manual_para_el_uso_de_los_Rest_API_Calls_V4.0.pdf` },
          { label: 'MANUAL PARA CREAR WO CON REST API CALLS', url: `${this.URL}/Formatos/Manuales/Manual_para_crear_WO_con_Rest_API_Calls.pdf` },
          { label: 'MANUAL PARA EL USO DE LOS WEB SERVICES', url: `${this.URL}/Formatos/Manuales/Manual_para_el_uso_de_los_Web_Services.pdf` }
        ]
      },
      'NuevasIntegraciones': {
        title: 'Nuevas Integraciones',
        text: 'Formatos relacionados a Nuevas Integraciones',
        text2: 'Enlaces relacionados:',
        links: [
          { label: 'TIPO DE PETICIONES DE INTEGRACIONES A REMEDY CLOUD', url: `${this.URL}/Formatos/Nuevas_integraciones/CheckList peticiones integraciones a Remedy Cloud (Modificacion y Alta de Reglas).xlsx` },
          { label: 'FORMATO ESTANDAR PARA SOLICITAR INTEGRACIONES A REMEDY', url: `${this.URL}/Formatos/Nuevas_integraciones/Formato estandar para solicitar integraciones a Remedy Cloud (NUEVAS integraciones).xlsx` },
        ]
      },
      'NuevosProyectos': {
        title: 'Nuevos Proyectos',
        text: 'Formatos relacionados a Nuevos Proyectos',
        text2: 'Enlaces relacionados:',
        links: [
          { label: 'SOLICITUD DE PROYECTOS DE TI', url: `${this.URL}/Formatos/Nuevos_Proyectos/Solicitud de Proyecto de TI 1.docx` }
        ]
      },
    };
  
    constructor(private route: ActivatedRoute) {
      const data = this.route.snapshot.data;
    this.pageId = data['id'] || '';
        this.content = this.pagesData[this.pageId] || 
        { title: 'Formatos OYM Corporativo', 
          text: 'En esta seccion se muestran formatos(archivos) relacionados a sitios propios del area de OYM Digitalizacion y utiles para la operacion de la misma.',
          text2: 'Formatos relacionados a:',
          links: [
            { lista: 'DATOS MAESTROS' },
            { lista: 'GESTION DE ACCESOS' },
            { lista: 'DICCIONARIO DE DATOS' },
            { lista: 'PROCESOS CORRECTIVOS' },
            { lista: 'PROCESO PREVENTIVO' },
            { lista: 'PROCESO DE RECEPCION' },
            { lista: 'SERVICIOS CORPORATIVOS' },
            { lista: 'MANUALES' },
            { lista: 'NUEVAS INTEGRACIONES' },
            { lista: 'NUEVOS PROYECTOS' }
          ]
        };
    }

}
