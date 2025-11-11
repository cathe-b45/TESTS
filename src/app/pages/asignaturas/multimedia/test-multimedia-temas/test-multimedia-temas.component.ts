import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, SelectItem } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';
import { HeadbarComponent } from '../../../headbar/headbar.component';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-test-multimedia-temas',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginatorModule, DialogModule, ButtonModule, DividerModule, CardModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './test-multimedia-temas.component.html',
  styleUrl: './test-multimedia-temas.component.scss'
})
export class TestMultimediaTemasComponent {
  temas: { [key: string]: any[] } = {
    "Tema 1": [
      {
        "pregunta": "¿Qué garantiza la seguridad informática según el NIST?",
        "respuestas": [
          "La disponibilidad y la confidencialidad únicamente",
          "La confidencialidad, integridad y disponibilidad de los activos de información",
          "Solo la protección del software y hardware",
          "El cifrado de todos los datos almacenados"
        ],
        "correcta": "La confidencialidad, integridad y disponibilidad de los activos de información",
        "explicacion": "El NIST define la seguridad informática como las medidas que aseguran la confidencialidad, integridad y disponibilidad de los activos de información."
      },
      {
        "pregunta": "¿Qué significa la confidencialidad en seguridad informática?",
        "respuestas": [
          "Garantizar el acceso oportuno y confiable a la información",
          "Proteger contra la modificación o destrucción inadecuada de datos",
          "Preservar las restricciones autorizadas sobre el acceso y la divulgación de información",
          "Asegurar la integridad de las contraseñas de los usuarios"
        ],
        "correcta": "Preservar las restricciones autorizadas sobre el acceso y la divulgación de información",
        "explicacion": "La confidencialidad busca evitar accesos o divulgaciones no autorizadas de la información."
      },
      {
        "pregunta": "¿Cuál es el objetivo principal de la integridad?",
        "respuestas": [
          "Proteger la información contra la modificación o destrucción no autorizada",
          "Asegurar el acceso a los datos desde cualquier lugar",
          "Evitar que los usuarios cambien sus contraseñas",
          "Garantizar la velocidad del sistema"
        ],
        "correcta": "Proteger la información contra la modificación o destrucción no autorizada",
        "explicacion": "La integridad garantiza que la información se mantenga exacta, completa y sin alteraciones indebidas."
      },
      {
        "pregunta": "¿Qué implica el principio de disponibilidad?",
        "respuestas": [
          "Evitar el acceso no autorizado a la información",
          "Garantizar el acceso oportuno y confiable a la información y su uso",
          "Verificar la autenticidad de los usuarios",
          "Proteger la información mediante cifrado"
        ],
        "correcta": "Garantizar el acceso oportuno y confiable a la información y su uso",
        "explicacion": "La disponibilidad asegura que los recursos estén accesibles cuando los usuarios autorizados los necesiten."
      },
      {
        "pregunta": "¿Qué se considera un impacto de nivel bajo?",
        "respuestas": [
          "Efecto adverso grave en las operaciones de la organización",
          "Efecto adverso limitado en las operaciones o activos de la organización",
          "Efecto adverso catastrófico",
          "Pérdida total de confidencialidad e integridad"
        ],
        "correcta": "Efecto adverso limitado en las operaciones o activos de la organización",
        "explicacion": "Un impacto bajo implica consecuencias menores y limitadas en las operaciones o individuos."
      },
      {
        "pregunta": "¿Qué caracteriza un nivel de impacto moderado?",
        "respuestas": [
          "Tiene un efecto adverso limitado",
          "Tiene un efecto adverso grave en las operaciones o activos",
          "Tiene un efecto adverso catastrófico",
          "No causa daño a los individuos"
        ],
        "correcta": "Tiene un efecto adverso grave en las operaciones o activos",
        "explicacion": "El impacto moderado se asocia con daños graves pero no catastróficos para la organización."
      },
      {
        "pregunta": "¿Qué representa un nivel de impacto alto?",
        "respuestas": [
          "Efecto adverso leve o limitado",
          "Efecto adverso grave pero recuperable",
          "Efecto adverso severo o catastrófico",
          "Efecto adverso temporal sin consecuencias"
        ],
        "correcta": "Efecto adverso severo o catastrófico",
        "explicacion": "El impacto alto se refiere a pérdidas graves que pueden poner en peligro la continuidad de la organización."
      },
      {
        "pregunta": "¿Qué señala el primer desafío de la seguridad informática?",
        "respuestas": [
          "Es simple y fácil de implementar",
          "No es tan simple como podría parecer a un principiante",
          "Requiere únicamente medidas automáticas",
          "Depende solo del software instalado"
        ],
        "correcta": "No es tan simple como podría parecer a un principiante",
        "explicacion": "La seguridad informática es compleja y requiere múltiples capas de protección y análisis."
      },
      {
        "pregunta": "¿Qué se debe considerar al desarrollar un mecanismo de seguridad?",
        "respuestas": [
          "El diseño visual del sistema",
          "Los posibles ataques a las características de seguridad",
          "La velocidad de procesamiento",
          "El costo del hardware"
        ],
        "correcta": "Los posibles ataques a las características de seguridad",
        "explicacion": "Todo mecanismo de seguridad debe diseñarse considerando las amenazas potenciales que pueden afectarlo."
      },
      {
        "pregunta": "¿Qué indica el desafío sobre los atacantes y las debilidades?",
        "respuestas": [
          "Los atacantes necesitan explotar múltiples debilidades para tener éxito",
          "Los atacantes solo necesitan una debilidad, mientras que el diseñador debe eliminar todas",
          "Los diseñadores pueden ignorar pequeñas vulnerabilidades",
          "La seguridad perfecta no requiere mantenimiento"
        ],
        "correcta": "Los atacantes solo necesitan una debilidad, mientras que el diseñador debe eliminar todas",
        "explicacion": "Esto refleja el principio de que la defensa debe ser completa, ya que una sola brecha puede comprometer todo el sistema."
      },
      {
        "pregunta": "¿Qué problema ocurre con frecuencia en el diseño de sistemas respecto a la seguridad?",
        "respuestas": [
          "La seguridad se integra desde el inicio del diseño",
          "La seguridad se añade al final del proceso de diseño",
          "Los sistemas siempre priorizan la seguridad sobre la usabilidad",
          "La seguridad reemplaza la funcionalidad"
        ],
        "correcta": "La seguridad se añade al final del proceso de diseño",
        "explicacion": "Con frecuencia, la seguridad se incorpora demasiado tarde en el desarrollo del sistema."
      },
      {
        "pregunta": "¿Qué requiere la seguridad según los desafíos del NIST?",
        "respuestas": [
          "Una auditoría anual",
          "Un seguimiento regular y constante",
          "Una revisión mensual",
          "Actualizaciones automáticas del sistema"
        ],
        "correcta": "Un seguimiento regular y constante",
        "explicacion": "La seguridad no es estática; necesita monitoreo y mantenimiento continuo para ser efectiva."
      },
      {
        "pregunta": "¿Qué tendencia natural existe entre los usuarios y administradores?",
        "respuestas": [
          "Sobrevalorar la inversión en seguridad",
          "Percibir pocos beneficios hasta que ocurre una falla de seguridad",
          "Considerar la seguridad como su principal prioridad",
          "Invertir excesivamente en medidas preventivas"
        ],
        "correcta": "Percibir pocos beneficios hasta que ocurre una falla de seguridad",
        "explicacion": "Los usuarios suelen subestimar la importancia de la seguridad hasta que ocurre un incidente."
      },
      {
        "pregunta": "¿Cómo perciben algunos usuarios una seguridad sólida?",
        "respuestas": [
          "Como una mejora en la facilidad de uso del sistema",
          "Como un impedimento para la eficiencia o la facilidad de uso",
          "Como una reducción en el riesgo de fallos",
          "Como una herramienta para acelerar procesos"
        ],
        "correcta": "Como un impedimento para la eficiencia o la facilidad de uso",
        "explicacion": "Muchos usuarios consideran que las medidas de seguridad complican el uso de los sistemas, aunque son necesarias."
      },
      {
        "pregunta": "¿Qué se entiende por adversario según el RFC 4949?",
        "respuestas": [
          "Un sistema afectado por malware",
          "Un individuo, grupo u organización que realiza actividades perjudiciales",
          "Un dispositivo usado para evitar ataques",
          "Un conjunto de políticas de seguridad"
        ],
        "correcta": "Un individuo, grupo u organización que realiza actividades perjudiciales",
        "explicacion": "El adversario o agente amenazante es quien tiene la intención o capacidad de causar daño a los sistemas de información."
      },
      {
        "pregunta": "¿Cómo se define un ataque en seguridad informática?",
        "respuestas": [
          "Una actividad que busca fortalecer un sistema",
          "Una actividad maliciosa que intenta recopilar, interrumpir o destruir recursos del sistema",
          "Un intento de restaurar datos dañados",
          "Una técnica para medir el riesgo"
        ],
        "correcta": "Una actividad maliciosa que intenta recopilar, interrumpir o destruir recursos del sistema",
        "explicacion": "Un ataque es cualquier acción intencionada que afecta negativamente los recursos o la información de un sistema."
      },
      {
        "pregunta": "¿Qué es una contramedida según el RFC 4949?",
        "respuestas": [
          "Un ataque diseñado para probar la seguridad del sistema",
          "Un dispositivo o técnica para reducir la efectividad de actividades no deseadas",
          "Una debilidad en el sistema",
          "Un evento que causa daño a la organización"
        ],
        "correcta": "Un dispositivo o técnica para reducir la efectividad de actividades no deseadas",
        "explicacion": "Las contramedidas se implementan para prevenir, detectar o mitigar actividades perjudiciales para la seguridad."
      },
      {
        "pregunta": "¿Qué mide el concepto de riesgo en seguridad informática?",
        "respuestas": [
          "El número de ataques recibidos",
          "El grado de amenaza y la probabilidad de que ocurra un evento adverso",
          "La cantidad de contramedidas aplicadas",
          "El costo de la infraestructura de seguridad"
        ],
        "correcta": "El grado de amenaza y la probabilidad de que ocurra un evento adverso",
        "explicacion": "El riesgo combina la probabilidad de un evento con el impacto potencial que tendría si se materializa."
      },
      {
        "pregunta": "¿Qué es una política de seguridad?",
        "respuestas": [
          "Una guía de comportamiento de los usuarios en la red",
          "Un conjunto de criterios que define y limita las actividades de seguridad de una instalación",
          "Una herramienta para cifrar información",
          "Una técnica para detectar vulnerabilidades"
        ],
        "correcta": "Un conjunto de criterios que define y limita las actividades de seguridad de una instalación",
        "explicacion": "La política de seguridad establece los lineamientos para mantener una condición de seguridad en los sistemas y datos."
      },
      {
        "pregunta": "¿Qué se considera un recurso del sistema o activo?",
        "respuestas": [
          "Solo el software y los datos",
          "Cualquier elemento físico o lógico de importancia crítica en el sistema",
          "Exclusivamente el hardware de red",
          "Un componente que genera vulnerabilidades"
        ],
        "correcta": "Cualquier elemento físico o lógico de importancia crítica en el sistema",
        "explicacion": "Los activos incluyen hardware, software, datos, personal, instalaciones y redes de comunicación."
      },
      {
        "pregunta": "¿Cómo se define una amenaza?",
        "respuestas": [
          "Una debilidad en el sistema que puede ser explotada",
          "Un evento con el potencial de afectar negativamente las operaciones o los activos",
          "Una medida de probabilidad de fallo",
          "Un conjunto de políticas de prevención"
        ],
        "correcta": "Un evento con el potencial de afectar negativamente las operaciones o los activos",
        "explicacion": "Las amenazas son circunstancias que pueden explotar vulnerabilidades y causar daños a la organización o sus sistemas."
      },
      {
        "pregunta": "¿Qué es una vulnerabilidad?",
        "respuestas": [
          "Un ataque que ya ha ocurrido",
          "Una debilidad que puede ser explotada o activada por una amenaza",
          "Una medida preventiva de seguridad",
          "Un tipo de riesgo residual"
        ],
        "correcta": "Una debilidad que puede ser explotada o activada por una amenaza",
        "explicacion": "Las vulnerabilidades son fallos o carencias en el sistema que permiten a una amenaza causar daño."
      },
      {
        "pregunta": "¿Cuáles son ejemplos de activos de un sistema informático?",
        "respuestas": [
          "Contraseñas, logs y antivirus",
          "Hardware, software, datos e instalaciones y redes de comunicación",
          "Usuarios, contraseñas y protocolos",
          "Redes sociales y servicios en la nube"
        ],
        "correcta": "Hardware, software, datos e instalaciones y redes de comunicación",
        "explicacion": "Estos componentes representan los activos más importantes que deben protegerse en un sistema informático."
      },
      {
        "pregunta": "¿Qué tipo de vulnerabilidad implica una pérdida de integridad?",
        "respuestas": [
          "Leaky (fuga)",
          "Corrupto",
          "No disponible",
          "Externo"
        ],
        "correcta": "Corrupto",
        "explicacion": "Las vulnerabilidades corruptas afectan la integridad de la información almacenada o procesada."
      },
      {
        "pregunta": "¿Qué tipo de vulnerabilidad se asocia con pérdida de confidencialidad?",
        "respuestas": [
          "Corrupto",
          "Leaky (fugas)",
          "No disponible o muy lento",
          "Pasivo"
        ],
        "correcta": "Leaky (fugas)",
        "explicacion": "Las vulnerabilidades 'leaky' permiten la filtración de información confidencial."
      },
      {
        "pregunta": "¿Qué tipo de vulnerabilidad afecta la disponibilidad?",
        "respuestas": [
          "Leaky",
          "Corrupto",
          "No disponible o muy lento",
          "Activo"
        ],
        "correcta": "No disponible o muy lento",
        "explicacion": "Cuando un sistema no está disponible o responde lentamente, se compromete la disponibilidad."
      },
      {
        "pregunta": "¿Qué caracteriza un ataque pasivo?",
        "respuestas": [
          "Intenta alterar los recursos del sistema",
          "Busca aprender o usar información sin afectar los recursos del sistema",
          "Se origina dentro del perímetro de seguridad",
          "Provoca interrupciones directas"
        ],
        "correcta": "Busca aprender o usar información sin afectar los recursos del sistema",
        "explicacion": "Los ataques pasivos se centran en la observación o recopilación de información sin modificarla."
      },
      {
        "pregunta": "¿Qué distingue a un ataque activo?",
        "respuestas": [
          "No altera los recursos del sistema",
          "Intenta alterar o dañar los recursos del sistema",
          "Proviene únicamente de fuentes externas",
          "Solo se usa con fines de auditoría"
        ],
        "correcta": "Intenta alterar o dañar los recursos del sistema",
        "explicacion": "Los ataques activos buscan modificar, interrumpir o destruir los recursos o el funcionamiento del sistema."
      },
      {
        "pregunta": "¿Qué diferencia hay entre un ataque interno y uno externo?",
        "respuestas": [
          "El interno es accidental, el externo intencional",
          "El interno proviene desde dentro del perímetro de seguridad, el externo desde fuera",
          "El interno siempre es más peligroso",
          "El externo no puede afectar servidores locales"
        ],
        "correcta": "El interno proviene desde dentro del perímetro de seguridad, el externo desde fuera",
        "explicacion": "Los ataques internos suelen realizarse por empleados o usuarios autorizados; los externos provienen de agentes ajenos."
      },
      {
        "pregunta": "¿Cuáles son los tres objetivos principales de las contramedidas?",
        "respuestas": [
          "Cifrar, autenticar y auditar",
          "Prevenir, detectar y recuperar",
          "Reducir, eliminar y reemplazar",
          "Evitar, registrar y sancionar"
        ],
        "correcta": "Prevenir, detectar y recuperar",
        "explicacion": "Las contramedidas se enfocan en evitar ataques, identificarlos a tiempo y restaurar la normalidad del sistema."
      },
      {
        "pregunta": "¿Qué riesgo pueden tener las contramedidas?",
        "respuestas": [
          "Reducen la eficacia del sistema de seguridad",
          "Pueden introducir nuevas vulnerabilidades",
          "Eliminan todos los riesgos existentes",
          "Solo funcionan en ataques internos"
        ],
        "correcta": "Pueden introducir nuevas vulnerabilidades",
        "explicacion": "Al implementarse, las contramedidas pueden generar puntos débiles imprevistos en el sistema."
      },
      {
        "pregunta": "¿Cuál es el objetivo final de las contramedidas?",
        "respuestas": [
          "Eliminar todas las amenazas",
          "Minimizar el nivel residual de riesgo para los activos",
          "Eliminar la necesidad de políticas de seguridad",
          "Evitar los ataques externos únicamente"
        ],
        "correcta": "Minimizar el nivel residual de riesgo para los activos",
        "explicacion": "El propósito de las contramedidas es reducir el riesgo a un nivel aceptable para los recursos de la organización."
      },
      {
        "pregunta": "¿Qué describe la consecuencia 'Divulgación no autorizada'?",
        "respuestas": [
          "La pérdida de control sobre los servicios del sistema",
          "El acceso no autorizado a datos confidenciales",
          "La interrupción del funcionamiento del sistema",
          "La creación de datos falsos en el sistema"
        ],
        "correcta": "El acceso no autorizado a datos confidenciales",
        "explicacion": "La divulgación no autorizada ocurre cuando una entidad obtiene acceso a datos para los cuales no tiene autorización."
      },
      {
        "pregunta": "¿Qué acción de amenaza corresponde a la 'Divulgación no autorizada' cuando los datos se exponen directamente?",
        "respuestas": [
          "Intrusión",
          "Exposición",
          "Intercepción",
          "Inferencia"
        ],
        "correcta": "Exposición",
        "explicacion": "La exposición ocurre cuando los datos confidenciales se revelan directamente a una entidad no autorizada."
      },
      {
        "pregunta": "¿Qué ocurre durante una 'Intercepción'?",
        "respuestas": [
          "Una entidad no autorizada altera los datos",
          "Una entidad no autorizada accede a datos en tránsito",
          "Se crean datos falsos en el sistema",
          "Se interrumpe el funcionamiento de un componente"
        ],
        "correcta": "Una entidad no autorizada accede a datos en tránsito",
        "explicacion": "La intercepción implica el acceso no autorizado a datos confidenciales que viajan entre fuentes y destinos autorizados."
      },
      {
        "pregunta": "¿Qué implica una acción de 'Inferencia'?",
        "respuestas": [
          "El acceso directo a los datos confidenciales",
          "El acceso indirecto a datos mediante deducciones",
          "La interrupción del servicio",
          "La modificación de funciones del sistema"
        ],
        "correcta": "El acceso indirecto a datos mediante deducciones",
        "explicacion": "La inferencia permite deducir información confidencial a partir de subproductos o patrones de comunicación."
      },
      {
        "pregunta": "¿Qué define la 'Intrusión'?",
        "respuestas": [
          "El acceso a datos confidenciales eludiendo protecciones de seguridad",
          "La alteración de datos existentes en la red",
          "El envío de información falsa al sistema",
          "La interrupción del servicio"
        ],
        "correcta": "El acceso a datos confidenciales eludiendo protecciones de seguridad",
        "explicacion": "La intrusión ocurre cuando una entidad no autorizada supera las defensas de seguridad y accede a datos."
      },
      {
        "pregunta": "¿Qué describe la consecuencia 'Engaño'?",
        "respuestas": [
          "Interrupción del sistema por malware",
          "Recepción de datos falsos por parte de una entidad autorizada",
          "Acceso no autorizado a recursos del sistema",
          "Pérdida de disponibilidad del servicio"
        ],
        "correcta": "Recepción de datos falsos por parte de una entidad autorizada",
        "explicacion": "El engaño ocurre cuando una entidad autorizada acepta datos falsos creyendo que son verdaderos."
      },
      {
        "pregunta": "¿Qué representa la 'Suplantación'?",
        "respuestas": [
          "El uso indebido de datos confidenciales",
          "Un ataque en el que una entidad se hace pasar por otra",
          "Una denegación de servicio",
          "La modificación de archivos del sistema"
        ],
        "correcta": "Un ataque en el que una entidad se hace pasar por otra",
        "explicacion": "La suplantación se produce cuando una entidad no autorizada actúa en nombre de otra legítima."
      },
      {
        "pregunta": "¿Qué implica una 'Falsificación'?",
        "respuestas": [
          "El envío de datos falsos que engañan a una entidad autorizada",
          "El robo de hardware del sistema",
          "La interrupción de los servicios de red",
          "La creación de nuevos usuarios en el sistema"
        ],
        "correcta": "El envío de datos falsos que engañan a una entidad autorizada",
        "explicacion": "La falsificación ocurre cuando datos falsos son aceptados como auténticos por una entidad autorizada."
      },
      {
        "pregunta": "¿Qué describe el 'Repudio'?",
        "respuestas": [
          "Una denegación falsa de responsabilidad por parte de una entidad",
          "Una pérdida de disponibilidad del sistema",
          "La modificación de datos en tránsito",
          "La creación de nuevos archivos falsos"
        ],
        "correcta": "Una denegación falsa de responsabilidad por parte de una entidad",
        "explicacion": "El repudio ocurre cuando una entidad niega haber realizado una acción o haber participado en una comunicación."
      },
      {
        "pregunta": "¿Qué consecuencia se produce cuando se interrumpe el funcionamiento de los servicios del sistema?",
        "respuestas": [
          "Ruptura",
          "Engaño",
          "Divulgación no autorizada",
          "Usurpación"
        ],
        "correcta": "Ruptura",
        "explicacion": "La ruptura implica una interrupción o fallo en los servicios o funciones del sistema."
      },
      {
        "pregunta": "¿Qué acción de amenaza corresponde a 'Ruptura' al desactivar un componente del sistema?",
        "respuestas": [
          "Corrupción",
          "Incapacitacion",
          "Obstrucción",
          "Apropiación indebida"
        ],
        "correcta": "Incapacitacion",
        "explicacion": "La incapacitación interrumpe el funcionamiento del sistema al desactivar uno de sus componentes."
      },
      {
        "pregunta": "¿Qué implica una 'Corrupción'?",
        "respuestas": [
          "La pérdida de disponibilidad del sistema",
          "La alteración indeseable de las funciones o datos del sistema",
          "El acceso no autorizado a información confidencial",
          "La denegación de responsabilidades"
        ],
        "correcta": "La alteración indeseable de las funciones o datos del sistema",
        "explicacion": "La corrupción modifica negativamente la integridad del sistema o sus datos."
      },
      {
        "pregunta": "¿Qué acción describe una 'Obstrucción'?",
        "respuestas": [
          "Un ataque que impide la prestación de servicios del sistema",
          "Un intento de acceder a datos confidenciales",
          "La creación de contramedidas redundantes",
          "El robo físico de hardware"
        ],
        "correcta": "Un ataque que impide la prestación de servicios del sistema",
        "explicacion": "La obstrucción bloquea la disponibilidad de servicios al obstaculizar su funcionamiento normal."
      },
      {
        "pregunta": "¿Qué significa 'Usurpación'?",
        "respuestas": [
          "Interrupción del servicio de red",
          "Control del sistema por una entidad no autorizada",
          "Falsificación de datos",
          "Alteración de funciones del sistema"
        ],
        "correcta": "Control del sistema por una entidad no autorizada",
        "explicacion": "La usurpación ocurre cuando una entidad no autorizada toma control de servicios o funciones del sistema."
      },
      {
        "pregunta": "¿Qué implica una 'Apropiación indebida'?",
        "respuestas": [
          "El uso correcto de recursos del sistema",
          "El acceso físico o lógico no autorizado a un recurso",
          "El sabotaje del software del sistema",
          "La denegación de servicio a usuarios"
        ],
        "correcta": "El acceso físico o lógico no autorizado a un recurso",
        "explicacion": "La apropiación indebida ocurre cuando una entidad toma control no autorizado de un recurso del sistema."
      },
      {
        "pregunta": "¿Qué describe el 'Uso indebido'?",
        "respuestas": [
          "Un componente realiza funciones no autorizadas o perjudiciales",
          "El robo físico de hardware",
          "La exposición de datos confidenciales",
          "El bloqueo de servicios"
        ],
        "correcta": "Un componente realiza funciones no autorizadas o perjudiciales",
        "explicacion": "El uso indebido ocurre cuando un sistema ejecuta acciones que comprometen su seguridad o funcionamiento."
      },
      {
        "pregunta": "¿Qué ejemplo de amenaza afecta la disponibilidad del hardware?",
        "respuestas": [
          "Se roba o inutiliza el equipo, negando el servicio",
          "Se roba una unidad USB no cifrada",
          "Se modifica un programa en ejecución",
          "Se leen los mensajes de red"
        ],
        "correcta": "Se roba o inutiliza el equipo, negando el servicio",
        "explicacion": "El robo o daño del hardware afecta la disponibilidad, impidiendo el acceso a los servicios."
      },
      {
        "pregunta": "¿Qué ejemplo de amenaza compromete la confidencialidad del software?",
        "respuestas": [
          "El programa se elimina",
          "Se realiza una copia no autorizada del software",
          "Un componente del sistema falla",
          "Se modifica el código fuente"
        ],
        "correcta": "Se realiza una copia no autorizada del software",
        "explicacion": "Copiar software sin autorización compromete su confidencialidad y los derechos de acceso."
      },
      {
        "pregunta": "¿Qué ejemplo de amenaza afecta la integridad de los datos?",
        "respuestas": [
          "Los archivos se eliminan",
          "Se realiza una lectura no autorizada de datos",
          "Los archivos existentes se modifican o se crean nuevos",
          "Se destruyen los mensajes de red"
        ],
        "correcta": "Los archivos existentes se modifican o se crean nuevos",
        "explicacion": "Modificar o crear archivos no autorizados altera la integridad de la información almacenada."
      },
      {
        "pregunta": "¿Qué tipo de amenaza afecta la confidencialidad en las redes de comunicación?",
        "respuestas": [
          "Lectura de mensajes o análisis del patrón de tráfico",
          "Modificación o retraso de mensajes",
          "Destrucción de mensajes",
          "Duplicación de paquetes"
        ],
        "correcta": "Lectura de mensajes o análisis del patrón de tráfico",
        "explicacion": "Leer o analizar mensajes compromete la confidencialidad de las comunicaciones."
      },
      {
        "pregunta": "¿Qué caracteriza a un ataque pasivo?",
        "respuestas": [
          "Modifica el flujo de datos o crea uno falso",
          "Busca aprender o usar información sin afectar los recursos del sistema",
          "Provoca interrupciones en el sistema",
          "Altera los mensajes legítimos"
        ],
        "correcta": "Busca aprender o usar información sin afectar los recursos del sistema",
        "explicacion": "Los ataques pasivos se centran en observar o capturar información sin modificarla ni alterar el sistema."
      },
      {
        "pregunta": "¿Cuál es el objetivo principal de un ataque pasivo?",
        "respuestas": [
          "Interrumpir los servicios de red",
          "Obtener la información que se transmite",
          "Modificar los datos en tránsito",
          "Alterar las credenciales de acceso"
        ],
        "correcta": "Obtener la información que se transmite",
        "explicacion": "El atacante busca conocer el contenido de la comunicación, no dañarla ni modificarla."
      },
      {
        "pregunta": "¿Cuáles son los dos tipos de ataque pasivo?",
        "respuestas": [
          "Repetición y denegación de servicio",
          "Suplantación y falsificación",
          "Publicación del contenido del mensaje y análisis de tráfico",
          "Corrupción y obstrucción"
        ],
        "correcta": "Publicación del contenido del mensaje y análisis de tráfico",
        "explicacion": "Los ataques pasivos se dividen entre la lectura del mensaje y el análisis de los patrones de tráfico."
      },
      {
        "pregunta": "¿Qué diferencia a los ataques activos de los pasivos?",
        "respuestas": [
          "Los activos buscan solo recopilar información",
          "Los activos implican modificación del flujo de datos o creación de datos falsos",
          "Los pasivos son más dañinos que los activos",
          "Los activos no afectan al sistema"
        ],
        "correcta": "Los activos implican modificación del flujo de datos o creación de datos falsos",
        "explicacion": "A diferencia de los pasivos, los ataques activos alteran el sistema o su funcionamiento."
      },
      {
        "pregunta": "¿Por qué son difíciles de prevenir los ataques activos?",
        "respuestas": [
          "Porque dependen del tipo de sistema operativo",
          "Por la gran variedad de vulnerabilidades físicas, de software y de red",
          "Porque no generan daños visibles",
          "Porque solo ocurren en redes públicas"
        ],
        "correcta": "Por la gran variedad de vulnerabilidades físicas, de software y de red",
        "explicacion": "Las numerosas vulnerabilidades posibles hacen que los ataques activos sean difíciles de prevenir completamente."
      },
      {
        "pregunta": "¿Cuál es el objetivo principal al enfrentar ataques activos?",
        "respuestas": [
          "Detectarlos y recuperarse de interrupciones causadas por ellos",
          "Eliminar el tráfico de red sospechoso",
          "Aumentar la velocidad de transmisión",
          "Cifrar todas las comunicaciones"
        ],
        "correcta": "Detectarlos y recuperarse de interrupciones causadas por ellos",
        "explicacion": "El objetivo es detectar los ataques rápidamente y restaurar el funcionamiento normal del sistema."
      },
      {
        "pregunta": "¿Qué implica un ataque de suplantación (Masquerade)?",
        "respuestas": [
          "Un atacante interrumpe el tráfico de red",
          "Una entidad finge ser otra entidad diferente",
          "Se altera el flujo de datos sin permiso",
          "Se copia el contenido del mensaje"
        ],
        "correcta": "Una entidad finge ser otra entidad diferente",
        "explicacion": "En la suplantación, el atacante actúa en nombre de una entidad legítima para obtener acceso o privilegios."
      },
      {
        "pregunta": "¿Qué ocurre en un ataque de repetición (Replay)?",
        "respuestas": [
          "Se modifican los datos originales",
          "Se capturan y retransmiten datos legítimos para producir un efecto no autorizado",
          "Se interrumpe la conexión de red",
          "Se analizan los patrones de tráfico"
        ],
        "correcta": "Se capturan y retransmiten datos legítimos para producir un efecto no autorizado",
        "explicacion": "El atacante reutiliza datos legítimos para engañar al sistema o repetir acciones válidas."
      },
      {
        "pregunta": "¿Qué es la modificación de datos en un ataque activo?",
        "respuestas": [
          "La alteración o reordenamiento de partes de un mensaje legítimo",
          "La lectura del contenido del mensaje",
          "El retraso en la entrega de información por saturación",
          "El acceso no autorizado sin modificación"
        ],
        "correcta": "La alteración o reordenamiento de partes de un mensaje legítimo",
        "explicacion": "Este ataque busca cambiar el contenido o el orden de los mensajes para producir efectos no deseados."
      },
      {
        "pregunta": "¿Qué busca un ataque de denegación de servicio (DoS)?",
        "respuestas": [
          "Robar credenciales de usuario",
          "Impedir o inhibir el uso normal de los servicios del sistema",
          "Modificar los datos en tránsito",
          "Reproducir mensajes antiguos"
        ],
        "correcta": "Impedir o inhibir el uso normal de los servicios del sistema",
        "explicacion": "El DoS busca saturar o bloquear los recursos para que no estén disponibles para los usuarios legítimos."
      },
      {
        "pregunta": "¿Qué servicio de seguridad garantiza que una comunicación sea auténtica?",
        "respuestas": [
          "Integridad de datos",
          "Autenticación",
          "Control de acceso",
          "No repudio"
        ],
        "correcta": "Autenticación",
        "explicacion": "La autenticación verifica la identidad de las partes que se comunican, asegurando que son quienes dicen ser."
      },
      {
        "pregunta": "¿Qué asegura la autenticación en el caso de un solo mensaje?",
        "respuestas": [
          "Que el mensaje proviene de la fuente que dice ser",
          "Que el mensaje no fue interceptado",
          "Que el mensaje está cifrado correctamente",
          "Que el mensaje fue reenviado automáticamente"
        ],
        "correcta": "Que el mensaje proviene de la fuente que dice ser",
        "explicacion": "En comunicaciones únicas, la autenticación garantiza el origen legítimo del mensaje."
      },
      {
        "pregunta": "¿Qué asegura la autenticación en una interacción continua?",
        "respuestas": [
          "Que los datos se cifran constantemente",
          "Que las entidades son auténticas y la conexión no se ha interferido",
          "Que los mensajes son reenviados automáticamente",
          "Que se usa el mismo protocolo en ambos extremos"
        ],
        "correcta": "Que las entidades son auténticas y la conexión no se ha interferido",
        "explicacion": "En una comunicación continua, la autenticación garantiza que las partes son legítimas y que no hay suplantación."
      },
      {
        "pregunta": "¿Qué define la autenticación de entidades del mismo nivel según X.800?",
        "respuestas": [
          "Verifica el origen de los datos enviados",
          "Corrobora la identidad de una entidad par durante una conexión o transferencia de datos",
          "Protege contra la duplicación de mensajes",
          "Evita la denegación de servicio"
        ],
        "correcta": "Corrobora la identidad de una entidad par durante una conexión o transferencia de datos",
        "explicacion": "Este tipo de autenticación garantiza que ambas entidades se reconocen mutuamente durante la comunicación."
      },
      {
        "pregunta": "¿Qué proporciona la autenticación de origen de datos?",
        "respuestas": [
          "Protección contra duplicación o modificación de unidades de datos",
          "Corroboración de la fuente de una unidad de datos",
          "Protección contra ataques de denegación de servicio",
          "Verificación de contraseñas"
        ],
        "correcta": "Corroboración de la fuente de una unidad de datos",
        "explicacion": "Este servicio confirma que los datos provienen de la fuente legítima, aunque no protege contra su duplicación o alteración."
      },
      {
        "pregunta": "¿Qué es el control de acceso?",
        "respuestas": [
          "La capacidad de cifrar los datos transmitidos en una red",
          "La capacidad de limitar y controlar el acceso a los sistemas y aplicaciones",
          "Un mecanismo para autenticar la identidad de los usuarios",
          "Un método para detectar intrusiones en el sistema"
        ],
        "correcta": "La capacidad de limitar y controlar el acceso a los sistemas y aplicaciones",
        "explicacion": "El control de acceso permite restringir quién puede usar los recursos de un sistema y bajo qué condiciones."
      },
      {
        "pregunta": "¿Qué debe ocurrir antes de conceder el acceso a una entidad según el control de acceso?",
        "respuestas": [
          "Debe ser identificada o autenticada",
          "Debe registrar sus intentos de acceso",
          "Debe firmar digitalmente su conexión",
          "Debe cifrar los datos antes de enviarlos"
        ],
        "correcta": "Debe ser identificada o autenticada",
        "explicacion": "El control de acceso requiere identificar o autenticar a cada entidad para adaptar sus derechos de acceso."
      },
      {
        "pregunta": "¿Cuál es el objetivo de la confidencialidad de datos?",
        "respuestas": [
          "Proteger los datos contra ataques pasivos",
          "Evitar la duplicación de mensajes",
          "Garantizar la autenticación de las entidades",
          "Controlar la disponibilidad del sistema"
        ],
        "correcta": "Proteger los datos contra ataques pasivos",
        "explicacion": "La confidencialidad protege la información transmitida para que no sea leída o analizada por atacantes."
      },
      {
        "pregunta": "¿Qué protege el servicio más amplio de confidencialidad?",
        "respuestas": [
          "Solo los mensajes individuales entre dos usuarios",
          "Los datos de usuario transmitidos durante un período de tiempo",
          "Los archivos almacenados en el sistema",
          "Las claves de autenticación"
        ],
        "correcta": "Los datos de usuario transmitidos durante un período de tiempo",
        "explicacion": "El servicio amplio protege toda la información transmitida entre dos usuarios durante una sesión."
      },
      {
        "pregunta": "¿Qué protege la forma más restringida de confidencialidad?",
        "respuestas": [
          "Todos los datos de usuario de una sesión",
          "Un solo mensaje o campos específicos dentro de un mensaje",
          "El flujo completo de comunicaciones",
          "El acceso físico al sistema"
        ],
        "correcta": "Un solo mensaje o campos específicos dentro de un mensaje",
        "explicacion": "El servicio restringido se centra en proteger solo una parte o mensaje específico dentro de la comunicación."
      },
      {
        "pregunta": "¿Qué implica la protección del flujo de tráfico en la confidencialidad?",
        "respuestas": [
          "Evitar que un atacante observe el origen, destino o frecuencia del tráfico",
          "Evitar la pérdida de paquetes en la transmisión",
          "Asegurar la autenticación de los mensajes",
          "Cifrar únicamente los encabezados de los mensajes"
        ],
        "correcta": "Evitar que un atacante observe el origen, destino o frecuencia del tráfico",
        "explicacion": "La protección del flujo de tráfico impide que el atacante analice patrones de comunicación para extraer información."
      },
      {
        "pregunta": "¿Cuál es el objetivo principal del servicio de integridad de datos?",
        "respuestas": [
          "Evitar la pérdida de disponibilidad",
          "Asegurar que los mensajes no sean modificados o duplicados durante la transmisión",
          "Proteger los datos contra ataques pasivos",
          "Garantizar la autenticación mutua"
        ],
        "correcta": "Asegurar que los mensajes no sean modificados o duplicados durante la transmisión",
        "explicacion": "La integridad garantiza que los datos lleguen tal como fueron enviados, sin alteraciones ni repeticiones."
      },
      {
        "pregunta": "¿Qué garantiza el servicio de integridad orientado a la conexión?",
        "respuestas": [
          "Que los mensajes sean cifrados",
          "Que los mensajes se reciban tal como se enviaron, sin duplicación o modificación",
          "Que el tráfico de red no sea analizado",
          "Que las entidades sean autenticadas"
        ],
        "correcta": "Que los mensajes se reciban tal como se enviaron, sin duplicación o modificación",
        "explicacion": "El servicio orientado a conexión protege un flujo de mensajes completo contra alteraciones y repeticiones."
      },
      {
        "pregunta": "¿Qué protege un servicio de integridad sin conexión?",
        "respuestas": [
          "Mensajes individuales frente a modificaciones",
          "Toda la comunicación entre dos usuarios",
          "Los encabezados de los paquetes de red",
          "La autenticación de usuarios"
        ],
        "correcta": "Mensajes individuales frente a modificaciones",
        "explicacion": "El servicio sin conexión garantiza la integridad de mensajes aislados, protegiéndolos de alteraciones."
      },
      {
        "pregunta": "¿Qué evita el servicio de no repudio?",
        "respuestas": [
          "Que el remitente o el receptor nieguen haber enviado o recibido un mensaje",
          "Que se dupliquen los mensajes transmitidos",
          "Que un atacante intercepte la comunicación",
          "Que se altere el flujo de datos en tránsito"
        ],
        "correcta": "Que el remitente o el receptor nieguen haber enviado o recibido un mensaje",
        "explicacion": "El no repudio impide que las partes involucradas nieguen su participación en una comunicación."
      },
      {
        "pregunta": "¿Qué puede probar el receptor en un servicio de no repudio?",
        "respuestas": [
          "Que el mensaje proviene de la fuente que dice ser",
          "Que el remitente envió realmente el mensaje",
          "Que el mensaje no fue interceptado",
          "Que el mensaje fue modificado"
        ],
        "correcta": "Que el remitente envió realmente el mensaje",
        "explicacion": "El receptor puede demostrar que el mensaje fue efectivamente enviado por el remitente legítimo."
      },
      {
        "pregunta": "¿Qué puede probar el remitente en un servicio de no repudio?",
        "respuestas": [
          "Que el receptor recibió el mensaje",
          "Que el mensaje no fue interceptado",
          "Que el mensaje fue firmado digitalmente",
          "Que el tráfico fue cifrado"
        ],
        "correcta": "Que el receptor recibió el mensaje",
        "explicacion": "El remitente puede probar que el receptor ha recibido correctamente el mensaje enviado."
      },
      {
        "pregunta": "¿Cuál es la finalidad del servicio de disponibilidad?",
        "respuestas": [
          "Proteger un sistema para garantizar su acceso y funcionamiento",
          "Proteger los mensajes frente a modificaciones",
          "Evitar que el tráfico de red sea analizado",
          "Identificar usuarios antes del acceso"
        ],
        "correcta": "Proteger un sistema para garantizar su acceso y funcionamiento",
        "explicacion": "La disponibilidad asegura que los recursos del sistema estén accesibles para los usuarios legítimos."
      },
      {
        "pregunta": "¿Qué tipo de ataques aborda el servicio de disponibilidad?",
        "respuestas": [
          "Ataques pasivos",
          "Ataques de denegación de servicio",
          "Ataques de repetición",
          "Ataques de suplantación"
        ],
        "correcta": "Ataques de denegación de servicio",
        "explicacion": "La disponibilidad protege el sistema frente a intentos de sobrecargar o interrumpir los servicios."
      },
      {
        "pregunta": "¿De qué depende la disponibilidad del sistema?",
        "respuestas": [
          "De la gestión y control adecuados de los recursos del sistema",
          "De la confidencialidad de los datos transmitidos",
          "De la autenticación de las entidades",
          "De la protección del flujo de tráfico"
        ],
        "correcta": "De la gestión y control adecuados de los recursos del sistema",
        "explicacion": "Una gestión eficiente y control de los recursos garantiza que el sistema siga operativo y disponible."
      },
      {
        "pregunta": "¿Qué distingue a los mecanismos criptográficos reversibles de los irreversibles?",
        "respuestas": [
          "Los reversibles permiten cifrar pero no descifrar los datos",
          "Los reversibles permiten cifrar y descifrar datos, mientras que los irreversibles no se pueden revertir",
          "Los irreversibles se utilizan solo en hardware",
          "Los reversibles solo se aplican en redes inalámbricas"
        ],
        "correcta": "Los reversibles permiten cifrar y descifrar datos, mientras que los irreversibles no se pueden revertir",
        "explicacion": "Los mecanismos criptográficos reversibles permiten recuperar la información original, mientras que los irreversibles (como hash) no."
      },
      {
        "pregunta": "¿Qué incluyen los mecanismos criptográficos irreversibles?",
        "respuestas": [
          "Algoritmos hash y códigos de autenticación de mensajes",
          "Cifrado simétrico y asimétrico",
          "Protocolos SSL/TLS",
          "Sistemas de autenticación biométrica"
        ],
        "correcta": "Algoritmos hash y códigos de autenticación de mensajes",
        "explicacion": "Estos mecanismos se usan en firma digital y autenticación de mensajes, sin permitir recuperar los datos originales."
      },
      {
        "pregunta": "¿Cuál es el objetivo de los mecanismos de integridad de datos?",
        "respuestas": [
          "Garantizar la confidencialidad de la información",
          "Asegurar la autenticidad de los usuarios",
          "Garantizar la integridad de una unidad o flujo de datos",
          "Evitar el acceso no autorizado"
        ],
        "correcta": "Garantizar la integridad de una unidad o flujo de datos",
        "explicacion": "Estos mecanismos aseguran que los datos no se alteren durante la transmisión o almacenamiento."
      },
      {
        "pregunta": "¿Qué función cumple la firma digital?",
        "respuestas": [
          "Proteger los datos frente a duplicación",
          "Permitir al destinatario verificar el origen y la integridad de los datos",
          "Cifrar los mensajes antes de enviarlos",
          "Controlar el acceso a los sistemas"
        ],
        "correcta": "Permitir al destinatario verificar el origen y la integridad de los datos",
        "explicacion": "La firma digital demuestra la autenticidad y protege contra la falsificación de la información."
      },
      {
        "pregunta": "¿Cuál es la función del intercambio de autenticación?",
        "respuestas": [
          "Garantizar la integridad de los datos",
          "Proteger el flujo de tráfico",
          "Garantizar la identidad de una entidad mediante intercambio de información",
          "Controlar el acceso a los recursos"
        ],
        "correcta": "Garantizar la identidad de una entidad mediante intercambio de información",
        "explicacion": "Este mecanismo asegura que las entidades sean quienes dicen ser mediante intercambio autenticado."
      },
      {
        "pregunta": "¿En qué consiste el relleno de tráfico?",
        "respuestas": [
          "Insertar bits en los huecos del flujo de datos para frustrar el análisis de tráfico",
          "Comprimir la información antes de transmitirla",
          "Duplicar paquetes para aumentar la seguridad",
          "Aumentar el tamaño de los mensajes para evitar pérdida de datos"
        ],
        "correcta": "Insertar bits en los huecos del flujo de datos para frustrar el análisis de tráfico",
        "explicacion": "Este mecanismo impide que un atacante analice patrones o frecuencia en las comunicaciones."
      },
      {
        "pregunta": "¿Qué permite el control de enrutamiento?",
        "respuestas": [
          "Evitar el acceso físico no autorizado",
          "Seleccionar rutas seguras y cambiar el enrutamiento si se detecta una violación de seguridad",
          "Acelerar la transmisión de datos en la red",
          "Reducir la redundancia en los nodos de comunicación"
        ],
        "correcta": "Seleccionar rutas seguras y cambiar el enrutamiento si se detecta una violación de seguridad",
        "explicacion": "Este control protege la transmisión de datos permitiendo ajustar las rutas en caso de sospechas de intrusión."
      },
      {
        "pregunta": "¿Qué implica la notarización?",
        "respuestas": [
          "Registrar los accesos de cada usuario",
          "Usar un tercero de confianza para asegurar propiedades de un intercambio de datos",
          "Aplicar firmas digitales en todos los mensajes",
          "Comprimir y cifrar los datos antes de su envío"
        ],
        "correcta": "Usar un tercero de confianza para asegurar propiedades de un intercambio de datos",
        "explicacion": "La notarización añade una capa de confianza externa para verificar la validez de las transacciones."
      },
      {
        "pregunta": "¿Qué busca el control de acceso dentro de los mecanismos de seguridad?",
        "respuestas": [
          "Asegurar la disponibilidad de los recursos",
          "Limitar y gestionar los derechos de acceso a los recursos",
          "Evitar la duplicación de datos",
          "Cifrar los mensajes entre usuarios"
        ],
        "correcta": "Limitar y gestionar los derechos de acceso a los recursos",
        "explicacion": "El control de acceso define quién puede usar qué recursos y bajo qué condiciones."
      },
      {
        "pregunta": "¿Cuál es el propósito de la concienciación y capacitación en los requisitos de seguridad?",
        "respuestas": [
          "Formar al personal en los riesgos y responsabilidades de seguridad",
          "Garantizar el cifrado de todas las comunicaciones",
          "Reducir el tráfico de red no autorizado",
          "Optimizar los tiempos de respuesta del sistema"
        ],
        "correcta": "Formar al personal en los riesgos y responsabilidades de seguridad",
        "explicacion": "Este requisito busca que los usuarios comprendan los riesgos y sus responsabilidades respecto a la seguridad."
      },
      {
        "pregunta": "¿Qué garantiza la auditoría y responsabilidad?",
        "respuestas": [
          "Que las acciones de los usuarios puedan rastrearse y se mantengan registros de auditoría",
          "Que los sistemas se actualicen automáticamente",
          "Que los datos se cifren de extremo a extremo",
          "Que se limite el acceso según el rol"
        ],
        "correcta": "Que las acciones de los usuarios puedan rastrearse y se mantengan registros de auditoría",
        "explicacion": "Permite monitorear actividades e identificar a los usuarios responsables de acciones dentro del sistema."
      },
      {
        "pregunta": "¿Qué busca la certificación y acreditación en los sistemas de seguridad?",
        "respuestas": [
          "Autorizar, evaluar y supervisar los controles de seguridad de forma continua",
          "Evitar la duplicación de mensajes",
          "Asegurar la confidencialidad mediante cifrado",
          "Reducir el uso de contraseñas"
        ],
        "correcta": "Autorizar, evaluar y supervisar los controles de seguridad de forma continua",
        "explicacion": "Este proceso garantiza que los controles sean efectivos y se mantengan actualizados para reducir vulnerabilidades."
      },
      {
        "pregunta": "¿Qué abarca la gestión de configuración como requisito de seguridad?",
        "respuestas": [
          "Mantener configuraciones e inventarios de referencia actualizados y seguros",
          "Restringir la duplicación de datos entre sistemas",
          "Controlar el acceso físico a los servidores",
          "Auditar los cambios en los protocolos de red"
        ],
        "correcta": "Mantener configuraciones e inventarios de referencia actualizados y seguros",
        "explicacion": "La gestión de configuración asegura que las configuraciones del sistema estén documentadas y protegidas durante su ciclo de vida."
      },
      {
        "pregunta": "¿Cuál es el objetivo principal de la planificación de contingencias?",
        "respuestas": [
          "Garantizar la disponibilidad y continuidad de las operaciones en situaciones de emergencia",
          "Reducir el tamaño de los sistemas de información",
          "Aumentar la velocidad de transmisión de datos",
          "Limitar el acceso físico a los servidores"
        ],
        "correcta": "Garantizar la disponibilidad y continuidad de las operaciones en situaciones de emergencia",
        "explicacion": "La planificación de contingencias busca establecer planes de respaldo y recuperación que aseguren la continuidad operativa ante emergencias o desastres."
      },
      {
        "pregunta": "¿Qué función tiene la identificación y autenticación en los sistemas de información?",
        "respuestas": [
          "Verificar las identidades de usuarios, procesos o dispositivos antes de permitir el acceso",
          "Proteger los datos en tránsito mediante cifrado",
          "Eliminar vulnerabilidades del sistema",
          "Asegurar la disponibilidad del hardware"
        ],
        "correcta": "Verificar las identidades de usuarios, procesos o dispositivos antes de permitir el acceso",
        "explicacion": "Este requisito garantiza que solo las entidades autorizadas puedan acceder a los sistemas de información de la organización."
      },
      {
        "pregunta": "¿Cuál es una de las principales actividades de la respuesta al incidente?",
        "respuestas": [
          "Detectar, contener y recuperar ante incidentes de seguridad",
          "Actualizar los sistemas operativos de la organización",
          "Reducir el tamaño de la base de datos",
          "Optimizar la velocidad de red"
        ],
        "correcta": "Detectar, contener y recuperar ante incidentes de seguridad",
        "explicacion": "La respuesta al incidente incluye la detección, contención, recuperación y documentación de los incidentes para evitar su repetición."
      },
      {
        "pregunta": "¿Qué abarca la protección de medios?",
        "respuestas": [
          "Proteger soportes físicos y digitales, limitar acceso y destruir medios antes de su reutilización",
          "Proteger únicamente discos duros internos",
          "Restringir el acceso a usuarios administrativos",
          "Aumentar la capacidad de almacenamiento"
        ],
        "correcta": "Proteger soportes físicos y digitales, limitar acceso y destruir medios antes de su reutilización",
        "explicacion": "Busca garantizar que los soportes con información sensible estén protegidos y no se reutilicen sin eliminar correctamente los datos."
      },
      {
        "pregunta": "¿Qué objetivo tiene la protección física y ambiental?",
        "respuestas": [
          "Evitar el acceso no autorizado y proteger contra peligros ambientales",
          "Acelerar el mantenimiento del sistema",
          "Optimizar los tiempos de procesamiento de datos",
          "Mejorar la conectividad de red"
        ],
        "correcta": "Evitar el acceso no autorizado y proteger contra peligros ambientales",
        "explicacion": "Incluye medidas para limitar el acceso físico, proteger la infraestructura y controlar las condiciones ambientales."
      },
      {
        "pregunta": "¿Cuál es la finalidad principal de la planificación de seguridad?",
        "respuestas": [
          "Desarrollar y actualizar planes que describan controles de seguridad y comportamientos esperados",
          "Optimizar el hardware y reducir costos",
          "Incrementar el número de usuarios del sistema",
          "Aumentar la velocidad del procesamiento"
        ],
        "correcta": "Desarrollar y actualizar planes que describan controles de seguridad y comportamientos esperados",
        "explicacion": "La planificación define los controles y reglas de comportamiento necesarias para mantener la seguridad en la organización."
      },
      {
        "pregunta": "¿Qué garantiza el personal de seguridad dentro de una organización?",
        "respuestas": [
          "Que las personas con responsabilidades sean confiables y cumplan con los criterios de seguridad",
          "Que todos los usuarios tengan acceso administrativo",
          "Que los sistemas se reinicien automáticamente",
          "Que la red opere en modo seguro"
        ],
        "correcta": "Que las personas con responsabilidades sean confiables y cumplan con los criterios de seguridad",
        "explicacion": "El personal de seguridad debe ser confiable y cumplir con los requisitos de seguridad establecidos por la organización."
      },
      {
        "pregunta": "¿Qué busca la evaluación de riesgos?",
        "respuestas": [
          "Evaluar el impacto de los riesgos sobre la misión, activos y reputación de la organización",
          "Calcular la capacidad de almacenamiento de datos",
          "Optimizar los costos de mantenimiento",
          "Reducir el consumo energético del sistema"
        ],
        "correcta": "Evaluar el impacto de los riesgos sobre la misión, activos y reputación de la organización",
        "explicacion": "Permite determinar los riesgos asociados a la operación y el uso de los sistemas de información."
      },
      {
        "pregunta": "¿Qué garantiza la adquisición de sistemas y servicios?",
        "respuestas": [
          "Que los proveedores externos implementen medidas adecuadas de seguridad",
          "Que se reduzcan los costos de software",
          "Que el ciclo de vida de los sistemas sea más corto",
          "Que los servicios sean totalmente automatizados"
        ],
        "correcta": "Que los proveedores externos implementen medidas adecuadas de seguridad",
        "explicacion": "Este requisito asegura que tanto los sistemas internos como los servicios contratados mantengan niveles de seguridad apropiados."
      },
      {
        "pregunta": "¿Qué busca la protección de sistemas y comunicaciones?",
        "respuestas": [
          "Monitorear, controlar y proteger las comunicaciones dentro y fuera de los sistemas de información",
          "Limitar el ancho de banda disponible",
          "Incrementar la velocidad de red",
          "Reducir el tamaño de los paquetes transmitidos"
        ],
        "correcta": "Monitorear, controlar y proteger las comunicaciones dentro y fuera de los sistemas de información",
        "explicacion": "Este requisito busca asegurar que las comunicaciones estén protegidas frente a accesos o alteraciones no autorizadas."
      },
      {
        "pregunta": "¿Cuál es el propósito de la integridad del sistema y de la información?",
        "respuestas": [
          "Identificar y corregir fallos, proteger contra código malicioso y responder a alertas de seguridad",
          "Aumentar la capacidad de almacenamiento del sistema",
          "Optimizar el rendimiento de la red",
          "Reducir los tiempos de procesamiento"
        ],
        "correcta": "Identificar y corregir fallos, proteger contra código malicioso y responder a alertas de seguridad",
        "explicacion": "Garantiza la protección y mantenimiento continuo de la integridad del sistema y sus datos frente a errores o ataques."
      },
      {
        "pregunta": "¿Qué establece el principio de economía de mecanismo?",
        "respuestas": [
          "El diseño debe ser lo más simple y pequeño posible",
          "Los mecanismos deben ser complejos para evitar vulnerabilidades",
          "Debe incluir múltiples capas de cifrado por defecto",
          "El hardware debe tener prioridad sobre el software"
        ],
        "correcta": "El diseño debe ser lo más simple y pequeño posible",
        "explicacion": "Este principio busca simplicidad en los mecanismos de seguridad para facilitar su comprensión y reducir errores."
      },
      {
        "pregunta": "Según el principio de valores predeterminados a prueba de fallos, ¿cómo deben tomarse las decisiones de acceso?",
        "respuestas": [
          "Basadas en la exclusión en lugar del permiso",
          "Basadas en el permiso en lugar de la exclusión",
          "De forma aleatoria para evitar patrones",
          "Sin intervención del usuario"
        ],
        "correcta": "Basadas en el permiso en lugar de la exclusión",
        "explicacion": "Ante un fallo o duda, el sistema debe denegar el acceso, asegurando la protección en lugar de la exposición."
      },
      {
        "pregunta": "¿Qué exige el principio de mediación completa?",
        "respuestas": [
          "Verificar cada acceso mediante el mecanismo de control sin confiar en cachés",
          "Permitir accesos automáticos una vez autenticado el usuario",
          "Reducir las verificaciones para mejorar el rendimiento",
          "Guardar las decisiones de acceso en memoria"
        ],
        "correcta": "Verificar cada acceso mediante el mecanismo de control sin confiar en cachés",
        "explicacion": "Este principio evita que decisiones antiguas almacenadas permitan accesos indebidos."
      },
      {
        "pregunta": "¿Qué defiende el principio de diseño abierto?",
        "respuestas": [
          "Los mecanismos de seguridad deben ser secretos",
          "El diseño de seguridad debe ser abierto y no depender del secreto",
          "El acceso debe ser público para todos los usuarios",
          "El código fuente debe mantenerse cifrado"
        ],
        "correcta": "El diseño de seguridad debe ser abierto y no depender del secreto",
        "explicacion": "La seguridad no debe basarse en ocultar los mecanismos, sino en su robustez y buen diseño."
      },
      {
        "pregunta": "¿Qué implica el principio de separación de privilegios?",
        "respuestas": [
          "Autenticación multifactorial y separación de funciones críticas",
          "Permitir accesos con un solo nivel de privilegio",
          "Unificar los permisos de todos los usuarios",
          "Reducir los controles de acceso"
        ],
        "correcta": "Autenticación multifactorial y separación de funciones críticas",
        "explicacion": "Requiere múltiples condiciones o factores para acceder a recursos importantes, evitando abusos de privilegios."
      },
      {
        "pregunta": "¿Cuál es el objetivo del principio de privilegios mínimos?",
        "respuestas": [
          "Permitir a cada usuario todos los permisos posibles",
          "Asignar a cada usuario o proceso solo los privilegios necesarios para su tarea",
          "Usar configuraciones predeterminadas sin restricción",
          "Evitar la autenticación de usuarios"
        ],
        "correcta": "Asignar a cada usuario o proceso solo los privilegios necesarios para su tarea",
        "explicacion": "Reduce el impacto de errores o ataques al limitar los permisos a lo estrictamente necesario."
      },
      {
        "pregunta": "¿Qué busca el principio de mecanismo menos común?",
        "respuestas": [
          "Compartir funciones entre múltiples usuarios para mayor flexibilidad",
          "Minimizar las funciones compartidas por diferentes usuarios",
          "Reutilizar el máximo número de recursos",
          "Permitir que todos los usuarios accedan a los mismos mecanismos"
        ],
        "correcta": "Minimizar las funciones compartidas por diferentes usuarios",
        "explicacion": "Evita dependencias entre usuarios que puedan generar vulnerabilidades o accesos indebidos."
      },
      {
        "pregunta": "¿Qué establece el principio de aceptabilidad psicológica?",
        "respuestas": [
          "Los mecanismos de seguridad deben ser intuitivos y no interferir con el trabajo de los usuarios",
          "Los mecanismos deben ser estrictos sin importar su dificultad de uso",
          "La seguridad debe ser completamente invisible al usuario",
          "Los usuarios deben ser responsables del diseño de seguridad"
        ],
        "correcta": "Los mecanismos de seguridad deben ser intuitivos y no interferir con el trabajo de los usuarios",
        "explicacion": "Busca que las medidas de seguridad sean comprensibles, prácticas y no obstaculicen la productividad."
      },
      {
        "pregunta": "¿Qué implica el principio de aislamiento?",
        "respuestas": [
          "Separar los sistemas de acceso público de los recursos críticos",
          "Permitir el acceso compartido entre usuarios",
          "Eliminar la separación entre procesos",
          "Centralizar todos los servicios en un único servidor"
        ],
        "correcta": "Separar los sistemas de acceso público de los recursos críticos",
        "explicacion": "El aislamiento asegura que fallos o ataques en áreas públicas no comprometan sistemas esenciales."
      },
      {
        "pregunta": "¿Qué significa el principio de encapsulación en seguridad?",
        "respuestas": [
          "Agrupar datos y funciones dentro de un objeto aislado",
          "Combinar todas las funciones del sistema en un módulo único",
          "Dividir la seguridad entre distintos usuarios",
          "Evitar la programación orientada a objetos"
        ],
        "correcta": "Agrupar datos y funciones dentro de un objeto aislado",
        "explicacion": "La encapsulación protege la información interna y controla el acceso a los datos mediante interfaces seguras."
      },
      {
        "pregunta": "¿Qué promueve el principio de modularidad?",
        "respuestas": [
          "Diseñar mecanismos de seguridad mediante una arquitectura modular",
          "Integrar todos los mecanismos en un único módulo",
          "Reducir el número de módulos independientes",
          "Evitar el uso de estructuras repetitivas"
        ],
        "correcta": "Diseñar mecanismos de seguridad mediante una arquitectura modular",
        "explicacion": "La modularidad facilita la implementación, mantenimiento y análisis de seguridad de cada componente."
      },
      {
        "pregunta": "¿Qué busca el principio de capas?",
        "respuestas": [
          "Usar múltiples barreras de protección entre adversarios e información sensible",
          "Reducir las verificaciones de seguridad a una sola capa",
          "Fusionar la seguridad física y lógica en una sola medida",
          "Priorizar la rapidez sobre la protección"
        ],
        "correcta": "Usar múltiples barreras de protección entre adversarios e información sensible",
        "explicacion": "Este principio, también conocido como defensa en profundidad, añade niveles de seguridad redundantes."
      },
      {
        "pregunta": "¿Qué pretende el principio de menor asombro?",
        "respuestas": [
          "Que el sistema responda de forma predecible y coherente para el usuario",
          "Sorprender al usuario con nuevas funciones de seguridad",
          "Evitar que el usuario tenga control sobre la interfaz",
          "Desactivar notificaciones de seguridad para simplificar el uso"
        ],
        "correcta": "Que el sistema responda de forma predecible y coherente para el usuario",
        "explicacion": "El sistema debe comportarse de forma esperada, reduciendo confusión y errores por parte del usuario."
      },
      {
        "pregunta": "¿Qué son las superficies de ataque?",
        "respuestas": [
          "Zonas seguras dentro de un sistema",
          "Vulnerabilidades alcanzables y explotables en un sistema",
          "Protocolos de defensa perimetral",
          "Sistemas de autenticación biométrica"
        ],
        "correcta": "Vulnerabilidades alcanzables y explotables en un sistema",
        "explicacion": "Las superficies de ataque representan los puntos del sistema que pueden ser aprovechados por un atacante."
      },
      {
        "pregunta": "¿Cuál de los siguientes es un ejemplo de superficie de ataque?",
        "respuestas": [
          "Puertos abiertos en servidores web",
          "Contraseñas cifradas y seguras",
          "Copias de seguridad aisladas",
          "Uso de autenticación multifactor"
        ],
        "correcta": "Puertos abiertos en servidores web",
        "explicacion": "Los puertos abiertos o servicios expuestos pueden ser explotados como puntos de entrada al sistema."
      },
      {
        "pregunta": "¿Qué caracteriza a la superficie de ataque de red?",
        "respuestas": [
          "Vulnerabilidades en protocolos o infraestructuras de red",
          "Errores en la interfaz gráfica",
          "Problemas en el almacenamiento local",
          "Fallos en el comportamiento del usuario"
        ],
        "correcta": "Vulnerabilidades en protocolos o infraestructuras de red",
        "explicacion": "Incluye debilidades en redes empresariales, Internet o protocolos, susceptibles a ataques como DoS o interrupciones."
      },
      {
        "pregunta": "¿Qué define a la superficie de ataque de software?",
        "respuestas": [
          "Vulnerabilidades en el código de aplicaciones o sistemas operativos",
          "Fallos en la comunicación de red",
          "Errores humanos durante el desarrollo",
          "Configuraciones seguras de los servicios"
        ],
        "correcta": "Vulnerabilidades en el código de aplicaciones o sistemas operativos",
        "explicacion": "Estas vulnerabilidades se aprovechan especialmente en software de servidores web o sistemas críticos."
      },
      {
        "pregunta": "¿Qué describe mejor la superficie de ataque humana?",
        "respuestas": [
          "Vulnerabilidades causadas por ingeniería social o errores humanos",
          "Fallas en la configuración de firewall",
          "Defectos en hardware físico",
          "Problemas con los protocolos de red"
        ],
        "correcta": "Vulnerabilidades causadas por ingeniería social o errores humanos",
        "explicacion": "Los ataques que explotan el factor humano aprovechan descuidos, engaños o accesos internos mal gestionados."
      },
      {
        "pregunta": "¿Qué es una política de seguridad informática?",
        "respuestas": [
          "Conjunto de reglas y prácticas formales que regulan los servicios de seguridad de una organización",
          "Un protocolo de cifrado entre sistemas",
          "Un software de antivirus corporativo",
          "Una auditoría externa de seguridad"
        ],
        "correcta": "Conjunto de reglas y prácticas formales que regulan los servicios de seguridad de una organización",
        "explicacion": "La política de seguridad establece las normas que rigen la protección de los recursos y datos sensibles."
      },
      {
        "pregunta": "¿Cuáles son los cuatro procesos principales de la implementación de seguridad?",
        "respuestas": [
          "Prevención, Detección, Respuesta y Recuperación",
          "Prevención, Análisis, Control y Eliminación",
          "Autenticación, Cifrado, Validación y Backup",
          "Monitoreo, Evaluación, Protección y Respaldo"
        ],
        "correcta": "Prevención, Detección, Respuesta y Recuperación",
        "explicacion": "Estos procesos complementarios conforman el ciclo básico de la gestión de seguridad informática."
      },
      {
        "pregunta": "¿Qué representa la garantía en un sistema de seguridad?",
        "respuestas": [
          "Confianza en que el sistema aplica correctamente la política de seguridad",
          "Capacidad de recuperación ante desastres",
          "Actualización automática de los protocolos",
          "Auditorías externas periódicas"
        ],
        "correcta": "Confianza en que el sistema aplica correctamente la política de seguridad",
        "explicacion": "La garantía valida que el diseño e implementación del sistema cumplen los criterios de seguridad definidos."
      },
      {
        "pregunta": "¿Qué implica la evaluación en la estrategia de seguridad informática?",
        "respuestas": [
          "Examina un producto o sistema respecto a criterios de seguridad mediante pruebas y análisis formales",
          "Instala automáticamente los parches del sistema",
          "Controla la velocidad de red del sistema",
          "Evalúa la eficiencia energética del hardware"
        ],
        "correcta": "Examina un producto o sistema respecto a criterios de seguridad mediante pruebas y análisis formales",
        "explicacion": "La evaluación asegura que los sistemas cumplen estándares y funcionan según las políticas de seguridad."
      },
      {
        "pregunta": "¿Qué papel cumple el NIST en materia de seguridad?",
        "respuestas": [
          "Desarrollar estándares y tecnología de medición relacionados con la seguridad y la innovación",
          "Supervisar las redes internacionales de telecomunicaciones",
          "Regular los protocolos de Internet a nivel global",
          "Publicar normas ISO sobre ciberseguridad"
        ],
        "correcta": "Desarrollar estándares y tecnología de medición relacionados con la seguridad y la innovación",
        "explicacion": "El NIST es una agencia de EE.UU. que promueve la innovación y la seguridad mediante estándares técnicos."
      },
      {
        "pregunta": "¿Cuál es la función principal de la Sociedad de Internet (ISOC)?",
        "respuestas": [
          "Brindar liderazgo en problemas relacionados con el futuro de Internet y sus estándares",
          "Controlar las normas internacionales de calidad",
          "Regular la infraestructura de redes móviles",
          "Emitir licencias de telecomunicaciones"
        ],
        "correcta": "Brindar liderazgo en problemas relacionados con el futuro de Internet y sus estándares",
        "explicacion": "ISOC agrupa profesionales y organiza los grupos encargados de los estándares técnicos de Internet."
      },
      {
        "pregunta": "¿Qué función cumple la ITU-T dentro de los estándares internacionales?",
        "respuestas": [
          "Coordinar redes y servicios de telecomunicaciones globales",
          "Supervisar los estándares de hardware",
          "Definir los protocolos de software libre",
          "Emitir certificados de seguridad SSL"
        ],
        "correcta": "Coordinar redes y servicios de telecomunicaciones globales",
        "explicacion": "La ITU-T, dependiente de la ONU, coordina redes y servicios internacionales de telecomunicaciones."
      },
      {
        "pregunta": "¿Qué organiza la ISO dentro del ámbito de la seguridad?",
        "respuestas": [
          "Publica normas internacionales resultantes de acuerdos internacionales",
          "Supervisa la red mundial de telecomunicaciones",
          "Define los estándares del gobierno estadounidense",
          "Coordina la seguridad de redes privadas"
        ],
        "correcta": "Publica normas internacionales resultantes de acuerdos internacionales",
        "explicacion": "La ISO es una organización no gubernamental que crea normas internacionales basadas en consenso global."
      }

    ],
    "Tema 2": [
      {
        "pregunta": "¿Qué estudia la criptografía?",
        "respuestas": [
          "Las técnicas para transformar información legible en una forma ininteligible y viceversa",
          "Los métodos de almacenamiento de datos en servidores",
          "La compresión de archivos multimedia",
          "Los lenguajes de programación para la seguridad"
        ],
        "correcta": "Las técnicas para transformar información legible en una forma ininteligible y viceversa",
        "explicacion": "La criptografía se centra en proteger la confidencialidad e integridad de los datos mediante procesos de cifrado y descifrado."
      },
      {
        "pregunta": "¿Qué distingue al cifrado simétrico del asimétrico?",
        "respuestas": [
          "El cifrado simétrico usa la misma clave para cifrar y descifrar, mientras que el asimétrico usa claves diferentes",
          "El simétrico usa dos claves distintas y el asimétrico solo una",
          "El cifrado simétrico se aplica únicamente a contraseñas y el asimétrico a mensajes",
          "El asimétrico no requiere intercambio de claves"
        ],
        "correcta": "El cifrado simétrico usa la misma clave para cifrar y descifrar, mientras que el asimétrico usa claves diferentes",
        "explicacion": "En el cifrado simétrico, emisor y receptor comparten una clave secreta; en el asimétrico, se utilizan una clave pública y otra privada."
      },
      {
        "pregunta": "¿Qué requisito es esencial para un uso seguro del cifrado simétrico?",
        "respuestas": [
          "Un algoritmo de cifrado fuerte y un método seguro de distribución de la clave secreta",
          "Usar claves diferentes para cada mensaje aunque sean inseguras",
          "Compartir la clave públicamente para evitar pérdida de acceso",
          "Aplicar el mismo algoritmo a todos los usuarios sin cambios"
        ],
        "correcta": "Un algoritmo de cifrado fuerte y un método seguro de distribución de la clave secreta",
        "explicacion": "La seguridad del cifrado simétrico depende tanto de la fortaleza del algoritmo como de la confidencialidad de la clave compartida."
      },
      {
        "pregunta": "¿Qué caracteriza a un ataque criptoanalítico?",
        "respuestas": [
          "Aprovecha debilidades del algoritmo o patrones en los textos cifrados para deducir la clave o el texto plano",
          "Prueba todas las claves posibles hasta encontrar la correcta",
          "Se basa en ataques físicos a los dispositivos de cifrado",
          "Solo afecta a los sistemas de clave pública"
        ],
        "correcta": "Aprovecha debilidades del algoritmo o patrones en los textos cifrados para deducir la clave o el texto plano",
        "explicacion": "El criptoanálisis intenta romper un cifrado analizando las relaciones entre texto plano y cifrado, sin probar todas las claves."
      },
      {
        "pregunta": "¿Qué es un ataque de fuerza bruta en criptografía?",
        "respuestas": [
          "Probar todas las combinaciones posibles de clave hasta descifrar el mensaje",
          "Aprovechar un fallo lógico en el algoritmo de cifrado",
          "Interceptar mensajes y alterarlos durante la transmisión",
          "Utilizar ingeniería social para obtener la clave"
        ],
        "correcta": "Probar todas las combinaciones posibles de clave hasta descifrar el mensaje",
        "explicacion": "El ataque de fuerza bruta consiste en probar todas las posibles claves hasta encontrar la correcta; su éxito depende del tamaño de la clave."
      },
      {
        "pregunta": "¿Qué dos procesos fundamentales componen la criptografía?",
        "respuestas": [
          "Cifrado y descifrado",
          "Compresión y descompresión",
          "Codificación y ejecución",
          "Autenticación y registro"
        ],
        "correcta": "Cifrado y descifrado",
        "explicacion": "El cifrado convierte el texto claro en texto cifrado, y el descifrado realiza la operación inversa utilizando la clave adecuada."
      },
      {
        "pregunta": "¿Qué diferencia principal existe entre 'criptografía' y 'criptoanálisis'?",
        "respuestas": [
          "La criptografía diseña métodos de protección, mientras que el criptoanálisis intenta romperlos",
          "Ambas buscan ocultar la información de forma segura",
          "El criptoanálisis se usa para generar claves secretas",
          "La criptografía solo se aplica a datos binarios"
        ],
        "correcta": "La criptografía diseña métodos de protección, mientras que el criptoanálisis intenta romperlos",
        "explicacion": "El criptoanálisis estudia cómo vulnerar o debilitar los métodos de cifrado creados por la criptografía."
      },
      {
        "pregunta": "En el modelo básico de cifrado simétrico, ¿qué elementos intervienen?",
        "respuestas": [
          "Texto plano, algoritmo de cifrado, clave secreta y texto cifrado",
          "Texto plano, usuario, contraseña y mensaje de error",
          "Servidor, cliente y base de datos",
          "Texto cifrado, contraseña pública y token"
        ],
        "correcta": "Texto plano, algoritmo de cifrado, clave secreta y texto cifrado",
        "explicacion": "El modelo incluye al emisor que aplica un algoritmo con una clave secreta sobre el texto original para producir el mensaje cifrado."
      },
      {
        "pregunta": "¿Cuál es el propósito del 'algoritmo de cifrado' en un sistema simétrico?",
        "respuestas": [
          "Transformar el texto plano en un formato ilegible utilizando una clave compartida",
          "Reducir el tamaño del mensaje antes de enviarlo",
          "Convertir datos binarios en texto legible",
          "Cifrar las contraseñas del sistema operativo"
        ],
        "correcta": "Transformar el texto plano en un formato ilegible utilizando una clave compartida",
        "explicacion": "El algoritmo de cifrado aplica operaciones matemáticas sobre los datos para garantizar su confidencialidad."
      },
      {
        "pregunta": "¿Qué papel cumple la 'clave' en el cifrado simétrico?",
        "respuestas": [
          "Determina la transformación específica que aplica el algoritmo al texto plano",
          "Sirve solo como identificador de usuario",
          "Permite almacenar los mensajes cifrados en la base de datos",
          "Genera los certificados digitales de red"
        ],
        "correcta": "Determina la transformación específica que aplica el algoritmo al texto plano",
        "explicacion": "El algoritmo puede ser público, pero la seguridad depende de mantener la clave en secreto, ya que define la conversión entre texto claro y cifrado."
      },
      {
        "pregunta": "¿Por qué el cifrado simétrico requiere un canal seguro para el intercambio de claves?",
        "respuestas": [
          "Porque si la clave se intercepta, todo el sistema queda comprometido",
          "Porque las claves cambian cada segundo automáticamente",
          "Porque el cifrado no se puede aplicar sin conexión a Internet",
          "Porque las claves simétricas son visibles en el texto cifrado"
        ],
        "correcta": "Porque si la clave se intercepta, todo el sistema queda comprometido",
        "explicacion": "En el cifrado simétrico, la misma clave cifra y descifra. Si alguien la obtiene, podrá descifrar todos los mensajes protegidos con ella."
      },
      {
        "pregunta": "¿Qué característica hace que un algoritmo de cifrado sea considerado 'seguro'?",
        "respuestas": [
          "Que el mejor ataque posible requiera más recursos computacionales de los que son viables en la práctica",
          "Que utilice una clave secreta corta para mayor eficiencia",
          "Que oculte completamente su funcionamiento al público",
          "Que utilice siempre el mismo patrón de cifrado"
        ],
        "correcta": "Que el mejor ataque posible requiera más recursos computacionales de los que son viables en la práctica",
        "explicacion": "La seguridad práctica se mide por la imposibilidad de romper el cifrado en un tiempo razonable con la tecnología actual."
      },
      {
        "pregunta": "¿Qué diferencia hay entre un ataque de fuerza bruta y un ataque de criptoanálisis?",
        "respuestas": [
          "El criptoanálisis busca debilidades del algoritmo, mientras que la fuerza bruta prueba todas las claves posibles",
          "Ambos se basan en probar claves aleatorias sin criterio",
          "El criptoanálisis solo se aplica a algoritmos asimétricos",
          "La fuerza bruta depende del contenido del mensaje"
        ],
        "correcta": "El criptoanálisis busca debilidades del algoritmo, mientras que la fuerza bruta prueba todas las claves posibles",
        "explicacion": "El criptoanálisis aprovecha patrones matemáticos, mientras que la fuerza bruta es un método exhaustivo y más lento."
      },
      {
        "pregunta": "¿Qué tipo de ataque es más efectivo cuando el algoritmo tiene una debilidad estructural?",
        "respuestas": [
          "Criptoanálisis",
          "Fuerza bruta",
          "Ataque físico",
          "Ataque de denegación de servicio"
        ],
        "correcta": "Criptoanálisis",
        "explicacion": "El criptoanálisis se enfoca en analizar las relaciones internas del algoritmo para explotar sus vulnerabilidades sin necesidad de probar todas las claves."
      },
      {
        "pregunta": "¿Cómo puede mitigarse un ataque de fuerza bruta?",
        "respuestas": [
          "Usando claves más largas y aleatorias",
          "Utilizando algoritmos públicos",
          "Reutilizando claves antiguas",
          "Reduciendo el tamaño del mensaje cifrado"
        ],
        "correcta": "Usando claves más largas y aleatorias",
        "explicacion": "Cuanto mayor sea la longitud de la clave, más combinaciones posibles existen, aumentando exponencialmente el tiempo necesario para romperla."
      },
      {
        "pregunta": "¿Qué significa que un sistema de cifrado sea 'seguro computacionalmente'?",
        "respuestas": [
          "Que romper el cifrado requeriría un tiempo o recursos computacionales inalcanzables en la práctica",
          "Que el cifrado es imposible de romper en teoría",
          "Que el cifrado depende del secreto absoluto del algoritmo",
          "Que el cifrado solo puede ser roto con superordenadores cuánticos"
        ],
        "correcta": "Que romper el cifrado requeriría un tiempo o recursos computacionales inalcanzables en la práctica",
        "explicacion": "La seguridad computacional se basa en la dificultad práctica de romper el sistema, aunque en teoría sea posible."
      },
      {
        "pregunta": "¿Cuál es la principal diferencia entre un cifrado por bloques y un cifrado en flujo?",
        "respuestas": [
          "El cifrado por bloques procesa grupos de bits o bytes a la vez, mientras que el de flujo cifra bit a bit o byte a byte",
          "El cifrado por bloques solo funciona con texto, y el de flujo con audio o vídeo",
          "El cifrado de flujo requiere más memoria que el de bloques",
          "El cifrado por bloques no necesita clave secreta"
        ],
        "correcta": "El cifrado por bloques procesa grupos de bits o bytes a la vez, mientras que el de flujo cifra bit a bit o byte a byte",
        "explicacion": "El cifrado por bloques transforma bloques completos de datos con la misma clave, mientras que el de flujo genera un flujo continuo de bits cifrados."
      },
      {
        "pregunta": "¿Qué ventaja ofrece el cifrado en flujo frente al de bloques?",
        "respuestas": [
          "Permite cifrar datos en tiempo real, siendo ideal para transmisiones continuas como voz o vídeo",
          "Es más seguro en todos los contextos",
          "Requiere claves más cortas para obtener la misma seguridad",
          "Funciona mejor con grandes volúmenes de información almacenada"
        ],
        "correcta": "Permite cifrar datos en tiempo real, siendo ideal para transmisiones continuas como voz o vídeo",
        "explicacion": "Al trabajar bit a bit, el cifrado en flujo se adapta a entornos donde la latencia y la velocidad son prioritarias."
      },
      {
        "pregunta": "¿Cuál fue el algoritmo estándar de cifrado simétrico durante varias décadas antes de AES?",
        "respuestas": [
          "DES (Data Encryption Standard)",
          "RSA",
          "MD5",
          "Diffie-Hellman"
        ],
        "correcta": "DES (Data Encryption Standard)",
        "explicacion": "El DES fue adoptado como estándar por el gobierno de EE.UU. en 1977 y se usó ampliamente hasta que se consideró inseguro por su corta clave."
      },
      {
        "pregunta": "¿Qué longitud de clave utiliza el algoritmo DES?",
        "respuestas": [
          "56 bits efectivos",
          "64 bits efectivos",
          "128 bits",
          "256 bits"
        ],
        "correcta": "56 bits efectivos",
        "explicacion": "Aunque el bloque de datos es de 64 bits, la clave de DES solo tiene 56 bits útiles, lo que lo hace vulnerable a ataques de fuerza bruta modernos."
      },
      {
        "pregunta": "¿Qué mejora introduce el Triple DES (3DES) respecto al DES original?",
        "respuestas": [
          "Aplica el algoritmo DES tres veces con diferentes claves para aumentar la seguridad",
          "Duplica el tamaño de los bloques cifrados",
          "Elimina la necesidad de usar una clave secreta",
          "Utiliza una clave pública adicional"
        ],
        "correcta": "Aplica el algoritmo DES tres veces con diferentes claves para aumentar la seguridad",
        "explicacion": "3DES utiliza tres operaciones de cifrado y descifrado secuenciales para fortalecer la protección del algoritmo original."
      },
      {
        "pregunta": "¿Por qué el DES dejó de considerarse seguro?",
        "respuestas": [
          "Porque la longitud de su clave es demasiado corta frente a la capacidad de cálculo actual",
          "Porque se descubrió un fallo en su estructura de sustitución",
          "Porque requería hardware especializado para funcionar",
          "Porque solo funcionaba con cifrado por flujo"
        ],
        "correcta": "Porque la longitud de su clave es demasiado corta frente a la capacidad de cálculo actual",
        "explicacion": "Un ataque de fuerza bruta puede romper DES en pocas horas con hardware moderno, por eso fue reemplazado por AES."
      },
      {
        "pregunta": "¿Cuál es el estándar actual de cifrado simétrico recomendado por el NIST?",
        "respuestas": [
          "AES (Advanced Encryption Standard)",
          "RSA",
          "3DES",
          "SHA-256"
        ],
        "correcta": "AES (Advanced Encryption Standard)",
        "explicacion": "El AES sustituyó a DES y 3DES como el estándar oficial desde 2001 por su mayor seguridad y eficiencia."
      },
      {
        "pregunta": "¿Qué tamaños de clave soporta el algoritmo AES?",
        "respuestas": [
          "128, 192 y 256 bits",
          "56, 112 y 168 bits",
          "64 y 128 bits únicamente",
          "512 y 1024 bits"
        ],
        "correcta": "128, 192 y 256 bits",
        "explicacion": "AES puede trabajar con tres longitudes de clave diferentes, ofreciendo un equilibrio entre seguridad y rendimiento."
      },
      {
        "pregunta": "¿Qué característica distingue a AES frente a DES y 3DES?",
        "respuestas": [
          "Utiliza una estructura más eficiente basada en sustitución y permutación sobre bloques de 128 bits",
          "Requiere una clave pública adicional para descifrar",
          "Funciona mediante operaciones aritméticas modulares simples",
          "Cifra datos únicamente en flujo, no en bloques"
        ],
        "correcta": "Utiliza una estructura más eficiente basada en sustitución y permutación sobre bloques de 128 bits",
        "explicacion": "AES combina rapidez, flexibilidad y alta resistencia criptoanalítica mediante un diseño optimizado para software y hardware."
      },
      {
        "pregunta": "¿Qué significa que un algoritmo de cifrado sea 'reversible'?",
        "respuestas": [
          "Que el texto cifrado puede volver a convertirse en texto original usando la clave adecuada",
          "Que la información cifrada se destruye tras un tiempo determinado",
          "Que el cifrado se realiza automáticamente sin clave",
          "Que no se puede recuperar el texto original bajo ninguna circunstancia"
        ],
        "correcta": "Que el texto cifrado puede volver a convertirse en texto original usando la clave adecuada",
        "explicacion": "En la criptografía simétrica, el proceso de cifrado y descifrado son reversibles, siempre que se use la misma clave."
      },
      {
        "pregunta": "¿Por qué el cifrado simétrico suele ser más rápido que el asimétrico?",
        "respuestas": [
          "Porque realiza operaciones matemáticas menos complejas y no requiere gestión de pares de claves",
          "Porque no necesita autenticación del emisor",
          "Porque no protege la confidencialidad de los datos",
          "Porque depende de hardware especializado"
        ],
        "correcta": "Porque realiza operaciones matemáticas menos complejas y no requiere gestión de pares de claves",
        "explicacion": "Los algoritmos simétricos usan transformaciones directas sobre bloques de datos, lo que permite un cifrado rápido ideal para grandes volúmenes de información."
      },
      {
        "pregunta": "¿Qué tipo de estructura utiliza el algoritmo DES?",
        "respuestas": [
          "Una red de Feistel con 16 rondas de operaciones",
          "Un árbol binario de sustitución simple",
          "Un flujo lineal sin retroalimentación",
          "Una permutación aleatoria sin iteraciones"
        ],
        "correcta": "Una red de Feistel con 16 rondas de operaciones",
        "explicacion": "DES aplica 16 rondas de sustitución y permutación siguiendo el esquema Feistel, que permite cifrado y descifrado con la misma estructura lógica."
      },
      {
        "pregunta": "¿Cuál es una desventaja práctica del Triple DES (3DES)?",
        "respuestas": [
          "Su lentitud respecto a otros algoritmos modernos debido a sus tres fases de cifrado",
          "La imposibilidad de usarlo en hardware",
          "Que no permite reutilizar claves entre sesiones",
          "Que no ofrece compatibilidad con DES"
        ],
        "correcta": "Su lentitud respecto a otros algoritmos modernos debido a sus tres fases de cifrado",
        "explicacion": "Aunque más seguro que DES, 3DES triplica el tiempo de procesamiento, lo que lo hace ineficiente en comparación con AES."
      },
      {
        "pregunta": "¿Por qué se considera a AES más seguro y eficiente que 3DES?",
        "respuestas": [
          "Porque tiene claves más largas, estructura más robusta y mejor rendimiento en software y hardware",
          "Porque usa el mismo número de rondas con menos pasos matemáticos",
          "Porque no utiliza claves secretas",
          "Porque es exclusivo para entornos gubernamentales"
        ],
        "correcta": "Porque tiene claves más largas, estructura más robusta y mejor rendimiento en software y hardware",
        "explicacion": "AES se diseñó como sucesor de 3DES, con una estructura Rijndael resistente a ataques y adaptable a diferentes tamaños de clave."
      },
      {
        "pregunta": "¿Qué sucede si dos bloques idénticos de texto se cifran con el mismo algoritmo y la misma clave en modo ECB?",
        "respuestas": [
          "Los bloques cifrados resultantes serán idénticos, revelando patrones en los datos",
          "Los bloques cifrados serán distintos por el efecto de permutación",
          "El sistema generará un error por redundancia",
          "El texto se cifrará solo parcialmente"
        ],
        "correcta": "Los bloques cifrados resultantes serán idénticos, revelando patrones en los datos",
        "explicacion": "Esto demuestra la vulnerabilidad del modo ECB: no oculta patrones repetitivos, por lo que no se recomienda en datos estructurados o imágenes."
      },
      {
        "pregunta": "¿Qué propiedad de AES le permite ser eficiente en hardware y software?",
        "respuestas": [
          "Su diseño basado en sustitución y permutación con operaciones aritméticas simples sobre bytes",
          "Su dependencia de operaciones exponenciales complejas",
          "El uso de múltiples claves por bloque cifrado",
          "La necesidad de un canal seguro para cada bit transmitido"
        ],
        "correcta": "Su diseño basado en sustitución y permutación con operaciones aritméticas simples sobre bytes",
        "explicacion": "AES fue diseñado para ser altamente eficiente mediante operaciones matemáticas modulares y lógicas fácilmente implementables en cualquier entorno."
      },
      {
        "pregunta": "¿Qué relación hay entre el tamaño de la clave y la seguridad del cifrado?",
        "respuestas": [
          "A mayor tamaño de clave, más difícil resulta romper el cifrado por fuerza bruta",
          "A mayor tamaño de clave, menor es la seguridad del algoritmo",
          "La seguridad depende solo del algoritmo, no del tamaño de la clave",
          "Las claves largas hacen el sistema más rápido"
        ],
        "correcta": "A mayor tamaño de clave, más difícil resulta romper el cifrado por fuerza bruta",
        "explicacion": "El tamaño de la clave determina el número de combinaciones posibles; duplicar los bits multiplica exponencialmente la dificultad del ataque."
      },
      {
        "pregunta": "¿Por qué existen diferentes modos de operación en el cifrado por bloques?",
        "respuestas": [
          "Porque un mismo algoritmo de cifrado puede comportarse de forma distinta según cómo se apliquen los bloques y las dependencias entre ellos",
          "Porque cada modo utiliza un algoritmo distinto de cifrado",
          "Porque los modos solo se aplican al cifrado asimétrico",
          "Porque el tamaño del bloque cambia aleatoriamente en cada modo"
        ],
        "correcta": "Porque un mismo algoritmo de cifrado puede comportarse de forma distinta según cómo se apliquen los bloques y las dependencias entre ellos",
        "explicacion": "Los modos de operación definen cómo se cifran y encadenan los bloques, afectando la seguridad, paralelismo y propagación de errores."
      },
      {
        "pregunta": "¿Qué característica define al modo ECB (Electronic Code Book)?",
        "respuestas": [
          "Cada bloque de texto se cifra de forma independiente usando la misma clave",
          "Cada bloque se cifra mezclándose con el anterior mediante una operación XOR",
          "Los bloques se encadenan de forma aleatoria para mejorar la entropía",
          "El modo ECB utiliza una clave distinta para cada bloque"
        ],
        "correcta": "Cada bloque de texto se cifra de forma independiente usando la misma clave",
        "explicacion": "ECB cifra cada bloque por separado, lo que simplifica el procesamiento, pero deja patrones visibles en datos repetitivos."
      },
      {
        "pregunta": "¿Cuál es la principal desventaja del modo ECB?",
        "respuestas": [
          "Que bloques idénticos de texto producen bloques idénticos de cifrado, revelando patrones",
          "Que no permite el descifrado paralelo",
          "Que necesita un vector de inicialización para funcionar",
          "Que no puede reutilizar la misma clave"
        ],
        "correcta": "Que bloques idénticos de texto producen bloques idénticos de cifrado, revelando patrones",
        "explicacion": "Esto lo hace inseguro para datos estructurados o con repeticiones, como imágenes o bases de datos."
      },
      {
        "pregunta": "¿Qué mejora introduce el modo CBC (Cipher Block Chaining)?",
        "respuestas": [
          "Encadena los bloques de cifrado mezclando cada bloque de texto con el anterior mediante XOR y un vector de inicialización (IV)",
          "Aplica el cifrado tres veces por bloque para mayor seguridad",
          "Evita el uso de claves secretas",
          "Permite cifrar cada bloque de manera completamente independiente"
        ],
        "correcta": "Encadena los bloques de cifrado mezclando cada bloque de texto con el anterior mediante XOR y un vector de inicialización (IV)",
        "explicacion": "CBC añade dependencia entre bloques, de modo que un mismo texto producirá resultados diferentes si cambia el IV."
      },
      {
        "pregunta": "¿Qué papel cumple el vector de inicialización (IV) en el modo CBC?",
        "respuestas": [
          "Evitar que dos mensajes idénticos cifrados con la misma clave produzcan resultados iguales",
          "Reducir el tamaño de los bloques cifrados",
          "Acelerar la operación de cifrado",
          "Servir como clave adicional para el descifrado"
        ],
        "correcta": "Evitar que dos mensajes idénticos cifrados con la misma clave produzcan resultados iguales",
        "explicacion": "El IV introduce aleatoriedad inicial, rompiendo la simetría y aumentando la seguridad."
      },
      {
        "pregunta": "¿Qué ocurre si un bloque se corrompe durante la transmisión en el modo CBC?",
        "respuestas": [
          "Afecta al bloque actual y al siguiente al descifrar, propagando parcialmente el error",
          "Solo afecta al bloque actual sin impacto en los demás",
          "Hace ilegible todo el mensaje",
          "El sistema repite automáticamente el bloque"
        ],
        "correcta": "Afecta al bloque actual y al siguiente al descifrar, propagando parcialmente el error",
        "explicacion": "CBC propaga el error un bloque más allá, ya que cada bloque depende del anterior."
      },
      {
        "pregunta": "¿Qué diferencia principal tiene el modo CFB (Cipher Feedback) respecto al CBC?",
        "respuestas": [
          "Cifra flujos de bits o bytes en lugar de bloques completos, usando retroalimentación del cifrado anterior",
          "No utiliza vector de inicialización",
          "Solo se aplica a datos numéricos",
          "Opera exclusivamente en hardware"
        ],
        "correcta": "Cifra flujos de bits o bytes en lugar de bloques completos, usando retroalimentación del cifrado anterior",
        "explicacion": "CFB convierte un cifrador por bloques en uno de flujo, ideal para transmisiones en tiempo real o datos secuenciales."
      },
      {
        "pregunta": "¿Qué propiedad importante tiene el modo OFB (Output Feedback)?",
        "respuestas": [
          "No propaga errores: una alteración en un bloque afecta solo a los bits correspondientes",
          "Multiplica los errores en todos los bloques posteriores",
          "Requiere una clave distinta por bloque",
          "Usa un IV que cambia en cada iteración del descifrado"
        ],
        "correcta": "No propaga errores: una alteración en un bloque afecta solo a los bits correspondientes",
        "explicacion": "OFB genera una secuencia de claves pseudoaleatoria independiente del texto, lo que evita que errores en la transmisión afecten a bloques futuros."
      },
      {
        "pregunta": "¿Qué ventaja tiene el modo CTR (Counter) frente a los anteriores?",
        "respuestas": [
          "Permite cifrar y descifrar bloques de manera paralela al generar un contador de valores únicos para cada bloque",
          "Elimina la necesidad de un vector de inicialización",
          "Solo se puede usar para archivos de texto plano",
          "Depende del orden secuencial de los bloques"
        ],
        "correcta": "Permite cifrar y descifrar bloques de manera paralela al generar un contador de valores únicos para cada bloque",
        "explicacion": "CTR mejora la velocidad al permitir operaciones simultáneas y evita la dependencia entre bloques al usar contadores únicos."
      },
      {
        "pregunta": "¿Qué modos de cifrado son adecuados para transmisiones en tiempo real?",
        "respuestas": [
          "CFB, OFB y CTR",
          "ECB y CBC",
          "DES y AES",
          "RSA y Diffie-Hellman"
        ],
        "correcta": "CFB, OFB y CTR",
        "explicacion": "Estos modos funcionan en flujo continuo, permitiendo procesar los datos bit a bit o bloque a bloque sin esperar al mensaje completo."
      },
      {
        "pregunta": "¿Qué diferencia clave hay entre OFB y CTR?",
        "respuestas": [
          "OFB reutiliza la salida cifrada del bloque anterior, mientras que CTR genera valores únicos mediante un contador",
          "CTR depende de errores del canal para sincronizarse",
          "OFB requiere una clave distinta para cada bloque",
          "Ambos son idénticos en estructura y rendimiento"
        ],
        "correcta": "OFB reutiliza la salida cifrada del bloque anterior, mientras que CTR genera valores únicos mediante un contador",
        "explicacion": "CTR evita dependencias entre bloques, haciendo el cifrado más eficiente y paralelizable."
      },
      {
        "pregunta": "¿Cuál de los modos de cifrado es el menos recomendado para datos estructurados como imágenes o bases de datos?",
        "respuestas": [
          "ECB",
          "CBC",
          "CFB",
          "CTR"
        ],
        "correcta": "ECB",
        "explicacion": "ECB deja visibles los patrones de datos, lo que permite inferir información sobre el contenido original."
      },
      {
        "pregunta": "¿Por qué el modo CBC es más seguro que el modo ECB?",
        "respuestas": [
          "Porque introduce dependencia entre bloques mediante un vector de inicialización, evitando patrones repetidos",
          "Porque usa una clave diferente para cada bloque cifrado",
          "Porque reduce el tamaño del texto cifrado",
          "Porque requiere menos recursos computacionales"
        ],
        "correcta": "Porque introduce dependencia entre bloques mediante un vector de inicialización, evitando patrones repetidos",
        "explicacion": "CBC encadena los bloques, de forma que el resultado de uno afecta al siguiente. Así se rompe la repetición de patrones que sí ocurre en ECB."
      },
      {
        "pregunta": "¿Qué inconveniente tiene el modo CBC frente a otros modos como CTR?",
        "respuestas": [
          "No permite el cifrado y descifrado en paralelo debido a la dependencia entre bloques",
          "Es más vulnerable a ataques de fuerza bruta",
          "No utiliza un vector de inicialización",
          "Es incompatible con cifradores simétricos modernos"
        ],
        "correcta": "No permite el cifrado y descifrado en paralelo debido a la dependencia entre bloques",
        "explicacion": "CBC requiere procesar cada bloque en orden, lo que impide paralelizar operaciones y lo hace menos eficiente que CTR."
      },
      {
        "pregunta": "¿Qué ocurre si se reutiliza el mismo vector de inicialización (IV) con la misma clave en varios mensajes?",
        "respuestas": [
          "Se pueden detectar patrones y comprometer la seguridad del cifrado",
          "No tiene ningún efecto en la seguridad",
          "Aumenta la entropía del sistema",
          "Hace que los bloques se cifren de forma más rápida"
        ],
        "correcta": "Se pueden detectar patrones y comprometer la seguridad del cifrado",
        "explicacion": "El IV debe ser único para cada mensaje. Reutilizarlo permite a un atacante identificar relaciones entre textos cifrados con la misma clave."
      },
      {
        "pregunta": "¿En qué tipo de aplicaciones se usa frecuentemente el modo CTR?",
        "respuestas": [
          "En comunicaciones de alta velocidad o entornos donde se requiere procesamiento paralelo",
          "En almacenamiento de contraseñas locales",
          "En cifrado de mensajes cortos sin conexión",
          "En sistemas que no admiten vectores de inicialización"
        ],
        "correcta": "En comunicaciones de alta velocidad o entornos donde se requiere procesamiento paralelo",
        "explicacion": "El modo CTR permite cifrar bloques simultáneamente, lo que lo hace ideal para redes de alta capacidad y hardware multiproceso."
      },
      {
        "pregunta": "¿Cuál de los modos de operación es más adecuado cuando se necesita evitar completamente la propagación de errores?",
        "respuestas": [
          "OFB",
          "CBC",
          "ECB",
          "CFB"
        ],
        "correcta": "OFB",
        "explicacion": "OFB no propaga errores entre bloques, ya que el flujo de clave generado es independiente del texto cifrado anterior."
      },
      {
        "pregunta": "¿Qué tipo de sincronización requieren los modos CFB y OFB?",
        "respuestas": [
          "Deben mantener sincronizados emisor y receptor en el mismo punto del flujo cifrado",
          "No necesitan sincronización alguna",
          "Solo requieren sincronización al inicio de la transmisión",
          "Dependen del reloj del procesador para sincronizarse"
        ],
        "correcta": "Deben mantener sincronizados emisor y receptor en el mismo punto del flujo cifrado",
        "explicacion": "Ambos modos son de tipo flujo, por lo que cualquier pérdida o desalineación de bits entre emisor y receptor rompe la decodificación."
      },
      {
        "pregunta": "¿Qué característica comparte el modo CTR con los cifradores de flujo?",
        "respuestas": [
          "Ambos generan una secuencia pseudoaleatoria que se combina con el texto plano mediante XOR",
          "Ambos dependen de la longitud fija del bloque de datos",
          "Ambos requieren cifrar todos los datos antes de iniciar la transmisión",
          "Ambos utilizan claves diferentes para cada bloque"
        ],
        "correcta": "Ambos generan una secuencia pseudoaleatoria que se combina con el texto plano mediante XOR",
        "explicacion": "CTR genera una secuencia derivada de un contador cifrado con la clave, lo que lo asemeja al comportamiento de los cifradores de flujo."
      },
      {
        "pregunta": "¿Qué característica principal define al modo Libro de códigos electrónico (ECB)?",
        "respuestas": [
          "Cada bloque de texto sin formato de b bits se cifra con la misma clave",
          "Cada bloque de texto sin formato se cifra con una clave distinta",
          "El cifrado se hace bit a bit y no por bloques",
          "Mezcla cada bloque de texto con el bloque anterior cifrado"
        ],
        "correcta": "Cada bloque de texto sin formato de b bits se cifra con la misma clave",
        "explicacion": "La diapositiva de ECB indica que el texto sin formato utiliza b bits a la vez y cada bloque se cifra con la misma clave."
      },
      {
        "pregunta": "¿Por qué el modo ECB no es seguro para mensajes largos?",
        "respuestas": [
          "Porque el texto sin formato repetido se ve como texto cifrado repetido",
          "Porque utiliza tamaños de bloque variables",
          "Porque no usa ninguna clave de cifrado",
          "Porque siempre requiere varios algoritmos distintos"
        ],
        "correcta": "Porque el texto sin formato repetido se ve como texto cifrado repetido",
        "explicacion": "La diapositiva indica explícitamente que en ECB el texto sin formato repetido aparece como texto cifrado repetido, lo que filtra patrones en mensajes largos."
      },
      {
        "pregunta": "Según la diapositiva de ECB, ¿qué se necesita para superar sus deficiencias de seguridad?",
        "respuestas": [
          "Una técnica en la que el mismo bloque de texto plano, si se repite, produzca diferentes bloques de texto cifrado",
          "Una clave mucho más corta",
          "Eliminar el uso de bloques y cifrar solo bits individuales",
          "Usar siempre el mismo vector de inicialización"
        ],
        "correcta": "Una técnica en la que el mismo bloque de texto plano, si se repite, produzca diferentes bloques de texto cifrado",
        "explicacion": "El último punto de la diapositiva dice que para superar las deficiencias de ECB hace falta una técnica que genere bloques cifrados distintos incluso si el texto plano se repite."
      },
      {
        "pregunta": "¿Qué afirma la diapositiva 'Cipher Feedback Mode' sobre el tamaño de bloque b en DES y AES?",
        "respuestas": [
          "En DES b = 64 bits y en AES b = 128 bits",
          "En DES b = 128 bits y en AES b = 64 bits",
          "En ambos casos b = 64 bits",
          "En ambos casos b = 128 bits"
        ],
        "correcta": "En DES b = 64 bits y en AES b = 128 bits",
        "explicacion": "La diapositiva indica explícitamente que para DES el bloque es de 64 bits y para AES el bloque es de 128 bits."
      },
      {
        "pregunta": "¿Qué función general tienen los modos CFB, OFB y CTR según la diapositiva 'Cipher Feedback Mode'?",
        "respuestas": [
          "Permiten convertir un cifrado de bloques en un cifrado de flujo",
          "Permiten aumentar el tamaño de bloque b",
          "Sirven únicamente para autenticación de mensajes",
          "Eliminan la necesidad de usar claves secretas"
        ],
        "correcta": "Permiten convertir un cifrado de bloques en un cifrado de flujo",
        "explicacion": "La diapositiva dice que hay tres modos (CFB, OFB y CTR) que permiten convertir un cifrado de bloques en un cifrado de flujo."
      },
      {
        "pregunta": "¿Cuál de los siguientes modos aparece listado en la diapositiva 'Cipher Feedback Mode' como modo que convierte un cifrado de bloques en uno de flujo?",
        "respuestas": [
          "Cipher feedback (CFB) mode",
          "Electronic Codebook (ECB) mode",
          "Cipher Block Chaining (CBC) mode",
          "Cipher-based MAC (CMAC) mode"
        ],
        "correcta": "Cipher feedback (CFB) mode",
        "explicacion": "En la diapositiva se enumeran explícitamente CFB, OFB y CTR como modos que convierten un cifrado de bloques en uno de flujo."
      },
      {
        "pregunta": "Según la diapositiva 'Ventajas de CTR', ¿cuál de las siguientes es una ventaja del modo CTR?",
        "respuestas": [
          "Eficiencia del hardware",
          "Dependencia fuerte entre todos los bloques",
          "Complejidad extrema de implementación",
          "Imposibilidad de preprocesar datos"
        ],
        "correcta": "Eficiencia del hardware",
        "explicacion": "En la diapositiva de 'Ventajas de CTR' se menciona explícitamente 'Eficiencia del hardware' como una de las ventajas."
      },
      {
        "pregunta": "¿Cuál de estas propiedades aparece en la lista de ventajas del modo CTR?",
        "respuestas": [
          "Preprocesamiento",
          "Propagación extensa de errores",
          "Necesidad de claves diferentes por bloque",
          "Ausencia de acceso aleatorio"
        ],
        "correcta": "Preprocesamiento",
        "explicacion": "La diapositiva 'Ventajas de CTR' enumera el preprocesamiento como una de las ventajas del modo CTR."
      },
      {
        "pregunta": "¿Qué ventaja del modo CTR está directamente relacionada con poder cifrar o descifrar bloques sin seguir un orden estrictamente secuencial?",
        "respuestas": [
          "Acceso aleatorio",
          "Eficiencia del software",
          "Seguridad demostrable",
          "Uso de bloques pequeños"
        ],
        "correcta": "Acceso aleatorio",
        "explicacion": "La diapositiva indica 'Acceso aleatorio' como una ventaja de CTR, lo que alude a poder trabajar con bloques sin seguir un orden rígido."
      },
      {
        "pregunta": "¿Cuál es el objetivo principal de la autenticación de mensajes?",
        "respuestas": [
          "Garantizar que un mensaje proviene del origen legítimo y no ha sido alterado",
          "Proteger el mensaje mediante cifrado para hacerlo ilegible",
          "Aumentar la velocidad de transmisión de datos",
          "Evitar la duplicación de claves en el sistema"
        ],
        "correcta": "Garantizar que un mensaje proviene del origen legítimo y no ha sido alterado",
        "explicacion": "La diapositiva indica que la autenticación de mensajes busca verificar tanto el origen del mensaje como su integridad."
      },
      {
        "pregunta": "¿Qué dos propiedades proporciona la autenticación de mensajes?",
        "respuestas": [
          "Autenticidad e integridad del mensaje",
          "Confidencialidad y disponibilidad",
          "Cifrado y descifrado",
          "Anonimato y redundancia"
        ],
        "correcta": "Autenticidad e integridad del mensaje",
        "explicacion": "El contenido de la diapositiva menciona que la autenticación de mensajes asegura que el emisor es quien dice ser y que el mensaje no ha sido modificado."
      },
      {
        "pregunta": "¿Qué se usa normalmente para implementar la autenticación de mensajes?",
        "respuestas": [
          "Una función hash o un código de autenticación de mensajes (MAC)",
          "Un algoritmo de cifrado asimétrico con dos claves públicas",
          "Un vector de inicialización (IV)",
          "Un contador aleatorio de bloques"
        ],
        "correcta": "Una función hash o un código de autenticación de mensajes (MAC)",
        "explicacion": "En la diapositiva se indican las funciones hash y los códigos MAC como herramientas habituales para la autenticación."
      },
      {
        "pregunta": "¿Qué diferencia hay entre autenticación de mensajes y confidencialidad?",
        "respuestas": [
          "La autenticación no oculta el contenido del mensaje, solo verifica su origen e integridad",
          "La autenticación cifra el mensaje, mientras que la confidencialidad lo autentica",
          "Ambas garantizan que el mensaje sea ilegible para terceros",
          "Son el mismo proceso dentro del cifrado simétrico"
        ],
        "correcta": "La autenticación no oculta el contenido del mensaje, solo verifica su origen e integridad",
        "explicacion": "La diapositiva 'Autenticación de mensajes sin confidencialidad' aclara que se puede autenticar sin necesidad de cifrar."
      },
      {
        "pregunta": "¿Cómo se puede autenticar un mensaje sin ofrecer confidencialidad?",
        "respuestas": [
          "Adjuntando un código MAC o un valor hash al mensaje transmitido sin cifrarlo",
          "Cifrando el mensaje con una clave pública",
          "Usando un vector de inicialización diferente en cada transmisión",
          "Dividiendo el mensaje en bloques y cifrando solo el primero"
        ],
        "correcta": "Adjuntando un código MAC o un valor hash al mensaje transmitido sin cifrarlo",
        "explicacion": "En este caso, el contenido se mantiene legible, pero se incluye un código que permite verificar su autenticidad e integridad."
      },
      {
        "pregunta": "¿Por qué la autenticación de mensajes sin confidencialidad puede ser suficiente en ciertos casos?",
        "respuestas": [
          "Porque el contenido no es sensible, pero es importante saber que no ha sido manipulado",
          "Porque siempre ofrece el mismo nivel de seguridad que el cifrado",
          "Porque reduce la carga de cifrado y descifrado",
          "Porque elimina la necesidad de claves secretas"
        ],
        "correcta": "Porque el contenido no es sensible, pero es importante saber que no ha sido manipulado",
        "explicacion": "Algunos mensajes no necesitan cifrado, pero sí requieren verificar su origen e integridad, como en la transmisión de logs o firmas digitales."
      },
      {
        "pregunta": "¿Qué propiedades debe tener una función hash H para ser útil en autenticación de mensajes?",
        "respuestas": [
          "Debe aceptar mensajes de cualquier longitud y producir una salida de longitud fija",
          "Debe generar claves aleatorias cada vez que se usa",
          "Debe funcionar solo con datos cifrados previamente",
          "Debe requerir una clave pública para calcular el valor"
        ],
        "correcta": "Debe aceptar mensajes de cualquier longitud y producir una salida de longitud fija",
        "explicacion": "La primera propiedad de la diapositiva establece que la función hash debe poder procesar cualquier mensaje y devolver un resumen de tamaño constante."
      },
      {
        "pregunta": "Según la diapositiva, ¿qué requisito se cumple si es 'computacionalmente fácil' encontrar el valor hash de un mensaje?",
        "respuestas": [
          "La función hash es eficiente para generar el resumen del mensaje",
          "La función hash es vulnerable a ataques de fuerza bruta",
          "El valor hash puede recuperarse sin conocer el mensaje",
          "Se requiere cifrado adicional para asegurar la integridad"
        ],
        "correcta": "La función hash es eficiente para generar el resumen del mensaje",
        "explicacion": "Una buena función hash debe ser fácil de calcular, incluso para mensajes largos, garantizando eficiencia."
      },
      {
        "pregunta": "¿Qué significa que una función hash sea resistente a preimagen?",
        "respuestas": [
          "Que es computacionalmente difícil encontrar un mensaje que produzca un hash determinado",
          "Que dos mensajes distintos generan el mismo valor hash",
          "Que el hash puede invertirse fácilmente",
          "Que el hash cambia cada vez que se calcula con la misma entrada"
        ],
        "correcta": "Que es computacionalmente difícil encontrar un mensaje que produzca un hash determinado",
        "explicacion": "Esta es una de las propiedades fundamentales de las funciones hash seguras: no debe ser posible deducir el mensaje original a partir del hash."
      },
      {
        "pregunta": "¿Qué significa que una función hash sea resistente a segunda preimagen?",
        "respuestas": [
          "Que es difícil encontrar otro mensaje diferente que produzca el mismo hash que uno dado",
          "Que el hash varía si se cambia un solo bit del mensaje",
          "Que el hash puede calcularse más rápido que otros algoritmos",
          "Que el hash siempre se guarda cifrado"
        ],
        "correcta": "Que es difícil encontrar otro mensaje diferente que produzca el mismo hash que uno dado",
        "explicacion": "La resistencia a segunda preimagen evita que un atacante genere un mensaje alternativo con el mismo resumen criptográfico."
      },
      {
        "pregunta": "¿Qué propiedad llamada 'resistencia a colisiones' deben cumplir las funciones hash seguras?",
        "respuestas": [
          "Que sea difícil encontrar dos mensajes distintos que produzcan el mismo valor hash",
          "Que los valores hash se parezcan visualmente",
          "Que el tamaño del hash sea mayor que el mensaje",
          "Que el hash siempre sea diferente para un mismo mensaje"
        ],
        "correcta": "Que sea difícil encontrar dos mensajes distintos que produzcan el mismo valor hash",
        "explicacion": "La resistencia a colisiones garantiza la unicidad práctica de los hashes, evitando falsificaciones o suplantaciones."
      },
      {
        "pregunta": "¿Por qué se considera que las funciones hash deben ser unidireccionales?",
        "respuestas": [
          "Porque no debe ser posible recuperar el mensaje original a partir del valor hash",
          "Porque el hash debe ser reversible en algunos casos",
          "Porque el hash se usa para cifrar y descifrar mensajes",
          "Porque el hash depende de una clave secreta"
        ],
        "correcta": "Porque no debe ser posible recuperar el mensaje original a partir del valor hash",
        "explicacion": "La propiedad de unidireccionalidad impide que un atacante derive el mensaje original desde el resumen calculado."
      },
      {
        "pregunta": "¿Qué riesgo existe si una función hash no es resistente a colisiones?",
        "respuestas": [
          "Un atacante podría crear dos mensajes distintos con el mismo hash y falsificar autenticaciones",
          "El sistema necesitaría almacenar hashes más largos",
          "Los mensajes cifrados serían más lentos de transmitir",
          "El hash podría cambiar con cada ejecución"
        ],
        "correcta": "Un atacante podría crear dos mensajes distintos con el mismo hash y falsificar autenticaciones",
        "explicacion": "Las colisiones permiten manipular mensajes o archivos sin cambiar su hash, lo que compromete la autenticidad."
      },
      {
        "pregunta": "¿Cuáles son los dos enfoques principales para atacar una función hash segura?",
        "respuestas": [
          "Criptoanálisis y ataque de fuerza bruta",
          "Fuerza bruta y cifrado simétrico",
          "Análisis estadístico y cifrado por bloques",
          "Compresión y descompresión"
        ],
        "correcta": "Criptoanálisis y ataque de fuerza bruta",
        "explicacion": "La diapositiva menciona dos enfoques: explotar debilidades lógicas del algoritmo (criptoanálisis) y probar todas las combinaciones posibles (fuerza bruta)."
      },
      {
        "pregunta": "¿De qué depende la fuerza de una función hash ante ataques de fuerza bruta?",
        "respuestas": [
          "De la longitud del código hash producido por el algoritmo",
          "Del número de usuarios que la utilicen",
          "De la velocidad de cálculo del procesador",
          "Del tipo de cifrado utilizado en conjunto"
        ],
        "correcta": "De la longitud del código hash producido por el algoritmo",
        "explicacion": "Cuanto más largo sea el código hash, más difícil resulta romperlo por fuerza bruta."
      },
      {
        "pregunta": "¿Cuál es el algoritmo hash más utilizado actualmente?",
        "respuestas": [
          "SHA",
          "MD5",
          "DES",
          "AES"
        ],
        "correcta": "SHA",
        "explicacion": "La diapositiva indica que SHA es el algoritmo hash más empleado en la práctica."
      },
      {
        "pregunta": "¿En qué aplicaciones adicionales se utilizan funciones hash seguras?",
        "respuestas": [
          "Almacenamiento de contraseñas y detección de intrusiones",
          "Cifrado de mensajes y compresión de archivos",
          "Compresión de datos y codificación de vídeo",
          "Transmisión de audio y control de acceso"
        ],
        "correcta": "Almacenamiento de contraseñas y detección de intrusiones",
        "explicacion": "La diapositiva menciona ambas aplicaciones: guardar hashes de contraseñas y detectar cambios en archivos mediante su valor hash."
      },
      {
        "pregunta": "¿Qué organización desarrolló originalmente el algoritmo SHA?",
        "respuestas": [
          "NIST",
          "NSA",
          "IEEE",
          "ISO"
        ],
        "correcta": "NIST",
        "explicacion": "SHA fue desarrollado por el NIST y publicado como estándar FIPS 180."
      },
      {
        "pregunta": "¿En qué año se publicó la primera versión del algoritmo SHA como FIPS 180?",
        "respuestas": [
          "1993",
          "1995",
          "2002",
          "2012"
        ],
        "correcta": "1993",
        "explicacion": "La diapositiva indica que el estándar FIPS 180 fue publicado en 1993."
      },
      {
        "pregunta": "¿Qué versión de SHA produce valores hash de 160 bits?",
        "respuestas": [
          "SHA-1",
          "SHA-2",
          "SHA-256",
          "SHA-3"
        ],
        "correcta": "SHA-1",
        "explicacion": "SHA-1 fue la versión revisada en 1995 y genera hashes de 160 bits."
      },
      {
        "pregunta": "¿Qué versiones de SHA introdujo la revisión FIPS 180-2 en 2002?",
        "respuestas": [
          "SHA-256, SHA-384 y SHA-512",
          "SHA-0 y SHA-1",
          "MD4 y MD5",
          "SHA-3 y Keccak"
        ],
        "correcta": "SHA-256, SHA-384 y SHA-512",
        "explicacion": "La revisión de 2002 añadió esas tres versiones con longitudes de hash de 256, 384 y 512 bits."
      },
      {
        "pregunta": "¿Por qué se inició el desarrollo del algoritmo SHA-3?",
        "respuestas": [
          "Por la posibilidad de que SHA-2 se vuelva vulnerable en el futuro",
          "Porque SHA-1 no alcanzaba 512 bits de salida",
          "Para sustituir el uso de MD5 en sistemas antiguos",
          "Por la necesidad de reducir el tamaño de los hashes"
        ],
        "correcta": "Por la posibilidad de que SHA-2 se vuelva vulnerable en el futuro",
        "explicacion": "NIST organizó un concurso en 2007 para crear SHA-3 como alternativa en caso de que SHA-2 fuera comprometido."
      },
      {
        "pregunta": "¿Qué requisito debía cumplir SHA-3 según el concurso del NIST?",
        "respuestas": [
          "Admitir longitudes de valores hash de 224, 256, 384 y 512 bits",
          "Utilizar la misma estructura que SHA-2",
          "Depender de claves secretas para funcionar",
          "Generar hashes de longitud variable según el mensaje"
        ],
        "correcta": "Admitir longitudes de valores hash de 224, 256, 384 y 512 bits",
        "explicacion": "Uno de los requisitos del NIST para SHA-3 era soportar múltiples tamaños de salida para adaptarse a distintos niveles de seguridad."
      },
      {
        "pregunta": "¿Por qué se decidió crear HMAC?",
        "respuestas": [
          "Para desarrollar un código MAC basado en funciones hash criptográficas",
          "Para reemplazar las funciones hash tradicionales como SHA",
          "Para acelerar el cifrado simétrico",
          "Para eliminar la necesidad de claves secretas"
        ],
        "correcta": "Para desarrollar un código MAC basado en funciones hash criptográficas",
        "explicacion": "El objetivo de HMAC era crear un código de autenticación (MAC) derivado de un hash, combinándolo con una clave secreta."
      },
      {
        "pregunta": "¿Por qué SHA no puede usarse directamente como MAC?",
        "respuestas": [
          "Porque no depende de una clave secreta",
          "Porque genera hashes demasiado largos",
          "Porque no soporta claves públicas",
          "Porque su ejecución es demasiado lenta"
        ],
        "correcta": "Porque no depende de una clave secreta",
        "explicacion": "SHA está diseñado como función hash general, no como mecanismo de autenticación, ya que no usa claves."
      },
      {
        "pregunta": "¿En qué protocolos se utiliza HMAC?",
        "respuestas": [
          "En TLS y en Transacción Electrónica Segura (SET)",
          "En HTTP y FTP",
          "En MD5 y DES",
          "En VPN y SSH exclusivamente"
        ],
        "correcta": "En TLS y en Transacción Electrónica Segura (SET)",
        "explicacion": "La diapositiva indica que HMAC se usa en protocolos de seguridad como TLS y SET."
      },
      {
        "pregunta": "¿Cuál es uno de los objetivos de diseño de HMAC?",
        "respuestas": [
          "Utilizar las funciones hash existentes sin modificarlas",
          "Aumentar el tamaño de las claves de cifrado",
          "Requerir un hardware específico para su uso",
          "Eliminar la compatibilidad con funciones hash antiguas"
        ],
        "correcta": "Utilizar las funciones hash existentes sin modificarlas",
        "explicacion": "Uno de los propósitos de diseño de HMAC es usar funciones hash estándar como SHA o MD5 sin alterarlas."
      },
      {
        "pregunta": "¿Qué busca HMAC respecto al rendimiento de las funciones hash?",
        "respuestas": [
          "Preservar su rendimiento sin degradación significativa",
          "Duplicar el tiempo de procesamiento",
          "Reducir el tamaño de las salidas hash",
          "Desactivar la reutilización de funciones hash"
        ],
        "correcta": "Preservar su rendimiento sin degradación significativa",
        "explicacion": "Uno de sus objetivos es mantener la eficiencia de las funciones hash originales al integrarlas en HMAC."
      },
      {
        "pregunta": "¿Qué otro objetivo de HMAC facilita su adaptación a diferentes sistemas?",
        "respuestas": [
          "Permitir una fácil sustitución de la función hash integrada si se encuentra una versión más segura o rápida",
          "Requerir siempre la misma función hash en todos los contextos",
          "Evitar el uso de claves en entornos distribuidos",
          "Limitar su uso a mensajes cortos"
        ],
        "correcta": "Permitir una fácil sustitución de la función hash integrada si se encuentra una versión más segura o rápida",
        "explicacion": "El diseño de HMAC es modular, lo que facilita cambiar la función hash si surgen vulnerabilidades o se desarrollan alternativas más eficientes."
      },
      {
        "pregunta": "¿De qué depende la seguridad de HMAC?",
        "respuestas": [
          "De la solidez criptográfica de la función hash subyacente",
          "Del tamaño de la clave pública usada",
          "Del número de bloques de datos procesados",
          "De la velocidad de cálculo del algoritmo"
        ],
        "correcta": "De la solidez criptográfica de la función hash subyacente",
        "explicacion": "La seguridad de HMAC proviene directamente de la resistencia y calidad de la función hash que utiliza."
      },
      {
        "pregunta": "¿Qué característica hace atractivo el diseño de HMAC?",
        "respuestas": [
          "Existe una relación exacta entre la fuerza de la función hash usada y la fuerza del propio HMAC",
          "Permite cifrar mensajes sin necesidad de una clave",
          "Evita completamente los ataques por colisiones",
          "No requiere depender de la función hash interna"
        ],
        "correcta": "Existe una relación exacta entre la fuerza de la función hash usada y la fuerza del propio HMAC",
        "explicacion": "El diseño de HMAC garantiza una correspondencia clara entre la seguridad del hash interno y la del resultado final."
      },
      {
        "pregunta": "¿Qué tipo de ataque equivaldría a romper la seguridad de HMAC?",
        "respuestas": [
          "Encontrar colisiones o calcular una salida de la función hash incluso con IV aleatorio y secreto",
          "Interceptar la clave pública en una comunicación",
          "Forzar una clave simétrica mediante ataques por diccionario",
          "Descifrar el mensaje sin conocer el algoritmo hash"
        ],
        "correcta": "Encontrar colisiones o calcular una salida de la función hash incluso con IV aleatorio y secreto",
        "explicacion": "La diapositiva indica que un ataque exitoso contra HMAC equivale a vulnerar la función hash en la que se basa."
      },
      {
        "pregunta": "¿Qué objetivo tiene la distribución de claves en criptografía?",
        "respuestas": [
          "Entregar una clave a dos partes que desean intercambiar datos sin que terceros la vean",
          "Comprimir las claves para ahorrar espacio en el sistema",
          "Cifrar mensajes con diferentes funciones hash",
          "Proteger contraseñas mediante almacenamiento local"
        ],
        "correcta": "Entregar una clave a dos partes que desean intercambiar datos sin que terceros la vean",
        "explicacion": "El propósito principal es compartir claves de forma segura entre las partes autorizadas."
      },
      {
        "pregunta": "¿Cuál de las siguientes opciones es un método posible de distribución de claves?",
        "respuestas": [
          "Una parte selecciona una clave y la entrega físicamente a la otra",
          "Enviar la clave en texto plano a través de la red",
          "Publicar la clave en un servidor compartido",
          "Utilizar un algoritmo hash en lugar de una clave"
        ],
        "correcta": "Una parte selecciona una clave y la entrega físicamente a la otra",
        "explicacion": "Una opción indicada en la diapositiva es que una de las partes genere y entregue la clave directamente."
      },
      {
        "pregunta": "¿Qué alternativa implica a un tercero confiable en la distribución de claves?",
        "respuestas": [
          "Un tercero selecciona y entrega la clave físicamente a ambas partes",
          "El tercero guarda copias cifradas de todas las claves",
          "El tercero genera los mensajes cifrados pero no la clave",
          "El tercero solo verifica las firmas digitales"
        ],
        "correcta": "Un tercero selecciona y entrega la clave físicamente a ambas partes",
        "explicacion": "La segunda opción de la diapositiva menciona el uso de un intermediario confiable que reparte la clave."
      },
      {
        "pregunta": "¿Quién propuso el modelo de cifrado de clave pública?",
        "respuestas": [
          "Diffie y Hellman en 1976",
          "Rivest, Shamir y Adleman en 1978",
          "Whitfield y Schneier en 1985",
          "NIST y la NSA en 1993"
        ],
        "correcta": "Diffie y Hellman en 1976",
        "explicacion": "La estructura de cifrado de clave pública fue introducida por Diffie y Hellman en 1976."
      },
      {
        "pregunta": "¿Qué característica define al cifrado asimétrico?",
        "respuestas": [
          "Utiliza dos claves separadas: una pública y otra privada",
          "Requiere la misma clave para cifrar y descifrar",
          "Usa exclusivamente funciones hash",
          "No necesita protocolos para distribuir claves"
        ],
        "correcta": "Utiliza dos claves separadas: una pública y otra privada",
        "explicacion": "El cifrado asimétrico se basa en el uso de dos claves diferentes pero matemáticamente relacionadas."
      },
      {
        "pregunta": "¿Qué tipo de protocolo se necesita en la estructura de cifrado de clave pública?",
        "respuestas": [
          "Un protocolo para la distribución de claves",
          "Un protocolo de almacenamiento de hashes",
          "Un protocolo de compresión de datos",
          "Un protocolo de sincronización de tiempo"
        ],
        "correcta": "Un protocolo para la distribución de claves",
        "explicacion": "Incluso en sistemas asimétricos, se requiere un mecanismo para distribuir y verificar las claves de manera segura."
      },
      {
        "pregunta": "¿Qué son las claves asimétricas?",
        "respuestas": [
          "Dos claves relacionadas, una pública y una privada, usadas para operaciones complementarias como cifrar y descifrar",
          "Dos claves idénticas compartidas entre los usuarios",
          "Una sola clave que cambia periódicamente",
          "Claves utilizadas solo para funciones hash"
        ],
        "correcta": "Dos claves relacionadas, una pública y una privada, usadas para operaciones complementarias como cifrar y descifrar",
        "explicacion": "Las claves asimétricas permiten realizar operaciones inversas: lo que cifra una, solo la otra puede descifrarlo."
      },
      {
        "pregunta": "¿Qué es un certificado de clave pública?",
        "respuestas": [
          "Un documento digital emitido por una Autoridad de Certificación que vincula un nombre con una clave pública",
          "Un archivo temporal con la clave privada del usuario",
          "Un contrato legal entre dos entidades que intercambian claves",
          "Un registro manual de contraseñas y usuarios"
        ],
        "correcta": "Un documento digital emitido por una Autoridad de Certificación que vincula un nombre con una clave pública",
        "explicacion": "El certificado acredita que la clave pública pertenece al usuario identificado y fue validada por una autoridad certificadora."
      },
      {
        "pregunta": "¿Qué propiedad tienen las dos claves de un algoritmo criptográfico asimétrico?",
        "respuestas": [
          "Que derivar la clave privada a partir de la pública es computacionalmente inviable",
          "Que ambas son idénticas y se usan de forma alterna",
          "Que deben tener la misma longitud y el mismo valor",
          "Que se generan de forma completamente independiente"
        ],
        "correcta": "Que derivar la clave privada a partir de la pública es computacionalmente inviable",
        "explicacion": "El principio básico del cifrado asimétrico es que, aunque estén relacionadas, una no puede obtenerse a partir de la otra."
      },
      {
        "pregunta": "¿Qué es la infraestructura de clave pública (PKI)?",
        "respuestas": [
          "Un conjunto de políticas, procesos y tecnologías para administrar certificados y claves pública-privada",
          "Un algoritmo de cifrado basado en RSA",
          "Un software para cifrar archivos locales",
          "Un protocolo de comunicación simétrica"
        ],
        "correcta": "Un conjunto de políticas, procesos y tecnologías para administrar certificados y claves pública-privada",
        "explicacion": "La PKI proporciona los mecanismos para emitir, mantener y revocar certificados y gestionar las claves de los usuarios."
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones es un concepto erróneo sobre el cifrado de clave pública?",
        "respuestas": [
          "Que es más seguro contra el criptoanálisis que el cifrado simétrico",
          "Que requiere dos claves distintas para cifrar y descifrar",
          "Que utiliza funciones matemáticas complejas",
          "Que necesita protocolos para la distribución de claves"
        ],
        "correcta": "Que es más seguro contra el criptoanálisis que el cifrado simétrico",
        "explicacion": "No siempre es más seguro; depende del tipo de ataque y del uso. Es un concepto erróneo común."
      },
      {
        "pregunta": "¿Cuál de los siguientes conceptos erróneos se menciona sobre el cifrado de clave pública?",
        "respuestas": [
          "Que el cifrado simétrico se ha vuelto obsoleto",
          "Que el cifrado asimétrico no requiere autenticación",
          "Que las claves públicas deben ser secretas",
          "Que solo sirve para firmar documentos"
        ],
        "correcta": "Que el cifrado simétrico se ha vuelto obsoleto",
        "explicacion": "El cifrado simétrico sigue siendo ampliamente usado; el asimétrico no lo reemplaza completamente."
      },
      {
        "pregunta": "¿Qué falsa percepción existe sobre la distribución de claves en el cifrado de clave pública?",
        "respuestas": [
          "Que es trivial o sencilla en comparación con la del cifrado simétrico",
          "Que requiere centros de distribución complejos",
          "Que es imposible de realizar de forma segura",
          "Que depende de claves idénticas compartidas"
        ],
        "correcta": "Que es trivial o sencilla en comparación con la del cifrado simétrico",
        "explicacion": "Aunque simplifica algunos aspectos, la distribución de claves públicas aún requiere protocolos seguros y certificados."
      },
      {
        "pregunta": "¿Qué algoritmos permiten tanto firma digital como distribución de claves simétricas y cifrado de claves secretas?",
        "respuestas": [
          "RSA y Curva elíptica",
          "RSA y DSS",
          "Diffie-Hellman y DSS",
          "DSS y Curva elíptica"
        ],
        "correcta": "RSA y Curva elíptica",
        "explicacion": "Según la tabla, ambos algoritmos pueden realizar las tres funciones principales de un criptosistema de clave pública."
      },
      {
        "pregunta": "¿Qué algoritmo se usa solo para distribución de claves y no para firma digital o cifrado de mensajes?",
        "respuestas": [
          "Diffie-Hellman",
          "RSA",
          "DSS",
          "Curva elíptica"
        ],
        "correcta": "Diffie-Hellman",
        "explicacion": "El algoritmo Diffie-Hellman está diseñado exclusivamente para el intercambio seguro de claves."
      },
      {
        "pregunta": "¿Qué algoritmo proporciona únicamente firma digital con SHA?",
        "respuestas": [
          "DSS (Digital Signature Standard)",
          "RSA",
          "Diffie-Hellman",
          "Curva elíptica"
        ],
        "correcta": "DSS (Digital Signature Standard)",
        "explicacion": "El DSS fue diseñado solo para firmas digitales y no se usa para cifrar ni intercambiar claves."
      },
      {
        "pregunta": "¿Cuál de los siguientes requisitos pertenece a los criptosistemas de clave pública?",
        "respuestas": [
          "Debe ser computacionalmente fácil crear pares de claves",
          "Debe ser posible derivar la clave privada desde la pública",
          "Debe ser inviable cifrar sin conocer ambas claves",
          "Debe ser necesario usar la misma clave para cifrar y descifrar"
        ],
        "correcta": "Debe ser computacionalmente fácil crear pares de claves",
        "explicacion": "Los sistemas deben generar claves de forma eficiente, pero difíciles de invertir."
      },
      {
        "pregunta": "¿Qué requisito hace referencia a la imposibilidad de deducir una clave privada a partir de la pública?",
        "respuestas": [
          "Computacionalmente inviable para el oponente determinar la clave privada a partir de la clave pública",
          "Computacionalmente fácil cifrar con la clave pública",
          "Computacionalmente fácil para que el receptor conozca la clave privada",
          "Útil si cualquiera de las claves se puede usar para cada rol"
        ],
        "correcta": "Computacionalmente inviable para el oponente determinar la clave privada a partir de la clave pública",
        "explicacion": "Esta es la base de la seguridad en los sistemas de clave pública: una clave no debe revelar la otra."
      },
      {
        "pregunta": "¿Qué algoritmo fue desarrollado en 1977 y es el más ampliamente aceptado para el cifrado de clave pública?",
        "respuestas": [
          "RSA (Rivest, Shamir, Adleman)",
          "Diffie-Hellman",
          "DSS",
          "Curva elíptica (ECC)"
        ],
        "correcta": "RSA (Rivest, Shamir, Adleman)",
        "explicacion": "RSA es el algoritmo más usado y fue desarrollado en 1977 por Rivest, Shamir y Adleman."
      },
      {
        "pregunta": "¿Qué característica tiene el algoritmo RSA?",
        "respuestas": [
          "Cifra en bloques donde el texto plano y cifrado son enteros entre 0 y n−1",
          "Se usa solo para intercambio de claves",
          "No requiere clave pública",
          "Utiliza curvas elípticas para reducir tamaño de clave"
        ],
        "correcta": "Cifra en bloques donde el texto plano y cifrado son enteros entre 0 y n−1",
        "explicacion": "Esa es una descripción directa del funcionamiento interno del RSA."
      },
      {
        "pregunta": "¿Qué permite el algoritmo Diffie-Hellman?",
        "respuestas": [
          "Que dos usuarios acuerden un secreto compartido usado como clave secreta",
          "Firmar mensajes digitalmente con SHA",
          "Cifrar directamente grandes volúmenes de datos",
          "Evitar completamente la distribución de claves"
        ],
        "correcta": "Que dos usuarios acuerden un secreto compartido usado como clave secreta",
        "explicacion": "Diffie-Hellman establece una clave compartida que puede usarse para cifrado simétrico posterior."
      },
      {
        "pregunta": "¿Cuál es la limitación principal del algoritmo Diffie-Hellman?",
        "respuestas": [
          "Está limitado al intercambio de llaves",
          "No puede usarse en redes públicas",
          "Solo permite firmar mensajes",
          "Requiere una autoridad certificadora"
        ],
        "correcta": "Está limitado al intercambio de llaves",
        "explicacion": "El protocolo no cifra ni firma; solo intercambia claves de forma segura."
      },
      {
        "pregunta": "¿Qué ventaja tiene la criptografía de curva elíptica (ECC)?",
        "respuestas": [
          "Proporciona la misma seguridad que RSA pero con claves mucho más pequeñas",
          "Elimina la necesidad de claves privadas",
          "Evita completamente los ataques de fuerza bruta",
          "Funciona solo con algoritmos SHA"
        ],
        "correcta": "Proporciona la misma seguridad que RSA pero con claves mucho más pequeñas",
        "explicacion": "ECC ofrece una gran eficiencia gracias a la reducción del tamaño de las claves manteniendo el mismo nivel de seguridad."
      },
      {
        "pregunta": "¿Qué implica un ataque de fuerza bruta en el contexto de RSA?",
        "respuestas": [
          "Probar todas las claves privadas posibles",
          "Interceptar los mensajes cifrados y modificarlos",
          "Calcular la clave pública mediante ingeniería inversa",
          "Encontrar colisiones en el hash del mensaje"
        ],
        "correcta": "Probar todas las claves privadas posibles",
        "explicacion": "El ataque de fuerza bruta busca descubrir la clave privada probando todas las combinaciones posibles."
      },
      {
        "pregunta": "¿En qué se basan los ataques matemáticos contra RSA?",
        "respuestas": [
          "En factorizar el producto de dos números primos grandes",
          "En descifrar mediante tablas de sustitución",
          "En manipular el texto cifrado directamente",
          "En modificar los tiempos de ejecución del cifrado"
        ],
        "correcta": "En factorizar el producto de dos números primos grandes",
        "explicacion": "La seguridad de RSA se apoya en la dificultad de factorizar grandes números primos."
      },
      {
        "pregunta": "¿De qué dependen los ataques de tiempo en RSA?",
        "respuestas": [
          "Del tiempo de ejecución del algoritmo de descifrado",
          "Del tamaño de la clave pública usada",
          "Del número de mensajes cifrados",
          "De la longitud del texto plano original"
        ],
        "correcta": "Del tiempo de ejecución del algoritmo de descifrado",
        "explicacion": "Midiendo cuánto tarda un sistema en descifrar, un atacante puede deducir información sobre la clave."
      },
      {
        "pregunta": "¿Qué característica tienen los ataques de texto cifrado elegidos en RSA?",
        "respuestas": [
          "Explotan las propiedades internas del algoritmo RSA",
          "Se basan en interceptar la clave pública",
          "Dependen del conocimiento del texto plano original",
          "Usan contramedidas basadas en hashes"
        ],
        "correcta": "Explotan las propiedades internas del algoritmo RSA",
        "explicacion": "El atacante analiza cómo RSA responde ante textos cifrados específicos para obtener la clave."
      },
      {
        "pregunta": "¿Quién demostró que es posible determinar una clave privada mediante ataques de sincronización?",
        "respuestas": [
          "Paul Kocher",
          "Whitfield Diffie",
          "Rivest y Shamir",
          "Bruce Schneier"
        ],
        "correcta": "Paul Kocher",
        "explicacion": "Kocher fue quien descubrió este tipo de ataque al analizar los tiempos de descifrado en sistemas RSA."
      },
      {
        "pregunta": "¿Qué mide un ataque de sincronización para extraer información sobre la clave privada?",
        "respuestas": [
          "El tiempo que tarda una computadora en descifrar mensajes",
          "El tamaño de los bloques cifrados",
          "El número de bits de la clave pública",
          "El número de mensajes procesados simultáneamente"
        ],
        "correcta": "El tiempo que tarda una computadora en descifrar mensajes",
        "explicacion": "Este ataque se basa en el análisis del tiempo de ejecución durante el descifrado."
      },
      {
        "pregunta": "¿Por qué los ataques de sincronización son preocupantes?",
        "respuestas": [
          "Porque provienen de una dirección inesperada y se basan solo en texto cifrado",
          "Porque requieren acceso físico al servidor",
          "Porque afectan solo a claves simétricas",
          "Porque solo funcionan en hardware específico"
        ],
        "correcta": "Porque provienen de una dirección inesperada y se basan solo en texto cifrado",
        "explicacion": "Son alarmantes ya que el atacante no necesita conocer el texto plano ni interactuar directamente con la víctima."
      },
      {
        "pregunta": "¿Qué solución busca que todas las exponenciaciones tomen el mismo tiempo?",
        "respuestas": [
          "Tiempo de exponenciación constante",
          "Retraso aleatorio",
          "Enmascaramiento del texto cifrado",
          "Uso de claves efímeras"
        ],
        "correcta": "Tiempo de exponenciación constante",
        "explicacion": "Esta contramedida evita que las diferencias de tiempo revelen información sobre la clave privada."
      },
      {
        "pregunta": "¿Qué propósito tiene agregar un retraso aleatorio al algoritmo de exponenciación?",
        "respuestas": [
          "Confundir al atacante que intenta realizar un ataque de sincronización",
          "Reducir el tiempo de procesamiento de la exponenciación",
          "Aumentar la velocidad del descifrado",
          "Evitar el uso de claves demasiado cortas"
        ],
        "correcta": "Confundir al atacante que intenta realizar un ataque de sincronización",
        "explicacion": "El retraso aleatorio introduce variabilidad en los tiempos de ejecución, impidiendo mediciones precisas por parte del atacante."
      },
      {
        "pregunta": "¿Qué hace la técnica de enmascarar como contramedida?",
        "respuestas": [
          "Multiplica el texto cifrado por un número aleatorio antes de la exponenciación",
          "Aumenta el tamaño de la clave privada",
          "Divide la clave pública en múltiples fragmentos",
          "Repite la operación de cifrado varias veces"
        ],
        "correcta": "Multiplica el texto cifrado por un número aleatorio antes de la exponenciación",
        "explicacion": "Así se evita que el atacante conozca qué bits del texto cifrado se están procesando."
      },
      {
        "pregunta": "¿Qué efecto tiene el enmascaramiento sobre el ataque de sincronización?",
        "respuestas": [
          "Evita el análisis bit a bit del texto cifrado durante la ejecución",
          "Duplica el tiempo de cifrado",
          "Reduce la longitud del mensaje original",
          "Deshabilita temporalmente el algoritmo RSA"
        ],
        "correcta": "Evita el análisis bit a bit del texto cifrado durante la ejecución",
        "explicacion": "El enmascaramiento impide que el atacante obtenga información del proceso interno de descifrado."
      },
      {
        "pregunta": "¿Cuál fue el primer algoritmo de clave pública publicado?",
        "respuestas": [
          "Diffie-Hellman",
          "RSA",
          "DSS",
          "ECC"
        ],
        "correcta": "Diffie-Hellman",
        "explicacion": "El protocolo Diffie-Hellman fue el primero en introducir la idea de claves públicas en 1976."
      },
      {
        "pregunta": "¿De qué depende la seguridad del algoritmo Diffie-Hellman?",
        "respuestas": [
          "De la dificultad de calcular logaritmos discretos",
          "De la factorización de números primos grandes",
          "De la generación aleatoria de hashes SHA",
          "Del número de bits en el mensaje cifrado"
        ],
        "correcta": "De la dificultad de calcular logaritmos discretos",
        "explicacion": "El problema matemático de los logaritmos discretos es la base de la seguridad del protocolo."
      },
      {
        "pregunta": "¿Qué función cumple Diffie-Hellman en los sistemas criptográficos?",
        "respuestas": [
          "Permitir el intercambio seguro de una clave secreta para cifrado posterior",
          "Cifrar mensajes directamente entre dos usuarios",
          "Generar certificados digitales",
          "Verificar firmas electrónicas"
        ],
        "correcta": "Permitir el intercambio seguro de una clave secreta para cifrado posterior",
        "explicacion": "Su objetivo principal es establecer una clave compartida que luego puede usarse en sistemas simétricos."
      },
      {
        "pregunta": "¿Qué estándar define la firma digital y hace uso de SHA-1 junto con el algoritmo DSA?",
        "respuestas": [
          "RSA",
          "DSS",
          "ECC",
          "Diffie-Hellman"
        ],
        "correcta": "DSS",
        "explicacion": "El Estándar de Firma Digital (DSS) utiliza SHA-1 y el algoritmo DSA, y fue definido en el estándar FIPS PUB 186."
      },
      {
        "pregunta": "¿Qué característica destaca de la criptografía de curva elíptica (ECC)?",
        "respuestas": [
          "Es más lenta pero más segura que RSA",
          "Proporciona igual seguridad con claves más grandes",
          "Proporciona igual seguridad con claves más pequeñas",
          "No puede usarse para firma digital"
        ],
        "correcta": "Proporciona igual seguridad con claves más pequeñas",
        "explicacion": "ECC logra la misma seguridad que RSA utilizando claves de menor tamaño, lo que mejora el rendimiento."
      },
      {
        "pregunta": "¿Qué establece el estándar NIST FIPS PUB 186-4?",
        "respuestas": [
          "Un método de cifrado simétrico",
          "Un conjunto de funciones hash",
          "La definición y los algoritmos aceptados de firma digital",
          "Un protocolo de intercambio de claves"
        ],
        "correcta": "La definición y los algoritmos aceptados de firma digital",
        "explicacion": "FIPS PUB 186-4 define la firma digital y especifica los algoritmos RSA, DSA y ECDSA como válidos para su implementación."
      },
      {
        "pregunta": "¿Cuál de las siguientes NO es una propiedad de la firma digital?",
        "respuestas": [
          "Verificar el autor, la fecha y hora de la firma",
          "Autenticar el contenido en el momento de la firma",
          "Ser verificable por terceros para resolver disputas",
          "Garantizar la confidencialidad del mensaje"
        ],
        "correcta": "Garantizar la confidencialidad del mensaje",
        "explicacion": "Las firmas digitales aseguran autenticidad e integridad, pero no la confidencialidad de la información."
      },
      {
        "pregunta": "¿Qué información conoce un atacante en un 'Key-only attack'?",
        "respuestas": [
          "Solo la clave pública del firmante",
          "Algunos mensajes y sus firmas",
          "La clave privada del firmante",
          "Mensajes elegidos por él mismo"
        ],
        "correcta": "Solo la clave pública del firmante",
        "explicacion": "En un ataque de solo clave, el atacante únicamente dispone de la clave pública del objetivo."
      },
      {
        "pregunta": "¿Qué ocurre en un 'Known message attack'?",
        "respuestas": [
          "El atacante conoce un conjunto de mensajes y sus firmas",
          "El atacante elige libremente los mensajes a firmar",
          "El atacante obtiene la clave privada mediante fuerza bruta",
          "El atacante modifica el texto cifrado directamente"
        ],
        "correcta": "El atacante conoce un conjunto de mensajes y sus firmas",
        "explicacion": "En este ataque, el atacante tiene acceso a pares mensaje-firma, que usa para intentar deducir la clave privada."
      },
      {
        "pregunta": "¿En qué se basa un 'Generic chosen message attack'?",
        "respuestas": [
          "En elegir una lista de mensajes antes de intentar romper el esquema de firma",
          "En modificar los mensajes después de conocer la clave pública",
          "En falsificar firmas mediante colisiones de hash",
          "En interceptar mensajes firmados en tránsito"
        ],
        "correcta": "En elegir una lista de mensajes antes de intentar romper el esquema de firma",
        "explicacion": "El atacante elige previamente mensajes y obtiene firmas válidas de la víctima para esos mensajes elegidos."
      },
      {
        "pregunta": "¿Qué caracteriza al 'Adaptive chosen message attack'?",
        "respuestas": [
          "El atacante solicita firmas que dependen de mensajes y firmas obtenidos previamente",
          "El atacante elige todos los mensajes antes del ataque",
          "El atacante conoce solo la clave pública del objetivo",
          "El atacante tiene acceso a mensajes cifrados pero no firmados"
        ],
        "correcta": "El atacante solicita firmas que dependen de mensajes y firmas obtenidos previamente",
        "explicacion": "En este ataque adaptable, el atacante aprende de firmas anteriores para solicitar nuevas firmas útiles."
      },
      {
        "pregunta": "¿Qué ocurre en una falsificación 'Total break'?",
        "respuestas": [
          "El atacante determina la clave privada de la víctima",
          "El atacante falsifica una firma de un mensaje concreto",
          "El atacante genera firmas válidas para cualquier mensaje",
          "El atacante logra una firma pero no controla el mensaje"
        ],
        "correcta": "El atacante determina la clave privada de la víctima",
        "explicacion": "La rotura total implica que el atacante consigue la clave privada, rompiendo completamente la seguridad del sistema."
      },
      {
        "pregunta": "¿Qué diferencia la 'Universal forgery' de otros tipos de falsificación?",
        "respuestas": [
          "Permite construir firmas válidas para mensajes arbitrarios",
          "Solo permite falsificar una firma para un mensaje conocido",
          "Requiere conocer la clave privada",
          "Depende de conocer mensajes-firma previos"
        ],
        "correcta": "Permite construir firmas válidas para mensajes arbitrarios",
        "explicacion": "En la falsificación universal, el atacante puede generar firmas válidas para cualquier mensaje sin conocer la clave privada."
      },
      {
        "pregunta": "¿Qué tipo de falsificación implica crear una firma para un mensaje elegido por el atacante?",
        "respuestas": [
          "Selective forgery",
          "Existential forgery",
          "Universal forgery",
          "Total break"
        ],
        "correcta": "Selective forgery",
        "explicacion": "En la falsificación selectiva, el atacante elige el mensaje específico y crea una firma válida para él."
      },
      {
        "pregunta": "¿Qué define una 'Existential forgery'?",
        "respuestas": [
          "El atacante falsifica al menos una firma válida, aunque no controle el mensaje",
          "El atacante logra falsificar todas las firmas posibles",
          "El atacante encuentra la clave privada de la víctima",
          "El atacante puede predecir los hashes de los mensajes"
        ],
        "correcta": "El atacante falsifica al menos una firma válida, aunque no controle el mensaje",
        "explicacion": "En la falsificación existencial, se obtiene una firma válida sobre algún mensaje, sin control sobre cuál."
      },
      {
        "pregunta": "¿Por qué es menos común cifrar los datos almacenados que los transmitidos?",
        "respuestas": [
          "Porque los datos almacenados suelen estar ya comprimidos",
          "Porque los datos almacenados tienen poca protección más allá de la autenticación y controles de acceso",
          "Porque los datos almacenados no son sensibles",
          "Porque los discos duros modernos ya cifran automáticamente"
        ],
        "correcta": "Porque los datos almacenados tienen poca protección más allá de la autenticación y controles de acceso",
        "explicacion": "Los datos almacenados suelen tener una seguridad limitada a la autenticación de dominio o del sistema operativo, lo que los deja más vulnerables."
      },
      {
        "pregunta": "¿Qué ocurre con los datos aunque sean borrados del disco?",
        "respuestas": [
          "Son eliminados permanentemente",
          "Se sobrescriben de inmediato",
          "Pueden recuperarse hasta que se reutilicen los sectores del disco",
          "Quedan inaccesibles por completo"
        ],
        "correcta": "Pueden recuperarse hasta que se reutilicen los sectores del disco",
        "explicacion": "Hasta que los sectores del disco no se sobrescriben, los datos eliminados pueden ser recuperados."
      },
      {
        "pregunta": "¿Cuál de las siguientes opciones NO es un enfoque para cifrar datos almacenados?",
        "respuestas": [
          "Uso de un paquete de cifrado comercial",
          "Dispositivo de back-end",
          "Cifrado de cintas basado en biblioteca",
          "Cifrado mediante túneles VPN"
        ],
        "correcta": "Cifrado mediante túneles VPN",
        "explicacion": "Las VPN se utilizan para proteger datos en tránsito, no para cifrar datos almacenados."
      },
      {
        "pregunta": "¿Cuál de los siguientes es un uso de los números al azar en criptografía?",
        "respuestas": [
          "Compresión de mensajes",
          "Generación de claves para algoritmos de clave pública",
          "Optimización de la velocidad de cifrado",
          "Aumentar la redundancia de datos"
        ],
        "correcta": "Generación de claves para algoritmos de clave pública",
        "explicacion": "Los números aleatorios son esenciales para generar claves seguras en algoritmos de clave pública."
      },
      {
        "pregunta": "¿Qué propósito cumple un número aleatorio usado como 'apretón de manos'?",
        "respuestas": [
          "Evitar ataques de repetición",
          "Reducir el tamaño del mensaje",
          "Autenticar al servidor",
          "Sincronizar relojes entre nodos"
        ],
        "correcta": "Evitar ataques de repetición",
        "explicacion": "Los valores aleatorios se usan en los protocolos de autenticación para prevenir que un atacante reutilice mensajes válidos."
      },
      {
        "pregunta": "¿Qué propiedad debe cumplir la 'distribución uniforme' en los números aleatorios?",
        "respuestas": [
          "Que la frecuencia de aparición de los números sea similar",
          "Que algunos números aparezcan con mayor frecuencia",
          "Que los números sean múltiplos entre sí",
          "Que sigan una progresión lógica"
        ],
        "correcta": "Que la frecuencia de aparición de los números sea similar",
        "explicacion": "Una distribución uniforme garantiza que todos los números tengan la misma probabilidad de aparecer."
      },
      {
        "pregunta": "¿Qué significa que los números sean independientes?",
        "respuestas": [
          "Que los números de la secuencia sean proporcionales",
          "Que ningún número pueda inferirse a partir de los anteriores",
          "Que los números crezcan de forma progresiva",
          "Que todos tengan la misma longitud en bits"
        ],
        "correcta": "Que ningún número pueda inferirse a partir de los anteriores",
        "explicacion": "La independencia asegura que conocer un número no ayude a predecir los siguientes."
      },
      {
        "pregunta": "¿Qué implica la imprevisibilidad en los números aleatorios?",
        "respuestas": [
          "Que los números sean dependientes de los anteriores",
          "Que el oponente no pueda predecir elementos futuros de la secuencia",
          "Que los números sigan un patrón cíclico conocido",
          "Que los números estén ordenados por magnitud"
        ],
        "correcta": "Que el oponente no pueda predecir elementos futuros de la secuencia",
        "explicacion": "En un generador seguro, cada número debe ser independiente y no predecible a partir de los anteriores."
      },
      {
        "pregunta": "¿Qué diferencia hay entre números aleatorios y pseudoaleatorios?",
        "respuestas": [
          "Los pseudoaleatorios provienen de fuentes naturales, los aleatorios de algoritmos",
          "Los aleatorios se generan mediante procesos deterministas, los pseudoaleatorios no",
          "Los pseudoaleatorios son generados por algoritmos y pueden ser predecibles",
          "No existe ninguna diferencia relevante en criptografía"
        ],
        "correcta": "Los pseudoaleatorios son generados por algoritmos y pueden ser predecibles",
        "explicacion": "Los generadores pseudoaleatorios usan procesos deterministas, por lo que su salida puede ser predecible."
      },
      {
        "pregunta": "¿Qué característica tiene un verdadero generador de números aleatorios (TRNG)?",
        "respuestas": [
          "Utiliza una fuente no determinista como fenómenos naturales impredecibles",
          "Se basa en cálculos matemáticos predecibles",
          "Depende de una secuencia inicial conocida como semilla",
          "Produce números deterministas para pruebas estadísticas"
        ],
        "correcta": "Utiliza una fuente no determinista como fenómenos naturales impredecibles",
        "explicacion": "Los TRNG usan fenómenos físicos como radiación o ruido eléctrico para generar números verdaderamente aleatorios."
      },
      {
        "pregunta": "¿Según qué tres dimensiones se clasifica la criptografía?",
        "respuestas": [
          "Tipo de operaciones, número de claves y forma de procesar el texto plano",
          "Tipo de hardware, tamaño del texto y cantidad de datos",
          "Tipo de usuario, velocidad de red y sistema operativo",
          "Tipo de cifrado, protocolo y puerto utilizado"
        ],
        "correcta": "Tipo de operaciones, número de claves y forma de procesar el texto plano",
        "explicacion": "La criptografía se clasifica atendiendo a las operaciones empleadas, las claves usadas y cómo se procesa el texto plano."
      },
      {
        "pregunta": "¿Qué describe la operación de sustitución en criptografía?",
        "respuestas": [
          "Cada elemento del texto sin formato se asigna a otro elemento",
          "Los elementos del texto plano se reorganizan",
          "Se utilizan dos claves distintas para cifrar y descifrar",
          "Los bloques de texto se procesan de forma paralela"
        ],
        "correcta": "Cada elemento del texto sin formato se asigna a otro elemento",
        "explicacion": "La sustitución reemplaza los elementos del texto plano por otros, cambiando su representación sin alterar su posición."
      },
      {
        "pregunta": "¿Qué caracteriza al cifrado por transposición?",
        "respuestas": [
          "Reorganiza los elementos del texto plano sin cambiarlos",
          "Sustituye cada símbolo por otro diferente",
          "Usa claves distintas para emisor y receptor",
          "Aplica operaciones matemáticas sobre los bits"
        ],
        "correcta": "Reorganiza los elementos del texto plano sin cambiarlos",
        "explicacion": "En la transposición, el mensaje original se altera solo en el orden de los caracteres, no en su contenido."
      },
      {
        "pregunta": "¿Cuál es la diferencia entre cifrado simétrico y asimétrico?",
        "respuestas": [
          "El simétrico usa una sola clave, el asimétrico usa dos diferentes",
          "El simétrico usa dos claves, el asimétrico una",
          "El asimétrico siempre es más rápido que el simétrico",
          "El simétrico no requiere clave"
        ],
        "correcta": "El simétrico usa una sola clave, el asimétrico usa dos diferentes",
        "explicacion": "En el cifrado simétrico ambos utilizan la misma clave; en el asimétrico se usan dos: una pública y una privada."
      },
      {
        "pregunta": "¿Cómo se diferencia el cifrado de bloques del de flujo?",
        "respuestas": [
          "El de bloques cifra grupos de elementos, el de flujo cifra elemento por elemento",
          "El de bloques es más lento y menos seguro",
          "El de flujo usa dos claves diferentes",
          "El de flujo se aplica solo a archivos grandes"
        ],
        "correcta": "El de bloques cifra grupos de elementos, el de flujo cifra elemento por elemento",
        "explicacion": "El cifrado por bloques procesa el texto por partes; el de flujo trabaja continuamente bit a bit o carácter a carácter."
      },
      {
        "pregunta": "¿Cuál es el principal objetivo del cifrado simétrico?",
        "respuestas": [
          "Garantizar la confidencialidad de los datos transmitidos o almacenados",
          "Aumentar la velocidad de transmisión de datos",
          "Reducir el tamaño del texto cifrado",
          "Facilitar la autenticación de usuarios"
        ],
        "correcta": "Garantizar la confidencialidad de los datos transmitidos o almacenados",
        "explicacion": "El cifrado simétrico protege la información frente a accesos no autorizados manteniendo su confidencialidad."
      },
      {
        "pregunta": "¿Qué se necesita para que el cifrado simétrico sea seguro?",
        "respuestas": [
          "Un algoritmo fuerte y un intercambio seguro de la clave secreta",
          "Dos algoritmos diferentes para cifrar y descifrar",
          "Un servidor remoto de validación",
          "El uso de una clave pública"
        ],
        "correcta": "Un algoritmo fuerte y un intercambio seguro de la clave secreta",
        "explicacion": "Para evitar ataques, la clave debe mantenerse protegida y el algoritmo debe ser resistente a análisis criptográficos."
      },
      {
        "pregunta": "¿Qué busca un ataque criptoanalítico (criptoanálisis)?",
        "respuestas": [
          "Deducir el texto sin formato o la clave utilizada",
          "Bloquear el acceso al sistema",
          "Corromper los datos cifrados",
          "Duplicar los mensajes transmitidos"
        ],
        "correcta": "Deducir el texto sin formato o la clave utilizada",
        "explicacion": "El criptoanálisis explota debilidades del algoritmo y patrones del texto para obtener el mensaje o la clave."
      },
      {
        "pregunta": "¿Qué tipo de información necesita el criptoanálisis para ser efectivo?",
        "respuestas": [
          "Naturaleza del algoritmo y ejemplos de texto plano y cifrado",
          "Solo la clave del destinatario",
          "Una copia del hardware de cifrado",
          "El historial de mensajes enviados"
        ],
        "correcta": "Naturaleza del algoritmo y ejemplos de texto plano y cifrado",
        "explicacion": "El criptoanálisis se basa en estudiar cómo el algoritmo transforma datos conocidos para inferir la clave."
      },
      {
        "pregunta": "¿En qué consiste un ataque de fuerza bruta?",
        "respuestas": [
          "Probar todas las claves posibles hasta encontrar la correcta",
          "Modificar el algoritmo de cifrado para hacerlo vulnerable",
          "Interceptar la clave durante la transmisión",
          "Analizar patrones de tráfico de red"
        ],
        "correcta": "Probar todas las claves posibles hasta encontrar la correcta",
        "explicacion": "La fuerza bruta intenta descifrar el mensaje probando cada clave hasta hallar una traducción coherente."
      },
      {
        "pregunta": "¿Cuántas claves, en promedio, deben probarse en un ataque de fuerza bruta exitoso?",
        "respuestas": [
          "La mitad de todas las posibles",
          "Todas las claves posibles",
          "Una cuarta parte de las posibles",
          "Una sola clave aleatoria"
        ],
        "correcta": "La mitad de todas las posibles",
        "explicacion": "En promedio, se necesita probar la mitad de las combinaciones antes de hallar la clave correcta."
      },
      {
        "pregunta": "¿Cuándo se considera que un esquema de cifrado es computacionalmente seguro?",
        "respuestas": [
          "Cuando descifrarlo cuesta más que el valor de la información o requiere más tiempo que su vida útil",
          "Cuando usa una clave de más de 512 bits",
          "Cuando impide totalmente cualquier ataque",
          "Cuando el cifrado es reversible"
        ],
        "correcta": "Cuando descifrarlo cuesta más que el valor de la información o requiere más tiempo que su vida útil",
        "explicacion": "El cifrado es seguro si romperlo resulta económicamente o temporalmente inviable."
      },
      {
        "pregunta": "¿Por qué es difícil estimar la seguridad de un cifrado?",
        "respuestas": [
          "Porque es complicado calcular el esfuerzo necesario para romperlo",
          "Porque depende de la velocidad de Internet",
          "Porque los algoritmos cambian diariamente",
          "Porque los ataques solo se basan en azar"
        ],
        "correcta": "Porque es complicado calcular el esfuerzo necesario para romperlo",
        "explicacion": "La seguridad práctica depende de factores como el poder computacional y la eficiencia de los ataques posibles."
      },
      {
        "pregunta": "¿Qué tamaño de bloque utiliza el algoritmo DES para texto plano?",
        "respuestas": [
          "64 bits",
          "56 bits",
          "128 bits",
          "192 bits"
        ],
        "correcta": "64 bits",
        "explicacion": "DES utiliza bloques de texto plano de 64 bits y una clave de 56 bits para producir bloques cifrados de 64 bits."
      },
      {
        "pregunta": "¿Cuál es el tamaño de clave que emplea el algoritmo DES?",
        "respuestas": [
          "56 bits",
          "64 bits",
          "112 bits",
          "128 bits"
        ],
        "correcta": "56 bits",
        "explicacion": "El DES usa una clave de 56 bits, considerada actualmente insegura por su vulnerabilidad a ataques de fuerza bruta."
      },
      {
        "pregunta": "¿Cuál fue una de las principales preocupaciones con el uso de DES?",
        "respuestas": [
          "La longitud de clave de 56 bits es demasiado corta para los procesadores modernos",
          "El algoritmo era demasiado complejo",
          "Utilizaba un tamaño de bloque muy grande",
          "No soportaba cifrado simétrico"
        ],
        "correcta": "La longitud de clave de 56 bits es demasiado corta para los procesadores modernos",
        "explicacion": "Con el aumento del poder computacional, 56 bits resultaron insuficientes para proteger contra ataques de fuerza bruta."
      },
      {
        "pregunta": "¿Qué característica tiene Triple DES (3DES)?",
        "respuestas": [
          "Aplica el algoritmo DES tres veces usando dos o tres claves únicas",
          "Es una versión reducida de DES",
          "Usa una clave única de 512 bits",
          "Es un algoritmo de cifrado asimétrico"
        ],
        "correcta": "Aplica el algoritmo DES tres veces usando dos o tres claves únicas",
        "explicacion": "Triple DES fue diseñado para fortalecer DES aplicándolo tres veces con diferentes claves."
      },
      {
        "pregunta": "¿Cuál fue una de las principales ventajas del Triple DES respecto a DES?",
        "respuestas": [
          "Una longitud de clave de hasta 168 bits que supera la vulnerabilidad al ataque de fuerza bruta",
          "Mayor velocidad de cifrado en software",
          "Bloques de texto de 128 bits",
          "Menor consumo de recursos"
        ],
        "correcta": "Una longitud de clave de hasta 168 bits que supera la vulnerabilidad al ataque de fuerza bruta",
        "explicacion": "Al usar varias claves, 3DES es mucho más resistente a ataques que el DES original."
      },
      {
        "pregunta": "¿Cuál es una de las desventajas principales de Triple DES?",
        "respuestas": [
          "Es lento en software y mantiene un tamaño de bloque de 64 bits",
          "Usa demasiadas claves simultáneamente",
          "Solo puede usarse con hardware especializado",
          "No permite cifrado por bloques"
        ],
        "correcta": "Es lento en software y mantiene un tamaño de bloque de 64 bits",
        "explicacion": "Aunque seguro, 3DES es computacionalmente más costoso y su tamaño de bloque no mejoró respecto a DES."
      },
      {
        "pregunta": "¿Por qué se necesitó un reemplazo para 3DES?",
        "respuestas": [
          "Porque no era razonable para uso a largo plazo debido a su lentitud y limitaciones",
          "Porque utilizaba cifrado asimétrico",
          "Porque requería demasiadas claves públicas",
          "Porque no era compatible con hardware moderno"
        ],
        "correcta": "Porque no era razonable para uso a largo plazo debido a su lentitud y limitaciones",
        "explicacion": "Aunque seguro, 3DES no era eficiente para aplicaciones modernas debido a su velocidad y consumo de recursos."
      },
      {
        "pregunta": "¿Qué requisitos debía cumplir el nuevo estándar AES según el NIST?",
        "respuestas": [
          "Seguridad igual o superior a 3DES y mayor eficiencia",
          "Usar exactamente las mismas claves que 3DES",
          "Incluir cifrado asimétrico",
          "Ser compatible con algoritmos RSA"
        ],
        "correcta": "Seguridad igual o superior a 3DES y mayor eficiencia",
        "explicacion": "AES debía superar las limitaciones de 3DES tanto en seguridad como en rendimiento."
      },
      {
        "pregunta": "¿Qué tamaño de bloque y de claves utiliza el algoritmo AES?",
        "respuestas": [
          "Bloques de 128 bits y claves de 128, 192 o 256 bits",
          "Bloques de 64 bits y claves de 56 bits",
          "Bloques de 256 bits y claves de 512 bits",
          "Bloques de 112 bits y claves de 168 bits"
        ],
        "correcta": "Bloques de 128 bits y claves de 128, 192 o 256 bits",
        "explicacion": "AES amplió los tamaños de clave y bloque para garantizar un cifrado más robusto y adaptable."
      },
      {
        "pregunta": "¿En qué año seleccionó el NIST el algoritmo Rijndael como estándar AES?",
        "respuestas": [
          "2001",
          "1997",
          "1999",
          "2003"
        ],
        "correcta": "2001",
        "explicacion": "Rijndael fue seleccionado como el nuevo estándar AES en noviembre de 2001 y publicado como FIPS 197."
      },
      {
        "pregunta": "¿A qué tipo de unidad de datos se aplica normalmente el cifrado simétrico?",
        "respuestas": [
          "A una unidad de datos mayor que un único bloque de 64 o 128 bits",
          "Solo a bloques de 8 bits",
          "Únicamente a flujos de datos continuos",
          "A datos comprimidos antes del cifrado"
        ],
        "correcta": "A una unidad de datos mayor que un único bloque de 64 o 128 bits",
        "explicacion": "El cifrado simétrico suele aplicarse sobre bloques de datos grandes, no sobre unidades pequeñas o flujos individuales."
      },
      {
        "pregunta": "¿Qué característica tiene el modo de cifrado ECB?",
        "respuestas": [
          "Cada bloque de texto se cifra de forma independiente con la misma clave",
          "Cada bloque se cifra con una clave diferente",
          "El texto se cifra como un flujo continuo sin dividir en bloques",
          "Utiliza una clave pública y otra privada"
        ],
        "correcta": "Cada bloque de texto se cifra de forma independiente con la misma clave",
        "explicacion": "ECB cifra cada bloque igual de forma independiente, lo que permite a los criptoanalistas detectar patrones."
      },
      {
        "pregunta": "¿Por qué el modo ECB es considerado inseguro?",
        "respuestas": [
          "Porque los criptoanalistas pueden explotar regularidades en el texto plano",
          "Porque requiere demasiadas claves",
          "Porque necesita una red de alta velocidad",
          "Porque cifra solo flujos de datos"
        ],
        "correcta": "Porque los criptoanalistas pueden explotar regularidades en el texto plano",
        "explicacion": "ECB no oculta patrones en los datos, lo que permite identificar partes repetitivas en el mensaje cifrado."
      },
      {
        "pregunta": "¿Qué son los modos de operación en criptografía simétrica?",
        "respuestas": [
          "Técnicas desarrolladas para aumentar la seguridad del cifrado de bloques",
          "Algoritmos de compresión de datos",
          "Protocolos de transmisión de red",
          "Métodos para romper cifrados simétricos"
        ],
        "correcta": "Técnicas desarrolladas para aumentar la seguridad del cifrado de bloques",
        "explicacion": "Los modos de operación permiten cifrar secuencias grandes de datos y superar debilidades como las del modo ECB."
      },
      {
        "pregunta": "¿Qué diferencia principal existe entre el cifrado de bloque y el cifrado de flujo?",
        "respuestas": [
          "El cifrado de bloque procesa grupos de datos, el de flujo procesa elemento por elemento",
          "El de flujo es más lento que el de bloque",
          "El cifrado de bloque usa claves asimétricas",
          "El de bloque solo puede aplicarse a texto de longitud fija"
        ],
        "correcta": "El cifrado de bloque procesa grupos de datos, el de flujo procesa elemento por elemento",
        "explicacion": "El cifrado de bloque trata bloques de bits completos, mientras que el de flujo cifra byte a byte o bit a bit."
      },
      {
        "pregunta": "¿Cuál es una ventaja del cifrado de flujo?",
        "respuestas": [
          "Es más rápido y requiere menos código que el de bloque",
          "Puede cifrar archivos comprimidos directamente",
          "Permite reutilizar claves sin riesgo",
          "Aumenta la longitud de los bloques"
        ],
        "correcta": "Es más rápido y requiere menos código que el de bloque",
        "explicacion": "El cifrado de flujo es más eficiente en hardware o software ligero, ideal para transmisión continua de datos."
      },
      {
        "pregunta": "¿Qué hace el modo CBC (Cipher Block Chaining)?",
        "respuestas": [
          "Encadena el bloque cifrado anterior con el siguiente bloque de texto plano mediante XOR",
          "Cifra cada bloque independientemente",
          "Combina clave pública y privada para cada bloque",
          "Requiere una clave distinta por cada bloque"
        ],
        "correcta": "Encadena el bloque cifrado anterior con el siguiente bloque de texto plano mediante XOR",
        "explicacion": "CBC utiliza un encadenamiento de bloques para evitar patrones repetidos en el texto cifrado."
      },
      {
        "pregunta": "¿Cuál es una aplicación típica del modo CBC?",
        "respuestas": [
          "Transmisión orientada a bloques y autenticación (CBC-MAC)",
          "Cifrado de flujo continuo de datos",
          "Cifrado asimétrico de claves públicas",
          "Compresión de datos cifrados"
        ],
        "correcta": "Transmisión orientada a bloques y autenticación (CBC-MAC)",
        "explicacion": "CBC se usa ampliamente en transmisión segura y autenticación mediante el último bloque."
      },
      {
        "pregunta": "¿Qué modo procesa bits de entrada uno a la vez y usa el texto cifrado anterior como entrada?",
        "respuestas": [
          "Cipher Feedback (CFB)",
          "Electronic Code Book (ECB)",
          "Counter (CTR)",
          "Output Feedback (OFB)"
        ],
        "correcta": "Cipher Feedback (CFB)",
        "explicacion": "El modo CFB cifra bit a bit usando el resultado del bloque anterior como entrada para el siguiente."
      },
      {
        "pregunta": "¿Qué modo es similar a CFB, pero utiliza la salida pseudoaleatoria anterior como entrada al cifrado?",
        "respuestas": [
          "Output Feedback (OFB)",
          "Electronic Code Book (ECB)",
          "Cipher Block Chaining (CBC)",
          "Counter (CTR)"
        ],
        "correcta": "Output Feedback (OFB)",
        "explicacion": "OFB usa la salida previa del cifrado como nueva entrada, generando una secuencia pseudoaleatoria continua."
      },
      {
        "pregunta": "¿Qué característica define al modo Counter (CTR)?",
        "respuestas": [
          "Cada bloque se XOR con un contador cifrado que se incrementa en cada bloque",
          "Cada bloque se cifra con una clave diferente",
          "El texto plano se concatena antes del cifrado",
          "Utiliza una clave pública y otra privada"
        ],
        "correcta": "Cada bloque se XOR con un contador cifrado que se incrementa en cada bloque",
        "explicacion": "CTR convierte el contador cifrado en una secuencia pseudoaleatoria que se combina con el texto plano."
      },
      {
        "pregunta": "¿Cuál es una aplicación típica del modo Counter (CTR)?",
        "respuestas": [
          "Transmisión orientada a bloques de uso general y alta velocidad",
          "Autenticación de usuarios en línea",
          "Cifrado de claves asimétricas",
          "Protección contra ataques de denegación de servicio"
        ],
        "correcta": "Transmisión orientada a bloques de uso general y alta velocidad",
        "explicacion": "CTR es muy eficiente para transmisión rápida de datos y cifrados paralelos."
      },
      {
        "pregunta": "¿Qué función cumple el modo CMAC?",
        "respuestas": [
          "Proporcionar autenticación basada en una variación del modo CBC-MAC",
          "Cifrar texto plano directamente sin bloques",
          "Combinar cifrado simétrico y asimétrico",
          "Reutilizar claves sin riesgo"
        ],
        "correcta": "Proporcionar autenticación basada en una variación del modo CBC-MAC",
        "explicacion": "CMAC ajusta el bloque final para generar un código de autenticación más seguro."
      },
      {
        "pregunta": "¿Qué ventaja tiene el modo OCB (Offset Codebook)?",
        "respuestas": [
          "Combina cifrado y autenticación en una sola operación",
          "Permite cifrar claves públicas",
          "Evita el uso de XOR en bloques consecutivos",
          "Genera múltiples claves simultáneas"
        ],
        "correcta": "Combina cifrado y autenticación en una sola operación",
        "explicacion": "OCB autentica y cifra cada bloque simultáneamente, optimizando la seguridad y el rendimiento."
      },
      {
        "pregunta": "¿Qué combinan los modos CCM y GCM?",
        "respuestas": [
          "Confidencialidad y autenticación de datos",
          "Cifrado asimétrico con claves públicas",
          "Codificación y compresión",
          "Segmentación de bloques y firmas digitales"
        ],
        "correcta": "Confidencialidad y autenticación de datos",
        "explicacion": "Ambos modos integran cifrado (CTR) y autenticación (MAC) para lograr protección completa en la comunicación."
      },
      {
        "pregunta": "¿Qué caracteriza al modo ECB (Electronic Code Book)?",
        "respuestas": [
          "Es el modo de cifrado más simple y cifra cada bloque con la misma clave",
          "Utiliza una clave diferente para cada bloque",
          "Combina cifrado simétrico y asimétrico",
          "Requiere intercambio continuo de claves"
        ],
        "correcta": "Es el modo de cifrado más simple y cifra cada bloque con la misma clave",
        "explicacion": "ECB procesa cada bloque de texto plano de forma independiente usando siempre la misma clave."
      },
      {
        "pregunta": "¿Por qué el modo ECB no es seguro para mensajes largos?",
        "respuestas": [
          "Porque los bloques repetidos en el texto plano producen bloques repetidos en el texto cifrado",
          "Porque no usa operaciones XOR",
          "Porque requiere demasiadas claves",
          "Porque es incompatible con AES"
        ],
        "correcta": "Porque los bloques repetidos en el texto plano producen bloques repetidos en el texto cifrado",
        "explicacion": "ECB conserva patrones del texto original, lo que puede revelar información visual o estructural."
      },
      {
        "pregunta": "¿Qué tamaño de bloque utiliza DES y AES respectivamente?",
        "respuestas": [
          "DES utiliza 64 bits y AES utiliza 128 bits",
          "DES utiliza 128 bits y AES 64 bits",
          "Ambos utilizan 64 bits",
          "DES usa bloques variables y AES fijos"
        ],
        "correcta": "DES utiliza 64 bits y AES utiliza 128 bits",
        "explicacion": "DES trabaja con bloques de 64 bits, mientras que AES utiliza bloques más grandes de 128 bits para mayor seguridad."
      },
      {
        "pregunta": "¿Qué modos permiten convertir un cifrado de bloque en uno de flujo?",
        "respuestas": [
          "CFB, OFB y CTR",
          "CBC, ECB y CCM",
          "GCM, CMAC y OCB",
          "AES, DES y 3DES"
        ],
        "correcta": "CFB, OFB y CTR",
        "explicacion": "Estos modos procesan bits o bytes de manera continua, convirtiendo el cifrado de bloque en un flujo."
      },
      {
        "pregunta": "¿Cuál de las siguientes es una ventaja del modo CTR (Counter)?",
        "respuestas": [
          "Alta eficiencia y simplicidad tanto en hardware como en software",
          "Evita totalmente el uso de contadores cifrados",
          "Requiere menos sincronización entre emisor y receptor",
          "Permite reutilizar claves indefinidamente"
        ],
        "correcta": "Alta eficiencia y simplicidad tanto en hardware como en software",
        "explicacion": "El modo CTR destaca por su eficiencia, capacidad de preprocesamiento y seguridad demostrable."
      },
      {
        "pregunta": "¿Qué ventaja aporta el modo CTR respecto a otros modos de operación?",
        "respuestas": [
          "Permite acceso aleatorio y preprocesamiento de bloques",
          "Usa menos recursos de memoria",
          "Requiere menos claves",
          "Funciona solo en hardware especializado"
        ],
        "correcta": "Permite acceso aleatorio y preprocesamiento de bloques",
        "explicacion": "CTR permite cifrar bloques por separado sin dependencia de bloques anteriores."
      },
      {
        "pregunta": "¿Qué protege la autenticación de mensajes?",
        "respuestas": [
          "Protege contra ataques activos y asegura que el mensaje sea auténtico",
          "Evita la pérdida de paquetes en la transmisión",
          "Garantiza la compresión del mensaje",
          "Evita el cifrado del contenido"
        ],
        "correcta": "Protege contra ataques activos y asegura que el mensaje sea auténtico",
        "explicacion": "La autenticación de mensajes busca confirmar integridad, origen y secuencia correcta del mensaje."
      },
      {
        "pregunta": "¿Qué verifica la autenticación de mensajes?",
        "respuestas": [
          "Que el contenido no ha sido alterado y proviene de una fuente auténtica",
          "Que el mensaje está en formato comprimido",
          "Que el mensaje no ha sido cifrado",
          "Que el mensaje contiene la firma digital correcta"
        ],
        "correcta": "Que el contenido no ha sido alterado y proviene de una fuente auténtica",
        "explicacion": "La autenticación garantiza integridad y origen del mensaje, no necesariamente su confidencialidad."
      },
      {
        "pregunta": "¿Cómo puede realizarse la autenticación de mensajes?",
        "respuestas": [
          "Utilizando cifrado convencional compartido entre remitente y receptor",
          "Mediante un certificado público únicamente",
          "Usando un hash sin clave",
          "A través de canales no cifrados"
        ],
        "correcta": "Utilizando cifrado convencional compartido entre remitente y receptor",
        "explicacion": "La autenticación puede basarse en una clave secreta compartida que valide el origen del mensaje."
      },
      {
        "pregunta": "¿Qué afirma la diapositiva sobre la autenticación de mensajes sin confidencialidad?",
        "respuestas": [
          "Que el cifrado por sí solo no garantiza autenticación segura",
          "Que siempre es preferible usar confidencialidad",
          "Que se usa únicamente con algoritmos asimétricos",
          "Que reemplaza completamente la autenticación tradicional"
        ],
        "correcta": "Que el cifrado por sí solo no garantiza autenticación segura",
        "explicacion": "El cifrado no asegura autenticidad; se puede requerir un método adicional como OCB o un código MAC."
      },
      {
        "pregunta": "¿Qué es el modo OCB (Offset Codebook)?",
        "respuestas": [
          "Un algoritmo que combina cifrado y autenticación en una sola operación",
          "Una variante de ECB con bloques aleatorios",
          "Un método de compresión de claves",
          "Un sistema de intercambio de claves públicas"
        ],
        "correcta": "Un algoritmo que combina cifrado y autenticación en una sola operación",
        "explicacion": "OCB permite cifrar y autenticar simultáneamente un mensaje y su etiqueta."
      },
      {
        "pregunta": "¿En qué casos puede ser preferible la autenticación sin confidencialidad?",
        "respuestas": [
          "Cuando se transmite el mismo mensaje a varios destinos o no se necesita cifrar todo el contenido",
          "Cuando se usan claves públicas diferentes",
          "Cuando la red no soporta cifrado simétrico",
          "Nunca es recomendable"
        ],
        "correcta": "Cuando se transmite el mismo mensaje a varios destinos o no se necesita cifrar todo el contenido",
        "explicacion": "En ciertos entornos, la autenticación basta para verificar integridad sin necesidad de cifrar los datos."
      }
    ],
    "Tema 3": [
      {
        "pregunta": "¿Cómo define el NIST 800-83 al malware?",
        "respuestas": [
          "Un programa legítimo que mejora la seguridad del sistema",
          "Un software que se instala de forma voluntaria para proteger los datos",
          "Un programa que se inserta en un sistema con la intención de comprometer la confidencialidad, integridad o disponibilidad de los datos",
          "Una aplicación que optimiza el rendimiento de los equipos mediante scripts automatizados"
        ],
        "correcta": "Un programa que se inserta en un sistema con la intención de comprometer la confidencialidad, integridad o disponibilidad de los datos",
        "explicacion": "El NIST 800-83 define el malware como software malicioso diseñado para dañar, robar o interrumpir la información o sistemas del usuario."
      },
      {
        "pregunta": "¿Qué es una Amenaza Persistente Avanzada (APT)?",
        "respuestas": [
          "Un virus que se propaga automáticamente entre usuarios de correo",
          "Un ataque prolongado y dirigido a objetivos específicos, a menudo patrocinado por el Estado",
          "Un tipo de ransomware que cifra archivos locales",
          "Un exploit usado para vulnerabilidades de navegador"
        ],
        "correcta": "Un ataque prolongado y dirigido a objetivos específicos, a menudo patrocinado por el Estado",
        "explicacion": "Las APT son ataques planificados y mantenidos en el tiempo contra organizaciones o gobiernos, buscando espionaje o control prolongado."
      },
      {
        "pregunta": "¿Qué caracteriza al software publicitario (Adware)?",
        "respuestas": [
          "Elimina anuncios y pop-ups no deseados",
          "Muestra publicidad integrada o redirige al usuario a sitios comerciales",
          "Actúa como antivirus gratuito",
          "Protege la identidad digital del usuario"
        ],
        "correcta": "Muestra publicidad integrada o redirige al usuario a sitios comerciales",
        "explicacion": "El adware introduce anuncios o redirecciones sin consentimiento del usuario, generando ingresos para su creador."
      },
      {
        "pregunta": "¿Qué hace una puerta trasera (Backdoor)?",
        "respuestas": [
          "Instala actualizaciones de seguridad",
          "Elude controles de seguridad permitiendo acceso no autorizado",
          "Borra los registros del sistema",
          "Protege contraseñas mediante cifrado"
        ],
        "correcta": "Elude controles de seguridad permitiendo acceso no autorizado",
        "explicacion": "Una backdoor abre un canal oculto que permite el acceso remoto o administrativo sin autorización."
      },
      {
        "pregunta": "¿Qué función tienen los descargadores (Downloaders)?",
        "respuestas": [
          "Eliminar malware existente",
          "Instalar otros elementos maliciosos en un sistema comprometido",
          "Proteger el sistema mediante parches automáticos",
          "Monitorizar tráfico de red para detectar amenazas"
        ],
        "correcta": "Instalar otros elementos maliciosos en un sistema comprometido",
        "explicacion": "Los downloaders descargan malware adicional una vez que la máquina ya ha sido infectada."
      },
      {
        "pregunta": "¿Qué hace un ataque de descarga automática (Drive-by-download)?",
        "respuestas": [
          "Descarga software de forma legítima desde un sitio oficial",
          "Aprovecha vulnerabilidades del navegador para instalar malware cuando se visita un sitio web comprometido",
          "Requiere interacción manual del usuario para ejecutarse",
          "Solo afecta a dispositivos móviles"
        ],
        "correcta": "Aprovecha vulnerabilidades del navegador para instalar malware cuando se visita un sitio web comprometido",
        "explicacion": "Los ataques drive-by-download se ejecutan al cargar una web maliciosa sin que el usuario haga clic o acepte nada."
      },
      {
        "pregunta": "¿Qué son los keyloggers?",
        "respuestas": [
          "Programas que limpian el registro del sistema",
          "Herramientas que capturan las pulsaciones de teclado en un sistema comprometido",
          "Sistemas de autenticación multifactor",
          "Mecanismos para cifrar contraseñas"
        ],
        "correcta": "Herramientas que capturan las pulsaciones de teclado en un sistema comprometido",
        "explicacion": "Los keyloggers registran las teclas presionadas, pudiendo capturar contraseñas o información privada."
      },
      {
        "pregunta": "¿Qué es una bomba lógica (Logic bomb)?",
        "respuestas": [
          "Un virus que se activa al conectarse a internet",
          "Un código que permanece inactivo hasta que se cumple una condición específica",
          "Una técnica para limpiar malware automáticamente",
          "Un antivirus automatizado"
        ],
        "correcta": "Un código que permanece inactivo hasta que se cumple una condición específica",
        "explicacion": "La bomba lógica espera a que se cumpla un evento, como una fecha o acción, para ejecutar su carga maliciosa."
      },
      {
        "pregunta": "¿Qué tipo de malware utiliza macros incrustadas en documentos?",
        "respuestas": [
          "Rootkit",
          "Macrovirus",
          "Exploit",
          "Troyano"
        ],
        "correcta": "Macrovirus",
        "explicacion": "Los macrovirus infectan documentos ofimáticos y se ejecutan al abrirlos o editarlos, replicándose a otros archivos."
      },
      {
        "pregunta": "¿Qué hace un rootkit?",
        "respuestas": [
          "Oculta la presencia de malware y proporciona acceso privilegiado al sistema",
          "Analiza la memoria RAM en busca de vulnerabilidades",
          "Elimina virus del sistema de archivos",
          "Cifra el disco completo para protección"
        ],
        "correcta": "Oculta la presencia de malware y proporciona acceso privilegiado al sistema",
        "explicacion": "El rootkit permite al atacante mantener acceso al sistema con privilegios elevados sin ser detectado."
      },
      {
        "pregunta": "¿Qué tipo de software se utiliza para enviar grandes volúmenes de correo no deseado?",
        "respuestas": [
          "Spyware",
          "Spammers",
          "Exploit",
          "Flooder"
        ],
        "correcta": "Spammers",
        "explicacion": "Los programas spammers generan o distribuyen correos masivos con publicidad o enlaces maliciosos."
      },
      {
        "pregunta": "¿Cuál es la función principal del software espía (Spyware)?",
        "respuestas": [
          "Recopilar información del sistema y transmitirla sin consentimiento",
          "Eliminar programas obsoletos",
          "Optimizar la conexión de red",
          "Realizar copias de seguridad"
        ],
        "correcta": "Recopilar información del sistema y transmitirla sin consentimiento",
        "explicacion": "El spyware monitoriza la actividad del usuario y envía datos confidenciales al atacante."
      },
      {
        "pregunta": "¿Qué caracteriza a un caballo de Troya (Trojan horse)?",
        "respuestas": [
          "Se propaga automáticamente sin intervención del usuario",
          "Simula ser un programa útil, pero contiene funciones maliciosas ocultas",
          "Cifra los archivos del usuario y exige rescate",
          "Aprovecha vulnerabilidades del navegador"
        ],
        "correcta": "Simula ser un programa útil, pero contiene funciones maliciosas ocultas",
        "explicacion": "El troyano aparenta ser software legítimo, pero permite acceso remoto o daño al sistema."
      },
      {
        "pregunta": "¿Qué diferencia principal existe entre un virus y un gusano?",
        "respuestas": [
          "El virus se propaga automáticamente y el gusano necesita intervención",
          "El gusano se propaga de forma autónoma mientras el virus requiere ejecución del usuario",
          "Ambos se comportan igual",
          "El virus es siempre más destructivo que el gusano"
        ],
        "correcta": "El gusano se propaga de forma autónoma mientras el virus requiere ejecución del usuario",
        "explicacion": "Los gusanos se replican sin intervención humana, mientras que los virus necesitan ejecutarse desde un archivo infectado."
      },
      {
        "pregunta": "¿Qué es un bot o zombi?",
        "respuestas": [
          "Un programa que optimiza la CPU para tareas en segundo plano",
          "Un programa instalado en una máquina infectada que puede lanzar ataques remotos",
          "Un antivirus automatizado",
          "Un servidor proxy seguro"
        ],
        "correcta": "Un programa instalado en una máquina infectada que puede lanzar ataques remotos",
        "explicacion": "Los bots son controlados de forma remota para participar en redes zombi (botnets) y lanzar ataques distribuidos."
      },
      {
        "pregunta": "¿En qué se basa principalmente la clasificación del malware?",
        "respuestas": [
          "En su lenguaje de programación",
          "En cómo se propaga y las acciones o cargas útiles que realiza",
          "En el tamaño del archivo ejecutable",
          "En el sistema operativo al que afecta"
        ],
        "correcta": "En cómo se propaga y las acciones o cargas útiles que realiza",
        "explicacion": "El malware se clasifica primero por su método de propagación y luego por las acciones o daños que ejecuta una vez activo."
      },
      {
        "pregunta": "¿Qué tipo de malware necesita un programa anfitrión para ejecutarse?",
        "respuestas": [
          "Gusano",
          "Troyano",
          "Virus",
          "Bot"
        ],
        "correcta": "Virus",
        "explicacion": "Los virus son códigos parásitos que requieren un programa anfitrión para ejecutarse y propagarse."
      },
      {
        "pregunta": "¿Cuál de los siguientes tipos de malware NO se replica?",
        "respuestas": [
          "Virus",
          "Gusano",
          "Troyano",
          "Macrovirus"
        ],
        "correcta": "Troyano",
        "explicacion": "Los troyanos no se replican; se distribuyen engañando al usuario para que los instale."
      },
      {
        "pregunta": "¿Qué mecanismo de propagación utiliza la ingeniería social?",
        "respuestas": [
          "Explotación de vulnerabilidades de software",
          "Infección de contenido existente",
          "Engaño al usuario para que instale malware o responda a phishing",
          "Uso de descargas automáticas"
        ],
        "correcta": "Engaño al usuario para que instale malware o responda a phishing",
        "explicacion": "La ingeniería social aprovecha la manipulación psicológica para lograr que el usuario ejecute o descargue malware."
      },
      {
        "pregunta": "¿Qué acción puede realizar el malware una vez dentro del sistema?",
        "respuestas": [
          "Actualizar el sistema operativo",
          "Corromper archivos, robar información o convertir el equipo en parte de una botnet",
          "Optimizar la memoria del sistema",
          "Eliminar aplicaciones inactivas"
        ],
        "correcta": "Corromper archivos, robar información o convertir el equipo en parte de una botnet",
        "explicacion": "Las cargas útiles del malware suelen incluir corrupción, robo de datos o uso del equipo como agente zombi."
      },
      {
        "pregunta": "¿Qué eran los 'kits de ataque' en sus orígenes?",
        "respuestas": [
          "Herramientas de defensa para detener virus",
          "Paquetes de software usados para crear malware fácilmente",
          "Programas diseñados para analizar vulnerabilidades legales",
          "Protocolos de red para autenticación segura"
        ],
        "correcta": "Paquetes de software usados para crear malware fácilmente",
        "explicacion": "Los kits de ataque, también conocidos como 'crimeware', permiten a personas sin grandes conocimientos crear y propagar malware."
      },
      {
        "pregunta": "¿Qué término se usa comúnmente para referirse a los kits de herramientas de malware?",
        "respuestas": [
          "Crimeware",
          "Spyware",
          "Adware",
          "Ransomware"
        ],
        "correcta": "Crimeware",
        "explicacion": "El término 'crimeware' se refiere a los kits que facilitan la creación y distribución de malware con fines delictivos."
      },
      {
        "pregunta": "¿Qué problema generan las variantes de malware creadas mediante kits de ataque?",
        "respuestas": [
          "Son detectadas fácilmente por los antivirus",
          "Dificultan la defensa porque cambian su firma constantemente",
          "Solo afectan a redes locales",
          "No pueden replicarse"
        ],
        "correcta": "Dificultan la defensa porque cambian su firma constantemente",
        "explicacion": "Las variantes generadas automáticamente hacen difícil su detección al modificar el código o comportamiento del malware original."
      },
      {
        "pregunta": "¿Qué ejemplos de kits de ataque se mencionan en las diapositivas?",
        "respuestas": [
          "Stuxnet y WannaCry",
          "Zeus y Angler",
          "Mirai y Trickbot",
          "Emotet y Pegasus"
        ],
        "correcta": "Zeus y Angler",
        "explicacion": "Zeus y Angler son ejemplos históricos de kits de ataque que facilitaron la creación de malware financiero y de red."
      },
      {
        "pregunta": "¿Cuál fue uno de los principales cambios en las fuentes de ataque modernas?",
        "respuestas": [
          "El malware ahora solo es desarrollado por aficionados",
          "Los atacantes son más organizados y motivados por razones económicas o políticas",
          "Los virus se crean solo para pruebas de laboratorio",
          "Los ataques se limitan a pequeñas empresas"
        ],
        "correcta": "Los atacantes son más organizados y motivados por razones económicas o políticas",
        "explicacion": "Actualmente, el malware proviene de grupos criminales, agencias y organizaciones que buscan beneficio o poder político."
      },
      {
        "pregunta": "¿Qué tipo de organizaciones participan hoy en día como fuentes de ataque?",
        "respuestas": [
          "Solo individuos con fines educativos",
          "Empresas tecnológicas que prueban seguridad",
          "Criminales, grupos políticos y agencias gubernamentales",
          "Usuarios domésticos sin conocimientos técnicos"
        ],
        "correcta": "Criminales, grupos políticos y agencias gubernamentales",
        "explicacion": "El panorama moderno incluye crimen organizado, ciberespionaje estatal y grupos de hacktivismo político."
      },
      {
        "pregunta": "¿Qué fenómeno ha surgido a partir de la evolución del malware y las fuentes de ataque?",
        "respuestas": [
          "Una economía clandestina basada en la venta de kits, acceso e información robada",
          "Una red de seguridad global cooperativa",
          "Un aumento en la protección automática de los sistemas",
          "La desaparición del malware autónomo"
        ],
        "correcta": "Una economía clandestina basada en la venta de kits, acceso e información robada",
        "explicacion": "El malware ha generado una economía ilegal donde se comercializan herramientas, credenciales y datos robados."
      },
      {
        "pregunta": "¿Qué caracteriza a una Amenaza Persistente Avanzada (APT)?",
        "respuestas": [
          "Ataques rápidos y aleatorios sin planificación",
          "Aplicación persistente de tecnologías de intrusión dirigidas a objetivos específicos",
          "Ataques masivos realizados por usuarios comunes",
          "Uso de virus simples que se replican en múltiples sistemas"
        ],
        "correcta": "Aplicación persistente de tecnologías de intrusión dirigidas a objetivos específicos",
        "explicacion": "Las APT se caracterizan por ataques planificados, prolongados y enfocados en objetivos concretos, usualmente empresariales o políticos."
      },
      {
        "pregunta": "¿A quiénes se atribuyen comúnmente las APTs?",
        "respuestas": [
          "Usuarios domésticos sin experiencia",
          "Organizaciones patrocinadas por el Estado y empresas criminales",
          "Grupos de hackers independientes sin financiación",
          "Universidades e instituciones educativas"
        ],
        "correcta": "Organizaciones patrocinadas por el Estado y empresas criminales",
        "explicacion": "Las APT suelen contar con grandes recursos y respaldo financiero, a menudo procedente de gobiernos o crimen organizado."
      },
      {
        "pregunta": "¿Qué diferencia a una APT de otros tipos de ataque?",
        "respuestas": [
          "Su rapidez en comprometer los sistemas",
          "La falta de planificación y recursos",
          "Su enfoque prolongado, selectivo y sigiloso",
          "Su dependencia exclusiva de software libre"
        ],
        "correcta": "Su enfoque prolongado, selectivo y sigiloso",
        "explicacion": "Las APT destacan por la infiltración cuidadosa y prolongada, con mínima detección y objetivos muy específicos."
      },
      {
        "pregunta": "¿Cuáles son ejemplos de ataques APT conocidos?",
        "respuestas": [
          "Stuxnet, Aurora, RSA y APT1",
          "WannaCry, Zeus y Angler",
          "NotPetya, Mirai y Pegasus",
          "ILOVEYOU, MyDoom y Slammer"
        ],
        "correcta": "Stuxnet, Aurora, RSA y APT1",
        "explicacion": "Estos son ejemplos de ataques de alto perfil considerados APT, por su sofisticación y objetivos estratégicos."
      },
      {
        "pregunta": "¿Qué implica el componente 'Avanzado' de una APT?",
        "respuestas": [
          "Uso de herramientas básicas de código abierto",
          "Utilización de una amplia variedad de tecnologías y malware, incluso personalizado",
          "Ataques simples ejecutados manualmente",
          "Ausencia de planificación previa"
        ],
        "correcta": "Utilización de una amplia variedad de tecnologías y malware, incluso personalizado",
        "explicacion": "El componente avanzado se refiere al uso de técnicas sofisticadas o personalizadas para adaptarse a cada objetivo."
      },
      {
        "pregunta": "¿Qué significa que una APT sea 'persistente'?",
        "respuestas": [
          "Que el ataque se repite una sola vez",
          "Que busca resultados inmediatos",
          "Que se mantiene activa durante un periodo prolongado para asegurar el éxito",
          "Que solo afecta a usuarios individuales"
        ],
        "correcta": "Que se mantiene activa durante un periodo prolongado para asegurar el éxito",
        "explicacion": "Las APT aplican ataques sostenidos hasta lograr infiltrarse completamente en el objetivo elegido."
      },
      {
        "pregunta": "¿Qué aspecto resalta el componente 'Amenaza' de una APT?",
        "respuestas": [
          "Que no hay intención de dañar al objetivo",
          "Que los atacantes actúan al azar sin coordinación",
          "Que existe una intención clara, organizada y financiada de comprometer objetivos seleccionados",
          "Que el ataque se basa en errores humanos fortuitos"
        ],
        "correcta": "Que existe una intención clara, organizada y financiada de comprometer objetivos seleccionados",
        "explicacion": "Las APT son planificadas por atacantes con recursos y motivaciones precisas, no por acciones casuales."
      },
      {
        "pregunta": "¿Qué factor humano aumenta el nivel de amenaza en las APT?",
        "respuestas": [
          "El uso de software libre en las empresas",
          "La participación activa de personas en el proceso de ataque",
          "La falta de acceso a herramientas automatizadas",
          "El exceso de protocolos de seguridad"
        ],
        "correcta": "La participación activa de personas en el proceso de ataque",
        "explicacion": "Los atacantes humanos pueden adaptar estrategias y técnicas, aumentando la eficacia de las APT frente a los sistemas automatizados."
      },
      {
        "pregunta": "¿Qué objetivos suelen tener las APT?",
        "respuestas": [
          "Causar daños físicos a infraestructuras públicas exclusivamente",
          "Robo de propiedad intelectual, datos sensibles o sabotaje de infraestructuras críticas",
          "Distribuir publicidad en línea",
          "Infectar sistemas de usuarios domésticos"
        ],
        "correcta": "Robo de propiedad intelectual, datos sensibles o sabotaje de infraestructuras críticas",
        "explicacion": "Las APT se dirigen a información valiosa o a la alteración de infraestructuras clave con impacto económico o político."
      },
      {
        "pregunta": "¿Qué técnicas suelen emplear las APT?",
        "respuestas": [
          "Solo ataques de fuerza bruta",
          "Ingeniería social, phishing y descargas automáticas de sitios web comprometidos",
          "Únicamente infecciones por USB",
          "Ataques de denegación de servicio masivos"
        ],
        "correcta": "Ingeniería social, phishing y descargas automáticas de sitios web comprometidos",
        "explicacion": "Estas técnicas son comunes para obtener acceso inicial a los sistemas objetivo y establecer persistencia."
      },
      {
        "pregunta": "¿Cuál es la intención principal detrás de las APT?",
        "respuestas": [
          "Interrumpir brevemente la red objetivo",
          "Infectar al objetivo con malware sofisticado para mantener y ampliar el acceso",
          "Robar contraseñas simples de usuarios domésticos",
          "Propagar virus de forma aleatoria en internet"
        ],
        "correcta": "Infectar al objetivo con malware sofisticado para mantener y ampliar el acceso",
        "explicacion": "El propósito de las APT es infiltrarse de manera prolongada y sigilosa, manteniendo el control del sistema comprometido."
      },
      {
        "pregunta": "¿Qué infecta un virus del sector de arranque?",
        "respuestas": [
          "Archivos de texto",
          "Un registro de inicio maestro o un registro de inicio del disco",
          "Programas de red",
          "Macros en documentos"
        ],
        "correcta": "Un registro de inicio maestro o un registro de inicio del disco",
        "explicacion": "El virus del sector de arranque se propaga cuando el sistema arranca desde un disco que contiene el virus."
      },
      {
        "pregunta": "¿Qué tipo de virus infecta archivos ejecutables del sistema?",
        "respuestas": [
          "Macrovirus",
          "Virus de archivos",
          "Virus polimórfico",
          "Virus del sector de arranque"
        ],
        "correcta": "Virus de archivos",
        "explicacion": "Los virus de archivos se adhieren a archivos ejecutables o scripts que el sistema operativo considera ejecutables."
      },
      {
        "pregunta": "¿Qué caracteriza a un macrovirus?",
        "respuestas": [
          "Se propaga a través del arranque del sistema operativo",
          "Infecta archivos con código de macro o script dentro de aplicaciones",
          "Se replica mediante redes P2P",
          "Solo afecta a sistemas basados en Linux"
        ],
        "correcta": "Infecta archivos con código de macro o script dentro de aplicaciones",
        "explicacion": "Los macrovirus se alojan en documentos que contienen macros, como los de Microsoft Office."
      },
      {
        "pregunta": "¿Qué es un virus multipartito?",
        "respuestas": [
          "Un virus que infecta de múltiples maneras o vectores",
          "Un virus que cambia de color en la interfaz",
          "Un virus que se propaga solo por red",
          "Un virus que requiere conexión a internet"
        ],
        "correcta": "Un virus que infecta de múltiples maneras o vectores",
        "explicacion": "El virus multipartito combina distintos métodos de infección, afectando tanto archivos como sectores de arranque."
      },
      {
        "pregunta": "¿Qué hace un virus cifrado?",
        "respuestas": [
          "Cifra archivos del usuario",
          "Crea una clave aleatoria y cifra el resto del propio virus para ocultarse",
          "Desactiva el sistema antivirus",
          "Cifra todo el disco duro"
        ],
        "correcta": "Crea una clave aleatoria y cifra el resto del propio virus para ocultarse",
        "explicacion": "El virus cifrado se oculta de los antivirus cifrando su propio código para evitar detección."
      },
      {
        "pregunta": "¿Qué caracteriza a un virus sigiloso?",
        "respuestas": [
          "Usa ingeniería social para engañar al usuario",
          "Está diseñado para ocultarse del software antivirus",
          "Cambia su nombre en cada infección",
          "Ataca únicamente sistemas de red"
        ],
        "correcta": "Está diseñado para ocultarse del software antivirus",
        "explicacion": "El virus sigiloso modifica su comportamiento o respuestas al sistema para evitar ser detectado."
      },
      {
        "pregunta": "¿Qué diferencia al virus polimórfico del metamórfico?",
        "respuestas": [
          "El polimórfico solo cambia su forma, el metamórfico se reescribe completamente",
          "El metamórfico solo cifra su contenido",
          "Ambos son idénticos",
          "El polimórfico infecta hardware y el metamórfico software"
        ],
        "correcta": "El polimórfico solo cambia su forma, el metamórfico se reescribe completamente",
        "explicacion": "El virus polimórfico altera su estructura pero mantiene su código base, mientras que el metamórfico se reescribe por completo."
      },
      {
        "pregunta": "¿Qué hace un gusano una vez infecta una máquina?",
        "respuestas": [
          "Busca infectar más máquinas y puede lanzar ataques desde la infectada",
          "Solo se mantiene en el equipo local",
          "Requiere acción manual para propagarse",
          "Cifra todos los archivos del usuario"
        ],
        "correcta": "Busca infectar más máquinas y puede lanzar ataques desde la infectada",
        "explicacion": "Los gusanos se propagan automáticamente usando la máquina infectada como plataforma para nuevos ataques."
      },
      {
        "pregunta": "¿Cómo se propagan los gusanos de correo electrónico?",
        "respuestas": [
          "Usando mensajes de texto por teléfono",
          "Por archivos adjuntos o scripts en correos y mensajería instantánea",
          "Mediante descargas en servidores FTP",
          "Solo por USB o CD"
        ],
        "correcta": "Por archivos adjuntos o scripts en correos y mensajería instantánea",
        "explicacion": "Los gusanos de correo se envían como archivos adjuntos o enlaces en mensajes electrónicos."
      },
      {
        "pregunta": "¿Qué medios pueden usar los gusanos para propagarse?",
        "respuestas": [
          "Solo mediante discos ópticos",
          "A través de conexiones de red, vulnerabilidades o medios extraíbles",
          "Exclusivamente mediante redes inalámbricas",
          "Solo con permisos de administrador"
        ],
        "correcta": "A través de conexiones de red, vulnerabilidades o medios extraíbles",
        "explicacion": "Los gusanos aprovechan vulnerabilidades o dispositivos conectados (USB, CD, red) para replicarse."
      },
      {
        "pregunta": "¿Qué tipo de carga suelen incluir los gusanos?",
        "respuestas": [
          "Una carga útil, como instalación de malware adicional o robo de datos",
          "Solo código inofensivo",
          "Una copia del sistema operativo",
          "Un antivirus embebido"
        ],
        "correcta": "Una carga útil, como instalación de malware adicional o robo de datos",
        "explicacion": "Además de replicarse, los gusanos pueden ejecutar acciones maliciosas o instalar otros programas dañinos."
      },
      {
        "pregunta": "¿Dónde se desarrolló la primera implementación conocida de un gusano?",
        "respuestas": [
          "En los laboratorios Xerox (Palo Alto) en la década de 1980",
          "En Microsoft en los 90",
          "En la NASA durante los 70",
          "En Google a principios de los 2000"
        ],
        "correcta": "En los laboratorios Xerox (Palo Alto) en la década de 1980",
        "explicacion": "El primer gusano fue un experimento de Xerox en los años 80, precursor de los gusanos modernos."
      },
      {
        "pregunta": "¿Qué método de replicación utiliza el gusano a través del correo electrónico?",
        "respuestas": [
          "Descarga automática desde servidores FTP",
          "Envía una copia de sí mismo como archivo adjunto o mensaje",
          "Modifica el registro del sistema",
          "Infecta macros de documentos"
        ],
        "correcta": "Envía una copia de sí mismo como archivo adjunto o mensaje",
        "explicacion": "El gusano aprovecha el correo o la mensajería para enviarse automáticamente a otros usuarios."
      },
      {
        "pregunta": "¿Cómo puede replicarse un gusano por compartición de archivos?",
        "respuestas": [
          "Creando una copia de sí mismo en un medio extraíble o infectando archivos compartidos",
          "Cifrando archivos antes de enviarlos",
          "Usando enlaces simbólicos del sistema",
          "A través de actualizaciones automáticas"
        ],
        "correcta": "Creando una copia de sí mismo en un medio extraíble o infectando archivos compartidos",
        "explicacion": "Los gusanos pueden copiarse en dispositivos extraíbles o carpetas compartidas para extenderse."
      },
      {
        "pregunta": "¿Qué permite la capacidad de ejecución remota en un gusano?",
        "respuestas": [
          "Ejecutar una copia de sí mismo en otro sistema",
          "Actualizar el sistema operativo",
          "Eliminar los archivos infectados",
          "Cifrar las conexiones seguras"
        ],
        "correcta": "Ejecutar una copia de sí mismo en otro sistema",
        "explicacion": "Esta capacidad le permite al gusano replicarse y ejecutarse en otros equipos sin intervención humana."
      },
      {
        "pregunta": "¿Qué hace un gusano con capacidad de inicio de sesión remoto?",
        "respuestas": [
          "Requiere que el usuario lo ejecute manualmente",
          "Inicia sesión en otro sistema como usuario y se copia mediante comandos",
          "Encripta los archivos de red",
          "Solo infecta sistemas locales"
        ],
        "correcta": "Inicia sesión en otro sistema como usuario y se copia mediante comandos",
        "explicacion": "El gusano usa credenciales o exploits para iniciar sesión y copiarse a sistemas remotos automáticamente."
      },
      {
        "pregunta": "¿Qué hace un virus cuando infecta un programa?",
        "respuestas": [
          "Elimina el programa infectado",
          "Lo modifica para incluir una copia del virus",
          "Lo cifra completamente",
          "Lo bloquea para impedir su ejecución"
        ],
        "correcta": "Lo modifica para incluir una copia del virus",
        "explicacion": "Los virus insertan su propio código dentro de programas existentes, replicándose y continuando su propagación."
      },
      {
        "pregunta": "¿Cómo puede propagarse un virus informático?",
        "respuestas": [
          "Por hardware dañado",
          "A través de entornos de red",
          "Solo mediante descargas manuales",
          "Por fallos del sistema operativo"
        ],
        "correcta": "A través de entornos de red",
        "explicacion": "Los virus pueden transmitirse fácilmente a través de redes conectadas, expandiéndose entre dispositivos."
      },
      {
        "pregunta": "¿Qué ocurre cuando un virus se adjunta a un programa ejecutable?",
        "respuestas": [
          "Solo se ejecuta cuando el usuario lo abre manualmente",
          "Se ejecuta en secreto cuando se ejecuta el programa anfitrión",
          "No puede realizar ninguna acción",
          "Se elimina automáticamente"
        ],
        "correcta": "Se ejecuta en secreto cuando se ejecuta el programa anfitrión",
        "explicacion": "El virus se disfraza como parte del programa legítimo y se activa al ejecutarse el anfitrión."
      },
      {
        "pregunta": "¿Por qué un virus puede ser específico para un sistema operativo o hardware?",
        "respuestas": [
          "Porque aprovecha sus detalles y debilidades",
          "Porque depende de la conexión a internet",
          "Porque solo se ejecuta con permisos de administrador",
          "Porque requiere un lenguaje de programación específico"
        ],
        "correcta": "Porque aprovecha sus detalles y debilidades",
        "explicacion": "Los virus se diseñan para explotar vulnerabilidades concretas de un sistema o arquitectura."
      },
      {
        "pregunta": "¿Qué se entiende por 'mecanismo de infección' en un virus?",
        "respuestas": [
          "El evento que activa el virus",
          "El medio por el cual el virus se propaga o infecta",
          "La acción que realiza el virus tras activarse",
          "El archivo que almacena el virus"
        ],
        "correcta": "El medio por el cual el virus se propaga o infecta",
        "explicacion": "El mecanismo de infección o vector de infección determina cómo el virus se transmite entre sistemas."
      },
      {
        "pregunta": "¿Qué es el detonante de un virus?",
        "respuestas": [
          "El evento o condición que determina cuándo se activa o libera la carga útil",
          "El programa que lo elimina del sistema",
          "El archivo principal del virus",
          "La firma digital del malware"
        ],
        "correcta": "El evento o condición que determina cuándo se activa o libera la carga útil",
        "explicacion": "El detonante, también llamado bomba lógica, controla cuándo el virus ejecuta su función."
      },
      {
        "pregunta": "¿Qué representa la carga útil de un virus?",
        "respuestas": [
          "El tamaño del virus",
          "La acción que realiza además de propagarse",
          "La parte que permite ocultarse de antivirus",
          "El vector de infección"
        ],
        "correcta": "La acción que realiza además de propagarse",
        "explicacion": "La carga útil puede causar daño, modificar archivos o realizar una acción visible en el sistema."
      },
      {
        "pregunta": "¿Qué ocurre en la fase latente de un virus?",
        "respuestas": [
          "El virus se propaga activamente",
          "El virus está inactivo esperando activación",
          "El virus ejecuta su carga útil",
          "El virus se elimina del sistema"
        ],
        "correcta": "El virus está inactivo esperando activación",
        "explicacion": "Durante la fase latente, el virus no realiza acciones hasta que un evento lo active."
      },
      {
        "pregunta": "¿Qué causa la fase desencadenante de un virus?",
        "respuestas": [
          "Una acción del usuario o evento del sistema que activa el virus",
          "La instalación de un antivirus",
          "Una actualización del sistema operativo",
          "La eliminación de un archivo del sistema"
        ],
        "correcta": "Una acción del usuario o evento del sistema que activa el virus",
        "explicacion": "La fase desencadenante se produce cuando el virus cumple la condición programada para activarse."
      },
      {
        "pregunta": "¿Qué ocurre en la fase de propagación de un virus?",
        "respuestas": [
          "El virus coloca copias de sí mismo en otros programas o áreas del sistema",
          "El virus se desactiva temporalmente",
          "El sistema elimina el virus",
          "El usuario detecta la infección inmediatamente"
        ],
        "correcta": "El virus coloca copias de sí mismo en otros programas o áreas del sistema",
        "explicacion": "En esta fase, el virus se replica para expandirse a nuevos programas o ubicaciones."
      },
      {
        "pregunta": "¿Qué sucede durante la fase de ejecución del virus?",
        "respuestas": [
          "El virus cumple la función para la que fue diseñado",
          "El virus se borra automáticamente",
          "El virus deja de propagarse",
          "El antivirus lo detecta y lo elimina"
        ],
        "correcta": "El virus cumple la función para la que fue diseñado",
        "explicacion": "Durante la fase de ejecución, el virus realiza su carga útil, que puede ser dañina o inofensiva."
      },
      {
        "pregunta": "Según NISTIR 7298, ¿qué define un virus de macro?",
        "respuestas": [
          "Un virus que infecta archivos del sistema operativo",
          "Un virus que se adhiere a documentos y usa macros para ejecutarse y propagarse",
          "Un virus que infecta solo archivos ejecutables",
          "Un virus que modifica hardware físico"
        ],
        "correcta": "Un virus que se adhiere a documentos y usa macros para ejecutarse y propagarse",
        "explicacion": "Los virus de macro aprovechan las capacidades de programación de documentos (como Word o Excel)."
      },
      {
        "pregunta": "¿Qué tipo de código infectan los virus de macro?",
        "respuestas": [
          "Código ejecutable del sistema",
          "Secuencias de comandos dentro de documentos",
          "Programas compilados en C o Java",
          "Drivers del sistema operativo"
        ],
        "correcta": "Secuencias de comandos dentro de documentos",
        "explicacion": "Los virus de macro alteran el código de macros o scripts embebidos en documentos de usuario."
      },
      {
        "pregunta": "¿Por qué los virus de macros son especialmente peligrosos?",
        "respuestas": [
          "Porque solo afectan a sistemas Windows",
          "Porque son independientes de la plataforma y se propagan fácilmente",
          "Porque requieren acceso físico al equipo",
          "Porque solo pueden funcionar en red"
        ],
        "correcta": "Porque son independientes de la plataforma y se propagan fácilmente",
        "explicacion": "Los virus de macro no dependen del sistema operativo y se diseminan con facilidad entre documentos."
      },
      {
        "pregunta": "¿Por qué los controles de acceso tradicionales no son efectivos contra los virus de macros?",
        "respuestas": [
          "Porque infectan programas del sistema",
          "Porque infectan documentos de usuario que los controles permiten modificar",
          "Porque se propagan por hardware",
          "Porque no se pueden detectar con antivirus"
        ],
        "correcta": "Porque infectan documentos de usuario que los controles permiten modificar",
        "explicacion": "Los usuarios suelen tener permiso para editar documentos, lo que facilita la propagación del virus."
      },
      {
        "pregunta": "¿Qué ventaja tienen los virus de macros frente a los virus tradicionales?",
        "respuestas": [
          "Son más difíciles de escribir",
          "Son más fáciles de escribir o modificar",
          "Solo pueden ejecutarse en servidores",
          "Requieren un lenguaje compilado"
        ],
        "correcta": "Son más fáciles de escribir o modificar",
        "explicacion": "Debido a su sencillez y lenguaje interpretado, los virus de macros son más simples de crear."
      },
      {
        "pregunta": "¿Cuál es la primera función en la fase de propagación de un gusano de red?",
        "respuestas": [
          "Enviar spam masivo",
          "Realizar un escaneo o toma de huellas digitales",
          "Eliminar archivos del sistema",
          "Instalar una puerta trasera"
        ],
        "correcta": "Realizar un escaneo o toma de huellas digitales",
        "explicacion": "El escaneo es la primera etapa en la propagación, permitiendo al gusano buscar nuevos sistemas que infectar."
      },
      {
        "pregunta": "¿Qué busca un gusano durante el proceso de escaneo?",
        "respuestas": [
          "Direcciones IP vulnerables para infectar",
          "Correos electrónicos activos",
          "Usuarios con permisos de administrador",
          "Servidores DNS libres"
        ],
        "correcta": "Direcciones IP vulnerables para infectar",
        "explicacion": "El gusano analiza la red para localizar posibles sistemas que pueda comprometer."
      },
      {
        "pregunta": "¿Qué caracteriza al escaneo aleatorio en los gusanos?",
        "respuestas": [
          "Cada host usa una lista de IPs fija",
          "Cada host sondea direcciones aleatorias con una semilla diferente",
          "Solo se escanean direcciones locales",
          "Los gusanos se limitan a un rango específico"
        ],
        "correcta": "Cada host sondea direcciones aleatorias con una semilla diferente",
        "explicacion": "Esto genera un tráfico masivo en Internet, provocando posibles interrupciones incluso antes del ataque real."
      },
      {
        "pregunta": "¿Qué problema causa el escaneo aleatorio?",
        "respuestas": [
          "Aumenta el tiempo de infección",
          "Provoca un alto volumen de tráfico en Internet",
          "Evita que el gusano se propague",
          "Bloquea los firewalls de los sistemas"
        ],
        "correcta": "Provoca un alto volumen de tráfico en Internet",
        "explicacion": "El escaneo aleatorio genera tanto tráfico que puede saturar redes antes de iniciarse el ataque real."
      },
      {
        "pregunta": "¿Qué hace el atacante en el método de lista de resultados?",
        "respuestas": [
          "Crea una lista de máquinas vulnerables antes de infectarlas",
          "Envía directamente el gusano a todas las IP conocidas",
          "Usa una única IP maestra para el ataque",
          "Ejecuta el gusano desde un servidor remoto"
        ],
        "correcta": "Crea una lista de máquinas vulnerables antes de infectarlas",
        "explicacion": "El atacante analiza previamente los sistemas vulnerables y luego reparte esa lista entre los hosts infectados."
      },
      {
        "pregunta": "¿Qué ventaja tiene el escaneo con lista de resultados?",
        "respuestas": [
          "Requiere menos memoria",
          "Genera menos tráfico y acelera la infección",
          "Evita la detección gracias a un escaneo más corto",
          "Solo infecta redes internas"
        ],
        "correcta": "Evita la detección gracias a un escaneo más corto",
        "explicacion": "Como las máquinas ya están identificadas, el escaneo se realiza rápidamente, reduciendo la posibilidad de detección."
      },
      {
        "pregunta": "¿Qué caracteriza al escaneo topológico?",
        "respuestas": [
          "Usa información contenida en la máquina víctima para encontrar nuevos objetivos",
          "Solo busca IPs aleatorias",
          "Utiliza proxies para redirigir el ataque",
          "Depende de una lista manual de direcciones IP"
        ],
        "correcta": "Usa información contenida en la máquina víctima para encontrar nuevos objetivos",
        "explicacion": "El gusano obtiene direcciones o contactos almacenados en la máquina infectada para continuar propagándose."
      },
      {
        "pregunta": "¿Qué permite el escaneo por subred local?",
        "respuestas": [
          "Infectar hosts dentro de la misma red protegida por un firewall",
          "Infectar exclusivamente redes externas",
          "Evitar el uso de direcciones IP locales",
          "Deshabilitar firewalls corporativos"
        ],
        "correcta": "Infectar hosts dentro de la misma red protegida por un firewall",
        "explicacion": "El gusano busca dispositivos dentro de la misma subred, incluso si están detrás de un firewall."
      },
      {
        "pregunta": "¿Cuál fue el primer gusano de red significativo?",
        "respuestas": [
          "Code Red",
          "Gusano Morris",
          "SQL Slammer",
          "Nimda"
        ],
        "correcta": "Gusano Morris",
        "explicacion": "El gusano Morris, creado en 1988, fue la primera infección masiva de gusanos en sistemas UNIX."
      },
      {
        "pregunta": "¿En qué año se publicó el gusano Morris?",
        "respuestas": [
          "1985",
          "1988",
          "1991",
          "1995"
        ],
        "correcta": "1988",
        "explicacion": "Fue creado por Robert Morris y afectó gravemente sistemas UNIX."
      },
      {
        "pregunta": "¿Qué error aprovechó el gusano Morris?",
        "respuestas": [
          "Un fallo en el protocolo Finger",
          "Un bug en Microsoft IIS",
          "Una vulnerabilidad en SQL Server",
          "Un fallo en el correo electrónico"
        ],
        "correcta": "Un fallo en el protocolo Finger",
        "explicacion": "El gusano Morris se aprovechó de un error en el protocolo Finger que revelaba información de usuarios remotos."
      },
      {
        "pregunta": "¿Qué técnica utilizó el gusano Morris para propagarse?",
        "respuestas": [
          "Cifrado simétrico de contraseñas",
          "Descifrar el archivo de contraseñas locales y reutilizarlas",
          "Fuerza bruta sobre direcciones IP",
          "Inyección SQL"
        ],
        "correcta": "Descifrar el archivo de contraseñas locales y reutilizarlas",
        "explicacion": "Intentaba usar las credenciales de los usuarios locales para iniciar sesión en otros sistemas."
      },
      {
        "pregunta": "¿Cuál fue el primer gusano en incluir virus y troyanos en un mismo paquete?",
        "respuestas": [
          "Melissa",
          "Code Red",
          "Mydoom",
          "Nimda"
        ],
        "correcta": "Melissa",
        "explicacion": "Melissa, creado en 1998, fue pionero en combinar gusanos, virus y troyanos en un solo ataque."
      },
      {
        "pregunta": "¿Qué vulnerabilidad explotaban los gusanos Code Red y Code Red II?",
        "respuestas": [
          "Un error de Microsoft IIS",
          "Una brecha en Outlook Express",
          "Una falla en SQL Server",
          "Una vulnerabilidad de Apache"
        ],
        "correcta": "Un error de Microsoft IIS",
        "explicacion": "Ambos gusanos apuntaban al servidor web IIS de Microsoft, usando la misma vulnerabilidad."
      },
      {
        "pregunta": "¿Qué característica hacía destacable al gusano Nimda?",
        "respuestas": [
          "Se propagaba exclusivamente por correo electrónico",
          "Combinaba características de gusano, virus y código móvil",
          "Atacaba únicamente sistemas UNIX",
          "Se distribuía mediante USB"
        ],
        "correcta": "Combinaba características de gusano, virus y código móvil",
        "explicacion": "Nimda fue uno de los primeros ataques híbridos en múltiples plataformas y métodos de propagación."
      },
      {
        "pregunta": "¿Qué vulnerabilidad explotó el gusano SQL Slammer?",
        "respuestas": [
          "Desbordamiento de búfer en SQL Server",
          "Error en el protocolo FTP",
          "Debilidad en contraseñas de usuario",
          "Falla en el correo SMTP"
        ],
        "correcta": "Desbordamiento de búfer en SQL Server",
        "explicacion": "SQL Slammer era compacto y se propagaba extremadamente rápido usando esta vulnerabilidad."
      },
      {
        "pregunta": "¿Qué hacía el gusano Sobig.F?",
        "respuestas": [
          "Instalaba puertas traseras en sistemas UNIX",
          "Convertía máquinas infectadas en motores de spam usando servidores proxy abiertos",
          "Cifraba archivos personales",
          "Desactivaba antivirus automáticamente"
        ],
        "correcta": "Convertía máquinas infectadas en motores de spam usando servidores proxy abiertos",
        "explicacion": "Este gusano explotaba servidores proxy para distribuir correos no deseados."
      },
      {
        "pregunta": "¿Qué año apareció el gusano Mydoom?",
        "respuestas": [
          "2001",
          "2004",
          "2008",
          "2010"
        ],
        "correcta": "2004",
        "explicacion": "Mydoom fue un gusano de correo electrónico masivo que instalaba puertas traseras en los sistemas infectados."
      },
      {
        "pregunta": "¿Qué característica tenía el gusano Warezov?",
        "respuestas": [
          "Se enviaba como archivo adjunto y podía desactivar productos de seguridad",
          "Solo infectaba sistemas UNIX",
          "Se propagaba por Bluetooth",
          "Cifraba el disco duro completo"
        ],
        "correcta": "Se enviaba como archivo adjunto y podía desactivar productos de seguridad",
        "explicacion": "Warezov creaba ejecutables en el sistema y podía neutralizar antivirus activos."
      },
      {
        "pregunta": "¿Qué vulnerabilidad explotó Conficker (Downadup)?",
        "respuestas": [
          "Desbordamiento del búfer de Windows",
          "Error en SQL Server",
          "Fallo en el protocolo FTP",
          "Vulnerabilidad en Apache"
        ],
        "correcta": "Desbordamiento del búfer de Windows",
        "explicacion": "Conficker fue una de las infecciones más extendidas tras SQL Slammer, afectando sistemas Windows."
      },
      {
        "pregunta": "¿Qué característica destacaba del gusano Stuxnet?",
        "respuestas": [
          "Ataque a sistemas industriales con propagación limitada para evitar detección",
          "Propagación masiva por correo electrónico",
          "Ataques a redes sociales",
          "Ransomware automatizado"
        ],
        "correcta": "Ataque a sistemas industriales con propagación limitada para evitar detección",
        "explicacion": "Stuxnet atacó sistemas de control industrial, con una propagación cuidadosamente controlada."
      },
      {
        "pregunta": "¿Qué tipo de ataque fue WannaCry?",
        "respuestas": [
          "Virus autorreplicable",
          "Ransomware",
          "Rootkit",
          "Caballo de Troya"
        ],
        "correcta": "Ransomware",
        "explicacion": "WannaCry fue un ataque de ransomware lanzado en mayo de 2017 que cifraba los archivos y pedía un rescate."
      },
      {
        "pregunta": "¿En qué año ocurrió el ataque de WannaCry?",
        "respuestas": [
          "2015",
          "2016",
          "2017",
          "2018"
        ],
        "correcta": "2017",
        "explicacion": "El ataque WannaCry se propagó en mayo de 2017 afectando a más de 150 países."
      },
      {
        "pregunta": "¿Qué vulnerabilidad explotaba WannaCry?",
        "respuestas": [
          "El protocolo FTP",
          "El servicio SMB en Windows sin parches",
          "El sistema de correo Outlook",
          "El navegador Internet Explorer"
        ],
        "correcta": "El servicio SMB en Windows sin parches",
        "explicacion": "WannaCry aprovechó una vulnerabilidad en SMB (Server Message Block) de Windows para propagarse."
      },
      {
        "pregunta": "¿Cómo se propagaba WannaCry?",
        "respuestas": [
          "Como troyano adjunto a correos",
          "Como gusano escaneando redes locales y remotas",
          "A través de descargas en navegadores",
          "Por dispositivos USB infectados"
        ],
        "correcta": "Como gusano escaneando redes locales y remotas",
        "explicacion": "WannaCry actuaba como un gusano, buscando automáticamente otros sistemas vulnerables en la red."
      },
      {
        "pregunta": "¿Qué detuvo la propagación de WannaCry?",
        "respuestas": [
          "Un parche de Microsoft",
          "La desconexión masiva de Internet",
          "La activación accidental de un dominio 'kill-switch'",
          "Un antivirus global"
        ],
        "correcta": "La activación accidental de un dominio 'kill-switch'",
        "explicacion": "Un investigador en Reino Unido activó por casualidad un dominio que detuvo la propagación del malware."
      },
      {
        "pregunta": "¿Qué hacía WannaCry una vez instalado?",
        "respuestas": [
          "Borraba archivos del sistema",
          "Cifraba los archivos y exigía un rescate",
          "Desactivaba antivirus",
          "Robaba contraseñas"
        ],
        "correcta": "Cifraba los archivos y exigía un rescate",
        "explicacion": "WannaCry cifraba los archivos del sistema infectado y pedía un pago en criptomonedas para liberarlos."
      },
      {
        "pregunta": "¿Qué característica NO pertenece a la tecnología de los gusanos?",
        "respuestas": [
          "Multiplataforma",
          "Difusión ultrarrápida",
          "Requiere intervención manual para propagarse",
          "Explotación múltiple"
        ],
        "correcta": "Requiere intervención manual para propagarse",
        "explicacion": "Los gusanos se propagan automáticamente, sin intervención del usuario."
      },
      {
        "pregunta": "¿Qué significa que un gusano sea polimórfico?",
        "respuestas": [
          "Que cambia su forma o código en cada infección",
          "Que se propaga por Bluetooth",
          "Que requiere múltiples exploits",
          "Que funciona en varias plataformas"
        ],
        "correcta": "Que cambia su forma o código en cada infección",
        "explicacion": "El gusano polimórfico modifica su código para evitar ser detectado por antivirus."
      },
      {
        "pregunta": "¿Cómo define el NIST SP 800-28 al código móvil?",
        "respuestas": [
          "Programas que solo se ejecutan en dispositivos móviles",
          "Programas que pueden enviarse sin cambios y ejecutarse en diferentes plataformas",
          "Códigos maliciosos usados para redes sociales",
          "Programas que requieren compilación previa en cada sistema"
        ],
        "correcta": "Programas que pueden enviarse sin cambios y ejecutarse en diferentes plataformas",
        "explicacion": "El código móvil puede ejecutarse en múltiples sistemas manteniendo la misma semántica."
      },
      {
        "pregunta": "¿Desde dónde se transmite el código móvil?",
        "respuestas": [
          "Desde el almacenamiento local",
          "Desde un sistema remoto a un sistema local",
          "Desde un dispositivo USB",
          "Desde el BIOS del equipo"
        ],
        "correcta": "Desde un sistema remoto a un sistema local",
        "explicacion": "El código móvil se envía de forma remota y se ejecuta localmente, a menudo aprovechando vulnerabilidades."
      },
      {
        "pregunta": "¿Qué función puede cumplir el código móvil en ataques informáticos?",
        "respuestas": [
          "Actuar como virus, gusano o troyano",
          "Optimizar la transferencia de archivos",
          "Reducir el consumo de CPU",
          "Proteger contraseñas del sistema"
        ],
        "correcta": "Actuar como virus, gusano o troyano",
        "explicacion": "El código móvil puede ser el medio usado para introducir malware en sistemas locales."
      },
      {
        "pregunta": "¿Qué lenguaje NO es un vehículo popular de código móvil?",
        "respuestas": [
          "Java",
          "VBScript",
          "ActiveX",
          "Python"
        ],
        "correcta": "Python",
        "explicacion": "Los más comunes son Java applets, ActiveX, JavaScript y VBScript, no Python."
      },
      {
        "pregunta": "¿Cuál es una forma común de ataque mediante código móvil?",
        "respuestas": [
          "Adjuntos de correo electrónico",
          "Actualizaciones de BIOS",
          "Reescritura de discos",
          "Instalación de drivers firmados"
        ],
        "correcta": "Adjuntos de correo electrónico",
        "explicacion": "Los correos con adjuntos maliciosos son un método clásico para distribuir código móvil."
      },
      {
        "pregunta": "¿Qué otro método común permite ejecutar código móvil malicioso?",
        "respuestas": [
          "Sitios web interactivos y dinámicos",
          "Redes privadas VPN",
          "Protocolos de impresión",
          "Actualizaciones de controladores"
        ],
        "correcta": "Sitios web interactivos y dinámicos",
        "explicacion": "Los sitios web con scripts activos pueden ejecutar código móvil en el navegador del usuario."
      },
      {
        "pregunta": "¿Cuál fue el primer gusano de teléfonos móviles descubierto?",
        "respuestas": [
          "CommWarrior",
          "Cabir",
          "Lasco",
          "Warezov"
        ],
        "correcta": "Cabir",
        "explicacion": "El gusano Cabir fue descubierto en 2004 y fue el primero diseñado para teléfonos móviles."
      },
      {
        "pregunta": "¿Qué año se descubrió el gusano Cabir?",
        "respuestas": [
          "2002",
          "2003",
          "2004",
          "2005"
        ],
        "correcta": "2004",
        "explicacion": "Cabir apareció en 2004, seguido por Lasco y CommWarrior en 2005."
      },
      {
        "pregunta": "¿Cómo se comunican los gusanos de teléfonos móviles?",
        "respuestas": [
          "A través de Wi-Fi",
          "Por conexiones Bluetooth o MMS",
          "Mediante puertos USB",
          "Por redes 5G"
        ],
        "correcta": "Por conexiones Bluetooth o MMS",
        "explicacion": "Estos gusanos se transmiten entre dispositivos cercanos usando tecnologías inalámbricas."
      },
      {
        "pregunta": "¿Cuál es el objetivo de los gusanos de teléfonos móviles?",
        "respuestas": [
          "Teléfonos inteligentes (smartphones)",
          "Servidores empresariales",
          "Sistemas Windows XP",
          "Equipos industriales"
        ],
        "correcta": "Teléfonos inteligentes (smartphones)",
        "explicacion": "Los gusanos móviles están diseñados para infectar dispositivos inteligentes y aprovechar sus funciones."
      },
      {
        "pregunta": "¿Qué puede hacer un gusano móvil como CommWarrior?",
        "respuestas": [
          "Desactivar el teléfono o eliminar sus datos",
          "Controlar la cámara del dispositivo",
          "Enviar publicidad por redes sociales",
          "Crear copias de seguridad falsas"
        ],
        "correcta": "Desactivar el teléfono o eliminar sus datos",
        "explicacion": "Los gusanos móviles pueden dejar inservible el teléfono, borrar información o enviar mensajes costosos."
      },
      {
        "pregunta": "¿Cómo se replica el gusano CommWarrior?",
        "respuestas": [
          "Mediante Bluetooth y MMS",
          "A través de Wi-Fi pública",
          "Usando correos electrónicos",
          "Por tarjetas SIM infectadas"
        ],
        "correcta": "Mediante Bluetooth y MMS",
        "explicacion": "CommWarrior se replica por Bluetooth a otros teléfonos y también se envía como MMS a los contactos."
      },
      {
        "pregunta": "¿Qué explotan las descargas no autorizadas (Drive-By Downloads)?",
        "respuestas": [
          "Las contraseñas de usuario",
          "Las vulnerabilidades del navegador y los complementos",
          "Los archivos de sistema",
          "El hardware del equipo"
        ],
        "correcta": "Las vulnerabilidades del navegador y los complementos",
        "explicacion": "Aprovechan fallos del navegador o plugins para descargar malware sin que el usuario lo note."
      },
      {
        "pregunta": "¿Cuándo ocurre una descarga no autorizada?",
        "respuestas": [
          "Cuando el usuario instala manualmente un archivo",
          "Cuando visita una página web maliciosa",
          "Cuando abre un correo legítimo",
          "Cuando utiliza un antivirus desactualizado"
        ],
        "correcta": "Cuando visita una página web maliciosa",
        "explicacion": "El malware se descarga automáticamente al acceder a una web controlada por el atacante."
      },
      {
        "pregunta": "¿El malware en las descargas no autorizadas se propaga activamente como un gusano?",
        "respuestas": [
          "Sí, igual que un gusano",
          "No, normalmente no se propaga activamente",
          "Solo si el sistema está en red",
          "Depende del navegador"
        ],
        "correcta": "No, normalmente no se propaga activamente",
        "explicacion": "A diferencia de los gusanos, este tipo de malware requiere que el usuario visite la web infectada."
      },
      {
        "pregunta": "¿Qué caracteriza un ataque Watering-Hole?",
        "respuestas": [
          "Infecta cualquier sitio aleatorio",
          "Se basa en comprometer sitios web frecuentados por las víctimas objetivo",
          "Afecta solo a navegadores obsoletos",
          "Requiere interacción directa del usuario"
        ],
        "correcta": "Se basa en comprometer sitios web frecuentados por las víctimas objetivo",
        "explicacion": "El atacante estudia qué webs visitan sus víctimas y compromete esas páginas para infectarlas."
      },
      {
        "pregunta": "¿Qué busca el atacante antes de realizar un ataque Watering-Hole?",
        "respuestas": [
          "Las IPs vulnerables del servidor",
          "Los sitios web que probablemente visiten las víctimas",
          "Los correos electrónicos de las víctimas",
          "Las contraseñas almacenadas en caché"
        ],
        "correcta": "Los sitios web que probablemente visiten las víctimas",
        "explicacion": "El atacante selecciona los sitios que frecuentan sus objetivos y busca vulnerabilidades en ellos."
      },
      {
        "pregunta": "¿Por qué los ataques Watering-Hole son difíciles de detectar?",
        "respuestas": [
          "Porque usan cifrado fuerte",
          "Porque el sitio comprometido actúa con normalidad",
          "Porque se ejecutan fuera del navegador",
          "Porque los antivirus los bloquean tarde"
        ],
        "correcta": "Porque el sitio comprometido actúa con normalidad",
        "explicacion": "El sitio parece legítimo y el ataque puede dirigirse solo a ciertos visitantes específicos."
      },
      {
        "pregunta": "¿Qué es la publicidad maliciosa (Malvertising)?",
        "respuestas": [
          "Colocar malware en anuncios mostrados en sitios web legítimos",
          "Usar pop-ups para pedir contraseñas",
          "Modificar el contenido de redes sociales",
          "Infectar servidores DNS"
        ],
        "correcta": "Colocar malware en anuncios mostrados en sitios web legítimos",
        "explicacion": "El atacante paga por mostrar anuncios que contienen malware en sitios web populares."
      },
      {
        "pregunta": "¿Qué ventaja tiene el malvertising para los atacantes?",
        "respuestas": [
          "No requiere comprometer el sitio web directamente",
          "Permite robar contraseñas locales",
          "Solo infecta mediante correo electrónico",
          "Necesita acceso físico al servidor"
        ],
        "correcta": "No requiere comprometer el sitio web directamente",
        "explicacion": "Los anuncios se publican en webs legítimas, por lo que el atacante no necesita hackearlas."
      },
      {
        "pregunta": "¿Qué hace el código de malware en un ataque de malvertising?",
        "respuestas": [
          "Cifra el disco duro del servidor",
          "Se genera dinámicamente para evitar detección o atacar sistemas concretos",
          "Apaga automáticamente el navegador",
          "Envía spam desde el navegador"
        ],
        "correcta": "Se genera dinámicamente para evitar detección o atacar sistemas concretos",
        "explicacion": "El código cambia su forma o comportamiento para evadir la detección o atacar objetivos específicos."
      },
      {
        "pregunta": "¿Por qué ha crecido el malvertising en los últimos años?",
        "respuestas": [
          "Porque los anuncios son fáciles de colocar y difíciles de rastrear",
          "Porque los antivirus lo fomentan",
          "Porque solo afecta a navegadores antiguos",
          "Porque requiere grandes recursos"
        ],
        "correcta": "Porque los anuncios son fáciles de colocar y difíciles de rastrear",
        "explicacion": "Los atacantes pueden publicar anuncios maliciosos temporalmente en sitios de confianza con facilidad."
      },
      {
        "pregunta": "¿Qué es el secuestro de clics (Clickjacking)?",
        "respuestas": [
          "Un ataque que roba clics o pulsaciones del usuario mediante capas invisibles",
          "Un virus que modifica el ratón del usuario",
          "Una técnica para acelerar los clics de una web",
          "Un ataque para cifrar las contraseñas"
        ],
        "correcta": "Un ataque que roba clics o pulsaciones del usuario mediante capas invisibles",
        "explicacion": "El clickjacking engaña al usuario para que interactúe con elementos ocultos o falsos en una web."
      },
      {
        "pregunta": "¿Con qué otro nombre se conoce el secuestro de clics?",
        "respuestas": [
          "Ataque de interfaz de usuario (UI)",
          "Ataque de inyección SQL",
          "Ataque DDoS",
          "Ataque de fuerza bruta"
        ],
        "correcta": "Ataque de interfaz de usuario (UI)",
        "explicacion": "También se denomina 'ataque de reparación de interfaz de usuario', ya que manipula la UI visible."
      },
      {
        "pregunta": "¿Qué puede lograr un atacante mediante clickjacking?",
        "respuestas": [
          "Robar pulsaciones o contraseñas del usuario",
          "Desactivar los firewalls del sistema",
          "Eliminar archivos locales",
          "Instalar extensiones automáticamente"
        ],
        "correcta": "Robar pulsaciones o contraseñas del usuario",
        "explicacion": "El atacante puede engañar al usuario para que introduzca datos sensibles en un marco invisible."
      },
      {
        "pregunta": "¿Qué tecnologías suelen aprovecharse en ataques de clickjacking?",
        "respuestas": [
          "Adobe Flash o JavaScript",
          "Python y PHP",
          "CSS y XML",
          "SQL y C++"
        ],
        "correcta": "Adobe Flash o JavaScript",
        "explicacion": "Se utilizan para superponer capas invisibles o crear botones falsos sobre los legítimos."
      },
      {
        "pregunta": "¿Qué técnica visual usa un ataque típico de clickjacking?",
        "respuestas": [
          "Capas transparentes u opacas para ocultar elementos maliciosos",
          "Brillo aumentado en botones",
          "Animaciones 3D falsas",
          "Superposición de texto visible"
        ],
        "correcta": "Capas transparentes u opacas para ocultar elementos maliciosos",
        "explicacion": "Estas capas engañan al usuario para hacer clic donde cree que es seguro, pero activa otra acción."
      },
      {
        "pregunta": "¿Qué objetivo final tiene el atacante en el clickjacking?",
        "respuestas": [
          "Redirigir los clics del usuario a otra página o acción no deseada",
          "Cifrar la memoria RAM del dispositivo",
          "Eliminar cookies del navegador",
          "Modificar la interfaz del sistema operativo"
        ],
        "correcta": "Redirigir los clics del usuario a otra página o acción no deseada",
        "explicacion": "El atacante intercepta los clics legítimos para ejecutar comandos o abrir sitios maliciosos."
      },
      {
        "pregunta": "¿Cuál es el objetivo principal de la ingeniería social?",
        "respuestas": [
          "Robar contraseñas mediante fuerza bruta",
          "Engañar a los usuarios para que comprometan sus propios sistemas",
          "Modificar directamente el hardware del equipo",
          "Analizar tráfico de red cifrado"
        ],
        "correcta": "Engañar a los usuarios para que comprometan sus propios sistemas",
        "explicacion": "La ingeniería social busca manipular al usuario para que realice acciones que faciliten el ataque."
      },
      {
        "pregunta": "¿Qué es el correo basura (Spam)?",
        "respuestas": [
          "Correos electrónicos personalizados de confianza",
          "Correos masivos no solicitados que pueden contener malware",
          "Correos cifrados con fines legítimos",
          "Correos automáticos del sistema operativo"
        ],
        "correcta": "Correos masivos no solicitados que pueden contener malware",
        "explicacion": "El spam es una herramienta común de propagación de malware y phishing."
      },
      {
        "pregunta": "¿Para qué se utiliza el correo basura además de propagar malware?",
        "respuestas": [
          "Ataques de phishing",
          "Instalación de antivirus falsos",
          "Actualizaciones automáticas",
          "Robo de hardware"
        ],
        "correcta": "Ataques de phishing",
        "explicacion": "El spam se usa frecuentemente para engañar a usuarios y obtener datos confidenciales."
      },
      {
        "pregunta": "¿Qué es un Caballo de Troya?",
        "respuestas": [
          "Un virus autorreplicable que se propaga por la red",
          "Un programa que contiene código oculto dañino",
          "Un sistema de cifrado de datos legítimo",
          "Un ataque basado en hardware"
        ],
        "correcta": "Un programa que contiene código oculto dañino",
        "explicacion": "El troyano aparenta ser legítimo pero ejecuta código malicioso oculto en el sistema."
      },
      {
        "pregunta": "¿Para qué se utiliza un troyano?",
        "respuestas": [
          "Para realizar funciones que el atacante no puede hacer directamente",
          "Para reparar archivos infectados",
          "Para escanear puertos abiertos",
          "Para encriptar bases de datos seguras"
        ],
        "correcta": "Para realizar funciones que el atacante no puede hacer directamente",
        "explicacion": "El troyano actúa como intermediario, permitiendo ejecutar acciones sin intervención visible del atacante."
      },
      {
        "pregunta": "¿Cuándo apareció el primer troyano para teléfonos móviles?",
        "respuestas": [
          "2002",
          "2004",
          "2006",
          "2008"
        ],
        "correcta": "2004",
        "explicacion": "El primer troyano móvil, llamado Skuller, surgió en 2004 y afectaba teléfonos inteligentes."
      },
      {
        "pregunta": "¿Cuál es el objetivo de los troyanos para teléfonos móviles?",
        "respuestas": [
          "El teléfono inteligente (smartphone)",
          "Los routers domésticos",
          "Servidores Linux",
          "Equipos industriales"
        ],
        "correcta": "El teléfono inteligente (smartphone)",
        "explicacion": "Buscan controlar o dañar los sistemas operativos móviles de los usuarios."
      },
      {
        "pregunta": "¿Cuándo se detectó por primera vez el virus de Chernóbil?",
        "respuestas": [
          "1995",
          "1998",
          "2000",
          "2001"
        ],
        "correcta": "1998",
        "explicacion": "El virus de Chernóbil fue visto por primera vez en 1998 y afectaba sistemas Windows 95 y 98."
      },
      {
        "pregunta": "¿Qué tipo de virus era el de Chernóbil?",
        "respuestas": [
          "Un gusano de red autorreplicable",
          "Un virus parásito destructivo residente en memoria",
          "Un ransomware que cifraba archivos",
          "Un troyano bancario"
        ],
        "correcta": "Un virus parásito destructivo residente en memoria",
        "explicacion": "Chernóbil era un virus residente que corrompía masivamente el sistema de archivos."
      },
      {
        "pregunta": "¿Qué hacía el virus de Chernóbil al alcanzar su fecha de activación?",
        "respuestas": [
          "Cifraba los archivos del usuario",
          "Sobrescribía el primer megabyte del disco duro con ceros",
          "Instalaba puertas traseras",
          "Robaba contraseñas"
        ],
        "correcta": "Sobrescribía el primer megabyte del disco duro con ceros",
        "explicacion": "Esto producía una corrupción total del sistema de archivos en los equipos afectados."
      },
      {
        "pregunta": "¿Qué tipo de malware era Klez?",
        "respuestas": [
          "Un gusano de correo masivo",
          "Un virus de BIOS",
          "Un troyano espía",
          "Un ransomware"
        ],
        "correcta": "Un gusano de correo masivo",
        "explicacion": "Klez se propagaba por correo electrónico enviando copias de sí mismo a direcciones encontradas en el sistema."
      },
      {
        "pregunta": "¿En qué año apareció Klez?",
        "respuestas": [
          "1998",
          "2000",
          "2001",
          "2003"
        ],
        "correcta": "2001",
        "explicacion": "Fue visto por primera vez en octubre de 2001 afectando a Windows 95 y XP."
      },
      {
        "pregunta": "¿Qué hacía Klez con algunos programas antivirus?",
        "respuestas": [
          "Los mejoraba automáticamente",
          "Podía detenerlos y eliminarlos del sistema",
          "Les cambiaba las claves de registro",
          "Los actualizaba falsamente"
        ],
        "correcta": "Podía detenerlos y eliminarlos del sistema",
        "explicacion": "Klez desactivaba o eliminaba antivirus para facilitar su propagación sin detección."
      },
      {
        "pregunta": "¿Qué efecto producía la fecha de activación del gusano Klez?",
        "respuestas": [
          "Los archivos del disco duro quedaban vacíos",
          "El sistema mostraba mensajes falsos",
          "Se bloqueaba el acceso a Internet",
          "Se cifraban los documentos del usuario"
        ],
        "correcta": "Los archivos del disco duro quedaban vacíos",
        "explicacion": "Al activarse, el gusano eliminaba o vaciaba archivos del disco duro del sistema infectado."
      },
      {
        "pregunta": "¿Qué hace el ransomware en un sistema infectado?",
        "respuestas": [
          "Cifra los datos del usuario y exige un pago por la clave de recuperación",
          "Borra todos los archivos del sistema",
          "Se propaga por Bluetooth",
          "Copia los datos a servidores externos"
        ],
        "correcta": "Cifra los datos del usuario y exige un pago por la clave de recuperación",
        "explicacion": "El ransomware bloquea el acceso a los datos del usuario hasta que se paga un rescate."
      },
      {
        "pregunta": "¿Cuál fue el primer ransomware conocido?",
        "respuestas": [
          "WannaCry",
          "PC Cyborg Trojan",
          "CryptoLocker",
          "Klez"
        ],
        "correcta": "PC Cyborg Trojan",
        "explicacion": "El PC Cyborg Trojan apareció en 1989 y exigía un pago para desbloquear los datos del sistema."
      },
      {
        "pregunta": "¿Qué técnica de cifrado usan los ransomware modernos?",
        "respuestas": [
          "Cifrado de clave pública",
          "Cifrado César simple",
          "Compresión de archivos ZIP",
          "Codificación base64"
        ],
        "correcta": "Cifrado de clave pública",
        "explicacion": "Los ransomware actuales utilizan criptografía asimétrica con claves cada vez más largas para proteger los datos."
      },
      {
        "pregunta": "¿Qué debía hacer el usuario infectado por ransomware para recuperar sus datos?",
        "respuestas": [
          "Reinstalar el sistema operativo",
          "Pagar un rescate o realizar una compra en un sitio indicado",
          "Ejecutar un programa antivirus gratuito",
          "Contactar al proveedor de software"
        ],
        "correcta": "Pagar un rescate o realizar una compra en un sitio indicado",
        "explicacion": "El atacante exigía un pago para entregar la clave de descifrado y recuperar los archivos."
      },
      {
        "pregunta": "¿Qué tipo de malware fue WannaCry?",
        "respuestas": [
          "Un gusano de red",
          "Un ransomware",
          "Un troyano bancario",
          "Un spyware"
        ],
        "correcta": "Un ransomware",
        "explicacion": "WannaCry fue un ransomware que cifraba archivos y pedía un rescate en Bitcoins para recuperarlos."
      },
      {
        "pregunta": "¿En qué año se propagó el ataque de WannaCry?",
        "respuestas": [
          "2014",
          "2015",
          "2017",
          "2019"
        ],
        "correcta": "2017",
        "explicacion": "WannaCry infectó miles de sistemas en mayo de 2017 afectando a empresas y organismos públicos."
      },
      {
        "pregunta": "¿Qué exigía WannaCry a cambio de recuperar los archivos cifrados?",
        "respuestas": [
          "Un pago en dólares",
          "Un pago en Bitcoins",
          "Una actualización del sistema",
          "Un intercambio de contraseñas"
        ],
        "correcta": "Un pago en Bitcoins",
        "explicacion": "El rescate debía pagarse en la criptomoneda Bitcoin para dificultar el rastreo."
      },
      {
        "pregunta": "¿Cómo podía una organización recuperarse de un ataque de WannaCry?",
        "respuestas": [
          "Usando antivirus gratuito",
          "Teniendo buenas copias de seguridad y un plan de respuesta ante desastres",
          "Reiniciando el sistema",
          "Actualizando el navegador"
        ],
        "correcta": "Teniendo buenas copias de seguridad y un plan de respuesta ante desastres",
        "explicacion": "La recuperación solo era posible si existían backups seguros y planes de contingencia adecuados."
      },
      {
        "pregunta": "¿Qué táctica usaban algunos atacantes de ransomware para presionar a las víctimas?",
        "respuestas": [
          "Amenazar con publicar información confidencial o destruir la clave de cifrado",
          "Enviar spam a sus contactos",
          "Bloquear el acceso al navegador",
          "Modificar el hardware del sistema"
        ],
        "correcta": "Amenazar con publicar información confidencial o destruir la clave de cifrado",
        "explicacion": "Los atacantes aumentaban la presión para forzar el pago del rescate."
      },
      {
        "pregunta": "¿Qué hacía el virus de Chernóbil a nivel físico según la diapositiva de daños en el mundo real?",
        "respuestas": [
          "Reescribía el código de la BIOS",
          "Desconectaba la tarjeta de red",
          "Apagaba el monitor",
          "Borraba los archivos temporales"
        ],
        "correcta": "Reescribía el código de la BIOS",
        "explicacion": "El virus de Chernóbil podía dañar físicamente el equipo al reescribir la BIOS."
      },
      {
        "pregunta": "¿Qué tipo de software atacaba el gusano Stuxnet?",
        "respuestas": [
          "Software de entretenimiento",
          "Sistemas de control industrial",
          "Antivirus y cortafuegos",
          "Servidores web"
        ],
        "correcta": "Sistemas de control industrial",
        "explicacion": "Stuxnet se dirigía a software de control industrial, siendo uno de los primeros casos de sabotaje tecnológico."
      },
      {
        "pregunta": "¿Qué es una bomba lógica?",
        "respuestas": [
          "Un virus que destruye la memoria del sistema",
          "Código incrustado que se ejecuta al cumplirse ciertas condiciones",
          "Un programa de defensa contra malware",
          "Una herramienta de cifrado de datos"
        ],
        "correcta": "Código incrustado que se ejecuta al cumplirse ciertas condiciones",
        "explicacion": "La bomba lógica está programada para activarse cuando se cumple un evento específico."
      },
      {
        "pregunta": "¿Qué es una botnet?",
        "respuestas": [
          "Una red de computadoras infectadas controladas remotamente",
          "Una red social para hackers",
          "Un programa antivirus colaborativo",
          "Un sistema de copia de seguridad"
        ],
        "correcta": "Una red de computadoras infectadas controladas remotamente",
        "explicacion": "Las botnets se usan para realizar ataques coordinados y automatizados."
      },
      {
        "pregunta": "¿Cuál de los siguientes NO es un uso típico de una botnet?",
        "respuestas": [
          "Ataques DDoS",
          "Enviar spam",
          "Mejorar el rendimiento de red",
          "Registrar pulsaciones de teclas"
        ],
        "correcta": "Mejorar el rendimiento de red",
        "explicacion": "Las botnets se usan con fines maliciosos como DDoS, spam o robo de información."
      },
      {
        "pregunta": "¿Qué diferencia a un bot de un gusano?",
        "respuestas": [
          "El bot no se propaga por sí mismo",
          "El gusano se instala manualmente",
          "El bot no necesita control remoto",
          "El gusano se ejecuta solo en Linux"
        ],
        "correcta": "El bot no se propaga por sí mismo",
        "explicacion": "El gusano se propaga automáticamente, mientras que el bot requiere control externo."
      },
      {
        "pregunta": "¿Qué medio se usaba tradicionalmente para controlar bots?",
        "respuestas": [
          "Servidores IRC",
          "Correo electrónico",
          "Bluetooth",
          "Navegadores web"
        ],
        "correcta": "Servidores IRC",
        "explicacion": "Los bots se conectaban a canales IRC donde recibían comandos de control remoto."
      },
      {
        "pregunta": "¿Qué protocolo usan las botnets más recientes para comunicarse de forma encubierta?",
        "respuestas": [
          "FTP",
          "HTTP",
          "SMTP",
          "SSH"
        ],
        "correcta": "HTTP",
        "explicacion": "Las nuevas botnets usan HTTP para ocultar su tráfico dentro de comunicaciones web normales."
      },
      {
        "pregunta": "¿Qué captura un keylogger?",
        "respuestas": [
          "La ubicación GPS del usuario",
          "Las pulsaciones de teclado",
          "El historial de descargas",
          "Las imágenes de la cámara"
        ],
        "correcta": "Las pulsaciones de teclado",
        "explicacion": "El keylogger registra las teclas presionadas para robar información como contraseñas."
      },
      {
        "pregunta": "¿Qué tipo de información filtra un keylogger?",
        "respuestas": [
          "Solo palabras clave como 'inicio de sesión' o 'contraseña'",
          "Datos del hardware del equipo",
          "Direcciones IP",
          "Listas de procesos del sistema"
        ],
        "correcta": "Solo palabras clave como 'inicio de sesión' o 'contraseña'",
        "explicacion": "Los keyloggers suelen filtrar información relacionada con accesos o credenciales."
      },
      {
        "pregunta": "¿Qué es un software espía (spyware)?",
        "respuestas": [
          "Un antivirus que detecta amenazas",
          "Un programa que monitoriza las actividades del usuario sin su consentimiento",
          "Un sistema de defensa activa contra ataques",
          "Un plugin de seguridad del navegador"
        ],
        "correcta": "Un programa que monitoriza las actividades del usuario sin su consentimiento",
        "explicacion": "El spyware recopila información del usuario y su actividad en el sistema de forma encubierta."
      },
      {
        "pregunta": "¿Qué acciones puede realizar el spyware?",
        "respuestas": [
          "Monitorizar historial de navegación y redirigir páginas a sitios falsos",
          "Borrar archivos temporales del sistema",
          "Instalar antivirus automáticos",
          "Enviar mensajes de seguridad al usuario"
        ],
        "correcta": "Monitorizar historial de navegación y redirigir páginas a sitios falsos",
        "explicacion": "El spyware manipula las solicitudes y monitoriza la actividad del usuario para robar datos."
      },
      {
        "pregunta": "¿Qué técnica utiliza el phishing para engañar a los usuarios?",
        "respuestas": [
          "Ataques de fuerza bruta",
          "Explotar la confianza del usuario haciéndose pasar por una fuente confiable",
          "Escaneo de puertos en la red",
          "Inyección SQL en bases de datos"
        ],
        "correcta": "Explotar la confianza del usuario haciéndose pasar por una fuente confiable",
        "explicacion": "El phishing usa ingeniería social para hacerse pasar por fuentes legítimas y obtener credenciales."
      },
      {
        "pregunta": "¿Qué suele incluir un correo de phishing?",
        "respuestas": [
          "Un enlace a un sitio web falso que imita una página legítima",
          "Archivos cifrados con contraseñas seguras",
          "Un adjunto de texto sin hipervínculos",
          "Una lista de servidores confiables"
        ],
        "correcta": "Un enlace a un sitio web falso que imita una página legítima",
        "explicacion": "Los correos de phishing contienen URLs falsas para robar credenciales del usuario."
      },
      {
        "pregunta": "¿Qué característica distingue al spear-phishing del phishing común?",
        "respuestas": [
          "Se propaga automáticamente",
          "Está dirigido a víctimas específicas tras una investigación previa",
          "Utiliza virus autorreplicantes",
          "Ataca solo dispositivos móviles"
        ],
        "correcta": "Está dirigido a víctimas específicas tras una investigación previa",
        "explicacion": "El spear-phishing personaliza los mensajes tras investigar al destinatario."
      },
      {
        "pregunta": "¿Cuál es el propósito de una puerta trasera (backdoor)?",
        "respuestas": [
          "Eliminar malware del sistema",
          "Permitir acceso secreto eludiendo controles de seguridad",
          "Cifrar archivos del sistema",
          "Crear copias de seguridad automáticas"
        ],
        "correcta": "Permitir acceso secreto eludiendo controles de seguridad",
        "explicacion": "Una backdoor ofrece un punto oculto de entrada que evita los mecanismos de autenticación normales."
      },
      {
        "pregunta": "¿Cómo se conoce también a las puertas traseras?",
        "respuestas": [
          "Ventanas de sesión",
          "Trampillas (trapdoors)",
          "Puertos seguros",
          "Firewalls inversos"
        ],
        "correcta": "Trampillas (trapdoors)",
        "explicacion": "El término 'trapdoor' o trampilla se usa como sinónimo de backdoor."
      },
      {
        "pregunta": "¿Qué es el gancho de mantenimiento?",
        "respuestas": [
          "Un tipo de ransomware",
          "Una puerta trasera creada por programadores para pruebas",
          "Un método de cifrado de archivos",
          "Una técnica de phishing avanzada"
        ],
        "correcta": "Una puerta trasera creada por programadores para pruebas",
        "explicacion": "El gancho de mantenimiento permite depurar software, pero puede ser explotado por atacantes."
      },
      {
        "pregunta": "¿Qué es un rootkit?",
        "respuestas": [
          "Un programa que elimina virus del sistema",
          "Un conjunto de programas ocultos para mantener acceso encubierto",
          "Un tipo de gusano autorreplicable",
          "Una herramienta de cifrado de datos"
        ],
        "correcta": "Un conjunto de programas ocultos para mantener acceso encubierto",
        "explicacion": "Los rootkits se diseñan para ocultar la presencia del atacante y mantener el control del sistema."
      },
      {
        "pregunta": "¿Cómo se ocultan los rootkits?",
        "respuestas": [
          "Cifrando archivos visibles del usuario",
          "Modificando los mecanismos del sistema que informan sobre procesos y registros",
          "Eliminando todos los archivos del sistema",
          "Enviando spam a otros equipos"
        ],
        "correcta": "Modificando los mecanismos del sistema que informan sobre procesos y registros",
        "explicacion": "Los rootkits alteran los mecanismos de monitoreo del sistema para ocultar su actividad."
      },
      {
        "pregunta": "¿Qué privilegios obtiene un atacante mediante un rootkit?",
        "respuestas": [
          "Usuario limitado",
          "Administrador o root",
          "Solo lectura",
          "Anónimo"
        ],
        "correcta": "Administrador o root",
        "explicacion": "Los rootkits otorgan privilegios elevados para modificar archivos y controlar el sistema."
      },
      {
        "pregunta": "¿Cuál de las siguientes NO es una clasificación de rootkits?",
        "respuestas": [
          "Basado en memoria",
          "Modo de usuario",
          "Modo kernel",
          "Basado en navegador"
        ],
        "correcta": "Basado en navegador",
        "explicacion": "Los rootkits se clasifican según su modo de ejecución y persistencia, no por navegador."
      },
      {
        "pregunta": "¿Qué tipo de rootkit permanece activo tras reiniciar el sistema?",
        "respuestas": [
          "Basado en memoria",
          "Persistente",
          "Modo usuario",
          "Externo"
        ],
        "correcta": "Persistente",
        "explicacion": "Los rootkits persistentes se reinstalan o se mantienen activos tras reinicios."
      },
      {
        "pregunta": "¿Qué tipo de rootkit actúa desde fuera del sistema operativo?",
        "respuestas": [
          "Modo kernel",
          "Modo externo",
          "Basado en memoria",
          "Modo usuario"
        ],
        "correcta": "Modo externo",
        "explicacion": "Los rootkits externos funcionan fuera del sistema, por ejemplo, desde el firmware o BIOS."
      },
      {
        "pregunta": "¿Cuál es la solución ideal frente al malware según las diapositivas?",
        "respuestas": [
          "El cifrado de discos",
          "La prevención",
          "La detección posterior",
          "El aislamiento del sistema"
        ],
        "correcta": "La prevención",
        "explicacion": "La prevención es la estrategia principal para evitar la infección de malware."
      },
      {
        "pregunta": "¿Cuáles son los cuatro elementos principales de la prevención del malware?",
        "respuestas": [
          "Política, Conciencia, Mitigación de vulnerabilidad, Mitigación de amenazas",
          "Firewall, Antivirus, Proxy, VPN",
          "Prevención, Identificación, Aislamiento, Limpieza",
          "Cifrado, Backup, Contraseña, Token"
        ],
        "correcta": "Política, Conciencia, Mitigación de vulnerabilidad, Mitigación de amenazas",
        "explicacion": "Estos cuatro pilares forman la base de una estrategia efectiva de defensa ante malware."
      },
      {
        "pregunta": "¿Qué se puede hacer si la prevención contra malware falla?",
        "respuestas": [
          "Ignorar la amenaza",
          "Usar mecanismos técnicos de detección, identificación y eliminación",
          "Desconectar temporalmente Internet",
          "Reinstalar manualmente el sistema operativo"
        ],
        "correcta": "Usar mecanismos técnicos de detección, identificación y eliminación",
        "explicacion": "Si la prevención no es suficiente, se deben aplicar métodos de respuesta y eliminación."
      },
      {
        "pregunta": "¿Qué busca explotar el phishing?",
        "respuestas": [
          "La vulnerabilidad de software",
          "La confianza del usuario mediante ingeniería social",
          "El cifrado débil de contraseñas",
          "El acceso físico al equipo"
        ],
        "correcta": "La confianza del usuario mediante ingeniería social",
        "explicacion": "El phishing se basa en engañar al usuario para que entregue sus datos personales o credenciales."
      },
      {
        "pregunta": "¿Qué elemento suele incluir un correo de phishing?",
        "respuestas": [
          "Una URL que redirige a un sitio falso",
          "Un archivo de respaldo seguro",
          "Una firma digital legítima",
          "Un enlace de soporte técnico real"
        ],
        "correcta": "Una URL que redirige a un sitio falso",
        "explicacion": "Los correos de phishing redirigen a páginas falsas que imitan sitios legítimos para robar credenciales."
      },
      {
        "pregunta": "¿Qué diferencia al spear-phishing del phishing tradicional?",
        "respuestas": [
          "El spear-phishing es un correo genérico para muchas víctimas",
          "El spear-phishing se dirige a víctimas específicas tras una investigación",
          "El spear-phishing solo infecta sistemas Linux",
          "El spear-phishing utiliza ransomware"
        ],
        "correcta": "El spear-phishing se dirige a víctimas específicas tras una investigación",
        "explicacion": "El atacante personaliza el mensaje para un objetivo concreto."
      },
      {
        "pregunta": "¿Qué es una puerta trasera o backdoor?",
        "respuestas": [
          "Un programa que bloquea accesos maliciosos",
          "Un acceso secreto a un programa que evita medidas de seguridad",
          "Un sistema de cifrado avanzado",
          "Un tipo de firewall oculto"
        ],
        "correcta": "Un acceso secreto a un programa que evita medidas de seguridad",
        "explicacion": "Las backdoors permiten al atacante eludir los mecanismos de seguridad y entrar al sistema."
      },
      {
        "pregunta": "¿Qué es el gancho de mantenimiento?",
        "respuestas": [
          "Una función de depuración que puede actuar como backdoor",
          "Un tipo de antivirus",
          "Un ataque por fuerza bruta",
          "Una medida de seguridad"
        ],
        "correcta": "Una función de depuración que puede actuar como backdoor",
        "explicacion": "Los programadores lo usan para pruebas, pero puede ser aprovechado como acceso oculto."
      },
      {
        "pregunta": "¿Qué hace un rootkit en un sistema?",
        "respuestas": [
          "Limpia el malware del sistema operativo",
          "Oculta procesos y archivos para mantener el acceso del atacante",
          "Elimina copias de seguridad antiguas",
          "Mejora el rendimiento del sistema"
        ],
        "correcta": "Oculta procesos y archivos para mantener el acceso del atacante",
        "explicacion": "El rootkit modifica el sistema para ocultar la presencia del atacante y mantener el control."
      },
      {
        "pregunta": "¿Qué privilegios obtiene un atacante con un rootkit?",
        "respuestas": [
          "Usuario limitado",
          "Privilegios de administrador o root",
          "Acceso temporal restringido",
          "Permisos solo de lectura"
        ],
        "correcta": "Privilegios de administrador o root",
        "explicacion": "El atacante obtiene control total del sistema para modificar y monitorizar procesos."
      },
      {
        "pregunta": "¿Qué tipo de rootkit permanece tras reiniciar el sistema?",
        "respuestas": [
          "Basado en memoria",
          "Persistente",
          "Modo usuario",
          "Modo kernel"
        ],
        "correcta": "Persistente",
        "explicacion": "Los rootkits persistentes se reinstalan o se mantienen activos después de reinicios."
      },
      {
        "pregunta": "¿Qué tipo de rootkit actúa fuera del sistema operativo?",
        "respuestas": [
          "Modo kernel",
          "Modo externo",
          "Basado en memoria",
          "Modo usuario"
        ],
        "correcta": "Modo externo",
        "explicacion": "Estos rootkits se ejecutan desde firmware o hardware, sin depender del sistema operativo."
      },
      {
        "pregunta": "¿Cuál es la mejor contramedida contra el malware según la diapositiva?",
        "respuestas": [
          "La prevención",
          "La eliminación",
          "El aislamiento",
          "El formateo del disco"
        ],
        "correcta": "La prevención",
        "explicacion": "Prevenir la infección es más efectivo que detectarla o eliminarla posteriormente."
      },
      {
        "pregunta": "¿Qué elementos forman parte de la prevención del malware?",
        "respuestas": [
          "Política, Conciencia, Mitigación de vulnerabilidad y Mitigación de amenazas",
          "Antivirus, Firewall, VPN y Proxy",
          "Análisis, Respuesta, Recuperación y Backup",
          "Filtrado, Segmentación, Supervisión y Bloqueo"
        ],
        "correcta": "Política, Conciencia, Mitigación de vulnerabilidad y Mitigación de amenazas",
        "explicacion": "Estos son los cuatro pilares principales de la prevención de malware."
      },
      {
        "pregunta": "Si la prevención contra malware falla, ¿qué pasos se deben seguir?",
        "respuestas": [
          "Ignorar el problema y continuar",
          "Detección, Identificación y Eliminación",
          "Desconectar Internet y reiniciar",
          "Reinstalar manualmente los drivers"
        ],
        "correcta": "Detección, Identificación y Eliminación",
        "explicacion": "Estos mecanismos permiten mitigar las amenazas una vez que el malware está presente."
      },
      {
        "pregunta": "¿Qué caracteriza a los escáneres de primera generación?",
        "respuestas": [
          "Analizan el comportamiento del malware en tiempo real",
          "Requieren una firma de malware para su identificación",
          "Usan inteligencia artificial para detectar amenazas",
          "Detectan malware desconocido sin firmas"
        ],
        "correcta": "Requieren una firma de malware para su identificación",
        "explicacion": "Los escáneres de primera generación dependen de una base de datos de firmas conocidas para identificar el malware."
      },
      {
        "pregunta": "¿Qué técnica utiliza la segunda generación de antivirus?",
        "respuestas": [
          "Trampas de actividad",
          "Reglas heurísticas",
          "Análisis basado en firmas",
          "Detección polimórfica"
        ],
        "correcta": "Reglas heurísticas",
        "explicacion": "Los antivirus de segunda generación emplean reglas heurísticas para detectar posibles instancias de malware desconocido."
      },
      {
        "pregunta": "En la tercera generación, ¿cómo se identifica el malware?",
        "respuestas": [
          "Por su estructura interna",
          "Por sus acciones en memoria",
          "Por el tamaño del archivo infectado",
          "Por su nombre en el sistema"
        ],
        "correcta": "Por sus acciones en memoria",
        "explicacion": "Los programas residentes en memoria detectan malware observando su comportamiento en lugar de su código."
      },
      {
        "pregunta": "¿Qué caracteriza a la cuarta generación de antivirus?",
        "respuestas": [
          "Usan sandbox exclusivamente",
          "Proporcionan protección con todas las funciones",
          "Escanean solo por firmas",
          "Analizan únicamente la red"
        ],
        "correcta": "Proporcionan protección con todas las funciones",
        "explicacion": "Los antivirus de cuarta generación integran múltiples técnicas de defensa como escaneo, monitoreo y control de acceso."
      },
      {
        "pregunta": "¿Qué permite el análisis sandbox?",
        "respuestas": [
          "Ejecutar código malicioso en un entorno controlado",
          "Eliminar el malware sin analizarlo",
          "Analizar firmas estáticas",
          "Simular tráfico de red"
        ],
        "correcta": "Ejecutar código malicioso en un entorno controlado",
        "explicacion": "El análisis sandbox ejecuta el código en un entorno seguro para observar su comportamiento sin poner en riesgo el sistema real."
      },
      {
        "pregunta": "¿Qué tipo de malware puede detectar el análisis sandbox?",
        "respuestas": [
          "Solo malware conocido",
          "Malware cifrado, polimórfico o metamórfico complejo",
          "Solo spyware",
          "Solo gusanos"
        ],
        "correcta": "Malware cifrado, polimórfico o metamórfico complejo",
        "explicacion": "El sandbox detecta comportamientos anómalos incluso en malware que cambia su estructura o se cifra para evitar detección."
      },
      {
        "pregunta": "¿Cuál es el principal desafío del análisis sandbox?",
        "respuestas": [
          "Detectar virus desconocidos",
          "Determinar cuánto tiempo ejecutar cada interpretación",
          "Requerir menos recursos del sistema",
          "Detectar tráfico saliente"
        ],
        "correcta": "Determinar cuánto tiempo ejecutar cada interpretación",
        "explicacion": "El tiempo de ejecución adecuado es clave para observar el comportamiento completo del malware sin ralentizar el análisis."
      },
      {
        "pregunta": "¿Qué hace el análisis dinámico de malware?",
        "respuestas": [
          "Analiza firmas estáticas",
          "Monitorea el comportamiento del programa en tiempo real",
          "Desactiva el firewall temporalmente",
          "Cifra el código malicioso"
        ],
        "correcta": "Monitorea el comportamiento del programa en tiempo real",
        "explicacion": "El análisis dinámico se ejecuta junto al sistema operativo para detectar acciones maliciosas en tiempo real."
      },
      {
        "pregunta": "¿Cuál es una ventaja del análisis dinámico?",
        "respuestas": [
          "No necesita conexión a Internet",
          "Bloquea software en tiempo real antes de causar daño",
          "Usa solo firmas conocidas",
          "Detecta rootkits automáticamente"
        ],
        "correcta": "Bloquea software en tiempo real antes de causar daño",
        "explicacion": "Su capacidad para actuar en tiempo real le permite prevenir daños antes de que se ejecuten completamente las amenazas."
      },
      {
        "pregunta": "¿Cuál es una limitación del análisis dinámico?",
        "respuestas": [
          "El código debe ejecutarse antes de ser identificado",
          "No puede detectar spyware",
          "Solo analiza el tráfico saliente",
          "Requiere hardware adicional"
        ],
        "correcta": "El código debe ejecutarse antes de ser identificado",
        "explicacion": "Como el malware debe ejecutarse para ser detectado, puede causar daños antes de ser bloqueado."
      },
      {
        "pregunta": "¿Dónde suele incluirse el software antivirus en entornos empresariales?",
        "respuestas": [
          "En el BIOS del sistema",
          "En servicios de proxy web y correo electrónico",
          "En los controladores del hardware",
          "En el almacenamiento externo"
        ],
        "correcta": "En servicios de proxy web y correo electrónico",
        "explicacion": "El antivirus perimetral se instala en los servicios de comunicación y firewall para analizar tráfico antes de llegar a la red interna."
      },
      {
        "pregunta": "¿Qué componente puede incluir análisis de tráfico de red?",
        "respuestas": [
          "IDS",
          "DHCP",
          "DNS",
          "NAT"
        ],
        "correcta": "IDS",
        "explicacion": "El sistema de detección de intrusos (IDS) analiza el tráfico en busca de patrones sospechosos."
      },
      {
        "pregunta": "¿Qué función tiene un monitor de ingreso?",
        "respuestas": [
          "Busca tráfico entrante a direcciones IP locales no utilizadas",
          "Supervisa tráfico saliente",
          "Analiza procesos en ejecución",
          "Controla accesos de usuario"
        ],
        "correcta": "Busca tráfico entrante a direcciones IP locales no utilizadas",
        "explicacion": "Los monitores de ingreso detectan actividad sospechosa proveniente del exterior al observar tráfico hacia IPs inactivas."
      },
      {
        "pregunta": "¿Qué función tiene un monitor de salida?",
        "respuestas": [
          "Supervisa tráfico saliente en busca de comportamientos sospechosos",
          "Controla el uso de CPU",
          "Administra los accesos de red internos",
          "Cifra los correos electrónicos"
        ],
        "correcta": "Supervisa tráfico saliente en busca de comportamientos sospechosos",
        "explicacion": "Estos monitores observan el tráfico que sale de la red para detectar posibles fugas de información o actividad maliciosa."
      }
    ]
  };
  temaActual: number = 0;
  temasKeys: string[] = [];
  preguntasActuales: any[] = [];
  tituloTema: string = '';
  testFinalizado: boolean = false;
  respuestasUsuario: string[] = [];
  mostrarDialogo = false;
  explicacionActual = '';
  paginaComprobada: boolean = false; // Para controlar si ya se comprobó la página
  paginaActual: number = 0;

