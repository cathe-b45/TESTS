import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HeadbarComponent } from '../../../headbar/headbar.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-test-ssdd-completo',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DividerModule, CardModule, DialogModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule, PaginatorModule],
  providers: [ConfirmationService],
  templateUrl: './test-isi-completo.component.html',
  styleUrl: './test-isi-completo.component.scss'
})
export class TestISICompletoComponent {
  temas: { [key: string]: any[] } = {
    "Tema 1": [
      {
        "pregunta": "¿Qué describe mejor la integración de sistemas de información?",
        "respuestas": [
          "La operación y mantenimiento de sistemas aislados",
          "La coordinación de hardware, software y procesos para soportar el negocio",
          "La migración de datos sin supervisión",
          "La formación de los empleados en nuevas tecnologías"
        ],
        "correcta": "La coordinación de hardware, software y procesos para soportar el negocio",
        "explicacion": "La respuesta correcta es: <b>La coordinación de hardware, software y procesos para soportar el negocio</b>. La integración une distintos elementos para dar soporte continuo a los procesos de negocio."
      },
      {
        "pregunta": "¿Cuál de estos NO es un reto típico de la integración?",
        "respuestas": [
          "Capturar la semántica y temporización de datos",
          "Mantener el servicio durante la integración",
          "Aumentar la fiabilidad del sistema integrado",
          "Eliminar todos los contratos con proveedores"
        ],
        "correcta": "Eliminar todos los contratos con proveedores",
        "explicacion": "La respuesta correcta es: <b>Eliminar todos los contratos con proveedores</b>. Esta acción no es un reto, sino un error de gestión que no aparece en el material."
      },
      {
        "pregunta": "¿Para qué sirve un checklist en un proyecto de integración?",
        "respuestas": [
          "Documentar solo los errores",
          "Estandarizar procesos y reducir riesgos",
          "Reemplazar la auditoría de seguridad",
          "Medir el rendimiento de la red"
        ],
        "correcta": "Estandarizar procesos y reducir riesgos",
        "explicacion": "La respuesta correcta es: <b>Estandarizar procesos y reducir riesgos</b>. Un checklist asegura pasos repetibles y mejora la comunicación."
      },
      {
        "pregunta": "¿Cuál es el primer paso de la checklist general?",
        "respuestas": [
          "Evaluación de la seguridad",
          "Definir el objetivo y contexto",
          "Integración de red",
          "Seleccionar la plataforma de mensajería"
        ],
        "correcta": "Definir el objetivo y contexto",
        "explicacion": "La respuesta correcta es: <b>Definir el objetivo y contexto</b>. Todo plan de integración comienza con establecer metas y alcance."
      },
      {
        "pregunta": "En la fase de Evaluación IT, ¿qué se debe incluir?",
        "respuestas": [
          "Solo hardware",
          "Infraestructura hardware y aplicaciones software",
          "Exclusivamente políticas de datos",
          "Únicamente contratos con empleados"
        ],
        "correcta": "Infraestructura hardware y aplicaciones software",
        "explicacion": "La respuesta correcta es: <b>Infraestructura hardware y aplicaciones software</b>. La evaluación IT abarca ambos componentes."
      },
      {
        "pregunta": "¿Qué elemento NO forma parte de la evaluación de contratos y licencias?",
        "respuestas": [
          "Acuerdos con proveedores",
          "SLA y garantías",
          "Políticas internas de empleados",
          "Selección de patrones de diseño"
        ],
        "correcta": "Selección de patrones de diseño",
        "explicacion": "La respuesta correcta es: <b>Selección de patrones de diseño</b>. Los patrones no están vinculados a contratos ni licencias."
      },
      {
        "pregunta": "¿Qué implica la integración de datos?",
        "respuestas": [
          "Migrar solo datos históricos",
          "Evaluar calidad y criticidad de datos",
          "Eliminar datos redundantes sin análisis",
          "Modificar todas las bases de datos"
        ],
        "correcta": "Evaluar calidad y criticidad de datos",
        "explicacion": "La respuesta correcta es: <b>Evaluar calidad y criticidad de datos</b>. Se analiza cuáles datos migrar según calidad y negocio."
      },
      {
        "pregunta": "¿Cuál es una ventaja de bases de datos compartidas?",
        "respuestas": [
          "Punto único de fallo",
          "Centralización y consistencia de datos",
          "Mayor complejidad de replicación",
          "Reducción de la semántica"
        ],
        "correcta": "Centralización y consistencia de datos",
        "explicacion": "La respuesta correcta es: <b>Centralización y consistencia de datos</b>. Unifica sintaxis y semántica en un único repositorio."
      },
      {
        "pregunta": "¿Qué patrón de integración se usa para mover grandes bloques de información?",
        "respuestas": [
          "Broadcasting events",
          "Bulk or batch data movement",
          "Orquestación de servicios",
          "Agregación de datos en tiempo real"
        ],
        "correcta": "Bulk or batch data movement",
        "explicacion": "La respuesta correcta es: <b>Bulk or batch data movement</b>. Se trata de movimientos masivos o por lotes."
      },
      {
        "pregunta": "¿Qué rol representa al componente que publica mensajes?",
        "respuestas": [
          "Consumidor/Suscriptor",
          "Productor/Publicador",
          "Broker",
          "IndexPart"
        ],
        "correcta": "Productor/Publicador",
        "explicacion": "La respuesta correcta es: <b>Productor/Publicador</b>. Genera mensajes que el broker distribuye."
      },
      {
        "pregunta": "¿Cuál es la función del broker de mensajes?",
        "respuestas": [
          "Consumir mensajes",
          "Publicar datos en bases de datos",
          "Manejar recepción y entrega según políticas",
          "Auditar seguridad"
        ],
        "correcta": "Manejar recepción y entrega según políticas",
        "explicacion": "La respuesta correcta es: <b>Manejar recepción y entrega según políticas</b>. Actúa de intermediario entre productores y consumidores."
      },
      {
        "pregunta": "¿Qué característica distingue a las plataformas de mensajería?",
        "respuestas": [
          "Comunicación sincrónica sólo",
          "Desacoplamiento en tiempo",
          "Depende de la base de datos compartida",
          "Controla directamente la semántica"
        ],
        "correcta": "Desacoplamiento en tiempo",
        "explicacion": "La respuesta correcta es: <b>Desacoplamiento en tiempo</b>. Productor y consumidor no necesitan coincidir temporalmente."
      },
      {
        "pregunta": "Entre las desventajas de mensajería está:",
        "respuestas": [
          "Alta disponibilidad nativa",
          "Punto único de fallo en el broker",
          "Comunicación totalmente síncrona",
          "Eliminación de latencia"
        ],
        "correcta": "Punto único de fallo en el broker",
        "explicacion": "La respuesta correcta es: <b>Punto único de fallo en el broker</b>. Si el broker cae, se interrumpe la mensajería."
      },
      {
        "pregunta": "¿Qué KPI define resultados clave asociados a objetivos?",
        "respuestas": [
          "OKR",
          "VPN",
          "TimeTicks",
          "IP Address"
        ],
        "correcta": "OKR",
        "explicacion": "La respuesta correcta es: <b>OKR</b>. Objectives Key Results son objetivos clave ligados a indicadores."
      },
      {
        "pregunta": "¿Qué métrica se utiliza para medir rendimiento futuro descontado?",
        "respuestas": [
          "ROI",
          "VPN",
          "sysUpTime",
          "Counter"
        ],
        "correcta": "VPN",
        "explicacion": "La respuesta correcta es: <b>VPN</b>. Valor Presente Neto calcula flujos futuros descontados."
      },
      {
        "pregunta": "¿Cuál de estos es un patrón de sincronización de datos entre aplicaciones?",
        "respuestas": [
          "ETL",
          "Sincronización de datos entre aplicaciones",
          "Orquestación de servicios",
          "Integración de red"
        ],
        "correcta": "Sincronización de datos entre aplicaciones",
        "explicacion": "La respuesta correcta es: <b>Sincronización de datos entre aplicaciones</b>. Define intercambio consistente entre sistemas."
      },
      {
        "pregunta": "¿Qué abreviatura corresponde a Extract, Transform, Load?",
        "respuestas": [
          "B2B",
          "ETL",
          "API",
          "LDAP"
        ],
        "correcta": "ETL",
        "explicacion": "La respuesta correcta es: <b>ETL</b>. Extract, Transform, Load es proceso de integración de datos."
      },
      {
        "pregunta": "Una ventaja de plataformas de mensajes es:",
        "respuestas": [
          "Requieren alto acoplamiento temporal",
          "Facilitan integración heterogénea",
          "El broker elimina la semántica",
          "Solo funcionan con un lenguaje"
        ],
        "correcta": "Facilitan integración heterogénea",
        "explicacion": "La respuesta correcta es: <b>Facilitan integración heterogénea</b>. Ayudan a integrar distintos lenguajes y sistemas."
      },
      {
        "pregunta": "En el checklist, ¿qué paso sigue a la evaluación de procesos de negocio?",
        "respuestas": [
          "Evaluación IT",
          "Integración de red",
          "KPI y OKR",
          "Agregación de datos"
        ],
        "correcta": "Evaluación IT",
        "explicacion": "La respuesta correcta es: <b>Evaluación IT</b>. Tras analizar procesos, se evalúa infraestructura TI."
      },
      {
        "pregunta": "¿Qué desafío introduce la replicación en bases de datos compartidas?",
        "respuestas": [
          "Consistencia y consenso",
          "Eliminación de latencia",
          "Independencia de la red",
          "Simplicidad de hardware"
        ],
        "correcta": "Consistencia y consenso",
        "explicacion": "La respuesta correcta es: <b>Consistencia y consenso</b>. Replicar datos requiere mantener coherencia entre réplicas."
      },
      {
        "pregunta": "¿Qué caso de uso necesita procesar datos de múltiples fuentes en tiempo real?",
        "respuestas": [
          "Agregación de datos",
          "Integración de flujos de datos continuos",
          "Bulk data movement",
          "Broadcasting events"
        ],
        "correcta": "Integración de flujos de datos continuos",
        "explicacion": "La respuesta correcta es: <b>Integración de flujos de datos continuos</b>. Se procesan streams en tiempo real."
      },
      {
        "pregunta": "El patrón de 'Broadcasting events' se usa para:",
        "respuestas": [
          "Mover grandes volúmenes",
          "Publicar eventos a múltiples suscriptores",
          "Sincronizar datos en lote",
          "Gestionar licencias"
        ],
        "correcta": "Publicar eventos a múltiples suscriptores",
        "explicacion": "La respuesta correcta es: <b>Publicar eventos a múltiples suscriptores</b>. Broadcasting envia un mensaje a varios receptores."
      }
    ],
    "Tema 2": [
      {
        "pregunta": "¿Cuál es el nivel de integración que utiliza brokers de mensajes para comunicar sistemas?",
        "respuestas": [
          "Integración a nivel de método",
          "Integración a nivel de datos",
          "Integración a nivel de interfaz de aplicación",
          "Integración a nivel de interfaz de usuario"
        ],
        "correcta": "Integración a nivel de interfaz de aplicación",
        "explicacion": "La respuesta correcta es: <b>Integración a nivel de interfaz de aplicación</b>. Se basa en usar las API o interfaces expuestas (por ejemplo, mediante brokers de mensajes). Las demás opciones corresponden a compartir lógica, mover datos o screen‐scraping de UI."
      },
      {
        "pregunta": "¿Qué nivel de integración comparte la lógica de negocio directamente?",
        "respuestas": [
          "Integración a nivel de interfaz de usuario",
          "Integración a nivel de datos",
          "Integración a nivel de método",
          "Integración a nivel de interfaz de aplicación"
        ],
        "correcta": "Integración a nivel de método",
        "explicacion": "La respuesta correcta es: <b>Integración a nivel de método</b>, ya que implica exponer y reutilizar métodos de negocio. Los otros niveles tratan interfaces UI, datos o aplicaciones."
      },
      {
        "pregunta": "¿Qué enfoque de integración a nivel de UI se conoce también como screen scraping?",
        "respuestas": [
          "Integración a nivel de método",
          "Integración a nivel de interfaz de usuario",
          "Integración a nivel de datos",
          "Integración a nivel de aplicación"
        ],
        "correcta": "Integración a nivel de interfaz de usuario",
        "explicacion": "La respuesta correcta es: <b>Integración a nivel de interfaz de usuario</b>. Consiste en automatizar o agrupar aplicaciones a través de sus pantallas, conocido como screen scraping."
      },
      {
        "pregunta": "¿Cuál de estas soluciones NO es un ERP estándar?",
        "respuestas": [
          "Enterprise Resource Planning",
          "Customer Relationship Management",
          "Supply Chain Management",
          "Business Intelligence"
        ],
        "correcta": "Customer Relationship Management",
        "explicacion": "La respuesta correcta es: <b>Customer Relationship Management</b>. CRM es una solución para la relación con el cliente, no un ERP que estandariza procesos."
      },
      {
        "pregunta": "¿Qué objetivo estratégico de un ERP consiste en «Normalización de los datos maestros internos y externos»?",
        "respuestas": [
          "Crear una arquitectura común de procesos empresariales",
          "Estandarizar la arquitectura hardware y software",
          "Normalización de los datos maestros internos y externos",
          "Mejorar la analítica CRM"
        ],
        "correcta": "Normalización de los datos maestros internos y externos",
        "explicacion": "La respuesta correcta es: <b>Normalización de los datos maestros internos y externos</b>. Esta normalización aporta consistencia en formato y semántica."
      },
      {
        "pregunta": "Para implantar un ERP, ¿qué estándar organiza las fases de estrategia, diseño, transición, operación y mejora continua?",
        "respuestas": [
          "CMMI",
          "ITIL",
          "Six Sigma",
          "Lean IT"
        ],
        "correcta": "ITIL",
        "explicacion": "La respuesta correcta es: <b>ITIL</b>. ITIL define esas cinco fases para la gestión de servicios en TI."
      },
      {
        "pregunta": "¿Qué modelo de madurez provee buenas prácticas para proveedores de servicios (CMMI-SVC)?",
        "respuestas": [
          "ITIL",
          "CMMI",
          "Six Sigma",
          "Lean IT"
        ],
        "correcta": "CMMI",
        "explicacion": "La respuesta correcta es: <b>CMMI</b>. CMMI-SVC se centra en la mejora de procesos de organizaciones proveedoras de servicios."
      },
      {
        "pregunta": "¿Cuál de estas metodologías busca eliminar despilfarros siguiendo cinco principios clave?",
        "respuestas": [
          "Six Sigma",
          "Lean IT",
          "ITIL",
          "CMMI"
        ],
        "correcta": "Lean IT",
        "explicacion": "La respuesta correcta es: <b>Lean IT</b>. Aplica principios de lean manufacturing para eliminar todo lo que no aporta valor."
      },
      {
        "pregunta": "¿Qué enfoque disciplinado de Six Sigma usa el ciclo DMAIC?",
        "respuestas": [
          "Diseñar sin defectos",
          "Definir, Medir, Analizar, Mejorar y Controlar",
          "Documentar, Migrar, Analizar, Implementar y Controlar",
          "Diseñar, Mapear, Alinear, Integrar y Consolidar"
        ],
        "correcta": "Definir, Medir, Analizar, Mejorar y Controlar",
        "explicacion": "La respuesta correcta es: <b>Definir, Medir, Analizar, Mejorar y Controlar</b>. DMAIC es el ciclo para mejorar procesos existentes."
      },
      {
        "pregunta": "En SCM, ¿qué proceso itera entre previsión y realidad para ajustar decisiones?",
        "respuestas": [
          "Gestión de existencias",
          "Planificación de la demanda",
          "Integración de datos",
          "Transformación de datos"
        ],
        "correcta": "Planificación de la demanda",
        "explicacion": "La respuesta correcta es: <b>Planificación de la demanda</b>. Compara iterativamente previsión y consumo real para mejorar la predicción."
      },
      {
        "pregunta": "En CRM, ¿qué métrica maximiza el valor acumulado de un cliente para la empresa?",
        "respuestas": [
          "Net Promoter Score",
          "Customer Lifetime Value (CLV)",
          "Churn Rate",
          "Service Level Agreement"
        ],
        "correcta": "Customer Lifetime Value (CLV)",
        "explicacion": "La respuesta correcta es: <b>Customer Lifetime Value (CLV)</b>. CLV mide la rentabilidad total esperada de un cliente a lo largo del tiempo."
      },
      {
        "pregunta": "¿Qué proceso de BI extrae, transforma y carga datos desde sistemas OLTP a un almacén?",
        "respuestas": [
          "OLAP",
          "ETL",
          "OLTP",
          "REST"
        ],
        "correcta": "ETL",
        "explicacion": "La respuesta correcta es: <b>ETL</b>. ETL (Extract, Transform, Load) prepara datos operativos para análisis en un data warehouse."
      },
      {
        "pregunta": "¿Cuál de estas no es una de las 7 V del Big Data?",
        "respuestas": [
          "Velocidad",
          "Variedad",
          "Visibilidad",
          "Veracidad"
        ],
        "correcta": "Visibilidad",
        "explicacion": "La respuesta correcta es: <b>Visibilidad</b>. Las 7 V son Volumen, Velocidad, Variedad, Veracidad, Validez, Volatilidad y Valor."
      },
      {
        "pregunta": "¿Qué tecnología almacena datos en clúster de máquinas con estrategia WORM?",
        "respuestas": [
          "HDFS",
          "MapReduce",
          "OLAP",
          "Data Lake"
        ],
        "correcta": "HDFS",
        "explicacion": "La respuesta correcta es: <b>HDFS</b>. Hadoop Distributed File System sigue el principio WORM: Write Once Read Many."
      },
      {
        "pregunta": "En MapReduce, ¿qué fase corresponde a combinar resultados parciales?",
        "respuestas": [
          "Map",
          "Reduce",
          "Shuffle",
          "Partition"
        ],
        "correcta": "Reduce",
        "explicacion": "La respuesta correcta es: <b>Reduce</b>. La fase Reduce agrega o sintetiza los pares clave‐valor generados en Map."
      },
      {
        "pregunta": "Según el tema, <b>siempre se accede a un microservicio a través de su API</b>. ¿Qué principio refuerza esto?",
        "respuestas": [
          "Transparencia",
          "Alineamiento",
          "Autonomía",
          "Resiliencia"
        ],
        "correcta": "Autonomía",
        "explicacion": "La respuesta correcta es: <b>Autonomía</b>. Cada microservicio es independiente y expone su funcionalidad exclusivamente vía API."
      },
      {
        "pregunta": "¿Qué característica de microservicios aísla los fallos de un servicio?",
        "respuestas": [
          "Automatización",
          "Transparencia",
          "Resiliencia",
          "Escalabilidad"
        ],
        "correcta": "Resiliencia",
        "explicacion": "La respuesta correcta es: <b>Resiliencia</b>. Un microservicio malfuncionante no debería afectar al resto del sistema."
      },
      {
        "pregunta": "¿Qué técnica de integración de datos ofrece una vista virtual sin mover datos?",
        "respuestas": [
          "Consolidación de datos",
          "Federación de datos",
          "Propagación de datos",
          "Virtualización de datos"
        ],
        "correcta": "Virtualización de datos",
        "explicacion": "La respuesta correcta es: <b>Virtualización de datos</b>. Proporciona una capa de abstracción que unifica accesos sin copiar ni mover datos."
      },
      {
        "pregunta": "¿Cuál de estas estrategias físicas de integración de datos usa el enfoque ELT?",
        "respuestas": [
          "Middleware",
          "Manual",
          "Almacén de datos",
          "Virtualización"
        ],
        "correcta": "Almacén de datos",
        "explicacion": "La respuesta correcta es: <b>Almacén de datos</b>. ELT (Extract, Load, Transform) carga primero y transforma después en el repositorio central."
      },
      {
        "pregunta": "¿Qué fase sigue a la extracción en el proceso ETL?",
        "respuestas": [
          "Carga",
          "Transformación",
          "Consolidación",
          "Federación"
        ],
        "correcta": "Transformación",
        "explicacion": "La respuesta correcta es: <b>Transformación</b>. ETL es Extract, Transform, Load: primero extraer, luego transformar y finalmente cargar."
      },
      {
        "pregunta": "¿Qué proceso mide la incertidumbre y credibilidad de los datos?",
        "respuestas": [
          "Veracidad",
          "Volatilidad",
          "Variedad",
          "Velocidad"
        ],
        "correcta": "Veracidad",
        "explicacion": "La respuesta correcta es: <b>Veracidad</b>. Este V del Big Data trata de la confianza en la exactitud y consistencia de los datos."
      },
      {
        "pregunta": "¿Qué área se beneficia directamente de la integración de datos para ofrecer una «única versión de la verdad»?",
        "respuestas": [
          "SCM",
          "MDM",
          "ERP",
          "BI"
        ],
        "correcta": "MDM",
        "explicacion": "La respuesta correcta es: <b>MDM</b> (Master Data Management). Garantiza que todos los sistemas compartan datos maestros coherentes."
      },
      {
        "pregunta": "¿Qué estrategia de integración requiere al usuario recoger y limpiar datos manualmente?",
        "respuestas": [
          "Manual",
          "Middleware",
          "Virtualización",
          "Data Lake"
        ],
        "correcta": "Manual",
        "explicacion": "La respuesta correcta es: <b>Manual</b>. Implica exportar, limpiar y cargar datos sin automatización ni middleware."
      },
      {
        "pregunta": "¿Qué técnica de integración «propaga» copias de datos entre dos ubicaciones?",
        "respuestas": [
          "Federación de datos",
          "Consolidación de datos",
          "Propagación de datos",
          "Almacenamiento de datos"
        ],
        "correcta": "Propagación de datos",
        "explicacion": "La respuesta correcta es: <b>Propagación de datos</b>. Consiste en replicar datos de forma síncrona o asíncrona entre orígenes y destinos."
      }
    ],
    "Tema 3": [
      {
        "pregunta": "¿Qué patrón actúa como traductor de formatos y protocolos entre dos sistemas?",
        "respuestas": [
          "Adaptador o Wrapper",
          "Pasarela (Gateway)",
          "Broker de Mensajes",
          "Base de Datos Compartida"
        ],
        "correcta": "Pasarela (Gateway)",
        "explicacion": "La respuesta correcta es: <b>Pasarela (Gateway)</b>. El gateway encapsula complejidades y convierte formatos o protocolos según el nivel (enlace, aplicación o servicios). Los adaptadores conectan APIs, el broker enruta mensajes y la base compartida unifica datos."
      },
      {
        "pregunta": "¿Cuál de estos patrones proporciona un <b>punto único de fallo</b> si no se replica?",
        "respuestas": [
          "Bus de Servicio Empresarial",
          "Gateway",
          "RPC",
          "Virtualización de datos"
        ],
        "correcta": "Gateway",
        "explicacion": "La respuesta correcta es: <b>Gateway</b>. Un gateway centralizado puede convertirse en punto único de fallo si no se implementan réplicas. Los demás patrones no dependen de un solo componente de conversión."
      },
      {
        "pregunta": "¿Qué componente se diseña ad-hoc para conectar sistemas incompatibles simulando la interfaz esperada?",
        "respuestas": [
          "Adaptador o Wrapper",
          "Pasarela",
          "ESB",
          "RPC"
        ],
        "correcta": "Adaptador o Wrapper",
        "explicacion": "La respuesta correcta es: <b>Adaptador o Wrapper</b>. Un wrapper expone la interfaz objetivo y traduce internamente a un sistema legacy sin modificarlo."
      },
      {
        "pregunta": "En nomenclatura de plataforma de mensajes, ¿cómo se llama al emisor de mensajes?",
        "respuestas": [
          "Consumidor",
          "Broker",
          "Publicador",
          "Canal"
        ],
        "correcta": "Publicador",
        "explicacion": "La respuesta correcta es: <b>Publicador</b>. El publicador (o productor) genera mensajes que el broker enruta a los consumidores."
      },
      {
        "pregunta": "¿Cómo se denomina la tubería lógica que agrupa mensajes en un broker?",
        "respuestas": [
          "Endpoint",
          "Canal/Topic",
          "Pipeline",
          "Queue"
        ],
        "correcta": "Canal/Topic",
        "explicacion": "La respuesta correcta es: <b>Canal/Topic</b>. El canal o topic es la infraestructura lógica donde se publican y suscriben mensajes."
      },
      {
        "pregunta": "¿Qué elemento abstrae la conexión y ofrece seguridad en un sistema de mensajería?",
        "respuestas": [
          "Publicador",
          "Endpoint",
          "Broker",
          "Adaptador"
        ],
        "correcta": "Endpoint",
        "explicacion": "La respuesta correcta es: <b>Endpoint</b>. Un endpoint encapsula URI/IP+puerto, autenticación y conectividad con el broker."
      },
      {
        "pregunta": "¿Cuál NO es un paso del checklist de integración con sistemas de mensajes?",
        "respuestas": [
          "Definir requisitos de latencia",
          "Instalar y configurar el broker",
          "Migrar datos históricos",
          "Desarrollar productores y consumidores"
        ],
        "correcta": "Migrar datos históricos",
        "explicacion": "La respuesta correcta es: <b>Migrar datos históricos</b>. Ese paso pertenece a integración de base de datos, no a integración por mensajería."
      },
      {
        "pregunta": "¿Qué característica mide cuántos mensajes procesa por segundo una plataforma de mensajería?",
        "respuestas": [
          "Latencia",
          "Throughput",
          "Persistencia",
          "Seguridad"
        ],
        "correcta": "Throughput",
        "explicacion": "La respuesta correcta es: <b>Throughput</b>. El throughput indica el rendimiento en mensajes/segundo, mientras que la latencia mide el retraso."
      },
      {
        "pregunta": "¿Qué fase de MapReduce agrega los pares clave-valor parciales para generar resultados?",
        "respuestas": [
          "Map",
          "Shuffle",
          "Reduce",
          "Partition"
        ],
        "correcta": "Reduce",
        "explicacion": "La respuesta correcta es: <b>Reduce</b>. La fase reduce sintetiza los resultados intermedios generados por la fase map."
      },
      {
        "pregunta": "¿Qué patrón expone procedimientos remotos como si fueran llamadas locales?",
        "respuestas": [
          "ESB",
          "RPC",
          "Gateway",
          "Wrapper"
        ],
        "correcta": "RPC",
        "explicacion": "La respuesta correcta es: <b>RPC</b>. El Remote Procedure Call abstrae las llamadas remotas de forma transparente al programador."
      },
      {
        "pregunta": "¿Cuál es la ventaja de la <b>Base de Datos Compartida</b> frente al broker de mensajes?",
        "respuestas": [
          "Desacoplamiento temporal",
          "Menor acoplamiento",
          "Centraliza datos en un único repositorio",
          "Facilita pipelines de eventos"
        ],
        "correcta": "Centraliza datos en un único repositorio",
        "explicacion": "La respuesta correcta es: <b>Centraliza datos en un único repositorio</b>. La base compartida unifica silos de datos, aunque aumenta el acoplamiento."
      },
      {
        "pregunta": "¿Qué patrón de integración suele implementarse sobre RPC o eventos y ofrece orquestación y transformación?",
        "respuestas": [
          "Bus de Servicio Empresarial (ESB)",
          "Gateway",
          "Broker de Mensajes",
          "Wrapper"
        ],
        "correcta": "Bus de Servicio Empresarial (ESB)",
        "explicacion": "La respuesta correcta es: <b>Bus de Servicio Empresarial (ESB)</b>. El ESB añade directorio, monitorización, orquestación y plugins sobre RPC o mensajería."
      },
      {
        "pregunta": "¿Qué técnica de integración unifica acceso a varias bases sin mover datos?",
        "respuestas": [
          "Consolidación de datos",
          "Propagación de datos",
          "Federación de datos",
          "Virtualización de datos"
        ],
        "correcta": "Virtualización de datos",
        "explicacion": "La respuesta correcta es: <b>Virtualización de datos</b>. Ofrece vistas unificadas sin replicar ni mover los datos físicos."
      },
      {
        "pregunta": "¿Qué estrategia implica replicar datos de forma síncrona o asíncrona entre repositorios?",
        "respuestas": [
          "Federación de datos",
          "Propagación de datos",
          "Bus de datos",
          "ETL"
        ],
        "correcta": "Propagación de datos",
        "explicacion": "La respuesta correcta es: <b>Propagación de datos</b>. La propagación copia y mantiene sincronizadas las réplicas entre origen y destino."
      },
      {
        "pregunta": "¿Cuál es el flujo correcto de un proceso ETL?",
        "respuestas": [
          "Transformar → Extraer → Cargar",
          "Extraer → Cargar → Transformar",
          "Extraer → Transformar → Cargar",
          "Cargar → Extraer → Transformar"
        ],
        "correcta": "Extraer → Transformar → Cargar",
        "explicacion": "La respuesta correcta es: <b>Extraer → Transformar → Cargar</b>. ETL sigue ese orden para preparar y almacenar datos en un data warehouse."
      },
      {
        "pregunta": "En arquitecturas de integración, ¿qué elemento se encarga de enrutar mensajes a múltiples suscriptores?",
        "respuestas": [
          "Gateway",
          "Adapter",
          "Broker de Mensajes",
          "Shared Database"
        ],
        "correcta": "Broker de Mensajes",
        "explicacion": "La respuesta correcta es: <b>Broker de Mensajes</b>. El broker recibe, enruta y puede enriquecer mensajes antes de entregarlos a los consumidores."
      },
      {
        "pregunta": "¿Qué KPI tecnológico mide la carga y uso del disco en un sistema?",
        "respuestas": [
          "Tiempo de CPU",
          "Almacenamiento",
          "Red",
          "Tiempo de respuesta"
        ],
        "correcta": "Almacenamiento",
        "explicacion": "La respuesta correcta es: <b>Almacenamiento</b>. Ese KPI indica espacio ocupado y rendimiento del subsistema de disco."
      },
      {
        "pregunta": "¿Qué impelemente un stub cliente/servidor generado automáticamente a partir de una interfaz?",
        "respuestas": [
          "RPC",
          "ESB",
          "Gateway",
          "Virtualización"
        ],
        "correcta": "RPC",
        "explicacion": "La respuesta correcta es: <b>RPC</b>. Los stubs permiten invocar métodos remotos como locales según la definición de la interfaz."
      },
      {
        "pregunta": "¿Qué tipo de base de datos está diseñada para grafo y relaciones complejas?",
        "respuestas": [
          "NoSQL clave-valor",
          "RDBMS",
          "NoSQL orientada a objetos",
          "NoSQL orientada a grafos"
        ],
        "correcta": "NoSQL orientada a grafos",
        "explicacion": "La respuesta correcta es: <b>NoSQL orientada a grafos</b>. Bases como Neo4j optimizan almacenamiento y consulta de nodos y aristas."
      },
      {
        "pregunta": "¿Cuál de estos NO es un servicio típico adicional de un broker de mensajes?",
        "respuestas": [
          "Persistencia",
          "Enrutamiento",
          "Orquestación de procesos",
          "Backup"
        ],
        "correcta": "Orquestación de procesos",
        "explicacion": "La respuesta correcta es: <b>Orquestación de procesos</b>. Esa función corresponde al ESB; el broker se centra en enrutamiento, persistencia y backup."
      },
      {
        "pregunta": "¿En qué escenario NO conviene usar un sistema de mensajería?",
        "respuestas": [
          "Integración asíncrona de eventos",
          "Cadenas de procesamiento (pipelines)",
          "Escenarios simples y síncronos",
          "Sistemas autónomos y desacoplados"
        ],
        "correcta": "Escenarios simples y síncronos",
        "explicacion": "La respuesta correcta es: <b>Escenarios simples y síncronos</b>. Para casos sencillos y de comunicación inmediata, es más adecuado RPC."
      },
      {
        "pregunta": "¿Qué característica de un broker mejora la tolerancia a fallos y alta disponibilidad?",
        "respuestas": [
          "Autenticación",
          "Clustering y replicación",
          "Pipeline de entrega",
          "Endpoint único"
        ],
        "correcta": "Clustering y replicación",
        "explicacion": "La respuesta correcta es: <b>Clustering y replicación</b>. Permite distribuir tópicos y particiones entre múltiples brokers, evitando puntos únicos de fallo."
      },
      {
        "pregunta": "¿Qué patrón permite integrar la UI de varios sistemas en un mismo portal?",
        "respuestas": [
          "Shared Database",
          "Interfaz de usuario compartida",
          "ESB",
          "Gateway"
        ],
        "correcta": "Interfaz de usuario compartida",
        "explicacion": "La respuesta correcta es: <b>Interfaz de usuario compartida</b>. Combina servicios en una sola UI y suele incluir Single Sign-On para consistencia."
      },
      {
        "pregunta": "¿Qué tecnología de serialización es la más eficiente según el tema?",
        "respuestas": [
          "JSON",
          "XML",
          "Protobuf (binario)",
          "Texto plano"
        ],
        "correcta": "Protobuf (binario)",
        "explicacion": "La respuesta correcta es: <b>Protobuf (binario)</b>. La serialización binaria es más compacta y eficiente en prestaciones que JSON o texto plano."
      },
      {
        "pregunta": "¿Qué nivel de integración requiere compartir directamente el modelo de datos subyacente?",
        "respuestas": [
          "Interfaz de aplicación",
          "Base de Datos Compartida",
          "RPC",
          "Adaptador"
        ],
        "correcta": "Base de Datos Compartida",
        "explicacion": "La respuesta correcta es: <b>Base de Datos Compartida</b>. Implica un acoplamiento fuerte al operar sobre el mismo repositorio de datos."
      }
    ],
    "Tema 4": [
      {
        "pregunta": "¿Qué característica define una <b>arquitectura empresarial dinámica</b>?",
        "respuestas": [
          "Es inmutable y perdura sin cambios",
          "Se actualiza continuamente según el desarrollo real",
          "Se crea una sola vez y no se revisa",
          "Depende exclusivamente de frameworks tradicionales"
        ],
        "correcta": "Se actualiza continuamente según el desarrollo real",
        "explicacion": "La respuesta correcta es: <b>Se actualiza continuamente según el desarrollo real</b>. Una arquitectura dinámica refleja los cambios de requisitos, tecnologías y calendarios durante el desarrollo, a diferencia de los modelos estáticos tradicionales."
      },
      {
        "pregunta": "En el <b>marco tradicional de arquitecturas</b>, ¿cuál era el punto de partida?",
        "respuestas": [
          "Un prototipo de alto nivel",
          "Una declaración de requisitos muy abstracta",
          "Un modelo 'as-is' automático",
          "Una serie de instantáneas de ciberseguridad"
        ],
        "correcta": "Una declaración de requisitos muy abstracta",
        "explicacion": "La respuesta correcta es: <b>Una declaración de requisitos muy abstracta</b>. Estos marcos descendentes partían de objetivos de negocio de alto nivel y los descomponían recursivamente hasta detalles técnicos."
      },
      {
        "pregunta": "¿Qué tipo de arquitectura <b>no especifica detalles de implementación</b>?",
        "respuestas": [
          "Arquitectura de solución",
          "Arquitectura de referencia",
          "Arquitectura as-is",
          "Arquitectura to-be"
        ],
        "correcta": "Arquitectura de referencia",
        "explicacion": "La respuesta correcta es: <b>Arquitectura de referencia</b>. Este modelo guía y limita definiciones genéricas sin entrar en especificaciones de interfaz o estructura interna."
      },
      {
        "pregunta": "¿Cuál es el propósito principal de una <b>arquitectura de solución</b>?",
        "respuestas": [
          "Mostrar un estado futuro deseado",
          "Documentar solo procesos de negocio",
          "Especificar cómo construir un sistema detallado",
          "Definir vocabularios controlados"
        ],
        "correcta": "Especificar cómo construir un sistema detallado",
        "explicacion": "La respuesta correcta es: <b>Especificar cómo construir un sistema detallado</b>. La arquitectura de solución desciende de la referencia para dar instrucciones de implementación precisas."
      },
      {
        "pregunta": "Una arquitectura <b>as-is</b> se caracteriza por ser:",
        "respuestas": [
          "Un plan futuro de transformación",
          "Un producto efímero que documenta el estado actual",
          "Un modelo de alto nivel inmutable",
          "Un estándar de frameworks"
        ],
        "correcta": "Un producto efímero que documenta el estado actual",
        "explicacion": "La respuesta correcta es: <b>Un producto efímero que documenta el estado actual</b>. Las arquitecturas as-is capturan instantáneas de sistemas reales y suelen quedar obsoletas rápidamente."
      },
      {
        "pregunta": "¿Qué asegura que un modelo de <b>arquitectura to-be</b> siga siendo útil?",
        "respuestas": [
          "No actualizarse nunca",
          "Tener vida útil ilimitada",
          "Ser un artefacto vivo actualizado con cambios empresariales",
          "Publicarse solo al inicio del proyecto"
        ],
        "correcta": "Ser un artefacto vivo actualizado con cambios empresariales",
        "explicacion": "La respuesta correcta es: <b>Ser un artefacto vivo actualizado con cambios empresariales</b>. El to-be define el estado futuro y debe revisarse conforme evolucionan sistemas y objetivos."
      },
      {
        "pregunta": "¿Por qué es necesario <b>acotar el detalle</b> en la arquitectura?",
        "respuestas": [
          "Para incluir todos los detalles técnicos posibles",
          "Para delimitar el alcance y el nivel de detalle que se modela",
          "Para convertir la arquitectura en un producto duradero",
          "Para evitar el uso de vocabularios controlados"
        ],
        "correcta": "Para delimitar el alcance y el nivel de detalle que se modela",
        "explicacion": "La respuesta correcta es: <b>Para delimitar el alcance y el nivel de detalle que se modela</b>. Acotar la arquitectura limita el trabajo a un tamaño manejable y define dónde es aplicable."
      },
      {
        "pregunta": "¿Qué tipo de modelo formal permite definir restricciones y comprobarlas automáticamente?",
        "respuestas": [
          "Diagrama de clases UML",
          "Modelo BPMN",
          "Modelo paramétrico de SysML",
          "Ontología OWL"
        ],
        "correcta": "Modelo paramétrico de SysML",
        "explicacion": "La respuesta correcta es: <b>Modelo paramétrico de SysML</b>. Este tipo de diagrama permite especificar restricciones y realizar análisis automatizados de cumplimiento."
      },
      {
        "pregunta": "¿Cuál de estos <b>lenguajes de modelado</b> está especializado en flujos de trabajo empresariales?",
        "respuestas": [
          "UML",
          "SysML",
          "BPMN",
          "OWL"
        ],
        "correcta": "BPMN",
        "explicacion": "La respuesta correcta es: <b>BPMN</b>. Business Process Model and Notation está diseñado exclusivamente para modelar procesos y comportamientos de negocio."
      },
      {
        "pregunta": "¿Qué lenguaje se basa en clases, propiedades y relaciones para describir datos?",
        "respuestas": [
          "UML",
          "SysML",
          "BPMN",
          "OWL"
        ],
        "correcta": "OWL",
        "explicacion": "La respuesta correcta es: <b>OWL</b>. Web Ontology Language permite definir ontologías con semántica rica de objetos, útil para modelar datos empresariales."
      },
      {
        "pregunta": "¿Cuál es la fortaleza principal de <b>UML</b> en arquitectura empresarial?",
        "respuestas": [
          "Modelar procesos con decisiones complejas",
          "Modelar actores y sistemas de software",
          "Verificar restricciones paramétricas",
          "Generar ontologías de datos"
        ],
        "correcta": "Modelar actores y sistemas de software",
        "explicacion": "La respuesta correcta es: <b>Modelar actores y sistemas de software</b>. UML es ideal para clases, interfaces y entornos de software, pero menos preciso en procesos."
      },
      {
        "pregunta": "¿Qué beneficio aporta la <b>herramienta de monitorización</b> en arquitecturas as-is?",
        "respuestas": [
          "Generar automáticamente modelos to-be",
          "Crear instantáneas precisas del sistema en ejecución",
          "Definir vocabularios controlados",
          "Sustituir TOGAF"
        ],
        "correcta": "Crear instantáneas precisas del sistema en ejecución",
        "explicacion": "La respuesta correcta es: <b>Crear instantáneas precisas del sistema en ejecución</b>. La monitorización de ciberseguridad captura configuraciones y comportamientos emergentes para el as-is."
      },
      {
        "pregunta": "Al <b>dimensionar el modelo</b>, ¿por qué es mejor dividirlo en módulos?",
        "respuestas": [
          "Para obligar a usar un único lenguaje",
          "Para crear un modelo único y global",
          "Para facilitar el trabajo colaborativo y su mantenimiento",
          "Para eliminar la necesidad de herramientas"
        ],
        "correcta": "Para facilitar el trabajo colaborativo y su mantenimiento",
        "explicacion": "La respuesta correcta es: <b>Para facilitar el trabajo colaborativo y su mantenimiento</b>. Múltiples modelos más pequeños alivian problemas de edición simultánea y organizan información."
      },
      {
        "pregunta": "¿Cuál de estos marcos NO es un <b>framework de arquitectura empresarial</b> mencionado?",
        "respuestas": [
          "TOGAF",
          "Zachman",
          "FEAF",
          "ITIL"
        ],
        "correcta": "ITIL",
        "explicacion": "La respuesta correcta es: <b>ITIL</b>. ITIL es un marco de gestión de servicios TI, no un framework de arquitectura empresarial como TOGAF, Zachman o FEAF."
      },
      {
        "pregunta": "En el contexto de modelado, ¿qué significa vincular modelos?",
        "respuestas": [
          "Usar el mismo diagrama para todo",
          "Relacionar entidades de diferentes modelos para analizar impactos",
          "Convertir BPMN en UML automáticamente",
          "Evitar la creación de perfiles UML"
        ],
        "correcta": "Relacionar entidades de diferentes modelos para analizar impactos",
        "explicacion": "La respuesta correcta es: <b>Relacionar entidades de diferentes modelos para analizar impactos</b>. El enlace entre modelos permite evaluar efectos de cambios en la arquitectura."
      },
      {
        "pregunta": "¿Qué rol cumple un <b>vocabulario controlado</b> en arquitectura de referencia?",
        "respuestas": [
          "Definir interfaces detalladas",
          "Asegurar consistencia en términos usados por los equipos",
          "Especificar detalles internos de componentes",
          "Mostrar el estado actual 'as-is'"
        ],
        "correcta": "Asegurar consistencia en términos usados por los equipos",
        "explicacion": "La respuesta correcta es: <b>Asegurar consistencia en términos usados por los equipos</b>. Los vocabularios controlados estandarizan la descripción de funciones, interfaces y datos."
      },
      {
        "pregunta": "¿Cuál es la diferencia clave entre <b>arquitectura as-is</b> y <b>to-be</b> en tiempo de vida útil?",
        "respuestas": [
          "As-is dura más que to-be",
          "To-be dura más que as-is",
          "Ambas son efímeras",
          "As-is nunca se actualiza"
        ],
        "correcta": "To-be dura más que as-is",
        "explicacion": "La respuesta correcta es: <b>To-be dura más que as-is</b>. Una arquitectura to-be (plan futuro) tiene vida útil más larga; as-is es transitoria y cambia con cada actualización real."
      },
      {
        "pregunta": "¿Qué documento recomienda vincular modelos según el <b>framework TOGAF</b>?",
        "respuestas": [
          "Zachman Framework",
          "FEAF",
          "ADM de TOGAF",
          "CMMI-SVC"
        ],
        "correcta": "ADM de TOGAF",
        "explicacion": "La respuesta correcta es: <b>ADM de TOGAF</b>. El Architecture Development Method de TOGAF define fases y relaciona modelos para evolucionar la arquitectura empresarial."
      },
      {
        "pregunta": "¿Qué herramienta es crítica para crear modelos gráficos de UML y SysML?",
        "respuestas": [
          "Editor de texto plano",
          "Suite ofimática",
          "Herramienta de modelado especializada",
          "Navegador web"
        ],
        "correcta": "Herramienta de modelado especializada",
        "explicacion": "La respuesta correcta es: <b>Herramienta de modelado especializada</b>. Los lenguajes gráficos como UML y SysML requieren herramientas dedicadas para diagramas, perfiles y análisis."
      },
      {
        "pregunta": "¿Por qué <b>no</b> tiene sentido crear una arquitectura muy detallada sin reflejar el estado real?",
        "respuestas": [
          "Porque es demasiado barata",
          "Porque se vuelve inútil como herramienta de gestión",
          "Porque los desarrolladores la actualizarán automáticamente",
          "Porque no existen frameworks para ello"
        ],
        "correcta": "Porque se vuelve inútil como herramienta de gestión",
        "explicacion": "La respuesta correcta es: <b>Porque se vuelve inútil como herramienta de gestión</b>. Una arquitectura detallada y desactualizada no sirve para la toma de decisiones operativas."
      },
      {
        "pregunta": "¿Qué actividad automatizada ayuda a generar modelos <b>as-is</b> precisos?",
        "respuestas": [
          "Pruebas unitarias",
          "Monitorización de sistemas",
          "Reuniones de diseño",
          "Capacitación de usuarios"
        ],
        "correcta": "Monitorización de sistemas",
        "explicacion": "La respuesta correcta es: <b>Monitorización de sistemas</b>. Los programas de profiling capturan configuraciones y comportamientos en tiempo real para construir el as-is."
      },
      {
        "pregunta": "En modelado empresarial, ¿qué beneficio aporta usar <b>ontologías OWL</b>?",
        "respuestas": [
          "Ejecutar código en tiempo de ejecución",
          "Definir semántica y vocabulario compartido",
          "Reducir la velocidad de procesos",
          "Reemplazar BPMN"
        ],
        "correcta": "Definir semántica y vocabulario compartido",
        "explicacion": "La respuesta correcta es: <b>Definir semántica y vocabulario compartido</b>. OWL vincula elementos de modelos con términos de ontologías para un entendimiento consistente."
      }
    ],
    "Tema 5": [
      {
        "pregunta": "¿Cómo define la planificación de la capacidad el documento base?",
        "respuestas": [
          "Como la compra de hardware sin previsión",
          "Como el proceso de identificar la configuración necesaria para cargas futuras",
          "Como el monitoreo de la red en tiempo real",
          "Como la instalación de software de gestión"
        ],
        "correcta": "Como el proceso de identificar la configuración necesaria para cargas futuras",
        "explicacion": "La respuesta correcta es: <b>Como el proceso de identificar la configuración necesaria para cargas futuras</b>. La planificación de la capacidad busca prever la carga y dimensionar recursos. Monitorear o instalar software son actividades relacionadas, pero no definen la planificación."
      },
      {
        "pregunta": "¿Cuál es el primer paso en el proceso de planificación de la capacidad?",
        "respuestas": [
          "Seleccionar la alternativa más barata",
          "Monitorizar la utilización del sistema",
          "Dotar de instrumentación al sistema",
          "Caracterizar la carga"
        ],
        "correcta": "Dotar de instrumentación al sistema",
        "explicacion": "La respuesta correcta es: <b>Dotar de instrumentación al sistema</b>. Antes de medir o caracterizar, hay que instalar herramientas de monitorización. Las demás acciones vienen después."
      },
      {
        "pregunta": "¿Qué se entiende por \"capacidad adecuada\"?",
        "respuestas": [
          "La máxima CPU que puede colocarse",
          "El rendimiento que cumple SLA, arquitectura y coste",
          "Solo los límites económicos de compra",
          "La cantidad de memoria disponible"
        ],
        "correcta": "El rendimiento que cumple SLA, arquitectura y coste",
        "explicacion": "La respuesta correcta es: <b>El rendimiento que cumple SLA, arquitectura y coste</b>. La capacidad adecuada equilibra acuerdos de nivel de servicio, diseño de sistema y restricciones económicas."
      },
      {
        "pregunta": "¿Cuál de estos NO forma parte de los factores de capacidad adecuada?",
        "respuestas": [
          "SLA acordados",
          "Arquitectura del sistema",
          "Limitaciones económicas",
          "Almacenamiento en caché local"
        ],
        "correcta": "Almacenamiento en caché local",
        "explicacion": "La respuesta correcta es: <b>Almacenamiento en caché local</b>. Los factores son SLA, arquitectura y costes; la caché puede mejorar rendimiento, pero no es un factor de planificación."
      },
      {
        "pregunta": "En SLA, ¿qué mide la intensidad de los usuarios finales?",
        "respuestas": [
          "El número de transacciones por segundo",
          "La relación entre tiempo de respuesta y reflexión",
          "El ancho de banda de la red",
          "La capacidad del disco"
        ],
        "correcta": "La relación entre tiempo de respuesta y reflexión",
        "explicacion": "La respuesta correcta es: <b>La relación entre tiempo de respuesta y reflexión</b>. Esa métrica refleja la percepción del usuario. Las demás opciones son métricas técnicas."
      },
      {
        "pregunta": "¿Qué nivel de planificación caracteriza un sistema sin programa formal de capacidad?",
        "respuestas": [
          "Nivel 0",
          "Nivel 2",
          "Nivel 4",
          "Nivel 1"
        ],
        "correcta": "Nivel 0",
        "explicacion": "La respuesta correcta es: <b>Nivel 0</b>. En este nivel no existe programa formal; los demás niveles tienen medidas o automatización."
      },
      {
        "pregunta": "¿En qué nivel existe un sistema automático de análisis y predicción de carga?",
        "respuestas": [
          "Nivel 1",
          "Nivel 3",
          "Nivel 5",
          "Nivel 2"
        ],
        "correcta": "Nivel 3",
        "explicacion": "La respuesta correcta es: <b>Nivel 3</b>. El nivel 3 introduce análisis y predicción automáticos; niveles superiores añaden predicciones de SLA y criterios de negocio."
      },
      {
        "pregunta": "¿Qué distingue al nivel 5 de gestión y planificación?",
        "respuestas": [
          "Solo predice utilización",
          "Incluye criterios de negocio para predecir niveles de servicio",
          "No utiliza datos históricos",
          "Requiere intervención manual"
        ],
        "correcta": "Incluye criterios de negocio para predecir niveles de servicio",
        "explicacion": "La respuesta correcta es: <b>Incluye criterios de negocio para predecir niveles de servicio</b>. El nivel 5 añade modelo de negocio; las demás opciones no reflejan este nivel."
      },
      {
        "pregunta": "¿Cuál es un método cuantitativo de predicción?",
        "respuestas": [
          "Opinión de expertos",
          "Analogías históricas",
          "Regresión lineal",
          "Debates de equipo"
        ],
        "correcta": "Regresión lineal",
        "explicacion": "La respuesta correcta es: <b>Regresión lineal</b>. Los métodos cuantitativos usan datos históricos y estadísticas; las demás son cualitativas."
      },
      {
        "pregunta": "¿Qué técnica usa la media de las observaciones anteriores para predecir el próximo valor?",
        "respuestas": [
          "Suavizado exponencial",
          "Regresión múltiple",
          "Media móvil",
          "Modelado paramétrico"
        ],
        "correcta": "Media móvil",
        "explicacion": "La respuesta correcta es: <b>Media móvil</b>. La media móvil simple promedia n últimos valores; el suavizado exponencial pondera con coeficiente α."
      },
      {
        "pregunta": "En suavizado exponencial, ¿qué parámetro ajusta el peso de la observación más reciente?",
        "respuestas": [
          "β (beta)",
          "γ (gamma)",
          "n",
          "α (alfa)"
        ],
        "correcta": "α (alfa)",
        "explicacion": "La respuesta correcta es: <b>α (alfa)</b>. El suavizado exponencial usa α para ponderar observaciones recientes. n aplica a medias móviles y los otros símbolos son irrelevantes aquí."
      },
      {
        "pregunta": "¿Para qué tipo de serie temporal es adecuada la regresión lineal simple?",
        "respuestas": [
          "Datos con estacionalidad fuerte",
          "Datos no estacionales con tendencia lineal",
          "Series que fluctúan al azar sin tendencia",
          "Series de eventos discretos"
        ],
        "correcta": "Datos no estacionales con tendencia lineal",
        "explicacion": "La respuesta correcta es: <b>Datos no estacionales con tendencia lineal</b>. La regresión lineal asume tendencia constante; no maneja bien estacionalidades."
      },
      {
        "pregunta": "¿Qué se hace en la validación de la técnica de predicción?",
        "respuestas": [
          "Ignorar datos pasados",
          "Comparar predicciones con valores reales recientes",
          "Usar siempre todos los datos históricos para ajustar el modelo",
          "Eliminar sesgos manualmente"
        ],
        "correcta": "Comparar predicciones con valores reales recientes",
        "explicacion": "La respuesta correcta es: <b>Comparar predicciones con valores reales recientes</b>. La validación consiste en reservar datos para evaluar el error del modelo."
      },
      {
        "pregunta": "¿Qué unidad natural de predicción (NFU) se menciona como ejemplo?",
        "respuestas": [
          "Número de transacciones por segundo",
          "Número de empleados del sistema de nóminas",
          "Tiempo de CPU en milisegundos",
          "Tamaño de la base de datos"
        ],
        "correcta": "Número de empleados del sistema de nóminas",
        "explicacion": "La respuesta correcta es: <b>Número de empleados del sistema de nóminas</b>. Esa NFU refleja directamente la carga generada (una transacción por empleado)."
      },
      {
        "pregunta": "¿Qué beneficio aporta una NFU bien definida?",
        "respuestas": [
          "Reduce la necesidad de hardware",
          "Traduce variables de negocio en recursos de sistema",
          "Elimina la planificación de costes",
          "Aumenta la estacionalidad"
        ],
        "correcta": "Traduce variables de negocio en recursos de sistema",
        "explicacion": "La respuesta correcta es: <b>Traduce variables de negocio en recursos de sistema</b>. Las NFU convierten métricas de negocio en demanda de recursos."
      },
      {
        "pregunta": "¿Qué caracteriza la capacidad bajo demanda?",
        "respuestas": [
          "Asignación estática de recursos",
          "Automatizar ajustes de capacidad según carga en tiempo real",
          "Solo se usa en entornos on-premise",
          "Requiere supervisión manual continua"
        ],
        "correcta": "Automatizar ajustes de capacidad según carga en tiempo real",
        "explicacion": "La respuesta correcta es: <b>Automatizar ajustes de capacidad según carga en tiempo real</b>. La capacidad bajo demanda reconfigura recursos automáticamente sin intervención manual."
      },
      {
        "pregunta": "¿Cuál de estos NO es un beneficio de la capacidad bajo demanda?",
        "respuestas": [
          "Ahorro de personal",
          "Gestión de recursos compartidos",
          "Pago por uso",
          "Eliminación total de SLA"
        ],
        "correcta": "Eliminación total de SLA",
        "explicacion": "La respuesta correcta es: <b>Eliminación total de SLA</b>. La capacidad bajo demanda mantiene SLA, no los elimina; los demás son beneficios reales."
      },
      {
        "pregunta": "¿Qué aspecto económico considera el coste total de propiedad?",
        "respuestas": [
          "Sólo precio de compra",
          "Costes de arranque y de operación",
          "Exclusivamente el coste energético",
          "Coste de licencias perpetuas"
        ],
        "correcta": "Costes de arranque y de operación",
        "explicacion": "La respuesta correcta es: <b>Costes de arranque y de operación</b>. El TCO incluye adquisición, instalación y explotación continua."
      },
      {
        "pregunta": "¿En características de herramientas de planificación, cuál NO es relevante?",
        "respuestas": [
          "Tiempo de predicción deseado",
          "Sofisticación de la herramienta",
          "Marca del teclado del administrador",
          "Integración con otras herramientas"
        ],
        "correcta": "Marca del teclado del administrador",
        "explicacion": "La respuesta correcta es: <b>Marca del teclado del administrador</b>. Los demás factores afectan directamente a la planificación."
      },
      {
        "pregunta": "¿Qué patrón de carga histórica se muestra si la media y varianza son constantes?",
        "respuestas": [
          "Estacionalidad fuerte",
          "Tendencia lineal",
          "Estacionaria",
          "Crecimiento exponencial"
        ],
        "correcta": "Estacionaria",
        "explicacion": "La respuesta correcta es: <b>Estacionaria</b>. Una serie estacionaria no presenta cambios sistemáticos en media ni varianza."
      },
      {
        "pregunta": "Al predecir con media móvil, ¿qué rango de n se aconseja probar?",
        "respuestas": [
          "n entre 1 y 2",
          "n entre 3 y 10",
          "n entre 10 y 20",
          "n fijo en 5 siempre"
        ],
        "correcta": "n entre 3 y 10",
        "explicacion": "La respuesta correcta es: <b>n entre 3 y 10</b>. Ese rango suele minimizar el error cuadrático medio en series cortas."
      },
      {
        "pregunta": "¿Por qué no usar regresión lineal para datos estacionales?",
        "respuestas": [
          "Porque requiere α en lugar de β",
          "Porque asume tendencia lineal sin ciclos repetitivos",
          "Porque no funciona con más de dos variables",
          "Porque necesita modelado paramétrico"
        ],
        "correcta": "Porque asume tendencia lineal sin ciclos repetitivos",
        "explicacion": "La respuesta correcta es: <b>Porque asume tendencia lineal sin ciclos repetitivos</b>. La regresión simple no capta patrones estacionales."
      }
    ],
    "Tema 6": [
      {
        "pregunta": "¿Cuál es la fase inicial del ciclo DevOps según el material?",
        "respuestas": [
          "Build",
          "Planificación",
          "Code",
          "Monitorización"
        ],
        "correcta": "Planificación",
        "explicacion": "La respuesta correcta es: <b>Planificación</b>. Es la primera fase en la que se identifican mejoras, requisitos y versiones a desarrollar."
      },
      {
        "pregunta": "¿Qué fase corresponde a escribir el código fuente y gestionar su versión?",
        "respuestas": [
          "Code",
          "Release",
          "Deploy",
          "Operate"
        ],
        "correcta": "Code",
        "explicacion": "La respuesta correcta es: <b>Code</b>. En esta fase se desarrolla en editores, se usa git para control de versiones y se aplican guías de estilo."
      },
      {
        "pregunta": "¿En qué fase se construyen artefactos (por ejemplo .jar o .deb)?",
        "respuestas": [
          "Test",
          "Building",
          "Operate",
          "Planificación"
        ],
        "correcta": "Building",
        "explicacion": "La respuesta correcta es: <b>Building</b>. Aquí las herramientas automatizadas compilan, empaquetan y gestionan dependencias para generar los ejecutables."
      },
      {
        "pregunta": "¿Cuál es el propósito principal de la fase <b>Test</b>?",
        "respuestas": [
          "Ejecutar el código en producción",
          "Realizar pruebas automatizadas para detectar bugs",
          "Monitorear logs de producción",
          "Crear tickets de usuario"
        ],
        "correcta": "Realizar pruebas automatizadas para detectar bugs",
        "explicacion": "La respuesta correcta es: <b>Realizar pruebas automatizadas para detectar bugs</b>. Se incluyen unitarias, integración, funcionales, rendimiento y humo."
      },
      {
        "pregunta": "¿Qué fase genera el artefacto final que se almacenará en un repositorio?",
        "respuestas": [
          "Release",
          "Deploy",
          "Build",
          "Planificación"
        ],
        "correcta": "Release",
        "explicacion": "La respuesta correcta es: <b>Release</b>. En esta fase se empacan versiones y se suben a repositorios de paquetes para distribución."
      },
      {
        "pregunta": "¿En qué fase se lleva a cabo la instalación automática en entornos de destino?",
        "respuestas": [
          "Operate",
          "Deploy",
          "Test",
          "Planificación"
        ],
        "correcta": "Deploy",
        "explicacion": "La respuesta correcta es: <b>Deploy</b>. Aquí se distribuyen y actualizan las releases en servidores on-premise, móviles o nube, con rollback si hace falta."
      },
      {
        "pregunta": "¿Qué fase garantiza que el software en producción funcione correctamente mediante KPIs y logs?",
        "respuestas": [
          "Monitor",
          "Planificación",
          "Build",
          "Release"
        ],
        "correcta": "Monitor",
        "explicacion": "La respuesta correcta es: <b>Monitor</b>. Incluye dashboards, alertas, trazas y métricas para vigilar la salud de las aplicaciones."
      },
      {
        "pregunta": "¿Qué fase cierra el ciclo DevOps recogiendo aprendizajes y ajustando el plan?",
        "respuestas": [
          "Feedback & Plan",
          "Code",
          "Deploy",
          "Operate"
        ],
        "correcta": "Feedback & Plan",
        "explicacion": "La respuesta correcta es: <b>Feedback & Plan</b>. Se analizan resultados, retroalimentación del usuario y se ajusta la planificación."
      },
      {
        "pregunta": "¿Cuál es la herramienta típica para integración continua mencionada?",
        "respuestas": [
          "Jenkins",
          "Docker",
          "Terraform",
          "Grafana"
        ],
        "correcta": "Jenkins",
        "explicacion": "La respuesta correcta es: <b>Jenkins</b>. Es un servidor de CI clásico usado para orquestar compilaciones y pruebas automáticas."
      },
      {
        "pregunta": "¿Qué tecnología ilustra el concepto de <b>Infrastructure as Code</b>?",
        "respuestas": [
          "Grafana",
          "Terraform",
          "Jenkins",
          "Fluent Bit"
        ],
        "correcta": "Terraform",
        "explicacion": "La respuesta correcta es: <b>Terraform</b>. Permite definir proveedores, recursos y provisión de infraestructuras en código declarativo."
      },
      {
        "pregunta": "¿Cuál es la imagen base recomendada para un contenedor Python ligero?",
        "respuestas": [
          "python:3.9-slim-buster",
          "ubuntu:latest",
          "node:14-alpine",
          "openjdk:8-jdk"
        ],
        "correcta": "python:3.9-slim-buster",
        "explicacion": "La respuesta correcta es: <b>python:3.9-slim-buster</b>. Es una imagen oficial ligera adecuada para aplicaciones Python en contenedores."
      },
      {
        "pregunta": "¿Qué protocolo de control de versiones se menciona?",
        "respuestas": [
          "SVN",
          "Mercurial",
          "Git",
          "CVS"
        ],
        "correcta": "Git",
        "explicacion": "La respuesta correcta es: <b>Git</b>. Es el sistema de versión distribuido usado para gestionar repositorios de código."
      },
      {
        "pregunta": "¿Cuál es una práctica de cultura DevOps clave?",
        "respuestas": [
          "Separación estricta entre desarrollo y operaciones",
          "Transparencia, colaboración y comunicación",
          "Solo reuniones mensuales",
          "Solo documentación en papel"
        ],
        "correcta": "Transparencia, colaboración y comunicación",
        "explicacion": "La respuesta correcta es: <b>Transparencia, colaboración y comunicación</b>. DevOps promueve equipos multidisciplinares y autonomía compartida."
      },
      {
        "pregunta": "¿Qué métrica relacionada con la entrega continua mide la frecuencia de despliegue?",
        "respuestas": [
          "MTTR",
          "Deployment Frequency",
          "CPU Usage",
          "Memory Utilization"
        ],
        "correcta": "Deployment Frequency",
        "explicacion": "La respuesta correcta es: <b>Deployment Frequency</b>. Mide cuántas veces se despliega código con éxito en producción."
      },
      {
        "pregunta": "¿Qué herramienta se usa para orquestar pipelines declarativos en Jenkins?",
        "respuestas": [
          "Makefile",
          "Jenkinsfile",
          "Dockerfile",
          "Terraform script"
        ],
        "correcta": "Jenkinsfile",
        "explicacion": "La respuesta correcta es: <b>Jenkinsfile</b>. Define etapas y agentes del pipeline como código dentro del repositorio."
      },
      {
        "pregunta": "¿Qué componente se ejecuta en cada contenedor para exponer una aplicación Flask?",
        "respuestas": [
          "gunicorn",
          "flask run",
          "npm start",
          "java -jar"
        ],
        "correcta": "flask run",
        "explicacion": "La respuesta correcta es: <b>flask run</b>. En el Dockerfile se usa CMD[\"flask\",\"run\"] para iniciar el servidor de desarrollo."
      },
      {
        "pregunta": "¿Qué práctica automatizada reduce el error humano al aprovisionar infraestructura?",
        "respuestas": [
          "Manual SSH",
          "Terraform",
          "FTP",
          "scp"
        ],
        "correcta": "Terraform",
        "explicacion": "La respuesta correcta es: <b>Terraform</b>. Automatiza el despliegue de recursos en la nube como código."
      },
      {
        "pregunta": "¿Qué fase del pipeline usa comandos como `docker build` y `docker push`?",
        "respuestas": [
          "Deploy",
          "Test",
          "Build",
          "Planificación"
        ],
        "correcta": "Build",
        "explicacion": "La respuesta correcta es: <b>Build</b>. Se ejecutan comandos Docker para crear imágenes y publicarlas en un registry."
      },
      {
        "pregunta": "¿Qué herramienta de monitorización de logs conecta a Fluent Bit con dashboards?",
        "respuestas": [
          "Prometheus",
          "Grafana",
          "ELK Stack",
          "Nagios"
        ],
        "correcta": "Grafana",
        "explicacion": "La respuesta correcta es: <b>Grafana</b>. Se usa para visualizar métricas y logs recogidos por Fluent Bit o Prometheus."
      },
      {
        "pregunta": "¿Qué práctica DevOps fomenta la entrega de software en pequeños incrementos frecuentes?",
        "respuestas": [
          "Waterfall",
          "Continuous Delivery",
          "Big Bang Release",
          "Modelo en V"
        ],
        "correcta": "Continuous Delivery",
        "explicacion": "La respuesta correcta es: <b>Continuous Delivery</b>. Permite desplegar cambios en producción de forma rápida y segura."
      },
      {
        "pregunta": "¿Qué definición describe mejor el concepto <b>Pipeline</b>?",
        "respuestas": [
          "Una sola línea de comandos",
          "La secuencia automatizada de fases DevOps",
          "Un repositorio Git",
          "Un servidor web"
        ],
        "correcta": "La secuencia automatizada de fases DevOps",
        "explicacion": "La respuesta correcta es: <b>La secuencia automatizada de fases DevOps</b>. Un pipeline configura las etapas de Build, Test y Deploy en flujo continuo."
      },
      {
        "pregunta": "¿Qué beneficio reportan los Practitioners de DevOps según Atlassian?",
        "respuestas": [
          "Mayor rotación de empleados",
          "Aprender nuevas habilidades y recibir aumento salarial",
          "Menor frecuencia de despliegue",
          "Mayor burocracia"
        ],
        "correcta": "Aprender nuevas habilidades y recibir aumento salarial",
        "explicacion": "La respuesta correcta es: <b>Aprender nuevas habilidades y recibir aumento salarial</b>. Un 78% aprendió skills y un 48% vio su salario subir."
      },
      {
        "pregunta": "¿Qué fase de DevOps gestiona la actualización de servicios y rollback?",
        "respuestas": [
          "Operate",
          "Release",
          "Planificación",
          "Code"
        ],
        "correcta": "Operate",
        "explicacion": "La respuesta correcta es: <b>Operate</b>. Incluye arranque/parada de servicios, monitorización activa y rollback de releases con herramientas como Mender."
      },
      {
        "pregunta": "¿Qué metodología ágil se menciona como soporte a la cultura DevOps?",
        "respuestas": [
          "Scrum",
          "Waterfall",
          "PRINCE2",
          "RUP"
        ],
        "correcta": "Scrum",
        "explicacion": "La respuesta correcta es: <b>Scrum</b>. Aunque no se menciona explícitamente, el material alude a metodologías ágiles como Scrum para gestionar proyectos DevOps."
      },
      {
        "pregunta": "¿Qué herramienta se utiliza para gestionar requisitos e incidencias en la fase de planificación?",
        "respuestas": [
          "Jira",
          "Docker",
          "Grafana",
          "Fluent Bit"
        ],
        "correcta": "Jira",
        "explicacion": "La respuesta correcta es: <b>Jira</b>. Es una de las plataformas populares para seguimiento de tareas, colaboración e integración con CI/CD."
      }
    ],
    "Examen": [
      {
        pregunta: '¿Cuál es la definición que mejor refleja el término DevOps?',
        respuestas: [
          'Es una cultura de desarrollo y operación de software por equipos multidisciplinares.',
          'Es una cultura de desarrollo de software por equipos multidisciplinares.',
          'Es una metodología de integración de sistemas IT definida en BNMP',
          'Es una implementación concreta del modelo en cascada.'
        ],
        correcta: 'Es una cultura de desarrollo y operación de software por equipos multidisciplinares.',
        explicacion: ''
      },
      {
        pregunta: '¿Cuáles son las fases de DevOps?',
        respuestas: [
          'Code, building, test, release',
          'Code, building, test, release, deploy, operate, monitor, feedback&plan',
          'Requirements, code, test, building, release',
          'Code, test, building, release, deploy, operate, monitor, feedback&plan'
        ],
        correcta: 'Code, building, test, release, deploy, operate, monitor, feedback&plan',
        explicacion: ''
      },
      {
        pregunta: '¿El concepto de artefacto software, a qué fase de DevOps pertenece?',
        respuestas: [
          'Code.',
          'Test.',
          'Building.',
          'Release.'
        ],
        correcta: 'Release.',
        explicacion: ''
      },
      {
        pregunta: 'En el proceso de un proyecto de integración, cuando definimos el objetivo y contexto de la integración, ¿qué paso se incluye?',
        respuestas: [
          'Determina la plataforma de mensajería a integrar',
          'Evalúa y cuantifica los riesgos de cambios en las condiciones de servicio con terceros.',
          'Identificar los KPIs del proyecto',
          'Todos los anteriores'
        ],
        correcta: 'Identificar los KPIs del proyecto',
        explicacion: ''
      },
      {
        pregunta: '¿Qué define la arquitectura de referencia de una empresa?',
        respuestas: [
          'Los detalles de implementación de los sistemas que la componen',
          'Los detalles de las capacidades de cada componente',
          'Los principales componentes del sistema en términos genéricos y las conexiones previstas entre esos componentes',
          'Se define todo lo anterior.'
        ],
        correcta: 'Los principales componentes del sistema en términos genéricos y las conexiones previstas entre esos componentes',
        explicacion: ''
      },
      {
        pregunta: '¿Qué define la arquitectura de solución de una empresa?',
        respuestas: [
          'Especifica cómo debe construirse y funcionar un sistema específico',
          'Es la lista de sistemas y servicios IT (tanto hardware como software)',
          'Los principales componentes del sistema en términos genéricos y las conexiones previstas entre esos componentes',
          'Se define todo lo anterior.'
        ],
        correcta: 'Especifica cómo debe construirse y funcionar un sistema específico',
        explicacion: ''
      },
      {
        pregunta: 'Marca la sentencia correcta:',
        respuestas: [
          'Una arquitectura “as-is” describe el estado futuro del SE',
          'Una arquitectura “to-be” tiene una vida útil más larga que una arquitectura “as-is”',
          'Una arquitectura “as-is” es permanente y refleja la parte del diagrama general de la empresa que no cambia.',
          'Cualquier arquitectura empresarial es un artefacto duradero.'
        ],
        correcta: 'Una arquitectura “as-is” es permanente y refleja la parte del diagrama general de la empresa que no cambia.',
        explicacion: ''
      },
      {
        pregunta: '¿Qué lenguaje de modelado se diseñó específicamente para modelar flujos de trabajo empresariales?',
        respuestas: [
          'ITIL',
          'UMLv2.0',
          'SysML',
          'BPMN'
        ],
        correcta: 'BPMN',
        explicacion: ''
      },
      {
        pregunta: '¿Qué lenguaje utiliza para diseñar una estructura de datos, vocabulario y semántica del mundo del vino?',
        respuestas: [
          'OWL',
          'UML',
          'SysML',
          'BPMN'
        ],
        correcta: 'OWL',
        explicacion: ''
      },
      {
        pregunta: 'Al corazón de las plataformas de mensajes, que se encarga de recibir los mensajes y distribuirlos se denomina:',
        respuestas: [
          'Los topics o canales que se definen',
          'Broker de mensajes',
          'Consumidores/Subscriptores',
          'Paquete de mensaje'
        ],
        correcta: 'Broker de mensajes',
        explicacion: ''
      },
      {
        pregunta: 'Un Key Performance Indicator o KPI, al cual le añadimos un objetivo específico debe ser:',
        respuestas: [
          'Específico y medible',
          'Específico, medible y alcanzable',
          'Específico, medible, alcanzable y relevante',
          'Específico, medible, alcanzable, relevante y limitado en el tiempo.'
        ],
        correcta: 'Específico, medible, alcanzable, relevante y limitado en el tiempo.',
        explicacion: ''
      },
      {
        pregunta: '¿Qué se define como un conjunto de buenas prácticas que ayudan a las organizaciones a mejorar sus procesos en organizaciones proveedoras de servicios?',
        respuestas: [
          'ITIL (Information Technology Infrastructure Library)',
          'CMMI (Capability Maturity Model Integration)',
          'SCM (Supply Chain Management)',
          'CRM (Customer Relationship Management)'
        ],
        correcta: 'CMMI (Capability Maturity Model Integration)',
        explicacion: ''
      },
      {
        pregunta: 'Los microservicios son:',
        respuestas: [
          'Servicios autónomos y poco acoplados',
          'Servicios autónomos y muy acoplados',
          'Servicios orientados a eventos poco acoplados',
          'Servicios orientados a eventos y muy acoplados'
        ],
        correcta: 'Servicios autónomos y poco acoplados',
        explicacion: ''
      },
      {
        pregunta: 'Un patrón de integración que pasa de un formato a otro, encapsula las complejidades de la interacción entre dos sistemas, formatos y/o protocolos. ¿Cómo se denomina?',
        respuestas: [
          'Broker de eventos',
          'Pasarela o Gateway',
          'Serialización',
          'Base de datos compartidas'
        ],
        correcta: 'Pasarela o Gateway',
        explicacion: ''
      },
      {
        pregunta: '¿Cómo se caracteriza el nivel 1 en la gestión y planificación de la capacidad de los Sistemas de Información?',
        respuestas: [
          'Se realizan medidas de tendencia y predicción de la utilización en periodos pico. Se planifica la capacidad de los recursos con revisiones periódicas',
          'No existe un programa de gestión de la capacidad, y la gestión de la capacidad se realiza ocasionalmente.',
          'Se conocen exactamente las utilizaciones de cada uno de los recursos debidas a las cargas de trabajo significativas.',
          'Existe un sistema automático de análisis y predicción de la carga de trabajo'
        ],
        correcta: 'No existe un programa de gestión de la capacidad, y la gestión de la capacidad se realiza ocasionalmente.',
        explicacion: ''
      },
      {
        pregunta: 'Señala la afirmación falsa. En una plataforma de mensajes, el broker:',
        respuestas: [
          'Gestiona los mensajes y canales',
          'Se encarga de la autenticación de los publicadores/subscriptores',
          'Se implementa en todos los lenguajes soportados por la plataforma de mensajes (java, c, c++, etc.)',
          'Se debe replicar para aumentar la fiabilidad.'
        ],
        correcta: 'Se implementa en todos los lenguajes soportados por la plataforma de mensajes (java, c, c++, etc.)',
        explicacion: ''
      },
      {
        pregunta: '¿Cuál de los siguientes casos es peor para aplicar una plataforma de mensajes para un proyecto de integración?',
        respuestas: [
          'Integración de servicios donde un servicio produce información que muchos servicios distribuidos consumen.',
          'Integración de servicios basada en estado y comunicación asíncrona',
          'Integración de servicios basada en estado y comunicación síncrona',
          'Integración de servicios mediante la definición de un pipeline.'
        ],
        correcta: 'Integración de servicios basada en estado y comunicación síncrona',
        explicacion: ''
      },
      {
        pregunta: 'Las técnicas de regresión son apropiadas para trabajar con datos:',
        respuestas: [
          'Casi estacionarios y no lineales.',
          'No estacionales y donde tenemos muy pocos históricos',
          'Estacionales sin ningún tipo de tendencia definida.',
          'No estacionales que muestran una tendencia'
        ],
        correcta: 'No estacionales que muestran una tendencia',
        explicacion: ''
      },
      {
        pregunta: '¿Cómo se define al documento donde se especifican los umbrales de productividad, rendimiento y disponibilidad exigidos y pactados?',
        respuestas: [
          'BNMP (Business Net Management Protocol)',
          'SLA (Service Level Agreement)',
          'QoS (Quality of Service)',
          'OKR Objective Key Result'
        ],
        correcta: 'SLA (Service Level Agreement)',
        explicacion: ''
      },
      {
        pregunta: '¿Qué solución estandarizada tiene como objetivos estratégicos la creación de una arquitectura común de procesos empresariales, la normalización de los datos maestros internos y externos y la estandarización de la arquitectura del sistema informático?',
        respuestas: [
          'Supply Chain Management (SCM)',
          'Customer Relationship Management (CRM)',
          'Big Data Analytics (BDA)',
          'Enterprise Resource Planning (ERP)'
        ],
        correcta: 'Enterprise Resource Planning (ERP)',
        explicacion: ''
      },
      {
        pregunta: 'Los siguientes pasos… ¿En qué orden aconseja realizarlos?',
        respuestas: [
          '1 → 2 → 3 → 4',
          '3 → 2 → 4 → 1',
          '3 → 2 → 1 → 4',
          '4 → 2 → 1 → 3'
        ],
        correcta: '3 → 2 → 4 → 1',
        explicacion: ''
      },
      {
        pregunta: '¿Cuál es el principal reto de un proyecto de integración?',
        respuestas: [
          'Integrar la última tecnología del mercado.',
          'Optimizar el uso del entorno cloud',
          'Capturar toda la semántica, sintaxis y temporización de los servicios y datos a integrar y que sigan dando soporte a los procesos de negocio.',
          'Todos los retos enumerados son retos de todos los proyectos de integración.'
        ],
        correcta: 'Capturar toda la semántica, sintaxis y temporización de los servicios y datos a integrar y que sigan dando soporte a los procesos de negocio.',
        explicacion: ''
      }
    ]
  };
  preguntasActuales: any[] = [];
  testFinalizado: boolean = false;
  respuestasUsuario: string[] = []; // Respuestas seleccionadas por el usuario.
  explicacionActual = '';
  mostrarDialogo = false;
  // Paginación
  paginaActual: number = 0;
  preguntasPorPagina: number = 10;
  paginaComprobada: boolean = false; // Para controlar si ya se comprobó la página
  preguntasPaginadas: any[] = []; // Preguntas en la página actual

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService
  ) {
    this.cargarPreguntasCompletas();
    this.actualizarPreguntasPaginadas();
  }

  /**
   * Cargar todas las preguntas de todos los temas y mezclarlas.
   */
  cargarPreguntasCompletas() {
    const preguntas = [
      ...this.temas["Tema 5 - 1"],
      ...this.temas["Tema 5 - 2"],
      ...this.temas["Tema 5 - 3"]
    ];
    this.preguntasActuales = this.shuffleArray(preguntas);

    this.preguntasActuales.forEach((pregunta) => {
      pregunta.respuestas = this.shuffleArray(pregunta.respuestas);
    });

    this.respuestasUsuario = new Array(this.preguntasActuales.length).fill(null);
    this.testFinalizado = false;
  }

  /**
   * Barajar un array aleatoriamente.
   */
  shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }


  /**
   * Actualizar las preguntas para mostrar en la página actual.
   */
  actualizarPreguntasPaginadas() {
    const inicio = this.paginaActual * this.preguntasPorPagina;
    const fin = inicio + this.preguntasPorPagina;
    this.preguntasPaginadas = this.preguntasActuales.slice(inicio, fin);
    this.paginaComprobada = false; // Reiniciar comprobación en cada cambio de página

  }

  /**
     * Cambiar de página en el paginador.
     */
  cambiarPagina(event: any) {
    this.paginaActual = event.page;
    this.actualizarPreguntasPaginadas();
  }

  finalizarTest() {
    let respuestasCorrectas = 0;

    this.preguntasActuales.forEach((pregunta) => {
      if (pregunta.seleccionada === pregunta.correcta) {
        respuestasCorrectas++;
        pregunta.mensajeRespuesta = [
          { severity: 'success', summary: 'Correcto', detail: `La respuesta seleccionada es correcta.` }
        ];
      } else {
        pregunta.mensajeRespuesta = [
          { severity: 'error', summary: 'Respuesta correcta: ', detail: `${pregunta.correcta}` }
        ];
      }
    });

    this.testFinalizado = true;

    this.confirmationService.confirm({
      header: '🎯 Test Finalizado',
      message: `¡Has acertado ${respuestasCorrectas} de ${this.preguntasActuales.length} preguntas!`,
      icon: 'pi pi-check-circle',
      acceptLabel: 'Aceptar',
      rejectVisible: false,
      accept: () => {
        console.log('Test finalizado confirmado');
      }
    });
  }


  /**
   * Corrige únicamente la página actual.
   */
  corregirPagina() {
    let respuestasCorrectas = 0;

    // Calculamos índices de las preguntas en el array global
    const inicio = this.paginaActual * this.preguntasPorPagina;
    const fin = inicio + this.preguntasPorPagina;

    // Recorremos las preguntas de la página
    for (let i = inicio; i < fin; i++) {
      const pregunta = this.preguntasActuales[i];
      if (!pregunta) {
        continue; // Por si no hay tantas preguntas en la última página
      }

      if (pregunta.seleccionada === pregunta.correcta) {
        respuestasCorrectas++;
        pregunta.mensajeRespuesta = [
          {
            severity: 'success',
            summary: 'Correcto',
            detail: `La respuesta seleccionada es correcta.`
          }
        ];
      } else {
        pregunta.mensajeRespuesta = [
          {
            severity: 'error',
            summary: 'Respuesta correcta:',
            detail: `${pregunta.correcta}`
          }
        ];
      }
    }

    this.paginaComprobada = true;

    // Mensaje opcional con cuántas acertó en la página
    const numeroPreguntasPagina = fin - inicio;
    this.confirmationService.confirm({
      header: 'Página Corregida',
      message: `¡Has acertado ${respuestasCorrectas} de ${numeroPreguntasPagina} preguntas en esta página!`,
      icon: 'pi pi-check-circle',
      acceptLabel: 'Aceptar',
      rejectVisible: false,
      accept: () => {
        console.log('Página corregida confirmada');
      }
    });
  }
  mostrarExplicacion(explicacion: string) {
    this.explicacionActual = explicacion;
    this.mostrarDialogo = true;
  }
  /**
   * Volver a la página anterior.
   */
  goBack() {
    this.router.navigate(['/dyg']);
  }
}

