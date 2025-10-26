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
  selector: 'app-test-completo-multimedia',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DividerModule, CardModule, DialogModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule, PaginatorModule],
  providers: [ConfirmationService],
  templateUrl: './test-multimedia-completo.component.html',
  styleUrl: './test-multimedia-completo.component.scss'
})
export class TestCompletoMultimediaComponent {
  temas: { [key: string]: any[] } = {
    "Tema 1": [
      {
        "pregunta": "¿Cuál es la primera fase de la metodología de diseño Top-Down?",
        "respuestas": [
          "Desarrollar un diseño lógico",
          "Analizar requisitos",
          "Probar, optimizar y documentar el diseño",
          "Implementar y probar la red"
        ],
        "correcta": "Analizar requisitos",
        "explicacion": "La primera fase según el método Top-Down es Analizar Requisitos, que incluye entrevistas, análisis de metas de negocio y técnicas, y caracterización de la red existente "
      },
      {
        "pregunta": "¿En qué capa se debe comenzar a diseñar según el enfoque Top-Down?",
        "respuestas": [
          "Capa física",
          "Capa de red",
          "Capa 7 o más arriba",
          "Capa de enlace de datos"
        ],
        "correcta": "Capa 7 o más arriba",
        "explicacion": "El diseño Top-Down recomienda empezar primero en la capa 7 o superior para alinear tecnología con requerimientos de negocio"
      },
      {
        "pregunta": "¿Qué representan los modelos lógico y físico en el diseño de redes?",
        "respuestas": [
          "Lógico: dispositivos; Físico: protocolos",
          "Lógico: procesos y funciones; Físico: tecnologías y dispositivos",
          "Lógico: cableado; Físico: direcciones IP",
          "Lógico: disponibilidad; Físico: escalabilidad"
        ],
        "correcta": "Lógico: procesos y funciones; Físico: tecnologías y dispositivos",
        "explicacion": "El modelo lógico describe elementos básicos y funciones; el físico los dispositivos y tecnologías específicas"
      },
      {
        "pregunta": "¿Qué significa SDLC en el contexto de diseño de redes según el tema 1?",
        "respuestas": [
          "Synchronous Data Link Control",
          "System Development Life Cycle",
          "Security Design Lifecycle",
          "Standard Data Link Control"
        ],
        "correcta": "System Development Life Cycle",
        "explicacion": "SDLC en este curso se refiere a Systems Development Life Cycles, no al protocolo Synchronous Data Link Control"
      },
      {
        "pregunta": "¿Cuál es el principal determinante en un nuevo diseño de red?",
        "respuestas": [
          "La topología existente",
          "El presupuesto",
          "La disponibilidad requerida",
          "Las herramientas de monitorización"
        ],
        "correcta": "El presupuesto",
        "explicacion": "En un nuevo diseño desde cero, el ejecutivo clave es el presupuesto disponible"
      },
      {
        "pregunta": "¿Qué fase sigue al desarrollo del diseño lógico?",
        "respuestas": [
          "Analizar requisitos",
          "Implementar y probar la red",
          "Desarrollar un diseño físico",
          "Monitorizar y optimizar el rendimiento"
        ],
        "correcta": "Desarrollar un diseño físico",
        "explicacion": "Tras el diseño lógico (fase 2) viene el diseño físico de la red (fase 3)"
      },
      {
        "pregunta": "¿Qué factor NO se considera en las metas técnicas del Capítulo 2?",
        "respuestas": [
          "Escalabilidad",
          "Seguridad",
          "Ergonomía de los dispositivos",
          "Facilidad de gestión"
        ],
        "correcta": "Ergonomía de los dispositivos",
        "explicacion": "Las metas técnicas incluyen escalabilidad, disponibilidad, seguridad, facilidad de gestión, uso, adaptabilidad y presupuesto, pero no ergonomía."
      },
      {
        "pregunta": "¿Cómo se expresa la disponibilidad de un sistema?",
        "respuestas": [
          "Como porcentaje de éxito en retransmisiones",
          "Como porcentaje de tiempo operativo",
          "Como número de usuarios concurrentes",
          "Como frecuencia de actualización del firmware"
        ],
        "correcta": "Como porcentaje de tiempo operativo",
        "explicacion": "La disponibilidad se expresa como el porcentaje de tiempo que los sistemas están operativos (por año, mes, etc.)."
      },
      {
        "pregunta": "¿Qué representa MTBF en términos de disponibilidad?",
        "respuestas": [
          "Tiempo medio hasta la primera falla",
          "Tiempo medio entre fallos",
          "Tiempo medio de reparación",
          "Margen técnico de balance de fallos"
        ],
        "correcta": "Tiempo medio entre fallos",
        "explicacion": "MTBF es el Mean Time Between Failures y se usa junto a MTTR para calcular disponibilidad."
      },
      {
        "pregunta": "¿Qué métrica compara la cantidad de datos transmitidos sin errores por unidad de tiempo?",
        "respuestas": [
          "Ancho de banda",
          "Caudal (throughput)",
          "Latencia",
          "Carga"
        ],
        "correcta": "Caudal (throughput)",
        "explicacion": "El caudal es la cantidad de datos libres de errores transmitidos por unidad de tiempo, diferenciándolo del ancho de banda."
      },
      {
        "pregunta": "¿Cuál es la diferencia principal entre caudal y caudal real (goodput)?",
        "respuestas": [
          "Goodput mide paquetes por segundo",
          "Goodput excluye datos de cabecera y retransmisiones",
          "Mejor caudal mide eficiencia de cableado",
          "Caudal real es un concepto obsoleto"
        ],
        "correcta": "Goodput excluye datos de cabecera y retransmisiones",
        "explicacion": "El caudal real o goodput considera solo datos de aplicación, descontando cabeceras y retransmisiones."
      },
      {
        "pregunta": "¿Cuál de los siguientes NO es un factor que afecta al caudal?",
        "respuestas": [
          "Tamaño de los paquetes",
          "Espacios entre tramas",
          "Velocidad de CPU del cliente",
          "Longitud de onda del enlace"
        ],
        "correcta": "Longitud de onda del enlace",
        "explicacion": "La longitud de onda aplica a fibra óptica, no afecta directamente al caudal de bits; los demás sí."
      },
      {
        "pregunta": "¿Qué representa la utilización del ancho de banda?",
        "respuestas": [
          "Porcentaje del ancho de banda máximo usado",
          "Cantidad de bytes transmitidos",
          "Retardo promedio en cola",
          "Número de errores de CRC"
        ],
        "correcta": "Porcentaje del ancho de banda máximo usado",
        "explicacion": "La utilización indica el porcentaje de uso del total de ancho de banda disponible."
      },
      {
        "pregunta": "Según el ejemplo del conmutador y cinco usuarios, ¿qué % de utilización resulta con 51 200 bps en un enlace de 56 000 bps?",
        "respuestas": [
          "70%",
          "91.4%",
          "50%",
          "100%"
        ],
        "correcta": "91.4%",
        "explicacion": "Utilización = carga/ancho = 51 200/56 000 ≈ 0.914, es decir, 91.4%"
      },
      {
        "pregunta": "¿Qué ocurre cuando La/R → 1 en una cola de router?",
        "respuestas": [
          "Retardo de cola se reduce a cero",
          "Retardo de cola se hace infinito",
          "Retardo de propagación domina",
          "No hay paquetes en cola"
        ],
        "correcta": "Retardo de cola se hace infinito",
        "explicacion": "Cuando la intensidad de tráfico La/R supera 1, la media de retardo de cola tiende a infinito ."
      },
      {
        "pregunta": "¿Cuál es la variación en el retardo promedio conocida como…?",
        "respuestas": [
          "Latencia",
          "Jitter",
          "Throughput",
          "MTTR"
        ],
        "correcta": "Jitter",
        "explicacion": "La variación en el retardo promedio se denomina jitter."
      },
      {
        "pregunta": "¿Qué herramienta se usa para medir el retardo de cada salto en Internet?",
        "respuestas": [
          "Ping",
          "Traceroute",
          "Netstat",
          "MRTG"
        ],
        "correcta": "Traceroute",
        "explicacion": "Traceroute envía sondas TTL crecientes y mide el retardo de cada router intermedio ."
      },
      {
        "pregunta": "¿Qué comando de Cisco mostrará el estado del buffer en un router?",
        "respuestas": [
          "show buffers",
          "show processes",
          "show ip route",
          "show environment"
        ],
        "correcta": "show buffers",
        "explicacion": "El comando show buffers lista el uso y estado de los buffers en IOS :contentReference."
      },
      {
        "pregunta": "¿Qué porcentaje de CRC errors es aceptable según valores deseables?",
        "respuestas": [
          "Más de 10 por Mbyte",
          "No más de 1 por Mbyte",
          "Entre 5 y 10 por Mbyte",
          "Cualquier cantidad es tolerable"
        ],
        "correcta": "No más de 1 por Mbyte",
        "explicacion": "Los errores de CRC no deben exceder 1 por Mbyte para garantizar calidad de enlace."
      },
      {
        "pregunta": "¿Cuál de las siguientes topologías NO se menciona como opción en SDH?",
        "respuestas": [
          "Estrella",
          "Malla",
          "Anillo",
          "Árbol"
        ],
        "correcta": "Malla",
        "explicacion": "SDH usa preferentemente topología en anillo para alta fiabilidad; estrella y árbol no se usan y malla tampoco se menciona"
      },
      {
        "pregunta": "¿Qué tecnología agrupa enlaces Ethernet para aumentar ancho de banda?",
        "respuestas": [
          "VLAN",
          "Spanning Tree",
          "EtherChannel",
          "HSRP"
        ],
        "correcta": "EtherChannel",
        "explicacion": "EtherChannel permite el agrupamiento de varios enlaces físicos en uno lógico"
      },
      {
        "pregunta": "¿Cuál es la función principal de un switch en el contexto de tráfico broadcast?",
        "respuestas": [
          "Ignorar tramas broadcast",
          "Actuar como cortafuegos",
          "Aislar el tráfico broadcast en dominios VLAN",
          "Convertir broadcasts en unicast"
        ],
        "correcta": "Aislar el tráfico broadcast en dominios VLAN",
        "explicacion": "Los switches segmentan dominios de broadcast por VLAN, limitando su alcance"
      },
      {
        "pregunta": "¿Qué tipo de flujo de tráfico corresponde a VoIP?",
        "respuestas": [
          "Terminal/Host",
          "Cliente/Servidor",
          "Peer-to-Peer",
          "Server/Server"
        ],
        "correcta": "Peer-to-Peer",
        "explicacion": "La transmisión de voz digital en VoIP es esencialmente un flujo Peer-to-Peer"
      },
      {
        "pregunta": "¿Cuál de estas NO es una fase del ciclo de vida del diseño de redes?",
        "respuestas": [
          "Analizar requisitos",
          "Diseño lógico",
          "Diseño físico",
          "Desplegar firmware"
        ],
        "correcta": "Desplegar firmware",
        "explicacion": "Las fases son análisis de requisitos, diseño lógico, físico, prueba/documentación e implementación; desplegar firmware no es fase "
      },
      {
        "pregunta": "¿Qué es la adaptabilidad en metas técnicas?",
        "respuestas": [
          "Capacidad de recuperación ante fallos",
          "Facilidad de uso por el usuario final",
          "Flexibilidad para cambios futuros",
          "Nivel de seguridad integrado"
        ],
        "correcta": "Flexibilidad para cambios futuros",
        "explicacion": "Adaptabilidad es la habilidad de un diseño para ajustarse a nuevos protocolos y requerimientos "
      },
      {
        "pregunta": "¿Cuál es el efecto de aumentar demasiado el tamaño de los paquetes?",
        "respuestas": [
          "Mejora la eficiencia y elimina errores",
          "Reduce el caudal",
          "Aumenta la pérdida de datos si se corrompen",
          "Disminuye el retardo de propagación"
        ],
        "correcta": "Aumenta la pérdida de datos si se corrompen",
        "explicacion": "Paquetes muy grandes desperdician más datos si se dañan, aunque mejoran eficiencia "
      },
      {
        "pregunta": "¿Qué herramienta se menciona para monitorización de servicios?",
        "respuestas": [
          "Wireshark",
          "Nagios",
          "CDP",
          "NetFlow"
        ],
        "correcta": "Nagios",
        "explicacion": "Nagios se usa para monitorizar servicios; Wireshark es analizador de protocolos"
      },
      {
        "pregunta": "¿Qué indica la fórmula Disponibilidad = MTBF / (MTBF + MTTR)?",
        "respuestas": [
          "Porcentaje de paquetes perdidos",
          "Porcentaje de tiempo operativo",
          "Número de redundancias necesarias",
          "Tiempo de propagación de señal"
        ],
        "correcta": "Porcentaje de tiempo operativo",
        "explicacion": "Esa fórmula calcula disponibilidad como proporción de tiempo operativo sobre total"
      },
      {
        "pregunta": "¿Qué protocolo usa etiquetas para conmutación rápida?",
        "respuestas": [
          "TCP/IP",
          "MPLS",
          "Ethernet",
          "UDP"
        ],
        "correcta": "MPLS",
        "explicacion": "MPLS asigna etiquetas únicas a flujos para switching rápido "
      },
      {
        "pregunta": "¿Qué aplicación requiere retardos bajos y poco jitter?",
        "respuestas": [
          "Transferencia de ficheros",
          "Correo electrónico",
          "Voz y vídeo",
          "Descarga de software"
        ],
        "correcta": "Voz y vídeo",
        "explicacion": "Voz y vídeo no toleran variación de retardo y usan buffering para compensar jitter"
      },
      {
        "pregunta": "¿Qué aspecto del entorno físico NO es parte de restricciones de arquitectura?",
        "respuestas": [
          "Electricidad",
          "Ventilación",
          "Color de la pintura",
          "Protección EMI"
        ],
        "correcta": "Color de la pintura",
        "explicacion": "Restricciones incluyen energía, aire acondicionado, ventilación, espacios y protección contra EMI, no color de paredes"
      },
      {
        "pregunta": "¿Qué identifica un router al caracterizar la red existente?",
        "respuestas": [
          "Estructura de VLANs",
          "Salud de interfaces y buffers",
          "Frecuencia de CPU",
          "Velocidad de ventiladores"
        ],
        "correcta": "Salud de interfaces y buffers",
        "explicacion": "Para caracterizar la salud de la red se revisan show interfaces, show buffers y otros estados"
      },
      {
        "pregunta": "¿Qué factor NO influye en la eficiencia de uso de la red?",
        "respuestas": [
          "Ventana TCP",
          "Control de flujo",
          "MTU",
          "Tipo de fibronácea"
        ],
        "correcta": "Tipo de fibronácea",
        "explicacion": "La fibra (fibronácea) no existe; MTU, ventanas y control de flujo sí afectan eficiencia"
      },
      {
        "pregunta": "¿Qué métrica describe la suma de datos listos para enviar en un instante?",
        "respuestas": [
          "Caudal",
          "Carga",
          "Utilización",
          "MTBF"
        ],
        "correcta": "Carga",
        "explicacion": "La carga es la suma de todos los datos que los dispositivos tienen listos para enviar en un instante dado"
      },
      {
        "pregunta": "¿Cuál es la recomendación máxima de utilización media de un enlace durante ráfagas?",
        "respuestas": [
          "50%",
          "60%",
          "70%",
          "90%"
        ],
        "correcta": "70%",
        "explicacion": "Se recomienda que el uso medio no supere el 70% para permitir ráfagas"
      },
      {
        "pregunta": "¿Qué proceso describe la fase 4 del diseño Top-Down?",
        "respuestas": [
          "Desarrollar un diseño físico",
          "Probar, optimizar y documentar",
          "Implementar la red",
          "Caracterizar tráfico"
        ],
        "correcta": "Probar, optimizar y documentar",
        "explicacion": "La fase 4 consiste en escribir y probar el diseño, construir piloto, optimizar y documentar"
      },
      {
        "pregunta": "¿Qué herramienta Cisco permite descubrir automáticamente dispositivos vecinos?",
        "respuestas": [
          "NetFlow",
          "CDP",
          "MRTG",
          "RMON"
        ],
        "correcta": "CDP",
        "explicacion": "Cisco Discovery Protocol (CDP) identifica dispositivos Cisco conectados"
      },
      {
        "pregunta": "¿Qué unidad se usa normalmente para medir el caudal?",
        "respuestas": [
          "Bytes",
          "Bits por segundo",
          "Rutas",
          "Milisegundos"
        ],
        "correcta": "Bits por segundo",
        "explicacion": "El caudal se mide comúnmente en bps, Bps o paquetes por segundo "
      },
      {
        "pregunta": "¿Qué tipo de diseño se aplica para actualizar y añadir usuarios a una red existente?",
        "respuestas": [
          "Diseño nuevo",
          "Reingeniería",
          "Diseño de expansión",
          "Diseño lógico"
        ],
        "correcta": "Diseño de expansión",
        "explicacion": "El diseño de expansión aumenta capacidad o añade usuarios a una red existente"
      },
      {
        "pregunta": "¿Cuál es la métrica que relaciona MTBF y MTTR?",
        "respuestas": [
          "Disponibilidad",
          "Jitter",
          "Goodput",
          "Carga"
        ],
        "correcta": "Disponibilidad",
        "explicacion": "Disponibilidad = MTBF / (MTBF + MTTR) muestra proporción de tiempo operativo "
      },
      {
        "pregunta": "¿Qué topología física se debe mapear al caracterizar la red existente?",
        "respuestas": [
          "Sólo lógica",
          "Sólo direcciones IP",
          "Lógica y física",
          "Sólo VLANs"
        ],
        "correcta": "Lógica y física",
        "explicacion": "Se caracteriza tanto la estructura lógica como la física de la red existente "
      },
      {
        "pregunta": "¿Qué instrumento mide y grafica tráfico SNMP?",
        "respuestas": [
          "Wireshark",
          "MRTG",
          "Ping",
          "Traceroute"
        ],
        "correcta": "MRTG",
        "explicacion": "Multi Router Traffic Grapher (MRTG) usa SNMP para graficar tráfico de red"
      },
      {
        "pregunta": "¿Cuál es el propósito de caracterizar el tráfico broadcast/multicast?",
        "respuestas": [
          "Incrementar jitter",
          "Aislar VLANs",
          "Evaluar impacto en CPU y ancho de banda",
          "Reducir longitud de onda"
        ],
        "correcta": "Evaluar impacto en CPU y ancho de banda",
        "explicacion": "Broadcasts ocupan tiempo de CPU en hosts no destino y multicasts requieren protocolos especiales "
      },
      {
        "pregunta": "¿Qué factor de diseño TOP-DOWN ayuda a balancear costo y rendimiento?",
        "respuestas": [
          "Seguridad",
          "Escalabilidad",
          "Ajuste al presupuesto",
          "Facilidad de uso"
        ],
        "correcta": "Ajuste al presupuesto",
        "explicacion": "El ajuste al presupuesto busca transportar más tráfico al menor coste financiero "
      },
      {
        "pregunta": "¿En qué consiste el diseño estructurado en redes?",
        "respuestas": [
          "Foco en cableado y racks",
          "Foco en flujos, tipos de datos y procesos",
          "Foco en instalación de routers",
          "Foco en topología física"
        ],
        "correcta": "Foco en flujos, tipos de datos y procesos",
        "explicacion": "El diseño estructurado entiende flujos de datos, procesos y ubicación de usuarios antes del diseño físico "
      },
      {
        "pregunta": "¿Qué elemento NO forma parte del análisis de la red existente?",
        "respuestas": [
          "Topología",
          "Direccionamiento y nombres",
          "Tipo de aplicación usada",
          "Estado de equipos"
        ],
        "correcta": "Tipo de aplicación usada",
        "explicacion": "El análisis de infraestructura incluye topología, direcciones, cableado, ambiente y salud; aplicaciones se usan en tráfico"
      },
      {
        "pregunta": "¿Qué tipo de flujo es típico de LDAP entre servidores?",
        "respuestas": [
          "Terminal/Host",
          "Server/Server",
          "Peer-to-Peer",
          "Thin Client"
        ],
        "correcta": "Server/Server",
        "explicacion": "LDAP entre servidores es un flujo Server/Server simétrico y bidireccional"
      },
      {
        "pregunta": "¿Cuál es la característica de los flujos Thin Client?",
        "respuestas": [
          "Cliente muy simple y servidor hace la mayor carga",
          "Flujos simétricos de gran volumen",
          "Unidireccional desde servidor",
          "Requiere computación distribuida"
        ],
        "correcta": "Cliente muy simple y servidor hace la mayor carga",
        "explicacion": "Thin Client se basa en que el cliente realiza pocas tareas y el servidor ejecuta las aplicaciones"
      },
      {
        "pregunta": "¿Cuál de estos no es un tipo de flujo de tráfico descrito en el Tema 1?",
        "respuestas": [
          "Client/Server",
          "Peer-to-Peer",
          "Server/Server",
          "Token Ring"
        ],
        "correcta": "Token Ring",
        "explicacion": "Token Ring es una tecnología de LAN, no un tipo de flujo de tráfico"
      },
      {
        "pregunta": "¿Qué protocolo marca paquetes IP para servicios diferenciados?",
        "respuestas": [
          "QoS",
          "SNMP",
          "DSCP",
          "RMON"
        ],
        "correcta": "DSCP",
        "explicacion": "El campo DSCP se usa para servicios diferenciados en routers según RFC 2475"
      },
      {
        "pregunta": "¿Qué servicio IETF garantiza límites firmes de retardo por encolamiento?",
        "respuestas": [
          "Servicio de carga controlada",
          "Servicio garantizado",
          "Best Effort",
          "Delay Tolerant"
        ],
        "correcta": "Servicio garantizado",
        "explicacion": "El servicio garantizado provee límites matemáticamente probables a retardos extremo a extremo"
      },
      {
        "pregunta": "¿Para qué sirve un Data Store en el análisis de tráfico?",
        "respuestas": [
          "Registrar direcciones IP",
          "Localizar servidores y NAS",
          "Medir jitter",
          "Configurar VLANs"
        ],
        "correcta": "Localizar servidores y NAS",
        "explicacion": "Los almacenes de datos identifican dónde residen los datos accesados por comunidades de usuarios"
      },
      {
        "pregunta": "¿Qué tabla se crea para describir comunidades de usuarios?",
        "respuestas": [
          "Nombre, tamaño, ubicación, aplicaciones",
          "IP, máscara, gateway, DNS",
          "Latencia, jitter, goodput, carga",
          "MTBF, MTTR, disponibilidad, costo"
        ],
        "correcta": "Nombre, tamaño, ubicación, aplicaciones",
        "explicacion": "La tabla de comunidades incluye nombre, número de usuarios, ubicación y aplicaciones usadas"
      },
      {
        "pregunta": "¿Qué debe estimarse para cada flujo de tráfico fuente–destino?",
        "respuestas": [
          "Número de routers",
          "Cantidad de datos por segundo",
          "Modelos de direccionamiento",
          "Topología física"
        ],
        "correcta": "Cantidad de datos por segundo",
        "explicacion": "Para los flujos se mide o estima el tráfico necesario en MB/sec o Kbps por enlace"
      },
      {
        "pregunta": "¿Qué identifica una dirección MAC en el análisis de tráfico?",
        "respuestas": [
          "Fuente y destino de nivel de enlace",
          "Rutas IP",
          "Aplicaciones usadas",
          "Velocidad de enlace"
        ],
        "correcta": "Fuente y destino de nivel de enlace",
        "explicacion": "Las MAC señalan origen y destino al nivel de enlace para caracterizar flujos locales"
      },
      {
        "pregunta": "¿Qué métrica no es parte de ‘salud de la red’?",
        "respuestas": [
          "Disponibilidad",
          "Tiempo de respuesta",
          "Uso de ancho de banda",
          "Número de switches físicos"
        ],
        "correcta": "Número de switches físicos",
        "explicacion": "La salud se mide por rendimiento, disponibilidad, utilización, eficiencia y estado de equipo, no cantidad de switches."
      },
      {
        "pregunta": "¿Qué significa un bit LSB en la primera byte de la MAC destino igual a 1?",
        "respuestas": [
          "Trama unicast",
          "Trama broadcast",
          "Trama multicast",
          "Trama de control"
        ],
        "correcta": "Trama multicast",
        "explicacion": "Si el LSB del primer byte de MAC destino es 1, indica dirección multicast"
      },
      {
        "pregunta": "¿Qué tabla describe almacenes de datos?",
        "respuestas": [
          "Nombre, ubicación, aplicaciones, comunidades",
          "IP, máscara, gateway, DNS",
          "MTBF, MTTR, disponibilidad, costos",
          "Latencia, jitter, carga, eficiencia"
        ],
        "correcta": "Nombre, ubicación, aplicaciones, comunidades",
        "explicacion": "La tabla de Data Stores incluye almacén de datos, ubicación, aplicaciones y comunidades que lo usan"
      },
      {
        "pregunta": "¿Qué factor determina la separación mínima de canales en una red DWDM?",
        "respuestas": [
          "Caudal máximo de cada canal",
          "Longitud de onda central y espaciado espectral",
          "Tipo de conectores de fibra",
          "Grosor del cable",
        ],
        "correcta": "Longitud de onda central y espaciado espectral",
        "explicacion": "En DWDM la separación entre canales viene determinada por la longitud de onda central y el espaciado espectral para evitar interferencias entre señales"
      },
      {
        "pregunta": "En CWDM, ¿qué longitud de onda NO se utiliza típicamente según el estándar ITU-G.694.2?",
        "respuestas": [
          "1470 nm",
          "1490 nm",
          "1510 nm",
          "1550 nm"
        ],
        "correcta": "1490 nm",
        "explicacion": "El estándar CWDM define canales cada 20 nm empezando en 1270 nm; 1490 nm no figura como canal asignado"
      },
      {
        "pregunta": "¿Cuál es la función principal de un DAS (Distributed Antenna System) en un centro de datos?",
        "respuestas": [
          "Aumentar el caudal de datos",
          "Mejorar la cobertura y señal inalámbrica en interiores",
          "Reducir la latencia de fibra",
          "Monitorizar el consumo energético"
        ],
        "correcta": "Mejorar la cobertura y señal inalámbrica en interiores",
        "explicacion": "Un DAS distribuye señales de radio para garantizar cobertura móvil o Wi-Fi en zonas con barreras físicas ."
      },
      {
        "pregunta": "El porcentaje de paquetes descartados (PDR) en un router se calcula como:",
        "respuestas": [
          "Paquetes descartados ÷ Paquetes recibidos × 100%",
          "Paquetes transmitidos ÷ Paquetes descartados × 100%",
          "Bytes descartados ÷ Bytes enviados × 100%",
          "Paquetes recibidos ÷ Paquetes descartados × 100%"
        ],
        "correcta": "Paquetes descartados ÷ Paquetes recibidos × 100%",
        "explicacion": "El PDR mide la proporción de paquetes que el router descarta en relación con los que recibe."
      },
      {
        "pregunta": "¿Qué significa que un dispositivo soporte Hot Swap?",
        "respuestas": [
          "Soporta inserción y extracción en caliente sin apagar",
          "Requiere reinicio al cambiar componentes",
          "Solo admite cambios durante el arranque",
          "Incluye fuentes de alimentación redundantes"
        ],
        "correcta": "Soporta inserción y extracción en caliente sin apagar",
        "explicacion": "Hot Swap permite sustituir componentes (discos, fuentes) sin interrumpir la operación del sistema."
      },
      {
        "pregunta": "En HSRP, ¿qué mensaje se envía periódicamente para informar del estado del router activo?",
        "respuestas": [
          "Hello",
          "Standby",
          "Coup",
          "State"
        ],
        "correcta": "Hello",
        "explicacion": "Los routers HSRP intercambian mensajes Hello para anunciarse como activos o en espera."
      },
      {
        "pregunta": "¿Qué parámetro de HSRP define el router preferido como maestro?",
        "respuestas": [
          "Prioridad",
          "Número de VLAN",
          "Tiempo de Hello",
          "IP virtual"
        ],
        "correcta": "Prioridad",
        "explicacion": "El router con mayor prioridad es elegido activo; la prioridad por defecto es 100."
      },
      {
        "pregunta": "Al fallar el router activo en HSRP, ¿qué métrica determina la rapidez de la conmutación al standby?",
        "respuestas": [
          "Hold time",
          "MTBF",
          "Número de rutas",
          "Goodput"
        ],
        "correcta": "Hold time",
        "explicacion": "El Hold time (3×Hello by defecto) define el tiempo que espera un standby antes de asumir el rol activo tras no recibir Hellos."
      }
    ],
    "Tema 2": [
      {
        "pregunta": "¿Cuál es la ventaja principal de un modelo jerárquico en el diseño de redes?",
        "respuestas": [
          "Reduce el número de routers requeridos",
          "Limita los dominios de broadcast y mejora la escalabilidad",
          "Elimina la necesidad de switches de capa de distribución",
          "Evita la segmentación de VLANs"
        ],
        "correcta": "Limita los dominios de broadcast y mejora la escalabilidad",
        "explicacion": "El modelo jerárquico reduce la carga en dispositivos al limitar dominios de broadcast y facilita el escalado de la red mediante capas claramente definidas."
      },
      {
        "pregunta": "¿En qué orden se diseñan las capas en un enfoque jerárquico de campus?",
        "respuestas": [
          "Distribución, núcleo, acceso",
          "Acceso, distribución, núcleo",
          "Núcleo, acceso, distribución",
          "Acceso, núcleo, distribución"
        ],
        "correcta": "Acceso, distribución, núcleo",
        "explicacion": "Se recomienda primero diseñar la capa de acceso, luego la distribución y, por último, el núcleo para mantener modularidad y simplicidad."
      },
      {
        "pregunta": "¿Qué topología de red es adecuada para una pequeña oficina sin necesidad de jerarquía?",
        "respuestas": [
          "Jerárquica de tres capas",
          "Malla completa",
          "Red plana (flat)",
          "Anillo redundante"
        ],
        "correcta": "Red plana (flat)",
        "explicacion": "Una red plana es fácil de diseñar e implementar para redes pequeñas que no requieren jerarquía."
      },
      {
        "pregunta": "¿Cómo se calcula el número de enlaces en una malla completa de N nodos?",
        "respuestas": [
          "N × (N + 1) / 2",
          "N × (N – 1) / 2",
          "N² – N",
          "2 × N"
        ],
        "correcta": "N × (N – 1) / 2",
        "explicacion": "La fórmula para enlaces en malla completa es N × (N – 1) / 2, pues cada par de nodos se conecta directamente."
      },
      {
        "pregunta": "¿Qué es una “chain” en diseño de red jerárquico?",
        "respuestas": [
          "Un enlace redundante entre capas idénticas",
          "Una conexión que agrega una capa adicional no deseada",
          "Una VLAN extendida a múltiples switches",
          "Un túnel VPN para multihoming"
        ],
        "correcta": "Una conexión que agrega una capa adicional no deseada",
        "explicacion": "Una “chain” ocurre cuando se conecta una sucursal a otra, creando una cuarta capa y rompiendo la jerarquía."
      },
      {
        "pregunta": "¿Qué protocolo se usa para evitar bucles en topologías de LAN redundantes?",
        "respuestas": [
          "LACP",
          "HSRP",
          "STP",
          "VRRP"
        ],
        "correcta": "STP",
        "explicacion": "El Spanning Tree Protocol (IEEE 802.1d) bloquea enlaces redundantes para eliminar bucles en redes conmutadas."
      },
      {
        "pregunta": "¿Cuál es el propósito de STP Loop Guard?",
        "respuestas": [
          "Acelerar la convergencia de rutas",
          "Detectar enlaces unidireccionales y prevenir bucles",
          "Balancear carga entre enlaces",
          "Encapsular VLANs en tramas IEEE 802.1Q"
        ],
        "correcta": "Detectar enlaces unidireccionales y prevenir bucles",
        "explicacion": "Loop Guard detecta inconsistencias en BPDU para evitar que un puerto bloqueado pase a forwarding y cause bucles."
      },
      {
        "pregunta": "¿Qué característica ofrece Rapid Spanning Tree (IEEE 802.1w)?",
        "respuestas": [
          "Soporta enlaces WAN",
          "Reconfiguración más rápida del árbol de spanning",
          "Multipunto de VLANs dinámicas",
          "Encaminamiento IP multicast"
        ],
        "correcta": "Reconfiguración más rápida del árbol de spanning",
        "explicacion": "Rapid STP reduce los tiempos de convergencia al usar mensajes BPDUs acelerados para cambios en la topología."
      },
      {
        "pregunta": "¿Cuál es la función principal de la capa de distribución en un campus?",
        "respuestas": [
          "Interconectar edificios y aplicar políticas",
          "Proveer acceso de usuario final",
          "Realizar enrutamiento global de Internet",
          "Configurar VLANs en usuarios inalámbricos"
        ],
        "correcta": "Interconectar edificios y aplicar políticas",
        "explicacion": "La capa de distribución agrupa cableado, enruta entre VLANs y aplica QoS y seguridad entre acceso y núcleo."
      },
      {
        "pregunta": "¿Qué módulo de campus contiene los armarios de cableado y enrutadores de borde?",
        "respuestas": [
          "Acceso al campus",
          "Distribución del campus",
          "Núcleo del campus",
          "Módulo de servidor"
        ],
        "correcta": "Distribución del campus",
        "explicacion": "El módulo de distribución agrupa armarios de cableado y enrutadores que conectan acceso con el núcleo del campus."
      },
      {
        "pregunta": "¿Qué topología WAN de campus emplea un hub central y ramas spoke?",
        "respuestas": [
          "Anillo redundante",
          "Malla completa",
          "Hub-and-Spoke",
          "Flat loop"
        ],
        "correcta": "Hub-and-Spoke",
        "explicacion": "El modelo Hub-and-Spoke conecta sucursales spoke a un hub central para simplicidad y control de tráfico."
      },
      {
        "pregunta": "¿Cuál es la diferencia entre “backdoor” y “chain”?",
        "respuestas": [
          "Backdoor es VPN; chain es VLAN",
          "Backdoor une dispositivos en la misma capa; chain añade capa extra",
          "Backdoor es un algoritmo de enrutamiento; chain es un protocolo de conmutación",
          "No hay diferencia significativa"
        ],
        "correcta": "Backdoor une dispositivos en la misma capa; chain añade capa extra",
        "explicacion": "Una backdoor conecta dos dispositivos en la misma capa; una chain conecta sucursales para crear una capa adicional."
      },
      {
        "pregunta": "¿Qué módulo de campus incluye el clúster de servidores de aplicaciones?",
        "respuestas": [
          "Acceso",
          "Distribución frontera",
          "Núcleo del campus",
          "Módulo inalámbrico"
        ],
        "correcta": "Núcleo del campus",
        "explicacion": "El núcleo del campus interconecta acceso, distribución y servicios como clústeres de servidores y gestión de red."
      },
      {
        "pregunta": "¿Cuál es la máxima recomendación de switches en un dominio STP antes de usar Rapid STP?",
        "respuestas": [
          "3 switches",
          "5 switches",
          "7 switches",
          "9 switches"
        ],
        "correcta": "7 switches",
        "explicacion": "Se recomienda no expandir más de siete switches en un dominio STP para evitar problemas de convergencia."
      },
      {
        "pregunta": "¿Qué protocolo propietary de Cisco marca tramas VLAN en troncal?",
        "respuestas": [
          "IEEE 802.1Q",
          "VTP",
          "ISL",
          "LACP"
        ],
        "correcta": "ISL",
        "explicacion": "Inter-Switch Link (ISL) es el protocolo propietario de Cisco para etiquetar tramas VLAN en enlaces troncales ."
      },
      {
        "pregunta": "¿Para qué se usa VTP en redes conmutadas?",
        "respuestas": [
          "Transferir archivos de configuración",
          "Sincronizar información de VLANs entre switches",
          "Balancear enlaces trunk",
          "Conmutación multicapas"
        ],
        "correcta": "Sincronizar información de VLANs entre switches",
        "explicacion": "VLAN Trunk Protocol distribuye y sincroniza configuraciones de VLANs automáticamente entre switches."
      },
      {
        "pregunta": "¿Qué se logra al segmentar la red con VLANs?",
        "respuestas": [
          "Reducir dominios de broadcast y aumentar seguridad",
          "Aumentar ancho de banda físico",
          "Eliminar necesidad de routers",
          "Reducir velocidad de CPU en switches"
        ],
        "correcta": "Reducir dominios de broadcast y aumentar seguridad",
        "explicacion": "Las VLANs permiten agrupar usuarios lógicamente, limitando broadcasts y mejorando la seguridad interna."
      },
      {
        "pregunta": "¿Qué ventaja aporta una WLAN implementada como VLAN?",
        "respuestas": [
          "Mayor velocidad de radio",
          "Facilita roaming sin cambiar subred IP",
          "Reduce interferencias inalámbricas",
          "Elimina necesidad de autenticación"
        ],
        "correcta": "Facilita roaming sin cambiar subred IP",
        "explicacion": "Al mapear la WLAN a una VLAN, los usuarios pueden moverse entre APs sin cambiar su dirección IP ni provocar reautenticación."
      },
      {
        "pregunta": "¿Cuál es el objetivo de un diseño modular y jerárquico de campus?",
        "respuestas": [
          "Simplificar la administración y escalar localmente",
          "Reducir el número de VLANs",
          "Eliminar la necesidad de STP",
          "Aumentar la latencia intencionadamente"
        ],
        "correcta": "Simplificar la administración y escalar localmente",
        "explicacion": "La modularidad permite aislar cambios, facilitar la administración y escalar el campus de forma incremental."
      },
      {
        "pregunta": "¿Qué protocolo de redundancia de routers usa prioridad y mensajes Hello?",
        "respuestas": [
          "VRRP",
          "GLBP",
          "HSRP",
          "LACP"
        ],
        "correcta": "HSRP",
        "explicacion": "HSRP utiliza mensajes Hello y un valor de prioridad para elegir el router activo y garantizar failover."
      },
      {
        "pregunta": "¿Qué protocolo IETF estándar ofrece redundancia sin balanceo de carga?",
        "respuestas": [
          "HSRP",
          "GLBP",
          "VRRP",
          "LACP"
        ],
        "correcta": "VRRP",
        "explicacion": "VRRP es el estándar IETF que proporciona redundancia de gateway comparado con HSRP propietario de Cisco."
      },
      {
        "pregunta": "¿Qué protocolo Cisco combina redundancia con balanceo de carga?",
        "respuestas": [
          "HSRP",
          "VRRP",
          "GLBP",
          "STP"
        ],
        "correcta": "GLBP",
        "explicacion": "Gateway Load Balancing Protocol ofrece tanto redundancia como balanceo de tráfico entre múltiples gateways."
      },
      {
        "pregunta": "¿Qué aspecto NO forma parte de un buen diseño jerárquico?",
        "respuestas": [
          "Facilidad para agregar nuevos servicios localmente",
          "Interacciones de protocolos complejas",
          "Capacidad para triplicar la red sin cambios mayores",
          "Resolución de problemas sencilla"
        ],
        "correcta": "Interacciones de protocolos complejas",
        "explicacion": "Un buen diseño evita interacciones de protocolos complejas para facilitar troubleshooting y cambios locales "
      },
      {
        "pregunta": "¿Cuál es la principal consideración al añadir redundancia en LANs?",
        "respuestas": [
          "Costo y requisitos de disponibilidad",
          "Número de usuarios móviles",
          "Compatibilidad con IPv6",
          "Longitud de onda de fibra"
        ],
        "correcta": "Costo y requisitos de disponibilidad",
        "explicacion": "La redundancia mejora disponibilidad pero incrementa costos; se debe ajustar al presupuesto y SLA del cliente"
      },
      {
        "pregunta": "¿Qué rol tiene la DMZ en la seguridad de topologías?",
        "respuestas": [
          "Aislar servidores públicos de la red interna",
          "Proveer acceso inalámbrico gratuito",
          "Encapsular VLANs privadas",
          "Balancear carga WAN"
        ],
        "correcta": "Aislar servidores públicos de la red interna",
        "explicacion": "La DMZ sitúa servicios públicos (web, correo) entre firewalls para proteger la red de la organización"
      },
      {
        "pregunta": "¿Qué estrategia de multihoming en WAN conecta dos ISP simultáneamente?",
        "respuestas": [
          "VPN site-to-site",
          "HSRP sobre MPLS",
          "Multihoming activo-activo",
          "VLAN trunking"
        ],
        "correcta": "Multihoming activo-activo",
        "explicacion": "El multihoming activo-activo usa dos conexiones ISP para redundancia y balanceo de tráfico de Internet."
      },
      {
        "pregunta": "¿Cuál es la diferencia principal entre VPN L2 y L3?",
        "respuestas": [
          "L2 usa túneles IPsec; L3 usa PPTP",
          "L2 encapsula a nivel de enlace; L3 a nivel de red",
          "L2 requiere autenticación; L3 es anónima",
          "No existe diferencia"
        ],
        "correcta": "L2 encapsula a nivel de enlace; L3 a nivel de red",
        "explicacion": "VPN de capa 2 encapsula tramas (e.g. L2TP), mientras que capa 3 encapsula paquetes IP (e.g. IPsec)."
      },
      {
        "pregunta": "¿Qué topología VPN site-to-site es común en empresas globales?",
        "respuestas": [
          "Flat loop",
          "Hub-and-Spoke",
          "Malla",
          "Backdoor"
        ],
        "correcta": "Malla",
        "explicacion": "La VPN malla conecta oficinas globales directamente para optimizar rutas y redundancia."
      },
      {
        "pregunta": "¿Qué dispositivo implementa las políticas de firewall en la frontera WAN?",
        "respuestas": [
          "Switch de acceso",
          "Router de distribución",
          "Firewall perimetral",
          "Switch core"
        ],
        "correcta": "Firewall perimetral",
        "explicacion": "El firewall perimetral entre Internet y DMZ aplica reglas de acceso y protege la red interna."
      },
      {
        "pregunta": "¿Qué módulo de campus aloja la gestión de red y servidores de monitoreo?",
        "respuestas": [
          "Acceso",
          "Distribución",
          "Núcleo",
          "Perímetro WAN"
        ],
        "correcta": "Núcleo",
        "explicacion": "El núcleo del campus incluye módulos de gestión de red y acceso a centro de datos para monitoreo y control."
      },
      {
        "pregunta": "¿Qué característica define una red bien modular?",
        "respuestas": [
          "Cambios globales sin impacto local",
          "Impacto local al agregar nuevos elementos",
          "Ausencia de redundancia",
          "Una sola VLAN para todo"
        ],
        "correcta": "Impacto local al agregar nuevos elementos",
        "explicacion": "Un diseño modular permite agregar enlaces, edificios o servicios con cambios limitados al módulo afectado."
      },
      {
        "pregunta": "¿Cuál es el propósito de un backbone en campus?",
        "respuestas": [
          "Conectar usuarios inalámbricos",
          "Interconectar módulos de distribución con baja latencia",
          "Balancear VLANs",
          "Almacenar configuraciones de switch"
        ],
        "correcta": "Interconectar módulos de distribución con baja latencia",
        "explicacion": "El backbone del campus transporta tráfico entre módulos de distribución y centro de datos con alta velocidad y redundancia."
      },
      {
        "pregunta": "¿Qué función cumple LACP en agregación de enlaces?",
        "respuestas": [
          "Detectar bucles en switches",
          "Negociar automáticamente un EtherChannel",
          "Distribuir VLANs en troncal",
          "Proveer tunneling de VLANs"
        ],
        "correcta": "Negociar automáticamente un EtherChannel",
        "explicacion": "LACP permite formar de forma dinámica un canal lógico a partir de múltiples enlaces físicos para mayor ancho de banda y redundancia ."
      },
      {
        "pregunta": "¿Qué rol tienen los armarios de cableado en campus?",
        "respuestas": [
          "Alojar servidores",
          "Organizar cables y equipos del módulo de acceso",
          "Realizar balanceo de carga WAN",
          "Proveer VPN site-to-site"
        ],
        "correcta": "Organizar cables y equipos del módulo de acceso",
        "explicacion": "Los armarios de cableado agrupan y facilitan el mantenimiento de cables y switches del módulo de acceso en cada edificio."
      },
      {
        "pregunta": "¿Qué protocolo transporta tramas VLAN entre switches de terceros?",
        "respuestas": [
          "IEEE 802.1Q",
          "ISL",
          "VTP",
          "RIP"
        ],
        "correcta": "IEEE 802.1Q",
        "explicacion": "802.1Q es el estándar abierto de marcado VLAN en troncal que funciona entre equipos de distintos fabricantes."
      },
      {
        "pregunta": "¿Qué práctica mejora resiliencia al diseñar acceso inalámbrico?",
        "respuestas": [
          "Asignar una sola VLAN por AP",
          "Mapear WLANs a VLANs y desplegar múltiples APs con solapamiento",
          "Usar only 802.11b",
          "Desactivar STP en ambientes inalámbricos"
        ],
        "correcta": "Mapear WLANs a VLANs y desplegar múltiples APs con solapamiento",
        "explicacion": "Agrupar WLANs en VLANs y tener APs redundantes asegura roaming y disponibilidad inalámbrica."
      },
      {
        "pregunta": "¿Qué indicador mide la rapidez de convergencia de STP?",
        "respuestas": [
          "Número de VLANs",
          "Tiempo hasta reenvío de puerto tras falla",
          "Cantidad de switches",
          "Anchura de banda del troncal"
        ],
        "correcta": "Tiempo hasta reenvío de puerto tras falla",
        "explicacion": "La convergencia STP se mide por el tiempo que tarda un puerto bloqueado en pasar a forwarding luego de una falla."
      },
      {
        "pregunta": "¿Qué estrategia de redundancia se usa para servidores DNS en redes grandes?",
        "respuestas": [
          "Colocarlos en la capa de acceso",
          "Implementarlos en alta disponibilidad en distribución o núcleo",
          "Eliminar caché en routers",
          "Usar single point of failure"
        ],
        "correcta": "Implementarlos en alta disponibilidad en distribución o núcleo",
        "explicacion": "En redes grandes, los servidores DNS se sitúan en distribución o núcleo con redundancia para asegurar resolución de nombres."
      },
      {
        "pregunta": "¿Cuál es la métrica OSPF predeterminada en un enlace Ethernet de 100 Mbps en Cisco?",
        "respuestas": [
          "10",
          "1",
          "100",
          "1000"
        ],
        "correcta": "1",
        "explicacion": "En Cisco, el costo OSPF se calcula como 100 000 000 / ancho de banda; para 100 Mbps resulta en 1"
      },
      {
        "pregunta": "¿Qué protocolo IGP usa inundación de LSAs para propagar cambios?",
        "respuestas": [
          "RIP",
          "EIGRP",
          "OSPF",
          "BGP"
        ],
        "correcta": "OSPF",
        "explicacion": "OSPF utiliza LSAs y flooding para actualizar la base de datos de estado de enlaces entre routers vecinos."
      },
      {
        "pregunta": "¿Qué capa jerárquica debe evitar el filtrado de paquetes para no aumentar latencia?",
        "respuestas": [
          "Capa de acceso",
          "Capa de distribución",
          "Capa de núcleo",
          "Capa de aplicación"
        ],
        "correcta": "Capa de núcleo",
        "explicacion": "El núcleo debe transportar tráfico rápidamente sin aplicar filtros que incrementen la latencia ."
      },
      {
        "pregunta": "¿Cuál es la función de un ABR en OSPF?",
        "respuestas": [
          "Convertir LSAs en BGP",
          "Conectar un área OSPF con el backbone (área 0)",
          "Balancear carga EIGRP",
          "Aplicar políticas VRRP"
        ],
        "correcta": "Conectar un área OSPF con el backbone (área 0)",
        "explicacion": "Los Routers de Borde de Área (ABR) interconectan áreas OSPF distintas con el área 0 para enrutar LSAs."
      },
      {
        "pregunta": "¿Qué tipo de topología WAN ofrece rutas alternativas por fibra y satélite?",
        "respuestas": [
          "Flat loop",
          "Redundante multihoming",
          "Hub-and-Spoke simple",
          "Chain"
        ],
        "correcta": "Redundante multihoming",
        "explicacion": "El multihoming con múltiples ISP y enlaces distintos (fibra y satélite) proporciona redundancia WAN ."
      },
      {
        "pregunta": "¿Qué concepto asegura que solo el tráfico deseado pase entre módulos en un campus?",
        "respuestas": [
          "Chain",
          "ACL en distribución",
          "Backdoor",
          "Flat topology"
        ],
        "correcta": "ACL en distribución",
        "explicacion": "Las listas de control de acceso en la capa de distribución restringen el tráfico entre VLANs y comunidades de usuarios."
      },
      {
        "pregunta": "¿Qué criterio no es esencial al diseñar la frontera WAN?",
        "respuestas": [
          "Redundancia de enlaces ISP",
          "VPN site-to-site",
          "Selección de protocolos de switching",
          "Políticas de enrutamiento exterior"
        ],
        "correcta": "Selección de protocolos de switching",
        "explicacion": "En la frontera WAN se priorizan multihoming, VPNs y políticas de enrutamiento BGP, no protocolos de switching de capa 2."
      }
    ],
    "Tema 3": [
      {
        "pregunta": "¿Cuál es la diferencia principal entre cableado campus centralizado y distribuido?",
        "respuestas": [
          "Centralizado termina en un solo punto; distribuido en varios armarios",
          "Centralizado usa fibra; distribuido usa cobre",
          "Centralizado solo para edificios; distribuido solo para pisos",
          "Centralizado es inalámbrico; distribuido es cableado"
        ],
        "correcta": "Centralizado termina en un solo punto; distribuido en varios armarios",
        "explicacion": "En campus centralizado todo el cable termina en un único área (p.ej. estrella), mientras que en distribuido hay múltiples puntos de terminación."
      },
      {
        "pregunta": "¿Qué medio ofrece mayor inmunidad a interferencias electromagnéticas?",
        "respuestas": [
          "UTP categoría 5e",
          "Fibra óptica",
          "Coaxial",
          "Par trenzado STP"
        ],
        "correcta": "Fibra óptica",
        "explicacion": "La fibra transmite luz en vidrio y no sufre EMI/RFI, a diferencia de los cables de cobre."
      },
      {
        "pregunta": "¿Qué categoría UTP es recomendable usar en el nivel de acceso pensando en futuro?",
        "respuestas": [
          "Categoría 3",
          "Categoría 5",
          "Categoría 5e",
          "Categoría 2"
        ],
        "correcta": "Categoría 5e",
        "explicacion": "Se sugiere Cat 5e en acceso para soportar Gigabit Ethernet sin cambiar cableado."
      },
      {
        "pregunta": "¿Qué distancia máxima se alcanza típicamente con fibra multimodo a 10 Gbps?",
        "respuestas": [
          "300 m",
          "2 km",
          "10 km",
          "100 km"
        ],
        "correcta": "300 m",
        "explicacion": "La fibra multimodo tiene alcance de unos 300 m a 10 Gbps debido a dispersión modal."
      },
      {
        "pregunta": "¿Cuál es la función de un ADM en una red SONET/SDH?",
        "respuestas": [
          "Multiplexar y añadir/quitar tramas en anillos",
          "Conmutar paquetes IP",
          "Regenerar señal eléctrica",
          "Analizar tráfico Ethernet"
        ],
        "correcta": "Multiplexar y añadir/quitar tramas en anillos",
        "explicacion": "Los Add-Drop Multiplexors insertan o extraen tramas de niveles inferiores en un anillo SDH/SONET ."
      },
      {
        "pregunta": "¿Qué caudal base define SDH en STM-1?",
        "respuestas": [
          "51,84 Mb/s",
          "155,52 Mb/s",
          "622,08 Mb/s",
          "2,048 Mb/s"
        ],
        "correcta": "155,52 Mb/s",
        "explicacion": "STM-1 de SDH tiene un caudal de 155,52 Mb/s, triple del STS-1 de SONET."
      },
      {
        "pregunta": "¿Por qué SONET utiliza múltiplos de 51,84 Mb/s?",
        "respuestas": [
          "Para compatibilidad con SDH",
          "Para reducir jitter",
          "Para simplificar el cableado",
          "Para segmentación ATM"
        ],
        "correcta": "Para compatibilidad con SDH",
        "explicacion": "Los niveles STS-n de SONET son n×51,84 Mb/s para alinearse con los STM-m de SDH."
      },
      {
        "pregunta": "¿Qué ventaja aporta POS sobre ATM en redes SONET/SDH?",
        "respuestas": [
          "Menor overhead y uso de PPP",
          "Mayores retardos",
          "Uso de celdas de 53 bytes",
          "Conmutación basada en VPI/VCI"
        ],
        "correcta": "Menor overhead y uso de PPP",
        "explicacion": "Packet Over SONET reduce equipamiento y overhead al usar PPP punto a punto ."
      },
      {
        "pregunta": "¿Cuál es un inconveniente de usar Ethernet nativa en MAN/WAN?",
        "respuestas": [
          "Incapacidad para full-duplex",
          "Falta de mecanismos de QoS y recuperación rápida",
          "Requiere CSMA/CD",
          "No soporta VLANs"
        ],
        "correcta": "Falta de mecanismos de QoS y recuperación rápida",
        "explicacion": "Ethernet en la MAN carece de garantía de caudal, QoS y recuperación de fallos al nivel de anillo SDH ."
      },
      {
        "pregunta": "¿Qué estándar añade un segundo identificador VLAN (Q-in-Q)?",
        "respuestas": [
          "802.1Q",
          "802.1ad",
          "802.1ah",
          "802.3ad"
        ],
        "correcta": "802.1ad",
        "explicacion": "802.1ad (Provider Bridges) introduce el S-VID para túneles Q-in-Q."
      },
      {
        "pregunta": "¿Qué tecnología WDM ofrece separación de 20 nm y bajo coste?",
        "respuestas": [
          "DWDM",
          "CWDM",
          "SDH",
          "PDH"
        ],
        "correcta": "CWDM",
        "explicacion": "CWDM usa espaciado de 20 nm y es más económico para distancias cortas (< 60 km)."
      },
      {
        "pregunta": "¿Cuál es la ventana de longitudes de onda típica de DWDM?",
        "respuestas": [
          "1270–1610 nm",
          "1530–1625 nm",
          "850–950 nm",
          "1310 nm"
        ],
        "correcta": "1530–1625 nm",
        "explicacion": "DWDM opera en la tercera banda óptica, entre 1530 y 1625 nm."
      },
      {
        "pregunta": "¿Qué componente permite crear lightpaths en GMPLS?",
        "respuestas": [
          "Router IP",
          "SDH ADM",
          "Multiplexor óptico",
          "Switch MPLS"
        ],
        "correcta": "Multiplexor óptico",
        "explicacion": "GMPLS usa señalización para establecer rutas (lambdas) a través de multiplexores ópticos."
      },
      {
        "pregunta": "¿Qué overhead añade OTN para corrección de errores?",
        "respuestas": [
          "3 %",
          "6,5 %",
          "13 %",
          "20 %"
        ],
        "correcta": "6,5 %",
        "explicacion": "OTN introduce FEC Reed-Solomon con 6,5 % de overhead para mejorar alcance y fiabilidad."
      },
      {
        "pregunta": "¿Qué significa EDFA en WDM?",
        "respuestas": [
          "Electronic Differential Fiber Amplifier",
          "Erbium-Doped Fiber Amplifier",
          "Enhanced Data Flow Architecture",
          "Ethernet DWDM Frame Adapter"
        ],
        "correcta": "Erbium-Doped Fiber Amplifier",
        "explicacion": "Los amplificadores EDFA dopados con erbio permiten reforzar señales ópticas en DWDM."
      },
      {
        "pregunta": "¿Qué estándar define hasta 4096 VLANs?",
        "respuestas": [
          "802.1Q-1998",
          "802.1ad-2005",
          "802.1ah-2008",
          "802.3-2012"
        ],
        "correcta": "802.1Q-1998",
        "explicacion": "802.1Q reserva 12 bits para VLAN ID, permitiendo hasta 4096 VLANs."
      },
      {
        "pregunta": "¿Qué ventaja tienen los jumbo frames en Ethernet?",
        "respuestas": [
          "Menor latencia en switches",
          "Menor overhead CPU por trama",
          "Mayor compatibilidad CSMA/CD",
          "Uso obligatorio en MAN"
        ],
        "correcta": "Menor overhead CPU por trama",
        "explicacion": "Tramas de hasta 9000 bytes reducen número de interrupciones y carga CPU."
      },
      {
        "pregunta": "¿Qué tecnología WAN usa VPI/VCI para conmutación rápida?",
        "respuestas": [
          "MPLS",
          "ATM",
          "Ethernet",
          "POS"
        ],
        "correcta": "ATM",
        "explicacion": "ATM conmutación celular usa identificadores VPI/VCI para switching rápido."
      },
      {
        "pregunta": "¿Qué FEC se utiliza en OTN para corregir errores?",
        "respuestas": [
          "Hamming",
          "Reed-Solomon",
          "LDPC",
          "CRC32"
        ],
        "correcta": "Reed-Solomon",
        "explicacion": "OTN incorpora códigos Reed-Solomon en su overhead para corrección de errores."
      },
      {
        "pregunta": "¿Cuál de estos NO es un criterio para selección de switches campus?",
        "respuestas": [
          "Número de puertos",
          "MTBF/MTTR",
          "Soporte hot swap",
          "Longitud de onda de fibra"
        ],
        "correcta": "Longitud de onda de fibra",
        "explicacion": "La longitud de onda aplica al medio; los switches se evalúan por puertos, caudal, reliabilidad y gestión."
      },
      {
        "pregunta": "¿Qué acceso remoto móvil pertenece a 4G?",
        "respuestas": [
          "UMTS",
          "LTE",
          "5G",
          "HSCSD"
        ],
        "correcta": "LTE",
        "explicacion": "LTE corresponde a 4G, mientras UMTS es 3G y 5G la siguiente generación."
      },
      {
        "pregunta": "¿Qué multiplexación agrupa señales por longitudes de onda?",
        "respuestas": [
          "TDM",
          "FDM",
          "WDM",
          "CDM"
        ],
        "correcta": "WDM",
        "explicacion": "Wavelength Division Multiplexing envía múltiples lambdas por la misma fibra"
      },
      {
        "pregunta": "¿Qué capa del modelo campus implementa políticas de seguridad y QoS?",
        "respuestas": [
          "Acceso",
          "Distribución",
          "Núcleo",
          "Enlace de datos"
        ],
        "correcta": "Distribución",
        "explicacion": "La capa de distribución aplica ACLs, QoS y enruta entre VLANs antes del núcleo."
      },
      {
        "pregunta": "¿Cuál es el rango de separación de canales en DWDM de 100 GHz?",
        "respuestas": [
          "20 nm",
          "0,8 nm",
          "5 nm",
          "1,6 nm"
        ],
        "correcta": "0,8 nm",
        "explicacion": "DWDM a 100 GHz equivale a unos 0,8 nm de separación espectral"
      },
      {
        "pregunta": "¿Qué tecnología WAN permite agregar ancho de banda bajo demanda?",
        "respuestas": [
          "PDH",
          "Metro Ethernet",
          "Frame Relay",
          "ISDN"
        ],
        "correcta": "Metro Ethernet",
        "explicacion": "El cliente puede solicitar incrementos de banda en Metro Ethernet con configuración simple."
      },
      {
        "pregunta": "¿Qué ventaja tiene la fibra monomodo sobre multimodo?",
        "respuestas": [
          "Menor coste de emisores",
          "Menor dispersión y mayor alcance",
          "Mayor diámetro de core",
          "Uso de LED en lugar de láser"
        ],
        "correcta": "Menor dispersión y mayor alcance",
        "explicacion": "La SMF usa láser y core estrecho para largos enlaces sin rebotes múltiples."
      },
      {
        "pregunta": "¿Qué algoritmo evita bucles en topologías redundantes de capa 2?",
        "respuestas": [
          "STP",
          "OSPF",
          "MPLS",
          "BGP"
        ],
        "correcta": "STP",
        "explicacion": "Spanning Tree Protocol bloquea enlaces redundantes para eliminar bucles en LAN"
      },
      {
        "pregunta": "¿Qué servicio permite alquilar lambdas específicas en WDM?",
        "respuestas": [
          "Fibra oscura",
          "Lambda oscura",
          "EtherChannel",
          "VLAN trunking"
        ],
        "correcta": "Lambda oscura",
        "explicacion": "El servicio de λ oscura alquila longitudes de onda nombradas al usuario para su propia señalización"
      },
      {
        "pregunta": "¿Qué criterio NO es esencial para elegir un proveedor WAN?",
        "respuestas": [
          "Areas geográficas cubiertas",
          "Nivel de overbooking",
          "Velocidad de los LEDs",
          "Soporte QoS"
        ],
        "correcta": "Velocidad de los LEDs",
        "explicacion": "La velocidad de emisión óptica no define la red del proveedor; sí cobertura, redundancia y SLA "
      },
      {
        "pregunta": "¿En qué situación es preferible usar par trenzado STP en campus?",
        "respuestas": [
          "Entornos con mucha EMI",
          "Para 10 Gigabit Ethernet",
          "En exteriores sin protección",
          "Para câbles de más de 100 m"
        ],
        "correcta": "Entornos con mucha EMI",
        "explicacion": "STP tiene blindaje para reducir interferencias en zonas con altas EMI"
      },
      {
        "pregunta": "¿Qué topología de cableado centralizado se asocia a esquema estrella?",
        "respuestas": [
          "Anillo",
          "Bus",
          "Árbol",
          "Estrella"
        ],
        "correcta": "Estrella",
        "explicacion": "La topología estrella con conmutadores centrales es ejemplo típico de cableado centralizado"
      },
      {
        "pregunta": "¿Qué estándar de Ethernet full-duplex dejó obsoleto CSMA/CD?",
        "respuestas": [
          "10Base5",
          "10Base2",
          "100BaseTX",
          "10 Mbps conmutado"
        ],
        "correcta": "10 Mbps conmutado",
        "explicacion": "Ethernet full-duplex (1992) eliminó CSMA/CD al permitir enlaces punto-a-punto"
      },
      {
        "pregunta": "¿Cuál es la distancia máxima en 1000BaseLX en multimodo?",
        "respuestas": [
          "550 m",
          "5 km",
          "100 m",
          "2 km"
        ],
        "correcta": "550 m",
        "explicacion": "1000BaseLX alcanza 550 m en MMF y 5 km en SMF con láser de onda larga"
      }
    ],
    "Tema 4": [
      {
        "pregunta": "¿Cuál es uno de los principales objetivos de las pruebas de diseño de red?",
        "respuestas": [
          "Reducir el número de dispositivos",
          "Verificar que el diseño cumple metas técnicas y de negocio",
          "Aumentar el presupuesto",
          "Eliminar la fase de implementación"
        ],
        "correcta": "Verificar que el diseño cumple metas técnicas y de negocio",
        "explicacion": "Las pruebas deben confirmar que la solución diseñada satisface los requisitos de rendimiento, disponibilidad y objetivos del cliente."
      },
      {
        "pregunta": "¿Qué servicio industrial NO se menciona como laboratorio de pruebas?",
        "respuestas": [
          "UNH-IOL",
          "Miercom Labs",
          "Tolly Group",
          "Cisco Live"
        ],
        "correcta": "Cisco Live",
        "explicacion": "Se citan UNH-IOL, Miercom y The Tolly Group como proveedores de pruebas, pero no Cisco Live ."
      },
      {
        "pregunta": "¿Cuál es un método práctico para validar un diseño sin desplegarlo a gran escala?",
        "respuestas": [
          "Implementación completa",
          "Sistema prototipo",
          "Documentar sin probar",
          "Solo simulación teórica"
        ],
        "correcta": "Sistema prototipo",
        "explicacion": "Un prototipo acota alcance para validar funciones críticas sin necesidad de desplegar toda la red."
      },
      {
        "pregunta": "¿Qué herramienta de simulación se menciona explícitamente?",
        "respuestas": [
          "GNS3",
          "Packet Tracer",
          "EVE-NG",
          "NS-3"
        ],
        "correcta": "Packet Tracer",
        "explicacion": "Cisco Packet Tracer se señala como opción para modelado y simulación de redes ."
      },
      {
        "pregunta": "En un plan de pruebas, ¿qué elemento define cuándo una prueba pasa o falla?",
        "respuestas": [
          "El presupuesto",
          "Los criterios de aceptación",
          "El número de usuarios",
          "La topología"
        ],
        "correcta": "Los criterios de aceptación",
        "explicacion": "Los criterios de aceptación deben ser claros y específicos para declarar éxito o fallo de cada prueba."
      },
      {
        "pregunta": "¿Cuál de estos NO forma parte de los componentes de un plan de pruebas?",
        "respuestas": [
          "Objetivos y criterios de aceptación",
          "Scripts de prueba",
          "Plan de licencias de software",
          "Recursos requeridos"
        ],
        "correcta": "Plan de licencias de software",
        "explicacion": "Aunque importantes, las licencias no se incluyen en el plan de pruebas; sí objetivos, tipos de pruebas, scripts y recursos."
      },
      {
        "pregunta": "¿Qué tipo de prueba asegura que el nuevo sistema no rompa funcionalidades existentes?",
        "respuestas": [
          "Pruebas de caudal",
          "Pruebas de regresión",
          "Pruebas de disponibilidad",
          "Pruebas de latencia"
        ],
        "correcta": "Pruebas de regresión",
        "explicacion": "Las pruebas de regresión verifican que las actualizaciones no degraden componentes que antes funcionaban correctamente."
      },
      {
        "pregunta": "¿Cuál es un ejemplo de recurso físico necesario para pruebas?",
        "respuestas": [
          "Racks y aire acondicionado",
          "Diseño lógico",
          "Simulador de tráfico",
          "Documento de RFP"
        ],
        "correcta": "Racks y aire acondicionado",
        "explicacion": "Se requiere equipamiento del laboratorio: corriente, climatización y espacio para montar dispositivos"
      },
      {
        "pregunta": "En los scripts de prueba, ¿qué se registra tras cada iteración de carga?",
        "respuestas": [
          "El consumo eléctrico",
          "El log de resultados",
          "El estado del presupuesto",
          "Las versiones de software"
        ],
        "correcta": "El log de resultados",
        "explicacion": "Se documentan los resultados de cada ejecución en la bitácora para análisis posterior."
      },
      {
        "pregunta": "¿Qué paquete TCP debería bloquear el firewall según el ejemplo de script?",
        "respuestas": [
          "FIN",
          "SYN",
          "ACK",
          "RST"
        ],
        "correcta": "SYN",
        "explicacion": "El objetivo era bloquear solicitudes TCP SYN de la aplicación cliente-servidor."
      },
      {
        "pregunta": "Tras bloquear la petición, ¿qué respuesta TCP envía el firewall?",
        "respuestas": [
          "FIN",
          "SYN",
          "ACK",
          "RST"
        ],
        "correcta": "RST",
        "explicacion": "El firewall responde con un paquete TCP RST para indicar la conexión rechazada."
      },
      {
        "pregunta": "¿Qué paso NO forma parte del ejemplo de script de pruebas?",
        "respuestas": [
          "Capturar tráfico en ambas redes",
          "Incrementar la carga gradualmente",
          "Modificar la topología física",
          "Guardar trazas en directorio"
        ],
        "correcta": "Modificar la topología física",
        "explicacion": "El script descrito no altera la red, solo captura, prueba y documenta resultados."
      },
      {
        "pregunta": "¿Qué herramienta se usa para generar tráfico de prueba multiservicio?",
        "respuestas": [
          "Ixia IxN2X",
          "Nagios",
          "Packet Tracer",
          "OPNET"
        ],
        "correcta": "Ixia IxN2X",
        "explicacion": "Ixia IxN2X es una solución de prueba multiservicio para generar flujos y medir rendimiento"
      },
      {
        "pregunta": "¿Cuál de estas herramientas es de código abierto para graficar tráfico SNMP?",
        "respuestas": [
          "MRTG",
          "WhatsUp Gold",
          "NetMRI",
          "NetFlow NTA"
        ],
        "correcta": "MRTG",
        "explicacion": "Multi Router Traffic Grapher (MRTG) es open-source y usa SNMP para monitorizar enlaces."
      },
      {
        "pregunta": "¿Qué herramienta se recomienda para monitorización genérica de servicios?",
        "respuestas": [
          "Netstat",
          "Nagios",
          "Ping",
          "Traceroute"
        ],
        "correcta": "Nagios",
        "explicacion": "Nagios supervisa disponibilidad de servicios mediante plugins y notificaciones."
      },
      {
        "pregunta": "¿Cuál es la última fase de documentación de red según el tema?",
        "respuestas": [
          "Requerimientos de diseño",
          "Resultados de pruebas",
          "Plan de implantación",
          "Apéndices"
        ],
        "correcta": "Apéndices",
        "explicacion": "Se incluyen mapas, config de dispositivos, tablas de direccionamiento y resultados completos como apéndices"
      },
      {
        "pregunta": "En un documento de diseño, ¿dónde se describe cómo el diseño cumple los requisitos?",
        "respuestas": [
          "Resumen ejecutivo",
          "Requerimientos del diseño",
          "Nuevos diseños lógico y físico",
          "Plan de implantación"
        ],
        "correcta": "Requerimientos del diseño",
        "explicacion": "Esta sección liga directamente metas del cliente con las soluciones propuestas."
      },
      {
        "pregunta": "¿Qué sección incluye la estimación de presupuesto del proyecto?",
        "respuestas": [
          "Resumen ejecutivo",
          "Plan de implantación",
          "Presupuesto del proyecto",
          "Requerimientos de diseño"
        ],
        "correcta": "Presupuesto del proyecto",
        "explicacion": "El documento dedica un apartado específico al desglose de costes y licencias."
      },
      {
        "pregunta": "¿Qué plantilla se usa en España para solicitar documentación de diseño?",
        "respuestas": [
          "RFP",
          "Pliego de Licitación",
          "BOM",
          "RFQ"
        ],
        "correcta": "Pliego de Licitación",
        "explicacion": "En España se utiliza el Pliego de Licitación que define condiciones y requisitos del proyecto"
      },
      {
        "pregunta": "¿Qué documento describe el alcance y objetivos del proyecto?",
        "respuestas": [
          "Resumen ejecutivo",
          "Alcance del proyecto",
          "Estado actual de la red",
          "Apéndices"
        ],
        "correcta": "Alcance del proyecto",
        "explicacion": "Esta sección detalla los límites, entregables y metas específicas del diseño."
      },
      {
        "pregunta": "¿Cuál de estos NO es un apéndice recomendado?",
        "respuestas": [
          "Mapas detallados de la topología",
          "Resultados de pruebas",
          "Datos de contacto",
          "Plan de negocio de la empresa"
        ],
        "correcta": "Plan de negocio de la empresa",
        "explicacion": "No es relevante para el diseño de red; se incluyen apéndices técnicos y de pruebas."
      },
      {
        "pregunta": "¿Qué sección contiene la descripción de protocolos y tecnologías utilizadas?",
        "respuestas": [
          "Resumen ejecutivo",
          "Nuevos diseños lógico y físico",
          "Plan de implantación",
          "Presupuesto del proyecto"
        ],
        "correcta": "Nuevos diseños lógico y físico",
        "explicacion": "En el diseño lógico se detallan protocolos; en el físico, dispositivos y cableado"
      },
      {
        "pregunta": "¿Qué parte del documento de diseño aborda el entrenamiento?",
        "respuestas": [
          "Plan de implantación",
          "Resultados de pruebas",
          "Apéndices",
          "Resumen ejecutivo"
        ],
        "correcta": "Plan de implantación",
        "explicacion": "El plan de implantación incluye actividades de formación y transferencia de conocimiento."
      },
      {
        "pregunta": "¿En qué sección se incluyen las ventanas de mantenimiento?",
        "respuestas": [
          "Plan de implantación",
          "Requerimientos de diseño",
          "Alcance del proyecto",
          "Resumen ejecutivo"
        ],
        "correcta": "Plan de implantación",
        "explicacion": "Se planifican fechas y horas basadas en ventanas de mantenimiento para minimizar impacto."
      },
      {
        "pregunta": "¿Qué lista identifica piezas y componentes necesarios?",
        "respuestas": [
          "RFP",
          "BOM",
          "RPD",
          "RFP"
        ],
        "correcta": "BOM",
        "explicacion": "La Bill Of Materials (BOM) detalla partes, dispositivos y licencias requeridas."
      },
      {
        "pregunta": "¿Qué sección del RFP solicita referencias de otros clientes?",
        "respuestas": [
          "Detalles técnicos",
          "Cuestiones típicas de RFP",
          "Plan de implantación",
          "BOM"
        ],
        "correcta": "Cuestiones típicas de RFP",
        "explicacion": "Entre las preguntas de RFP se incluyen recomendaciones de clientes previos"
      },
      {
        "pregunta": "¿Qué parte del plan describe un plan alternativo en caso de fallo?",
        "respuestas": [
          "Resumen ejecutivo",
          "Plan alternativo",
          "Presupuesto",
          "Apéndices"
        ],
        "correcta": "Plan alternativo",
        "explicacion": "El documento de implantación debe incluir una estrategia de contingencia si la implementación falla"
      },
      {
        "pregunta": "¿Qué sección explica cómo escalar el diseño con nuevos requisitos?",
        "respuestas": [
          "Plan de evolución del diseño",
          "Resumen ejecutivo",
          "BOM",
          "Cuestiones de RFP"
        ],
        "correcta": "Plan de evolución del diseño",
        "explicacion": "Describe cómo adaptar la red a futuras necesidades sin rehacerla completamente"
      },
      {
        "pregunta": "¿Qué criterio NO corresponde a metas técnicas?",
        "respuestas": [
          "Disponibilidad",
          "Facilidad de uso",
          "Color del cableado",
          "Adaptabilidad"
        ],
        "correcta": "Color del cableado",
        "explicacion": "Las metas técnicas cubren rendimiento, seguridad, uso, no aspectos estéticos"
      },
      {
        "pregunta": "¿Qué se documenta en el «estado actual de la red»?",
        "respuestas": [
          "Topología existente y salud de equipos",
          "Presupuesto futuro",
          "Plan de implantación",
          "Resumen ejecutivo"
        ],
        "correcta": "Topología existente y salud de equipos",
        "explicacion": "Incluye mapeo de dispositivos, enlaces y métricas de rendimiento actuales"
      },
      {
        "pregunta": "¿Qué debe incluir un script de prueba para ser reproducible?",
        "respuestas": [
          "Solo objetivos generales",
          "Pasos detallados y criterios de aceptación",
          "Presupuesto estimado",
          "Solo herramientas necesarias"
        ],
        "correcta": "Pasos detallados y criterios de aceptación",
        "explicacion": "Un buen script define con precisión cada acción y cómo evaluar resultados"
      },
      {
        "pregunta": "¿En qué sección del documento se listan los riesgos de la implantación?",
        "respuestas": [
          "Plan de implantación",
          "Apéndices",
          "Resumen ejecutivo",
          "Requerimientos"
        ],
        "correcta": "Plan de implantación",
        "explicacion": "El plan de implantación incluye análisis de riesgos y planes de mitigación."
      },
      {
        "pregunta": "¿Qué tipo de pruebas mide la capacidad del sistema bajo carga?",
        "respuestas": [
          "Pruebas de disponibilidad",
          "Pruebas de caudal",
          "Pruebas de regresión",
          "Pruebas de documentación"
        ],
        "correcta": "Pruebas de caudal",
        "explicacion": "Las pruebas de caudal evalúan el rendimiento máximo y sostenido de la red bajo tráfico ."
      },
      {
        "pregunta": "¿Qué prueba evalúa el tiempo de respuesta de aplicaciones?",
        "respuestas": [
          "Pruebas de latencia",
          "Pruebas de regresión",
          "Pruebas de disponibilidad",
          "Pruebas de caudal"
        ],
        "correcta": "Pruebas de latencia",
        "explicacion": "También llamadas pruebas de tiempo de respuesta, miden el retardo extremo a extremo de aplicaciones."
      },
      {
        "pregunta": "¿Qué herramienta calcula Erlang para dimensionar enlaces de voz?",
        "respuestas": [
          "Online Erlang Traffic Calculators",
          "MRTG",
          "WhatsUp Gold",
          "OPNET"
        ],
        "correcta": "Online Erlang Traffic Calculators",
        "explicacion": "Estas calculadoras permiten estimar ocupación y requerimientos de capacidad de voz usando fórmulas Erlang"
      }
    ],
    "Examen": [
      {
        "pregunta": "¿Cuál de las siguientes definiciones describe mejor el término \"caudal\" en el contexto de la transmisión de datos?",
        "respuestas": [
          "La velocidad a la que se transmiten los datos, incluyendo posibles errores.",
          "La cantidad total de datos transmitidos, independientemente del tiempo que tarde.",
          "La cantidad de datos (libres de errores) transmitidos por unidad de tiempo.",
          "La capacidad máxima de una comunicación para transmitir datos."
        ],
        "correcta": "La cantidad de datos (libres de errores) transmitidos por unidad de tiempo.",
        "explicacion": "La respuesta correcta es: <b>La cantidad de datos (libres de errores) transmitidos por unidad de tiempo.</b> Esto coincide con la definición de caudal (goodput) en el material del tema 1, diferenciándose del ancho de banda bruto."
      },
      {
        "pregunta": "Las velocidades estandarizadas de SONET siempre son múltiplos de ……",
        "respuestas": [
          "Dos",
          "Tres",
          "Cuatro",
          "Cinco"
        ],
        "correcta": "Tres",
        "explicacion": "La respuesta correcta es: <b>Tres</b>. SONET define STS-n como múltiplos de STS-1 (51,84 Mb/s), por lo que todos los niveles son múltiplos de tres canales de 51,84 Mb/s para alinearse con SDH."
      },
      {
        "pregunta": "Para determinar las fuentes y destinos del tráfico de red debemos identificar las ……",
        "respuestas": [
          "Direcciones IP",
          "Direcciones MAC",
          "Nombres de usuario",
          "Subredes"
        ],
        "correcta": "Direcciones MAC",
        "explicacion": "La respuesta correcta es: <b>Direcciones MAC</b>. Para caracterizar flujos en el nivel de enlace se utilizan direcciones MAC como identificadores de origen y destino."
      },
      {
        "pregunta": "…… es la variación en el retardo promedio.",
        "respuestas": [
          "Latencia",
          "Jitter",
          "Ancho de banda",
          "Pérdida de paquetes"
        ],
        "correcta": "Jitter",
        "explicacion": "La respuesta correcta es: <b>Jitter</b>. El jitter mide la variabilidad del retardo entre paquetes, siendo crítico para aplicaciones en tiempo real."
      },
      {
        "pregunta": "En los años 70, del siglo XX, se desarrolló el primer estándar TDM denominado …… que en su versión europea utilizaba …… canales.",
        "respuestas": [
          "SDH - 60",
          "SONET - 24",
          "PDH - 30",
          "ATM - 128"
        ],
        "correcta": "PDH - 30",
        "explicacion": "La respuesta correcta es: <b>PDH - 30</b>. El estándar PDH (Plesiochronous Digital Hierarchy) utilizaba 30 canales de voz en su versión europea E1."
      },
      {
        "pregunta": "Los …… actúan como cortafuegos, aíslan el tráfico broadcast.",
        "respuestas": [
          "Switches",
          "Hubs",
          "Routers",
          "Bridges"
        ],
        "correcta": "Routers",
        "explicacion": "La respuesta correcta es: <b>Routers</b>. Los routers separan dominios de broadcast al reenviar únicamente paquetes IP entre subredes."
      },
      {
        "pregunta": "La multiplexación TDM se basa en el ……",
        "respuestas": [
          "Frecuencia",
          "Tiempo",
          "Longitud de onda",
          "Código"
        ],
        "correcta": "Tiempo",
        "explicacion": "La respuesta correcta es: <b>Tiempo</b>. TDM asigna franjas temporales a cada canal de forma secuencial."
      },
      {
        "pregunta": "La fibra multimodo usa fuentes …… y es apropiada para distancias ……",
        "respuestas": [
          "Láser - Mayores",
          "LED - Menores",
          "Láser - Menores",
          "LED - Mayores"
        ],
        "correcta": "LED - Menores",
        "explicacion": "La respuesta correcta es: <b>LED - Menores</b>. La fibra multimodo emplea LEDs y cubre distancias cortas debido a la dispersión modal."
      },
      {
        "pregunta": "El protocolo …… asigna a los datagramas de cada flujo una etiqueta única que permite una conmutación rápida en los enrutadores intermedios.",
        "respuestas": [
          "TCP/IP",
          "UDP",
          "MPLS",
          "Ethernet"
        ],
        "correcta": "MPLS",
        "explicacion": "La respuesta correcta es: <b>MPLS</b>. MPLS etiqueta flujos para forwarding rápido sin mirar encabezados IP completos."
      },
      {
        "pregunta": "La fibra monomodo usa …… diámetro y un rayo de luz más ……",
        "respuestas": [
          "Mayor - Difuso",
          "Menor - Difuso",
          "Mayor - Enfocado",
          "Menor - Enfocado"
        ],
        "correcta": "Menor - Enfocado",
        "explicacion": "La respuesta correcta es: <b>Menor - Enfocado</b>. La fibra monomodo tiene un core estrecho y transporta un haz láser muy concentrado para largas distancias."
      },
      {
        "pregunta": "La utilidad …… se puede usar para caracterizar el tiempo de respuesta entre los nodos de una red.",
        "respuestas": [
          "Traceroute",
          "Ping",
          "Netstat",
          "ipconfig"
        ],
        "correcta": "Ping",
        "explicacion": "La respuesta correcta es: <b>Ping</b>. Ping mide RTT enviando ICMP Echo Request y calculando el tiempo de ida y vuelta."
      },
      {
        "pregunta": "El envío de varias señales con diferentes longitudes de onda, en formato “grueso”, por una misma fibra se denomina ……",
        "respuestas": [
          "WDM",
          "DWDM",
          "CWDM",
          "FDM"
        ],
        "correcta": "CWDM",
        "explicacion": "La respuesta correcta es: <b>CWDM</b>. CWDM agrupa canales con separación de 20 nm sin amplificación compleja."
      },
      {
        "pregunta": "¿Qué significa que un dispositivo soporte “Hot Swap”?",
        "respuestas": [
          "Conexión inalámbrica",
          "Alta velocidad de transferencia",
          "Sustitución en caliente",
          "Compatibilidad con múltiples protocolos"
        ],
        "correcta": "Sustitución en caliente",
        "explicacion": "La respuesta correcta es: <b>Sustitución en caliente</b>. Permite cambiar componentes sin apagar el sistema."
      },
      {
        "pregunta": "SDH utiliza topologías en …… para aumentar la fiabilidad.",
        "respuestas": [
          "Estrella",
          "Malla",
          "Anillo",
          "Árbol"
        ],
        "correcta": "Anillo",
        "explicacion": "La respuesta correcta es: <b>Anillo</b>. SDH implementa anillos para proteger rutas y ofrecer recuperación rápida."
      },
      {
        "pregunta": "El mayor inconveniente de la tecnología ATM es el ……",
        "respuestas": [
          "Ancho de banda limitado",
          "Overhead",
          "Latencia alta",
          "Costo elevado"
        ],
        "correcta": "Overhead",
        "explicacion": "La respuesta correcta es: <b>Overhead</b>. Las cabeceras de 5 bytes por celda generan un alto overhead en ATM."
      },
      {
        "pregunta": "La tecnología …… permite el agrupamiento lógico de varios enlaces físicos ethernet para incrementar el ancho de banda.",
        "respuestas": [
          "VLAN",
          "Spanning Tree",
          "EtherChannel",
          "NAT"
        ],
        "correcta": "EtherChannel",
        "explicacion": "La respuesta correcta es: <b>EtherChannel</b>. Agrupa enlaces en un único canal lógico para balanceo y redundancia"
      },
      {
        "pregunta": "La gestión de centros de datos, hoy día, es posible gracias a la tecnología ……",
        "respuestas": [
          "SNMP",
          "SDN",
          "VPN",
          "QoS"
        ],
        "correcta": "SDN",
        "explicacion": "La respuesta correcta es: <b>SDN</b>. SDN separa control y datos, permitiendo orquestación y automatización en DC."
      },
      {
        "pregunta": "Los cables submarinos de fibra óptica ayudan, en la actualidad, a la detección temprana de ……",
        "respuestas": [
          "Tormentas",
          "Tsunamis",
          "Erupciones volcánicas",
          "Huracanes"
        ],
        "correcta": "Tsunamis",
        "explicacion": "La respuesta correcta es: <b>Tsunamis</b>. Los cambios en presión detectados por los cables submarinos permiten alertas tempranas."
      },
      {
        "pregunta": "La tecnología ethernet WAN utiliza un nivel físico heredado de ……",
        "respuestas": [
          "ATM",
          "Frame Relay",
          "SDH",
          "IP"
        ],
        "correcta": "SDH",
        "explicacion": "La respuesta correcta es: <b>SDH</b>. Metro Ethernet frecuentemente se apoya en la capa física SDH/SONET."
      },
      {
        "pregunta": "¿Cuáles de las siguientes opciones describen arquitecturas (pila de protocolos) de redes corporativas basadas en fibra óptica?",
        "respuestas": [
          "IP sobre Ethernet sobre SONET/SDH sobre CWDM/DWDM sobre Fibra Óptica",
          "POS sobre SONET/SDH sobre CWDM/DWDM sobre Fibra Óptica",
          "IP sobre Ethernet sobre Fibra Óptica",
          "Todas las anteriores"
        ],
        "correcta": "Todas las anteriores",
        "explicacion": "La respuesta correcta es: <b>Todas las anteriores</b>. Todas las arquitecturas listadas son válidas según el material del tema 1"
      }
    ],
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
  selectedPartial: number | null = null;
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService
  ) {

  }

  /** Llamar desde los botones de parcial */
  elegirParcial(parcial: number) {
    this.selectedPartial = parcial;
    this.cargarPreguntasCompletas(parcial);
    this.actualizarPreguntasPaginadas();
  }


  cargarPreguntasCompletas(parcial: number) {
    const grupos = parcial === 1
      ? [
        this.temas["Tema 1"],
        this.temas["Tema 1"],
        this.temas["Tema 2"],
        this.temas["Tema 3"],
        this.temas["Tema 4"],
      ]
      : [
        this.temas["Tema 5 - 1"],
        this.temas["Tema 5 - 2"],
        this.temas["Tema 5 - 3"],
      ];

    // Aquí usamos flat() en lugar de concat
    const preguntas = grupos.flat();

    this.preguntasActuales = this.shuffleArray(preguntas);
    this.preguntasActuales.forEach(p => p.respuestas = this.shuffleArray(p.respuestas));
    this.respuestasUsuario = new Array(this.preguntasActuales.length).fill(null);
    this.testFinalizado = false;
    this.paginaActual = 0;
    this.paginaComprobada = false;
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