  // === PAGINACIÓN ===
  pageOptions: SelectItem[] = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 }
  ];
  preguntasPorPagina: number = 10;
  first: number = 0; // índice de la primera pregunta mostrada

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService
  ) {
    this.temasKeys = Object.keys(this.temas);
    this.cargarTemaActual();
  }

  ngOnInit() {
    // Nada más por ahora
  }

  /**
   * Getter que devuelve el slice de preguntas para la página actual
   */
  get preguntasPag(): any[] {
    return this.preguntasActuales.slice(this.first, this.first + this.preguntasPorPagina);
  }

  /**
   * Al cambiar el selector de filas, volvemos a la primera página
   */
  onRowsChange() {
    this.first = 0;
    this.paginaActual = 0;
    this.paginaComprobada = false;
  }

  /**
   * Cambiar de página en el paginador
   */
  cambiarPagina(event: any) {
    // PrimeNG emite {page, first, rows, pageCount}
    this.first = event.first;
    this.preguntasPorPagina = event.rows;
    this.paginaActual = event.page;
    this.paginaComprobada = false; // cada cambio de página reinicia el estado de corrección
  }

  /**
   * Cargar las preguntas de un tema específico y barajar preguntas y respuestas.
   */
  cargarTemaActual() {
    this.tituloTema = this.temasKeys[this.temaActual];
    this.preguntasActuales = this.shuffleArray(this.temas[this.tituloTema]);

    this.preguntasActuales.forEach((pregunta) => {
      pregunta.respuestas = this.shuffleArray(pregunta.respuestas);
    });

    this.respuestasUsuario = new Array(this.preguntasActuales.length).fill(null);
    this.testFinalizado = false;

    // Reiniciar paginación y estado de corrección
    this.first = 0;
    this.paginaActual = 0;
    this.paginaComprobada = false;
  }

  /**
   * Barajar un array aleatoriamente.
   */
  shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }

  siguienteTema() {
    if (this.temaActual < this.temasKeys.length - 1) {
      this.temaActual++;
      this.cargarTemaActual();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('¡Has completado todos los temas!');
    }
  }

  temaAnterior() {
    if (this.temaActual > 0) {
      this.temaActual--;
      this.cargarTemaActual();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('Estás en el primer tema.');
    }
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
          { severity: 'error', summary: 'Respuesta correcta:', detail: `${pregunta.correcta}` }
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

  mostrarExplicacion(explicacion: string) {
    this.explicacionActual = explicacion;
    this.mostrarDialogo = true;
  }

  goBack() {
    this.router.navigate(['/multimedia']);
  }

  /**
   * Corrige únicamente la página actual, igual que en el Test Completo.
   */
  corregirPagina() {
    let respuestasCorrectas = 0;

    // Índices globales para la página actual
    const inicio = this.paginaActual * this.preguntasPorPagina;
    const fin = inicio + this.preguntasPorPagina;

    for (let i = inicio; i < fin; i++) {
      const pregunta = this.preguntasActuales[i];
      if (!pregunta) continue; // última página puede tener menos preguntas

      if (pregunta.seleccionada === pregunta.correcta) {
        respuestasCorrectas++;
        pregunta.mensajeRespuesta = [
          { severity: 'success', summary: 'Correcto', detail: `La respuesta seleccionada es correcta.` }
        ];
      } else {
        pregunta.mensajeRespuesta = [
          { severity: 'error', summary: 'Respuesta correcta:', detail: `${pregunta.correcta}` }
        ];
      }
    }

    this.paginaComprobada = true;

    // Número real de preguntas mostradas en la página (por si es la última)
    const numeroPreguntasPagina = this.preguntasPag.length;

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
}