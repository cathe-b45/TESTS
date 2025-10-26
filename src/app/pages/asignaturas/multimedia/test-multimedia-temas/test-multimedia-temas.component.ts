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
        "pregunta": "¿Qué es multimedia?",
        "respuestas": [
          "La combinación de únicamente audio y texto",
          "La integración de varios tipos de datos como texto, imagen, audio y vídeo",
          "Un sistema basado solo en imágenes",
          "Un método para imprimir documentos"
        ],
        "correcta": "La integración de varios tipos de datos como texto, imagen, audio y vídeo",
        "explicacion": "Multimedia integra múltiples tipos de información digital como texto, imagen, audio y vídeo."
      },
      {
        "pregunta": "¿Qué es hipermedia?",
        "respuestas": [
          "Un sistema que solo usa hipertexto",
          "La combinación de hipertexto con multimedia",
          "Un formato exclusivo de audio",
          "Una técnica de reproducción de vídeo"
        ],
        "correcta": "La combinación de hipertexto con multimedia",
        "explicacion": "La hipermedia surge al combinar hipertexto con contenido multimedia interactivo."
      },
      {
        "pregunta": "¿Quién propuso el concepto de Memex?",
        "respuestas": [
          "Tim Berners-Lee",
          "Vannevar Bush",
          "Claude Shannon",
          "Alan Turing"
        ],
        "correcta": "Vannevar Bush",
        "explicacion": "Vannevar Bush definió el concepto Memex en 1945 como precursor del hipertexto."
      },
      {
        "pregunta": "¿Qué elemento caracteriza al hipertexto?",
        "respuestas": [
          "Linealidad",
          "Navegación mediante enlaces",
          "Señales analógicas",
          "Compresión sin pérdidas"
        ],
        "correcta": "Navegación mediante enlaces",
        "explicacion": "El hipertexto se organiza en nodos conectados mediante enlaces."
      },
      {
        "pregunta": "¿Qué formato de señal utiliza la televisión analógica?",
        "respuestas": [
          "Señales digitales discretas",
          "Señales analógicas continuas",
          "Bitstreams cuantificados",
          "Submuestreo 4:2:0"
        ],
        "correcta": "Señales analógicas continuas",
        "explicacion": "Los sistemas tradicionales como la TV analógica transmiten señales continuas."
      },
      {
        "pregunta": "¿Por qué se pasó de lo analógico a lo digital?",
        "respuestas": [
          "Las señales digitales se degradan más",
          "Las señales digitales permiten control, procesamiento y almacenamiento eficiente",
          "Las señales digitales requieren mayor ancho de banda",
          "No existían alternativas"
        ],
        "correcta": "Las señales digitales permiten control, procesamiento y almacenamiento eficiente",
        "explicacion": "Lo digital facilita control, compresión, almacenamiento y transmisión."
      },
      {
        "pregunta": "¿Qué describe el teorema de Nyquist?",
        "respuestas": [
          "El mínimo de bits necesarios para representar colores",
          "La tasa de muestreo mínima que debe ser dos veces el ancho de banda",
          "Cómo funciona la transformada DCT",
          "Cómo reconstruir imágenes en 3D"
        ],
        "correcta": "La tasa de muestreo mínima que debe ser dos veces el ancho de banda",
        "explicacion": "Nyquist establece que se requiere muestrear al doble del ancho de banda para reconstrucción perfecta."
      },
      {
        "pregunta": "¿Qué es cuantificación?",
        "respuestas": [
          "Asignación continua de valores infinitos",
          "Asignación de valores discretos aproximados a muestras",
          "Un método de sincronización de vídeo",
          "Segmentación de imágenes"
        ],
        "correcta": "Asignación de valores discretos aproximados a muestras",
        "explicacion": "La cuantificación aproxima valores continuos en niveles discretos produciendo error."
      },
      {
        "pregunta": "¿Qué determina el número de bits del cuantificador?",
        "respuestas": [
          "El tamaño del monitor",
          "El nivel de error permitido",
          "La frecuencia de refresco",
          "La resolución espacial"
        ],
        "correcta": "El nivel de error permitido",
        "explicacion": "A más bits, menor error de cuantificación."
      },
      {
        "pregunta": "¿Qué tipo de compresión utiliza JPEG?",
        "respuestas": [
          "Sin pérdida exclusivamente",
          "Con pérdida basada en percepción visual",
          "Solo RLE",
          "Compresión vectorial"
        ],
        "correcta": "Con pérdida basada en percepción visual",
        "explicacion": "JPEG elimina detalles poco perceptibles utilizando transformada DCT."
      },
      {
        "pregunta": "¿Qué parte del sistema multimedia combina texto, imagen, audio y vídeo?",
        "respuestas": [
          "Hipervínculo",
          "Multimedia",
          "Filtro digital",
          "Stream síncrono"
        ],
        "correcta": "Multimedia",
        "explicacion": "Multimedia integra diferentes medios digitales."
      },
      {
        "pregunta": "¿Qué condición diferencia hipermedia de multimedia?",
        "respuestas": [
          "Mayor resolución de vídeo",
          "La existencia de enlaces navegables",
          "Soporte analógico",
          "Menos consumo de memoria"
        ],
        "correcta": "La existencia de enlaces navegables",
        "explicacion": "Hipermedia añade navegación mediante enlaces respecto a multimedia."
      },
      {
        "pregunta": "¿Qué se necesita para evitar aliasing según Nyquist?",
        "respuestas": [
          "Muestrear al doble de la frecuencia máxima",
          "Cuantificar con 4 bits",
          "Reducir el bitrate",
          "Eliminar canales cromáticos"
        ],
        "correcta": "Muestrear al doble de la frecuencia máxima",
        "explicacion": "Nyquist establece una tasa mínima de muestreo 2B."
      },
      {
        "pregunta": "¿Qué son datos continuos?",
        "respuestas": [
          "Aquellos que no dependen del tiempo",
          "Aquellos que cambian con el tiempo",
          "Aquellos representados en ASCII",
          "Solo datos de texto"
        ],
        "correcta": "Aquellos que cambian con el tiempo",
        "explicacion": "Ejemplo: audio y vídeo cambian con el tiempo."
      },
      {
        "pregunta": "¿Qué tipo de dato se considera estático?",
        "respuestas": [
          "Vídeo",
          "Audio",
          "Imágenes fijas",
          "GIF animado"
        ],
        "correcta": "Imágenes fijas",
        "explicacion": "Los datos estáticos no dependen del tiempo."
      },
      {
        "pregunta": "¿Qué tipo de dato requiere sincronismo temporal?",
        "respuestas": [
          "Texto",
          "Imágenes JPEG",
          "Audio y vídeo",
          "Gráficos vectoriales"
        ],
        "correcta": "Audio y vídeo",
        "explicacion": "Los datos continuos dependen del tiempo."
      },
      {
        "pregunta": "¿Qué diferencia principal existe entre raster y vectorial?",
        "respuestas": [
          "La vectorial usa píxeles",
          "La raster no puede escalarse sin perder calidad",
          "La vectorial siempre tiene peor calidad",
          "La raster siempre utiliza curvas matemáticas"
        ],
        "correcta": "La raster no puede escalarse sin perder calidad",
        "explicacion": "Las imágenes vectoriales escalan sin pérdida."
      },
      {
        "pregunta": "¿Cuál es la unidad básica de una imagen raster?",
        "respuestas": [
          "Vértice",
          "Píxel",
          "Curva Bezier",
          "Transductor"
        ],
        "correcta": "Píxel",
        "explicacion": "Una imagen raster se basa en píxeles codificados."
      },
      {
        "pregunta": "¿Qué espacio de color utilizan las pantallas?",
        "respuestas": [
          "CMYK",
          "RGB",
          "XYZ",
          "HSV"
        ],
        "correcta": "RGB",
        "explicacion": "Los dispositivos emisivos operan en RGB."
      },
      {
        "pregunta": "¿Qué componente de color representa el brillo?",
        "respuestas": [
          "Cb",
          "Cr",
          "Y",
          "U"
        ],
        "correcta": "Y",
        "explicacion": "Y representa luminancia, asociada al brillo."
      },
      {
        "pregunta": "¿Qué formato submuestrea la crominancia en horizontal y vertical?",
        "respuestas": [
          "4:4:4",
          "4:2:2",
          "4:2:0",
          "4:1:1"
        ],
        "correcta": "4:2:0",
        "explicacion": "4:2:0 reduce crominancia en ambas direcciones."
      },
      {
        "pregunta": "¿Qué operación previa se aplica en JPEG sobre bloques?",
        "respuestas": [
          "Transformada Fourier",
          "Transformada Discreta del Coseno",
          "Transformada Laplace",
          "Convolución NN"
        ],
        "correcta": "Transformada Discreta del Coseno",
        "explicacion": "La DCT descompone la información en frecuencias."
      },
      {
        "pregunta": "¿Qué tipo de compresión aplica JPEG en versiones habituales?",
        "respuestas": [
          "Sin pérdida",
          "Con pérdida perceptiva",
          "Vectorial",
          "Entera por bloques"
        ],
        "correcta": "Con pérdida perceptiva",
        "explicacion": "JPEG elimina detalles menos perceptibles al ojo."
      },
      {
        "pregunta": "¿Qué frecuencia de muestreo utiliza audio CD?",
        "respuestas": [
          "8 kHz",
          "16 kHz",
          "32 kHz",
          "44.1 kHz"
        ],
        "correcta": "44.1 kHz",
        "explicacion": "44.1 kHz es el estándar de la industria."
      },
      {
        "pregunta": "¿Qué bit depth utiliza el audio CD?",
        "respuestas": [
          "8 bits",
          "12 bits",
          "16 bits",
          "20 bits"
        ],
        "correcta": "16 bits",
        "explicacion": "CD utiliza 16 bits por muestra."
      },
      {
        "pregunta": "¿Cómo se llama el efecto de imágenes parpadeando por refresco insuficiente?",
        "respuestas": [
          "Aliasing",
          "Flicker",
          "Blooming",
          "Ghosting"
        ],
        "correcta": "Flicker",
        "explicacion": "La retina necesita cierto refresco para continuidad visual."
      },
      {
        "pregunta": "¿Cuál es el mínimo recomendado para continuidad de movimiento en vídeo?",
        "respuestas": [
          "10 fps",
          "15 fps",
          "25 fps",
          "100 fps"
        ],
        "correcta": "25 fps",
        "explicacion": "Por debajo de 25 fps la percepción se ve afectada."
      },
      {
        "pregunta": "¿Qué estándar analógico usa 525 líneas a 30 fps?",
        "respuestas": [
          "PAL",
          "SECAM",
          "NTSC",
          "HDTV"
        ],
        "correcta": "NTSC",
        "explicacion": "NTSC se utiliza en USA y Japón."
      },
      {
        "pregunta": "¿Qué estándar usa 625 líneas a 25 fps?",
        "respuestas": [
          "NTSC",
          "PAL/SECAM",
          "SIF",
          "VHS"
        ],
        "correcta": "PAL/SECAM",
        "explicacion": "PAL es el estándar europeo."
      },
      {
        "pregunta": "¿Qué ventaja tiene el vídeo progresivo?",
        "respuestas": [
          "Menos datos",
          "Mayor nitidez en detalles",
          "Aspecto más fluido",
          "Compatible con B/N"
        ],
        "correcta": "Mayor nitidez en detalles",
        "explicacion": "El progresivo mantiene adyacencia espacial y temporal."
      },
      {
        "pregunta": "¿Cuál es el rango audible humano aproximado?",
        "respuestas": [
          "0 Hz - 10 kHz",
          "20 Hz - 20 kHz",
          "100 Hz - 40 kHz",
          "1 kHz - 60 kHz"
        ],
        "correcta": "20 Hz - 20 kHz",
        "explicacion": "Es el rango sensorial humano promedio."
      },
      {
        "pregunta": "¿Qué técnica codifica diferencias de color rojo y azul?",
        "respuestas": [
          "RGB",
          "YCbCr",
          "HSV",
          "CMYK"
        ],
        "correcta": "YCbCr",
        "explicacion": "Cb y Cr representan diferencias cromáticas."
      },
      {
        "pregunta": "¿Qué parámetro afecta principalmente a la percepción visual?",
        "respuestas": [
          "Resolución temporal",
          "Luminancia",
          "Frecuencia de cuantificación",
          "Impedancia"
        ],
        "correcta": "Luminancia",
        "explicacion": "El ojo detecta mejor variaciones de brillo."
      },
      {
        "pregunta": "¿Qué tipo de señal transmite valores continuos en amplitud?",
        "respuestas": [
          "Digital",
          "Analógica",
          "Discreta",
          "Cuantificada"
        ],
        "correcta": "Analógica",
        "explicacion": "Las señales analógicas tienen infinitos valores posibles."
      },
      {
        "pregunta": "¿Cuál de las siguientes NO es ventaja digital?",
        "respuestas": [
          "Procesamiento flexible",
          "Mayor precisión de control",
          "Menor ruido",
          "Degradación inevitable"
        ],
        "correcta": "Degradación inevitable",
        "explicacion": "Digital evita degradación acumulativa."
      },
      {
        "pregunta": "¿Qué unidad representa la resolución espacial en imagen?",
        "respuestas": [
          "Hz",
          "FPS",
          "Pixeles",
          "Decibelios"
        ],
        "correcta": "Pixeles",
        "explicacion": "La resolución se mide en el número de píxeles."
      },
      {
        "pregunta": "¿Qué métrica subjetiva recoge opinión humana?",
        "respuestas": [
          "PSNR",
          "MSE",
          "MOS",
          "SSIM"
        ],
        "correcta": "MOS",
        "explicacion": "MOS evalúa percepción de calidad mediante evaluación humana."
      },
      {
        "pregunta": "¿Qué índice se basa en estructuras visuales?",
        "respuestas": [
          "MSE",
          "PSNR",
          "SSIM",
          "EIF"
        ],
        "correcta": "SSIM",
        "explicacion": "SSIM compara estructuras perceptuales."
      },
      {
        "pregunta": "¿Qué compresión reduce redundancia espacial en imágenes?",
        "respuestas": [
          "JPEG",
          "MP3",
          "AAC",
          "AMR"
        ],
        "correcta": "JPEG",
        "explicacion": "JPEG aprovecha redundancias espaciales."
      },
      {
        "pregunta": "¿Qué componente indica pureza del color?",
        "respuestas": [
          "Tono",
          "Saturación",
          "Valor",
          "Gamma"
        ],
        "correcta": "Saturación",
        "explicacion": "La saturación mide pureza cromática."
      },
      {
        "pregunta": "¿Qué parámetro indica claridad de color?",
        "respuestas": [
          "Tono",
          "Valor",
          "Saturación",
          "Luma"
        ],
        "correcta": "Valor",
        "explicacion": "Valor define qué tan claro es un color."
      },
      {
        "pregunta": "¿Cómo se llama el fenómeno de ver movimiento continuo?",
        "respuestas": [
          "Persistencia retiniana",
          "Escaneo progresivo",
          "Cuantificación de fase",
          "Aliasing"
        ],
        "correcta": "Persistencia retiniana",
        "explicacion": "Es la base de percepción de movimiento en vídeo."
      },
      {
        "pregunta": "¿Qué estándar se emplea para vídeo digitalización analógica?",
        "respuestas": [
          "MPEG",
          "CCIR-601",
          "SMPTE-942",
          "Dolby Vision"
        ],
        "correcta": "CCIR-601",
        "explicacion": "Define parámetros de muestreo y líneas activas."
      },
      {
        "pregunta": "¿Qué formato es 3840 × 2160?",
        "respuestas": [
          "HD 720p",
          "Full HD",
          "Ultra HD 4K",
          "QCIF"
        ],
        "correcta": "Ultra HD 4K",
        "explicacion": "El formato UHD duplica resolución Full HD en ambos ejes."
      },
      {
        "pregunta": "¿Qué submuestreo mantiene crominancia completa?",
        "respuestas": [
          "4:4:4",
          "4:2:2",
          "4:2:0",
          "4:1:1"
        ],
        "correcta": "4:4:4",
        "explicacion": "En 4:4:4 todos los componentes tienen misma resolución."
      },
      {
        "pregunta": "¿Qué señal requiere menor tolerancia a jitter?",
        "respuestas": [
          "Audio en directo",
          "Texto HTML",
          "Imágenes PNG",
          "Fotografías TIFF"
        ],
        "correcta": "Audio en directo",
        "explicacion": "Variaciones temporales afectan mucho al audio."
      },
      {
        "pregunta": "¿Cuál es ejemplo de dato continuo?",
        "respuestas": [
          "Archivo PDF",
          "Clip de vídeo",
          "Documento DOC",
          "Página HTML"
        ],
        "correcta": "Clip de vídeo",
        "explicacion": "El vídeo evoluciona en el tiempo."
      },
      {
        "pregunta": "¿Qué protocolo inserta información en líneas no visibles?",
        "respuestas": [
          "Teletexto",
          "MPEG-TS",
          "DVB",
          "HDCP"
        ],
        "correcta": "Teletexto",
        "explicacion": "Teletexto se inserta durante retorno vertical en TV analógica."
      },
      {
        "pregunta": "¿Qué ventaja tiene la digitalización frente a analógica?",
        "respuestas": [
          "Mayor degradación acumulada",
          "Menos control",
          "Procesamiento flexible",
          "Mayor sensibilidad a ruido"
        ],
        "correcta": "Procesamiento flexible",
        "explicacion": "La representación discreta permite manipulación eficiente."
      },
      {
        "pregunta": "¿Qué modelo de compresión elimina frecuencias altas?",
        "respuestas": [
          "Transformada DCT",
          "LZW",
          "Shannon-Fano",
          "Burrows-Wheeler"
        ],
        "correcta": "Transformada DCT",
        "explicacion": "JPEG atenúa frecuencias altas al cuantificar."
      },
      {
        "pregunta": "¿Qué parámetro afecta percepción auditiva levemente?",
        "respuestas": [
          "Variaciones muy rápidas de milisegundos",
          "Movimientos lentos de volumen",
          "Cambios de brillo",
          "Resolución vertical"
        ],
        "correcta": "Variaciones muy rápidas de milisegundos",
        "explicacion": "El oído es muy sensible a cambios temporales cortos."
      },
      {
        "pregunta": "¿Qué parámetro se mide en decibelios?",
        "respuestas": [
          "Intensidad sonora",
          "Profundidad de color",
          "Latencia",
          "Frecuencia de cuadro"
        ],
        "correcta": "Intensidad sonora",
        "explicacion": "Los dB cuantifican la presión sonora relativa."
      },
      {
        "pregunta": "¿Qué representa Cb en YCbCr?",
        "respuestas": [
          "Diferencia de color azul",
          "Diferencia de color rojo",
          "Luminancia",
          "Pureza del verde"
        ],
        "correcta": "Diferencia de color azul",
        "explicacion": "Cb ≈ B - Y, crominancia azul."
      },
      {
        "pregunta": "¿Qué concepto permite vincular información entre nodos mediante enlaces?",
        "respuestas": ["Hipermedia", "Codificación", "Jitter", "Aliasing"],
        "correcta": "Hipermedia",
        "explicacion": "Hipermedia conecta nodos de información con enlaces navegables."
      },
      {
        "pregunta": "¿Qué dispositivo convierte sonido en señal eléctrica?",
        "respuestas": ["Altavoz", "Amplificador", "Micrófono", "Filtro"],
        "correcta": "Micrófono",
        "explicacion": "El micrófono transforma presiones acústicas en señales eléctricas."
      },
      {
        "pregunta": "¿Qué rango de decibelios representa el umbral del dolor?",
        "respuestas": ["20 dB", "60 dB", "100 dB", "120 dB"],
        "correcta": "120 dB",
        "explicacion": "Aproximadamente 120 dB es el umbral de dolor humano."
      },
      {
        "pregunta": "¿Qué formato usa 352x288 píxeles?",
        "respuestas": ["QCIF", "CIF", "4CIF", "16CIF"],
        "correcta": "CIF",
        "explicacion": "El formato CIF (Common Intermediate Format) define 352x288."
      },
      {
        "pregunta": "¿Qué modelo de color usa impresoras?",
        "respuestas": ["RGB", "YCbCr", "CMYK", "HSV"],
        "correcta": "CMYK",
        "explicacion": "Las impresoras combinan tintas cian, magenta, amarillo y negro."
      },
      {
        "pregunta": "¿Qué componente cromático representa diferencia roja?",
        "respuestas": ["Cr", "Cb", "Y", "Ca"],
        "correcta": "Cr",
        "explicacion": "Cr ≈ R – Y representa crominancia roja."
      },
      {
        "pregunta": "¿Qué técnica reduce flicker en vídeo analógico?",
        "respuestas": ["Submuestreo", "Cuantificación", "Barrido entrelazado", "Upscaling"],
        "correcta": "Barrido entrelazado",
        "explicacion": "El entrelazado refresca líneas alternadas para evitar parpadeo."
      },
      {
        "pregunta": "¿Qué estándar define parámetros de digitalización analógica?",
        "respuestas": ["CCIR-601", "MPEG-2", "HDR10", "Dolby Vision"],
        "correcta": "CCIR-601",
        "explicacion": "CCIR-601 normaliza muestreo, resolución y líneas activas."
      },
      {
        "pregunta": "¿Cuál es el ancho de banda aproximado del vídeo analógico?",
        "respuestas": ["1 MHz", "3 MHz", "6 MHz", "12 MHz"],
        "correcta": "6 MHz",
        "explicacion": "El vídeo analógico típico ocupa aproximadamente 6 MHz."
      },
      {
        "pregunta": "¿Qué formato progresivo ofrece menor fatiga visual?",
        "respuestas": ["Entre­lazado", "Progresivo", "Escalado", "Fogging"],
        "correcta": "Progresivo",
        "explicacion": "El progresivo mantiene coherencia temporal entre líneas."
      },
      {
        "pregunta": "¿Qué formato aumenta fluidez visual con menos detalle?",
        "respuestas": ["8K HDR", "Progresivo", "Entre­lazado", "CIF"],
        "correcta": "Entre­lazado",
        "explicacion": "El entrelazado refresca campos alternos mejorando fluidez."
      },
      {
        "pregunta": "¿Qué tipo de dato necesita sincronismo rígido?",
        "respuestas": ["Texto", "Gráficos vectoriales", "Audio", "Documentos PDF"],
        "correcta": "Audio",
        "explicacion": "El audio es extremadamente sensible al jitter."
      },
      {
        "pregunta": "¿Cuál es la función de la cuantificación en vídeo?",
        "respuestas": ["Reducir frecuencias insignificantes", "Mejorar nitidez", "Aumentar saturación", "Modificar frame rate"],
        "correcta": "Reducir frecuencias insignificantes",
        "explicacion": "La cuantificación atenúa detalles de alta frecuencia poco perceptibles."
      },
      {
        "pregunta": "¿Qué tipo de formato es JFIF?",
        "respuestas": ["Contenedor", "Codificador", "Intercambio JPEG", "Audio PCM"],
        "correcta": "Intercambio JPEG",
        "explicacion": "JFIF es un formato de intercambio basado en JPEG."
      },
      {
        "pregunta": "¿Qué formato se asocia con Ultra HD?",
        "respuestas": ["1920x1080", "2560x1440", "3840x2160", "4096x2160"],
        "correcta": "3840x2160",
        "explicacion": "3840x2160 es UHDTV 4K doméstico."
      },
      {
        "pregunta": "¿Qué atributo representa diferencia de intensidad luminosa?",
        "respuestas": ["Tono", "Saturación", "Luma", "Gamma"],
        "correcta": "Luma",
        "explicacion": "La luma (Y) define luminancia."
      },
      {
        "pregunta": "¿Cuál es el mínimo recomendado para refresco visual humano?",
        "respuestas": ["15 Hz", "25 Hz", "50 Hz", "100 Hz"],
        "correcta": "50 Hz",
        "explicacion": "Por debajo de 50 Hz se percibe flicker."
      },
      {
        "pregunta": "¿Qué métrica de vídeo usa opinión humana para calidad?",
        "respuestas": ["SSIM", "MSE", "MOS", "SNR"],
        "correcta": "MOS",
        "explicacion": "MOS se basa en evaluaciones subjetivas."
      },
      {
        "pregunta": "¿Qué métrica correlaciona bien con percepción estructural?",
        "respuestas": ["SSIM", "PSNR", "MSE", "MOS"],
        "correcta": "SSIM",
        "explicacion": "SSIM analiza estructuras y luminancia."
      },
      {
        "pregunta": "¿Qué produce aliasing?",
        "respuestas": ["Submuestreo insuficiente", "Cuantificación alta", "Teorema de Nyquist", "Modo progresivo"],
        "correcta": "Submuestreo insuficiente",
        "explicacion": "Si no se cumple Nyquist aparecen errores espectrales."
      },
      {
        "pregunta": "¿Qué tipo de datos tienen mayor carga temporal?",
        "respuestas": ["Video y audio", "Texto", "Gráficos vectoriales", "Imágenes PNG"],
        "correcta": "Video y audio",
        "explicacion": "Son datos continuos dependientes del tiempo."
      },
      {
        "pregunta": "¿Qué mide el jitter?",
        "respuestas": ["Variación de retardo", "Ruido eléctrico", "Bitrate medio", "Frame rate"],
        "correcta": "Variación de retardo",
        "explicacion": "Ancho temporal variable afecta decodificación."
      },
      {
        "pregunta": "¿Qué componente perceptual detecta peor el ojo humano?",
        "respuestas": ["Luminancia", "Crominancia", "Estructura", "Resolución temporal"],
        "correcta": "Crominancia",
        "explicacion": "El sistema visual es menos sensible al color que al brillo."
      },
      {
        "pregunta": "¿Qué formato asigna 24 bits por pixel?",
        "respuestas": ["HSV", "RGB", "YCbCr", "CMYK"],
        "correcta": "RGB",
        "explicacion": "RGB 8 bits por canal → 24 bits."
      },
      {
        "pregunta": "¿Dónde se insertaba teletexto?",
        "respuestas": ["Líneas visibles", "Líneas no visibles", "Metadatos PNG", "Cabeceras RGB"],
        "correcta": "Líneas no visibles",
        "explicacion": "Se aprovecha el retorno vertical del barrido."
      },
      {
        "pregunta": "¿Qué formato es 704x576?",
        "respuestas": ["4CIF", "CIF", "QCIF", "SIF"],
        "correcta": "4CIF",
        "explicacion": "4CIF es cuatro veces CIF en ambas direcciones."
      },
      {
        "pregunta": "¿Cuál es el primer paso de JPEG?",
        "respuestas": ["Remuestreo cromático", "Codificación Huffman", "Cuantificación", "Upscaling"],
        "correcta": "Remuestreo cromático",
        "explicacion": "Se reduce resolución de crominancia."
      },
      {
        "pregunta": "¿Qué componente detecta mejor detalle fino?",
        "respuestas": ["Crominancia", "Luminancia", "Valor", "Tono"],
        "correcta": "Luminancia",
        "explicacion": "El contraste es percibido vía luminancia."
      },
      {
        "pregunta": "¿Qué estándar define 720x576 a 25 fps?",
        "respuestas": ["NTSC", "PAL", "QCIF", "HDR"],
        "correcta": "PAL",
        "explicacion": "PAL opera a 625 líneas con framerate 25 fps."
      },
      {
        "pregunta": "¿Qué tipo de error visual aparece por cuantización JPEG?",
        "respuestas": ["Blockiness", "Ghosting", "Motion blur", "Overscan"],
        "correcta": "Blockiness",
        "explicacion": "Los bloques 8x8 generan artefactos rectangulares."
      },
      {
        "pregunta": "¿Cuál es el principal inconveniente de las señales analógicas?",
        "respuestas": ["No pueden transmitirse por cable", "Se degradan con el ruido y no pueden controlarse perfectamente", "Requieren menos ancho de banda", "Son más baratas de implementar"],
        "correcta": "Se degradan con el ruido y no pueden controlarse perfectamente",
        "explicacion": "Las señales analógicas sufren degradación continua y no permiten control fino."
      },
      {
        "pregunta": "¿Qué requiere más almacenamiento normalmente?",
        "respuestas": ["Texto", "Imagen estática", "Audio", "Vídeo"],
        "correcta": "Vídeo",
        "explicacion": "El vídeo combina múltiples imágenes por unidad de tiempo más audio."
      },
      {
        "pregunta": "¿Qué característica hace más complejas las aplicaciones basadas en audio y vídeo?",
        "respuestas": ["Necesidad de sincronismo temporal", "Necesidad de impresión", "Uso de baja resolución", "Compresión sin pérdida"],
        "correcta": "Necesidad de sincronismo temporal",
        "explicacion": "Los datos continuos requieren sincronización precisa para la reproducción."
      },
      {
        "pregunta": "¿Qué tipo de datos multimedia son independientes del tiempo?",
        "respuestas": ["Vídeo", "Audio", "Texto", "Animaciones GIF"],
        "correcta": "Texto",
        "explicacion": "El texto no supone variación temporal para su interpretación."
      },
      {
        "pregunta": "¿Qué diferencia principal existe entre imagen raster y vectorial?",
        "respuestas": ["La raster usa coordenadas matemáticas", "La vectorial pierde calidad al escalar", "La raster es una matriz de píxeles", "La vectorial usa archivos JPEG"],
        "correcta": "La raster es una matriz de píxeles",
        "explicacion": "Las imágenes raster almacenan píxeles; las vectoriales usan descripciones geométricas."
      },
      {
        "pregunta": "¿Qué formato de texto soporta la mayoría de idiomas del mundo?",
        "respuestas": ["ASCII", "ASCII extendido", "Unicode", "EBCDIC"],
        "correcta": "Unicode",
        "explicacion": "Unicode fue diseñado para representar símbolos multi-idioma."
      },
      {
        "pregunta": "¿Cuál es el rango de frecuencia audible por el oído humano?",
        "respuestas": ["20 Hz – 20 kHz", "1 Hz – 10 Hz", "1 kHz – 40 kHz", "3 kHz – 20 kHz"],
        "correcta": "20 Hz – 20 kHz",
        "explicacion": "El oído humano percibe aproximadamente ese espectro."
      },
      {
        "pregunta": "¿Qué determina la profundidad de cuantificación?",
        "respuestas": ["La frecuencia de muestreo", "El número de bits asignados a cada muestra", "El frame rate", "La resolución espacial"],
        "correcta": "El número de bits asignados a cada muestra",
        "explicacion": "Cuantos más bits, más niveles posibles y menos error."
      },
      {
        "pregunta": "¿Cuál es el objetivo principal del submuestreo de crominancia?",
        "respuestas": ["Aumentar resolución de color", "Reducir ancho de banda aprovechando menor sensibilidad al color", "Mejorar nitidez", "Eliminar luminancia"],
        "correcta": "Reducir ancho de banda aprovechando menor sensibilidad al color",
        "explicacion": "El ojo percibe peor color que brillo, permitiendo reducción."
      },
      {
        "pregunta": "¿En qué modelo de color se representan impresoras?",
        "respuestas": ["RGB", "HSV", "CMYK", "YCbCr"],
        "correcta": "CMYK",
        "explicacion": "Las impresoras trabajan mediante pigmentos cian, magenta, amarillo y negro."
      },
      {
        "pregunta": "¿Qué representa 'Y' en YCbCr?",
        "respuestas": ["Crominancia roja", "Crominancia azul", "Luminancia", "Tono"],
        "correcta": "Luminancia",
        "explicacion": "Y es la componente de brillo perceptiva."
      },
      {
        "pregunta": "¿Qué ocurre al aumentar el framerate del vídeo?",
        "respuestas": ["Aumenta fluidez de movimiento", "Disminuye claridad del color", "Se reducen datos generados", "Aparece flicker"],
        "correcta": "Aumenta fluidez de movimiento",
        "explicacion": "Más imágenes por segundo suavizan movimiento."
      },
      {
        "pregunta": "¿Qué aporta la DCT en JPEG?",
        "respuestas": ["Separación de frecuencias", "Incremento de píxeles", "Conversión a RGB", "Aumento de saturación"],
        "correcta": "Separación de frecuencias",
        "explicacion": "La DCT divide el bloque en componentes de frecuencia."
      },
      {
        "pregunta": "¿Qué provoca la cuantificación agresiva en JPEG?",
        "respuestas": ["Mayor nitidez", "Artefactos de bloqueo", "Mayor saturación", "Aumento de luminancia"],
        "correcta": "Artefactos de bloqueo",
        "explicacion": "Los detalles finos se pierden y aparecen bloques perceptibles."
      },
      {
        "pregunta": "¿Qué distingue HDTV de SDTV?",
        "respuestas": ["Mayor resolución y relación de aspecto", "Menor bitrate", "Flicker reducido siempre", "Barrido exclusivo entrelazado"],
        "correcta": "Mayor resolución y relación de aspecto",
        "explicacion": "HDTV amplía resolución y utiliza frecuentemente 16:9."
      },
      {
        "pregunta": "¿Qué técnica permite transmitir HD por caminos limitados?",
        "respuestas": ["Vídeo progresivo", "Vídeo entrelazado", "Upscaling", "HDR"],
        "correcta": "Vídeo entrelazado",
        "explicacion": "Divide el cuadro reduciendo datos transmitidos instantáneamente."
      },
      {
        "pregunta": "¿Qué componente del modelo HSV representa brillo?",
        "respuestas": ["H", "S", "V", "C"],
        "correcta": "V",
        "explicacion": "V (Value) describe claridad o nivel de luminosidad."
      },
      {
        "pregunta": "¿Qué representa la saturación?",
        "respuestas": ["Cantidad de tono", "Pureza o intensidad del color", "Ángulo de luminancia", "Resolución temporal"],
        "correcta": "Pureza o intensidad del color",
        "explicacion": "Saturación mide cuán deslavado o intenso es un color."
      },
      {
        "pregunta": "¿Qué relación de aspecto corresponde normalmente a TV clásica?",
        "respuestas": ["16:9", "21:9", "4:3", "1:1"],
        "correcta": "4:3",
        "explicacion": "Los televisores tradicionales usaban proporción 4:3."
      },
      {
        "pregunta": "¿Qué función cumple la zona de líneas no visibles en vídeo analógico?",
        "respuestas": ["Control de brillo", "Sincronización y servicios como teletexto", "Aumento de gamma", "Ajuste de framerate"],
        "correcta": "Sincronización y servicios como teletexto",
        "explicacion": "Durante el retorno vertical se envía información adicional."
      }
    ],

    "Tema 2": [
      {
        "pregunta": "¿Cuál es el objetivo principal de la compresión de datos?",
        "respuestas": [
          "Aumentar el tamaño de archivos",
          "Reducir la cantidad de bits necesaria para representarlos",
          "Eliminar información irrelevante siempre",
          "Duplicar la información para respaldarla"
        ],
        "correcta": "Reducir la cantidad de bits necesaria para representarlos",
        "explicacion": "La compresión busca disminuir el número de bits usados para representar datos sin perder calidad significativa."
      },
      {
        "pregunta": "¿Qué tipo de compresión recupera exactamente los datos originales tras descomprimir?",
        "respuestas": [
          "Con pérdida",
          "Sin pérdida",
          "Perceptual",
          "Adaptativa"
        ],
        "correcta": "Sin pérdida",
        "explicacion": "La compresión sin pérdida es capaz de recuperar exactamente los datos originales."
      },
      {
        "pregunta": "¿Cuándo se suele usar compresión con pérdida?",
        "respuestas": [
          "Cuando la integridad de datos es crítica",
          "Cuando los datos son multimedia perceptual",
          "Cuando solo se transmite texto",
          "Cuando se almacenan datos médicos"
        ],
        "correcta": "Cuando los datos son multimedia perceptual",
        "explicacion": "El oído y la vista permiten eliminar información redundante sin percibir diferencias."
      },
      {
        "pregunta": "¿Qué factor considera la calidad perceptual humana en la compresión?",
        "respuestas": [
          "Energía cuántica",
          "Modelo perceptivo",
          "Velocidad del ventilador",
          "Memoria ROM"
        ],
        "correcta": "Modelo perceptivo",
        "explicacion": "Los modelos perceptivos permiten eliminar información poco perceptible."
      },
      {
        "pregunta": "¿Qué mide la entropía?",
        "respuestas": [
          "La complejidad temporal",
          "La cantidad promedio mínima de información por símbolo",
          "La intensidad del brillo",
          "El tamaño físico de un archivo"
        ],
        "correcta": "La cantidad promedio mínima de información por símbolo",
        "explicacion": "La entropía es el límite teórico de compresión."
      },
      {
        "pregunta": "¿Cuál es la expresión de información de un símbolo?",
        "respuestas": [
          "I(A) = P(A)",
          "I(A) = 1/P(A)",
          "I(A) = -log P(A)",
          "I(A) = log(P(A))"
        ],
        "correcta": "I(A) = -log P(A)",
        "explicacion": "A menor probabilidad mayor información según Shannon."
      },
      {
        "pregunta": "¿Qué sucede cuando la probabilidad de un símbolo aumenta?",
        "respuestas": [
          "Su información disminuye",
          "Su información aumenta",
          "No cambia",
          "Se vuelve impredecible"
        ],
        "correcta": "Su información disminuye",
        "explicacion": "Lo esperado aporta menos información."
      },
      {
        "pregunta": "¿Qué base logarítmica se usa para medir información en bits?",
        "respuestas": [
          "Base 10",
          "Base e",
          "Base 2",
          "Base 16"
        ],
        "correcta": "Base 2",
        "explicacion": "La base binaria mide la información en bits."
      },
      {
        "pregunta": "¿Qué términos forman una fuente de información?",
        "respuestas": [
          "Memoria y espacio",
          "Símbolos y probabilidades",
          "Frecuencia y volumen",
          "Impedancia y textura"
        ],
        "correcta": "Símbolos y probabilidades",
        "explicacion": "La fuente viene definida como F = (S, P)."
      },
      {
        "pregunta": "¿Qué es el ruido en compresión?",
        "respuestas": [
          "Incremento de probabilidad",
          "Distorsión añadida en la reconstrucción",
          "Mayor precisión",
          "Duplicación de datos"
        ],
        "correcta": "Distorsión añadida en la reconstrucción",
        "explicacion": "La compresión con pérdida puede generar ruido perceptual."
      },
      {
        "pregunta": "¿Qué compresión elimina redundancias sin eliminar información?",
        "respuestas": [
          "Con pérdida",
          "Sin pérdida",
          "Perceptual",
          "Temporal"
        ],
        "correcta": "Sin pérdida",
        "explicacion": "La compresión sin pérdida elimina redundancia estadística solamente."
      },
      {
        "pregunta": "¿Qué algoritmo pertenece a compresión sin pérdida?",
        "respuestas": [
          "JPEG",
          "LZW",
          "MP3",
          "AAC"
        ],
        "correcta": "LZW",
        "explicacion": "LZW es un algoritmo sustitucional sin pérdida."
      },
      {
        "pregunta": "¿Qué técnica se basa en probabilidad de símbolos?",
        "respuestas": [
          "Codificación entrópica",
          "Codificación vectorial",
          "Filtro de Kalman",
          "Interpolación"
        ],
        "correcta": "Codificación entrópica",
        "explicacion": "La codificación entrópica usa probabilidades para optimizar longitudes."
      },
      {
        "pregunta": "¿Cuál es un ejemplo de codificación entrópica?",
        "respuestas": [
          "DCT",
          "Huffman",
          "Cuantización vectorial",
          "Supresión LP"
        ],
        "correcta": "Huffman",
        "explicacion": "Huffman asigna palabras cortas a símbolos probables."
      },
      {
        "pregunta": "¿Qué define un código prefijo?",
        "respuestas": [
          "Cada palabra es prefijo de otra",
          "Ninguna palabra es prefijo de otra",
          "Se decodifica en bloque",
          "Sólo codifica texto"
        ],
        "correcta": "Ninguna palabra es prefijo de otra",
        "explicacion": "Evita ambigüedad y permite decodificación instantánea."
      },
      {
        "pregunta": "¿Qué ventaja tiene la compresión con pérdida?",
        "respuestas": [
          "Mayor calidad de salida",
          "Tasas de compresión más altas",
          "Más coste computacional",
          "Mejor integridad legal"
        ],
        "correcta": "Tasas de compresión más altas",
        "explicacion": "Se eliminan componentes perceptualmente irrelevantes."
      },
      {
        "pregunta": "¿Qué significa que un código sea instantáneo?",
        "respuestas": [
          "Puede decodificarse sin necesidad de leer símbolos posteriores",
          "Requiere analizar todo el mensaje",
          "Se almacena en caché",
          "Es de baja precisión"
        ],
        "correcta": "Puede decodificarse sin necesidad de leer símbolos posteriores",
        "explicacion": "Los códigos prefijo permiten decodificación paso a paso."
      },
      {
        "pregunta": "¿Qué simboliza LMS?",
        "respuestas": [
          "Longitud media por símbolo",
          "Logaritmo mecánico secuencial",
          "Latencia media sintetizada",
          "Límite mínimo semántico"
        ],
        "correcta": "Longitud media por símbolo",
        "explicacion": "LMS indica bits promedio por símbolo después de compresión."
      },
      {
        "pregunta": "¿Qué mide el factor de compresión?",
        "respuestas": [
          "Velocidad de CPU",
          "Relación entre tamaño original y comprimido",
          "Precisión de la fuente",
          "Latencia temporal"
        ],
        "correcta": "Relación entre tamaño original y comprimido",
        "explicacion": "Indica cuánto se reduce un archivo numéricamente."
      },
      {
        "pregunta": "¿Qué representa PSNR?",
        "respuestas": [
          "Índice de saturación",
          "Relación señal–ruido pico",
          "Energía espectral puntual",
          "Ruido perceptual"
        ],
        "correcta": "Relación señal–ruido pico",
        "explicacion": "PSNR se usa para evaluar degradación con pérdida."
      },
      {
        "pregunta": "¿Qué mide MSE?",
        "respuestas": [
          "Diferencia media cuadrática",
          "Capacidad de color",
          "Velocidad del usuario",
          "Frecuencia de muestreo"
        ],
        "correcta": "Diferencia media cuadrática",
        "explicacion": "MSE mide el error cuadrático entre original y reconstruido."
      },
      {
        "pregunta": "¿Qué tipo de modelo de compresión se adapta en tiempo real?",
        "respuestas": [
          "No adaptativo",
          "Semi adaptativo",
          "Adaptativo",
          "Inverso"
        ],
        "correcta": "Adaptativo",
        "explicacion": "Las probabilidades se actualizan dinámicamente."
      },
      {
        "pregunta": "¿Qué tipo de modelo necesita un primer pase?",
        "respuestas": [
          "Adaptativo",
          "Semi adaptativo",
          "Aleatorio",
          "Predictivo"
        ],
        "correcta": "Semi adaptativo",
        "explicacion": "Analiza estadísticas antes de codificar."
      },
      {
        "pregunta": "¿Qué caracteriza a un modelo no adaptativo?",
        "respuestas": [
          "Probabilidades constantes",
          "Cambia según el usuario",
          "Se actualiza por símbolo",
          "Depende de MOS"
        ],
        "correcta": "Probabilidades constantes",
        "explicacion": "Las frecuencias son fijas para todo el mensaje."
      },
      {
        "pregunta": "¿Qué compresión es más eficiente en texto?",
        "respuestas": [
          "Sustitucional",
          "Vectorial",
          "Temporal",
          "Perceptual"
        ],
        "correcta": "Sustitucional",
        "explicacion": "Reemplaza redundancia repetitiva en cadenas."
      },
      {
        "pregunta": "¿Qué parámetro se busca minimizar en compresión con pérdida?",
        "respuestas": [
          "MSE",
          "Saturación",
          "Formato",
          "Tiempo de reloj"
        ],
        "correcta": "MSE",
        "explicacion": "Se desea reducir el error cuadrático medio."
      },
      {
        "pregunta": "¿Qué componente determina la complejidad de codificador?",
        "respuestas": [
          "Operaciones por segundo",
          "Altura de pantalla",
          "Voltaje",
          "Tamaño del buffer"
        ],
        "correcta": "Operaciones por segundo",
        "explicacion": "Depende del procesamiento requerido."
      },
      {
        "pregunta": "¿Qué estándar utiliza modelos perceptuales?",
        "respuestas": [
          "MPEG",
          "ZIP",
          "RAR",
          "LZW"
        ],
        "correcta": "MPEG",
        "explicacion": "MPEG usa percepción visual para descartar datos irrelevantes."
      },
      {
        "pregunta": "¿Qué requisito debe cumplir un código unívocamente descifrable?",
        "respuestas": [
          "Debe usar la misma longitud para todos",
          "Solo se decodifica leyendo todo el mensaje",
          "Cada mensaje tiene única interpretación posible",
          "Debe usar Huffman"
        ],
        "correcta": "Cada mensaje tiene única interpretación posible",
        "explicacion": "Evita confusiones en la decodificación."
      },
      {
        "pregunta": "¿Qué limita la entropía?",
        "respuestas": [
          "La calidad subjetiva del usuario",
          "La mínima longitud promedio alcanzable",
          "La tasa de muestreo",
          "La duración del vídeo"
        ],
        "correcta": "La mínima longitud promedio alcanzable",
        "explicacion": "La entropía marca el límite inferior teórico."
      },
      {
        "pregunta": "¿Qué propiedad permite decodificar sin esperar fin de bloque?",
        "respuestas": [
          "Prefijo",
          "Percepción",
          "Retardo",
          "SSIM"
        ],
        "correcta": "Prefijo",
        "explicacion": "Permite decodificación símbolo a símbolo."
      },
      {
        "pregunta": "¿Qué técnica elimina redundancia temporal en vídeo?",
        "respuestas": [
          "RLE",
          "Predicción de movimiento",
          "Cuantización escalar",
          "Rango espectral"
        ],
        "correcta": "Predicción de movimiento",
        "explicacion": "Reduce redundancias entre frames."
      },
      {
        "pregunta": "¿Qué ocurre si FC = 2?",
        "respuestas": [
          "Se duplicó tamaño",
          "La mitad del tamaño original",
          "El triple del tamaño original",
          "Sin compresión"
        ],
        "correcta": "La mitad del tamaño original",
        "explicacion": "FC = O/C, por tanto 2:1 → la mitad."
      },
      {
        "pregunta": "¿Qué valor indica compresión relativa CR?",
        "respuestas": [
          "Fracción perdida respecto al original",
          "Ruido por unidad de tiempo",
          "Bits por frecuencia",
          "Latencia óptima"
        ],
        "correcta": "Fracción perdida respecto al original",
        "explicacion": "CR = (O - C) / O representa proporción reducida."
      },
      {
        "pregunta": "¿Qué tipo de compresión usan imágenes médicas?",
        "respuestas": [
          "Con pérdida",
          "Sin pérdida",
          "Temporal",
          "Selectiva aleatoria"
        ],
        "correcta": "Sin pérdida",
        "explicacion": "La integridad médica es crítica legalmente."
      },
      {
        "pregunta": "¿Qué métrica se correlaciona peor con percepción visual?",
        "respuestas": [
          "SSIM",
          "MOS",
          "PSNR",
          "MPQM"
        ],
        "correcta": "PSNR",
        "explicacion": "PSNR no captura percepción estructural."
      },
      {
        "pregunta": "¿Qué métrica se basa en opinión humana?",
        "respuestas": [
          "MOS",
          "MSE",
          "PSNR",
          "SNR"
        ],
        "correcta": "MOS",
        "explicacion": "MOS evalúa calidad mediante estudios de espectadores."
      },
      {
        "pregunta": "¿Qué codificador reemplaza cadenas por referencias previas?",
        "respuestas": [
          "Aritmético",
          "LZW",
          "Huffman",
          "MOS"
        ],
        "correcta": "LZW",
        "explicacion": "LZW usa diccionarios para sustituir secuencias repetidas."
      },
      {
        "pregunta": "¿Qué tipo de codificación representa probabilidades mejor que Huffman?",
        "respuestas": [
          "Aritmética",
          "Predictiva",
          "Vectorial",
          "Convolucional"
        ],
        "correcta": "Aritmética",
        "explicacion": "La codificación aritmética se acerca más al límite entrópico."
      },
      {
        "pregunta": "¿Qué elemento influye más en retardo de compresión?",
        "respuestas": [
          "Complejidad del codificador",
          "Resolución semántica",
          "Brillo espectral",
          "Herramienta gráfica"
        ],
        "correcta": "Complejidad del codificador",
        "explicacion": "Más cálculo implica más retardo."
      },
      {
        "pregunta": "¿Qué métrica cae al aumentar MSE?",
        "respuestas": [
          "PSNR baja",
          "PSNR sube",
          "Ruido se elimina",
          "La escala cambia"
        ],
        "correcta": "PSNR baja",
        "explicacion": "Mayor error → peor relación señal/ruido."
      },
      {
        "pregunta": "¿Qué característica se evalúa en compresión perceptual?",
        "respuestas": [
          "Detalles imperceptibles",
          "Ruido de bloqueo",
          "Magnitud de frame",
          "Duración temporal"
        ],
        "correcta": "Detalles imperceptibles",
        "explicacion": "Elimina partes que el usuario no percibe."
      },
      {
        "pregunta": "¿Qué se evalúa con BER?",
        "respuestas": [
          "Errores de bits tras transmisión",
          "Brillo visual",
          "Color en PDF",
          "Nivel de compresión"
        ],
        "correcta": "Errores de bits tras transmisión",
        "explicacion": "BER mide errores binarios al reproducir datos."
      },
      {
        "pregunta": "¿Qué provoca más error visual en bloques JPEG?",
        "respuestas": [
          "Cuantización agresiva",
          "Uso de CCIR-601",
          "Formato progresivo",
          "Submuestreo 4:4:4"
        ],
        "correcta": "Cuantización agresiva",
        "explicacion": "Elimina demasiadas frecuencias altas."
      },
      {
        "pregunta": "¿Qué es redundancia?",
        "respuestas": [
          "Información repetida o predecible",
          "Información única",
          "Ruido térmico",
          "Ruido espectral"
        ],
        "correcta": "Información repetida o predecible",
        "explicacion": "Su eliminación reduce tamaño."
      },
      {
        "pregunta": "¿Qué problema resuelven los códigos instantáneos?",
        "respuestas": [
          "Ambigüedad de decodificación",
          "Ruido temporal",
          "Bloqueo perceptual",
          "Respaldo en disco"
        ],
        "correcta": "Ambigüedad de decodificación",
        "explicacion": "Evitan posibles interpretaciones múltiples."
      },
      {
        "pregunta": "¿Qué indica un FC de 10:1?",
        "respuestas": [
          "El archivo se redujo 10 veces",
          "El archivo pesa 10 veces más",
          "Se produjo redundancia",
          "Hubo pérdida irrelevante"
        ],
        "correcta": "El archivo se redujo 10 veces",
        "explicacion": "Factor = original / comprimido."
      },
      {
        "pregunta": "¿Qué tipo de compresión es más adecuada para voz en tiempo real?",
        "respuestas": [
          "Sin pérdida",
          "Con pérdida de baja complejidad",
          "Sustitucional total",
          "Huffman puro"
        ],
        "correcta": "Con pérdida de baja complejidad",
        "explicacion": "Minimiza retardo manteniendo inteligibilidad."
      },
      {
        "pregunta": "¿Qué parámetro se intenta maximizar al comprimir?",
        "respuestas": [
          "Factor de compresión",
          "MSE",
          "Ruido térmico",
          "Redundancia espectral"
        ],
        "correcta": "Factor de compresión",
        "explicacion": "Cuanto mayor FC, mayor reducción."
      },
      {
        "pregunta": "¿Qué unidad indica el límite teórico inferior en bits/símbolo?",
        "respuestas": [
          "Entropía",
          "Ruido",
          "Longitud prefijo",
          "TCR"
        ],
        "correcta": "Entropía",
        "explicacion": "La entropía define el mínimo alcanzable teórico."
      },
      {
        "pregunta": "¿Qué se pierde en compresión perceptual excesiva?",
        "respuestas": [
          "Detalles visuales importantes",
          "Redundancia útil",
          "Ruido eléctrico",
          "Bits de control"
        ],
        "correcta": "Detalles visuales importantes",
        "explicacion": "Demasiada pérdida afecta percepción."
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