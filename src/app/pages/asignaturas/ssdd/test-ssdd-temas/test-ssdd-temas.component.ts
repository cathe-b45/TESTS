import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';
import { HeadbarComponent } from '../../../headbar/headbar.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-test-ssdd-temas',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, DividerModule, CardModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  encapsulation: ViewEncapsulation.None, 
  templateUrl: './test-ssdd-temas.component.html',
  styleUrl: './test-ssdd-temas.component.scss'
})
export class TestSsddTemasComponent {
  temas: { [key: string]: any[] } = {
    "Examen_2023_24_Extraordinario": [
      {
        pregunta: "¿Qué es la comunicación indirecta en sistemas distribuidos?",
        respuestas: [
          "Comunicación directa entre dos procesos.",
          "Comunicación a través de un intermediario.",
          "Comunicación a través de líneas telefónicas.",
          "Comunicación sincrónica en tiempo real."
        ],
        correcta: "Comunicación a través de un intermediario.",
        explicacion : "La respuesta correcta es: <b> Comunicación a través de un intermediario</b>, ya que implica transmitir mensajes mediante un tercero, desacoplando tiempo y espacio​.<br>Las demás son incorrectas porque:<br><b>Comunicación directa entre dos procesos</b> ➔ describe un modelo opuesto al indirecto.<br><b>Comunicación a través de líneas telefónicas</b> ➔ no es específica de sistemas distribuidos.<br><b>Comunicación sincrónica en tiempo real</b> ➔ contradice la posibilidad de comunicación asincrónica que caracteriza al modelo indirecto."
      },
      {
        pregunta: "¿Cuál de los siguientes es un ejemplo de comunicación indirecta?",
        respuestas: [
          "Llamadas a procedimiento remoto (RPC).",
          "Comunicación por sockets.",
          "Colas de mensajes distribuidas.",
          "Comunicación por bluetooth."
        ],
        correcta: "Colas de mensajes distribuidas.",
        explicacion: "La respuesta correcta es: <b>Colas de mensajes distribuidas</b>, ya que estas utilizan intermediarios para permitir la comunicación asincrónica y desacoplada en sistemas distribuidos.<br>Las demás son incorrectas porque:<br><b>Llamadas a procedimiento remoto (RPC)</b> ➔ implican comunicación directa entre procesos.<br><b>Comunicación por sockets</b> ➔ también es directa y punto a punto.<br><b>Comunicación por bluetooth</b> ➔ no refleja las características de la comunicación indirecta en sistemas distribuidos."
      },
      {
        pregunta: "¿Qué es el patrón de publicación/suscripción en sistemas distribuidos?",
        respuestas: [
          "Un método para realizar llamadas a procedimiento remoto (RPC).",
          "Un esquema en el que los procesos se comunican mediante el intercambio de archivos.",
          "Productores envían mensajes a múltiples consumidores interesados a través de un intermediario.",
          "Una técnica para compartir memoria entre procesos en diferentes nodos."
        ],
        correcta: "Productores envían mensajes a múltiples consumidores interesados a través de un intermediario.",
        explicacion: "La respuesta correcta es: <b>Productores envían mensajes a múltiples consumidores interesados a través de un intermediario</b>, ya que es la definición del patrón de publicación/suscripción, donde los publicadores envían eventos y los suscriptores los reciben mediante un intermediario.<br>Las demás son incorrectas porque:<br><b>Un método para realizar llamadas a procedimiento remoto (RPC)</b> ➔ no es parte del modelo publish-subscribe.<br><b>Un esquema en el que los procesos se comunican mediante el intercambio de archivos</b> ➔ no utiliza intermediarios.<br><b>Una técnica para compartir memoria entre procesos en diferentes nodos</b> ➔ pertenece a un modelo diferente de comunicación."
      },
      {
        pregunta: "¿Cuál de los siguientes mecanismos NO es una forma de comunicación indirecta?",
        respuestas: [
          "Memoria compartida distribuida.",
          "Base de datos compartida.",
          "Comunicación de grupos.",
          "Sockets TCP/IP."
        ],
        correcta: "Sockets TCP/IP.",
        explicacion: "La respuesta correcta es: <b>Sockets TCP/IP</b>, ya que son una forma de comunicación directa entre procesos, y no indirecta.<br>Las demás son incorrectas porque:<br><b>Memoria compartida distribuida</b> ➔ es un mecanismo de comunicación indirecta.<br><b>Base de datos compartida</b> ➔ permite comunicación indirecta a través de datos persistentes.<br><b>Comunicación de grupos</b> ➔ se realiza mediante un intermediario o protocolo que distribuye mensajes."
      },
      {
        pregunta: "¿Qué característica tiene la comunicación indirecta respecto de la directa?",
        respuestas: [
          "Es más rápida.",
          "Facilita la sincronización directa entre procesos.",
          "Aumenta el acoplamiento entre los procesos.",
          "Proporciona mayor flexibilidad y desacoplamiento."
        ],
        correcta: "Proporciona mayor flexibilidad y desacoplamiento.",
        explicacion: "La respuesta correcta es: <b>Proporciona mayor flexibilidad y desacoplamiento</b>, ya que la comunicación indirecta elimina la necesidad de que los procesos se conozcan o estén activos al mismo tiempo.<br>Las demás son incorrectas porque:<br><b>Es más rápida</b> ➔ no necesariamente, ya que puede implicar latencia adicional.<br><b>Facilita la sincronización directa entre procesos</b> ➔ es lo contrario, ya que desacopla los procesos.<br><b>Aumenta el acoplamiento entre los procesos</b> ➔ en realidad, lo reduce."
      },
      {
        pregunta: "Indique el tipo de problema que le ayuda a resolver el algoritmo de Ricart y Agrawala.",
        respuestas: [
          "Elección de coordinador.",
          "Consenso.",
          "Exclusión mutua.",
          "Sincronización de eventos."
        ],
        correcta: "Exclusión mutua.",
        explicacion: "La respuesta correcta es: <b>Exclusión mutua</b>, ya que este algoritmo asegura que, en un sistema distribuido, solo un proceso pueda acceder a la sección crítica a la vez, utilizando multidifusión y relojes lógicos.<br>Las demás son incorrectas porque:<br><b>Elección de coordinador</b> ➔ está relacionado con otros algoritmos como el de Bully o el basado en anillo.<br><b>Consenso</b> ➔ busca acordar un valor entre procesos y no está directamente relacionado con la exclusión mutua.<br><b>Sincronización de eventos</b> ➔ se refiere a ordenar eventos, no a la exclusión mutua."
      },
      {
        pregunta: "Construir un sistema que emplea multidifusión sobre el protocolo IP implica la utilización de:",
        respuestas: [
          "SNMP.",
          "TCP.",
          "UDP.",
          "RPC."
        ],
        correcta: "UDP.",
        explicacion: "La respuesta correcta es: <b>UDP</b>, ya que el protocolo de multidifusión en IP se implementa sobre UDP debido a su capacidad para manejar mensajes no confiables de uno a muchos.<br>Las demás son incorrectas porque:<br><b>SNMP</b> ➔ es un protocolo de gestión de redes.<br><b>TCP</b> ➔ no soporta multidifusión debido a su enfoque en conexiones uno a uno y confiabilidad.<br><b>RPC</b> ➔ es un modelo de comunicación basado en llamadas remotas."
      },
      {
        pregunta: "En un sistema distribuido con 4 procesos y un recurso compartido R, ningún proceso quiere acceso a R en el instante 0. En el instante 1, el proceso P1 solicita acceso a R. En cuanto a número de mensajes ¿cuál de los siguientes algoritmos es más eficiente para conseguir la exclusión mutua en ausencia de fallos?",
        respuestas: [
          "Servidor Central.",
          "Anillo (formado por P2->P3->P4->P1->P2 y el token en P3).",
          "Ricart y Agrawala (con soporte multicast real).",
          "García Molina (con soporte multicast real)."
        ],
        correcta: "Servidor Central.",
        explicacion: "La respuesta correcta es: <b>Servidor Central</b>, ya que este algoritmo requiere un mínimo de 3 mensajes (solicitud, concesión y liberación) para garantizar la exclusión mutua, siendo más eficiente en términos de mensajes.<br>Las demás son incorrectas porque:<br><b>Anillo</b> ➔ puede requerir hasta 4 mensajes en el peor caso.<br><b>Ricart y Agrawala</b> ➔ requiere 2(N-1) mensajes, es decir, 6 en este caso.<br><b>García Molina</b> ➔ implica mensajes adicionales debido al protocolo de elección."
      },
      {
        pregunta: "¿Qué caracteriza inequívocamente a un error bizantino?",
        respuestas: [
          "Errores en las comunicaciones.",
          "Errores en los procesos.",
          "Errores aleatorios en comunicaciones y procesos.",
          "Comportamiento aparentemente malicioso."
        ],
        correcta: "Comportamiento aparentemente malicioso.",
        explicacion: "La respuesta correcta es: <b>Comportamiento aparentemente malicioso</b>, ya que un error bizantino implica que los nodos afectados pueden enviar información incorrecta de forma intencionada o descoordinada, complicando la tolerancia a fallos.<br>Las demás son incorrectas porque:<br><b>Errores en las comunicaciones</b> ➔ no son exclusivos de errores bizantinos.<br><b>Errores en los procesos</b> ➔ pueden ser genuinos y no maliciosos.<br><b>Errores aleatorios en comunicaciones y procesos</b> ➔ no incluyen el componente de intencionalidad."
      },
      {
        pregunta: "En multidifusión ¿a qué nos referimos con un grupo cerrado?",
        respuestas: [
          "Sólo los miembros del grupo pueden enviar mensajes al grupo.",
          "Para formar parte del grupo los miembros deben conseguir exclusión mutua.",
          "Todos los procesos se ejecutan sobre computadores de una misma LAN.",
          "Los mensajes enviados al grupo tienen un tamaño predefinido."
        ],
        correcta: "Sólo los miembros del grupo pueden enviar mensajes al grupo.",
        explicacion: "La respuesta correcta es: <b>Sólo los miembros del grupo pueden enviar mensajes al grupo</b>, ya que un grupo cerrado en multidifusión limita los emisores a los miembros del grupo.<br>Las demás son incorrectas porque:<br><b>Para formar parte del grupo los miembros deben conseguir exclusión mutua</b> ➔ no es un requisito de multidifusión.<br><b>Todos los procesos se ejecutan sobre computadores de una misma LAN</b> ➔ no define un grupo cerrado.<br><b>Los mensajes enviados al grupo tienen un tamaño predefinido</b> ➔ no está relacionado con el concepto de grupo cerrado."
      },
      {
        pregunta: "En un conjunto de 7 réplicas, decide implementar un protocolo de consistencia Quorum ¿qué asignación de número de réplicas a grupos de lectura/escritura sería correcta?",
        respuestas: [
          "Escritura 3, Lectura 3.",
          "Escritura 2, Lectura 5.",
          "Escritura 1, Lectura 6.",
          "Escritura 4, Lectura 7."
        ],
        correcta: "Escritura 4, Lectura 7.",
        explicacion: "La respuesta correcta es: <b>Escritura 4, Lectura 7</b>, ya que en un protocolo Quorum, el número de réplicas para escritura y lectura debe cumplir la regla: <b>W + R > N</b> (7 en este caso), asegurando consistencia incluso con fallos.<br>Las demás son incorrectas porque:<br><b>Escritura 3, Lectura 3</b> ➔ no satisface W + R > N.<br><b>Escritura 2, Lectura 5</b> ➔ tampoco satisface la regla de consistencia.<br><b>Escritura 1, Lectura 6</b> ➔ es insuficiente para mantener consistencia en fallos simultáneos."
      },
      {
        pregunta: "¿Qué métodos de replicación no aseguran una consistencia estricta?",
        respuestas: [
          "Métodos optimistas.",
          "Métodos pesimistas.",
          "Ambos métodos aseguran una consistencia estricta.",
          "Ambos métodos no aseguran una consistencia estricta."
        ],
        correcta: "Métodos optimistas.",
        explicacion:"La respuesta correcta es: <b>Métodos optimistas</b>, ya que estos permiten inconsistencias temporales mientras las actualizaciones se propagan a las réplicas, priorizando el rendimiento y la escalabilidad.<br>Las demás son incorrectas porque:<br><b>Métodos pesimistas</b> ➔ aseguran consistencia estricta al bloquear escrituras hasta que todas las réplicas se actualicen.<br><b>Ambos métodos aseguran una consistencia estricta</b> ➔ es falso, solo los pesimistas lo hacen.<br><b>Ambos métodos no aseguran una consistencia estricta</b> ➔ también es falso, porque los pesimistas sí lo aseguran."
      },
      {
        pregunta: "Complete la siguiente frase: «La disponibilidad es inversamente proporcional a...»",
        respuestas: [
          "La carga del sistema.",
          "El coste del sistema.",
          "La redundancia del sistema.",
          "La fiabilidad del sistema."
        ],
        correcta: "La carga del sistema.",
        explicacion:"La respuesta correcta es: <b>La carga del sistema</b>, ya que a medida que la carga aumenta, la disponibilidad tiende a disminuir debido a la saturación de recursos.<br>Las demás son incorrectas porque:<br><b>El coste del sistema</b> ➔ no afecta directamente a la disponibilidad.<br><b>La redundancia del sistema</b> ➔ aumenta la disponibilidad al proporcionar tolerancia a fallos.<br><b>La fiabilidad del sistema</b> ➔ mejora la disponibilidad, no es inversamente proporcional."
      },
      {
        pregunta: "¿Cuál de las siguientes puede ser una consecuencia de la replicación?",
        respuestas: [
          "Aumenta la latencia.",
          "Incrementa la disponibilidad.",
          "Reduce las opciones de escalabilidad.",
          "Simplifica la consistencia."
        ],
        correcta: "Incrementa la disponibilidad.",
        explicacion: "La respuesta correcta es: <b>Incrementa la disponibilidad</b>, ya que la replicación permite que el sistema siga funcionando incluso si algunas réplicas fallan.<br>Las demás son incorrectas porque:<br><b>Aumenta la latencia</b> ➔ la replicación puede reducir la latencia al colocar datos cerca de los usuarios.<br><b>Reduce las opciones de escalabilidad</b> ➔ al contrario, la replicación mejora la escalabilidad.<br><b>Simplifica la consistencia</b> ➔ la replicación suele complicar la consistencia debido a posibles conflictos entre réplicas."
      },
      {
        pregunta: "¿Qué dice el modelo de «consistencia eventual»?",
        respuestas: [
          "El programador es responsable de actualizar las copias en base a un modelo líder-seguidores.",
          "Todas las réplicas deben ser sincronizadas inmediatamente después de cualquier acceso a una de las réplicas.",
          "Si no se hacen escrituras nuevas sobre un recurso dado, todos los accesos devolverán eventualmente el último valor escrito.",
          "Requiere de un protocolo de transacción distribuidas para garantizar la coherencia entre réplicas, especialmente ante particiones en la red."
        ],
        correcta: "Si no se hacen escrituras nuevas sobre un recurso dado, todos los accesos devolverán eventualmente el último valor escrito.",
        explicacion: "La respuesta correcta es: <b>Si no se hacen escrituras nuevas sobre un recurso dado, todos los accesos devolverán eventualmente el último valor escrito</b>, ya que este modelo garantiza que las réplicas converjan en un estado consistente con el tiempo.<br>Las demás son incorrectas porque:<br><b>El programador es responsable de actualizar las copias en base a un modelo líder-seguidores</b> ➔ esto no es parte del modelo de consistencia eventual.<br><b>Todas las réplicas deben ser sincronizadas inmediatamente después de cualquier acceso a una de las réplicas</b> ➔ corresponde a consistencia estricta, no eventual.<br><b>Requiere de un protocolo de transacción distribuidas para garantizar la coherencia entre réplicas</b> ➔ no es necesario en consistencia eventual."
      },
      {
        pregunta: "¿Qué son los relojes lógicos en sistemas distribuidos?",
        respuestas: [
          "Esquemas para ordenar eventos.",
          "Métodos para medir el tiempo real en cada nodo.",
          "Relojes físicos que se sincronizan con precisión.",
          "Dispositivos de hardware para mantener la hora actual."
        ],
        correcta: "Esquemas para ordenar eventos.",
        explicacion: "La respuesta correcta es: <b>Esquemas para ordenar eventos</b>, ya que los relojes lógicos asignan marcas de tiempo para determinar el orden causal entre eventos en sistemas distribuidos.<br>Las demás son incorrectas porque:<br><b>Métodos para medir el tiempo real en cada nodo</b> ➔ esto corresponde a relojes físicos, no lógicos.<br><b>Relojes físicos que se sincronizan con precisión</b> ➔ los relojes lógicos no miden tiempo real ni dependen de precisión física.<br><b>Dispositivos de hardware para mantener la hora actual</b> ➔ los relojes lógicos son una abstracción de software."
      },
      {
        pregunta: "¿Cuál es el propósito de los relojes vectoriales?",
        respuestas: [
          "Reducir el tiempo de procesamiento en cada nodo.",
          "Capturar las dependencias causales entre eventos.",
          "Sincronizar relojes físicos entre nodos.",
          "Proporcionar una GUI para la gestión del tiempo."
        ],
        correcta: "Capturar las dependencias causales entre eventos.",
        explicacion: "La respuesta correcta es: <b>Capturar las dependencias causales entre eventos</b>, ya que los relojes vectoriales permiten rastrear relaciones de causabilidad entre eventos en sistemas distribuidos.<br>Las demás son incorrectas porque:<br><b>Reducir el tiempo de procesamiento en cada nodo</b> ➔ no es su propósito.<br><b>Sincronizar relojes físicos entre nodos</b> ➔ corresponde a algoritmos como NTP, no a relojes vectoriales.<br><b>Proporcionar una GUI para la gestión del tiempo</b> ➔ no tiene relación con relojes vectoriales."
      },
      {
        pregunta: "¿Qué problema intenta resolver NTP?",
        respuestas: [
          "La sincronización de relojes entre nodos en una red.",
          "La comunicación segura entre nodos.",
          "La recuperación de datos después de una falla del sistema.",
          "La distribución de la carga de trabajo en un SD."
        ],
        correcta: "La sincronización de relojes entre nodos en una red.",
        explicacion: "La respuesta correcta es: <b>La sincronización de relojes entre nodos en una red</b>, ya que NTP (Network Time Protocol) ajusta los relojes de los nodos para minimizar las diferencias de tiempo.<br>Las demás son incorrectas porque:<br><b>La comunicación segura entre nodos</b> ➔ no es el propósito de NTP.<br><b>La recuperación de datos después de una falla del sistema</b> ➔ es un problema de tolerancia a fallos, no relacionado con NTP.<br><b>La distribución de la carga de trabajo en un SD</b> ➔ está fuera del alcance de NTP."
      },
      {
        pregunta: "¿Cuál es el propósito del «algoritmo del abusón»?",
        respuestas: [
          "Sincronizar los relojes físicos de todos los nodos en una red.",
          "Elegir un proceso para realizar una tarea específica.",
          "Asegurar la integridad y seguridad de los datos transmitidos.",
          "Ordenar eventos en ausencia de sincronización de reloj físico."
        ],
        correcta: "Elegir un proceso para realizar una tarea específica.",
        explicacion: "La respuesta correcta es: <b>Elegir un proceso para realizar una tarea específica</b>, ya que este algoritmo selecciona al proceso con el identificador más alto como coordinador en un sistema distribuido.<br>Las demás son incorrectas porque:<br><b>Sincronizar los relojes físicos de todos los nodos en una red</b> ➔ no es la función del algoritmo del abusón.<br><b>Asegurar la integridad y seguridad de los datos transmitidos</b> ➔ es responsabilidad de otros protocolos de comunicación.<br><b>Ordenar eventos en ausencia de sincronización de reloj físico</b> ➔ corresponde a relojes lógicos, no al algoritmo del abusón."
      },
      {
        pregunta: "¿Cuál es una limitación de usar relojes físicos en sistemas distribuidos?",
        respuestas: [
          "Son difíciles de implementar.",
          "Pueden llevar a inconsistencias debido a su resolución.",
          "Consumen demasiados recursos.",
          "No se pueden sincronizar en redes locales."
        ],
        correcta: "Pueden llevar a inconsistencias debido a su resolución.",
        explicacion: "La respuesta correcta es: <b>Pueden llevar a inconsistencias debido a su resolución</b>, ya que la resolución limitada y las variaciones en la frecuencia de los relojes pueden causar desincronización entre nodos.<br>Las demás son incorrectas porque:<br><b>Son difíciles de implementar</b> ➔ los relojes físicos son comunes y no presentan gran dificultad técnica.<br><b>Consumen demasiados recursos</b> ➔ no es una limitación relevante.<br><b>No se pueden sincronizar en redes locales</b> ➔ los relojes físicos sí pueden sincronizarse en redes locales utilizando protocolos como NTP."
      }
    ],
    "Examen_2023_24_Ordinario": [
      {
        pregunta: "Está implementando un sistema de comunicación indirecta con ZeroC Ice. ¿Qué componente es más probable que implemente una interfaz similar a la siguiente?",
        respuestas: [
          "El publicador.",
          "El consumidor.",
          "El broker.",
          "Broker y consumidor."
        ],
        correcta: "El broker."
      },
      {
        pregunta: "En un sistema de publicación/suscripción, tanto publicador como subscriptor proporcionan funciones «callback» para envío y recepción de mensajes respectivamente. ¿Qué modelo de interacción parece seguir este sistema?",
        respuestas: [
          "push/push.",
          "pull/pull.",
          "push/pull.",
          "pull/push."
        ],
        correcta: "push/pull."
      },
      {
        pregunta: "El tipo de comunicación que ofrece RabbitMQ en el caso más habitual está...",
        respuestas: [
          "Acoplado en tiempo y espacio.",
          "Desacoplado en tiempo y acoplado en espacio.",
          "Acoplado en tiempo y desacoplado en espacio.",
          "Desacoplado en tiempo y espacio."
        ],
        correcta: "Desacoplado en tiempo y espacio."
      },
      {
        pregunta: "¿Qué modelo de subscripción permite especificar un filtro como un predicado sobre los valores de los atributos del evento?",
        respuestas: [
          "Basado en canales.",
          "Basado en temas.",
          "Basado en contenido.",
          "Basado en claves."
        ],
        correcta: "Basado en contenido."
      },
      {
        pregunta: "¿A qué se refiere el concepto de callback habitual en los mecanismos que soportan recepción push?",
        respuestas: [
          "Es un mecanismo de bloqueo que se aplica en el despacho concurrente.",
          "Se refiere al mecanismo de serialización del sirviente en middlewares RMI.",
          "Es algún elemento invocable mediante el cual el runtime nos proporciona los mensajes.",
          "Es un módulo del runtime que proporciona la interfaz de serialización que ofrece el servidor."
        ],
        correcta: "Es algún elemento invocable mediante el cual el runtime nos proporciona los mensajes."
      },
      {
        pregunta: "En el diseño de SSDD altamente escalables, ¿cómo se puede lograr una coordinación eficiente sin depender de un único punto de fallo?",
        respuestas: [
          "Mediante el uso exclusivo de protocolos centralizados.",
          "Implementando algoritmos de consenso distribuido.",
          "Minimizando la comunicación entre nodos.",
          "Usando un coordinador centralizado de baja disponibilidad."
        ],
        correcta: "Implementando algoritmos de consenso distribuido."
      },
      {
        pregunta: "Como ingeniero informático encargado de la implementación de un sistema distribuido dedicado al mantenimiento de la información del tiempo de un aeropuerto, tiene tres estaciones meteorológicas replicadas identificadas como A, B y C. Normalmente, solo la estación seleccionada como coordinadora manda los datos. Si esto no ocurriera, se seleccionaría otra de forma automática para que envíe las actualizaciones. De los siguientes, ¿qué algoritmo ayudaría a lograr este objetivo?",
        respuestas: [
          "Ricart y Agrawala.",
          "García Molina (bully).",
          "Maekawa.",
          "Ninguno de los anteriores."
        ],
        correcta: "García Molina (bully)."
      },
      {
        pregunta: "¿Cuál de las siguientes explica mejor el funcionamiento y la importancia del algoritmo de Maekawa, destacando cómo aborda la coordinación de manera eficiente y reduce la necesidad de comunicación entre nodos?",
        respuestas: [
          "El algoritmo de Maekawa utiliza un enfoque basado en reglas de prioridad para asignar turnos a los nodos, garantizando la exclusión mutua a través de la cooperación de nodos vecinos y minimizando las consultas a nodos distantes.",
          "Maekawa implementa un modelo de acuerdos distribuidos que utiliza lógica difusa para asignar prioridades, permitiendo una coordinación más flexible y adaptativa en entornos dinámicos.",
          "El algoritmo de Maekawa optimiza la coordinación al permitir que solo algunos de los nodos resuelvan conflictos de exclusión mutua, reduciendo así la carga de comunicación.",
          "La esencia del algoritmo de Maekawa radica en la aplicación de técnicas de aprendizaje profundo para predecir patrones de acceso a recursos, logrando una coordinación autónoma y adaptativa en sistemas distribuidos complejos."
        ],
        correcta: "El algoritmo de Maekawa utiliza un enfoque basado en reglas de prioridad para asignar turnos a los nodos, garantizando la exclusión mutua a través de la cooperación de nodos vecinos y minimizando las consultas a nodos distantes."
      },
      {
        pregunta: "¿Cuál de las siguientes explica mejor el algoritmo de servidor central en comparación con otros enfoques de coordinación?",
        respuestas: [
          "El algoritmo de servidor central utiliza un único nodo como punto focal para coordinar todas las operaciones, simplificando la gestión de transacciones y mejorando la consistencia de datos mediante la centralización de la toma de decisiones.",
          "A través de la implementación de un sistema de replicación de servidores, el algoritmo de servidor central busca mitigar la posibilidad de fallos únicos y mejorar la disponibilidad del sistema, aunque a expensas de una mayor complejidad y carga de red.",
          "El algoritmo de servidor central, al depender de un único punto centralizado, puede enfrentar desafíos significativos en términos de escalabilidad y tolerancia a fallos, ya que un colapso en el nodo central puede paralizar completamente la coordinación en el sistema distribuido.",
          "Al incorporar mecanismos avanzados de encriptación y firma digital, el algoritmo de servidor central garantiza la seguridad de la comunicación entre nodos, minimizando así los riesgos asociados con la coordinación en entornos distribuidos."
        ],
        correcta: "El algoritmo de servidor central utiliza un único nodo como punto focal para coordinar todas las operaciones, simplificando la gestión de transacciones y mejorando la consistencia de datos mediante la centralización de la toma de decisiones."
      },
      {
        pregunta: "¿Cuál de las siguientes explica mejor la función y la relevancia del algoritmo de elección de líder/coordinador en sistemas distribuidos, destacando cómo aborda la coordinación de operaciones críticas y asegura la consistencia en la toma de decisiones?",
        respuestas: [
          "La elección de líder no es esencial para la coordinación en sistemas distribuidos, ya que introduce complejidad innecesaria.",
          "El algoritmo de elección de líder garantiza la exclusión mutua en sistemas distribuidos, minimizando la necesidad de coordinación.",
          "Al seleccionar un nodo como líder, el algoritmo facilita la coordinación al centralizar la toma de decisiones, crucial para operaciones críticas y la consistencia del sistema.",
          "La elección de líder solo es relevante en entornos de baja concurrencia."
        ],
        correcta: "Al seleccionar un nodo como líder, el algoritmo facilita la coordinación al centralizar la toma de decisiones, crucial para operaciones críticas y la consistencia del sistema."
      },
      {
        pregunta: "¿Qué es un sistema tolerante a fallos?",
        respuestas: [
          "Persigue la consistencia de la información.",
          "Sistema muy robusto en el que no se producen fallos de ningún tipo.",
          "Cumple con todas las especificaciones del sistema en presencia de cualquier tipo de fallo.",
          "Permite la ejecución continuada del sistema, posiblemente degradada, aún en presencia de fallos."
        ],
        correcta: "Permite la ejecución continuada del sistema, posiblemente degradada, aún en presencia de fallos."
      },
      {
        pregunta: "¿En qué modelo de replicación, una actualización de un dato X se tiene que ver inmediatamente en las otras réplicas?",
        respuestas: [
          "Lineal.",
          "Estricto.",
          "Secuencial.",
          "Ninguna de las anteriores."
        ],
        correcta: "Estricto."
      },
      {
        pregunta: "¿Qué factores pueden afectar a la ventana de inconsistencia?",
        respuestas: [
          "Carga de los sistemas.",
          "Latencia.",
          "Latencia y carga del sistema.",
          "Latencia, carga de los sistemas y número de réplicas."
        ],
        correcta: "Latencia, carga de los sistemas y número de réplicas."
      },
      {
        pregunta: "Señala la afirmación FALSA respecto al esquema de replicación asíncrona.",
        respuestas: [
          "Cumple ACID.",
          "Proporciona baja latencia.",
          "Proporciona bajo acoplamiento.",
          "Es aplicable a un sistema de consistencia eventual."
        ],
        correcta: "Cumple ACID."
      },
      {
        pregunta: "En un sistema de replicación de 7 nodos basado en «quorum assembly». ¿Cuál de los siguientes sería una configuración ROWA?",
        respuestas: [
          "R=1, W=4.",
          "R=1, W=7.",
          "R=4, W=1.",
          "R=7, W=7."
        ],
        correcta: "R=1, W=7."
      }
    ],
    "Examen_2022_23_Extraordinario": [
      {
        pregunta: "Marca cuál de las siguientes afirmaciones es cierta:",
        respuestas: [
          "En comunicación indirecta existe un desacoplamiento en espacio y tiempo entre los participantes.",
          "Implementar comunicación indirecta es apropiado para la difusión de eventos, pero cuando los receptores son bien conocidos y no suelen cambiar.",
          "En comunicación indirecta se utiliza un intermediario y todas las partes de la comunicación deben estar en ejecución.",
          "RMI implementa comunicación indirecta."
        ],
        correcta: "En comunicación indirecta existe un desacoplamiento en espacio y tiempo entre los participantes."
      },
      {
        pregunta: "¿Cuál es el modelo de comunicación más adecuado para un sistema de estaciones meteorológicas que informan sobre temperatura, viento y presión a un conjunto indeterminado y dinámico de posibles clientes?",
        respuestas: [
          "Polling a una base de datos.",
          "Un sistema publicador-suscriptor.",
          "Un sistema de ficheros distribuido.",
          "RPC o RMI."
        ],
        correcta: "Un sistema publicador-suscriptor."
      },
      {
        pregunta: "¿Qué modelo de comunicación indirecta implica conocer los identificadores de los destinatarios del mensaje que enviamos?",
        respuestas: [
          "Comunicación en grupo.",
          "Colas de mensajes.",
          "Ninguno.",
          "Modelo de memoria distribuida compartida."
        ],
        correcta: "Ninguno."
      },
      {
        pregunta: "Marca la afirmación correcta en relación a los sistemas de propagación de eventos de publicación–suscripción basados en broker:",
        respuestas: [
          "Los publicadores no conocen las referencias de los subscriptores.",
          "Cada publicador es responsable de almacenar las referencias de sus subscriptores.",
          "Cada subscriptor es responsable de almacenar las referencias de sus publicadores.",
          "Cada pareja publicador-suscriptor es única y está identificada unívocamente."
        ],
        correcta: "Los publicadores no conocen las referencias de los subscriptores."
      },
      {
        pregunta: "¿En qué caso NO es adecuado a priori el uso de un middleware de colas de mensajes distribuidas?",
        respuestas: [
          "Emisores y receptores no están activos al mismo tiempo.",
          "Los receptores se encuentran dispersos en múltiples nodos de la red.",
          "Los emisores esperan los resultados del cómputo realizado en los receptores.",
          "Se desea persistencia de los mensajes."
        ],
        correcta: "Los emisores esperan los resultados del cómputo realizado en los receptores."
      },
      {
        pregunta: "IceStorm es un sistema de propagación de eventos basado en...",
        respuestas: [
          "contenido.",
          "tipo.",
          "canal.",
          "Ninguno de los otros."
        ],
        correcta: "canal."
      },
      {
        pregunta: "Un diagrama de estados globales consistentes tiene dos propiedades fundamentales ¿cuál de las siguientes NO es una de ellas?",
        respuestas: [
          "En un estado, haber almacenado recepción de mensajes, pero no su envío.",
          "El estado almacenado es alcanzable desde el estado inicial.",
          "El estado final es alcanzable desde el estado almacenado."
        ],
        correcta: "En un estado, haber almacenado recepción de mensajes, pero no su envío."
      },
      {
        pregunta: "Sea un cliente y un servidor ejecutando el algoritmo de Cristian, tras el proceso de sincronización, el cliente actualiza a Tc=12:00:00, en ese mismo instante, observamos el tiempo del servidor y es Ts=12:00:01. ¿Qué hora original tenía el cliente antes del proceso de sincronización?",
        respuestas: [
          "12:00:01.",
          "12:00:02.",
          "12:00:00:05.",
          "Ninguna respuesta es válida."
        ],
        correcta: "Ninguna respuesta es válida."
      },
      {
        pregunta: "Disponemos de un sistema distribuido formado por 10 procesos (P1-P10). P5 está actuando como servidor central para exclusión mutua, pero debido a un fallo del nodo, el proceso termina inesperadamente. ¿Qué opción considera más adecuada para decidir qué proceso debe desempeñar ahora esa función teniendo en cuenta que todos ellos tienen la capacidad de hacerlo?",
        respuestas: [
          "El siguiente: P6.",
          "El anterior: P7.",
          "Deberían ejecutar un algoritmo de elección.",
          "Deberían esperar a que P5 esté activo de nuevo."
        ],
        correcta: "Deberían ejecutar un algoritmo de elección."
      },
      {
        pregunta: "¿Qué implica «multicast causal»?",
        respuestas: [
          "Los mensajes enviados por un proceso llegarán al mismo orden en que fueron enviados.",
          "Si existe una relación causal entre el envío de dos mensajes multicast, su recepción respeta ese mismo orden.",
          "Todos los mensajes recibidos por un proceso del grupo son confirmados individualmente al emisor.",
          "Todos las entregas correspondientes a un mismo envío llegarán a la vez a todos los procesos del grupo."
        ],
        correcta: "Si existe una relación causal entre el envío de dos mensajes multicast, su recepción respeta ese mismo orden."
      },
      {
        pregunta: "Si ejecutamos el algoritmo de Ricart y Agrawala en una red que soporta multicast, la cantidad de mensajes para acceder a la sección crítica...",
        respuestas: [
          "aumenta.",
          "disminuye.",
          "no varía.",
          "depende de qué proceso ostenta el testigo."
        ],
        correcta: "disminuye."
      },
      {
        pregunta: "¿A qué se refiere la propiedad «liveness» cuando se aplica a un algoritmo de exclusión mutua distribuida?",
        respuestas: [
          "Asegura que no habrá inanición o deadlock.",
          "Asegura que solo un proceso podrá entrar en la CS.",
          "Asegura que los procesos obtendrán acceso a la CS en el mismo orden que lo pidieron.",
          "Asegura que la CS fue liberada antes de otorgar permiso a otro proceso."
        ],
        correcta: "Asegura que no habrá inanición o deadlock."
      },
      {
        pregunta: "El algoritmo de Ricart and Agrawala se basa en:",
        respuestas: [
          "Relojes lógicos y soporte multicast.",
          "La necesidad de elegir un nuevo coordinador.",
          "El paso continuo de un testigo.",
          "La creación de subconjuntos de voto."
        ],
        correcta: "Relojes lógicos y soporte multicast."
      },
      {
        pregunta: "En el contexto de la replicación ¿a qué nos referimos con «particiones de red»?",
        respuestas: [
          "Situaciones en que un grupo de una o más réplicas pierden conectividad con el resto.",
          "Al modo en que se organiza el espacio de almacenamiento local dentro de cada réplica.",
          "Agrupaciones arbitrarias de las réplicas para ofrecer mejor redundancia.",
          "Es solo una forma de referirse a las subredes que forman la red de nodos."
        ],
        correcta: "Situaciones en que un grupo de una o más réplicas pierden conectividad con el resto."
      },
      {
        pregunta: "¿Cuál de las siguientes no se encuadra en el concepto de «replicación»?",
        respuestas: [
          "Múltiples nodos con servidores que mantienen de forma consistente copias de los mismos datos.",
          "Los servidores que gestionan los datos replicados están conectados mediante una red.",
          "Idealmente, el cliente debería ser plenamente consciente con qué servidor está contactando.",
          "Los nodos replicados pueden ofrecer un servicio en lugar de datos."
        ],
        correcta: "Idealmente, el cliente debería ser plenamente consciente con qué servidor está contactando."
      },
      {
        pregunta: "¿Cuál de las siguientes estrategias de replicación ofrece mayor consistencia?",
        respuestas: [
          "Replicación asíncrona.",
          "Consistencia eventual.",
          "Basados en transacciones.",
          "Ordenación débil."
        ],
        correcta: "Basados en transacciones."
      }
    ],
    "Examen_2022_23_Ordinario": [
      {
        pregunta: "¿Con qué mecanismo proporcionado por ZeroC Ice está relacionada la técnica de procesamiento «working queue» habitual en los middlewares de colas de mensajes distribuidas?",
        respuestas: [
          "Batched invocations.",
          "Asynchronous Method Dispatch.",
          "Asynchronous Method Invocation.",
          "No hay un ningún mecanismo relacionado."
        ],
        correcta: "Asynchronous Method Dispatch."
      },
      {
        pregunta: "¿Cuál de los siguientes medios de comunicación podríamos considerar que se encuentra desacoplado en espacio, pero acoplado en tiempo?",
        respuestas: [
          "RMI.",
          "MQTT.",
          "IP multicast.",
          "Ninguno cumple lo indicado."
        ],
        correcta: "IP multicast."
      },
      {
        pregunta: "¿Qué caracteriza al modelo de suscripción «topic based» en un sistema de publicación-suscripción?",
        respuestas: [
          "Depende de la clase (tipo) de los mensajes.",
          "El «topic» aparece como un campo de los mensajes.",
          "El «topic» es un nombre de una lista disponible en el broker.",
          "La suscripción indica el rango de valores en los que está interesado."
        ],
        correcta: "El «topic» aparece como un campo de los mensajes."
      },
      {
        pregunta: "En un sistema de publicación-suscripción ¿Cuál es el principal inconveniente de un broker centralizado respecto a uno descentralizado?",
        respuestas: [
          "Poca escalabilidad.",
          "Su implementación es más compleja.",
          "Dificultad para garantizar propiedades extremo a extremo, como seguridad.",
          "No implica inconvenientes adicionales."
        ],
        correcta: "Poca escalabilidad."
      },
      {
        pregunta: "Con la configuración más básica, en las colas de mensajes distribuidas cuando se envía un mensaje a una cola en la que hay varios suscriptores ¿cuántos de ellos lo reciben?",
        respuestas: [
          "ninguno.",
          "1.",
          "todos.",
          "Aquellos que no han recibido ningún mensaje previo."
        ],
        correcta: "1."
      },
      {
        pregunta: "Desde el punto de vista de un sistema distribuido con alta escalabilidad tolerante a fallos, ¿cuál es el aspecto más débil del algoritmo de exclusión mutua con servidor central?",
        respuestas: [
          "El servidor representa un cuello de botella.",
          "Limitaciones en el tamaño de la cola de peticiones.",
          "En entornos de alta escalabilidad no proporciona liveness.",
          "En entornos de alta escalabilidad, el alto número de mensajes para entrar y salir de la sección crítica."
        ],
        correcta: "El servidor representa un cuello de botella."
      },
      {
        pregunta: "Siendo N el número de procesos, ¿cuál es el número de mensajes que se utiliza el algoritmo de Ricart y Agrawala para entrar (sin considerar la salida de ningún proceso) en la sección crítica?",
        respuestas: [
          "N mensajes.",
          "2*(N-1).",
          "2 mensajes.",
          "2*sqrt(N)."
        ],
        correcta: "2*(N-1)."
      },
      {
        pregunta: "¿Cuál de las siguientes no es una característica considerada por el teorema CAP?",
        respuestas: [
          "Consistencia de datos.",
          "Disponibilidad del sistema.",
          "Ventana de inconsistencia estricta.",
          "Tolerancia a las particiones de red."
        ],
        correcta: "Ventana de inconsistencia estricta."
      },
      {
        pregunta: "¿Qué es la «ventana de inconsistencia» (inconsistency window)?",
        respuestas: [
          "Es el plazo en el que la réplica permite nuevas operaciones de escritura sin afectar al valor persistente almacenado.",
          "El plazo que transcurre entre una escritura y el momento en que está garantizado que se puede acceder al último valor.",
          "El tamaño mínimo del buffer de envío que garantiza que todas las réplicas se podrán actualizar en el tiempo solicitado.",
          "El conjunto de operaciones de lectura/escritura que puede manejar el gestor de réplicas antes de que se actualice un recurso."
        ],
        correcta: "El plazo que transcurre entre una escritura y el momento en que está garantizado que se puede acceder al último valor."
      },
      {
        pregunta: "Escoja la definición más ajustada a protocolo líder/seguidores",
        respuestas: [
          "Protocolo para conseguir consistencia débil en el que todos los nodos pueden actuar como líder o seguidor en cada transacción.",
          "Protocolo para conseguir consistencia fuerte donde un nodo tiene un rol distinguido del resto.",
          "Protocolo para conseguir consistencia débil donde un nodo tiene un rol distinguido del resto.",
          "Protocolo para conseguir consistencia débil donde los nodos seguidores almacenan una copia parcial del líder."
        ],
        correcta: "Protocolo para conseguir consistencia débil donde un nodo tiene un rol distinguido del resto."
      },
      {
        pregunta: "Para un conjunto de 6 nodos, se define un método de votación (quorum) y usted debe definir el número de copias de lectura (R) y el número de copias de escritura (W) ¿qué números propondría para garantizar la consistencia?",
        respuestas: [
          "R=3, W=4.",
          "R=2, W=3.",
          "R=4, W=2.",
          "R=3, W=3."
        ],
        correcta: "R=3, W=4."
      },
      {
        pregunta: "¿Cómo se consigue normalmente el «balanceo de carga»?",
        respuestas: [
          "El sistema redirige las peticiones de los clientes a las distintas réplicas disponibles.",
          "El cliente reparte equitativamente sus peticiones entre las réplicas conocidas.",
          "El planificador decide en qué momento ejecutar las réplicas para que haya un equilibrio de carga a lo largo del tiempo.",
          "Ajustando constantemente el porcentaje de uso de las CPUs disponibles para evitar sobrecargas."
        ],
        correcta: "El sistema redirige las peticiones de los clientes a las distintas réplicas disponibles."
      }
    ],
    "Examen_2021_22_Extraordinario": [
      {
        pregunta: "RabbitMQ usa un modelo de comunicación indirecta del tipo:",
        respuestas: [
          "Sistema basado en eventos distribuidos.",
          "Memoria distribuida.",
          "Cola de mensajes.",
          "Comunicación uno a uno."
        ],
        correcta: "Cola de mensajes."
      },
      {
        pregunta: "Marca la afirmación correcta en relación a los sistemas de propagación de eventos de publicación–suscripción basados en broker:",
        respuestas: [
          "Los publicadores no conocen las referencias de los subscriptores.",
          "Cada publicador es responsable de almacenar las referencias de sus subscriptores.",
          "Cada subscriptor es responsable de almacenar las referencias de sus publicadores.",
          "Cada pareja publicador-suscriptor es única y está identificada unívocamente."
        ],
        correcta: "Los publicadores no conocen las referencias de los subscriptores."
      },
      {
        pregunta: "¿Cuál sería la definición más acertada de un sistema de colas de mensajes distribuidas?",
        respuestas: [
          "El emisor coloca sus mensajes en una cola genérica, el broker los clasifica y responde al emisor.",
          "Un broker central determina el receptor de cada mensaje de la cola distribuida.",
          "Varios receptores reciben copias del mismo mensaje.",
          "No hay diferencias sustanciales con un sistema publicador-suscriptor."
        ],
        correcta: "Un broker central determina el receptor de cada mensaje de la cola distribuida."
      },
      {
        pregunta: "¿Cuál de los siguientes NO se considera un mecanismo de comunicación indirecta?",
        respuestas: [
          "Comunicación de grupos.",
          "Llamada a procedimiento remoto.",
          "Sistemas de propagación de eventos.",
          "Memoria compartida distribuida."
        ],
        correcta: "Llamada a procedimiento remoto."
      },
      {
        pregunta: "¿Cuál de las siguientes frases define mejor el concepto de «evento»?",
        respuestas: [
          "Difusión de una notificación con un valor asociado.",
          "Comunicación de datos entre dos objetos distribuidos cualquiera.",
          "Ejecución de un fragmento de código remoto que retorna una respuesta síncrona.",
          "Ejecución de un fragmento de código remoto que retorna una respuesta asíncrona."
        ],
        correcta: "Difusión de una notificación con un valor asociado."
      },
      {
        pregunta: "¿Qué trata de acotar el cálculo que se aplica en el algoritmo de Cristian?",
        respuestas: [
          "El error causado por un ancho de banda asimétrico.",
          "El error causado por la latencia de la red.",
          "La cantidad de mensajes necesarios para la sincronización de un grupo.",
          "El número de nodos que forman parte del grupo de réplicas."
        ],
        correcta: "El error causado por la latencia de la red."
      },
      {
        pregunta: "En la ejecución del algoritmo de Cristian, el tiempo de respuesta que percibe un computador es de 8 segundos y el servidor envía Ts=10:25:07. ¿Cuál es el tiempo al que podría actualizar su hora el cliente?",
        respuestas: [
          "10:25:11.",
          "10:25:15.",
          "09:59:59.",
          "Habría que conocer la hora del cliente."
        ],
        correcta: "10:25:11."
      },
      {
        pregunta: "¿Cuál es una interpretación correcta del concepto de «causalidad potencial»?",
        respuestas: [
          "Si un evento es un efecto, su causa le precede en la historia de eventos.",
          "Si un evento tiene la capacidad de causar otro, deberá considerarse posterior.",
          "Dos eventos en distintos nodos nunca tienen relación de orden.",
          "Define ambos componentes de los relojes lógicos de orden total."
        ],
        correcta: "Si un evento es un efecto, su causa le precede en la historia de eventos."
      },
      {
        pregunta: "¿Por qué la detección de terminación en un algoritmo distribuido requiere determinar el estado global?",
        respuestas: [
          "Los procesos involucrados podrían estar des-sincronizados.",
          "No se requiere cuando el algoritmo distribuido es asíncrono.",
          "Una invocación en tránsito podría implicar que el algoritmo continúa.",
          "Es necesario determinar el orden causal de todos los mensajes involucrados."
        ],
        correcta: "Es necesario determinar el orden causal de todos los mensajes involucrados."
      },
      {
        pregunta: "Marca la afirmación FALSA en relación a los relojes software:",
        respuestas: [
          "Su valor se determina a partir de un reloj lógico.",
          "Su valor se obtiene a partir de un dispositivo hardware local.",
          "Dos procesos software sin relación pueden tener el mismo valor.",
          "Se optan procedimientos específicos para asegurar que no se producen saltos."
        ],
        correcta: "Su valor se obtiene a partir de un dispositivo hardware local."
      },
      {
        pregunta: "Un sistema con 18 nodos se configura mediante una red de comunicaciones por satélite mediante un contrato de pago por uso (10 euros por MB), a continuación, se configura un algoritmo de exclusión mutua para controlar el acceso a una sección crítica. Durante el primer mes de funcionamiento, ningún nodo accede a la sección crítica ¿Qué algoritmo implicaría un coste mayor?",
        respuestas: [
          "Anillo.",
          "Servidor Central.",
          "Ricart Agrawala.",
          "Si no hay acceso a la sección crítica, todos los algoritmos habrían tenido el mismo coste."
        ],
        correcta: "Ricart Agrawala."
      },
      {
        pregunta: "En un problema de exclusión mutua centralizada, necesita implementar un acceso por orden de petición en el acceso a la sección crítica ¿Qué algoritmo de los siguientes garantiza el orden?",
        respuestas: [
          "Servidor central.",
          "Anillo con testigo.",
          "Ricart y Agrawala.",
          "Todos los algoritmos garantizan el orden."
        ],
        correcta: "Servidor central."
      },
      {
        pregunta: "Determine el tipo de problema que le ayuda a resolver el algoritmo de anillo:",
        respuestas: [
          "Consenso.",
          "Multidifusión.",
          "Consistencia interactiva.",
          "Depende, hay dos algoritmos «de anillo»: uno de exclusión mutua y otro para elección de coordinador."
        ],
        correcta: "Depende, hay dos algoritmos «de anillo»: uno de exclusión mutua y otro para elección de coordinador."
      },
      {
        pregunta: "Construir un sistema que emplea multidifusión sobre el protocolo IP, implica la utilización de:",
        respuestas: [
          "SNMP.",
          "TCP.",
          "UDP.",
          "RPC."
        ],
        correcta: "UDP."
      },
      {
        pregunta: "En un sistema distribuido con 4 procesos y un recurso compartido R, ningún proceso quiere acceso a R en el instante 0. En el instante 1, el proceso P1 solicita acceso a R. En cuanto a número de mensajes ¿cuál de los siguientes algoritmos es más eficiente para conseguir la exclusión mutua en ausencia de fallos?",
        respuestas: [
          "Servidor Central.",
          "Anillo (formado por P2->P3->P4->P1->P2 y el token en P3).",
          "Ricart y Agrawala (con soporte multicast real).",
          "García Molina (con soporte multicast real)."
        ],
        correcta: "Servidor Central."
      },
      {
        pregunta: "¿Cuál es el comportamiento ideal que persigue la replicación?",
        respuestas: [
          "Mantener varias copias idénticas de un recurso o servicio en varios nodos.",
          "Llevar un registro detallado de los accesos concurrentes a un mismo recurso.",
          "Acotar el tiempo de acceso a las copias secundarias de un servicio para evitar inanición.",
          "Impedir el acceso concurrente de varios clientes a un recurso compartido para así evitar inconsistencias."
        ],
        correcta: "Mantener varias copias idénticas de un recurso o servicio en varios nodos."
      },
      {
        pregunta: "¿Por qué decimos que la replicación reduce la latencia?",
        respuestas: [
          "No es cierto. La latencia crece linealmente con el número de réplicas.",
          "El tiempo de sincronización de las réplicas está acotado y converge con el tiempo.",
          "Si las réplicas se distribuyen geográficamente, la latencia media desde los clientes se reduce.",
          "El balanceador de carga ofrece al cliente un acceso prioritario en función de la carga de los nodos."
        ],
        correcta: "Si las réplicas se distribuyen geográficamente, la latencia media desde los clientes se reduce."
      },
      {
        pregunta: "¿Cuál de las siguientes no es una característica considerada por el teorema CAP?",
        respuestas: [
          "Consistencia de datos.",
          "Disponibilidad del sistema.",
          "Ventana de inconsistencia estricta.",
          "Tolerancia a las particiones de red."
        ],
        correcta: "Ventana de inconsistencia estricta."
      },
      {
        pregunta: "¿Qué dice el modelo de «consistencia eventual»?",
        respuestas: [
          "El programador es responsable de actualizar las copias en base a un modelo líder-seguidores.",
          "Todas las réplicas deben ser sincronizadas inmediatamente después de cualquier acceso a una de las réplicas.",
          "Si no se hacen escrituras nuevas sobre un recurso dado, todos los accesos devolverán eventualmente el último valor escrito.",
          "Requiere de un protocolo de transacción distribuidas para garantizar la coherencia entre réplicas, especialmente ante particiones en la red."
        ],
        correcta: "Si no se hacen escrituras nuevas sobre un recurso dado, todos los accesos devolverán eventualmente el último valor escrito."
      },
      {
        pregunta: "¿Qué es la «ventana de inconsistencia» (inconsistency window)?",
        respuestas: [
          "Es el plazo en el que la réplica permite nuevas operaciones de escritura sin afectar al valor persistente almacenado.",
          "El plazo que transcurre entre una escritura y el momento en que está garantizado que se puede acceder al último valor.",
          "El tamaño mínimo del buffer de envío que garantiza que todas las réplicas se podrán actualizar en el tiempo solicitado.",
          "El conjunto de operaciones de lectura/escritura que puede manejar el gestor de réplicas antes de que se actualice un recurso."
        ],
        correcta: "El plazo que transcurre entre una escritura y el momento en que está garantizado que se puede acceder al último valor."
      }
    ],
    "Examen_2021_22_Ordinario": [
      {
        pregunta: "En una comunicación IP multicast, los participantes...",
        respuestas: [
          "Están acoplados en espacio y tiempo.",
          "Están desacoplados en espacio y tiempo.",
          "Están desacoplados en espacio y acoplados en tiempo.",
          "Están acoplados en espacio y desacoplados en tiempo."
        ],
        correcta: "Están desacoplados en espacio y tiempo."
      },
      {
        pregunta: "¿Cuál de las siguientes frases define mejor el concepto de evento?",
        respuestas: [
          "Ejecución de un fragmento de código remoto que retorna una respuesta síncrona.",
          "Ejecución de un fragmento de código remoto que retorna una respuesta asíncrona.",
          "Comunicación de datos entre dos objetos distribuidos cualquiera.",
          "Difusión de una notificación con un valor asociado."
        ],
        correcta: "Difusión de una notificación con un valor asociado."
      },
      {
        pregunta: "¿Cuál es el modelo de comunicación más adecuado para un sistema de estaciones meteorológicas que informan sobre temperatura, viento y presión a un conjunto indeterminado y dinámico de posibles clientes?",
        respuestas: [
          "Polling a una base de datos.",
          "Un sistema publicador-suscriptor.",
          "Un sistema de ficheros distribuido.",
          "RPC o RMI."
        ],
        correcta: "Un sistema publicador-suscriptor."
      },
      {
        pregunta: "¿Qué quiere decir que el emisor y el receptor en un sistema de comunicación indirecta están desacoplados en tiempo?",
        respuestas: [
          "Emisor y receptor no necesitan existir al mismo tiempo.",
          "Emisor no necesita conocer la identidad del receptor y viceversa.",
          "Emisor y receptor necesitan existir al mismo tiempo.",
          "Emisor necesita conocer la identidad del receptor y viceversa."
        ],
        correcta: "Emisor y receptor no necesitan existir al mismo tiempo."
      },
      {
        pregunta: "¿Qué modelo de comunicación indirecta implica conocer los identificadores de los destinatarios del mensaje que enviamos?",
        respuestas: [
          "Comunicación en grupo.",
          "Colas de mensajes.",
          "Ninguno.",
          "Modelo de memoria distribuida compartida."
        ],
        correcta: "Ninguno."
      },
      {
        pregunta: "¿Cuál es una interpretación correcta del concepto de «causalidad potencial»?",
        respuestas: [
          "Si un evento es un efecto, su causa le precede en la historia de eventos.",
          "Si un evento tiene la capacidad de causar otro, deberá considerarse posterior.",
          "Dos eventos en distintos nodos nunca tienen relación de orden.",
          "Define ambos componentes de los relojes lógicos de orden total."
        ],
        correcta: "Si un evento es un efecto, su causa le precede en la historia de eventos."
      },
      {
        pregunta: "En una sincronización mediante el algoritmo de Cristian, un cliente manda un mensaje de sincronización a un servidor con su hora de cliente de Tc=10:00:00, le llega un mensaje de vuelta a las 10:00:20 con la hora de servidor de Ts=10:00:05. ¿Qué hora debe configurar como objetivo para sincronizarse? ¿Qué error máximo está cometiendo?",
        respuestas: [
          "10:00:15, 10 segundos.",
          "10:00:05, 20 segundos.",
          "10:00:05, 10 segundos.",
          "10:00:25, 10 segundos."
        ],
        correcta: "10:00:15, 10 segundos."
      },
      {
        pregunta: "Señale qué afirmación es correcta para el concepto de corte consistente:",
        respuestas: [
          "Al corte consistente es suficiente con incluir las causas e ignorar cualquier efecto.",
          "Al corte consistente le pueden faltar efectos, pero no causas.",
          "Un corte consistente siempre tiene la causa y su efecto incluido.",
          "Al corte consistente le pueden faltar causas, pero no efectos."
        ],
        correcta: "Al corte consistente le pueden faltar efectos, pero no causas."
      },
      {
        pregunta: "¿Qué indica el sesgo (skew)?",
        respuestas: [
          "La diferencia instantánea entre dos relojes lógicos.",
          "La diferencia instantánea entre dos relojes físicos.",
          "Diferencia entre el valor actual y pasado de un reloj lógico.",
          "La tasa de cambio de un reloj de cristal de cuarzo."
        ],
        correcta: "La diferencia instantánea entre dos relojes físicos."
      },
      {
        pregunta: "¿Cuál es la relación que existe entre el reloj físico y el lógico en un mismo computador?",
        respuestas: [
          "El reloj lógico tiene aproximadamente la mitad de deriva que el físico.",
          "El reloj lógico es mucho más preciso porque puede interpolar valores entre dos ticks del reloj físico.",
          "En la aplicación de máximos específicos solo se considera el máximo valor de sesgo.",
          "No existe ninguna relación entre ambos relojes."
        ],
        correcta: "No existe ninguna relación entre ambos relojes."
      },
      {
        pregunta: "En un problema de exclusión mutua centralizada, necesita implementar un acceso por orden de petición en el acceso a la sección crítica ¿Qué algoritmo de los siguientes garantiza el orden?",
        respuestas: [
          "Servidor central.",
          "Anillo con testigo.",
          "Ricart y Agrawala.",
          "Todos los algoritmos garantizan el orden."
        ],
        correcta: "Servidor central."
      },
      {
        pregunta: "Determine el tipo de problema específico que le ayuda a resolver el algoritmo de Chang y Roberts:",
        respuestas: [
          "Elección de coordinador.",
          "Acuerdo.",
          "Consenso.",
          "Exclusión mutua."
        ],
        correcta: "Elección de coordinador."
      },
      {
        pregunta: "Determine el tipo de problema que le ayuda a resolver el algoritmo de anillo:",
        respuestas: [
          "Consenso.",
          "Multidifusión.",
          "Consistencia interactiva.",
          "Depende, hay dos algoritmos «de anillo»: uno exclusión mutua y otro para elección de coordinador."
        ],
        correcta: "Depende, hay dos algoritmos «de anillo»: uno exclusión mutua y otro para elección de coordinador."
      },
      {
        pregunta: "Desde el punto de vista de un sistema distribuido con alta escalabilidad sin fallos, ¿cuál es el aspecto más débil del algoritmo de exclusión mutua con servidor central?",
        respuestas: [
          "El servidor representa un cuello de botella.",
          "Limitaciones en el tamaño de la cola de peticiones.",
          "En entornos de alta escalabilidad no proporciona liveness.",
          "En entornos de alta escalabilidad, el alto número de mensajes para entrar y salir de la región crítica."
        ],
        correcta: "El servidor representa un cuello de botella."
      },
      {
        pregunta: "De las situaciones siguientes, ¿cuál requiere un mecanismo de exclusión mutua distribuida?",
        respuestas: [
          "Una impresora compartida.",
          "Un broker de propagación de eventos.",
          "El control de una grúa robotizada desde una estación base y varios operarios en planta.",
          "Un sistema de ficheros distribuido que dispone de implementaciones para diferentes sistemas operativos."
        ],
        correcta: "El control de una grúa robotizada desde una estación base y varios operarios en planta."
      },
      {
        pregunta: "¿Qué afirmación es falsa para la replicación?",
        respuestas: [
          "Mejora la tolerancia a fallos.",
          "Simplifica la consistencia de datos.",
          "Incrementa la disponibilidad del sistema distribuido.",
          "Puede mejorar el tiempo de respuesta en el acceso a los datos."
        ],
        correcta: "Simplifica la consistencia de datos."
      },
      {
        pregunta: "Qué factores pueden afectar a la ventana de inconsistencia:",
        respuestas: [
          "Carga de los sistemas.",
          "Retardo en las comunicaciones.",
          "Retardo en las comunicaciones y carga de los sistemas.",
          "Retardo en las comunicaciones, carga de los sistemas y número de réplicas."
        ],
        correcta: "Retardo en las comunicaciones, carga de los sistemas y número de réplicas."
      },
      {
        pregunta: "En qué modelo de replicación, una actualización de un dato X se tiene que ver instantáneamente:",
        respuestas: [
          "Lineal.",
          "Estricto.",
          "Secuencial.",
          "En sistemas asíncronos no se puede propagar de forma instantánea (tiempo de los mensajes)."
        ],
        correcta: "Estricto."
      },
      {
        pregunta: "Complete la siguiente frase: «La disponibilidad es inversamente proporcional a...»",
        respuestas: [
          "La carga del sistema.",
          "El coste del sistema.",
          "La redundancia del sistema.",
          "La fiabilidad del sistema."
        ],
        correcta: "La carga del sistema."
      },
      {
        pregunta: "¿Qué es un sistema tolerante a fallos?",
        respuestas: [
          "Sistema que persigue la consistencia de la información.",
          "Sistema muy robusto en el que no se producen fallos de ningún tipo.",
          "Sistema que cumple con todas las especificaciones del sistema en presencia de cualquier tipo de fallo.",
          "Sistema que permite la ejecución continuada del sistema, posiblemente degradada, aún en presencia de fallos."
        ],
        correcta: "Sistema que permite la ejecución continuada del sistema, posiblemente degradada, aún en presencia de fallos."
      }
    ],
    "Examen_2020_21_Extraordinario": [
      {
        pregunta: "Utilizando un sistema de comunicación indirecto basado en eventos, donde el gestor de eventos almacena eventos, ¿qué se requiere, como mínimo, para el envío de un evento?",
        respuestas: [
          "Que el publicador y el gestor de eventos estén acoplados temporalmente.",
          "Que el publicador y el subscriptor estén acoplados temporalmente.",
          "Que el subscriptor y el gestor de eventos estén acoplados temporalmente.",
          "Que el publicador, subscriptor y gestor de eventos estén acoplados temporalmente."
        ],
        correcta: "Que el publicador y el gestor de eventos estén acoplados temporalmente."
      },
      {
        pregunta: "En RabbitMQ, ¿cómo se implementan las políticas de enrutado de los mensajes a las distintas colas?",
        respuestas: [
          "Los publicadores especifican las colas destino.",
          "Las propias colas tienen sus filtros asociados.",
          "Los Exchanges o intercambiadores las implementan.",
          "Los consumidores, al declarar las colas a las que se subscriben."
        ],
        correcta: "Los Exchanges o intercambiadores las implementan."
      },
      {
        pregunta: "En RabbitMQ ¿podría usar Protocol Buffers de Google para codificar mensajes a las colas?",
        respuestas: [
          "No.",
          "Sí.",
          "Depende del tamaño del mensaje.",
          "Solo a partir de la versión 3."
        ],
        correcta: "Sí."
      },
      {
        pregunta: "Los sistemas de comunicación indirecta son adecuados para...",
        respuestas: [
          "... aplicaciones que mantienen la conexión durante mucho tiempo.",
          "... nodos de cómputo para procesamiento masivo por lotes en grandes grids.",
          "... aplicaciones con un gran número de usuarios con información esporádicamente.",
          "... cualquier tipo de aplicación."
        ],
        correcta: "... aplicaciones con un gran número de usuarios con información esporádicamente."
      },
      {
        pregunta: "¿Qué modelo de comunicación indirecta implica conocer los identificadores de los destinatarios del mensaje que enviamos?",
        respuestas: [
          "Comunicación en grupo.",
          "Colas de mensajes.",
          "Ninguno.",
          "Modelo de memoria distribuida compartida."
        ],
        correcta: "Ninguno."
      },
      {
        pregunta: "¿Qué propiedades nos dificulta elegir como modelo de comunicación un esquema indirecto?",
        respuestas: [
          "Diseminación de los mensajes.",
          "Escalabilidad.",
          "Tiempo real en las comunicaciones.",
          "Desacoplamiento."
        ],
        correcta: "Tiempo real en las comunicaciones."
      },
      {
        pregunta: "En una sincronización mediante el algoritmo de Cristian, un cliente envía un mensaje de sincronización a un servidor con Tc=15:01:30. El mensaje de respuesta del servidor llega a las 15:01:40 con Ts=15:01:05, ¿qué hora debe fijar el cliente como objetivo para sincronizarse? ¿Qué error está cometiendo?",
        respuestas: [
          "15:01:10, e = 5 segundos.",
          "15:01:15, e = 5 segundos.",
          "15:01:45, e = 10 segundos.",
          "15:01:20, e = 10 segundos."
        ],
        correcta: "15:01:10, e = 5 segundos."
      },
      {
        pregunta: "Cuando se aplica un algoritmo de sincronización externa a un grupo de procesos en una LAN...",
        respuestas: [
          "Es determinante la latencia entre los procesos del grupo.",
          "El ancho de banda hacia el servidor delimita la precisión.",
          "El error es mayor conforme crece el número de procesos del grupo.",
          "Todas las afirmaciones son falsas."
        ],
        correcta: "Todas las afirmaciones son falsas."
      },
      {
        pregunta: "¿Qué consecuencia tiene la replicación?",
        respuestas: [
          "Aumenta la latencia.",
          "Incrementa la disponibilidad.",
          "Reduce las opciones de escalabilidad.",
          "Simplifica la consistencia."
        ],
        correcta: "Incrementa la disponibilidad."
      },
      {
        pregunta: "¿Cómo se consigue normalmente el «balanceo de carga»?",
        respuestas: [
          "El sistema redirige las peticiones de los clientes a las distintas réplicas disponibles.",
          "El cliente reparte equitativamente sus peticiones entre las réplicas conocidas.",
          "El planificador decide en qué momento ejecutar las peticiones para haya un equilibrio de carga a lo largo del tiempo.",
          "Ajustando constantemente el porcentaje de uso de las CPUs disponibles para evitar sobrecargas."
        ],
        correcta: "El sistema redirige las peticiones de los clientes a las distintas réplicas disponibles."
      },
      {
        pregunta: "¿Qué proporciona un sistema con consistencia estricta?",
        respuestas: [
          "La marca de tiempo en qué se actualizó cualquier recurso replicado.",
          "Siempre está disponible el último valor proporcionado a cualquier recurso.",
          "El orden de las lecturas debe coincidir estrictamente con el orden de las escrituras.",
          "El sistema informa explícitamente si no puede proporcionar el valor de la última escritura."
        ],
        correcta: "El orden de las lecturas debe coincidir estrictamente con el orden de las escrituras."
      },
      {
        pregunta: "¿Qué es la «ventana de inconsistencia» (inconsistency window)?",
        respuestas: [
          "Es el plazo en el que la réplica permite nuevas operaciones de escritura sin afectar al valor persistente almacenado.",
          "El plazo que transcurre entre una escritura y el momento es que está garantizado que se puede acceder al último valor.",
          "El tamaño mínimo del buffer de envío que garantiza que todas las réplicas se podrán actualizar en el tiempo solicitado.",
          "El conjunto de operaciones de lectura/escritura que puede manejar el gestor de réplicas antes de que se actualice un recurso."
        ],
        correcta: "El plazo que transcurre entre una escritura y el momento es que está garantizado que se puede acceder al último valor."
      },
      {
        pregunta: "¿Cuál es la estrategia más simple para implementar consistencia débil (weak)?",
        respuestas: [
          "Las operaciones se realizan sobre el leader y éste se encarga de actualizar los followers.",
          "Un sistema de réplicas basado en quorum con un mínimo 2R copias de lectura y W copias de escritura.",
          "El cliente actualiza todas las réplicas de forma simultánea mediante invocaciones concurrentes.",
          "Se utiliza un protocolo two phase commit protocol."
        ],
        correcta: "Las operaciones se realizan sobre el leader y éste se encarga de actualizar los followers."
      }
    ],
    "Examen_2020_21_Ordinario": [
      {
        pregunta: "¿Qué afirmación es falsa para la replicación?",
        respuestas: [
          "Puede mejorar el tiempo de respuesta en el acceso a los datos.",
          "Mejora la tolerancia a fallos.",
          "Incrementa la disponibilidad del sistema distribuido.",
          "Simplifica la consistencia de datos."
        ],
        correcta: "Simplifica la consistencia de datos."
      },
      {
        pregunta: "Qué factores pueden afectar a la ventana de inconsistencia:",
        respuestas: [
          "Retardo en las comunicaciones, carga de los sistemas y número de réplicas.",
          "Retardo en las comunicaciones y carga de los sistemas.",
          "Retardo en las comunicaciones.",
          "Carga de los sistemas."
        ],
        correcta: "Retardo en las comunicaciones, carga de los sistemas y número de réplicas."
      },
      {
        pregunta: "En un conjunto de 7 réplicas, decide implementar un protocolo de consistencia Quorum ¿qué asignación de número de réplicas a grupos de lectura/escritura le vale?",
        respuestas: [
          "Escritura 3, Lectura 3.",
          "Escritura 2, Lectura 5.",
          "Escritura 1, Lectura 6.",
          "Escritura 4, Lectura 7."
        ],
        correcta: "Escritura 4, Lectura 7."
      },
      {
        pregunta: "¿En qué modelo de log de replicación, una actualización de la versión de la base de datos en solo una de las réplicas, puede causar problemas?",
        respuestas: [
          "Log basado en sentencias/declaraciones (Statement-based).",
          "Log basado en lógica (Logical-base).",
          "Log basado en adelanto de escritura (write-ahead).",
          "En ningún caso hay problema mientras la base de datos (Oracle, MySQL, etc.) sea la misma."
        ],
        correcta: "Log basado en sentencias/declaraciones (Statement-based)."
      },
      {
        pregunta: "¿En qué modelo de log de replicación, una sentencia SQL con una referencia a un número aleatorio, puede causar problemas?",
        respuestas: [
          "Log basado en adelanto de escritura (Write-ahead).",
          "Log basado en sentencias/declaraciones (Statement-based).",
          "Log basado en lógica (Logical-base).",
          "En ningún caso hay problema."
        ],
        correcta: "Log basado en sentencias/declaraciones (Statement-based)."
      },
      {
        pregunta: "¿En qué modelo de replicación, una actualización de un dato X se tiene que ver instantáneamente?",
        respuestas: [
          "Secuencial.",
          "Estricto.",
          "Lineal.",
          "En sistemas asíncronos no se puede propagar de forma instantánea (tiempo de los mensajes)."
        ],
        correcta: "Estricto."
      },
      {
        pregunta: "¿Qué indica la propiedad liveness en los algoritmos de exclusión mutua distribuida?",
        respuestas: [
          "Cualquier proceso que solicite acceso al recurso lo obtendrá en algún momento.",
          "Si hay un proceso utilizando el recurso, ningún otro proceso puede obtener acceso.",
          "Cualquier proceso correcto (vivo) tiene permiso para solicitar acceso al recurso.",
          "Todos los procesos de un grupo dado tienen permiso para acceder a todos los recursos del grupo."
        ],
        correcta: "Cualquier proceso que solicite acceso al recurso lo obtendrá en algún momento."
      },
      {
        pregunta: "Respecto a su eficiencia, ¿cuál es la diferencia principal entre los algoritmos de anillo para exclusión mutua y para elección?",
        respuestas: [
          "El algoritmo de elección requiere menos mensajes.",
          "El algoritmo de exclusión mutua requiere menos mensajes.",
          "El de elección solo consume recursos cuando un proceso lo dispara, el de exclusión mutua los consume constantemente.",
          "El de exclusión mutua solo consume recursos cuando un proceso lo dispara, el de elección los consume constantemente."
        ],
        correcta: "El de elección solo consume recursos cuando un proceso lo dispara, el de exclusión mutua los consume constantemente."
      },
      {
        pregunta: "¿Qué implica «multicast FIFO»?",
        respuestas: [
          "Los mensajes enviados por un proceso llegarán en el mismo orden que fueron enviados.",
          "Si existe una relación causal entre dos mensajes multicast, su recepción respeta ese mismo orden.",
          "Todos los mensajes recibidos por un proceso del grupo son confirmados individualmente al emisor.",
          "Todas las entregas correspondientes a un mismo envío llegarán a la vez a todos los procesos del grupo."
        ],
        correcta: "Los mensajes enviados por un proceso llegarán en el mismo orden que fueron enviados."
      },
      {
        pregunta: "¿Cuál es la finalidad de un algoritmo de «consenso»?",
        respuestas: [
          "Decidir qué proceso determina el valor correcto de la variable de decisión.",
          "Al terminar, todos los procesos llegan al mismo valor correcto en la variable de decisión.",
          "Al terminar, todos los procesos conocen que todos los procesos del grupo.",
          "Comprobar que todos los procesos correctos obtienen acceso a la variable de decisión determinada por el coordinador."
        ],
        correcta: "Al terminar, todos los procesos llegan al mismo valor correcto en la variable de decisión."
      },
      {
        pregunta: "¿Qué es el «vector de decisión» en un problema de consistencia interactiva?",
        respuestas: [
          "Los datos de entrada del algoritmo.",
          "El reloj vectorial que acuerdan todos los miembros del grupo.",
          "El conjunto de valores propuestos por cada proceso participante.",
          "La secuencia de todos los valores propuestos hasta llegar al acuerdo."
        ],
        correcta: "El conjunto de valores propuestos por cada proceso participante."
      },
      {
        pregunta: "¿Qué opción es más escalable, a priori, en el desarrollo de un sistema distribuido?",
        respuestas: [
          "Comunicación indirecta.",
          "RPC.",
          "RMI.",
          "Todas tienen similares prestaciones en cuanto a escalabilidad."
        ],
        correcta: "Comunicación indirecta."
      },
      {
        pregunta: "¿Qué modelos de invocación se podrían implementar con RabbitMQ?",
        respuestas: [
          "Comunicación indirecta.",
          "RPC.",
          "RMI.",
          "RabbitMQ puede implementar/emular los modelos de comunicación a), b) y c)."
        ],
        correcta: "RabbitMQ puede implementar/emular los modelos de comunicación a), b) y c)."
      },
      {
        pregunta: "En una comunicación IP multicast, los participantes...",
        respuestas: [
          "Están acoplados en espacio y tiempo.",
          "Están desacoplados en espacio y tiempo.",
          "Están desacoplados en espacio y acoplados en tiempo.",
          "Están acoplados en espacio y desacoplados en tiempo."
        ],
        correcta: "Están desacoplados en espacio y tiempo."
      },
      {
        pregunta: "El mecanismo que implementa el enrutado de mensajes a los consumidores en RabbitMQ se denomina:",
        respuestas: [
          "Es un mecanismo de las colas.",
          "Se implementa en los publicadores.",
          "Se implementa en los consumidores.",
          "Exchanges."
        ],
        correcta: "Exchanges."
      },
      {
        pregunta: "Está implementando un sistema de comunicación indirecta con ZeroC Ice. ¿Quién es más lógico que implemente la siguiente interfaz?",
        respuestas: [
          "El publicador.",
          "El consumidor.",
          "El broker.",
          "El broker y el consumidor."
        ],
        correcta: "El broker."
      },
      {
        pregunta: "¿Cuál es el modelo de comunicación más adecuado para un sistema de estaciones meteorológicas que informan sobre temperatura, viento y presión a un conjunto indeterminado y dinámico de posibles clientes?",
        respuestas: [
          "Polling a una base de datos.",
          "Un sistema publicador-suscriptor.",
          "Un sistema de ficheros distribuido.",
          "RPC o RMI."
        ],
        correcta: "Un sistema publicador-suscriptor."
      }
    ]
  };
  temaActual: number = 0;
  temasKeys: string[] = [];
  preguntasActuales: any[] = [];
  tituloTema: string = '';
  testFinalizado: boolean = false;
  respuestasUsuario: string[] = []; // Array para almacenar respuestas seleccionadas por el usuario.
  mostrarDialogo = false; // Controla la visibilidad del diálogo
  explicacionActual = ''; // Guarda la explicación que se va a mostrar

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService
  ) {
    this.temasKeys = Object.keys(this.temas);
    this.cargarTemaActual();
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
  }

  /**
   * Barajar un array aleatoriamente.
   */
  shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }

  /**
   * Navegar al siguiente tema.
   */
  siguienteTema() {
    if (this.temaActual < this.temasKeys.length - 1) {
      this.temaActual++;
      this.cargarTemaActual();
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Vuelve al inicio de la página
    } else {
      alert('¡Has completado todos los temas!');
    }
  }

  /**
   * Navegar al tema anterior.
   */
  temaAnterior() {
    if (this.temaActual > 0) {
      this.temaActual--;
      this.cargarTemaActual();
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Vuelve al inicio de la página
    } else {
      alert('Estás en el primer tema.');
    }
  }

  /**
   * Finalizar el test y mostrar respuestas correctas.
   */

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

  basePath = '/TESTS/assets/pdfs'; // Ruta base para los PDFs

  abrirPdf(tema: string, tipo: 'examen' | 'correccion'): void {
    // Generar nombres de archivo según la convención observada
    const solvedSuffix = tipo === 'correccion' ? '_Solved' : '';
    const fileName = `${tema.replace(/ /g, '_')}${solvedSuffix}.pdf`; // Reemplazar espacios por guiones bajos
    const pdfPath = `${this.basePath}/${fileName}`;
    window.open(pdfPath, '_blank'); // Abrir PDF en una nueva pestaña
}

mostrarExplicacion(explicacion: string) {
  this.explicacionActual = explicacion; // Asigna la explicación al diálogo
  this.mostrarDialogo = true; // Muestra el diálogo
}
  /**
   * Volver a la página anterior.
   */
  goBack() {
    this.router.navigate(['/ssdd']);
  }
}

