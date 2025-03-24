import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HeadbarComponent } from '../../headbar/headbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rys',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DividerModule, CardModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule, PaginatorModule],
  providers: [ConfirmationService],
  templateUrl: './rys.component.html',
  styleUrl: './rys.component.scss'
})
export class RysComponent {
 temas: { [key: string]: any[] } = {
    "Preguntas": [
      {
        "pregunta": "¿Cuál de las siguientes tecnologías inalámbricas se clasifica correctamente bajo la categoría de Wireless Wide Area Network (WWAN)?",
        "respuestas": [
          "802.15.4",
          "Bluetooth",
          "802.11n",
          "LTE"
        ],
        "correcta": "LTE"
      },
      {
        "pregunta": "¿Cuál de las siguientes opciones es un ejemplo de tecnología inalámbrica del tipo Low Power Wide Area Network (LPWAN)?",
        "respuestas": [
          "802.11g",
          "RFID",
          "LoraWan",
          "UMTS"
        ],
        "correcta": "LoraWan"
      },
      {
        "pregunta": "¿Qué término describe mejor el ancho de banda dentro del cual se concentra la mayor parte de la energía de una señal?",
        "respuestas": [
          "Ancho de banda absoluto",
          "Ancho de banda efectivo",
          "Espectro de la señal",
          "Rango de frecuencias"
        ],
        "correcta": "Ancho de banda efectivo"
      },
      {
        "pregunta": "¿Cuál de los siguientes términos se refiere a la tasa de comunicación en bits por segundo en un canal de comunicación?",
        "respuestas": [
          "Signal-to-Noise ratio (SNR)",
          "Tasa de datos",
          "Nivel de ruido",
          "Tasa de error"
        ],
        "correcta": "Tasa de datos"
      },
      {
        "pregunta": "¿Qué término describe la relación entre la potencia emitida por una antena en una dirección específica y la potencia que emitiría, en esa misma dirección, una antena isotrópica ideal?",
        "respuestas": [
          "Patrón de radiación",
          "Ganancia",
          "Ancho de banda",
          "Tasa de datos"
        ],
        "correcta": "Ganancia"
      },
      {
        "pregunta": "¿Qué representa el término 'Effective Isotropic Radiated Power' (EIRP) en el contexto de las comunicaciones inalámbricas?",
        "respuestas": [
          "La potencia de salida máxima permitida en Europa para la banda de 2.4 GHz.",
          "La diferencia entre la ganancia de la antena y la pérdida en el cable, expresada en dB.",
          "La potencia de salida de una señal concentrada en un área más pequeña por la antena, menos la pérdida del cable y mas la ganancia de la antena.",
          "La tasa de datos de esa antena en bits por segundo."
        ],
        "correcta": "La potencia de salida de una señal concentrada en un área más pequeña por la antena, menos la pérdida del cable y mas la ganancia de la antena."
      },
      {
        "pregunta": "¿Cómo se calcula el margen o budget (en dB) en un sistema de comunicación inalámbrica?",
        "respuestas": [
          "Ganancia de la antena del transmisor (dBi) - Pérdidas en los cables (dB)",
          "Energía emitida (dBm) - Pérdidas en los cables (dB) + Ganancia de la antena del transmisor (dBi)",
          "Ganancia de la antena del receptor (dBi) - Pérdidas en los cables (dB)",
          "Señal recibida (dBm) - Sensibilidad del receptor (dBm)"
        ],
        "correcta": "Señal recibida (dBm) - Sensibilidad del receptor (dBm)"
      },
      {
        "pregunta": "¿Cuál de las siguientes opciones describe correctamente los nodos en Vehicular Ad-hoc Networks (VANET)?",
        "respuestas": [
          "Los nodos son infraestructuras de comunicación fijas.",
          "Los nodos son dispositivos móviles personales.",
          "Los nodos son vehículos.",
          "Los nodos son sensores/actuadores fijos."
        ],
        "correcta": "Los nodos son vehículos."
      },
      {
        "pregunta": "¿Cuál de los siguientes factores NO plantea problemas para el throughput (rendimiento) en las Redes Ad-hoc Móviles (MANET)?",
        "respuestas": [
          "Patrones de tráfico",
          "Algoritmo de enrutamiento",
          "Número de nodos durmientes",
          "Capacidad de almacenamiento de los nodos"
        ],
        "correcta": "Capacidad de almacenamiento de los nodos"
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones describe mejor el propósito detrás del desarrollo de redes celulares con PicoCells?",
        "respuestas": [
          "Incrementar la tasa de bits efectiva ofrecida a los usuarios en las redes celulares mediante la reducción del tamaño de las celdas.",
          "Disminuir los costes de despliegue de las redes celulares.",
          "Aumentar el alcance y la cobertura de las redes celulares en áreas rurales.",
          "Reducir el consumo de energía de las redes celulares a nivel global."
        ],
        "correcta": "Incrementar la tasa de bits efectiva ofrecida a los usuarios en las redes celulares mediante la reducción del tamaño de las celdas."
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones es correcta con respecto a las redes celulares, ad-hoc y mesh?",
        "respuestas": [
          "Las redes celulares son las más rápidas de desplegar.",
          "Las redes ad-hoc son las menos robustas debido a su alta dependencia de la infraestructura de red fija y la complejidad en la gestión de la red.",
          "Las redes celulares tienen mayores costes de despliegue que las redes ad-hoc y mesh.",
          "Las redes ad-hoc, generalmente, ofrecen una conectividad estable y mejor tasa de datos que las redes celulares."
        ],
        "correcta": "Las redes celulares tienen mayores costes de despliegue que las redes ad-hoc y mesh."
      },
      {
        "pregunta": "¿Qué es un handoff en el contexto de las comunicaciones celulares?",
        "respuestas": [
          "El proceso de transferir, sin interrupciones, una llamada o sesión de datos activa de una celda a otra dentro de una red celular.",
          "La actualización de software en los dispositivos móviles usando la red inalámbrica.",
          "El proceso de cambiar la red de datos móviles de un proveedor a otro.",
          "La técnica para aumentar la potencia de la señal en áreas de baja cobertura."
        ],
        "correcta": "El proceso de transferir, sin interrupciones, una llamada o sesión de datos activa de una celda a otra dentro de una red celular."
      },
      {
        "pregunta": "¿Por qué es importante optimizar el \"ciclo de trabajo\" (duty cycle) en la comunicación inalámbrica, especialmente en MANET (Mobile Ad-hoc Networks)?",
        "respuestas": [
          "Para aumentar la velocidad de transmisión de datos entre los nodos.",
          "Para aumentar el consumo de energía y aumentar el tiempo de vida de la red.",
          "Para minimizar el consumo de energía gestionando los estados activos y de reposo (sleep) de los dispositivos.",
          "Para mejorar la cobertura y el servicio prestado de la red expandiendo la distancia de transmisión de los nodos inalámbricos reduciendo el duty cycle al máximo."
        ],
        "correcta": "Para minimizar el consumo de energía gestionando los estados activos y de reposo (sleep) de los dispositivos."
      },
      {
        "pregunta": "Para una relación señal-ruido constante de 5dB, según Shannon, ¿qué señal tendrá más capacidad de transmisión?",
        "respuestas": [
          "Una trasmisión con un canal de ancho de banda de 10MHz",
          "Una trasmisión con un canal de ancho de banda de 20MHz",
          "Una trasmisión con un canal de ancho de banda de 30MHz",
          "Es igual en todas, no depende del ancho de banda del canal"
        ],
        "correcta": "Una trasmisión con un canal de ancho de banda de 30MHz"
      },
      {
        "pregunta": "Usted es un ingeniero encargado por la compañía de telecomunicaciones Quijote del mantenimiento de la red celular. El número de usuarios ha aumentado y la calidad del servicio ha bajado. ¿Cuál acción escoge para mejorar la calidad del servicio?",
        "respuestas": [
          "Empresa A: Aumentar la potencia de las estaciones base ya existentes de cada celda. El número de celdas se deja igual.",
          "Empresa B: Aumentar el número de estaciones base, es decir aumentar el número de celdas, reduciendo su potencia.",
          "Empresa C: Limitar la tasa de transmisión a los usuarios para evitar colisiones",
          "Ninguna, ninguna de las propuestas ayudan a mejorar el servicio en el problema descrito."
        ],
        "correcta": "Empresa B: Aumentar el número de estaciones base, es decir aumentar el número de celdas, reduciendo su potencia."
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones describe correctamente las etiquetas RFID pasivas?",
        "respuestas": [
          "Las etiquetas pasivas tienen un alcance de comunicación más largo y son más caras debido a la inclusión de una batería interna",
          "Las etiquetas pasivas generan su propia energía y pueden comunicarse a frecuencias de 2.4GHz o 5.8 GHz para maximizar el alcance.",
          "Las etiquetas pasivas obtienen energía del lector, lo que las hace más baratas y con una vida útil más prolongada.",
          "Las etiquetas pasivas funcionan exclusivamente en la banda de Ultra-Alta Frecuencia (UHF) para maximizar su eficiencia energética."
        ],
        "correcta": "Las etiquetas pasivas obtienen energía del lector, lo que las hace más baratas y con una vida útil más prolongada."
      },
      {
        "pregunta": "¿Cuál de las siguientes tecnologías requiere de licencia, es decir, no trabaja en frecuencias libres?",
        "respuestas": [
          "NB-IoT",
          "802.15.4",
          "LoRaWAN",
          "RFID"
        ],
        "correcta": "NB-IoT"
      },
      {
        "pregunta": "Una sensibilidad -80dBm de una interfaz inalámbrica es mejor que una sensibilidad de +20 dBm",
        "respuestas": [
          "Verdadero",
          "Falso",
          "Depende de la tecnología",
          "Depende de la topología"
        ],
        "correcta": "Falso"
      },
      {
        "pregunta": "Necesitas conectar y controlar 20 sensores de humedad y bombas de riego en un área de cultivo extensivo de olivo de 5km x 5km. ¿Qué tecnología recomendarías como experto en IoT?",
        "respuestas": [
          "Bluetooth",
          "LoraWan",
          "802.15.4",
          "GPS"
        ],
        "correcta": "LoraWan"
      },
      {
        "pregunta": "Para una distancia de 2km ¿Una señal portadora en la banda de qué frecuencia tiene mayor atenuación?",
        "respuestas": [
          "433MHz",
          "868MHz",
          "2.4GHz",
          "Todas tienen la misma atenuación"
        ],
        "correcta": "2.4GHz"
      }, {
        "pregunta": "Necesita etiquetar 100 cascos de moto para inventario automático, ¿Qué tecnología de comunicaciones utilizaría?",
        "respuestas": [
          "RFID (LF)",
          "LoraWan",
          "Sigfox",
          "Zigbee"
        ],
        "correcta": "RFID (LF)"
      },
      {
        "pregunta": "Necesita etiquetar una flota de camiones de cara a monitorizar dónde está cada camión en cada momento en Europa ¿Qué tecnología de comunicaciones utilizaría? (2)",
        "respuestas": [
          "RFID (LF)",
          "LoraWan",
          "Sigfox",
          "Zigbee"
        ],
        "correcta": "LoraWan y Sigfox"
      },
      {
        "pregunta": "Necesita desplegar una red de sensores de temperatura en su plantación de pistacho para monitorizar el riesgo de heladas desde su móvil, acaba de instalar en la casa de la plantación una conexión vía satelital a Internet (con el proyecto de Space X). ¿Qué tecnología de comunicaciones utilizaría?",
        "respuestas": [
          "RFID (LF)",
          "LoraWan",
          "Sigfox",
          "Zigbee"
        ],
        "correcta": "LoraWan"
      },
      {
        "pregunta": "¿Qué tecnología le proporciona mayor ancho de banda?",
        "respuestas": [
          "RFID (LF)",
          "LoraWan",
          "Sigfox",
          "Zigbee"
        ],
        "correcta": "Zigbee"
      },
      {
        "pregunta": "Una vez desplegado un proyecto ¿Qué tecnología, sí o sí, tiene que pagar por su uso?",
        "respuestas": [
          "RFID (LF)",
          "LoraWan",
          "Sigfox",
          "Zigbee"
        ],
        "correcta": "Sigfox"
      },
      {
        "pregunta": "¿Qué tecnología se clasifica como Wireless Personal Area Network? (WPAN) (2)",
        "respuestas": [
          "Bluetooth",
          "LoRaWan",
          "802.11 a/n/g",
          "LTE"
        ],
        "correcta": "Bluetooth y 802.11 a/n/g"
      },
      {
        "pregunta": "¿Qué tecnología se clasifica como Wireless Wide Area Network? (WWAN)",
        "respuestas": [
          "Bluetooth",
          "LoRaWan",
          "802.11 a/n/g",
          "LTE"
        ],
        "correcta": "LTE"
      },
      {
        "pregunta": "¿Una señal portadora en la banda de qué frecuencia tiene menor atenuación?",
        "respuestas": [
          "433MHz",
          "868MHz",
          "2.4GHz",
          "Todas tienen la misma atenuación"
        ],
        "correcta": "433MHz"
      },
      {
        "pregunta": "¿Una señal portadora en la banda de qué frecuencia tiene mayor ancho de banda?",
        "respuestas": [
          "433MHz",
          "868MHz",
          "2.4GHz",
          "Todas tienen el mismo ancho de banda"
        ],
        "correcta": "2.4GHz"
      },
      {
        "pregunta": "Según Shannon, ¿usted puede reducir el ruido de un entorno a 0 para aumentar la capacidad teórica de un canal?",
        "respuestas": [
          "Verdadero",
          "Falso"
        ],
        "correcta": "Falso"
      },
      {
        "pregunta": "Una antena isotrópica: (2)",
        "respuestas": [
          "es un punto",
          "emite en todas la direcciones con la misma potencia",
          "es un modelo teórico",
          "todas las afirmaciones anteriores son verdaderas"
        ],
        "correcta": "todas las afirmaciones anteriores son verdaderas"
      },
      {
        "pregunta": "Si emito a 30 mW, ¿cuántos dBm son?",
        "respuestas": [
          "10*log(30/1mW)",
          "log(30/1mW)",
          "10*log(0.030/1mW)",
          "log(0.030/1mW)"
        ],
        "correcta": "10*log(30/1mW)"
      },
      {
        "pregunta": "En Europa la potencia máxima de transmisión",
        "respuestas": [
          "Está regulada para cada frecuencia",
          "No está regulada, es la frecuencia lo que está regulado."
        ],
        "correcta": "Está regulada para cada frecuencia"
      },
      {
        "pregunta": "Si queremos emitir al doble de potencia, tenemos que poner una antena con una ganancia de:",
        "respuestas": [
          "6dB",
          "3dB",
          "-3dB",
          "-6dB"
        ],
        "correcta": "3dB"
      },
      {
        "pregunta": "Una señal, se propaga siguiendo la superficie de la tierra si:(2)",
        "respuestas": [
          "su frecuencia está por debajo de 2MHz",
          "su frecuencia está por debajo de 30MHz",
          "su frecuencia está por debajo de 2.4GHz",
          "su frecuencia está por debajo de 5GHz"
        ],
        "correcta": "su frecuencia está por debajo de 2MHz"
      },
      {
        "pregunta": "La potencia mínima recibida a la cual, el receptor inalámbrico es capaz de detectar la señal y recibir satisfactoriamente los datos:",
        "respuestas": [
          "Eso es la ganancia del receptor",
          "Eso es el EIRP del receptor",
          "Eso es la sensibilidad del receptor"
        ],
        "correcta": "Eso es la sensibilidad del receptor"
      },
      {
        "pregunta": "La zona de Fresnel depende de:",
        "respuestas": [
          "La distancia entre emisor y receptor",
          "La potencia de emisión de la señal",
          "La ganancia de las antenas",
          "La distancia entre emisor y receptor y la frecuencia de la señal"
        ],
        "correcta": "La distancia entre emisor y receptor y la frecuencia de la señal"
      },
      {
        "pregunta": "La legislación limita el Duty Cycle o ciclo de trabajo de un nodo en una tecnología inalámbrica para: (2)",
        "respuestas": [
          "Alargar el tiempo de vida de un nodo inalámbrico.",
          "Limitar la capacidad de transmisión en bits por segundo de un nodo.",
          "Evitar que un nodo se apropie de un canal en una frecuencia de forma indefinida.",
          "Aumentar la capacidad de las pasarelas para atender a muchos nodos."
        ],
        "correcta": "Evitar que un nodo se apropie de un canal en una frecuencia de forma indefinida."
      },
      {
        "pregunta": "En LoRaWan, ¿qué clase de dispositivos de la especificación implementan las pasarelas?",
        "respuestas": [
          "Dispositivos clase A",
          "Dispositivos clase B",
          "Dispositivos clase C",
          "Reduced Function Device"
        ],
        "correcta": "Dispositivos clase C"
      },
      {
        "pregunta": "¿Qué canales del estándar 802.15.4 no se pueden usar en Europa de forma libre?",
        "respuestas": [
          "Canal 0",
          "Canal 1-10",
          "Canal 11-26"
        ],
        "correcta": "Canal 1-10"
      },
      {
        "pregunta": "La máxima capacidad teórica, según Shannon, en bits por segundo de una tecnología inalámbrica depende directamente del:",
        "respuestas": [
          "El duty cycle o ciclo de trabajo.",
          "La frecuencia de transmisión",
          "Relación Señal/Ruido",
          "Ninguna de las anteriores influye."
        ],
        "correcta": "Relación Señal/Ruido"
      },
      {
        "pregunta": "La ganancia de una antena:",
        "respuestas": [
          "Es equivalente al patrón de radiación o EIRP",
          "Es equivalente a la potencia emitida en una dirección en comparación con la antena isotrópica",
          "tiene la misma potencia en todas las direcciones",
          "Las tres respuestas anteriores son correctas."
        ],
        "correcta": "Es equivalente a la potencia emitida en una dirección en comparación con la antena isotrópica"
      },
      {
        "pregunta": "Las comunicaciones electromagnéticas solo son posibles en línea de visión directa:",
        "respuestas": [
          "Por debajo de 2 MHz",
          "Por debajo de 1 MHz",
          "Entre 2MHz y 30 MHz",
          "Por encima de 30 MHz"
        ],
        "correcta": "Por encima de 30 MHz"
      },
      {
        "pregunta": "Con la misma potencia de transmisión y exactamente el mismo equipamiento (ganancia de antena, pérdida del cable, etc.), ¿Cuál de las siguientes transmisiones llega más lejos en distancia?",
        "respuestas": [
          "433 MHz",
          "868 MHz",
          "2.4 GHz",
          "La frecuencia no influye, llegan lo mismo."
        ],
        "correcta": "433 MHz"
      },
      {
        "pregunta": "Señale aquella afirmación cierta con respecto a las comunicaciones inalámbricas",
        "respuestas": [
          "Para un nodo inalámbrico, el rango de comunicación efectivo es igual al rango en el cual un nodo provoca interferencias.",
          "En una topología ad-hoc, un nodo central coordina todas las comunicaciones.",
          "En una topología celular, unas celdas pequeñas permiten, generalmente, atender a más usuarios de forma simultánea.",
          "En una topología celular, unas celdas más grandes permiten, generalmente, atender a más usuarios de forma simultánea."
        ],
        "correcta": "En una topología celular, unas celdas pequeñas permiten, generalmente, atender a más usuarios de forma simultánea."
      },
      {
        "pregunta": "Señale la opción cierta, AODV es un algoritmo de enrutado para redes ad-hoc que:",
        "respuestas": [
          "es reactivo",
          "descubre las rutas entre nodos cuando son necesarias",
          "es un estándar RFC",
          "todas las afirmaciones anteriores son ciertas."
        ],
        "correcta": "todas las afirmaciones anteriores son ciertas."
      },
      {
        "pregunta": "¿Qué tecnología se usa para etiquetar animales?",
        "respuestas": [
          "Bluetooth",
          "LoraWan",
          "Sigfox",
          "RFID"
        ],
        "correcta": "RFID"
      },
      {
        "pregunta": "La legislación limita el Duty Cycle o ciclo de trabajo de un nodo en una tecnología inalámbrica para:",
        "respuestas": [
          "Alargar el tiempo de vida de un nodo inalámbrico.",
          "Limitar la capacidad de transmisión en bits por segundo de un nodo.",
          "Evitar que un nodo provoque interferencias en una frecuencia de forma indefinida.",
          "Aumentar la capacidad de las pasarelas para atender a muchos nodos."
        ],
        "correcta": "Evitar que un nodo provoque interferencias en una frecuencia de forma indefinida."
      },
      {
        "pregunta": "¿Qué tecnología tiene un mayor ancho de banda y, generalmente, tiene un alcance menor en cuanto al rango de comunicaciones?",
        "respuestas": [
          "LoraWan",
          "Sigfox",
          "802.15.4",
          ""
        ],
        "correcta": "802.15.4"
      },
      {
        "pregunta": "Señale la afirmación correcta:",
        "respuestas": [
          "LoraWan y Sigfox están diseñadas para el mismo tipo de aplicaciones",
          "Sigfox me permite crear y gestionar mi propia red",
          "LoraWan es de pago por suscripción siguiendo el mismo modelo que las redes de telefonía",
          "Ninguna de las afirmaciones anteriores es correcta"
        ],
        "correcta": "Ninguna de las afirmaciones anteriores es correcta"
      }, 
      {
        "pregunta": "En LoraWan, ¿qué clase de dispositivos está orientado para consumir menos energía?",
        "respuestas": [
          "Dispositivos clase A",
          "Dispositivos clase B",
          "Dispositivos clase C",
          "Reduced Function Device"
        ],
        "correcta": "Dispositivos clase A"
      },
      {
        "pregunta": "Para una distancia de 1 km y una frecuencia de 2.4GHz, se produce una pérdida de:",
        "respuestas": [
          "-100 dB",
          "-40 dB",
          "-160 dB",
          "-20 dB"
        ],
        "correcta": "-40 dB"
      },
      {
        "pregunta": "La zona de fresnel depende de:",
        "respuestas": [
          "La distancia y la frecuencia",
          "solo de la distancia",
          "solo de la frecuencia",
          "solo de la relación señal/ruido"
        ],
        "correcta": "La distancia y la frecuencia"
      },
      {
        "pregunta": "La atenuación al atravesar cualquier material es mayor:",
        "respuestas": [
          "A mayor frecuencia de la señal",
          "A menor frecuencia de la señal",
          "no depende de la frecuencia"
        ],
        "correcta": "A mayor frecuencia de la señal"
      },
      {
        "pregunta": "En una red celular, toda comunicación pasa por la estación base:",
        "respuestas": [
          "Si, siempre",
          "Solo si los nodos que se comunican están en celdas distintas",
          "No, nunca."
        ],
        "correcta": "Solo si los nodos que se comunican están en celdas distintas"
      },
      {
        "pregunta": "¿Qué significa que una antena tiene una ganancia de 2dBi?",
        "respuestas": [
          "La antena mejora en 2 decibelios la señal recibida/enviada",
          "La antena mejora en 2 decibelios la señal recibida/enviada en comparación con la antena isotrópica (por eso la i)",
          "La antena emite en miliwatios el doble de la señal recibida/enviada",
          "La antena emite al doble de la señal recibida/enviada"
        ],
        "correcta": "La antena mejora en 2 decibelios la señal recibida/enviada en comparación con la antena isotrópica (por eso la i)"
      },
      {
        "pregunta": "En 802.15.4, una petición de asociación a la red, se emite mediante:",
        "respuestas": [
          "un frame de datos",
          "un frame de comandos",
          "un frame tipo beacon",
          "un SMS"
        ],
        "correcta": "un frame tipo beacon"
      },
      {
        "pregunta": "Con la misma potencia de transmisión y exactamente el mismo equipamiento (ganancia de antena, pérdida del cable, etc.), ¿Cuál de las siguientes frecuencias tendría mayor tasa de transmisión de bits/segundo?",
        "respuestas": [
          "433 MHz",
          "868 MHz",
          "2.4 GHz",
          "La frecuencia no influye, tendrían la misma capacidad de transmisión."
        ],
        "correcta": "2.4 GHz"
      },
      {
        "pregunta": "Su modem inalámbrico que emite a 75mW lo conectamos a una antena con una ganancia de 3dB, aproximadamente ¿cuál es la potencia de transmisión?",
        "respuestas": [
          "225 mW",
          "750 mW",
          "150mW",
          "75mW"
        ],
        "correcta": "150mW"
      },
      {
        "pregunta": "¿Cuál de las siguientes tecnologías es considerada una WLAN?",
        "respuestas": [
          "802.11",
          "802.15.4",
          "LoraWan",
          "Sigfox"
        ],
        "correcta": "802.11"
      },
      {
        "pregunta": "La tecnología LoRaWan es una red del tipo:",
        "respuestas": [
          "Low Power Wireless Area Network (LPWAN)",
          "Wireless Local Area Network (WLAN)",
          "Wireless Wide Area Network (WWAN)",
          "Global networks."
        ],
        "correcta": "Low Power Wireless Area Network (LPWAN)"
      },
      {
        "pregunta": "La tecnología 802.11a es una red del tipo:",
        "respuestas": [
          "Low Power Wireless Area Network (LPWAN)",
          "Wireless Local Area Network (WLAN)",
          "Wireless Wide Area Network (WWAN)",
          "Global networks."
        ],
        "correcta": "Wireless Local Area Network (WLAN)"
      },
      {
        "pregunta": "La tecnología SigFox es una red del tipo:",
        "respuestas": [
          "Low Power Wireless Area Network (LPWAN)",
          "Wireless Local Area Network (WLAN)",
          "Wireless Wide Area Network (WWAN)",
          "Global networks."
        ],
        "correcta": "Low Power Wireless Area Network (LPWAN)"
      },
      {
        "pregunta": "La tecnología GPS es una red del tipo:",
        "respuestas": [
          "Low Power Wireless Area Network (LPWAN)",
          "Wireless Local Area Network (WLAN)",
          "Wireless Wide Area Network (WWAN)",
          "Global networks."
        ],
        "correcta": "Global networks."
      },
      {
        "pregunta": "Según Shannon, la máxima capacidad de un canal inalámbrico depende de:",
        "respuestas": [
          "El ancho de banda",
          "El ancho de banda y la intensidad de la señal transmitida",
          "El ancho de banda, la intensidad de la señal transmitida y el ruido",
          "El ancho de banda y el ruido"
        ],
        "correcta": "El ancho de banda, la intensidad de la señal transmitida y el ruido"
      },
      {
        "pregunta": "En 2.4 GHz, la potencia de emisión en Europa está limitado a:",
        "respuestas": [
          "100 mW",
          "200 mW",
          "5GHz",
          "65 dBm"
        ],
        "correcta": "100 mW"
      },
      {
        "pregunta": "Una sensibilidad -90dBm de una interfaz inalámbrica es mejor que una sensibilidad de -40 dBm",
        "respuestas": [
          "Verdadero",
          "Falso"
        ],
        "correcta": "Falso"
      },
      {
        "pregunta": "Necesita de línea de visión directa si la señal de transmisión está:",
        "respuestas": [
          "Por debajo de 2 MHz",
          "Entre 2 y 30 MHz",
          "Por encima de 30MHz",
          "Por encima de 2.4GHz"
        ],
        "correcta": "Por encima de 30MHz"
      },
      {
        "pregunta": "En un radio enlace de 2 km, ¿qué señal perdería menos potencia de señal (dB)?",
        "respuestas": [
          "800 MHz",
          "2400 MHz",
          "5000 MHz",
          "Perderían exactamente la misma potencia de señal (en dB)"
        ],
        "correcta": "800 MHz"
      },
      {
        "pregunta": "En la pregunta anterior, ¿qué señal tendría un radio menor de la zona de Fresnel?",
        "respuestas": [
          "800 MHz",
          "2400 MHz",
          "5000 MHz",
          "Tendrían exactamente el mismo radio"
        ],
        "correcta": "800 MHz"
      },
      {
        "pregunta": "El ciclo de trabajo o Duty Cycle es:",
        "respuestas": [
          "porcentaje del tiempo que un nodo puede estar transmitiendo",
          "porcentaje del tiempo que un nodo puede estar recibiendo",
          "10% en Europa",
          "Todas las anteriores."
        ],
        "correcta": "porcentaje del tiempo que un nodo puede estar transmitiendo"
      },
      {
        "pregunta": "¿Qué frecuencias puede trabajar 802.15.4?",
        "respuestas": [
          "868 MHz",
          "902 MHz",
          "2.4 GHz",
          "Puede trabajar en cualquiera de las anteriores frecuencias."
        ],
        "correcta": "Puede trabajar en cualquiera de las anteriores frecuencias."
      },
      {
        "pregunta": "¿Qué tipo de etiquetas en RFID tienen baterías?",
        "respuestas": [
          "Activas",
          "Pasivas",
          "Ambas",
          "Ninguna"
        ],
        "correcta": "Activas"
      },
      {
        "pregunta": "En LoraWan, ¿qué tipos de dispositivos son bidireccionales?",
        "respuestas": [
          "Clase A",
          "Clase B",
          "Clase C",
          "Todos son bidireccionales"
        ],
        "correcta": "Todos son bidireccionales"
      },
      {
        "pregunta": "¿Qué elementos son clave a la hora de decidir qué tecnología elijo para un proyecto IoT?",
        "respuestas": [
          "Ancho de banda",
          "Si los nodos están conectados a una batería o a la corriente eléctrica",
          "Número de nodos.",
          "Todas las características anteriores son relevantes."
        ],
        "correcta": "Todas las características anteriores son relevantes."
      },
      {
        "pregunta": "El algoritmo AODV es un ejemplo de algoritmo:",
        "respuestas": [
          "Reactivo",
          "Proactivo",
          "Basado en el algoritmo de estado del enlace en internet.",
          "Híbrido."
        ],
        "correcta": "Reactivo"
      },
      {
        "pregunta": "Cual de las siguientes tecnologías requiere de licencia, es decir, no trabaja en frecuencias libres:",
        "respuestas": [
          "LoRaWAN",
          "802.15.4",
          "NB-IoT",
          "RFID"
        ],
        "correcta": "NB-IoT"
      },
      {
        "pregunta": "¿Qué notación usamos para expresar una comparativa de potencia expresada en miliWatios?",
        "respuestas": [
          "dB",
          "dBm",
          "dBi",
          "W"
        ],
        "correcta": "dBm"
      },
      {
        "pregunta": "¿Qué red es más estable y tiene unos costes más grandes de implantación?",
        "respuestas": [
          "Celular",
          "Ad-hoc",
          "Mesh",
          "Todas son igual de estables y tienen los mismos costes de instalación"
        ],
        "correcta": "Celular"
      },
      {
        "pregunta": "¿Qué tecnología no te permite establecer una red mesh?",
        "respuestas": [
          "NB-IoT",
          "LoraWan",
          "Bluetooth",
          "Sigfox"
        ],
        "correcta": "Sigfox"
      },
      {
        "pregunta": "¿Cuál de las siguientes tecnologías es utilizada para la comunicación en redes ad-hoc?",
        "respuestas": ["LoRaWAN", "Bluetooth", "Sigfox", "ZigBee"],
        "correcta": "Bluetooth"
      },
      {
        "pregunta": "¿Cuál de las siguientes frecuencias no es utilizada por las tecnologías RFID?",
        "respuestas": ["125-134 kHz", "2.4 GHz", "5.8 GHz", "900 MHz"],
        "correcta": "5.8 GHz"
      },
      {
        "pregunta": "¿Cuál de las siguientes tecnologías permite realizar redes mesh inalámbricas?",
        "respuestas": ["NB-IoT", "Wi-Fi", "Bluetooth", "Sigfox"],
        "correcta": "Wi-Fi"
      },
      {
        "pregunta": "¿Cuál de las siguientes es una característica de las redes celulares?",
        "respuestas": ["Infraestructura fija", "Despliegue rápido", "Topología dinámica", "Sin necesidad de estaciones base"],
        "correcta": "Infraestructura fija"
      },
      {
        "pregunta": "En las redes ad-hoc, ¿qué tipo de enrutamiento utilizan los nodos?",
        "respuestas": ["Centralizado", "Distribuido", "Híbrido", "No enrutamiento"],
        "correcta": "Distribuido"
      },
      {
        "pregunta": "¿Qué tecnología de red se caracteriza por tener una gran capacidad de cobertura y baja velocidad de transmisión?",
        "respuestas": ["Sigfox", "LoRaWAN", "Wi-Fi", "NB-IoT"],
        "correcta": "LoRaWAN"
      },
      {
        "pregunta": "¿Cuál de las siguientes no es una característica de las redes ad-hoc?",
        "respuestas": ["No necesitan infraestructura", "Todos los dispositivos son iguales", "Pueden tener topologías dinámicas", "El enrutamiento es centralizado"],
        "correcta": "El enrutamiento es centralizado"
      },
      {
        "pregunta": "¿Qué protocolo de enrutamiento es reactivo y no mantiene una tabla de rutas de forma continua?",
        "respuestas": ["AODV", "OLSR", "RIP", "OSPF"],
        "correcta": "AODV"
      },
      {
        "pregunta": "¿Cuál de las siguientes frecuencias es utilizada en las redes LoRaWAN?",
        "respuestas": ["13.56 MHz", "2.4 GHz", "868 MHz", "5.8 GHz"],
        "correcta": "868 MHz"
      },
      {
        "pregunta": "¿Cuál es la principal ventaja de la tecnología NB-IoT?",
        "respuestas": ["Alta velocidad de datos", "Baja potencia y larga duración de la batería", "Cobertura limitada", "Alta capacidad de red"],
        "correcta": "Baja potencia y larga duración de la batería"
      },
      {
        "pregunta": "¿Qué tipo de antena emite energía electromagnética en todas las direcciones con la misma potencia?",
        "respuestas": ["Antena direccional", "Antena isotrópica", "Antena parabólica", "Antena de microondas"],
        "correcta": "Antena isotrópica"
      },
      {
        "pregunta": "¿Qué factor determina el tamaño de una celda en una red celular?",
        "respuestas": ["Número de usuarios", "Distancia entre estaciones base", "Uso del servicio", "Frecuencia de la señal"],
        "correcta": "Número de usuarios"
      },
      {
        "pregunta": "¿Cuál es la principal característica de una red mesh?",
        "respuestas": ["Cada nodo se conecta a un solo punto de acceso", "Todos los nodos actúan como puntos de acceso y retransmisores", "Cada nodo se conecta a un servidor central", "No hay necesidad de coordinación entre nodos"],
        "correcta": "Todos los nodos actúan como puntos de acceso y retransmisores"
      },
      {
        "pregunta": "¿Qué tecnología es conocida por su bajo costo y largo alcance en redes IoT?",
        "respuestas": ["Wi-Fi", "ZigBee", "LoRaWAN", "NB-IoT"],
        "correcta": "LoRaWAN"
      },
      {
        "pregunta": "En una red ad-hoc, ¿qué problema puede surgir debido a la limitada cobertura de los nodos?",
        "respuestas": ["Interferencias", "Problemas de enrutamiento", "Despliegue rápido", "Alta capacidad de ancho de banda"],
        "correcta": "Problemas de enrutamiento"
      },
      {
        "pregunta": "¿Cuál de los siguientes protocolos de enrutamiento es utilizado en redes MANET?",
        "respuestas": ["AODV", "OSPF", "RIP", "BGP"],
        "correcta": "AODV"
      },
      {
        "pregunta": "¿Qué red utiliza un enfoque de comunicación bidireccional con baja potencia para aplicaciones IoT?",
        "respuestas": ["LoRaWAN", "Wi-Fi", "Bluetooth", "ZigBee"],
        "correcta": "LoRaWAN"
      },
      {
        "pregunta": "¿Qué tecnología de red celular tiene la ventaja de utilizar la infraestructura previamente instalada de redes 2G, 3G y 4G?",
        "respuestas": ["NB-IoT", "LoRaWAN", "Sigfox", "Wi-Fi"],
        "correcta": "NB-IoT"
      },
      {
        "pregunta": "¿Qué tipo de red es adecuada para entornos con movilidad, como vehículos?",
        "respuestas": ["MANET", "VANET", "Wi-Fi", "Bluetooth"],
        "correcta": "VANET"
      },
      {
        "pregunta": "¿Cuál de las siguientes opciones describe mejor las redes ad-hoc?",
        "respuestas": ["Son fáciles de desplegar, pero tienen problemas de enrutamiento y alta interferencia", "Son redes centralizadas con control de nodos", "Son redes con alta eficiencia y baja latencia", "Requieren una infraestructura fija para su funcionamiento"],
        "correcta": "Son fáciles de desplegar, pero tienen problemas de enrutamiento y alta interferencia"
      },
      {
        "pregunta": "¿Qué topología requiere que todos los dispositivos estén en el mismo canal de comunicación?",
        "respuestas": ["Celular", "Mesh", "Ad-hoc", "Estrella"],
        "correcta": "Ad-hoc"
      },
      {
        "pregunta": "¿Cuál es el principal problema de las redes ad-hoc cuando hay muchos nodos?",
        "respuestas": ["Alta velocidad", "Red estable", "Interferencias", "Fácil configuración"],
        "correcta": "Interferencias"
      },
      {
        "pregunta": "¿Qué tecnología LPWAN es de código abierto y permite crear una red propia?",
        "respuestas": ["Sigfox", "NB-IoT", "LoRaWAN", "ZigBee"],
        "correcta": "LoRaWAN"
      },
      {
        "pregunta": "¿Qué característica tiene la antena parabólica en comparación con la omnidireccional?",
        "respuestas": ["Menor ganancia", "Mayor alcance en una dirección", "Menor consumo", "Mismo patrón de radiación"],
        "correcta": "Mayor alcance en una dirección"
      },
      {
        "pregunta": "¿Cuál de las siguientes tecnologías permite el uso de 'sleep mode' para ahorrar batería?",
        "respuestas": ["Ethernet", "LoRaWAN", "Wi-Fi convencional", "USB"],
        "correcta": "LoRaWAN"
      },
      {
        "pregunta": "¿Cuál es la unidad que se usa para medir la sensibilidad de un receptor?",
        "respuestas": ["dBm", "Hz", "GHz", "W"],
        "correcta": "dBm"
      },
      {
        "pregunta": "¿Qué protocolo utiliza el mecanismo de RTS/CTS para evitar colisiones?",
        "respuestas": ["TDMA", "CSMA/CA", "AODV", "LoRaWAN"],
        "correcta": "CSMA/CA"
      },
      {
        "pregunta": "¿Qué red es más adecuada para un despliegue rápido en una zona sin cobertura?",
        "respuestas": ["Celular", "Ad-hoc", "WLAN", "Ethernet"],
        "correcta": "Ad-hoc"
      },
      {
        "pregunta": "¿Cuál de las siguientes tecnologías permite movilidad entre celdas con cambio automático de conexión?",
        "respuestas": ["Bluetooth", "Wi-Fi", "Celular (LTE)", "ZigBee"],
        "correcta": "Celular (LTE)"
      },
      {
        "pregunta": "¿Qué factor afecta directamente al throughput en una red ad-hoc?",
        "respuestas": ["Número de celdas", "Tamaño del cable", "Densidad de nodos", "Velocidad del ventilador"],
        "correcta": "Densidad de nodos"
      },
      {
        "pregunta": "¿Cuál de los siguientes dispositivos tiene un rol pasivo en una comunicación RFID?",
        "respuestas": ["Lector", "Tag activo", "Tag pasivo", "Gateway"],
        "correcta": "Tag pasivo"
      },
      {
        "pregunta": "¿Qué frecuencia utiliza la tecnología Bluetooth clásica?",
        "respuestas": ["2.4 GHz", "868 MHz", "13.56 MHz", "5 GHz"],
        "correcta": "2.4 GHz"
      },
      {
        "pregunta": "¿Qué componente traduce señales analógicas en digitales en un nodo IoT?",
        "respuestas": ["Modem", "Conversor A/D", "MCU", "Antena"],
        "correcta": "Conversor A/D"
      },
      {
        "pregunta": "¿Qué elemento influye directamente en la ganancia de una antena?",
        "respuestas": ["Longitud del cable", "Dirección de radiación", "Color de la carcasa", "Voltaje de entrada"],
        "correcta": "Dirección de radiación"
      },
      {
        "pregunta": "¿Qué tecnología puede tener dispositivos clase A, B y C según su forma de comunicación?",
        "respuestas": ["Sigfox", "Bluetooth", "NB-IoT", "LoRaWAN"],
        "correcta": "LoRaWAN"
      },
      {
        "pregunta": "¿Cuál es el máximo tamaño de mensaje en Sigfox para el usuario?",
        "respuestas": ["8 bytes", "12 bytes", "26 bytes", "222 bytes"],
        "correcta": "12 bytes"
      },
      {
        "pregunta": "¿Qué tecnología soporta comunicación indirecta para ahorrar energía?",
        "respuestas": ["Ethernet", "Bluetooth", "802.15.4", "Wi-Fi"],
        "correcta": "802.15.4"
      },
      {
        "pregunta": "¿Qué tipo de nodo en 802.15.4 puede actuar como coordinador?",
        "respuestas": ["RFD", "FFD", "AP", "Client"],
        "correcta": "FFD"
      },
      {
        "pregunta": "¿Qué tipo de red permite que un nodo se comunique directamente con otro sin pasar por infraestructura?",
        "respuestas": ["Celular", "Mesh", "Ad-hoc", "LAN tradicional"],
        "correcta": "Ad-hoc"
      },
      {
        "pregunta": "¿Qué estándar define las capas física y MAC de las WPAN de bajo consumo?",
        "respuestas": ["802.11", "802.15.4", "802.3", "802.16"],
        "correcta": "802.15.4"
      }
    ]
  };

