import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HeadbarComponent } from '../../../headbar/headbar.component';
import { Router } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-test-completo-iso',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DividerModule, CardModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule, PaginatorModule],
  providers: [ConfirmationService],
  templateUrl: './test-completo-iso.component.html',
  styleUrl: './test-completo-iso.component.scss'
})
export class TestCompletoIsoComponent {
  temas: { [key: string]: any[] } = {
    "Tema 3": [
      {
        pregunta: "¿Qué implica el concepto de 'Calidad por diseño'?",
        respuestas: [
          "Definir la calidad al final del desarrollo.",
          "Garantizar cero defectos mediante pruebas intensivas.",
          "Enfocarse solo en los requisitos del cliente.",
          "Incorporar criterios de calidad desde el inicio del diseño."
        ],
        correcta: "Incorporar criterios de calidad desde el inicio del diseño."
      },
      {
        pregunta: "¿Cuál es un ejemplo de ingeniería inversa?",
        respuestas: [
          "Añadir nuevas funcionalidades a una aplicación existente.",
          "Refactorizar código para hacerlo más eficiente.",
          "Convertir un fichero APK en código Java.",
          "Modificar el sistema operativo donde corre el software."
        ],
        correcta: "Convertir un fichero APK en código Java."
      },
      {
        pregunta: "¿Cuál de las siguientes es el objetivo principal de la gestión del cambio?",
        respuestas: [
          "Ninguna de las otras respuestas es correcta.",
          "Hacer un seguimiento de las diferentes versiones de los componentes de software o elementos de configuración, y los sistemas donde se usan dichos componentes.",
          "Asegurar que la evolución del sistema sea un proceso gestionado en el que se da prioridad a los cambios más urgentes y rentables.",
          "Evitar que el trabajo de varios programadores entren en conflicto por colisiones."
        ],
        correcta: "Asegurar que la evolución del sistema sea un proceso gestionado en el que se da prioridad a los cambios más urgentes y rentables."
      },
      {
        pregunta: "¿Cuál es una característica clave de los proyectos que se gestionan de manera adaptativa?",
        respuestas: [
          "Es obligatorio definir el costo exacto y los requisitos desde el principio.",
          "No es posible fijar la fecha de entrega ni el precio en este tipo de proyectos.",
          "La planificación inicial se toma como una indicación, pero no como una guía fija.",
          "Los requisitos están completamente definidos desde el inicio."
        ],
        correcta: "La planificación inicial se toma como una indicación, pero no como una guía fija."
      },
      {
        pregunta: "¿Cuál de las siguientes opciones es un objetivo de la Mejora del Proceso?",
        respuestas: [
          "Definir el proceso.",
          "Todas las opciones son correctas.",
          "Medir el proceso.",
          "Mejorar el proceso."
        ],
        correcta: "Todas las opciones son correctas."
      },
      {
        pregunta: "Si un sistema contiene caracteres inválidos en su especificación, ¿en qué fase se debería identificar esto?",
        respuestas: [
          "Fase de Inicio.",
          "Fase de Elaboración.",
          "Durante la Gestión de Configuración.",
          "Fase de Construcción."
        ],
        correcta: "Fase de Inicio."
      },
      {
        pregunta: "¿Qué tipo de mantenimiento tiene como objetivo modificar el software para mejorar sus propiedades sin alterar sus especificaciones funcionales?",
        respuestas: [
          "Mantenimiento perfectivo.",
          "Mantenimiento correctivo.",
          "Mantenimiento preventivo.",
          "Mantenimiento adaptativo."
        ],
        correcta: "Mantenimiento preventivo."
      },
      {
        pregunta: "¿Qué es el Proceso Unificado de Desarrollo (PUD)?",
        respuestas: [
          "Un proceso de organización de proyecto.",
          "Un modelo de ciclo de vida.",
          "Un proceso técnico.",
          "Una metodología de desarrollo."
        ],
        correcta: "Una metodología de desarrollo."
      },
      {
        pregunta: "¿CUÁL ES EL OBJETIVO DE LAS PRUEBAS DE SOFTWARE?",
        respuestas: [
          "Única y exclusivamente demostrar el buen funcionamiento del programa.",
          "Única y exclusivamente encontrar fallos.",
          "Encontrar fallos y, consecuentemente, demostrar el buen funcionamiento del programa.",
          "Demostrar el buen funcionamiento del programa y, eventualmente, encontrar fallos."
        ],
        correcta: "Encontrar fallos y, consecuentemente, demostrar el buen funcionamiento del programa."
      },
      {
        pregunta: "¿Cuál es el principal objetivo de las pruebas de software?",
        respuestas: [
          "Reducir el tiempo de desarrollo del proyecto.",
          "Encontrar fallos antes del paso a producción.",
          "Eliminar defectos detectados por los usuarios.",
          "Aumentar la complejidad."
        ],
        correcta: "Encontrar fallos antes del paso a producción."
      },
      {
        pregunta: "¿Qué versión define el API pública?",
        respuestas: [
          "1.1.1",
          "1.0.0",
          "0.0.0",
          "0.0.1"
        ],
        correcta: "1.0.0"
      },
      {
        pregunta: "¿Cuál de las siguientes características NO es correcta en metodologías estructuradas?",
        respuestas: [
          "Tratamiento conjunto de procesos.",
          "Análisis estructurado.",
          "Tratamiento separado de procesos.",
          "Diseño estructurado."
        ],
        correcta: "Tratamiento conjunto de procesos."
      },
      {
        pregunta: "¿Qué es la política de calidad?",
        respuestas: [
          "Ninguna de las otras respuestas es correcta.",
          "Parte de la gestión de la calidad enfocada al establecimiento de los objetivos.",
          "Intenciones globales y orientación de una organización.",
          "Sistema de gestión para dirigir y controlar."
        ],
        correcta: "Intenciones globales y orientación de una organización."
      },
      {
        pregunta: "Incumplimiento de un requisito asociado a un uso previsto:",
        respuestas: [
          "Desecho.",
          "Defecto.",
          "Reparación.",
          "Medida."
        ],
        correcta: "Defecto."
      },
      {
        pregunta: "¿Cuál de las siguientes descripciones encaja con la Fase Beta de un producto?",
        respuestas: [
          "Fase secundaria para pruebas.",
          "Primera fase para pruebas.",
          "Describir funcionalidades.",
          "Gestionar configuración."
        ],
        correcta: "Fase secundaria para pruebas."
      },
      {
        pregunta: "¿Cuál es la relación entre ingeniería inversa y reingeniería?",
        respuestas: [
          "La ingeniería inversa no forma parte de la reingeniería.",
          "La ingeniería inversa es una etapa de la reingeniería.",
          "Son procesos completamente diferentes.",
          "Son sinónimos."
        ],
        correcta: "La ingeniería inversa es una etapa de la reingeniería."
      },
      {
        pregunta: "¿Cuál es el propósito del branching en la gestión de configuración?",
        respuestas: [
          "Fusionar diferentes versiones en una sola.",
          "Mejorar el rendimiento del sistema.",
          "Permitir el desarrollo paralelo de nuevas funcionalidades.",
          "Realizar copias de seguridad del código."
        ],
        correcta: "Permitir el desarrollo paralelo de nuevas funcionalidades."
      },
      {
        pregunta: "Herramienta de gestión de configuración:",
        respuestas: [
          "Eclipse.",
          "Git.",
          "Visual Studio Code.",
          "Microsoft Word."
        ],
        correcta: "Git."
      },
      {
        pregunta: "¿Qué busca la función MINIMAX de las pruebas?",
        respuestas: [
          "Encontrar el menor número de defectos en el mayor tiempo posible.",
          "Esta función no tiene nada que ver con las pruebas.",
          "Encontrar todos los defectos en el mayor tiempo posible.",
          "Encontrar el mayor número de defectos en el menor tiempo posible."
        ],
        correcta: "Encontrar el mayor número de defectos en el menor tiempo posible."
      },
      {
        pregunta: "¿Qué metodología usa el patrón Given-When-Then?",
        respuestas: [
          "TDD.",
          "ABDD.",
          "Test de regresión.",
          "BDD."
        ],
        correcta: "BDD."
      },
      {
        pregunta: "¿Qué distingue al modelo MMIS 2.0 de otros modelos como CMMI?",
        respuestas: [
          "Está diseñado únicamente para proyectos de código abierto.",
          "Requiere una inversión significativa en recursos humanos.",
          "Reduce la burocracia para adaptarse a pequeñas organizaciones.",
          "Se centra exclusivamente en grandes empresas."
        ],
        correcta: "Reduce la burocracia para adaptarse a pequeñas organizaciones."
      },
      {
        pregunta: "¿Qué son las pruebas de aceptación?",
        respuestas: [
          "Se revisa la documentación del sistema.",
          "El usuario comprueba, junto al personal encargado del mantenimiento.",
          "Se somete el software modificado a pruebas.",
          "Se comprueba la integración de los componentes."
        ],
        correcta: "El usuario comprueba, junto al personal encargado del mantenimiento."
      },
      {
        pregunta: "¿Cuándo se lanza la versión 1.0.0, qué define esta versión?",
        respuestas: [
          "Define a la API pública.",
          "Define a prerelease.",
          "Define una versión alpha.",
          "Define una versión beta."
        ],
        correcta: "Define a la API pública."
      },
      {
        pregunta: "¿Qué tipo de mantenimiento tiene como objetivo mejorar la calidad del software sin modificar sus especificaciones funcionales?",
        respuestas: [
          "Perfectivo.",
          "Correctivo.",
          "Preventivo.",
          "Adaptativo."
        ],
        correcta: "Preventivo."
      },
      {
        pregunta: "¿Qué es el concepto de liberación?",
        respuestas: [
          "Todas son correctas.",
          "Se distribuye a los clientes.",
          "Se distribuye a los usuarios finales.",
          "Se distribuye a los testers."
        ],
        correcta: "Se distribuye a los clientes."
      },
      {
        pregunta: "¿Cuál es la duración típica de una iteración en un proyecto ágil?",
        respuestas: [
          "6 meses.",
          "1 año.",
          "2-3 meses.",
          "1-4 semanas."
        ],
        correcta: "1-4 semanas."
      },
      {
        pregunta: "Elige la afirmación verdadera:",
        respuestas: [
          "Un conjunto de prueba está formado por uno o más casos de prueba.",
          "Un conjunto de prueba solo tiene un caso de prueba.",
          "Un caso de prueba está formado por conjuntos de prueba.",
          "No puede tener valores de entrada."
        ],
        correcta: "Un conjunto de prueba está formado por uno o más casos de prueba."
      },
      {
        pregunta: "¿Qué elemento de la configuración permite recrear una versión específica sin modificaciones?",
        respuestas: [
          "Gestión de cambios.",
          "Línea base.",
          "Codeline.",
          "Versión de desarrollo."
        ],
        correcta: "Línea base."
      },
      {
        pregunta: "Cuando desarrollamos software, ¿hacer buen software es suficiente?",
        respuestas: [
          "No, porque es costoso.",
          "Sí, implica que se hace bien.",
          "No, también se debe hacer bien.",
          "Sí."
        ],
        correcta: "No, también se debe hacer bien."
      },
      {
        pregunta: "Con respecto al semantic versioning, ¿cuál es falsa?",
        respuestas: [
          "Tiene un formato M.m.p.",
          "Minor incrementa por nuevas funcionalidades compatibles.",
          "Reglas sencillas para versionado.",
          "Patch incrementa por arreglos incompatibles."
        ],
        correcta: "Minor incrementa por nuevas funcionalidades compatibles."
      },
      {
        pregunta: "¿Por qué es peligroso la asignación del mantenimiento al personal nuevo o recién incorporado?",
        respuestas: [
          "Todas las otras respuestas son correctas.",
          "Programadores inexpertos y difícilmente realizan modificaciones.",
          "Raramente encuentran y corrigen defectos.",
          "Desconocimiento técnico y del dominio del negocio."
        ],
        correcta: "Todas las otras respuestas son correctas."
      },
      {
        pregunta: "¿Qué significa la sigla Fast en F.I.R.S.T (Testing)?",
        respuestas: [
          "Los test deben correr rápido para evitar la pereza de ejecutarlos.",
          "Los test deben devolver una respuesta booleana.",
          "Los test deben poder ejecutarse en cualquier entorno.",
          "Los test deben ser independientes unos de otros."
        ],
        correcta: "Los test deben correr rápido para evitar la pereza de ejecutarlos."
      },
      {
        pregunta: "¿Cuál de las siguientes afirmaciones describe mejor el propósito de los estándares?",
        respuestas: [
          "Los estándares son desarrollados únicamente por ISO.",
          "Los estándares son conjuntos de buenas prácticas creados por organizaciones de estandarización.",
          "Los estándares son obligatorios y deben ser seguidos sin adaptaciones.",
          "Los estándares son específicos para cada industria."
        ],
        correcta: "Los estándares son conjuntos de buenas prácticas creados por organizaciones de estandarización."
      },
      {
        pregunta: "¿Qué significa conformidad en términos de calidad?",
        respuestas: [
          "Mantener un error en el código.",
          "Incumplimiento de un requisito.",
          "Cumplimiento de un requisito.",
          "Eliminación de la causa de un problema potencial."
        ],
        correcta: "Cumplimiento de un requisito."
      },
      {
        pregunta: "¿Cuál es una de las ventajas del Modelo Incremental?",
        respuestas: [
          "No refleja realmente el proceso de desarrollo.",
          "Permite la entrega frecuente de algo de valor a los usuarios.",
          "Impone una estructura de gestión rígida.",
          "Se adapta bien cuando el equipo no está calificado."
        ],
        correcta: "Permite la entrega frecuente de algo de valor a los usuarios."
      },
      {
        pregunta: "¿En qué consiste el mantenimiento de ampliación?",
        respuestas: [
          "Incorporar nuevas funcionalidades o soportar mayor carga de trabajo.",
          "Corregir errores del sistema existentes.",
          "Eliminar funcionalidades innecesarias.",
          "Reducir el consumo energético."
        ],
        correcta: "Incorporar nuevas funcionalidades o soportar mayor carga de trabajo."
      },
      {
        pregunta: "¿Qué características tienen las pruebas unitarias?",
        respuestas: [
          "Se hacen pruebas en clases o métodos.",
          "Las pruebas unitarias son pruebas de caja blanca.",
          "Estas pruebas no se pueden automatizar.",
          "Las respuestas correctas son Se hacen pruebas en clases o métodos y son de caja blanca."
        ],
        correcta: "Las pruebas unitarias son pruebas de caja blanca."
      },
      {
        pregunta: "¿Cuál es el propósito de las pruebas de aceptación en el mantenimiento de software?",
        respuestas: [
          "Asegurar que la documentación técnica está actualizada.",
          "Garantizar que no se introducen defectos nuevos.",
          "Verificar que los cambios satisfacen las necesidades del usuario.",
          "Evaluar la integración de los componentes modificados."
        ],
        correcta: "Verificar que los cambios satisfacen las necesidades del usuario."
      },
      {
        pregunta: "¿Qué evalúa la confidencialidad según ISO 25010?",
        respuestas: [
          "La adaptabilidad del sistema a entornos cambiantes.",
          "La protección de información frente a accesos no autorizados.",
          "La eficiencia del sistema al procesar grandes volúmenes de datos.",
          "La interoperabilidad con otros sistemas."
        ],
        correcta: "La protección de información frente a accesos no autorizados."
      },
      {
        pregunta: "¿Qué modelo de ciclo de vida sería más conveniente para trasladar una página web antigua a un entorno moderno?",
        respuestas: [
          "Modelo en Cascada.",
          "Modelo de traslación.",
          "Modelo incremental.",
          "Modelo en Espiral."
        ],
        correcta: "Modelo en Cascada."
      },
      {
        pregunta: "¿Qué es la adecuación funcional según el modelo ISO 25010?",
        respuestas: [
          "Instalación en diferentes dispositivos.",
          "Modificación fácil.",
          "Recuperación de fallos.",
          "Cumplir con sus funciones específicas."
        ],
        correcta: "Cumplir con sus funciones específicas."
      },
      {
        pregunta: "¿Cuál es una ventaja clave de utilizar metodologías ágiles?",
        respuestas: [
          "Ciclos de desarrollo largos.",
          "Flexibilidad para adaptarse a cambios.",
          "Mayor documentación.",
          "Menor interacción con el cliente."
        ],
        correcta: "Flexibilidad para adaptarse a cambios."
      },
      {
        pregunta: "¿Cuál es una desventaja de las pruebas manuales?",
        respuestas: [
          "Son repetitivas y propensas a errores humanos.",
          "No permiten detectar errores.",
          "Requieren una alta inversión.",
          "No permiten pruebas de regresión."
        ],
        correcta: "Son repetitivas y propensas a errores humanos."
      },
      {
        pregunta: "¿Qué es una constelación CMMI?",
        respuestas: [
          "Componentes para construir modelos.",
          "Proceso de adquisición de software.",
          "Herramientas para evaluación.",
          "Estándar para certificación."
        ],
        correcta: "Componentes para construir modelos."
      },
      {
        pregunta: "¿Qué es el release?",
        respuestas: [
          "Publicación de software.",
          "Petición de cambio.",
          "Control de configuración.",
          "Incremento tras iteración."
        ],
        correcta: "Publicación de software."
      },
      {
        pregunta: "Si se nos pide una cobertura de condiciones/decisiones y el mayor número de valores a probar que posee una variable en nuestro programa es 5, ¿cuántos casos de prueba se requerirán?",
        respuestas: [
          "5.",
          "No puede saberse con los datos del enunciado.",
          "5 * segundo número de valores a probar más grande del programa.",
          "20."
        ],
        correcta: "No puede saberse con los datos del enunciado."
      },
      {
        pregunta: "Si realizamos cambios en el software con el objetivo de mejorar su calidad o mantenibilidad ¿Qué tipo de mantenimiento sería?",
        respuestas: [
          "Perfectivo o evolutivo.",
          "Adaptativo.",
          "Preventivo.",
          "Adaptativo."
        ],
        correcta: "Preventivo."
      },
      {
        pregunta: "¿Qué término se refiere a los conjuntos de entradas con un comportamiento esperado similar?",
        respuestas: [
          "Cobertura múltiple.",
          "Conjetura de errores.",
          "Clases de equivalencia.",
          "Valores límites."
        ],
        correcta: "Clases de equivalencia."
      },
      {
        pregunta: "¿Qué técnica asegura la cobertura de todas las condiciones posibles dentro de una decisión lógica?",
        respuestas: [
          "Cobertura de decisiones.",
          "Pairwise.",
          "Cobertura de condiciones múltiples.",
          "Exhaustiva."
        ],
        correcta: "Cobertura de condiciones múltiples."
      },
      {
        pregunta: "¿En qué tipo de organización y proyecto son más adecuados los métodos ágiles?",
        respuestas: [
          "Organización flexible, proyecto cambiante.",
          "Organización flexible, proyecto estable.",
          "Organización rígida, proyecto cambiante.",
          "Organización rígida, proyecto estable."
        ],
        correcta: "Organización flexible, proyecto cambiante."
      },
      {
        pregunta: "¿Cuáles de estos son algunos tipos de cobertura?",
        respuestas: [
          "Sentencias, condiciones y decisiones.",
          "Todas las otras respuestas son correctas.",
          "Modificada de condiciones/decisiones (MC/DC).",
          "Condiciones/decisiones (DCC) y Múltiple de condiciones (MCC)."
        ],
        correcta: "Todas las otras respuestas son correctas."
      },
      {
        pregunta: "Los 4 tipos de mantenimiento son:",
        respuestas: [
          "Perfectivo, Recto, Preventivo, Adaptativo.",
          "Redondo, Cuadrado, Preventivo, Adaptativo.",
          "Perfectivo, Correctivo, Preventivo, Adaptativo.",
          "Perfectivo, Sokoban, Preventivo, Adaptativo."
        ],
        correcta: "Perfectivo, Correctivo, Preventivo, Adaptativo."
      },
      {
        pregunta: "¿Cuál es el objetivo principal de la fase de elaboración en el PUD?",
        respuestas: [
          "Desarrollar el sistema completo.",
          "Establecer una línea base de la arquitectura.",
          "Definir los requisitos finales del producto.",
          "Lanzar el producto al mercado."
        ],
        correcta: "Establecer una línea base de la arquitectura."
      },
      {
        pregunta: "¿Cuál no es una actividad de mantenimiento?",
        respuestas: [
          "Diseño del cambio.",
          "Análisis de impacto y de costes/beneficios.",
          "Captura de requisitos.",
          "Comprensión del cambio."
        ],
        correcta: "Captura de requisitos."
      },
      {
        pregunta: "¿Cuál es el propósito principal del mantenimiento perfectivo?",
        respuestas: [
          "Adaptarse a cambios en el entorno de trabajo.",
          "Mejorar el rendimiento o añadir funcionalidades.",
          "Corregir defectos críticos en el software.",
          "Garantizar la compatibilidad con sistemas modernos."
        ],
        correcta: "Mejorar el rendimiento o añadir funcionalidades."
      },
      {
        pregunta: "Dentro del concepto de liberación, ¿Qué podría incluir una nueva liberación?",
        respuestas: [
          "Documentación electrónica.",
          "Código ejecutable.",
          "Archivos de datos y de configuración.",
          "Todas las otras respuestas son correctas."
        ],
        correcta: "Todas las otras respuestas son correctas."
      },
      {
        pregunta: "¿Qué se debe hacer para reducir los riesgos y mejorar la eficiencia en un proceso iterativo e incremental?",
        respuestas: [
          "Completar todo el diseño antes de iniciar la implementación.",
          "Dividir el trabajo en pequeños proyectos o iteraciones controladas.",
          "Implementar todos los casos de uso al final del proyecto.",
          "Evitar la planificación durante las iteraciones."
        ],
        correcta: "Dividir el trabajo en pequeños proyectos o iteraciones controladas."
      },
      {
        pregunta: "¿Qué criterio sigue la técnica de combinación 'pairwise'?",
        respuestas: [
          "Se prueban todas las combinaciones posibles de parámetros.",
          "Se seleccionan aleatoriamente combinaciones para maximizar la cobertura.",
          "Cada par de valores de parámetros se prueba al menos una vez.",
          "Cada parámetro se combina con todos los posibles valores de los otros parámetros."
        ],
        correcta: "Cada par de valores de parámetros se prueba al menos una vez."
      },
      {
        pregunta: "¿Cuál de los siguientes es un principio fundamental para la calidad en el desarrollo de software?",
        respuestas: [
          "La calidad del producto depende de la motivación de los desarrolladores.",
          "Un producto de calidad se obtiene solo si se usan las últimas tecnologías.",
          "La calidad del producto se asegura solo al finalizar el desarrollo.",
          "La calidad del producto depende solo de las pruebas."
        ],
        correcta: "La calidad del producto depende de la motivación de los desarrolladores."
      },
      {
        pregunta: "¿Cuál es uno de los principios fundamentales del Proceso Unificado de Desarrollo (PUD) en cuanto a su estructura de trabajo?",
        respuestas: [
          "Es iterativo e incremental, con ciclos y fases adaptables.",
          "Cada ciclo debe completarse antes de iniciar cualquier fase.",
          "No requiere planificación previa para los ciclos.",
          "Se basa en ciclos lineales y fases secuenciales."
        ],
        correcta: "Es iterativo e incremental, con ciclos y fases adaptables."
      },
      {
        pregunta: "En el PUD, ¿cómo se llama al conjunto de todos los casos de uso?",
        respuestas: [
          "El modelo de casos de uso.",
          "El backlog de producto.",
          "El diagrama de clases.",
          "El informe de viabilidad del proyecto."
        ],
        correcta: "El modelo de casos de uso."
      },
      {
        pregunta: "¿Qué estándar describe el proceso de mantenimiento de software?",
        respuestas: [
          "ISO/IEC 25000:2014.",
          "ISO 9001:2015.",
          "ISO 12207:2017.",
          "ISO/IEC 14764:2006."
        ],
        correcta: "ISO/IEC 14764:2006."
      },
      {
        pregunta: "¿Cuál es la relación entre ingeniería inversa y reingeniería?",
        respuestas: [
          "Son procesos completamente diferentes.",
          "La ingeniería inversa no forma parte de la reingeniería.",
          "La ingeniería inversa es una etapa de la reingeniería.",
          "Son sinónimos."
        ],
        correcta: "La ingeniería inversa es una etapa de la reingeniería."
      },
      {
        pregunta: "¿Qué técnica se utiliza para diseñar nuevas pruebas de software y evaluar la calidad de las pruebas existentes?",
        respuestas: [
          "Pruebas de mutación.",
          "Pruebas de regresión.",
          "Pruebas de caja blanca.",
          "Pruebas de caja negra."
        ],
        correcta: "Pruebas de mutación."
      },
      {
        pregunta: "¿Cuál de las siguientes opciones no es una característica del código heredado?",
        respuestas: [
          "Está desarrollado con las técnicas y herramientas más modernas.",
          "Fue creado por personas que ya no están en el equipo actual.",
          "Está desarrollado con técnicas y herramientas en desuso.",
          "Ha pasado por múltiples actividades de mantenimiento."
        ],
        correcta: "Está desarrollado con las técnicas y herramientas más modernas."
      },
      {
        pregunta: "¿En qué fase se desarrollan los casos de uso más críticos?",
        respuestas: [
          "Inicio.",
          "Elaboración.",
          "Transición.",
          "Construcción."
        ],
        correcta: "Elaboración."
      },
      {
        pregunta: "¿Qué conseguiremos con una buena gestión del mantenimiento?",
        respuestas: [
          "Cliente contento para futuros proyectos.",
          "Mejora en la calidad del producto software.",
          "Todas las otras opciones son correctas.",
          "Reducción de mantenimiento a largo plazo."
        ],
        correcta: "Todas las otras opciones son correctas."
      },
      {
        pregunta: "¿Qué característica de ISO 25010:2011 mide la facilidad para validar un sistema mediante pruebas?",
        respuestas: [
          "Testabilidad.",
          "Analizabilidad.",
          "Modularidad.",
          "Reusabilidad."
        ],
        correcta: "Testabilidad."
      },
      {
        pregunta: "¿Qué técnica se utiliza para seleccionar los valores límite en las pruebas de software?",
        respuestas: [
          "Valores de prueba límite.",
          "Conjetura de errores.",
          "Cobertura de decisiones.",
          "Clases de equivalencia."
        ],
        correcta: "Valores de prueba límite."
      },
      {
        pregunta: "¿Qué es una Change Request?",
        respuestas: [
          "Respuesta que autoriza un cambio en la línea base de la arquitectura.",
          "Petición de cambio en la línea base de la arquitectura.",
          "Petición de cambio de la línea base de la configuración.",
          "Respuesta que autoriza un cambio en la línea base de la configuración."
        ],
        correcta: "Petición de cambio de la línea base de la configuración."
      },
      {
        pregunta: "¿Cuál es el tipo de mantenimiento que tiene un mayor coste relativo?",
        respuestas: [
          "Adaptativo.",
          "Adaptativo.",
          "Preventivo.",
          "Perfectivo o evolutivo."
        ],
        correcta: "Perfectivo o evolutivo."
      },
      {
        pregunta: "En Scrum, el Product Backlog está compuesto por...",
        respuestas: [
          "Las historias de usuario.",
          "El coste estimado del proyecto.",
          "Los casos de uso críticos.",
          "Los problemas del sistema."
        ],
        correcta: "Las historias de usuario."
      },
      {
        pregunta: "¿Cuál es el propósito de la branch hotfixes?",
        respuestas: [
          "Arreglar problemas encontrados en preproducción.",
          "Arreglar problemas encontrados durante el desarrollo.",
          "Arreglar problemas encontrados en producción.",
          "Arreglar problemas encontrados durante la implementación de funcionalidades."
        ],
        correcta: "Arreglar problemas encontrados en producción."
      },
      {
        pregunta: "¿Qué ventaja ofrece el modelo de AENOR para la industria del software iberoamericana?",
        respuestas: [
          "Está orientado a grandes corporaciones multinacionales.",
          "Menor inversión de dinero, tiempo y recursos.",
          "Alta burocracia y rigidez en los procesos.",
          "Mayor inversión de dinero, tiempo y recursos."
        ],
        correcta: "Menor inversión de dinero, tiempo y recursos."
      },
      {
        pregunta: "¿Qué ocurre durante la fase de Elaboración en el Proceso Unificado de Desarrollo (PUD)?",
        respuestas: [
          "Se mantienen y actualizan los módulos de software desarrollados.",
          "Se entregan incrementos funcionales al cliente.",
          "Se define la arquitectura del sistema y se mitigan los riesgos principales.",
          "Se construye el software completo."
        ],
        correcta: "Se define la arquitectura del sistema y se mitigan los riesgos principales."
      },
      {
        pregunta: "¿Qué tipo de cobertura asegura que todas las sentencias de un programa sean recorridas al menos una vez?",
        respuestas: [
          "Cobertura de condiciones.",
          "Cobertura de decisiones.",
          "Cobertura de condiciones/decisiones.",
          "Cobertura de sentencias."
        ],
        correcta: "Cobertura de sentencias."
      },
      {
        pregunta: "¿Qué caracteriza las pruebas de sistema?",
        respuestas: [
          "Siempre se ejecutan en paralelo con las pruebas de aceptación.",
          "Evalúan la interacción del sistema con su entorno, como redes y hardware.",
          "Verifican que todas las clases funcionan de manera aislada.",
          "Simulan el comportamiento del usuario final para aprobar el producto."
        ],
        correcta: "Evalúan la interacción del sistema con su entorno, como redes y hardware."
      },
      {
        pregunta: "¿Qué principio de calidad de Humphrey destaca la importancia de la medición en el desarrollo de software?",
        respuestas: [
          "Gestionar la calidad del producto requiere medir la calidad del proceso.",
          "La medición es innecesaria si el equipo está motivado.",
          "La calidad del producto depende exclusivamente de las pruebas finales.",
          "La calidad se asegura únicamente al final del ciclo de vida del software."
        ],
        correcta: "Gestionar la calidad del producto requiere medir la calidad del proceso."
      },
      {
        pregunta: "¿En qué tipo de evaluación la organización obtiene una puntuación a nivel de proceso?",
        respuestas: [
          "Ninguna de las otras respuestas.",
          "Por madurez.",
          "Por proceso.",
          "Por capacidad."
        ],
        correcta: "Por capacidad."
      },
      {
        pregunta: "¿Cuál de las siguientes afirmaciones sobre el mantenimiento no es correcta?",
        respuestas: [
          "Coste de corregir defectos es absoluto a la fase de ciclo de vida del Software, siempre es el mismo.",
          "Tras la salida del producto tendremos que realizar el mínimo Número de mantenimiento posibles.",
          "El mantenimiento afecta a la calidad, pero la calidad también afecta en el coste de mantenimiento.",
          "La calidad no se relaciona con el mantenimiento."
        ],
        correcta: "El mantenimiento afecta a la calidad, pero la calidad también afecta en el coste de mantenimiento."
      },
      {
        pregunta: "¿Cómo se define el cálculo de todas las combinaciones posibles?",
        respuestas: [
          "Producto cartesiano.",
          "Cobertura de pares.",
          "Cobertura de cada uso.",
          "Estrategia 'n-wise'."
        ],
        correcta: "Producto cartesiano."
      },
      {
        pregunta: "¿Cuál es la función de la 'gestión de liberación/entregas'?",
        respuestas: [
          "Preparar el software para la entrega externa y hacer un seguimiento de las versiones del sistema que se entregaron para uso del cliente.",
          "Seguimiento de las diferentes versiones de los componentes del sistema y garantizar que los cambios hechos por diferentes desarrolladores a los componentes no interfieren entre sí.",
          "Seguimiento de las peticiones de cambios al software por parte de clientes y desarrolladores, estimar los costes y el efecto de realizar dichos cambios y decidir si deben implementarse los cambios y cuándo.",
          "Proceso de ensamblar los componentes del programa, datos, y liberarlos para crear un sistema ejecutable."
        ],
        correcta: "Preparar el software para la entrega externa y hacer un seguimiento de las versiones del sistema que se entregaron para uso del cliente."
      },
      {
        pregunta: "¿Cuál de las siguientes metodologías no está basada en pruebas?",
        respuestas: [
          "ABDD.",
          "DDD.",
          "BDD.",
          "TDD."
        ],
        correcta: "DDD."
      },
      {
        pregunta: "¿Cuál es el enfoque principal del Proceso Unificado de Desarrollo (PUD)?",
        respuestas: [
          "Iteración y desarrollo incremental, con énfasis en la arquitectura y casos de uso.",
          "Enfoque en la documentación extensa antes del desarrollo.",
          "Desarrollo basado en requisitos no funcionales.",
          "Gestión detallada de cronogramas y recursos humanos."
        ],
        correcta: "Iteración y desarrollo incremental, con énfasis en la arquitectura y casos de uso."
      },
      {
        pregunta: "¿Cuál es el propósito del sistema de gestión de la calidad?",
        respuestas: [
          "Planificar los recursos humanos de una empresa.",
          "Establecer normas para la satisfacción del cliente.",
          "Desarrollar productos innovadores.",
          "Controlar y dirigir una organización con respecto a la calidad."
        ],
        correcta: "Controlar y dirigir una organización con respecto a la calidad."
      },
      {
        pregunta: "¿Qué significa 'calidad' en el contexto del software según la norma ISO 9000?",
        respuestas: [
          "La cantidad de características innovadoras en el software.",
          "Grado en el que un conjunto de características inherentes cumple con los requisitos.",
          "La cantidad de errores encontrados durante la prueba.",
          "La facilidad de uso del software para todos los usuarios."
        ],
        correcta: "Grado en el que un conjunto de características inherentes cumple con los requisitos."
      },
      {
        pregunta: "¿Cuáles son los tipos de metodologías de desarrollo estudiadas?",
        respuestas: [
          "Iterativo e incremental.",
          "Convencionales, estructurales y orientado a objetos.",
          "Convencionales y dinámicos.",
          "Convencionales, iterativos y dinámicos."
        ],
        correcta: "Convencionales, estructurales y orientado a objetos."
      },
      {
        pregunta: "¿Cuándo acaba el ciclo de vida de un producto software?",
        respuestas: [
          "Cuando los desarrolladores finalizan el código.",
          "Cuando se entrega al cliente.",
          "Nunca acaba.",
          "Cuando el cliente deja de usarlo."
        ],
        correcta: "Cuando el cliente deja de usarlo."
      },
      {
        pregunta: "¿Cuáles son las motivaciones para hacer bien un buen software?",
        respuestas: [
          "Hacer buen software.",
          "Hacer bien software.",
          "Todas las otras respuestas son correctas.",
          "Hacer software."
        ],
        correcta: "Todas las otras respuestas son correctas."
      },
      {
        pregunta: "¿Cuál de todas es lo que influye en la calidad de un software?",
        respuestas: [
          "Requisitos funcionales.",
          "Requisitos funcionales y la seguridad del software y eficiencia.",
          "Que sea fácil de usar, eficiente y seguro.",
          "Requisitos funcionales y no funcionales."
        ],
        correcta: "Requisitos funcionales y no funcionales."
      },
      {
        pregunta: "¿Qué deben hacer las organizaciones con los estándares internacionales propuestos?",
        respuestas: [
          "Adoptarlos sin ningún tipo de modificación.",
          "Adaptarlos a su propia realidad.",
          "Ignorarlos y crear sus propios estándares.",
          "Aplicarlos exclusivamente en el área de tecnología."
        ],
        correcta: "Adaptarlos a su propia realidad."
      },
      {
        pregunta: "¿Cuál es el proceso que no pertenece a los procesos técnicos?",
        respuestas: [
          "Proceso de integración.",
          "Proceso de definición de requisitos del sistema/software.",
          "Proceso de implementación.",
          "Proceso de adquisición."
        ],
        correcta: "Proceso de adquisición."
      },
      {
        pregunta: "¿Qué es un Sprint Backlog en Scrum?",
        respuestas: [
          "Las historias de usuario que se van a desarrollar en el sprint.",
          "Una lista de sprints completados.",
          "Un conjunto de tareas no completadas del sprint anterior.",
          "Las historias de usuario completadas en el sprint anterior."
        ],
        correcta: "Las historias de usuario que se van a desarrollar en el sprint."
      },
      {
        pregunta: "¿Cuál de las siguientes es una actividad básica de la gestión de la configuración?",
        respuestas: [
          "Gestión de liberaciones/entregas.",
          "Gestión del cambio.",
          "Gestión de versiones.",
          "Todas las otras respuestas son correctas."
        ],
        correcta: "Todas las otras respuestas son correctas."
      },
      {
        pregunta: "¿Qué significa el número 'minor' en el versionado semántico?",
        respuestas: [
          "Indica la corrección de errores graves en el sistema.",
          "Indica una actualización de seguridad.",
          "Representa un cambio que agrega nuevas funcionalidades sin romper compatibilidad.",
          "Señala una versión lista para producción."
        ],
        correcta: "Representa un cambio que agrega nuevas funcionalidades sin romper compatibilidad."
      },
      {
        pregunta: "¿Qué es el PUD (Proceso Unificado de Desarrollo de Software)?",
        respuestas: [
          "PUD es una metodología de desarrollo en la que se desarrolla el sistema mediante la visión del cliente.",
          "PUD es una metodología de desarrollo para transformar los requisitos de usuario en un sistema software.",
          "PUD es una metodología de desarrollo en la cual se juntan todas las metodologías ya conocidas.",
          "PUD es una metodología de desarrollo para transformar los requisitos del sistema en un plan de desarrollo."
        ],
        correcta: "PUD es una metodología de desarrollo para transformar los requisitos de usuario en un sistema software."
      },
      {
        pregunta: "¿CUÁL ES LA RESPUESTA CORRECTA SOBRE EL MODELO V DEL TESTING?",
        respuestas: [
          "Las pruebas de integración se encargan de que las diferentes pruebas unitarias sean pasadas de nuevo, pero esta vez como conjunto.",
          "Todas las respuestas son verdaderas.",
          "El testing, además del código, comprueba que otros campos como el diseño del sistema sean correctos.",
          "Las pruebas de aceptación pueden ser tomadas por el cliente."
        ],
        correcta: "Todas las respuestas son verdaderas."
      },
      {
        pregunta: "¿Cuál de las siguientes es una de las características de calidad para evaluar la 'Mantenibilidad' según ISO 25010?",
        respuestas: [
          "Eficiencia.",
          "Adaptabilidad.",
          "Compatibilidad.",
          "Capacidad para ser analizado."
        ],
        correcta: "Capacidad para ser analizado."
      },
      {
        pregunta: "Según la teoría de las ventanas rotas, un pequeño defecto no corregido:",
        respuestas: [
          "Motiva el esfuerzo colectivo por arreglarlo.",
          "Aumenta la calidad del equipo.",
          "No afecta la calidad del software.",
          "Puede derivar en defectos mayores."
        ],
        correcta: "Puede derivar en defectos mayores."
      },
      {
        pregunta: "¿La organización del tipo de evaluación de calidad por madurez?",
        respuestas: [
          "Obtiene una puntuación a nivel de proceso.",
          "Disminuye el nivel de capacidad para todos los procesos.",
          "Disminuye todos los atributos de organización.",
          "Obtiene una puntuación cuyo alcance es la organización."
        ],
        correcta: "Obtiene una puntuación cuyo alcance es la organización."
      },
      {
        pregunta: "¿Cuál es el objetivo principal del mantenimiento adaptativo?",
        respuestas: [
          "Adaptarse a cambios en el entorno de trabajo.",
          "Incorporar nuevas funcionalidades al software.",
          "Modificar el software para mejorar la calidad sin alterar su funcionalidad.",
          "Corregir defectos que causan fallos."
        ],
        correcta: "Adaptarse a cambios en el entorno de trabajo."
      },
      {
        pregunta: "No es un tipo de cobertura para código fuente:",
        respuestas: [
          "Cobertura de sentencia.",
          "Cobertura de decisiones (de ramas o de todos los arcos).",
          "Cobertura de funciones.",
          "Cobertura de condiciones."
        ],
        correcta: "Cobertura de funciones."
      },
      {
        pregunta: "¿En qué consisten las pruebas de regresión?",
        respuestas: [
          "En que el usuario compruebe, junto al personal encargado del mantenimiento, la adecuación del cambio a sus necesidades.",
          "En comprobar la integración de los componentes modificados con el resto del sistema.",
          "Ninguna de las otras respuestas es correcta.",
          "Se somete el software modificado a casos de pruebas previamente almacenados y por los que ya pasó."
        ],
        correcta: "Se somete el software modificado a casos de pruebas previamente almacenados y por los que ya pasó."
      },
      {
        pregunta: "¿Quién realiza las auditorías de certificación?",
        respuestas: [
          "Los responsables de la creación de los estándares.",
          "Ninguna de las otras respuestas es correcta.",
          "La propia empresa.",
          "Un tercero independiente."
        ],
        correcta: "Un tercero independiente."
      },
      {
        pregunta: "¿Cuál es la incorrecta?",
        respuestas: [
          "El modelo en espiral no es una metodología de desarrollo.",
          "En el modelo incremental el usuario tiende a involucrarse menos.",
          "En el modelo en espiral la evaluación de los riesgos es una tarea compleja.",
          "Al utilizar el modelo en cascada no se refleja realmente el proceso de desarrollo del software."
        ],
        correcta: "En el modelo incremental el usuario tiende a involucrarse menos."
      },
      {
        pregunta: "¿Qué mantenimiento es también conocido como mantenimiento evolutivo?",
        respuestas: [
          "Mantenimiento Correctivo.",
          "Mantenimiento Adaptativo.",
          "Mantenimiento Preventivo.",
          "Mantenimiento Perfectivo."
        ],
        correcta: "Mantenimiento Perfectivo."
      },
      {
        pregunta: "¿Qué pruebas de las siguientes es más eficiente?",
        respuestas: [
          "pocos valores con pocos problemas encontrados.",
          "muchos valores con pocos problemas encontrados.",
          "pocos valores con muchos problemas encontrados.",
          "muchos valores con muchos problemas encontrados."
        ],
        correcta: "pocos valores con muchos problemas encontrados."
      },
      {
        pregunta: "¿Cuál de las siguientes NO es correcta?",
        respuestas: [
          "La versión major X (X.y.z | X > 0) debe ser incrementada si cualquier cambio no compatible con la versión anterior.",
          "La versión minor (x.Y.z | x > 0) debe incrementarse cuando se introducen solo arreglos compatibles con la versión anterior.",
          "La versión 1.0.0 define el API pública.",
          "Tras una liberación, los números se quedan fijos, y la siguiente versión debería ser X+1.Y.Z."
        ],
        correcta: "La versión minor (x.Y.z | x > 0) debe incrementarse cuando se introducen solo arreglos compatibles con la versión anterior."
      },
      {
        pregunta: "¿Cuál de las respuestas cuadra con la estrategia 'each use'?",
        respuestas: [
          "Las dos son correctas.",
          "Test suite 1 = [1, 5, 8], [2, 6, 9], [3, 7, 8], [4, 5, 9].",
          "Las dos son falsas.",
          "Test suite 1 = [2,6,9], [2,5,8], [2,7,9], [1,6,8], [1,5,9], [1,7,8], [4,6,9], [4,5,8], [4,7,9], [3,6,8], [3,5,9], [3,7,8]."
        ],
        correcta: "Test suite 1 = [1, 5, 8], [2, 6, 9], [3, 7, 8], [4, 5, 9]."
      },
      {
        pregunta: "¿Cuál de las siguientes metodologías no está enfocada a la Orientación a Objetos?",
        respuestas: [
          "De De Marco.",
          "PUD.",
          "Métrica v3 OO.",
          "OMT."
        ],
        correcta: "De De Marco."
      },
      {
        pregunta: "Para un proyecto enfocado a la gestión de información, ¿qué metodología se recomienda usar?",
        respuestas: [
          "Metodología Estructurada.",
          "Metodología Incremental.",
          "Metodología Orientada a Objetos.",
          "Metodología Orientada a Objetos y estructuradas."
        ],
        correcta: "Metodología Orientada a Objetos y estructuradas."
      },
      {
        pregunta: "¿Qué es la integridad?",
        respuestas: [
          "Ninguna respuesta de las otras respuestas es correcta.",
          "El seguimiento intensivo de la historia de cambios que sufre un software en todos sus aspectos a lo largo de su vida.",
          "El seguimiento intensivo de la historia de cambios que sufre exclusivamente el código un software a lo largo de su vida.",
          "Lo que permite que solo los encargados de realizar cambios en un software sean capaces de hacerlo."
        ],
        correcta: "Lo que permite que solo los encargados de realizar cambios en un software sean capaces de hacerlo."
      },
      {
        pregunta: "¿Qué mantenimiento se enfoca en los cambios derivados de requisitos de negocio?",
        respuestas: [
          "Adaptativo.",
          "Correctivo.",
          "Perfectivo.",
          "Preventivo."
        ],
        correcta: "Perfectivo."
      },
      {
        pregunta: "En las metodologías ágiles, una de las ventajas del desarrollo iterativo es:",
        respuestas: [
          "Eliminar la necesidad de reuniones diarias.",
          "Reducir los costos de riesgo a los de un solo incremento.",
          "Evitar la necesidad de documentación.",
          "Permitir la entrega del producto sin pruebas."
        ],
        correcta: "Reducir los costos de riesgo a los de un solo incremento."
      },
      {
        pregunta: "En el proceso de gestión de versiones, ¿Qué se entiende por 'línea base'?",
        respuestas: [
          "Una copia de seguridad del sistema en producción.",
          "Una colección de versiones de componentes controlada.",
          "Un informe de las pruebas realizadas.",
          "Una versión final de software lista para la producción."
        ],
        correcta: "Una colección de versiones de componentes controlada."
      },
      {
        pregunta: "¿Cuál de los siguientes modelos está orientado a PYMES?",
        respuestas: [
          "ISO 33000.",
          "MMIS 2.0.",
          "CMMI.",
          "ISO 12207."
        ],
        correcta: "MMIS 2.0."
      },
      {
        pregunta: "¿Qué ventaja principal ofrecen las pruebas de mutación?",
        respuestas: [
          "Reducen significativamente el número de casos de prueba necesarios.",
          "Son aplicables únicamente a pruebas de caja negra.",
          "Garantizan una cobertura del 100% de las sentencias del código.",
          "Permiten evaluar la calidad de los casos de prueba existentes al descubrir ambigüedades en el código."
        ],
        correcta: "Permiten evaluar la calidad de los casos de prueba existentes al descubrir ambigüedades en el código."
      },
      {
        pregunta: "¿Qué tipo de mantenimiento se realiza para que el software funcione en un nuevo sistema operativo?",
        respuestas: [
          "Adaptativo.",
          "Preventivo.",
          "Perfectivo.",
          "Correctivo."
        ],
        correcta: "Adaptativo."
      },
      {
        pregunta: "Las pruebas de aceptación son realizadas generalmente por:",
        respuestas: [
          "Ninguna de las otras respuestas.",
          "El cliente que encarga el software.",
          "Un equipo externo de testeo.",
          "Los desarrolladores de software."
        ],
        correcta: "El cliente que encarga el software."
      },
      {
        pregunta: "¿Qué es una línea base?",
        respuestas: [
          "Es una definición de un sistema específico, por tanto, especifica las versiones del componente que se incluyen en el sistema.",
          "Versión del código con las funcionalidades más básicas.",
          "Es un conjunto de pruebas que se realizan para verificar la estabilidad del sistema.",
          "Es una secuencia de versiones de código fuente con las versiones más recientes en la secuencia derivadas de las versiones anteriores."
        ],
        correcta: "Es una definición de un sistema específico, por tanto, especifica las versiones del componente que se incluyen en el sistema."
      },
      {
        pregunta: "El modelo de evaluación ISO 33000:",
        respuestas: [
          "Es un modelo solo aplicable a la industria de servicios.",
          "Se basa únicamente en el control estadístico de procesos.",
          "No define directamente un proceso de evaluación, sino sus requisitos.",
          "Está diseñado exclusivamente para grandes organizaciones."
        ],
        correcta: "No define directamente un proceso de evaluación, sino sus requisitos."
      },
      {
        pregunta: "¿Cuál de las siguientes no es una herramienta utilizada en la gestión de mantenimiento?",
        respuestas: [
          "Sistema de gestión de proyectos.",
          "Sistema de seguimiento de incidencias.",
          "Sistema de control de versiones.",
          "Sistema de gestión de bases de datos."
        ],
        correcta: "Sistema de gestión de bases de datos."
      },
      {
        pregunta: "¿Cuál es la finalidad de las ramas de características en Git Flow?",
        respuestas: [
          "Realizar pruebas de integración.",
          "Crear parches para errores críticos.",
          "Desarrollar nuevas funcionalidades sin interferir con el código principal.",
          "Almacenar el código en producción."
        ],
        correcta: "Desarrollar nuevas funcionalidades sin interferir con el código principal."
      },
      {
        pregunta: "¿Qué tipo de liberalizaciones podemos encontrar en el Proceso de Liberalización?",
        respuestas: [
          "Software Masivo.",
          "Software a medida.",
          "Software de prueba.",
          "A y B son correctas."
        ],
        correcta: "A y B son correctas."
      },
      {
        pregunta: "¿Cuál es una práctica recomendada para mejorar la mantenibilidad según la ISO 25010:2011?",
        respuestas: [
          "Reducir la cantidad de documentación del sistema para agilizar las modificaciones.",
          "Incrementar la complejidad de los módulos para evitar cambios frecuentes.",
          "Implementar soluciones ad hoc en lugar de una estrategia sistemática.",
          "Garantizar que los módulos sean independientes para minimizar el impacto de los cambios."
        ],
        correcta: "Garantizar que los módulos sean independientes para minimizar el impacto de los cambios."
      },
      {
        pregunta: "¿Cuál de las siguientes características NO pertenece a la mantenibilidad según ISO 25010?",
        respuestas: [
          "Confidencialidad.",
          "Capacidad para ser analizado.",
          "Reusabilidad.",
          "Modularidad."
        ],
        correcta: "Confidencialidad."
      },
      {
        pregunta: "En el contexto de los criterios de cobertura, ¿qué es la 'cobertura de condiciones/decisiones'?",
        respuestas: [
          "Verifica que las condiciones y decisiones se evalúan a true o false al menos una vez.",
          "Satisface únicamente el criterio de cobertura de sentencias, sin necesidad de decisiones.",
          "Asegura que cada combinación de condiciones se prueba exhaustivamente en todas las situaciones.",
          "Garantiza que todas las sentencias del programa sean ejecutadas."
        ],
        correcta: "Verifica que las condiciones y decisiones se evalúan a true o false al menos una vez."
      },
      {
        pregunta: "¿Cuál es la respuesta correcta sobre la diferencia entre error, defecto y fallo?",
        respuestas: [
          "Un error en el software es generado a raíz de un fallo cometido por una persona.",
          "Un fallo es la equivocación realizada por una persona.",
          "Un defecto en el software es el resultado de la ejecución de un programa con errores.",
          "Ninguna respuesta es correcta."
        ],
        correcta: "Ninguna respuesta es correcta."
      },
      {
        pregunta: "¿Cuál es la definición intuitiva de madurez?",
        respuestas: [
          "Simplificar los procesos para reducir costo.",
          "Hacer las cosas cada vez mejor.",
          "Capacidad de producir más software en menos tiempo.",
          "Mejorar continuamente los procesos para alcanzar resultados de calidad."
        ],
        correcta: "Hacer las cosas cada vez mejor."
      },
      {
        pregunta: "¿Cuál será el origen principal de los cambios a nuestro desarrollo?",
        respuestas: [
          "La estética del código.",
          "No debemos realizar cambios a nuestro desarrollo.",
          "El propio programador piensa una mejor implementación.",
          "El cliente nos pide cambiar el software."
        ],
        correcta: "El cliente nos pide cambiar el software."
      },
      {
        pregunta: "¿Cuál de estas definiciones es la correcta para la actividad de la gestión de la configuración 'Gestión de Liberaciones/Entregas'?",
        respuestas: [
          "Seguimiento de las diferentes versiones de los componentes del sistema para repararlas por los diseñadores de la construcción.",
          "Preparar el software para la entrega externa y hacer un seguimiento de las versiones del sistema que se entregaron para uso del cliente.",
          "Seguimiento de las peticiones de cambio al software por parte de clientes y desarrolladores, estimar los costes y el efecto, etc.",
          "Proceso que realiza el ensamblaje de los componentes del programa, datos y librerías."
        ],
        correcta: "Preparar el software para la entrega externa y hacer un seguimiento de las versiones del sistema que se entregaron para uso del cliente."
      },
      {
        pregunta: "¿Qué es un Release Plan (Plan de liberación/publicación)?",
        respuestas: [
          "Un calendario de reuniones internas que organiza la disponibilidad del equipo durante el desarrollo del proyecto.",
          "Una lista de todos los recursos financieros asignados al proyecto para su implementación inicial.",
          "Un documento que describe únicamente los aspectos técnicos del sistema sin establecer fechas ni funcionalidades.",
          "Un plan que describe ¿Qué porciones de las funcionalidades de un sistema serán implementadas en cada release y fundamentos de cada release."
        ],
        correcta: "Un calendario de reuniones internas que organiza la disponibilidad del equipo durante el desarrollo del proyecto."
      },
      {
        pregunta: "¿Qué significa la cobertura Pair-Wise?",
        respuestas: [
          "Maximizar la cobertura con un único caso de prueba.",
          "Combinar todos los valores de los parámetros en un único caso de prueba.",
          "Probar cada valor interesante al menos una vez.",
          "Probar cada par de valores de dos parámetros."
        ],
        correcta: "Probar cada par de valores de dos parámetros."
      },
      {
        pregunta: "En el contexto de calidad de procesos, ¿qué es el modelo CMMI-DEV?",
        respuestas: [
          "Un estándar de evaluación de software para pequeñas empresas.",
          "Un modelo para evaluar la seguridad en redes.",
          "Un modelo para mejorar los procesos de desarrollo.",
          "Un modelo para evaluar la adquisición de software."
        ],
        correcta: "Un modelo para mejorar los procesos de desarrollo."
      },
      {
        pregunta: "¿Qué técnica de generación de casos de prueba considera restricciones entre pares de valores?",
        respuestas: [
          "AETG (Automatic Efficient Test Generator).",
          "Pairwise.",
          "Antirandom.",
          "PROW (Pairwise with Restrictions, Order, and Weight)."
        ],
        correcta: "PROW (Pairwise with Restrictions, Order, and Weight)."
      },
      {
        pregunta: "¿Cuál es el nombre de la causa de que el software falle?",
        respuestas: [
          "Defecto.",
          "Error.",
          "Fallo.",
          "Rotura."
        ],
        correcta: "Defecto."
      },
      {
        pregunta: "¿Cuál de los siguientes es un objetivo de la mejora del proceso según el modelo CMMI?",
        respuestas: [
          "Medir y controlar el proceso.",
          "Planificar el costo del software.",
          "Realizar pruebas de software.",
          "Asignar responsables a cada actividad."
        ],
        correcta: "Medir y controlar el proceso."
      },
      {
        pregunta: "Definición de gestión de configuración:",
        respuestas: [
          "Proceso de pruebas de software.",
          "Proceso de documentación de software.",
          "Proceso de control de cambios en el software.",
          "Proceso de desarrollo de software."
        ],
        correcta: "Proceso de control de cambios en el software."
      },
      {
        pregunta: "¿Cuál de estas fases de la descomposición de un trabajo es incorrecta?",
        respuestas: [
          "Testeo.",
          "Inicio.",
          "Construcción.",
          "Elaboración."
        ],
        correcta: "Testeo."
      },
      {
        pregunta: "¿En qué consisten las pruebas de regresión?",
        respuestas: [
          "Ninguna de las otras respuestas es correcta.",
          "En comprobar la integración de los componentes modificados con el resto del sistema.",
          "Se somete el software modificado a casos de pruebas previamente almacenados y por los que ya pasó.",
          "En que el usuario compruebe, junto al personal encargado del mantenimiento, la adecuación del cambio a sus necesidades."
        ],
        correcta: "Se somete el software modificado a casos de pruebas previamente almacenados y por los que ya pasó."
      },
      {
        pregunta: "¿Qué es la metodología de desarrollo?",
        respuestas: [
          "Es una herramienta que nos especifica el orden de los procesos.",
          "Es un conjunto de buenas prácticas que especifican cómo realizar los procesos descritos en el modelo de referencia de procesos para llevar a cabo un proyecto software.",
          "Es una descripción de las líneas de código del software.",
          "Es un documento que contiene los requisitos del proyecto."
        ],
        correcta: "Es un conjunto de buenas prácticas que especifican cómo realizar los procesos descritos en el modelo de referencia de procesos para llevar a cabo un proyecto software."
      },
      {
        pregunta: "¿Qué norma describe en detalle el proceso de mantenimiento de software?",
        respuestas: [
          "ISO/IEC 14764:2006.",
          "ISO 12207:2017.",
          "ISO 25010:2011.",
          "ISO/IEC 25000:2014."
        ],
        correcta: "ISO/IEC 14764:2006."
      },
      {
        pregunta: "¿Qué tipo de cobertura verifica que todas las sentencias de un programa sean ejecutadas?",
        respuestas: [
          "Cobertura de sentencias.",
          "Cobertura de condiciones.",
          "Cobertura de condiciones/decisiones.",
          "Cobertura de decisiones."
        ],
        correcta: "Cobertura de sentencias."
      },
      {
        pregunta: "¿Cuál de las siguientes no es una dificultad común en la gestión de mantenimiento?",
        respuestas: [
          "Falta de documentación.",
          "Complejidad del sistema.",
          "Alta rotación de personal.",
          "Incremento de la productividad."
        ],
        correcta: "Incremento de la productividad."
      },
      {
        pregunta: "¿Qué principio establece que una clase debe estar abierta a extensiones pero cerrada a modificaciones?",
        respuestas: [
          "Principio Open Closed.",
          "Principio DRY.",
          "Principio YAGNI.",
          "Principio de Responsabilidad única."
        ],
        correcta: "Principio Open Closed."
      },
      {
        pregunta: "¿Qué estrategia de combinación genera casos de prueba de tamaño reducido con cobertura adecuada?",
        respuestas: [
          "Random.",
          "Todas las anteriores.",
          "PROW.",
          "AETG."
        ],
        correcta: "AETG."
      },
      {
        pregunta: "¿Qué característica de mantenibilidad se relaciona con minimizar defectos al modificar?",
        respuestas: [
          "Modificabilidad.",
          "Testabilidad.",
          "Modularidad.",
          "Reusabilidad."
        ],
        correcta: "Modificabilidad."
      },
      {
        pregunta: "¿Cuál de los siguientes no es un resultado de la gestión de configuración?",
        respuestas: [
          "Control y gestión de los elementos de configuración.",
          "Auditoría de configuración.",
          "Control de acceso al sistema para todos los usuarios.",
          "Línea base de configuración."
        ],
        correcta: "Control de acceso al sistema para todos los usuarios."
      },
      {
        pregunta: "Si se produce algún error de acceso a la base de datos:",
        respuestas: [
          "El programa intenta continuar ignorando el error.",
          "El sistema se cierra automáticamente.",
          "Se lanza una SQLException.",
          "Los datos se eliminan de la base de datos."
        ],
        correcta: "Se lanza una SQLException."
      },
      {
        pregunta: "¿Cuál de las siguientes opciones indica un cambio con incompatibilidades en las versiones?",
        respuestas: [
          "Ninguna ocasiona incompatibilidades al cambiar.",
          "Patch.",
          "Minor.",
          "Major."
        ],
        correcta: "Major."
      },
      {
        pregunta: "¿Cuál de las siguientes NO es una ventaja del ciclo de vida en cascada?",
        respuestas: [
          "Impone una estructura de gestión de proyectos y no refleja realmente el proceso de desarrollo del software.",
          "Impone una estructura de gestión de proyectos.",
          "No refleja realmente el proceso de desarrollo del software.",
          "Es muy útil cuando se realiza una migración de software desde un entorno tecnológico obsoleto."
        ],
        correcta: "Impone una estructura de gestión de proyectos y no refleja realmente el proceso de desarrollo del software."
      },
      {
        pregunta: "En el versionado semántico, ¿Qué número representa cambios que rompen la compatibilidad?",
        respuestas: [
          "Major.",
          "Beta.",
          "Patch.",
          "Minor."
        ],
        correcta: "Major."
      },
      {
        pregunta: "Los casos de uso representan...",
        respuestas: [
          "Los requisitos funcionales y no funcionales del sistema.",
          "La A y la B son correctas.",
          "Las acciones que el usuario puede desencadenar en el sistema.",
          "Las restricciones del sistema."
        ],
        correcta: "Las restricciones del sistema."
      },
      {
        pregunta: "¿Qué se hace en la fase de transición de un producto?",
        respuestas: [
          "Se crea una versión beta donde se subsanan errores e incorporan mejoras.",
          "Se especifican los casos de uso y se diseña la arquitectura.",
          "Se especifican los requisitos necesarios.",
          "Todas son correctas."
        ],
        correcta: "Se crea una versión beta donde se subsanan errores e incorporan mejoras."
      },
      {
        pregunta: "¿Cuál de las siguientes opciones describe una 'release menor' de un software masivo?",
        respuestas: [
          "Un programa de instalación para ayudar a instalar el sistema.",
          "La entrega de una configuración específica para un cliente en software a medida.",
          "Modificaciones o parches a problemas informados por el cliente.",
          "Una nueva versión completa del producto."
        ],
        correcta: "Modificaciones o parches a problemas informados por el cliente."
      },
      {
        pregunta: "En la cobertura de condiciones, ¿es cierto que al cumplir un criterio de cobertura necesariamente se cumple el criterio opuesto?",
        respuestas: [
          "Cumplir la cobertura de condiciones asegura que todas las decisiones posibles se prueban.",
          "Este enfoque ignora los valores individuales de las condiciones.",
          "Sólo se evalúan combinaciones de entradas válidas.",
          "No, esta afirmación es falsa."
        ],
        correcta: "No, esta afirmación es falsa."
      },
      {
        pregunta: "¿Qué diferencia hay entre las pruebas de caja negra y las de caja blanca?",
        respuestas: [
          "Ninguna es correcta.",
          "En las pruebas de caja negra se conocen sus entradas y salidas únicamente.",
          "En las pruebas de caja negra se conocen sus entradas, salidas y estructura interna del programa.",
          "En las pruebas de caja blanca se conocen sus entradas y salidas únicamente."
        ],
        correcta: "En las pruebas de caja negra se conocen sus entradas y salidas únicamente."
      },
      {
        pregunta: "¿Cuál es el nivel del CMMI en el que los procesos están bien caracterizados y comprendidos, y se describen en estándares, procedimientos, herramientas y métodos?",
        respuestas: [
          "Nivel 1 Inicial.",
          "Nivel 2 Gestionado.",
          "Nivel 4 Gestionado Cuantitativamente.",
          "Nivel 3 Definido."
        ],
        correcta: "Nivel 3 Definido."
      },
      {
        pregunta: "¿Qué es un 'Change Request'?",
        respuestas: [
          "Ninguna de las otras respuestas.",
          "Una solicitud para cambiar el presupuesto del proyecto.",
          "Una directriz para mejorar el rendimiento del sistema.",
          "Una petición de un cliente para modificar la configuración de software."
        ],
        correcta: "Una petición de un cliente para modificar la configuración de software."
      },
      {
        pregunta: "¿Cuál de los siguientes ISO 25000 se emplea para medir la calidad?",
        respuestas: [
          "25020.",
          "25040.",
          "25030.",
          "25010."
        ],
        correcta: "25020."
      },
      {
        pregunta: "Partes de las Historias de Usuario:",
        respuestas: [
          "Descripción, conversación y confirmación.",
          "Descripción, adaptabilidad y confirmación.",
          "Estimación, predictibilidad y confirmación.",
          "Descripción, predictibilidad y confirmación."
        ],
        correcta: "Descripción, conversación y confirmación."
      },
      {
        pregunta: "¿Qué significa el concepto de 'Línea Base' en gestión de configuración?",
        respuestas: [
          "Un conjunto de requisitos de los usuarios.",
          "La documentación de un sistema.",
          "La primera versión de una aplicación.",
          "Una especificación o producto formalmente revisado que sirve de base para desarrollos futuros."
        ],
        correcta: "Una especificación o producto formalmente revisado que sirve de base para desarrollos futuros."
      },
      {
        pregunta: "¿Cuál de las siguientes estrategias se basa en recorrer todas las combinaciones posibles de valores?",
        respuestas: [
          "Pairwise.",
          "Each use.",
          "Antirandom.",
          "Producto cartesiano."
        ],
        correcta: "Producto cartesiano."
      },
      {
        pregunta: "¿Cuál es el objetivo principal del proceso de ramificación (branching)?",
        respuestas: [
          "Evitar que el trabajo de varios programadores entren en conflicto por colisiones.",
          "Reducir el tamaño del código de un proyecto.",
          "Asegurar que el código funcione sin errores.",
          "Aumentar la velocidad de desarrollo."
        ],
        correcta: "Evitar que el trabajo de varios programadores entren en conflicto por colisiones."
      },
      {
        pregunta: "¿Qué se desarrolla en un sprint?",
        respuestas: [
          "Incremento.",
          "Sprint Backlog.",
          "Product Backlog.",
          "Historias de usuario."
        ],
        correcta: "Sprint Backlog."
      },
      {
        pregunta: "¿Cuáles son las características de calidad que establece el modelo ISO 25010 para un producto software?",
        respuestas: [
          "Fiabilidad, Eficacia de desempeño, Seguridad, Compatibilidad y Mantenibilidad.",
          "Interfaz de usuario, Tiempo de respuesta, Seguridad y Mantenibilidad.",
          "Seguridad, Compatibilidad, Portabilidad y Eficiencia.",
          "Eficacia de desempeño, Capacidad de uso, Seguridad y Fiabilidad."
        ],
        correcta: "Fiabilidad, Eficacia de desempeño, Seguridad, Compatibilidad y Mantenibilidad."
      },
      {
        pregunta: "¿Cuál de los siguientes elementos es parte del conjunto de productos de trabajo en la gestión de configuración?",
        respuestas: [
          "Código fuente.",
          "Plan de pruebas unitarias.",
          "Documentación del usuario final.",
          "Informe de estado de la configuración."
        ],
        correcta: "Informe de estado de la configuración."
      },
      {
        pregunta: "¿Qué es el branching?",
        respuestas: [
          "Versión aprobada de un elemento de configuración que independientemente del medio, es formalmente designado y fijado en un momento específico de tiempo durante el ciclo de vida del elemento de configuración.",
          "Es un conjunto de versiones de un componente de software y otros elementos de configuración de los cuales depende dicho componente.",
          "La creación de una nueva línea base a partir de una versión existente.",
          "Versión operativa del sistema o de un componente que incorpora un subconjunto específico de las capacidades que la versión final deberá tener."
        ],
        correcta: "La creación de una nueva línea base a partir de una versión existente."
      },
      {
        pregunta: "¿Qué garantiza la calidad de un producto software?",
        respuestas: [
          "El estándar ISO 25000.",
          "El cumplimiento de los requisitos funcionales.",
          "Ninguna de las demás son correctas.",
          "No se puede garantizar."
        ],
        correcta: "No se puede garantizar."
      },
      {
        pregunta: "¿Cuál de los siguientes cambios requiere incrementar el número de major en el versionado semántico?",
        respuestas: [
          "Adición de nuevas funcionalidades compatibles hacia atrás.",
          "Corrección de errores que no cambia la interfaz de una clase.",
          "Optimización de código que no afecta las dependencias.",
          "Cambios que rompen la compatibilidad hacia atrás."
        ],
        correcta: "Cambios que rompen la compatibilidad hacia atrás."
      },
      {
        pregunta: "¿Cuál de los siguientes NO es un tipo de prueba?",
        respuestas: [
          "Pruebas de integración.",
          "Pruebas económicas.",
          "Pruebas unitarias.",
          "Pruebas funcionales."
        ],
        correcta: "Pruebas económicas."
      },
      {
        pregunta: "¿Cuál es el principal objetivo de la fase de transición?",
        respuestas: [
          "El estudio de la rentabilidad del proyecto.",
          "La definición de la arquitectura.",
          "El entendimiento del proyecto por parte del equipo.",
          "La entrega del producto."
        ],
        correcta: "La entrega del producto."
      },
      {
        pregunta: "¿Qué actividad de mantenimiento implica analizar diferentes alternativas de implementación y su impacto?",
        respuestas: [
          "Análisis de impacto y de costes/beneficios.",
          "Codificación y pruebas unitarias.",
          "Pruebas de integración.",
          "Documentación del sistema."
        ],
        correcta: "Análisis de impacto y de costes/beneficios."
      },
      {
        pregunta: "¿Cuál es el porcentaje estimado del coste total de un proyecto que puede representar el mantenimiento?",
        respuestas: [
          "Menos del 20%.",
          "Más del 90%.",
          "Entre un 65-85%.",
          "Entre un 40-50%."
        ],
        correcta: "Entre un 65-85%."
      },
      {
        pregunta: "¿Qué representa un 'dominio de entrada'?",
        respuestas: [
          "El conjunto de reglas definidas por el cliente.",
          "Las restricciones de salida en un sistema.",
          "Un conjunto de valores que el sistema nunca puede aceptar.",
          "Los valores aceptables de entrada en un programa."
        ],
        correcta: "Los valores aceptables de entrada en un programa."
      },
      {
        pregunta: "Según ISO 14764:2006, ¿cuál es el objetivo principal del mantenimiento de software?",
        respuestas: [
          "Garantizar que el software funcione en cualquier entorno.",
          "Adaptar, corregir y mejorar un producto entregado.",
          "Sustituir software heredado por nuevas implementaciones.",
          "Corregir defectos e incrementar la eficiencia del código."
        ],
        correcta: "Adaptar, corregir y mejorar un producto entregado."
      },
      {
        pregunta: "¿Según el ISO 25010, cuál es una característica de Eficacia de desempeño?",
        respuestas: [
          "Capacidad para ser usado.",
          "Comportamiento temporal.",
          "Accesibilidad técnica.",
          "Protección contra errores de usuario."
        ],
        correcta: "Comportamiento temporal."
      },
      {
        pregunta: "¿Qué se necesita para gestionar la calidad de un producto?",
        respuestas: [
          "Controlar los procesos sin necesidad de medición.",
          "Definir objetivos amplios sin métricas.",
          "Usar métodos de desarrollo ágiles únicamente.",
          "Medir la calidad de los procesos."
        ],
        correcta: "Medir la calidad de los procesos."
      },
      {
        pregunta: "¿Qué tipo de cambios realiza la reestructuración en el software?",
        respuestas: [
          "Cambios únicamente correctivos.",
          "Cambios en el mismo nivel de abstracción.",
          "Cambios en diferentes niveles de abstracción.",
          "Cambios en el hardware asociado al sistema."
        ],
        correcta: "Cambios en el mismo nivel de abstracción."
      },
      {
        pregunta: "¿Qué modelo está orientado a la evaluación y certificación de PYMEs en la industria del software?",
        respuestas: [
          "CMMI-ACQ.",
          "ISO 12207.",
          "MMIS 2.0 AENOR-AQCLab.",
          "ISO 2501."
        ],
        correcta: "MMIS 2.0 AENOR-AQCLab."
      },
      {
        pregunta: "¿Cuál de las siguientes metodologías ágiles es más utilizada?",
        respuestas: [
          "Custom hybrid.",
          "Lean.",
          "Kanban.",
          "Scrum."
        ],
        correcta: "Scrum."
      },
      {
        pregunta: "La función Minimax consiste en:",
        respuestas: [
          "Obtener el máximo rendimiento.",
          "Obtener la menor cantidad de defectos posible.",
          "Obtener el máximo rendimiento con el mínimo esfuerzo.",
          "Obtener el mínimo esfuerzo."
        ],
        correcta: "Obtener el máximo rendimiento con el mínimo esfuerzo."
      },
      {
        pregunta: "El modelo de procesos se usa para:",
        respuestas: [
          "Como guía para la mejora.",
          "Definir un lenguaje común.",
          "Todas son correctas.",
          "Definir las prioridades y objetivos de mejora."
        ],
        correcta: "Todas son correctas."
      },
      {
        pregunta: "¿Qué es 'fitness for use' según Juran?",
        respuestas: [
          "Adecuación al uso.",
          "Conformidad con requisitos técnicos.",
          "Medida de la fiabilidad del producto.",
          "Cero defectos."
        ],
        correcta: "Adecuación al uso."
      },
      {
        pregunta: "¿Qué pregunta responden las metodologías de desarrollo?",
        respuestas: [
          "¿En qué orden se desarrollan?.",
          "¿Son necesarios otros procesos además de los productivos?.",
          "¿Cuál es el orden adecuado?.",
          "¿Qué herramientas se usan?."
        ],
        correcta: "¿Qué herramientas se usan?."
      },
      {
        pregunta: "¿Qué tipo de mantenimiento se realiza para prevenir futuros problemas?",
        respuestas: [
          "Mantenimiento perfectivo.",
          "Mantenimiento correctivo.",
          "Mantenimiento preventivo.",
          "Mantenimiento adaptativo."
        ],
        correcta: "Mantenimiento preventivo."
      },
      {
        pregunta: "¿Cuáles son los dos subtipos del mantenimiento perfectivo?",
        respuestas: [
          "Mantenimiento de ampliación y mantenimiento de eficiencia.",
          "Mantenimiento de evolución y mantenimiento de eficiencia.",
          "Solo existe uno, que es el mantenimiento de evolución.",
          "Ese tipo de mantenimiento no tiene subtipos."
        ],
        correcta: "Mantenimiento de ampliación y mantenimiento de eficiencia."
      },
      {
        pregunta: "¿Qué práctica es fundamental para la mejora continua de los procesos en una organización de software?",
        respuestas: [
          "Ignorar los errores menores.",
          "Realizar auditorías de procesos periódicas.",
          "Evitar la documentación de procesos.",
          "No realizar revisiones de procesos."
        ],
        correcta: "Realizar auditorías de procesos periódicas."
      },
      {
        pregunta: "¿Qué técnica se basa en la intuición del ingeniero para encontrar defectos?",
        respuestas: [
          "Clases de equivalencia.",
          "Cobertura modificada.",
          "Valores límite.",
          "Conjetura de errores."
        ],
        correcta: "Conjetura de errores."
      },
      {
        pregunta: "De la frase 'Hacer bien y buen software', ¿a qué se refiere hacer buen software?",
        respuestas: [
          "A los procesos.",
          "Ninguna es correcta.",
          "A los productos.",
          "La A y B son correctas."
        ],
        correcta: "A los productos."
      },
      {
        pregunta: "¿Cuál es una característica de la fase Alpha en el ciclo de vida de una liberación?",
        respuestas: [
          "Está disponible para el público general.",
          "Tiene todas las funcionalidades del producto final.",
          "Es una fase inicial y puede ser inestable.",
          "Está libre de errores conocidos."
        ],
        correcta: "Es una fase inicial y puede ser inestable."
      },
      {
        pregunta: "¿Qué es un atributo de proceso?",
        respuestas: [
          "Elemento que una empresa ha de cumplir para alcanzar un nivel de madurez determinado.",
          "Elemento que una empresa ha de cumplir para alcanzar un nivel de capacidad determinado.",
          "Valor numérico dado a un proceso según su productividad.",
          "Elemento utilizado para valorar la calidad de un producto."
        ],
        correcta: "Elemento que una empresa ha de cumplir para alcanzar un nivel de madurez determinado."
      },
      {
        pregunta: "¿Qué tipo de mantenimiento se realiza para que el software funcione en un nuevo sistema operativo?",
        respuestas: [
          "Perfectivo.",
          "Adaptativo.",
          "Preventivo.",
          "Correctivo."
        ],
        correcta: "Adaptativo."
      },
      {
        pregunta: "¿Qué es el control de la calidad?",
        respuestas: [
          "Parte de la gestión de la calidad orientada a proporcionar confianza en que se cumplirán los requisitos de la calidad.",
          "Parte de la gestión de la calidad orientada a aumentar la capacidad de cumplir con los requisitos de la calidad.",
          "Conjunto de características de calidad.",
          "Parte de la gestión de la calidad orientada al cumplimiento de los requisitos de la calidad."
        ],
        correcta: "Parte de la gestión de la calidad orientada al cumplimiento de los requisitos de la calidad."
      },
      {
        pregunta: "En el Semantic Versioning (M.m.p), ¿a qué hace referencia la M?",
        respuestas: [
          "A un gran cambio que rompe la funcionalidad con versiones anteriores.",
          "Al arreglo de un error.",
          "A la adición de una nueva funcionalidad.",
          "Al lanzamiento de una aplicación totalmente distinta."
        ],
        correcta: "A un gran cambio que rompe la funcionalidad con versiones anteriores."
      },
      {
        pregunta: "¿Cuál es la entrada de cada sprint en Scrum?",
        respuestas: [
          "Sprint Backlog.",
          "El diagrama de casos de uso.",
          "Ninguna de las anteriores.",
          "Product Backlog."
        ],
        correcta: "Sprint Backlog."
      },
      {
        pregunta: "¿Cuál es el objetivo de un Producto Mínimo Viable (MVP)?",
        respuestas: [
          "Obtener retroalimentación de los clientes con una versión básica del producto.",
          "Lanzar el producto final con todas las características completas.",
          "Probar las características más avanzadas del producto.",
          "Garantizar que no haya errores en la fase Beta."
        ],
        correcta: "Obtener retroalimentación de los clientes con una versión básica del producto."
      },
      {
        pregunta: "¿Qué técnica de testing permite cubrir todas las combinaciones posibles de valores para las condiciones de decisión?",
        respuestas: [
          "Pair-wise testing.",
          "Cobertura MC/DC.",
          "Cobertura de decisiones.",
          "Cobertura de condiciones múltiples."
        ],
        correcta: "Cobertura MC/DC."
      },
      {
        pregunta: "¿Qué es la trazabilidad?",
        respuestas: [
          "Ninguna respuesta de las otras respuestas es correcta.",
          "Lo que permite que solo los encargados de realizar cambios en un software sean capaces de hacerlo.",
          "El seguimiento intensivo de la historia de cambios que sufre exclusivamente el código de un software a lo largo de su vida.",
          "El seguimiento intensivo de la historia de cambios que sufre un software en todos sus aspectos a lo largo de su vida."
        ],
        correcta: "El seguimiento intensivo de la historia de cambios que sufre un software en todos sus aspectos a lo largo de su vida."
      },
      {
        pregunta: "¿Cuál de las siguientes opciones corresponde a una característica de la portabilidad en el modelo ISO 25010?",
        respuestas: [
          "Tolerancia a fallos.",
          "Capacidad de aprendizaje.",
          "Inadaptabilidad.",
          "Capacidad para ser reemplazado."
        ],
        correcta: "Capacidad para ser reemplazado."
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
      ...this.temas["Tema 3"],
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