import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Router } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';
import { HeadbarComponent } from '../../../headbar/headbar.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-test-completo-dyg',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DividerModule, CardModule, DialogModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule, PaginatorModule],
  providers: [ConfirmationService],
  templateUrl: './test-dyg-completo.component.html',
  styleUrl: './test-dyg-completo.component.scss'
})
export class TestCompletoDyGComponent {
  temas: { [key: string]: any[] } = {
    "Tema 5 - 1": [
      {
        "pregunta": "¿Cuál es la definición de gestión de redes?",
        "respuestas": [
          "Supervisión de los elementos de red sin control",
          "Planificación, organización, supervisión y control de elementos de comunicaciones",
          "Configuración manual de cada dispositivo",
          "Análisis exclusivo de rendimiento"
        ],
        "correcta": "Planificación, organización, supervisión y control de elementos de comunicaciones",
        "explicacion": "La respuesta correcta es: <b>Planificación, organización, supervisión y control de elementos de comunicaciones</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Cuál de estos NO es un objetivo de la gestión de redes?",
        "respuestas": [
          "Maximizar disponibilidad",
          "Minimizar costes",
          "Aproximar la utilización al 100%",
          "Eliminar todas las notificaciones"
        ],
        "correcta": "Eliminar todas las notificaciones",
        "explicacion": "La respuesta correcta es: <b>Eliminar todas las notificaciones</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "En un proyecto de gestión, ¿quiénes forman parte del grupo humano?",
        "respuestas": [
          "Solo analistas",
          "Planificadores, analistas, administradores y operadores",
          "Solo operadores",
          "Clientes finales"
        ],
        "correcta": "Planificadores, analistas, administradores y operadores",
        "explicacion": "La respuesta correcta es: <b>Planificadores, analistas, administradores y operadores</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Cuál de las siguientes Áreas Funcionales NO está definida por ISO para gestión de redes?",
        "respuestas": [
          "Supervisión y fallos",
          "Configuración",
          "Contabilidad",
          "Desarrollo de software"
        ],
        "correcta": "Desarrollo de software",
        "explicacion": "La respuesta correcta es: <b>Desarrollo de software</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "El modelo OSI de gestión incluye todas estas áreas excepto:",
        "respuestas": [
          "Fault Management",
          "Configuration Management",
          "Marketing Management",
          "Performance Management"
        ],
        "correcta": "Marketing Management",
        "explicacion": "La respuesta correcta es: <b>Marketing Management</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Cuál es una diferencia clave entre monitorización y control de red?",
        "respuestas": [
          "La monitorización actúa sobre los elementos",
          "El control obtiene información de los elementos",
          "La monitorización solo recibe datos, el control envía acciones",
          "Ambos son iguales"
        ],
        "correcta": "La monitorización solo recibe datos, el control envía acciones",
        "explicacion": "La respuesta correcta es: <b>La monitorización solo recibe datos, el control envía acciones</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué mecanismo de monitorización minimiza el tráfico de red?",
        "respuestas": [
          "Sondeo (polling)",
          "Notificaciones (event reporting)",
          "Mixtos",
          "Broadcast"
        ],
        "correcta": "Notificaciones (event reporting)",
        "explicacion": "La respuesta correcta es: <b>Notificaciones (event reporting)</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Cuál es la función principal de un proxy en monitorización mixta?",
        "respuestas": [
          "Enviar traps al gestor",
          "Traducir SNMP a HTTP",
          "Sondear a un grupo de elementos y notificar eventos",
          "Almacenar logs históricos"
        ],
        "correcta": "Sondear a un grupo de elementos y notificar eventos",
        "explicacion": "La respuesta correcta es: <b>Sondear a un grupo de elementos y notificar eventos</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Cuál NO es un componente de gestión?",
        "respuestas": [
          "Interfaz de usuario",
          "Sistema de gestión",
          "Elementos a gestionar (agentes)",
          "Aplicación de oficina"
        ],
        "correcta": "Aplicación de oficina",
        "explicacion": "La respuesta correcta es: <b>Aplicación de oficina</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "En gestión heterogénea, ¿qué problema surge?",
        "respuestas": [
          "Información normalizada",
          "Duplicidad e inconsistencia de datos",
          "Una sola interfaz",
          "Menos costes"
        ],
        "correcta": "Duplicidad e inconsistencia de datos",
        "explicacion": "La respuesta correcta es: <b>Duplicidad e inconsistencia de datos</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué protocolo normaliza las comunicaciones en gestión integrada TCP/IP?",
        "respuestas": [
          "HTTP",
          "SMTP",
          "SNMP",
          "FTP"
        ],
        "correcta": "SNMP",
        "explicacion": "La respuesta correcta es: <b>SNMP</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué estándar define la estructura de gestión de la información?",
        "respuestas": [
          "SMI",
          "MIB",
          "CMIP",
          "VACM"
        ],
        "correcta": "SMI",
        "explicacion": "La respuesta correcta es: <b>SMI</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Cuál de estos NO forma parte del modelo de gestión en Internet?",
        "respuestas": [
          "SMI",
          "MIB",
          "SNMP",
          "SMTP"
        ],
        "correcta": "SMTP",
        "explicacion": "La respuesta correcta es: <b>SMTP</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué documento es RFC 1157?",
        "respuestas": [
          "SMI",
          "MIB",
          "SNMP v1",
          "SNMP v3"
        ],
        "correcta": "SNMP v1",
        "explicacion": "La respuesta correcta es: <b>SNMP v1</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Cuál es el axioma principal del modelo de gestión?",
        "respuestas": [
          "La gestión debe ser mínima",
          "La gestión esencial debe implantarse en todos los recursos",
          "Los gestores no necesitan agentes",
          "Solo supervisar en caso de fallos"
        ],
        "correcta": "La gestión esencial debe implantarse en todos los recursos",
        "explicacion": "La respuesta correcta es: <b>La gestión esencial debe implantarse en todos los recursos</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué garantiza un impacto mínimo en los nodos gestionados?",
        "respuestas": [
          "Implementar todo el procesamiento en los agentes",
          "Minimizar la funcionalidad de SNMP",
          "Delegar complejidad en los procesos gestores",
          "Eliminar MIBs"
        ],
        "correcta": "Delegar complejidad en los procesos gestores",
        "explicacion": "La respuesta correcta es: <b>Delegar complejidad en los procesos gestores</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Cuál es la raíz del subárbol “private” en el árbol OID internet?",
        "respuestas": [
          "1.3.6.1.2.1.4.20",
          "1.3.6.1.4",
          "1.3.6.1.2.1",
          "1.3.6.1.2.1.2"
        ],
        "correcta": "1.3.6.1.4",
        "explicacion": "La respuesta correcta es: <b>1.3.6.1.4</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué tipo de objeto SNMP siempre tiene una única instancia?",
        "respuestas": [
          "Objeto tabular",
          "Objeto escalar",
          "Trap",
          "Comunidades"
        ],
        "correcta": "Objeto escalar",
        "explicacion": "La respuesta correcta es: <b>Objeto escalar</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué primitiva SNMP se usa para avanzar al siguiente objeto en orden?",
        "respuestas": [
          "GetRequest",
          "GetNextRequest",
          "SetRequest",
          "Trap"
        ],
        "correcta": "GetNextRequest",
        "explicacion": "La respuesta correcta es: <b>GetNextRequest</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿En qué puerto UDP recibe traps el gestor SNMP?",
        "respuestas": [
          "161",
          "162",
          "80",
          "23"
        ],
        "correcta": "162",
        "explicacion": "La respuesta correcta es: <b>162</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué operación SNMP permite modificar el valor de un objeto?",
        "respuestas": [
          "GetRequest",
          "GetNextRequest",
          "SetRequest",
          "GetResponse"
        ],
        "correcta": "SetRequest",
        "explicacion": "La respuesta correcta es: <b>SetRequest</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "La comunidad SNMP actúa como:",
        "respuestas": [
          "Una vista VACM",
          "Un índice de tabla",
          "Un secreto compartido (password)",
          "Un trap"
        ],
        "correcta": "Un secreto compartido (password)",
        "explicacion": "La respuesta correcta es: <b>Un secreto compartido (password)</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué mecanismo VACM controla?",
        "respuestas": [
          "Autenticación",
          "Autorización y vistas",
          "Encriptación de traps",
          "Sondeo"
        ],
        "correcta": "Autorización y vistas",
        "explicacion": "La respuesta correcta es: <b>Autorización y vistas</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Cuál es el índice simple de ifTable?",
        "respuestas": [
          "ifIndex",
          "ifEntry",
          "ifDescr",
          "ifType"
        ],
        "correcta": "ifIndex",
        "explicacion": "La respuesta correcta es: <b>ifIndex</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué tabla SNMP almacena conexiones TCP?",
        "respuestas": [
          "ipAddrTable",
          "ifTable",
          "tcpConnTable",
          "udpTable"
        ],
        "correcta": "tcpConnTable",
        "explicacion": "La respuesta correcta es: <b>tcpConnTable</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué RFC define MIB-II?",
        "respuestas": [
          "RFC 1156 y RFC 1213",
          "RFC 1157",
          "RFC 1901",
          "RFC 2271"
        ],
        "correcta": "RFC 1156 y RFC 1213",
        "explicacion": "La respuesta correcta es: <b>RFC 1156 y RFC 1213</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "El orden lexicográfico en SNMP se aplica sobre:",
        "respuestas": [
          "Direcciones IP",
          "OIDs",
          "Comandos Get",
          "Puertos UDP"
        ],
        "correcta": "OIDs",
        "explicacion": "La respuesta correcta es: <b>OIDs</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Cuál de estos NO es un documento de trabajo principal en gestión Internet?",
        "respuestas": [
          "RFC 1155",
          "RFC 1156",
          "RFC 1213",
          "RFC 2021"
        ],
        "correcta": "RFC 2021",
        "explicacion": "La respuesta correcta es: <b>RFC 2021</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué componente gestionado implementa agentes SNMP?",
        "respuestas": [
          "Estaciones de usuario",
          "Elementos de red con IP",
          "Servidores web",
          "Clientes FTP"
        ],
        "correcta": "Elementos de red con IP",
        "explicacion": "La respuesta correcta es: <b>Elementos de red con IP</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué define SMI?",
        "respuestas": [
          "Modelo de comunicaciones",
          "Estructura de MIBs",
          "Protocolo de transporte",
          "Indice de tablas"
        ],
        "correcta": "Estructura de MIBs",
        "explicacion": "La respuesta correcta es: <b>Estructura de MIBs</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué operación SNMP devuelve valores tras GetRequest?",
        "respuestas": [
          "Trap",
          "GetNextRequest",
          "GetResponse",
          "SetRequest"
        ],
        "correcta": "GetResponse",
        "explicacion": "La respuesta correcta es: <b>GetResponse</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué subnodo OID corresponde a experimental?",
        "respuestas": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correcta": "3",
        "explicacion": "La respuesta correcta es: <b>3</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Qué RFC define SNMPv3?",
        "respuestas": [
          "RFC 1157",
          "RFC 1213",
          "RFC 1901",
          "RFC 2271"
        ],
        "correcta": "RFC 2271",
        "explicacion": "La respuesta correcta es: <b>RFC 2271</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      },
      {
        "pregunta": "¿Cuál es la finalidad de MIB?",
        "respuestas": [
          "Protocolo de transporte",
          "Base de información de gestión",
          "Interfaz de usuario",
          "Control de acceso"
        ],
        "correcta": "Base de información de gestión",
        "explicacion": "La respuesta correcta es: <b>Base de información de gestión</b>. Esta opción refleja la definición oficial según el material de estudio. Las demás opciones no aplican ya que describen conceptos distintos o erróneos."
      }
    ],
    "Tema 5 - 2": [
      {
        "pregunta": "¿Qué documento define la estructura del árbol de gestión en SMI?",
        "respuestas": [
          "RFC1212",
          "RFC1155",
          "RFC1213",
          "RFC1901"
        ],
        "correcta": "RFC1155",
        "explicacion": "La respuesta correcta es: <b>RFC1155</b>. RFC 1155 (STD 16) define la estructura del árbol de gestión y declara los tipos y la macro OBJECT TYPE usados en las MIBs. Las demás opciones son incorrectas porque RFC 1212 amplía OBJECT TYPE pero no define el árbol, RFC 1213 estandariza MIB-2 (STD 17) y RFC 1901 pertenece a SNMPv2."
      },
      {
        "pregunta": "¿Cuál de estos RFC contiene las Concise MIB Definitions?",
        "respuestas": [
          "RFC1155",
          "RFC1212",
          "RFC1213",
          "RFC2271"
        ],
        "correcta": "RFC1212",
        "explicacion": "La respuesta correcta es: <b>RFC1212</b>. RFC 1212 contiene las Concise MIB Definitions que amplían la macro OBJECT TYPE original de RFC 1155. Las demás opciones no incluyen estas definiciones: RFC 1155 define el árbol, RFC 1213 estandariza MIB-2 y RFC 2271 corresponde a SNMPv3."
      },
      {
        "pregunta": "¿Qué estándar corresponde a MIB-2?",
        "respuestas": [
          "STD 16",
          "STD 17",
          "STD 18",
          "STD 19"
        ],
        "correcta": "STD 17",
        "explicacion": "La respuesta correcta es: <b>STD 17</b>. MIB-2 está definido en RFC 1213 y es el estándar STD 17. STD 16 corresponde a RFC 1155 (SMI), STD 18 y STD 19 no aplican en este contexto."
      },
      {
        "pregunta": "¿Cuál es el lenguaje de descripción en el que se basa el Modelo de Información?",
        "respuestas": [
          "XML",
          "ASN.1",
          "JSON",
          "YAML"
        ],
        "correcta": "ASN.1",
        "explicacion": "La respuesta correcta es: <b>ASN.1</b>. El Modelo de Información (MI) se basa en ASN.1 para describir la sintaxis de objetos y estructuras MIB. XML, JSON y YAML no son usados en el estándar SMI."
      },
      {
        "pregunta": "¿Qué tipo universal de ASN.1 se utiliza para definir cadenas de bytes arbitrarios?",
        "respuestas": [
          "OCTET STRING",
          "OBJECT IDENTIFIER",
          "INTEGER",
          "NULL"
        ],
        "correcta": "OCTET STRING",
        "explicacion": "La respuesta correcta es: <b>OCTET STRING</b>. OCTET STRING representa secuencias arbitrarias de bytes. OBJECT IDENTIFIER identifica nodos OID, INTEGER representa enteros y NULL indica ausencia de valor."
      },
      {
        "pregunta": "¿Cuál de estos NO es un tipo universal permitido en SMI?",
        "respuestas": [
          "SEQUENCE",
          "CHOICE",
          "INTEGER",
          "NULL"
        ],
        "correcta": "CHOICE",
        "explicacion": "La respuesta correcta es: <b>CHOICE</b>. CHOICE no está permitido como tipo universal en SMI; los construidos permitidos son SEQUENCE y SEQUENCE OF, mientras que INTEGER y NULL sí son tipos primitivos válidos."
      },
      {
        "pregunta": "¿Qué tipo predefinido SMI representa un contador de 32 bits que solo incrementa?",
        "respuestas": [
          "Gauge",
          "Counter",
          "TimeTicks",
          "Opaque"
        ],
        "correcta": "Counter",
        "explicacion": "La respuesta correcta es: <b>Counter</b>. Counter es un entero no negativo de 32 bits que solo incrementa y vuelve a cero al desbordarse. Gauge puede decrementarse, TimeTicks mide tiempo y Opaque es un OCTET STRING arbitrario."
      },
      {
        "pregunta": "¿Cuál es la unidad de TimeTicks en SMI?",
        "respuestas": [
          "Milisegundos",
          "Centésimas de segundo",
          "Segundos",
          "Microsegundos"
        ],
        "correcta": "Centésimas de segundo",
        "explicacion": "La respuesta correcta es: <b>Centésimas de segundo</b>. TimeTicks cuenta tiempo relativo en centésimas de segundo. No se mide en milisegundos, segundos ni microsegundos."
      },
      {
        "pregunta": "¿Qué tipo predefinido SMI puede incrementar y decrementar?",
        "respuestas": [
          "Counter",
          "Gauge",
          "IpAddress",
          "Opaque"
        ],
        "correcta": "Gauge",
        "explicacion": "La respuesta correcta es: <b>Gauge</b>. Gauge es un entero de 32 bits que puede incrementar y decrementar. Counter solo incrementa, IpAddress representa direcciones IPv4 y Opaque datos arbitrarios."
      },
      {
        "pregunta": "¿Qué tipo predefinido SMI agrupa varios formatos de dirección?",
        "respuestas": [
          "NetworkAddress",
          "IpAddress",
          "Counter",
          "TimeTicks"
        ],
        "correcta": "NetworkAddress",
        "explicacion": "La respuesta correcta es: <b>NetworkAddress</b>. NetworkAddress es un CHOICE que permite varios formatos de dirección (aunque hoy solo IpAddress). IpAddress solo especifica IPv4, y Counter/TimeTicks no tienen relación con direcciones."
      },
      {
        "pregunta": "Dentro de SMI, ¿qué macro se usa para declarar objetos?",
        "respuestas": [
          "OBJECT IDENTIFIER",
          "OBJECT TYPE",
          "OBJECT CLASS",
          "OBJECT GROUP"
        ],
        "correcta": "OBJECT TYPE",
        "explicacion": "La respuesta correcta es: <b>OBJECT TYPE</b>. OBJECT TYPE es la macro definida en RFC 1155 y ampliada en RFC 1212 para declarar objetos MIB. OBJECT IDENTIFIER define OIDs, y las demás no son macros de SMI."
      },
      {
        "pregunta": "En la macro OBJECT TYPE, ¿qué cláusula indica cómo se accede al objeto?",
        "respuestas": [
          "SYNTAX",
          "ACCESS",
          "STATUS",
          "VALUE"
        ],
        "correcta": "ACCESS",
        "explicacion": "La respuesta correcta es: <b>ACCESS</b>. ACCESS (read-only, read-write, etc.) define permisos de lectura/escritura. SYNTAX define tipo, STATUS requisitos de implementación y VALUE NOTATION asigna el OID."
      },
      {
        "pregunta": "¿Qué valor de ACCESS permite modificar el objeto?",
        "respuestas": [
          "read-only",
          "not-accessible",
          "read-write",
          "write-only"
        ],
        "correcta": "read-write",
        "explicacion": "La respuesta correcta es: <b>read-write</b>. Solo read-write permite modificar el valor. read-only y not-accessible no lo permiten, y write-only permite escritura sin lectura."
      },
      {
        "pregunta": "¿Qué estado STATUS indica que un objeto será eliminado en la siguiente versión?",
        "respuestas": [
          "Mandatory",
          "Optional",
          "Deprecated",
          "Obsolete"
        ],
        "correcta": "Deprecated",
        "explicacion": "La respuesta correcta es: <b>Deprecated</b>. Deprecated significa que será retirado en la próxima versión. Obsolete ya no se implementa, Mandatory es obligatorio y Optional es opcional."
      },
      {
        "pregunta": "¿Cuál de estas partes de OBJECT TYPE es opcional?",
        "respuestas": [
          "SYNTAX",
          "ACCESS",
          "DescrPart",
          "VALUE NOTATION"
        ],
        "correcta": "DescrPart",
        "explicacion": "La respuesta correcta es: <b>DescrPart</b>. DescrPart (descripción textual) es opcional. SYNTAX, ACCESS y VALUE NOTATION son obligatorios para declarar un objeto."
      },
      {
        "pregunta": "¿Qué parte de OBJECT TYPE define índices para tablas?",
        "respuestas": [
          "IndexPart",
          "DefValPart",
          "ReferPart",
          "DescrPart"
        ],
        "correcta": "IndexPart",
        "explicacion": "La respuesta correcta es: <b>IndexPart</b>. IndexPart especifica los índices de filas en tablas. DefValPart da valores por defecto, ReferPart referencias cruzadas y DescrPart descripción."
      },
      {
        "pregunta": "En OBJECT TYPE, ¿qué cláusula especifica el OID asignado?",
        "respuestas": [
          "SYNTAX",
          "STATUS",
          "VALUE NOTATION",
          "ACCESS"
        ],
        "correcta": "VALUE NOTATION",
        "explicacion": "La respuesta correcta es: <b>VALUE NOTATION</b>. VALUE NOTATION asigna el identificador OID. SYNTAX define el tipo, STATUS la obligatoriedad y ACCESS los permisos."
      },
      {
        "pregunta": "¿Cuál es el propósito de la cláusula DefValPart en OBJECT TYPE?",
        "respuestas": [
          "Describir el objeto",
          "Referenciar otras MIBs",
          "Indicar el OID",
          "Asignar valor por defecto"
        ],
        "correcta": "Asignar valor por defecto",
        "explicacion": "La respuesta correcta es: <b>Asignar valor por defecto</b>. DefValPart define el valor inicial de la instancia. DescrPart describe, ReferPart referencia MIBs y VALUE NOTATION da el OID."
      },
      {
        "pregunta": "¿Qué RFC define la estructura de los tipos usados en MIBs?",
        "respuestas": [
          "RFC1155",
          "RFC1212",
          "RFC1213",
          "RFC1902"
        ],
        "correcta": "RFC1155",
        "explicacion": "La respuesta correcta es: <b>RFC1155</b>. RFC 1155 declara los tipos primitivos y construidos usados en SMI. RFC 1212 amplía la macro, RFC 1213 estandariza MIB-2 y RFC 1902 es parte de SNMPv2."
      },
      {
        "pregunta": "¿Cómo se declara un objeto de tipo entero en SMI?",
        "respuestas": [
          "SEQUENCE { }",
          "INTEGER",
          "OCTET STRING",
          "CHOICE { }"
        ],
        "correcta": "INTEGER",
        "explicacion": "La respuesta correcta es: <b>INTEGER</b>. INTEGER es el tipo ASN.1 para enteros. SEQUENCE y SEQUENCE OF son construidos, OCTET STRING bytes y CHOICE no se usa en SMI."
      },
      {
        "pregunta": "¿Qué construcción ASN.1 se usa para definir una lista de objetos?",
        "respuestas": [
          "CHOICE",
          "SEQUENCE OF",
          "OCTET STRING",
          "NULL"
        ],
        "correcta": "SEQUENCE OF",
        "explicacion": "La respuesta correcta es: <b>SEQUENCE OF</b>. SEQUENCE OF define listas de entradas en tablas. CHOICE no es universal, OCTET STRING bytes y NULL ausencia de valor."
      },
      {
        "pregunta": "¿Qué parte de la tabla SNMP corresponde a la definición de filas?",
        "respuestas": [
          "Table",
          "Entry",
          "Columnar Objects",
          "Index"
        ],
        "correcta": "Entry",
        "explicacion": "La respuesta correcta es: <b>Entry</b>. TableEntry define la estructura de cada fila. Table es la colección, Columnar Objects son las columnas e Index los índices."
      },
      {
        "pregunta": "¿Qué secuencia ASN.1 define los elementos columnares de una tabla?",
        "respuestas": [
          "SEQUENCE",
          "SEQUENCE OF",
          "CHOICE",
          "OCTET STRING"
        ],
        "correcta": "SEQUENCE",
        "explicacion": "La respuesta correcta es: <b>SEQUENCE</b>. Cada RowEntry es una SEQUENCE de objetos columnares. SEQUENCE OF define la lista de filas, CHOICE no se usa y OCTET STRING bytes."
      },
      {
        "pregunta": "En la declaración de TcpConnTable, ¿qué objeto define la tabla?",
        "respuestas": [
          "tcpConnEntry",
          "tcpConnTable",
          "tcpConnIndex",
          "tcpConnStatus"
        ],
        "correcta": "tcpConnTable",
        "explicacion": "La respuesta correcta es: <b>tcpConnTable</b>. tcpConnTable es el objeto principal de tabla. tcpConnEntry define las filas, tcpConnIndex el índice y tcpConnStatus el estado."
      },
      {
        "pregunta": "¿Cuál es el nombre convencional de la entrada de una tabla?",
        "respuestas": [
          "Table",
          "TableEntry",
          "EntryTable",
          "RowEntry"
        ],
        "correcta": "TableEntry",
        "explicacion": "La respuesta correcta es: <b>TableEntry</b>. La convención es nombrar la fila como TableEntry. EntryTable y RowEntry no siguen la convención y Table es el conjunto."
      },
      {
        "pregunta": "¿Qué elemento define el identificador único de cada fila?",
        "respuestas": [
          "SYNTAX",
          "IndexPart",
          "ACCESS",
          "STATUS"
        ],
        "correcta": "IndexPart",
        "explicacion": "La respuesta correcta es: <b>IndexPart</b>. IndexPart especifica el/los campos que actúan como clave de fila. SYNTAX tipo, ACCESS permisos y STATUS implementación."
      },
      {
        "pregunta": "¿Qué RFC estandariza MIB-II?",
        "respuestas": [
          "RFC1155",
          "RFC1212",
          "RFC1213",
          "RFC2271"
        ],
        "correcta": "RFC1213",
        "explicacion": "La respuesta correcta es: <b>RFC1213</b>. RFC 1213 define MIB-2 (STD 17). RFC 1155 es SMI, RFC 1212 macro OBJECT TYPE y RFC 2271 SNMPv3."
      },
      {
        "pregunta": "¿Cuál de estos no es un tipo predefinido en SMI?",
        "respuestas": [
          "Counter",
          "Gauge",
          "TimeTicks",
          "IPAddressV6"
        ],
        "correcta": "IPAddressV6",
        "explicacion": "La respuesta correcta es: <b>IPAddressV6</b>. SMI incluye IpAddress (IPv4) pero no IPAddressV6. Counter, Gauge y TimeTicks son tipos predefinidos."
      },
      {
        "pregunta": "¿Qué tipo predefinido se codifica como OCTET STRING?",
        "respuestas": [
          "IpAddress",
          "Counter",
          "Gauge",
          "TimeTicks"
        ],
        "correcta": "IpAddress",
        "explicacion": "La respuesta correcta es: <b>IpAddress</b>. IpAddress se codifica internamente como OCTET STRING de 4 bytes. Counter, Gauge y TimeTicks usan INTEGER."
      },
      {
        "pregunta": "¿Qué utilidad tiene el campo ReferPart en OBJECT TYPE?",
        "respuestas": [
          "Definir sintaxis",
          "Proporcionar referencia cruzada",
          "Asignar acceso",
          "Establecer índice"
        ],
        "correcta": "Proporcionar referencia cruzada",
        "explicacion": "La respuesta correcta es: <b>Proporcionar referencia cruzada</b>. ReferPart da referencias textuales a definiciones en otras MIBs. SYNTAX define tipo, ACCESS permisos e IndexPart índice."
      },
      {
        "pregunta": "¿Cómo se denomina la macro que amplía OBJECT TYPE en RFC1212?",
        "respuestas": [
          "OBJECT GROUP",
          "OBJECT TYPE",
          "OBJECT ID",
          "OBJECT MACRO"
        ],
        "correcta": "OBJECT TYPE",
        "explicacion": "La respuesta correcta es: <b>OBJECT TYPE</b>. RFC 1212 amplía la misma macro OBJECT TYPE de RFC 1155. No existe OBJECT MACRO ni OBJECT ID, y OBJECT GROUP no declara objetos."
      },
      {
        "pregunta": "¿Qué parte de OBJECT TYPE especifica si es obligatorio implementarlo?",
        "respuestas": [
          "STATUS",
          "ACCESS",
          "SYNTAX",
          "DescrPart"
        ],
        "correcta": "STATUS",
        "explicacion": "La respuesta correcta es: <b>STATUS</b>. STATUS (Mandatory, Optional, etc.) define obligatoriedad. ACCESS da permisos, SYNTAX tipo y DescrPart descripción."
      },
      {
        "pregunta": "¿Cuál de estos STATUS indica implementación opcional?",
        "respuestas": [
          "Optional",
          "Mandatory",
          "Deprecated",
          "Obsolete"
        ],
        "correcta": "Optional",
        "explicacion": "La respuesta correcta es: <b>Optional</b>. Optional significa que la implementación es opcional. Mandatory es obligatoria, Deprecated se retira y Obsolete ya no se implementa."
      },
      {
        "pregunta": "¿Qué operación se realiza al usar SEQUENCE OF en tablas?",
        "respuestas": [
          "Definir campos escalares",
          "Definir lista de entradas",
          "Asignar OID raíz",
          "Especificar acceso"
        ],
        "correcta": "Definir lista de entradas",
        "explicacion": "La respuesta correcta es: <b>Definir lista de entradas</b>. SEQUENCE OF TableEntry crea la lista de filas de la tabla. No define campos escalares ni acceso u OID."
      },
      {
        "pregunta": "¿Qué RFC define el estándar del índice VACM?",
        "respuestas": [
          "RFC1155",
          "RFC1901",
          "RFC3415",
          "RFC2271"
        ],
        "correcta": "RFC3415",
        "explicacion": "La respuesta correcta es: <b>RFC3415</b>. RFC 3415 define VACM en SNMPv3. RFC 1155 y RFC 1212 son SMI, RFC 1901 SNMPv2 y RFC 2271 SNMPv3 PDU."
      },
      {
        "pregunta": "En los ejercicios, ¿qué medida se obtiene comparando errores con paquetes totales?",
        "respuestas": [
          "Velocidad de paquetes",
          "Porcentaje de errores",
          "Porcentaje de uso",
          "Porcentaje de ICMP"
        ],
        "correcta": "Porcentaje de errores",
        "explicacion": "La respuesta correcta es: <b>Porcentaje de errores</b>. Se calcula como errores/total. Las demás fórmulas miden uso, ICMP o velocidad."
      },
      {
        "pregunta": "Para calcular la velocidad de reenvío de datagramas IP se usan OID en:",
        "respuestas": [
          "Un solo instante",
          "Dos instantes de tiempo",
          "Tres instantes",
          "No se usa OID"
        ],
        "correcta": "Dos instantes de tiempo",
        "explicacion": "La respuesta correcta es: <b>Dos instantes de tiempo</b>. La velocidad se obtiene midiendo diferencia de contador entre dos instantes. No basta uno y tres es innecesario."
      },
      {
        "pregunta": "¿Qué OID se usa típicamente para medir el tiempo de actividad del agente?",
        "respuestas": [
          "sysDescr",
          "sysUpTime",
          "sysName",
          "sysContact"
        ],
        "correcta": "sysUpTime",
        "explicacion": "La respuesta correcta es: <b>sysUpTime</b>. sysUpTime mide centésimas de segundo desde arranque. sysDescr, sysName y sysContact dan información descriptiva."
      },
      {
        "pregunta": "¿Cuál es el propósito de los ejercicios al final del tema?",
        "respuestas": [
          "Prácticar cálculos de métricas",
          "Definir nuevos tipos ASN.1",
          "Crear nuevas tablas MIB",
          "Redactar RFCs"
        ],
        "correcta": "Prácticar cálculos de métricas",
        "explicacion": "La respuesta correcta es: <b>Prácticar cálculos de métricas</b>. Los ejercicios se centran en fórmula de errores, uso y velocidades. No definen tipos, tablas ni RFCs."
      },
      {
        "pregunta": "¿Qué porcentaje se refiere a datagramas IP recibidos?",
        "respuestas": [
          "Porcentaje de errores",
          "Porcentaje de paquetes descartados",
          "Porcentaje de datagramas IP recibidos",
          "Porcentaje de ICMP procesados"
        ],
        "correcta": "Porcentaje de datagramas IP recibidos",
        "explicacion": "La respuesta correcta es: <b>Porcentaje de datagramas IP recibidos</b>. Esto mide datagramas recibidos/total. Las otras opciones miden errores, descartes o ICMP."
      },
      {
        "pregunta": "¿Qué MIB estándar define objetos de red básicos?",
        "respuestas": [
          "MIB-I",
          "MIB-II",
          "MIB-III",
          "Private MIB"
        ],
        "correcta": "MIB-II",
        "explicacion": "La respuesta correcta es: <b>MIB-II</b>. MIB-II (RFC 1213) define los objetos fundamentales. MIB-I era anterior, MIB-III no existe y Private MIBs son específicas."
      },
      {
        "pregunta": "¿Cuál de estos es un tipo construido en ASN.1?",
        "respuestas": [
          "INTEGER",
          "OCTET STRING",
          "SEQUENCE",
          "NULL"
        ],
        "correcta": "SEQUENCE",
        "explicacion": "La respuesta correcta es: <b>SEQUENCE</b>. SEQUENCE es un tipo construido; INTEGER y OCTET STRING son primitivos, y NULL indica ausencia."
      },
      {
        "pregunta": "¿Para qué sirve la tabla tcpConnTable?",
        "respuestas": [
          "Almacenar errores",
          "Almacenar conexiones TCP",
          "Almacenar rutas IP",
          "Almacenar estadísticas ICMP"
        ],
        "correcta": "Almacenar conexiones TCP",
        "explicacion": "La respuesta correcta es: <b>Almacenar conexiones TCP</b>. tcpConnTable mantiene información de sesiones TCP activas. No guarda errores, rutas IP ni ICMP."
      },
      {
        "pregunta": "¿Qué índice se usa en tcpConnTable?",
        "respuestas": [
          "tcpConnIndex",
          "ifIndex",
          "ipAdEntAddr",
          "tcpConnState"
        ],
        "correcta": "tcpConnIndex",
        "explicacion": "La respuesta correcta es: <b>tcpConnIndex</b>. tcpConnIndex identifica filas en tcpConnTable. ifIndex es de interfaces, ipAdEntAddr de ARP y tcpConnState no es índice."
      },
      {
        "pregunta": "¿Qué porcentaje se obtiene comparando paquetes descartados con recibidos?",
        "respuestas": [
          "Porcentaje de uso",
          "Porcentaje de errores",
          "Porcentaje de paquetes descartados",
          "Velocidad de datagramas"
        ],
        "correcta": "Porcentaje de paquetes descartados",
        "explicacion": "La respuesta correcta es: <b>Porcentaje de paquetes descartados</b>. Se calcula descartes/recibidos. Errores/total mide errores y uso/total el uso de capacidad."
      },
      {
        "pregunta": "¿Cuál de estos NO es parte de la macro OBJECT TYPE?",
        "respuestas": [
          "SYNTAX",
          "STATUS",
          "INDEX",
          "ACCESS"
        ],
        "correcta": "INDEX",
        "explicacion": "La respuesta correcta es: <b>INDEX</b>. La cláusula real es IndexPart, no 'INDEX'. SYNTAX, STATUS y ACCESS sí forman parte."
      },
      {
        "pregunta": "¿Qué parte de OBJECT TYPE no es obligatoria?",
        "respuestas": [
          "SYNTAX",
          "VALUE NOTATION",
          "IndexPart",
          "DescrPart"
        ],
        "correcta": "DescrPart",
        "explicacion": "La respuesta correcta es: <b>DescrPart</b>. DescrPart es opcional; SYNTAX y VALUE NOTATION son obligatorios e IndexPart para tablas."
      },
      {
        "pregunta": "¿Qué cálculo se realiza para el porcentaje de uso de una interfaz?",
        "respuestas": [
          "Errores/total",
          "Bytes transmitidos/total",
          "Descartes/total",
          "Paquetes ICMP/total"
        ],
        "correcta": "Bytes transmitidos/total",
        "explicacion": "La respuesta correcta es: <b>Bytes transmitidos/total</b>. El uso mide bytes enviados frente al máximo, no errores, descartes ni ICMP."
      },
      {
        "pregunta": "¿Qué RFC define el modelo de información para Internet Management?",
        "respuestas": [
          "RFC1155 y RFC1212",
          "RFC1213 y RFC1901",
          "RFC1902 y RFC1905",
          "RFC2271 y RFC2272"
        ],
        "correcta": "RFC1155 y RFC1212",
        "explicacion": "La respuesta correcta es: <b>RFC1155 y RFC1212</b>. Juntos definen SMI y la macro OBJECT TYPE. Las demás combinaciones no abarcan ambos aspectos."
      },
      {
        "pregunta": "¿Qué operación ASN.1 NO se usa en SMI?",
        "respuestas": [
          "SEQUENCE",
          "SEQUENCE OF",
          "CHOICE",
          "BOOLEAN"
        ],
        "correcta": "BOOLEAN",
        "explicacion": "La respuesta correcta es: <b>BOOLEAN</b>. BOOLEAN no es un tipo universal en SMI. SEQUENCE y SEQUENCE OF se usan para tablas y CHOICE solo en NetworkAddress."
      },
      {
        "pregunta": "¿Cuál es la raíz del subárbol de objetos definidos por el usuario?",
        "respuestas": [
          "iso(1)",
          "directory(1)",
          "experimental(3)",
          "private(4)"
        ],
        "correcta": "private(4)",
        "explicacion": "La respuesta correcta es: <b>private(4)</b>. El subárbol private (OID 1.3.6.1.4) se reserva para definiciones específicas de usuarios y empresas."
      }
    ],
    "Tema 5 - 3": [
      {
        "pregunta": "¿Qué RFC define SNMPv1?",
        "respuestas": [
          "RFC 1213",
          "RFC 1157",
          "RFC 3411",
          "RFC 1901"
        ],
        "correcta": "RFC 1157",
        "explicacion": "La respuesta correcta es: <b>RFC 1157</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál de estas NO es una versión de SNMP mencionada en el tema?",
        "respuestas": [
          "SNMPv1",
          "SNMPv2",
          "SNMPv3",
          "SNMPv4"
        ],
        "correcta": "SNMPv4",
        "explicacion": "La respuesta correcta es: <b>SNMPv4</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué operación SNMP utiliza el gestor para obtener el siguiente objeto en orden lexicográfico?",
        "respuestas": [
          "GetRequest",
          "GetNextRequest",
          "SetRequest",
          "Trap"
        ],
        "correcta": "GetNextRequest",
        "explicacion": "La respuesta correcta es: <b>GetNextRequest</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué operación SNMP permite al gestor asignar un valor a una variable del agente?",
        "respuestas": [
          "GetRequest",
          "GetNextRequest",
          "SetRequest",
          "GetResponse"
        ],
        "correcta": "SetRequest",
        "explicacion": "La respuesta correcta es: <b>SetRequest</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿En qué operación SNMP el agente envía información sin necesidad de petición previa?",
        "respuestas": [
          "GetRequest",
          "Trap",
          "GetNextRequest",
          "SetRequest"
        ],
        "correcta": "Trap",
        "explicacion": "La respuesta correcta es: <b>Trap</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál es el primer paso en el proceso de transmisión de un mensaje SNMP?",
        "respuestas": [
          "Codificación BER",
          "Generación de PDU",
          "Autenticación",
          "Generación del mensaje"
        ],
        "correcta": "Generación de PDU",
        "explicacion": "La respuesta correcta es: <b>Generación de PDU</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué codificación se utiliza para el mensaje SNMP antes de enviarlo?",
        "respuestas": [
          "DER",
          "CER",
          "BER",
          "PER"
        ],
        "correcta": "BER",
        "explicacion": "La respuesta correcta es: <b>BER</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué campo del mensaje SNMP identifica de forma única cada petición?",
        "respuestas": [
          "Community",
          "Request-id",
          "Error-status",
          "Version"
        ],
        "correcta": "Request-id",
        "explicacion": "La respuesta correcta es: <b>Request-id</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué valor de Error-status indica que no existe la instancia referenciada?",
        "respuestas": [
          "tooBig",
          "noSuchName",
          "badValue",
          "genErr"
        ],
        "correcta": "noSuchName",
        "explicacion": "La respuesta correcta es: <b>noSuchName</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál de estos códigos de Error-status corresponde a valor fuera de rango?",
        "respuestas": [
          "tooBig",
          "noSuchName",
          "badValue",
          "readOnly"
        ],
        "correcta": "badValue",
        "explicacion": "La respuesta correcta es: <b>badValue</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿En qué puerto UDP escucha el gestor los traps SNMP?",
        "respuestas": [
          "161",
          "162",
          "80",
          "23"
        ],
        "correcta": "162",
        "explicacion": "La respuesta correcta es: <b>162</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué campo en el mensaje Trap indica el tiempo desde la última inicialización del agente?",
        "respuestas": [
          "Time-stamp",
          "Enterprise",
          "Agent-addr",
          "Specific-trap"
        ],
        "correcta": "Time-stamp",
        "explicacion": "La respuesta correcta es: <b>Time-stamp</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál es el código genérico de trap para reinicio inesperado?",
        "respuestas": [
          "warmStart",
          "coldStart",
          "linkDown",
          "authenticationFailure"
        ],
        "correcta": "coldStart",
        "explicacion": "La respuesta correcta es: <b>coldStart</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué campo del mensaje SNMP contiene la comunidad para autenticación?",
        "respuestas": [
          "Version",
          "Community",
          "Request-id",
          "Error-index"
        ],
        "correcta": "Community",
        "explicacion": "La respuesta correcta es: <b>Community</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál de estos NO es un campo de PDU SNMP v1 GetRequest?",
        "respuestas": [
          "VariableBindings",
          "Error-status",
          "Generic-trap",
          "Error-index"
        ],
        "correcta": "Generic-trap",
        "explicacion": "La respuesta correcta es: <b>Generic-trap</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "Durante la recepción de un mensaje SNMP, ¿qué se verifica justo después de la sintaxis?",
        "respuestas": [
          "Versión",
          "Autenticación",
          "Acceso VACM",
          "VariableBindings"
        ],
        "correcta": "Versión",
        "explicacion": "La respuesta correcta es: <b>Versión</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué sucede si la autenticación de una PDU SNMP falla al recibirla?",
        "respuestas": [
          "Se procesa igual",
          "Se descarta y se envía trap",
          "Se devuelve tooBig",
          "Se ignora el error"
        ],
        "correcta": "Se descarta y se envía trap",
        "explicacion": "La respuesta correcta es: <b>Se descarta y se envía trap</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué lista permite multiplexar varias operaciones en un solo mensaje SNMP?",
        "respuestas": [
          "Request-id",
          "VariableBindings",
          "Error-status",
          "Generic-trap"
        ],
        "correcta": "VariableBindings",
        "explicacion": "La respuesta correcta es: <b>VariableBindings</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿En SNMPv2, qué nuevo código de error se usa en lugar de readOnly?",
        "respuestas": [
          "notWritable",
          "noSuchObject",
          "wrongType",
          "genErr"
        ],
        "correcta": "notWritable",
        "explicacion": "La respuesta correcta es: <b>notWritable</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál es el orden de pasos en la transmisión SNMP?",
        "respuestas": [
          "Codificación → Generación PDU → Autenticación → Mensaje",
          "Generación PDU → Autenticación → Mensaje → Codificación",
          "Autenticación → Generación PDU → Codificación → Mensaje",
          "Generación PDU → Mensaje → Autenticación → Codificación"
        ],
        "correcta": "Generación PDU → Autenticación → Mensaje → Codificación",
        "explicacion": "La respuesta correcta es: <b>Generación PDU → Autenticación → Mensaje → Codificación</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué operación SNMP debe ser atómica en su respuesta?",
        "respuestas": [
          "GetRequest",
          "GetNextRequest",
          "SetRequest",
          "Todas las anteriores"
        ],
        "correcta": "Todas las anteriores",
        "explicacion": "La respuesta correcta es: <b>Todas las anteriores</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué valor de Error-status indica que la respuesta generada supera el tamaño UDP?",
        "respuestas": [
          "tooBig",
          "noSuchName",
          "badValue",
          "genErr"
        ],
        "correcta": "tooBig",
        "explicacion": "La respuesta correcta es: <b>tooBig</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál es el código genérico de trap para pérdida de vecino EGP?",
        "respuestas": [
          "egpNeighborLoss",
          "enterpriseSpecific",
          "linkDown",
          "warmStart"
        ],
        "correcta": "egpNeighborLoss",
        "explicacion": "La respuesta correcta es: <b>egpNeighborLoss</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué campo de Trap identifica el tipo de sistema que lo genera?",
        "respuestas": [
          "Enterprise",
          "Agent-addr",
          "Generic-trap",
          "Specific-trap"
        ],
        "correcta": "Enterprise",
        "explicacion": "La respuesta correcta es: <b>Enterprise</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿En qué unidad se expresa Time-stamp en traps SNMP?",
        "respuestas": [
          "Segundos",
          "Centésimas de segundo",
          "Milisegundos",
          "Microsegundos"
        ],
        "correcta": "Centésimas de segundo",
        "explicacion": "La respuesta correcta es: <b>Centésimas de segundo</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué operación SNMP devuelve los valores solicitados tras GetRequest?",
        "respuestas": [
          "GetNextRequest",
          "SetRequest",
          "GetResponse",
          "Trap"
        ],
        "correcta": "GetResponse",
        "explicacion": "La respuesta correcta es: <b>GetResponse</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál es el código genérico de trap para fallo en un enlace?",
        "respuestas": [
          "linkDown",
          "linkUp",
          "authenticationFailure",
          "enterpriseSpecific"
        ],
        "correcta": "linkDown",
        "explicacion": "La respuesta correcta es: <b>linkDown</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué campo del mensaje SNMP indica la posición del error en VariableBindings?",
        "respuestas": [
          "Error-status",
          "Error-index",
          "Request-id",
          "Community"
        ],
        "correcta": "Error-index",
        "explicacion": "La respuesta correcta es: <b>Error-index</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué proceso NO forma parte de la recepción SNMP?",
        "respuestas": [
          "Chequeo de sintaxis",
          "Verificación de versión",
          "Autenticación",
          "Codificación BER"
        ],
        "correcta": "Codificación BER",
        "explicacion": "La respuesta correcta es: <b>Codificación BER</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué sucede si un SetRequest en una tabla no es permitido por la política?",
        "respuestas": [
          "Se crea la fila igualmente",
          "Se devuelve un error y no se modifica nada",
          "Se ignora la petición",
          "Se actualiza parcialmente"
        ],
        "correcta": "Se devuelve un error y no se modifica nada",
        "explicacion": "La respuesta correcta es: <b>Se devuelve un error y no se modifica nada</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál es el código genérico de trap para reinicio planificado en caliente?",
        "respuestas": [
          "coldStart",
          "warmStart",
          "linkUp",
          "authenticationFailure"
        ],
        "correcta": "warmStart",
        "explicacion": "La respuesta correcta es: <b>warmStart</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué puerto UDP usa el agente para recibir GetRequests?",
        "respuestas": [
          "161",
          "162",
          "80",
          "23"
        ],
        "correcta": "161",
        "explicacion": "La respuesta correcta es: <b>161</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué parte del mensaje SNMP especifica la versión del protocolo?",
        "respuestas": [
          "Version",
          "Community",
          "Request-id",
          "Error-status"
        ],
        "correcta": "Version",
        "explicacion": "La respuesta correcta es: <b>Version</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué código de trap genérico indica autenticación fallida?",
        "respuestas": [
          "linkDown",
          "authenticationFailure",
          "egpNeighborLoss",
          "coldStart"
        ],
        "correcta": "authenticationFailure",
        "explicacion": "La respuesta correcta es: <b>authenticationFailure</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué macro ASN.1 declara el formato del mensaje SNMP?",
        "respuestas": [
          "SEQUENCE",
          "SEQUENCE OF",
          "CHOICE",
          "OBJECT TYPE"
        ],
        "correcta": "SEQUENCE",
        "explicacion": "La respuesta correcta es: <b>SEQUENCE</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿En la generación de PDU, qué formato de definición se utiliza?",
        "respuestas": [
          "ASN.1 según RFC1157",
          "XML según RFC1902",
          "JSON según RFC3411",
          "YAML según RFC2271"
        ],
        "correcta": "ASN.1 según RFC1157",
        "explicacion": "La respuesta correcta es: <b>ASN.1 según RFC1157</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué entidad realiza la autenticación de la comunidad en SNMPv1?",
        "respuestas": [
          "Agente",
          "Gestor",
          "Servicio de autenticación",
          "Broker SNMP"
        ],
        "correcta": "Servicio de autenticación",
        "explicacion": "La respuesta correcta es: <b>Servicio de autenticación</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál de estos pasos NO aparece en el proceso de transmisión SNMP?",
        "respuestas": [
          "Generación de PDU",
          "Autenticación",
          "Compilación de MIB",
          "Codificación BER"
        ],
        "correcta": "Compilación de MIB",
        "explicacion": "La respuesta correcta es: <b>Compilación de MIB</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué componente decide la política de acceso tras la autenticación?",
        "respuestas": [
          "Servicio de transporte",
          "Entidad del protocolo",
          "Generador de PDU",
          "Codificador BER"
        ],
        "correcta": "Entidad del protocolo",
        "explicacion": "La respuesta correcta es: <b>Entidad del protocolo</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué característica distingue a los traps enterpriseSpecific?",
        "respuestas": [
          "Son estándar",
          "Requieren confirmación",
          "Son específicos de cada empresa",
          "Se envían por TCP"
        ],
        "correcta": "Son específicos de cada empresa",
        "explicacion": "La respuesta correcta es: <b>Son específicos de cada empresa</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál es el estado Error-status en un GetRequest inicial?",
        "respuestas": [
          "0 (noError)",
          "1 (tooBig)",
          "2 (noSuchName)",
          "5 (genErr)"
        ],
        "correcta": "0 (noError)",
        "explicacion": "La respuesta correcta es: <b>0 (noError)</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué herramienta se sugiere para capturar tráfico SNMP en los ejercicios?",
        "respuestas": [
          "tcpdump",
          "WireShark",
          "snmpwalk",
          "curl"
        ],
        "correcta": "WireShark",
        "explicacion": "La respuesta correcta es: <b>WireShark</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Cuál es la última etapa tras generar y autenticar un mensaje SNMP?",
        "respuestas": [
          "Envio PDU",
          "Codificación BER",
          "Verificación de versión",
          "Procesado de traps"
        ],
        "correcta": "Codificación BER",
        "explicacion": "La respuesta correcta es: <b>Codificación BER</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
      },
      {
        "pregunta": "¿Qué sucede si un GetNextRequest solicita el final de una vista?",
        "respuestas": [
          "Devuelve NoSuchName",
          "Reinicia al primer OID",
          "Ignora la petición",
          "Devuelve sysUpTime"
        ],
        "correcta": "Devuelve NoSuchName",
        "explicacion": "La respuesta correcta es: <b>Devuelve NoSuchName</b>. Esta opción concuerda con el estándar SNMP definido en el material del tema. Las demás opciones describen comandos, versiones o códigos que no corresponden a la pregunta."
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