  preguntasActuales: any[] = [];
  preguntasPaginadas: any[] = []; // Preguntas en la página actual
  testFinalizado: boolean = false;
  respuestasUsuario: string[] = []; // Respuestas seleccionadas por el usuario.

  // Paginación
  paginaActual: number = 0;
  preguntasPorPagina: number = 10;
  paginaComprobada: boolean = false; // Para controlar si ya se comprobó la página

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService
  ) {
    this.cargarPreguntasCompletas();
  }

  /**
   * Cargar todas las preguntas de todos los temas y mezclarlas.
   */
  cargarPreguntasCompletas() {
    const preguntas = [
      ...this.temas["Preguntas"],
    ];
    this.preguntasActuales = this.shuffleArray(preguntas);

    this.preguntasActuales.forEach((pregunta) => {
      pregunta.respuestas = this.shuffleArray(pregunta.respuestas);
    });

    this.respuestasUsuario = new Array(this.preguntasActuales.length).fill(null);
    this.testFinalizado = false;

    this.actualizarPreguntasPaginadas();
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

  /**
   * Barajar un array aleatoriamente.
   */
  shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
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
   * Volver a la página anterior.
   */
  goBack() {
    this.router.navigate(['/ssii']);
  }

   /**
   * Comprobar las respuestas solo de la página actual.
   */
   comprobarPagina() {
    this.preguntasPaginadas.forEach((pregunta) => {
      if (pregunta.seleccionada === pregunta.correcta) {
        pregunta.mensajeRespuesta = [
          { severity: 'success', summary: 'Correcto', detail: `La respuesta seleccionada es correcta.` }
        ];
      } else {
        pregunta.mensajeRespuesta = [
          { severity: 'error', summary: 'Respuesta correcta:', detail: `${pregunta.correcta}` }
        ];
      }
    });

    this.paginaComprobada = true;
  }

}