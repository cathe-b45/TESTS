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
        "pregunta": "¿Qué es la seguridad informática según el NIST?",
        "respuestas": [
          "El uso de antivirus para proteger los equipos personales",
          "Medidas y controles que garantizan la confidencialidad, integridad y disponibilidad de los activos del sistema de información",
          "La instalación de cortafuegos y contraseñas seguras en la red",
          "Un conjunto de programas que protegen únicamente los datos de usuario"
        ],
        "correcta": "Medidas y controles que garantizan la confidencialidad, integridad y disponibilidad de los activos del sistema de información",
        "explicacion": "Según el informe NISTIR 7298 v3, la seguridad informática busca proteger los activos del sistema (hardware, software, firmware e información) mediante medidas que aseguren confidencialidad, integridad y disponibilidad."
      },
      {
        "pregunta": "¿Qué se entiende por confidencialidad en seguridad informática?",
        "respuestas": [
          "Garantizar que los datos no se pierdan durante una transmisión",
          "Proteger contra el acceso y la divulgación no autorizada de información",
          "Evitar la modificación no autorizada de archivos",
          "Mantener copias de respaldo de los datos críticos"
        ],
        "correcta": "Proteger contra el acceso y la divulgación no autorizada de información",
        "explicacion": "La confidencialidad implica restringir el acceso a la información únicamente a las personas o entidades autorizadas."
      },
      {
        "pregunta": "¿Qué significa integridad en el contexto de la seguridad informática?",
        "respuestas": [
          "Proteger la información contra modificaciones o destrucción inadecuadas",
          "Asegurar el acceso rápido a los datos cuando se necesiten",
          "Evitar el uso de contraseñas débiles",
          "Garantizar la disponibilidad de la red en todo momento"
        ],
        "correcta": "Proteger la información contra modificaciones o destrucción inadecuadas",
        "explicacion": "La integridad se centra en asegurar que los datos no sean alterados o destruidos sin autorización, manteniendo su autenticidad y exactitud."
      },
      {
        "pregunta": "¿Qué significa disponibilidad en el ámbito de la seguridad informática?",
        "respuestas": [
          "Proteger los sistemas de accesos no autorizados",
          "Garantizar el acceso oportuno y confiable a la información y su uso",
          "Evitar el almacenamiento innecesario de datos",
          "Asegurar que los usuarios no puedan modificar archivos"
        ],
        "correcta": "Garantizar el acceso oportuno y confiable a la información y su uso",
        "explicacion": "La disponibilidad asegura que los recursos y la información estén accesibles para los usuarios autorizados cuando los necesiten."
      },
      {
        "pregunta": "¿Qué caracteriza a un impacto bajo en la seguridad informática?",
        "respuestas": [
          "Tiene consecuencias catastróficas para la organización",
          "Produce un efecto adverso limitado en las operaciones o activos",
          "Provoca pérdidas financieras graves",
          "Inhabilita completamente el sistema informático"
        ],
        "correcta": "Produce un efecto adverso limitado en las operaciones o activos",
        "explicacion": "Un nivel de impacto bajo significa que las consecuencias de una pérdida son limitadas y no afectan gravemente las operaciones o los activos de la organización."
      },
      {
        "pregunta": "¿Qué nivel de impacto se considera cuando una pérdida tiene efectos graves en las operaciones o activos de una organización?",
        "respuestas": [
          "Bajo",
          "Moderado",
          "Alto",
          "Crítico"
        ],
        "correcta": "Moderado",
        "explicacion": "Un impacto moderado implica consecuencias graves pero no catastróficas en las operaciones o activos de la organización."
      },
      {
        "pregunta": "¿Qué nivel de impacto se asocia con efectos severos o catastróficos en las operaciones o los activos?",
        "respuestas": [
          "Bajo",
          "Moderado",
          "Alto",
          "Controlado"
        ],
        "correcta": "Alto",
        "explicacion": "El impacto alto se refiere a pérdidas que pueden tener consecuencias severas o incluso catastróficas para una organización."
      },
      {
        "pregunta": "¿Cuál de los siguientes enunciados representa un desafío de la seguridad informática?",
        "respuestas": [
          "Los mecanismos de seguridad deben considerar posibles ataques a sus propias defensas",
          "La seguridad informática solo requiere instalar un buen antivirus",
          "Los sistemas informáticos rara vez sufren ataques reales",
          "El diseño de seguridad no necesita incluir la ubicación física de los recursos"
        ],
        "correcta": "Los mecanismos de seguridad deben considerar posibles ataques a sus propias defensas",
        "explicacion": "Uno de los principales desafíos es que los mecanismos de seguridad deben diseñarse considerando ataques potenciales a sus propias medidas de defensa."
      },
      {
        "pregunta": "¿Cuál de los siguientes NO es un desafío de la seguridad informática?",
        "respuestas": [
          "Los atacantes solo necesitan encontrar una única debilidad",
          "La seguridad requiere un seguimiento regular y constante",
          "La seguridad se incorpora desde el inicio del diseño en todos los casos",
          "Los usuarios suelen percibir pocos beneficios de invertir en seguridad hasta que ocurre una falla"
        ],
        "correcta": "La seguridad se incorpora desde el inicio del diseño en todos los casos",
        "explicacion": "Este enunciado no es un desafío, ya que el verdadero reto es precisamente que la seguridad a menudo se agrega al final del diseño, en lugar de ser parte integral desde el principio."
      },
      {
        "pregunta": "¿Por qué los mecanismos de seguridad suelen ser contrarios a la intuición?",
        "respuestas": [
          "Porque requieren habilidades matemáticas avanzadas",
          "Porque muchas veces las soluciones efectivas no son evidentes y pueden parecer poco naturales para el usuario o el desarrollador",
          "Porque solo los expertos pueden aplicarlos correctamente",
          "Porque dependen exclusivamente del hardware"
        ],
        "correcta": "Porque muchas veces las soluciones efectivas no son evidentes y pueden parecer poco naturales para el usuario o el desarrollador",
        "explicacion": "Los procedimientos de seguridad pueden parecer contrarios a la intuición porque lo que parece cómodo o lógico no siempre es seguro."
      },
      {
        "pregunta": "¿Cuál de los siguientes aspectos representa un desafío común de la seguridad informática?",
        "respuestas": [
          "Los atacantes solo necesitan encontrar una única debilidad, mientras que el diseñador debe eliminar todas",
          "Los mecanismos de seguridad son siempre simples y universales",
          "La seguridad se mantiene sola una vez implementada",
          "Los usuarios siempre cumplen las políticas de seguridad"
        ],
        "correcta": "Los atacantes solo necesitan encontrar una única debilidad, mientras que el diseñador debe eliminar todas",
        "explicacion": "Este desequilibrio entre la facilidad de ataque y la dificultad de defensa es un desafío constante en la seguridad informática."
      },
      {
        "pregunta": "¿Qué es un 'agente amenazante' o 'adversario' según el RFC 4949?",
        "respuestas": [
          "Un dispositivo encargado de proteger los datos del sistema",
          "Un individuo, grupo u organización que realiza o tiene intención de realizar actividades perjudiciales",
          "Un conjunto de políticas que definen la seguridad de una organización",
          "Un programa encargado de registrar auditorías del sistema"
        ],
        "correcta": "Un individuo, grupo u organización que realiza o tiene intención de realizar actividades perjudiciales",
        "explicacion": "El RFC 4949 define 'adversario' como cualquier entidad (persona, grupo, gobierno, etc.) que lleva a cabo o planea acciones dañinas contra un sistema."
      },
      {
        "pregunta": "¿Qué se entiende por 'ataque' en seguridad informática?",
        "respuestas": [
          "Cualquier tipo de actividad maliciosa que intente recopilar, interrumpir, degradar o destruir recursos o información",
          "Un intento fallido de conexión entre sistemas de red",
          "La configuración de cortafuegos en un sistema",
          "Un error del usuario al introducir contraseñas"
        ],
        "correcta": "Cualquier tipo de actividad maliciosa que intente recopilar, interrumpir, degradar o destruir recursos o información",
        "explicacion": "Un ataque es toda acción maliciosa dirigida a comprometer los recursos o la información de un sistema, según la definición del RFC 4949."
      },
      {
        "pregunta": "¿Qué es una 'vulnerabilidad' en un sistema informático?",
        "respuestas": [
          "Una medida preventiva que protege al sistema de intrusos",
          "Una debilidad que podría ser explotada o activada por una fuente de amenaza",
          "Un mecanismo de defensa frente a ataques",
          "Un archivo cifrado que protege los datos sensibles"
        ],
        "correcta": "Una debilidad que podría ser explotada o activada por una fuente de amenaza",
        "explicacion": "Una vulnerabilidad es una debilidad en el diseño, implementación o control de un sistema que puede ser aprovechada por una amenaza."
      },
      {
        "pregunta": "¿Qué es el 'riesgo' en el contexto de la seguridad informática?",
        "respuestas": [
          "La probabilidad de que ocurra un evento adverso multiplicada por su impacto potencial",
          "Una lista de vulnerabilidades detectadas en un sistema",
          "Una técnica de defensa frente a ataques externos",
          "Una política de cifrado utilizada para proteger los datos"
        ],
        "correcta": "La probabilidad de que ocurra un evento adverso multiplicada por su impacto potencial",
        "explicacion": "El riesgo se mide considerando tanto la probabilidad de que una amenaza se materialice como la magnitud del daño resultante."
      },
      {
        "pregunta": "¿Cuáles son los principales activos de un sistema informático?",
        "respuestas": [
          "Hardware, software, datos e instalaciones/redes de comunicación",
          "CPU, disco duro y monitor",
          "Usuarios, contraseñas y redes sociales",
          "Routers, cortafuegos y antivirus"
        ],
        "correcta": "Hardware, software, datos e instalaciones/redes de comunicación",
        "explicacion": "Los activos informáticos incluyen los elementos físicos y lógicos que permiten el funcionamiento de un sistema: hardware, software, datos y redes."
      },
      {
        "pregunta": "¿Qué tipo de vulnerabilidad corresponde a una pérdida de confidencialidad?",
        "respuestas": [
          "Corrupto",
          "Leaky",
          "No disponible",
          "Congelado"
        ],
        "correcta": "Leaky",
        "explicacion": "Una vulnerabilidad de tipo 'Leaky' (con fugas) implica la pérdida de confidencialidad, es decir, la filtración de información a entidades no autorizadas."
      },
      {
        "pregunta": "¿Qué diferencia hay entre una amenaza y un ataque?",
        "respuestas": [
          "Una amenaza es la posibilidad de daño, mientras que un ataque es la realización efectiva de esa amenaza",
          "Ambos términos son sinónimos",
          "Una amenaza se produce dentro del sistema, y un ataque fuera",
          "Un ataque siempre es pasivo, mientras que una amenaza es activa"
        ],
        "correcta": "Una amenaza es la posibilidad de daño, mientras que un ataque es la realización efectiva de esa amenaza",
        "explicacion": "Una amenaza representa un potencial riesgo; cuando se ejecuta, se convierte en un ataque activo o pasivo."
      },
      {
        "pregunta": "¿Qué tipos de ataques distingue el modelo de seguridad informática?",
        "respuestas": [
          "Internos, externos, activos y pasivos",
          "Locales, remotos, físicos y virtuales",
          "Cifrados, hash, públicos y privados",
          "Manuales, automáticos y mixtos"
        ],
        "correcta": "Internos, externos, activos y pasivos",
        "explicacion": "El modelo clasifica los ataques según su origen (interno o externo) y su naturaleza (activa o pasiva)."
      },
      {
        "pregunta": "¿Qué objetivo tienen las contramedidas en seguridad informática?",
        "respuestas": [
          "Eliminar completamente todas las vulnerabilidades del sistema",
          "Prevenir, detectar o recuperar ante ataques minimizando el riesgo residual",
          "Sustituir los mecanismos de autenticación por métodos más rápidos",
          "Permitir el acceso libre en caso de fallo del sistema"
        ],
        "correcta": "Prevenir, detectar o recuperar ante ataques minimizando el riesgo residual",
        "explicacion": "Las contramedidas no eliminan todos los riesgos, sino que buscan reducirlos a un nivel aceptable mediante prevención, detección y recuperación."
      },
      {
        "pregunta": "¿Qué ocurre en una 'divulgación no autorizada'?",
        "respuestas": [
          "Una entidad obtiene acceso a datos para los cuales no está autorizada",
          "Un usuario borra archivos de forma accidental",
          "Un sistema deja de funcionar por una sobrecarga",
          "Un atacante interrumpe la conexión entre dos redes"
        ],
        "correcta": "Una entidad obtiene acceso a datos para los cuales no está autorizada",
        "explicacion": "La divulgación no autorizada se produce cuando alguien accede a información confidencial sin tener permiso, violando la confidencialidad."
      },
      {
        "pregunta": "¿Cuál de las siguientes acciones es un ejemplo de 'engaño' según la Tabla 1.2?",
        "respuestas": [
          "Suplantación de identidad",
          "Destrucción de datos",
          "Inhabilitación de sistemas",
          "Apropiación de recursos"
        ],
        "correcta": "Suplantación de identidad",
        "explicacion": "El engaño incluye acciones como la suplantación, falsificación o repudio, donde una entidad autorizada es engañada por información falsa."
      },
      {
        "pregunta": "¿Qué tipo de ataque busca interrumpir o impedir el funcionamiento de los servicios del sistema?",
        "respuestas": [
          "Ruptura",
          "Engaño",
          "Usurpación",
          "Divulgación"
        ],
        "correcta": "Ruptura",
        "explicacion": "La ruptura o interrupción afecta directamente la disponibilidad del sistema, impidiendo su correcto funcionamiento (por ejemplo, ataques DoS)."
      },
      {
        "pregunta": "¿Qué describe la 'usurpación' en el contexto de las amenazas informáticas?",
        "respuestas": [
          "Una entidad no autorizada asume el control de los servicios o funciones del sistema",
          "Un usuario autorizado pierde acceso a sus propios archivos",
          "Se interceptan datos sin modificarlos",
          "Se eliminan mensajes importantes del sistema"
        ],
        "correcta": "Una entidad no autorizada asume el control de los servicios o funciones del sistema",
        "explicacion": "La usurpación ocurre cuando un atacante toma el control lógico o físico de un recurso, afectando la integridad y la disponibilidad."
      },
      {
        "pregunta": "¿Cuál es el objetivo principal de un ataque pasivo?",
        "respuestas": [
          "Modificar la información transmitida",
          "Interrumpir la disponibilidad del sistema",
          "Obtener información sin alterar los recursos del sistema",
          "Engañar al usuario haciéndose pasar por otro"
        ],
        "correcta": "Obtener información sin alterar los recursos del sistema",
        "explicacion": "Los ataques pasivos buscan espiar o analizar información sin modificarla, como ocurre en la interceptación o el análisis de tráfico."
      },
      {
        "pregunta": "¿Qué tipo de ataque se caracteriza por escuchar o monitorizar transmisiones para aprender información?",
        "respuestas": [
          "Ataque pasivo",
          "Ataque activo",
          "Ataque interno",
          "Ataque de denegación de servicio"
        ],
        "correcta": "Ataque pasivo",
        "explicacion": "Los ataques pasivos incluyen la escucha o monitoreo de comunicaciones con el fin de obtener información sin alterar los datos."
      },
      {
        "pregunta": "¿Qué distingue a un ataque activo de uno pasivo?",
        "respuestas": [
          "El ataque activo modifica el flujo de datos o crea uno falso",
          "El ataque pasivo altera los mensajes y el activo solo los observa",
          "El ataque activo se realiza dentro del sistema y el pasivo desde fuera",
          "No existe diferencia: ambos afectan la integridad de los datos"
        ],
        "correcta": "El ataque activo modifica el flujo de datos o crea uno falso",
        "explicacion": "Los ataques activos implican alterar, retrasar o falsificar la comunicación, mientras que los pasivos solo observan."
      },
      {
        "pregunta": "¿Cuál de los siguientes es un ejemplo de ataque activo?",
        "respuestas": [
          "Suplantación de identidad (Masquerade)",
          "Análisis de tráfico",
          "Publicación del contenido de un mensaje",
          "Escucha de red"
        ],
        "correcta": "Suplantación de identidad (Masquerade)",
        "explicacion": "La suplantación es un ataque activo donde una entidad finge ser otra legítima, a menudo combinando otras técnicas activas."
      },
      {
        "pregunta": "¿En qué consiste un ataque de 'repetición' (Replay)?",
        "respuestas": [
          "Interceptar un mensaje y retransmitirlo para producir un efecto no autorizado",
          "Modificar los datos de un mensaje antes de enviarlo",
          "Obtener contraseñas mediante observación del teclado",
          "Saturar un servidor con múltiples peticiones simultáneas"
        ],
        "correcta": "Interceptar un mensaje y retransmitirlo para producir un efecto no autorizado",
        "explicacion": "Un ataque de repetición captura datos válidos y los retransmite para lograr un acceso o acción no autorizada."
      },
      {
        "pregunta": "¿Qué busca un ataque de denegación de servicio (DoS)?",
        "respuestas": [
          "Evitar o inhibir el uso normal de las comunicaciones o servicios",
          "Modificar el contenido de los mensajes sin ser detectado",
          "Analizar el tráfico para obtener información confidencial",
          "Autenticar incorrectamente a un usuario"
        ],
        "correcta": "Evitar o inhibir el uso normal de las comunicaciones o servicios",
        "explicacion": "El ataque DoS impide el funcionamiento normal de un sistema o servicio, afectando su disponibilidad."
      },
      {
        "pregunta": "¿Cuál es el propósito principal de los servicios de seguridad en un sistema informático?",
        "respuestas": [
          "Ofrecer un conjunto de mecanismos que protejan la información y los recursos del sistema frente a ataques",
          "Permitir que los usuarios accedan sin restricciones a la información",
          "Mejorar el rendimiento de los sistemas de comunicación",
          "Simplificar la gestión de archivos del sistema"
        ],
        "correcta": "Ofrecer un conjunto de mecanismos que protejan la información y los recursos del sistema frente a ataques",
        "explicacion": "Los servicios de seguridad buscan garantizar la protección de la información y los recursos, asegurando autenticidad, confidencialidad, integridad y disponibilidad."
      },
      {
        "pregunta": "¿Qué garantiza el servicio de 'autenticación'?",
        "respuestas": [
          "Que la comunicación o entidad sea legítima y provenga de quien dice ser",
          "Que los datos transmitidos no puedan ser interceptados",
          "Que los usuarios no puedan modificar archivos del sistema",
          "Que el sistema se recupere rápidamente tras un fallo"
        ],
        "correcta": "Que la comunicación o entidad sea legítima y provenga de quien dice ser",
        "explicacion": "La autenticación asegura la identidad de las partes involucradas, evitando suplantaciones o alteraciones en las comunicaciones."
      },
      {
        "pregunta": "¿Qué diferencia hay entre la autenticación de entidades y la autenticación de origen de datos?",
        "respuestas": [
          "La primera verifica la identidad entre dos sistemas, mientras que la segunda garantiza la fuente de un mensaje individual",
          "No hay diferencia: ambas se usan indistintamente",
          "La autenticación de origen de datos requiere conexión continua entre sistemas",
          "La autenticación de entidades solo se usa en correos electrónicos"
        ],
        "correcta": "La primera verifica la identidad entre dos sistemas, mientras que la segunda garantiza la fuente de un mensaje individual",
        "explicacion": "La autenticación de entidades se usa en conexiones activas entre sistemas; la de origen de datos en mensajes únicos, como correos electrónicos."
      },
      {
        "pregunta": "¿Qué función cumple el control de acceso dentro de la seguridad informática?",
        "respuestas": [
          "Limitar y controlar quién puede acceder a los sistemas y qué acciones puede realizar",
          "Permitir que todos los usuarios tengan acceso total por defecto",
          "Garantizar la velocidad de acceso a los datos",
          "Eliminar automáticamente los archivos sospechosos"
        ],
        "correcta": "Limitar y controlar quién puede acceder a los sistemas y qué acciones puede realizar",
        "explicacion": "El control de acceso asegura que solo las entidades autenticadas y autorizadas puedan acceder a los recursos según sus privilegios."
      },
      {
        "pregunta": "¿Qué protege el servicio de 'confidencialidad de datos'?",
        "respuestas": [
          "La información transmitida frente a ataques pasivos como la escucha o el análisis de tráfico",
          "Los sistemas frente a fallos de hardware",
          "Los datos frente a modificaciones intencionadas",
          "Los usuarios frente a errores de autenticación"
        ],
        "correcta": "La información transmitida frente a ataques pasivos como la escucha o el análisis de tráfico",
        "explicacion": "La confidencialidad de datos evita que terceros no autorizados accedan o deduzcan información a través del tráfico de red."
      },
      {
        "pregunta": "¿Cuál es el objetivo del servicio de 'integridad de datos'?",
        "respuestas": [
          "Garantizar que los mensajes se reciban tal como se enviaron, sin modificación ni duplicación",
          "Acelerar las transmisiones de datos",
          "Permitir que los usuarios editen la información de forma libre",
          "Evitar que los mensajes se cifren"
        ],
        "correcta": "Garantizar que los mensajes se reciban tal como se enviaron, sin modificación ni duplicación",
        "explicacion": "La integridad de datos protege contra alteraciones, inserciones o reordenamientos no autorizados de la información."
      },
      {
        "pregunta": "¿Qué evita el servicio de 'no repudio'?",
        "respuestas": [
          "Que el remitente o el receptor puedan negar haber enviado o recibido un mensaje",
          "Que los mensajes sean interceptados durante la transmisión",
          "Que los usuarios accedan al sistema sin contraseña",
          "Que los datos se corrompan al almacenarse"
        ],
        "correcta": "Que el remitente o el receptor puedan negar haber enviado o recibido un mensaje",
        "explicacion": "El no repudio garantiza la evidencia de envío y recepción, evitando que las partes involucradas nieguen su participación en la comunicación."
      },
      {
        "pregunta": "¿Cuál es la finalidad del servicio de 'disponibilidad'?",
        "respuestas": [
          "Garantizar el acceso confiable y oportuno a los recursos y servicios del sistema",
          "Restringir el acceso a los datos para protegerlos",
          "Eliminar los procesos que consuman demasiada memoria",
          "Evitar la instalación de software sin licencia"
        ],
        "correcta": "Garantizar el acceso confiable y oportuno a los recursos y servicios del sistema",
        "explicacion": "La disponibilidad protege los sistemas frente a ataques de denegación de servicio o fallos que impidan su uso normal."
      },
      {
        "pregunta": "¿Qué son los mecanismos de seguridad en un sistema informático?",
        "respuestas": [
          "Los procedimientos y técnicas utilizados para implementar los servicios de seguridad",
          "Los documentos legales que definen las políticas de seguridad",
          "Las contraseñas de los usuarios",
          "Los errores del sistema que deben corregirse"
        ],
        "correcta": "Los procedimientos y técnicas utilizados para implementar los servicios de seguridad",
        "explicacion": "Los mecanismos de seguridad son los medios técnicos que permiten llevar a la práctica los servicios de seguridad, como la autenticación o el cifrado."
      },
      {
        "pregunta": "¿Qué diferencia hay entre un mecanismo criptográfico reversible e irreversible?",
        "respuestas": [
          "El reversible permite cifrar y descifrar datos, mientras que el irreversible no se puede revertir",
          "El reversible es menos seguro que el irreversible",
          "El irreversible se usa solo para comprimir archivos",
          "El reversible cifra mediante contraseñas simples"
        ],
        "correcta": "El reversible permite cifrar y descifrar datos, mientras que el irreversible no se puede revertir",
        "explicacion": "Los mecanismos criptográficos reversibles son algoritmos de cifrado simétrico o asimétrico; los irreversibles incluyen funciones hash o códigos de autenticación de mensajes."
      },
      {
        "pregunta": "¿Qué función cumple una 'firma digital'?",
        "respuestas": [
          "Demostrar el origen y la integridad de una unidad de datos y protegerla contra falsificación",
          "Cifrar los archivos del sistema para que nadie los lea",
          "Eliminar los datos antiguos del sistema",
          "Verificar la velocidad de transmisión de los mensajes"
        ],
        "correcta": "Demostrar el origen y la integridad de una unidad de datos y protegerla contra falsificación",
        "explicacion": "La firma digital utiliza criptografía para autenticar al remitente y asegurar que el contenido no haya sido modificado."
      },
      {
        "pregunta": "¿Cuál es el propósito del 'intercambio de autenticación'?",
        "respuestas": [
          "Garantizar la identidad de una entidad mediante el intercambio de información",
          "Evitar la pérdida de datos por fallos de hardware",
          "Comprimir los datos transmitidos por la red",
          "Controlar la cantidad de tráfico de red"
        ],
        "correcta": "Garantizar la identidad de una entidad mediante el intercambio de información",
        "explicacion": "El intercambio de autenticación es un mecanismo que valida la identidad de los participantes antes de establecer comunicación segura."
      },
      {
        "pregunta": "¿Qué busca el 'relleno de tráfico' (traffic padding)?",
        "respuestas": [
          "Insertar bits adicionales para impedir el análisis del tráfico y ocultar patrones de comunicación",
          "Reducir el tamaño de los mensajes cifrados",
          "Duplicar los mensajes importantes",
          "Detectar virus en la red"
        ],
        "correcta": "Insertar bits adicionales para impedir el análisis del tráfico y ocultar patrones de comunicación",
        "explicacion": "Este mecanismo introduce ruido en la transmisión para que un atacante no pueda deducir información observando la frecuencia o tamaño de los mensajes."
      },
      {
        "pregunta": "¿Qué permite el 'control de enrutamiento'?",
        "respuestas": [
          "Seleccionar rutas seguras y modificar el camino de los datos si se sospecha una violación de seguridad",
          "Monitorear la velocidad de los enlaces de red",
          "Optimizar el rendimiento del sistema operativo",
          "Rechazar automáticamente todo el tráfico entrante"
        ],
        "correcta": "Seleccionar rutas seguras y modificar el camino de los datos si se sospecha una violación de seguridad",
        "explicacion": "El control de enrutamiento gestiona la selección de caminos seguros para los datos, especialmente si se detecta una amenaza."
      },
      {
        "pregunta": "¿Qué es la 'notarización' dentro de los mecanismos de seguridad?",
        "respuestas": [
          "El uso de un tercero de confianza para asegurar ciertas propiedades de un intercambio de datos",
          "Un método de compresión de mensajes en la red",
          "La eliminación segura de archivos temporales",
          "La verificación automática de hardware"
        ],
        "correcta": "El uso de un tercero de confianza para asegurar ciertas propiedades de un intercambio de datos",
        "explicacion": "La notarización añade un intermediario de confianza que certifica la autenticidad y validez de las comunicaciones."
      },
      {
        "pregunta": "¿Qué función cumple el mecanismo de 'control de acceso'?",
        "respuestas": [
          "Hacer cumplir los derechos de acceso de los usuarios a los recursos del sistema",
          "Eliminar automáticamente las contraseñas débiles",
          "Detectar vulnerabilidades en el hardware",
          "Reducir el consumo de memoria"
        ],
        "correcta": "Hacer cumplir los derechos de acceso de los usuarios a los recursos del sistema",
        "explicacion": "Este mecanismo regula qué usuarios o procesos pueden acceder a determinados recursos y con qué privilegios."
      },
      {
        "pregunta": "¿Cuál es el objetivo principal del requisito de 'control de acceso'?",
        "respuestas": [
          "Limitar el acceso al sistema a usuarios, procesos o dispositivos autorizados",
          "Permitir que todos los usuarios puedan acceder libremente al sistema",
          "Acelerar las conexiones entre sistemas de información",
          "Evitar que se guarden contraseñas en el sistema"
        ],
        "correcta": "Limitar el acceso al sistema a usuarios, procesos o dispositivos autorizados",
        "explicacion": "El control de acceso restringe quién puede entrar al sistema y qué acciones puede realizar, protegiendo así los recursos frente a accesos no autorizados."
      },
      {
        "pregunta": "¿Qué busca el requisito de 'concienciación y capacitación'?",
        "respuestas": [
          "Garantizar que los usuarios y administradores sean conscientes de los riesgos de seguridad y estén adecuadamente formados",
          "Reducir la carga de trabajo de los usuarios mediante automatización",
          "Sustituir el control de acceso por formación ética",
          "Permitir que los usuarios creen sus propias políticas de seguridad"
        ],
        "correcta": "Garantizar que los usuarios y administradores sean conscientes de los riesgos de seguridad y estén adecuadamente formados",
        "explicacion": "Este requisito busca que todo el personal conozca los riesgos y políticas de seguridad, y reciba la formación adecuada para cumplirlas."
      },
      {
        "pregunta": "¿Qué propósito tiene el requisito de 'auditoría y responsabilidad'?",
        "respuestas": [
          "Registrar y conservar evidencias que permitan rastrear las acciones de los usuarios y detectar actividades no autorizadas",
          "Eliminar automáticamente los registros de actividad",
          "Evitar la duplicación de contraseñas en los sistemas",
          "Crear copias de seguridad cada semana"
        ],
        "correcta": "Registrar y conservar evidencias que permitan rastrear las acciones de los usuarios y detectar actividades no autorizadas",
        "explicacion": "Este requisito asegura que cada acción del sistema pueda atribuirse a un usuario, fomentando la responsabilidad y la trazabilidad."
      },
      {
        "pregunta": "¿Qué incluye la 'certificación, acreditación y evaluación de seguridad'?",
        "respuestas": [
          "Evaluar periódicamente los controles de seguridad, corregir deficiencias y autorizar el funcionamiento de los sistemas",
          "Emitir certificados SSL para páginas web seguras",
          "Instalar software de autenticación biométrica",
          "Permitir que los usuarios evalúen la seguridad por sí mismos"
        ],
        "correcta": "Evaluar periódicamente los controles de seguridad, corregir deficiencias y autorizar el funcionamiento de los sistemas",
        "explicacion": "Este requisito busca garantizar que los controles sean efectivos mediante revisiones, planes correctivos y la autorización formal del sistema."
      },
      {
        "pregunta": "¿Qué finalidad tiene la 'planificación de contingencias'?",
        "respuestas": [
          "Asegurar la continuidad de las operaciones mediante planes de respaldo y recuperación ante desastres",
          "Evitar que los empleados guarden archivos personales",
          "Optimizar el rendimiento del hardware del sistema",
          "Eliminar automáticamente los registros antiguos"
        ],
        "correcta": "Asegurar la continuidad de las operaciones mediante planes de respaldo y recuperación ante desastres",
        "explicacion": "Este requisito prepara a la organización para responder ante emergencias y mantener sus operaciones críticas activas."
      },
      {
        "pregunta": "¿Qué establece el requisito de 'identificación y autenticación'?",
        "respuestas": [
          "Verificar la identidad de usuarios, procesos o dispositivos antes de conceder acceso al sistema",
          "Guardar la información de los usuarios en texto plano",
          "Permitir accesos sin contraseña cuando el sistema esté en mantenimiento",
          "Evitar el uso de sistemas de autenticación externos"
        ],
        "correcta": "Verificar la identidad de usuarios, procesos o dispositivos antes de conceder acceso al sistema",
        "explicacion": "Antes de permitir el acceso, el sistema debe identificar al usuario o proceso y confirmar su autenticidad."
      },
      {
        "pregunta": "¿Qué incluye el requisito de 'respuesta al incidente'?",
        "respuestas": [
          "Detectar, analizar, contener y recuperar ante incidentes de seguridad, documentándolos adecuadamente",
          "Restablecer el sistema operativo en caso de fallo físico",
          "Actualizar los antivirus del sistema periódicamente",
          "Eliminar los usuarios inactivos cada semana"
        ],
        "correcta": "Detectar, analizar, contener y recuperar ante incidentes de seguridad, documentándolos adecuadamente",
        "explicacion": "La gestión de incidentes busca una respuesta rápida y estructurada que minimice el impacto de los ataques o fallos."
      },
      {
        "pregunta": "¿Qué implica el requisito de 'mantenimiento' en los sistemas de información?",
        "respuestas": [
          "Realizar mantenimiento periódico y controlar las herramientas utilizadas para evitar riesgos de seguridad",
          "Actualizar los sistemas solo cuando ocurra un ataque",
          "Permitir que cualquier usuario realice reparaciones básicas",
          "Ignorar las advertencias del sistema si no afectan al rendimiento"
        ],
        "correcta": "Realizar mantenimiento periódico y controlar las herramientas utilizadas para evitar riesgos de seguridad",
        "explicacion": "El mantenimiento debe ser regular y seguro, controlando tanto las herramientas como el personal que interviene en los sistemas."
      },
      {
        "pregunta": "¿Qué busca el requisito de 'protección física y ambiental'?",
        "respuestas": [
          "Limitar el acceso físico a equipos, proteger la infraestructura y mantener condiciones ambientales seguras",
          "Instalar cámaras en todas las oficinas",
          "Permitir acceso físico sin restricción en caso de emergencia",
          "Reducir el consumo eléctrico de los servidores"
        ],
        "correcta": "Limitar el acceso físico a equipos, proteger la infraestructura y mantener condiciones ambientales seguras",
        "explicacion": "Este requisito protege las instalaciones y equipos ante accesos no autorizados o peligros ambientales como incendios o inundaciones."
      },
      {
        "pregunta": "¿Qué objetivo tiene el requisito de 'personal de seguridad'?",
        "respuestas": [
          "Garantizar que el personal que maneja información sensible sea confiable y cumpla las políticas de seguridad",
          "Delegar la seguridad en personal externo sin verificación",
          "Permitir que los empleados establezcan sus propias reglas de seguridad",
          "Reducir la cantidad de personal en el área de TI"
        ],
        "correcta": "Garantizar que el personal que maneja información sensible sea confiable y cumpla las políticas de seguridad",
        "explicacion": "Este requisito se centra en la fiabilidad del personal que ocupa puestos críticos y en la aplicación de sanciones por incumplimientos."
      },
      {
        "pregunta": "¿Qué busca el requisito de 'adquisición de sistemas y servicios'?",
        "respuestas": [
          "Incorporar la seguridad en todas las fases del ciclo de vida del desarrollo y garantizar medidas adecuadas en proveedores externos",
          "Reducir los costes de adquisición ignorando los aspectos de seguridad",
          "Permitir la instalación libre de software sin restricciones",
          "Evitar la supervisión de los contratos de proveedores"
        ],
        "correcta": "Incorporar la seguridad en todas las fases del ciclo de vida del desarrollo y garantizar medidas adecuadas en proveedores externos",
        "explicacion": "Este requisito exige que la seguridad esté integrada desde el diseño hasta la implementación y que los proveedores también adopten medidas seguras."
      },
      {
        "pregunta": "¿Qué cubre el requisito de 'protección de sistemas y comunicaciones'?",
        "respuestas": [
          "Monitorizar, controlar y proteger las comunicaciones internas y externas, aplicando principios de ingeniería segura",
          "Limitar las conexiones a una sola red local",
          "Acelerar la transferencia de datos eliminando cifrado",
          "Desactivar las auditorías de red para mejorar el rendimiento"
        ],
        "correcta": "Monitorizar, controlar y proteger las comunicaciones internas y externas, aplicando principios de ingeniería segura",
        "explicacion": "Este requisito busca una supervisión continua del tráfico y la aplicación de buenas prácticas de arquitectura y desarrollo seguro."
      },
      {
        "pregunta": "¿Qué objetivo tiene el requisito de 'integridad del sistema y de la información'?",
        "respuestas": [
          "Detectar, corregir y proteger frente a fallos y códigos maliciosos en el sistema",
          "Optimizar el rendimiento del hardware",
          "Permitir modificaciones de los usuarios en el núcleo del sistema",
          "Eliminar automáticamente los archivos grandes"
        ],
        "correcta": "Detectar, corregir y proteger frente a fallos y códigos maliciosos en el sistema",
        "explicacion": "Este requisito garantiza que los sistemas sean capaces de identificar errores, prevenir software malicioso y reaccionar ante alertas de seguridad."
      },
      {
        "pregunta": "¿Qué establece el principio de 'economía de mecanismo' en el diseño de seguridad?",
        "respuestas": [
          "Que los mecanismos de seguridad deben ser simples y lo más pequeños posible",
          "Que los sistemas deben incorporar múltiples capas complejas de seguridad",
          "Que solo los administradores deben comprender los mecanismos de seguridad",
          "Que los mecanismos deben ser costosos para garantizar su fiabilidad"
        ],
        "correcta": "Que los mecanismos de seguridad deben ser simples y lo más pequeños posible",
        "explicacion": "La simplicidad reduce los errores y facilita la verificación, lo que hace los sistemas más seguros y mantenibles."
      },
      {
        "pregunta": "¿Qué significa el principio de 'valores predeterminados a prueba de fallos'?",
        "respuestas": [
          "Que el acceso debe ser denegado por defecto y concedido solo mediante permiso explícito",
          "Que los sistemas deben permanecer abiertos ante cualquier error para no interrumpir el servicio",
          "Que los usuarios deben tener acceso total hasta que ocurra un fallo",
          "Que los errores deben ser ignorados si no afectan al rendimiento"
        ],
        "correcta": "Que el acceso debe ser denegado por defecto y concedido solo mediante permiso explícito",
        "explicacion": "Este principio indica que, ante la duda o un fallo, el sistema debe adoptar la opción más segura, negando el acceso salvo autorización expresa."
      },
      {
        "pregunta": "¿Qué implica el principio de 'mediación completa'?",
        "respuestas": [
          "Cada intento de acceso debe verificarse, sin confiar en decisiones previas almacenadas en caché",
          "El sistema solo debe comprobar los primeros accesos y luego permitir el resto automáticamente",
          "Los permisos deben otorgarse indefinidamente una vez validados",
          "La seguridad debe depender únicamente de la autenticación inicial"
        ],
        "correcta": "Cada intento de acceso debe verificarse, sin confiar en decisiones previas almacenadas en caché",
        "explicacion": "La mediación completa garantiza que cada acceso al sistema sea verificado, evitando brechas por decisiones antiguas o sesiones reutilizadas."
      },
      {
        "pregunta": "¿Qué establece el principio de 'diseño abierto'?",
        "respuestas": [
          "Que la seguridad de un sistema no debe depender del secreto de su diseño o implementación",
          "Que el código fuente de todo sistema debe ser público para garantizar transparencia total",
          "Que los usuarios deben tener acceso al código para modificarlo según sus necesidades",
          "Que el diseño debe permanecer cerrado para evitar la copia"
        ],
        "correcta": "Que la seguridad de un sistema no debe depender del secreto de su diseño o implementación",
        "explicacion": "La seguridad debe basarse en la robustez de los mecanismos y no en el secreto de su estructura. La 'seguridad por oscuridad' se considera una mala práctica."
      },
      {
        "pregunta": "¿Qué promueve el principio de 'separación de privilegios'?",
        "respuestas": [
          "El uso de múltiples factores o condiciones para conceder acceso a un recurso",
          "La eliminación de contraseñas para agilizar el acceso",
          "Que todos los usuarios compartan las mismas credenciales para simplificar la gestión",
          "La asignación de privilegios máximos a los administradores"
        ],
        "correcta": "El uso de múltiples factores o condiciones para conceder acceso a un recurso",
        "explicacion": "Este principio se traduce en autenticación multifactor (contraseña + token + biometría, por ejemplo) o división de responsabilidades entre varios usuarios."
      },
      {
        "pregunta": "¿Qué significa el principio de 'privilegios mínimos'?",
        "respuestas": [
          "Cada usuario o proceso debe tener solo los permisos estrictamente necesarios para cumplir su tarea",
          "Todos los usuarios deben tener acceso completo para evitar bloqueos de trabajo",
          "Los procesos deben ejecutarse con los permisos del administrador por defecto",
          "El sistema debe asignar permisos máximos hasta que se detecte un fallo"
        ],
        "correcta": "Cada usuario o proceso debe tener solo los permisos estrictamente necesarios para cumplir su tarea",
        "explicacion": "Limitar los privilegios reduce el daño potencial de un error o una intrusión, evitando que un atacante comprometa el sistema completo."
      },
      {
        "pregunta": "¿Qué busca el principio de 'mecanismo menos común'?",
        "respuestas": [
          "Minimizar las funciones compartidas entre diferentes usuarios o procesos",
          "Aumentar las dependencias del sistema para mejorar la interoperabilidad",
          "Centralizar todos los servicios en un único punto de control",
          "Permitir el uso de los mismos recursos entre todos los usuarios"
        ],
        "correcta": "Minimizar las funciones compartidas entre diferentes usuarios o procesos",
        "explicacion": "Reducir la compartición de mecanismos comunes limita la posibilidad de que una vulnerabilidad afecte a múltiples usuarios o servicios."
      },
      {
        "pregunta": "¿Qué establece el principio de 'aceptabilidad psicológica'?",
        "respuestas": [
          "Los mecanismos de seguridad deben ser fáciles de usar y no interferir excesivamente con el trabajo del usuario",
          "Los usuarios deben memorizar contraseñas largas y complejas sin excepciones",
          "El diseño debe priorizar la seguridad sobre la usabilidad siempre",
          "Los sistemas deben ocultar las medidas de seguridad al usuario completamente"
        ],
        "correcta": "Los mecanismos de seguridad deben ser fáciles de usar y no interferir excesivamente con el trabajo del usuario",
        "explicacion": "Si un sistema es incómodo o demasiado restrictivo, los usuarios buscarán saltarse las medidas de seguridad; por eso la usabilidad es esencial."
      },
      {
        "pregunta": "¿Qué implica el principio de 'aislamiento'?",
        "respuestas": [
          "Separar los recursos críticos y los procesos de usuario para evitar accesos no autorizados",
          "Ejecutar todos los procesos en un único entorno compartido",
          "Eliminar la autenticación entre diferentes usuarios del sistema",
          "Permitir que los archivos sean accesibles desde cualquier aplicación"
        ],
        "correcta": "Separar los recursos críticos y los procesos de usuario para evitar accesos no autorizados",
        "explicacion": "El aislamiento protege tanto los recursos críticos como los mecanismos de seguridad del resto del sistema y de los usuarios comunes."
      },
      {
        "pregunta": "¿Qué es la 'encapsulación' dentro del diseño de seguridad?",
        "respuestas": [
          "Una forma de aislamiento basada en la orientación a objetos, que agrupa datos y funciones bajo una interfaz controlada",
          "El cifrado de todos los datos transmitidos por el sistema",
          "Un método para agrupar procesos de usuarios en memoria",
          "La compresión de archivos sensibles para ocultar su contenido"
        ],
        "correcta": "Una forma de aislamiento basada en la orientación a objetos, que agrupa datos y funciones bajo una interfaz controlada",
        "explicacion": "La encapsulación protege los datos internos de acceso directo, permitiendo interacciones seguras a través de interfaces bien definidas."
      },
      {
        "pregunta": "¿Qué busca el principio de 'modularidad'?",
        "respuestas": [
          "Diseñar el sistema en componentes independientes que faciliten su mantenimiento y verificación de seguridad",
          "Unir todas las funciones críticas en un único módulo para controlarlas mejor",
          "Reducir la redundancia dividiendo los módulos por usuarios",
          "Evitar el uso de librerías externas en el diseño"
        ],
        "correcta": "Diseñar el sistema en componentes independientes que faciliten su mantenimiento y verificación de seguridad",
        "explicacion": "La modularidad permite aislar fallos, probar componentes de forma individual y aplicar actualizaciones sin afectar al sistema completo."
      },
      {
        "pregunta": "¿Qué representa el principio de 'capas' en seguridad?",
        "respuestas": [
          "El uso de múltiples barreras o niveles de defensa entre el atacante y los datos protegidos",
          "La división de usuarios según jerarquías organizativas",
          "La agrupación de software en carpetas de sistema",
          "El aislamiento de hardware respecto al software"
        ],
        "correcta": "El uso de múltiples barreras o niveles de defensa entre el atacante y los datos protegidos",
        "explicacion": "El enfoque en capas, conocido como 'defensa en profundidad', proporciona redundancia y múltiples líneas de defensa ante posibles ataques."
      },
      {
        "pregunta": "¿Qué significa el principio de 'menor asombro' en el contexto del diseño de seguridad?",
        "respuestas": [
          "El sistema debe comportarse de forma predecible para no confundir al usuario ni inducir errores",
          "El sistema debe sorprender al atacante con respuestas aleatorias",
          "La interfaz debe ocultar los mensajes de error para mantener la confidencialidad",
          "El usuario debe ser informado de todos los procesos internos del sistema"
        ],
        "correcta": "El sistema debe comportarse de forma predecible para no confundir al usuario ni inducir errores",
        "explicacion": "Un diseño claro y coherente reduce los errores humanos, evitando acciones inseguras provocadas por comportamientos inesperados del sistema."
      },
      {
        "pregunta": "¿Qué se entiende por 'superficie de ataque' en seguridad informática?",
        "respuestas": [
          "El conjunto de vulnerabilidades alcanzables y explotables en un sistema",
          "La cantidad total de datos que gestiona un servidor",
          "La interfaz gráfica de un sistema operativo",
          "El número de usuarios registrados en un sistema"
        ],
        "correcta": "El conjunto de vulnerabilidades alcanzables y explotables en un sistema",
        "explicacion": "La superficie de ataque representa todos los puntos del sistema susceptibles de ser atacados, tanto físicos como lógicos o humanos."
      },
      {
        "pregunta": "¿Cuál de los siguientes ejemplos forma parte de una superficie de ataque?",
        "respuestas": [
          "Puertos abiertos en servidores o código que procesa datos entrantes",
          "El color de la interfaz del sistema operativo",
          "La frecuencia del mantenimiento físico de los equipos",
          "Los archivos temporales eliminados por el sistema"
        ],
        "correcta": "Puertos abiertos en servidores o código que procesa datos entrantes",
        "explicacion": "Los puertos abiertos, servicios activos y componentes que aceptan datos externos son vectores comunes de ataque."
      },
      {
        "pregunta": "¿Qué caracteriza a la 'superficie de ataque de red'?",
        "respuestas": [
          "Incluye vulnerabilidades en protocolos de red, enlaces de comunicación o servicios expuestos a Internet",
          "Abarca errores de usuario y malas contraseñas",
          "Se refiere a los fallos del hardware físico",
          "Consiste únicamente en vulnerabilidades del software local"
        ],
        "correcta": "Incluye vulnerabilidades en protocolos de red, enlaces de comunicación o servicios expuestos a Internet",
        "explicacion": "Este tipo de superficie abarca los vectores externos como ataques DoS, fallos de protocolo o accesos indebidos a través de la red."
      },
      {
        "pregunta": "¿Qué tipo de riesgos abarca la 'superficie de ataque de software'?",
        "respuestas": [
          "Vulnerabilidades en el código de aplicaciones, utilidades o sistemas operativos",
          "Ataques físicos sobre los servidores",
          "Errores de configuración en routers o switches",
          "Contraseñas demasiado simples de los usuarios"
        ],
        "correcta": "Vulnerabilidades en el código de aplicaciones, utilidades o sistemas operativos",
        "explicacion": "El software defectuoso puede permitir la ejecución de código malicioso o accesos indebidos, por lo que debe ser revisado y actualizado con frecuencia."
      },
      {
        "pregunta": "¿Qué se considera una 'superficie de ataque humana'?",
        "respuestas": [
          "Las vulnerabilidades creadas por errores humanos o ingeniería social",
          "Los defectos en el hardware que causan cortes de energía",
          "El uso de algoritmos criptográficos obsoletos",
          "La exposición de puertos abiertos en un firewall"
        ],
        "correcta": "Las vulnerabilidades creadas por errores humanos o ingeniería social",
        "explicacion": "Los empleados o usuarios pueden convertirse en un punto débil si son manipulados o cometen errores, lo que amplía la superficie de ataque del sistema."
      },
      {
        "pregunta": "¿Qué significa el concepto de 'defensa en profundidad'?",
        "respuestas": [
          "Aplicar múltiples capas de defensa entre el atacante y la información protegida",
          "Centralizar todas las medidas de seguridad en un único punto",
          "Evitar el uso de mecanismos redundantes",
          "Depender exclusivamente de un firewall o antivirus"
        ],
        "correcta": "Aplicar múltiples capas de defensa entre el atacante y la información protegida",
        "explicacion": "La defensa en profundidad utiliza varias capas de seguridad (física, lógica, humana) para dificultar los ataques y mitigar los daños en caso de intrusión."
      },
      {
        "pregunta": "¿Qué es una 'política de seguridad informática'?",
        "respuestas": [
          "Una declaración formal que define las reglas y prácticas para proteger los recursos críticos de una organización",
          "Un manual técnico que describe cómo instalar software antivirus",
          "Un documento opcional que sugiere medidas de protección sin carácter obligatorio",
          "Una lista de contraseñas y permisos de los empleados"
        ],
        "correcta": "Una declaración formal que define las reglas y prácticas para proteger los recursos críticos de una organización",
        "explicacion": "La política de seguridad establece las directrices que regulan cómo deben aplicarse los servicios y controles de seguridad en el sistema."
      },
      {
        "pregunta": "¿Qué incluye la 'implementación de seguridad' dentro de la estrategia general?",
        "respuestas": [
          "Los procesos de prevención, detección, respuesta y recuperación ante incidentes de seguridad",
          "El diseño físico de los centros de datos",
          "El desarrollo de software sin considerar la seguridad",
          "La instalación de hardware de respaldo"
        ],
        "correcta": "Los procesos de prevención, detección, respuesta y recuperación ante incidentes de seguridad",
        "explicacion": "La implementación pone en práctica la política de seguridad mediante acciones que abordan tanto la prevención como la reacción ante incidentes."
      },
      {
        "pregunta": "¿Qué es la 'garantía' o 'aseguramiento' en seguridad informática?",
        "respuestas": [
          "La confianza en que el sistema cumple con la política de seguridad establecida tanto en su diseño como en su operación",
          "El contrato firmado con el proveedor de software",
          "El mecanismo que bloquea usuarios después de varios intentos fallidos",
          "La verificación de la velocidad de respuesta del sistema"
        ],
        "correcta": "La confianza en que el sistema cumple con la política de seguridad establecida tanto en su diseño como en su operación",
        "explicacion": "La garantía evalúa que los mecanismos de seguridad se han implementado correctamente y funcionan según lo planificado."
      },
      {
        "pregunta": "¿Qué implica el proceso de 'evaluación' en una estrategia de seguridad?",
        "respuestas": [
          "Examinar un sistema o producto para comprobar que cumple con criterios y estándares de seguridad",
          "Instalar actualizaciones automáticas del sistema operativo",
          "Eliminar contraseñas obsoletas de la base de datos",
          "Realizar copias de seguridad diarias"
        ],
        "correcta": "Examinar un sistema o producto para comprobar que cumple con criterios y estándares de seguridad",
        "explicacion": "La evaluación consiste en revisar, probar y analizar formalmente si el sistema se ajusta a los objetivos de seguridad definidos en la política."
      },
      {
        "pregunta": "¿Por qué es importante la estrategia de seguridad informática en una organización?",
        "respuestas": [
          "Porque coordina de forma integral las políticas, mecanismos y controles para proteger los activos críticos frente a amenazas",
          "Porque sustituye la necesidad de auditorías externas",
          "Porque garantiza que nunca ocurrirán ataques informáticos",
          "Porque permite reducir los costes del área de TI eliminando redundancias"
        ],
        "correcta": "Porque coordina de forma integral las políticas, mecanismos y controles para proteger los activos críticos frente a amenazas",
        "explicacion": "Una estrategia de seguridad bien definida integra la prevención, detección, recuperación y mejora continua, asegurando la protección de la información y servicios clave."
      },
      {
        "pregunta": "¿Qué papel cumple el NIST en la seguridad informática?",
        "respuestas": [
          "Desarrollar estándares, guías y medidas de seguridad para el gobierno de EE.UU. y promover la innovación tecnológica",
          "Supervisar los delitos informáticos a nivel mundial",
          "Vender software de seguridad a las empresas privadas",
          "Controlar la propiedad intelectual de las patentes de seguridad"
        ],
        "correcta": "Desarrollar estándares, guías y medidas de seguridad para el gobierno de EE.UU. y promover la innovación tecnológica",
        "explicacion": "El Instituto Nacional de Estándares y Tecnología (NIST) crea marcos normativos y documentos de referencia, como el NISTIR 7298 o el FIPS-200, utilizados internacionalmente."
      },
      {
        "pregunta": "¿Qué es la ISOC (Internet Society)?",
        "respuestas": [
          "Una organización que lidera el desarrollo de estándares de Internet y alberga a grupos como la IETF",
          "Una agencia gubernamental estadounidense dedicada a la ciberseguridad",
          "Un organismo que regula los precios de los servicios de Internet",
          "Una empresa privada encargada de certificar redes seguras"
        ],
        "correcta": "Una organización que lidera el desarrollo de estándares de Internet y alberga a grupos como la IETF",
        "explicacion": "La ISOC promueve la evolución y el uso abierto de Internet, apoyando grupos técnicos como la IETF, que define protocolos y normas de infraestructura."
      },
      {
        "pregunta": "¿Qué función tiene la ITU-T dentro de la seguridad informática?",
        "respuestas": [
          "Coordinar redes y servicios de telecomunicaciones globales entre gobiernos y sector privado",
          "Supervisar las leyes internacionales de propiedad de datos",
          "Regular los precios de los servicios de telefonía y televisión",
          "Emitir licencias de software seguro"
        ],
        "correcta": "Coordinar redes y servicios de telecomunicaciones globales entre gobiernos y sector privado",
        "explicacion": "La Unión Internacional de Telecomunicaciones (ITU-T), dependiente de la ONU, establece estándares globales para las comunicaciones y la seguridad asociada."
      },
      {
        "pregunta": "¿Qué es la ISO en el contexto de la seguridad informática?",
        "respuestas": [
          "Una organización internacional que desarrolla normas globales, incluyendo estándares de seguridad como la ISO/IEC 27001",
          "Un tipo de imagen de disco utilizada para copias de seguridad",
          "Una empresa de certificación privada centrada en redes europeas",
          "Un protocolo de autenticación para sistemas operativos"
        ],
        "correcta": "Una organización internacional que desarrolla normas globales, incluyendo estándares de seguridad como la ISO/IEC 27001",
        "explicacion": "La Organización Internacional de Normalización (ISO) publica estándares internacionales aplicables a la gestión de la seguridad de la información."
      },
      {
        "pregunta": "¿Por qué son importantes los estándares de seguridad?",
        "respuestas": [
          "Porque proporcionan un marco común y verificable para implementar, evaluar y mejorar la seguridad de los sistemas informáticos",
          "Porque reemplazan la necesidad de políticas de seguridad internas",
          "Porque garantizan la inmunidad total ante ataques informáticos",
          "Porque reducen el número de empleados necesarios en el área de TI"
        ],
        "correcta": "Porque proporcionan un marco común y verificable para implementar, evaluar y mejorar la seguridad de los sistemas informáticos",
        "explicacion": "Los estándares permiten uniformar las prácticas de seguridad, facilitar auditorías y asegurar el cumplimiento de normas internacionales."
      }
    ],
    "Tema 2": [
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