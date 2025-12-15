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
      },
      {
        "pregunta": "B03-L11-Q01-¿En qué etapa sería más conveniente tener un equipo diferente al del resto de etapas?",
        "respuestas": [
          "Análisis.",
          "Diseño.",
          "Implementación.",
          "Pruebas."
        ],
        "correcta": "Pruebas.",
        "explicacion": "La respuesta correcta es: \"Pruebas.\"."
      },
      {
        "pregunta": "B03-L11-Q02-Un marco de referencia que refleja los procesos, actividades y tareas desde que el software es concebido hasta que deja de utilizarse es...",
        "respuestas": [
          "Una metodología.",
          "Un ciclo de vida.",
          "Un proceso productivo.",
          "Un proceso de negocio"
        ],
        "correcta": "Un ciclo de vida.",
        "explicacion": "La respuesta correcta es: \"Un ciclo de vida.\"."
      },
      {
        "pregunta": "B03-L11-Q03-¿Cuál es la función principal de la fase de implementación en el ciclo de vida del software?",
        "respuestas": [
          "Definir los requisitos del cliente.",
          "Hacer un croquis de las entidades y relaciones.",
          "Programar el sistema asegurando trazabilidad de los cambios.",
          "Realizar pruebas para detectar fallos."
        ],
        "correcta": "Programar el sistema asegurando trazabilidad de los cambios.",
        "explicacion": "La respuesta correcta es: \"Programar el sistema asegurando trazabilidad de los cambios.\"."
      },
      {
        "pregunta": "B03-L11-Q04-¿Qué modelo de ciclo de vida se caracteriza por no permitir retroceder a fases anteriores y avanzar solo cuando se completa la fase actual?",
        "respuestas": [
          "Modelo incremental.",
          "Modelo en espiral.",
          "Modelo en cascada.",
          "Modelo ágil."
        ],
        "correcta": "Modelo en cascada.",
        "explicacion": "La respuesta correcta es: \"Modelo en cascada.\"."
      },
      {
        "pregunta": "B03-L11-Q05-¿Cuál de estas metodologías de desarrollo NO es estructurada?",
        "respuestas": [
          "Orientadas a objetos.",
          "Orientadas a procesos.",
          "Orientadas a datos.",
          "Mixtas."
        ],
        "correcta": "Orientadas a objetos.",
        "explicacion": "La respuesta correcta es: \"Orientadas a objetos.\"."
      },
      {
        "pregunta": "B03-L11-Q06-¿Cómo se llaman las metodologías sin evolucionar donde los resultados son impredecibles?",
        "respuestas": [
          "Tradicionales.",
          "Convencionales.",
          "Estructuradas.",
          "Orientadas a objetos."
        ],
        "correcta": "Convencionales.",
        "explicacion": "La respuesta correcta es: \"Convencionales.\"."
      },
      {
        "pregunta": "B03-L11-Q07-¿Cuál de las siguientes sentencias es FALSA?",
        "respuestas": [
          "El modelo de procesos se usa para definir las prioridades y objetivos de mejora.",
          "El modelo de procesos se usa como guía para la mejora.",
          "El modelo de procesos se usa como herramienta si no se usa un ciclo de vida.",
          "El modelo de procesos se usa para definir un lenguaje común."
        ],
        "correcta": "El modelo de procesos se usa como herramienta si no se usa un ciclo de vida.",
        "explicacion": "La respuesta correcta es: \"El modelo de procesos se usa como herramienta si no se usa un ciclo de vida.\"."
      },
      {
        "pregunta": "B03-L11-Q08-El ciclo de vida en espiral...",
        "respuestas": [
          "Lo usan la mayoría de las empresas.",
          "Se divide en 3 partes: planificación, análisis de riesgos y evaluación.",
          "Tiene una revisión que incluye todo el ciclo anterior al acabar dicho ciclo.",
          "No requiere de ningún tipo de prototipo."
        ],
        "correcta": "Tiene una revisión que incluye todo el ciclo anterior al acabar dicho ciclo.",
        "explicacion": "La respuesta correcta es: \"Tiene una revisión que incluye todo el ciclo anterior al acabar dicho ciclo.\"."
      },
      {
        "pregunta": "B03-L11-Q09-¿Qué característica principal tiene el lenguaje natural al expresar necesidades de un cliente?",
        "respuestas": [
          "Es preciso y formal.",
          "Es ambiguo e informal.",
          "Está directamente estructurado en requisitos técnicos.",
          "Es equivalente a un diagrama UML."
        ],
        "correcta": "Es ambiguo e informal.",
        "explicacion": "La respuesta correcta es: \"Es ambiguo e informal.\"."
      },
      {
        "pregunta": "B01-L01-Q10-¿Cuál es el objetivo principal de la fase de Obtención de Requisitos en el desarrollo de software?",
        "respuestas": [
          "Diseñar la arquitectura del sistema con UML y otras herramientas.",
          "Realizar pruebas externas para asegurar la calidad del producto.",
          "Implementar el código siguiendo las especificaciones del diseño.",
          "Traducir las necesidades expresadas en lenguaje natural a requisitos funcionales."
        ],
        "correcta": "Traducir las necesidades expresadas en lenguaje natural a requisitos funcionales.",
        "explicacion": "La respuesta correcta es: \"Traducir las necesidades expresadas en lenguaje natural a requisitos funcionales.\"."
      },
      {
        "pregunta": "B03-L11-Q11-¿Qué metodología sería más adecuada para el desarrollo del sistema de control del airbag en un vehículo autónomo?",
        "respuestas": [
          "Una metodología orientada a objetos.",
          "Una metodología estructurada orientada a datos.",
          "Cualquiera de las anteriores.",
          "Ninguna de las anteriores."
        ],
        "correcta": "Una metodología orientada a objetos.",
        "explicacion": "La respuesta correcta es: \"Una metodología orientada a objetos.\"."
      },
      {
        "pregunta": "B03-L11-Q12-Selecciona la opción FALSA",
        "respuestas": [
          "Toda metodología está asociada a un ciclo de vida.",
          "Las metodologías, según su filosofía de desarrollo, pueden clasificarse en tradicionales y ágiles.",
          "Las metodologías convencionales son las más utilizadas normalmente, de ahí su nombre.",
          "Las metodologías estructuradas surgieron antes que las orientadas a objetos."
        ],
        "correcta": "Las metodologías convencionales son las más utilizadas normalmente, de ahí su nombre.",
        "explicacion": "La respuesta correcta es: \"Las metodologías convencionales son las más utilizadas normalmente, de ahí su nombre.\"."
      },
      {
        "pregunta": "B03-L11-Q13-¿Cuál de las siguientes es una característica deseable de una metodología de desarrollo?",
        "respuestas": [
          "Que ignore la reutilización del software.",
          "Que limite el uso de herramientas CASE.",
          "Que facilite la comunicación efectiva entre los participantes.",
          "Que evite verificaciones intermedias."
        ],
        "correcta": "Que facilite la comunicación efectiva entre los participantes.",
        "explicacion": "La respuesta correcta es: \"Que facilite la comunicación efectiva entre los participantes.\"."
      },
      {
        "pregunta": "B03-L11-Q14-¿Qué ventaja principal presenta el modelo incremental frente al modelo en cascada?",
        "respuestas": [
          "Es más fácil estimar el coste total del proyecto.",
          "Permite entregar valor al usuario con mayor frecuencia.",
          "Requiere menor implicación del usuario.",
          "Evita completamente los errores de requisitos."
        ],
        "correcta": "Permite entregar valor al usuario con mayor frecuencia.",
        "explicacion": "La respuesta correcta es: \"Permite entregar valor al usuario con mayor frecuencia.\"."
      },
      {
        "pregunta": "B03-L11-Q15-¿Cuál de las siguientes NO es una fase genérica del ciclo de vida del software?",
        "respuestas": [
          "Definición.",
          "Desarrollo.",
          "Despliegue y Mantenimiento.",
          "Comercialización."
        ],
        "correcta": "Comercialización.",
        "explicacion": "La respuesta correcta es: \"Comercialización.\"."
      },
      {
        "pregunta": "B03-L11-Q16-¿Qué modelo de ciclo de vida tiene como eje central la identificación y gestión de riesgos?",
        "respuestas": [
          "Modelo en cascada.",
          "Modelo incremental.",
          "Modelo en espiral.",
          "Modelo ágil."
        ],
        "correcta": "Modelo en espiral.",
        "explicacion": "La respuesta correcta es: \"Modelo en espiral.\"."
      },
      {
        "pregunta": "B03-L11-Q17-¿Cuál de las siguientes opciones describe mejor el concepto de “tarea” dentro de un proceso de Ingeniería del Software?",
        "respuestas": [
          "Una colección de actividades que se suceden en el tiempo.",
          "Una acción concreta que transforma entradas en salidas.",
          "Un producto generado como entrada o salida.",
          "Un conjunto de tareas relacionadas."
        ],
        "correcta": "Una acción concreta que transforma entradas en salidas.",
        "explicacion": "La respuesta correcta es: \"Una acción concreta que transforma entradas en salidas.\"."
      },
      {
        "pregunta": "B03-L11-Q18-¿Cuál de las siguientes es una ventaja del modelo en cascada?",
        "respuestas": [
          "Refleja fielmente la realidad del desarrollo de software.",
          "Permite obtener resultados tempranos y frecuentes.",
          "Es adecuado cuando los requisitos están bien definidos desde el inicio.",
          "Facilita la comunicación directa con el usuario final."
        ],
        "correcta": "Es adecuado cuando los requisitos están bien definidos desde el inicio.",
        "explicacion": "La respuesta correcta es: \"Es adecuado cuando los requisitos están bien definidos desde el inicio.\"."
      },
      {
        "pregunta": "B03-L11-Q19-¿Qué elemento se sitúa en el centro del triángulo de hierro en un proyecto de software?",
        "respuestas": [
          "Calidad.",
          "Presupuesto.",
          "Alcance.",
          "Tiempo."
        ],
        "correcta": "Calidad.",
        "explicacion": "La respuesta correcta es: \"Calidad.\"."
      },
      {
        "pregunta": "B03-L11-Q20-¿Qué término describe a las personas implicadas en un proyecto, como clientes, desarrolladores y usuarios?",
        "respuestas": [
          "Artefactos.",
          "Procesos productivos.",
          "Stakeholders.",
          "Metodologías."
        ],
        "correcta": "Stakeholders.",
        "explicacion": "La respuesta correcta es: \"Stakeholders.\"."
      },
      {
        "pregunta": "B03-L11-Q21-¿Cuál de las siguientes NO es un modelo de ciclo de vida?",
        "respuestas": [
          "Cascada.",
          "Río.",
          "Espiral.",
          "Incremental."
        ],
        "correcta": "Río.",
        "explicacion": "La respuesta correcta es: \"Río.\"."
      },
      {
        "pregunta": "B03-L11-Q22-¿Cuál de las siguientes es una metodología orientada a objetos?",
        "respuestas": [
          "PUD.",
          "ISO.",
          "IEEE.",
          "ISO2."
        ],
        "correcta": "PUD.",
        "explicacion": "La respuesta correcta es: \"PUD.\"."
      },
      {
        "pregunta": "B03-L11-Q23-¿Cuál de las siguientes NO es una metodología de desarrollo?",
        "respuestas": [
          "Convencionales.",
          "Estructuradas.",
          "Orientadas a objetos.",
          "Metodología en cascada."
        ],
        "correcta": "Metodología en cascada.",
        "explicacion": "La respuesta correcta es: \"Metodología en cascada.\"."
      },
      {
        "pregunta": "B03-L11-Q24-¿Cuál de las siguientes NO es una metodología de desarrollo estructurada?",
        "respuestas": [
          "Metodología Merise.",
          "Metodología SSADM.",
          "Metodología Métrica.",
          "OMT."
        ],
        "correcta": "OMT.",
        "explicacion": "La respuesta correcta es: \"OMT.\"."
      },
      {
        "pregunta": "B03-L21-Q01-¿Cuál es la fuente de cambios principal?",
        "respuestas": [
          "La IA (inteligencia artificial).",
          "El calentamiento global.",
          "El cliente.",
          "Las nuevas tecnologías."
        ],
        "correcta": "El cliente.",
        "explicacion": "La respuesta correcta es: \"El cliente.\"."
      },
      {
        "pregunta": "B03-L21-Q02-¿Cuáles son las 4 actividades básicas de la gestión de la configuración?",
        "respuestas": [
          "Gestión del cambio, Gestión de versiones, Construcción del sistema y Gestión de Liberaciones / Entregas.",
          "Gestión de requisitos, Gestión de versiones, Construcción del sistema y Gestión de Liberaciones / Entregas.",
          "Gestión de requisitos, Gestión de versiones, Construcción del sistema y Gestión de limitaciones.",
          "Gestión del cambio, Gestión de versiones, Construcción del sistema y Gestión de limitaciones."
        ],
        "correcta": "Gestión del cambio, Gestión de versiones, Construcción del sistema y Gestión de Liberaciones / Entregas.",
        "explicacion": "La respuesta correcta es: \"Gestión del cambio, Gestión de versiones, Construcción del sistema y Gestión de Liberaciones / Entregas.\"."
      },
      {
        "pregunta": "B03-L21-Q03-¿Que es una Baseline (Línea Base) ?",
        "respuestas": [
          "Producto que no ha sido formalmente revisado aun y sobre el que se alcanzará un acuerdo.",
          "Colección de ciclos de componentes que construyen un sistema.",
          "Colección de iteraciones de componentes que construyen un sistema.",
          "Colección de versiones de componentes que construyen un sistema."
        ],
        "correcta": "Colección de versiones de componentes que construyen un sistema.",
        "explicacion": "La respuesta correcta es: \"Colección de versiones de componentes que construyen un sistema.\"."
      },
      {
        "pregunta": "B03-L21-Q04-¿Que es una Codeline (Línea de Código) ?",
        "respuestas": [
          "Una línea de código referente a un programa de proyecto el cual se está implementando para la siguiente versión.",
          "Es un conjunto de versiones de un componente de software y otros elementos de configuración de los cuales depende dicho componente.",
          "Una agrupación de caracteres con sentido lógico en cuanto a programación.",
          "Un término ajeno a la ingeniería de software."
        ],
        "correcta": "Es un conjunto de versiones de un componente de software y otros elementos de configuración de los cuales depende dicho componente.",
        "explicacion": "La respuesta correcta es: \"Es un conjunto de versiones de un componente de software y otros elementos de configuración de los cuales depende dicho componente.\"."
      },
      {
        "pregunta": "B03-L21-Q05-¿Cuál de las siguientes opciones es verdadera?",
        "respuestas": [
          "La fase Alfa del ciclo de lanzamiento es una fase secundaria para comenzar las pruebas de software.",
          "La fase Beta del ciclo de lanzamiento es la primera fase para comenzar las pruebas de software.",
          "Las opciones anteriores son verdaderas.",
          "Las opciones anteriores son falsas."
        ],
        "correcta": "Las opciones anteriores son falsas.",
        "explicacion": "La respuesta correcta es: \"Las opciones anteriores son falsas.\"."
      },
      {
        "pregunta": "B03-L21-Q06-¿Cuál de las siguientes actividades no está relacionada con gestión de la configuración?",
        "respuestas": [
          "Control de versiones.",
          "Control de releases.",
          "Construcción del sistema.",
          "Gestión de calidad."
        ],
        "correcta": "Gestión de calidad.",
        "explicacion": "La respuesta correcta es: \"Gestión de calidad.\"."
      },
      {
        "pregunta": "B03-L21-Q07-La persona o personas que evalúan, aceptan o rechazan peticiones de cambios es",
        "respuestas": [
          "Consejo de Control de la Configuración.",
          "Autoridad de Gestión de la Configuración.",
          "Equipo de desarrollo.",
          "Dirección ejecutiva."
        ],
        "correcta": "Consejo de Control de la Configuración.",
        "explicacion": "La respuesta correcta es: \"Consejo de Control de la Configuración.\"."
      },
      {
        "pregunta": "B03-L21-Q08-La persona o personas encargadas de planificar y ejecutar el plan de gestión de la configuración es",
        "respuestas": [
          "Consejo de Control de la Configuración.",
          "Autoridad de Gestión de la Configuración.",
          "Equipo de desarrollo.",
          "Dirección ejecutiva."
        ],
        "correcta": "Autoridad de Gestión de la Configuración.",
        "explicacion": "La respuesta correcta es: \"Autoridad de Gestión de la Configuración.\"."
      },
      {
        "pregunta": "B03-L21-Q09-La creación de una nueva línea base a partir de una existente se denomina",
        "respuestas": [
          "Merge.",
          "Pull request.",
          "Commit.",
          "Branching."
        ],
        "correcta": "Branching.",
        "explicacion": "La respuesta correcta es: \"Branching.\"."
      },
      {
        "pregunta": "B03-L21-Q10-Una versión publicada de un producto se denomina",
        "respuestas": [
          "Rama.",
          "Build.",
          "Release.",
          "Producto mínimo viable."
        ],
        "correcta": "Release.",
        "explicacion": "La respuesta correcta es: \"Release.\"."
      },
      {
        "pregunta": "B03-L21-Q11-¿Cuál es el propósito principal de la Gestión de la Configuración según IEEE 828?",
        "respuestas": [
          "Controlar los costes y la rentabilidad del desarrollo del software.",
          "Mantener la integridad de un producto durante todo su ciclo de vida.",
          "Verificar el cumplimiento legal del software.",
          "Asegurar la escalabilidad del sistema ante nuevas tecnologías."
        ],
        "correcta": "Mantener la integridad de un producto durante todo su ciclo de vida.",
        "explicacion": "La respuesta correcta es: \"Mantener la integridad de un producto durante todo su ciclo de vida.\"."
      },
      {
        "pregunta": "B03-L21-Q12-¿Qué documento establece los elementos necesarios para ejercer la Gestión de la Configuración?",
        "respuestas": [
          "Registro de gestión de configuración.",
          "Procedimiento de gestión de configuración.",
          "Plan de gestión de configuración.",
          "Informe del estado de la configuración."
        ],
        "correcta": "Plan de gestión de configuración.",
        "explicacion": "La respuesta correcta es: \"Plan de gestión de configuración.\"."
      },
      {
        "pregunta": "B03-L21-Q13-¿Quién es responsable de evaluar y aprobar los cambios propuestos a los elementos de configuración?",
        "respuestas": [
          "El equipo de pruebas.",
          "El jefe de proyecto.",
          "El cliente principal.",
          "El Consejo de Control de Configuración (CCB)."
        ],
        "correcta": "El Consejo de Control de Configuración (CCB).",
        "explicacion": "La respuesta correcta es: \"El Consejo de Control de Configuración (CCB).\"."
      },
      {
        "pregunta": "B03-L21-Q14-¿Qué indica el número minor en el versionado semántico?",
        "respuestas": [
          "Una corrección menor compatible con la versión anterior.",
          "Un cambio que rompe la compatibilidad hacia atrás.",
          "Una nueva funcionalidad compatible con la versión anterior.",
          "Un cambio en los metadatos de compilación."
        ],
        "correcta": "Una nueva funcionalidad compatible con la versión anterior.",
        "explicacion": "La respuesta correcta es: \"Una nueva funcionalidad compatible con la versión anterior.\"."
      },
      {
        "pregunta": "B03-L21-Q15-¿Cuál es el objetivo principal del proceso de ramificación (branching)?",
        "respuestas": [
          "Permitir el desarrollo simultáneo sin conflictos entre programadores.",
          "Aumentar el rendimiento del compilador.",
          "Reducir el tamaño del repositorio de versiones.",
          "Eliminar líneas base obsoletas de la configuración."
        ],
        "correcta": "Permitir el desarrollo simultáneo sin conflictos entre programadores.",
        "explicacion": "La respuesta correcta es: \"Permitir el desarrollo simultáneo sin conflictos entre programadores.\"."
      },
      {
        "pregunta": "B03-L21-Q16-¿Qué es un Elemento de Configuración (Configuration Item, CI) ?",
        "respuestas": [
          "Cualquier archivo temporal generado durante la compilación.",
          "Solo los documentos de requisitos.",
          "Únicamente el código fuente del proyecto.",
          "Agregación de productos de trabajo designados para estar bajo control de configuración y tratados como una entidad única."
        ],
        "correcta": "Agregación de productos de trabajo designados para estar bajo control de configuración y tratados como una entidad única.",
        "explicacion": "La respuesta correcta es: \"Agregación de productos de trabajo designados para estar bajo control de configuración y tratados como una entidad única.\"."
      },
      {
        "pregunta": "B03-L21-Q17-¿Qué es el Control de Configuración (Configuration Control) ?",
        "respuestas": [
          "El proceso de etiquetar automáticamente cada commit en el repositorio.",
          "La evaluación, coordinación, aprobación o rechazo y aplicación de cambios a los elementos de configuración tras su identificación formal.",
          "La actividad de compilar y enlazar componentes para generar un ejecutable.",
          "La verificación de la escalabilidad del sistema ante picos de carga."
        ],
        "correcta": "La evaluación, coordinación, aprobación o rechazo y aplicación de cambios a los elementos de configuración tras su identificación formal.",
        "explicacion": "La respuesta correcta es: \"La evaluación, coordinación, aprobación o rechazo y aplicación de cambios a los elementos de configuración tras su identificación formal.\"."
      },
      {
        "pregunta": "B03-L21-Q18-¿Qué es una CMDB (Configuration Management Database)?",
        "respuestas": [
          "Un repositorio que mantiene la información de los atributos y relaciones de los elementos de configuración a lo largo de su ciclo de vida.",
          "Un sistema de control de versiones distribuido para almacenar commits.",
          "Un script de construcción automática del sistema.",
          "Un plan de liberación que describe las funcionalidades por versión."
        ],
        "correcta": "Un repositorio que mantiene la información de los atributos y relaciones de los elementos de configuración a lo largo de su ciclo de vida.",
        "explicacion": "La respuesta correcta es: \"Un repositorio que mantiene la información de los atributos y relaciones de los elementos de configuración a lo largo de su ciclo de vida.\"."
      },
      {
        "pregunta": "B03-L21-Q19-En versionado semántico, ¿cómo afectan los metadatos de compilación (build metadata) a la precedencia de versiones?",
        "respuestas": [
          "Tienen mayor precedencia que las versiones normales.",
          "Se ignoran al determinar la precedencia entre versiones.",
          "Solo afectan a versiones pre-release.",
          "Se consideran antes del número de patch."
        ],
        "correcta": "Se ignoran al determinar la precedencia entre versiones.",
        "explicacion": "La respuesta correcta es: \"Se ignoran al determinar la precedencia entre versiones.\"."
      },
      {
        "pregunta": "B03-L21-Q20-¿Qué es una etiqueta (Tag) en gestión de la configuración de software?",
        "respuestas": [
          "Una rama temporal que agrupa cambios experimentales.",
          "Un commit sin mensaje asociado.",
          "Un identificador explícito e inmutable de una versión, usado para señalar exactamente qué versión de un elemento de configuración hay en el repositorio.",
          "Un script que automatiza la generación de versiones."
        ],
        "correcta": "Un identificador explícito e inmutable de una versión, usado para señalar exactamente qué versión de un elemento de configuración hay en el repositorio.",
        "explicacion": "La respuesta correcta es: \"Un identificador explícito e inmutable de una versión, usado para señalar exactamente qué versión de un elemento de configuración hay en el repositorio.\"."
      },
      {
        "pregunta": "B03-L21-Q21-En el contexto del versionado semántico, ¿qué versión corresponde a la incorporación de una nueva funcionalidad compatible con la anterior?",
        "respuestas": [
          "Se incrementa el número Minor.",
          "Se incrementa el número Major.",
          "Se incrementa el número Patch.",
          "Se reinician todos los números a cero."
        ],
        "correcta": "Se incrementa el número Minor.",
        "explicacion": "La respuesta correcta es: \"Se incrementa el número Minor.\"."
      },
      {
        "pregunta": "B03-L21-Q22-¿Qué documento describe las funcionalidades que serán implementadas en cada publicación y la justificación de cada una?",
        "respuestas": [
          "Plan de gestión de la configuración.",
          "Informe de entrega del sistema.",
          "Registro de peticiones de cambio.",
          "Plan de liberación."
        ],
        "correcta": "Plan de liberación.",
        "explicacion": "La respuesta correcta es: \"Plan de liberación.\"."
      },
      {
        "pregunta": "B03-L21-Q23-¿Qué describe mejor el proceso de construcción del sistema dentro de la gestión de configuración?",
        "respuestas": [
          "La ejecución automática de los casos de prueba.",
          "El ensamblaje y compilación de componentes para crear un sistema ejecutable.",
          "La instalación del software en el entorno del cliente.",
          "El empaquetado de las librerías en contenedores."
        ],
        "correcta": "El ensamblaje y compilación de componentes para crear un sistema ejecutable.",
        "explicacion": "La respuesta correcta es: \"El ensamblaje y compilación de componentes para crear un sistema ejecutable.\"."
      },
      {
        "pregunta": "B03-L21-Q24-¿Qué afirmación sobre una línea base (baseline) es correcta?",
        "respuestas": [
          "Es una versión temporal que puede cambiar libremente durante el desarrollo.",
          "Se elimina al finalizar la fase de construcción.",
          "Solo puede modificarse mediante procedimientos formales de cambio.",
          "Se utiliza únicamente en la etapa de pruebas."
        ],
        "correcta": "Solo puede modificarse mediante procedimientos formales de cambio.",
        "explicacion": "La respuesta correcta es: \"Solo puede modificarse mediante procedimientos formales de cambio.\"."
      },
      {
        "pregunta": "B03-L21-Q25-¿Qué apartado del Plan de Gestión de Configuración define las personas y roles encargados de su ejecución?",
        "respuestas": [
          "Políticas aplicables.",
          "Responsabilidades y autoridades del plan.",
          "Criterios de identificación de los elementos de configuración.",
          "Limitaciones y suposiciones."
        ],
        "correcta": "Responsabilidades y autoridades del plan.",
        "explicacion": "La respuesta correcta es: \"Responsabilidades y autoridades del plan.\"."
      },
      {
        "pregunta": "B03-L21-Q26-¿Qué es el Branching (Ramificación)?",
        "respuestas": [
          "La eliminación de versiones anteriores para evitar conflictos en el desarrollo.",
          "La creación de una nueva línea base a partir de una versión existente. La nueva línea base y la existente pueden desarrollarse de manera independiente.",
          "La fusión de todas las versiones en una única línea de desarrollo.",
          "El proceso de compilar el software para su distribución."
        ],
        "correcta": "La creación de una nueva línea base a partir de una versión existente. La nueva línea base y la existente pueden desarrollarse de manera independiente.",
        "explicacion": "La respuesta correcta es: \"La creación de una nueva línea base a partir de una versión existente. La nueva línea base y la existente pueden desarrollarse de manera independiente.\"."
      },
      {
        "pregunta": "B03-L21-Q27-¿Qué es el Codeline (Línea de Código)?",
        "respuestas": [
          "Un conjunto de pruebas automatizadas para validar el software.",
          "Un repositorio de documentación técnica.",
          "Es un conjunto de versiones de un componente de software y otros elementos de configuración de los cuales depende dicho componente.",
          "Un sistema de control de acceso a los archivos fuente."
        ],
        "correcta": "Es un conjunto de versiones de un componente de software y otros elementos de configuración de los cuales depende dicho componente.",
        "explicacion": "La respuesta correcta es: \"Es un conjunto de versiones de un componente de software y otros elementos de configuración de los cuales depende dicho componente.\"."
      },
      {
        "pregunta": "B03-L21-Q28-¿Cúales son las 4 actividades básicas de la gestión de la configuración?",
        "respuestas": [
          "Gestión del cambio, gestión de versiones, construcción del sistema, gestión de liberaciones/Entregas.",
          "Diseño gráfico, codificación, pruebas unitarias, documentación.",
          "Revisión de código, integración continua, despliegue, mantenimiento.",
          "Planificación de recursos, análisis de mercado, gestión de clientes, soporte técnico."
        ],
        "correcta": "Gestión del cambio, gestión de versiones, construcción del sistema, gestión de liberaciones/Entregas.",
        "explicacion": "La respuesta correcta es: \"Gestión del cambio, gestión de versiones, construcción del sistema, gestión de liberaciones/Entregas.\"."
      },
      {
        "pregunta": "B03-L21-Q29-¿Qué significan las siglas CM?",
        "respuestas": [
          "Control Modular.",
          "Código Maquinado.",
          "Comunicación Multicanal.",
          "Configuration Management."
        ],
        "correcta": "Configuration Management.",
        "explicacion": "La respuesta correcta es: \"Configuration Management.\"."
      },
      {
        "pregunta": "B03-L21-Q30-¿Qué es el Configuration Control (Control de Configuración)?",
        "respuestas": [
          "El proceso de eliminar configuraciones obsoletas para mejorar el rendimiento.",
          "Un elemento de CM, consistente en la evaluación, coordinación, aprobación o desaprobación, y la aplicación de cambios a los elementos de la configuración después del establecimiento formal de su identificación de la configuración.",
          "La creación de nuevas funcionalidades sin revisión previa.",
          "El almacenamiento de copias de seguridad del sistema."
        ],
        "correcta": "Un elemento de CM, consistente en la evaluación, coordinación, aprobación o desaprobación, y la aplicación de cambios a los elementos de la configuración después del establecimiento formal de su identificación de la configuración.",
        "explicacion": "La respuesta correcta es: \"Un elemento de CM, consistente en la evaluación, coordinación, aprobación o desaprobación, y la aplicación de cambios a los elementos de la configuración después del establecimiento formal de su identificación de la configuración.\"."
      },
      {
        "pregunta": "B03-L31-Q01-¿Qué parte de la gestión de calidad está orientada al cumplimiento de los requisitos de calidad?",
        "respuestas": [
          "Control de la calidad.",
          "Aseguramiento de la calidad.",
          "Mejora de la calidad.",
          "Ninguna de las anteriores."
        ],
        "correcta": "Control de la calidad.",
        "explicacion": "La respuesta correcta es: \"Control de la calidad.\"."
      },
      {
        "pregunta": "B03-L31-Q02-¿Qué es FALSO con respecto a la calidad?",
        "respuestas": [
          "Es multidimensional.",
          "Los criterios de calidad son independientes.",
          "Es absoluta.",
          "Está sujeta a restricciones."
        ],
        "correcta": "Es absoluta.",
        "explicacion": "La respuesta correcta es: \"Es absoluta.\"."
      },
      {
        "pregunta": "B03-L31-Q03-La acción tomada para eliminar la causa de una no conformidad detectada se denomina",
        "respuestas": [
          "Desecho.",
          "Acción preventiva.",
          "Acción correctora.",
          "Acción correctiva."
        ],
        "correcta": "Acción correctiva.",
        "explicacion": "La respuesta correcta es: \"Acción correctiva.\"."
      },
      {
        "pregunta": "B03-L31-Q04-La acción tomada para eliminar la causa de una no conformidad potencial se denomina",
        "respuestas": [
          "Desecho.",
          "Acción preventiva.",
          "Acción correctora.",
          "Acción correctiva."
        ],
        "correcta": "Acción preventiva.",
        "explicacion": "La respuesta correcta es: \"Acción preventiva.\"."
      },
      {
        "pregunta": "B03-L31-Q05-La acción tomada para eliminar una no conformidad detectada se denomina",
        "respuestas": [
          "Desecho.",
          "Acción preventiva.",
          "Acción correctora.",
          "Acción correctiva."
        ],
        "correcta": "Acción correctora.",
        "explicacion": "La respuesta correcta es: \"Acción correctora.\"."
      },
      {
        "pregunta": "B03-L31-Q06-¿Qué parte de la gestión de calidad está orientada al aumento de las capacidades de la organización para cumplir los requisitos de calidad?",
        "respuestas": [
          "Control de la calidad.",
          "Aseguramiento de la calidad.",
          "Mejora de la calidad.",
          "Ninguna de las anteriores."
        ],
        "correcta": "Mejora de la calidad.",
        "explicacion": "La respuesta correcta es: \"Mejora de la calidad.\"."
      },
      {
        "pregunta": "B03-L31-Q07-¿Cuál de las siguientes definiciones se acerca más al término “Política de la calidad” ?",
        "respuestas": [
          "Intenciones locales y orientación de una organización relativas a la cantidad tal como se expresan formalmente por la alta dirección.",
          "Intenciones locales y orientación de una organización relativas a la calidad tal como se expresan formalmente por la alta dirección.",
          "Intenciones globales y orientación de una organización relativas a la calidad tal como se expresan formalmente por la alta dirección.",
          "Intenciones globales y orientación de una organización relativas a la cantidad tal como se expresan formalmente por la alta dirección."
        ],
        "correcta": "Intenciones globales y orientación de una organización relativas a la calidad tal como se expresan formalmente por la alta dirección.",
        "explicacion": "La respuesta correcta es: \"Intenciones globales y orientación de una organización relativas a la calidad tal como se expresan formalmente por la alta dirección.\"."
      },
      {
        "pregunta": "B03-L31-Q08-la conformidad se refiere al cumplimiento de...",
        "respuestas": [
          "un requisito.",
          "un caso de uso.",
          "un diagrama de uso.",
          "Ninguna de las anteriores."
        ],
        "correcta": "un requisito.",
        "explicacion": "La respuesta correcta es: \"un requisito.\"."
      },
      {
        "pregunta": "B03-L31-Q09-¿Cuál es la diferencia entre acción preventiva y correctora?",
        "respuestas": [
          "Las acciones correctivas son para corregir las acciones incorrectivas.",
          "Las acciones preventivas son para prever fallos en los casos de uso.",
          "Significan lo mismo, pero se usan en distintos ámbitos.",
          "La acción preventiva es para una no conformidad en potencia mientras que la acción correctiva es para una no conformidad detectada."
        ],
        "correcta": "La acción preventiva es para una no conformidad en potencia mientras que la acción correctiva es para una no conformidad detectada.",
        "explicacion": "La respuesta correcta es: \"La acción preventiva es para una no conformidad en potencia mientras que la acción correctiva es para una no conformidad detectada.\"."
      },
      {
        "pregunta": "B03-L31-Q10-¿Cuál de los siguientes conceptos NO están relacionados con la calidad?",
        "respuestas": [
          "Desecho.",
          "Medición / Medida.",
          "Intervención.",
          "Modelo de calidad."
        ],
        "correcta": "Intervención.",
        "explicacion": "La respuesta correcta es: \"Intervención.\"."
      },
      {
        "pregunta": "B03-L31-Q011-El ciclo de mejora continua PDCA se refiere a",
        "respuestas": [
          "Plan, Do, Check, Act.",
          "Plan, Done, Case, Act.",
          "Plan, Do, Case, Act.",
          "Put, Do, Check, Add."
        ],
        "correcta": "Plan, Do, Check, Act.",
        "explicacion": "La respuesta correcta es: \"Plan, Do, Check, Act.\"."
      },
      {
        "pregunta": "B03-L31-Q012-¿Cuantos puntos tiene el ISO25040 Evaluación de Calidad?",
        "respuestas": [
          "4.",
          "5.",
          "8.",
          "El ISO25040 no es sobre Evaluación de Calidad."
        ],
        "correcta": "5.",
        "explicacion": "La respuesta correcta es: \"5.\"."
      },
      {
        "pregunta": "B03-L31-Q013-¿Qué norma define el modelo de calidad del producto software (características como fiabilidad, seguridad, mantenibilidad, etc.)?",
        "respuestas": [
          "ISO/IEC 33000.",
          "CMMI-DEV.",
          "ISO/IEC 25010.",
          "MMIS 2.0."
        ],
        "correcta": "ISO/IEC 25010.",
        "explicacion": "La respuesta correcta es: \"ISO/IEC 25010.\"."
      },
      {
        "pregunta": "B03-L31-Q014-¿Qué familia de normas sustituyó y amplió a ISO/IEC 15504 para la evaluación de procesos?",
        "respuestas": [
          "ISO/IEC 25010.",
          "ISO/IEC 33000.",
          "CMMI-SVC.",
          "ISO/IEC 12207."
        ],
        "correcta": "ISO/IEC 33000.",
        "explicacion": "La respuesta correcta es: \"ISO/IEC 33000.\"."
      },
      {
        "pregunta": "B03-L31-Q015-¿Qué tipo de artefacto “establece un camino a seguir describiendo las características de los buenos procesos”?",
        "respuestas": [
          "Modelos de mejora de procesos.",
          "Modelos de evaluación.",
          "Modelos de referencia de procesos.",
          "Políticas de calidad."
        ],
        "correcta": "Modelos de referencia de procesos.",
        "explicacion": "La respuesta correcta es: \"Modelos de referencia de procesos.\"."
      },
      {
        "pregunta": "B03-L31-Q016-En la evaluación “por capacidad” (ISO 33000/CMMI), ¿a qué nivel se obtiene la puntuación?",
        "respuestas": [
          "A nivel de organización (departamento/proyecto).",
          "A nivel de proceso (p. ej., gestión de requisitos).",
          "A nivel de producto software.",
          "A nivel de mercado."
        ],
        "correcta": "A nivel de proceso (p. ej., gestión de requisitos).",
        "explicacion": "La respuesta correcta es: \"A nivel de proceso (p. ej., gestión de requisitos).\"."
      },
      {
        "pregunta": "B03-L31-Q017-El modelo MMIS 2.0 de AENOR–AQCLab está especialmente orientado a…",
        "respuestas": [
          "Grandes corporaciones multinacionales.",
          "PYMEs y pequeños grupos de desarrollo.",
          "Startups de hardware.",
          "Organismos reguladores."
        ],
        "correcta": "PYMEs y pequeños grupos de desarrollo.",
        "explicacion": "La respuesta correcta es: \"PYMEs y pequeños grupos de desarrollo.\"."
      },
      {
        "pregunta": "B03-L31-Q018-¿Qué parte de la gestión de la calidad está orientada a proporcionar confianza en que se cumplirán los requisitos de la calidad?",
        "respuestas": [
          "Control de la calidad.",
          "Aseguramiento de la calidad.",
          "Mejora de la calidad.",
          "Ninguna de las anteriores"
        ],
        "correcta": "Aseguramiento de la calidad.",
        "explicacion": "La respuesta correcta es: \"Aseguramiento de la calidad.\"."
      },
      {
        "pregunta": "B03-L31-Q019-¿Cuál de los siguientes es un tipo de evaluación?",
        "respuestas": [
          "Por capacidad.",
          "Por uso.",
          "Por desgaste.",
          "Por alcance."
        ],
        "correcta": "Por capacidad.",
        "explicacion": "La respuesta correcta es: \"Por capacidad.\"."
      },
      {
        "pregunta": "B03-L31-Q020-¿Cuál de las siguientes afirmaciones sobre la calidad es correcta?",
        "respuestas": [
          "La calidad es absoluta y no depende del contexto.",
          "Los criterios de calidad son siempre independientes entre sí.",
          "La calidad está sujeta a restricciones como coste y tiempo.",
          "La calidad no depende de los requisitos no funcionales."
        ],
        "correcta": "La calidad está sujeta a restricciones como coste y tiempo.",
        "explicacion": "La respuesta correcta es: \"La calidad está sujeta a restricciones como coste y tiempo.\"."
      },
      {
        "pregunta": "B03-L31-Q021-¿En qué cuatro responsabilidades clave se basa la mejora del proceso?",
        "respuestas": [
          "Definir el proceso, medir el proceso, controlar el proceso y mejorar el proceso.",
          "Planificar el proceso, auditar el proceso, documentar el proceso y eliminar el proceso.",
          "Diseñar el producto, probar el producto, entregar el producto y mantener el producto.",
          "Asignar recursos, capacitar al personal, comunicar resultados y archivar informes."
        ],
        "correcta": "Definir el proceso, medir el proceso, controlar el proceso y mejorar el proceso.",
        "explicacion": "La respuesta correcta es: \"Definir el proceso, medir el proceso, controlar el proceso y mejorar el proceso.\"."
      },
      {
        "pregunta": "B03-L31-Q022-El enfoque quality by design significa que",
        "respuestas": [
          "Los requisitos no funcionales se consideran solo al final del desarrollo.",
          "Se prioriza la rapidez sobre la calidad.",
          "Los requisitos no funcionales se tienen en cuenta desde el inicio.",
          "La calidad se evalúa únicamente mediante pruebas finales."
        ],
        "correcta": "Los requisitos no funcionales se tienen en cuenta desde el inicio.",
        "explicacion": "La respuesta correcta es: \"Los requisitos no funcionales se tienen en cuenta desde el inicio.\"."
      },
      {
        "pregunta": "B03-L31-Q023-Cuando un sistema es robusto se dice que…",
        "respuestas": [
          "Nunca presenta fallos, aunque no se pruebe.",
          "Es tolerante a fallos y responde adecuadamente ante ellos.",
          "Tiene una alta portabilidad, pero baja mantenibilidad.",
          "Cumple todas las especificaciones funcionales."
        ],
        "correcta": "Es tolerante a fallos y responde adecuadamente ante ellos.",
        "explicacion": "La respuesta correcta es: \"Es tolerante a fallos y responde adecuadamente ante ellos.\"."
      },
      {
        "pregunta": "B03-L31-Q024-¿Qué podemos entender por conformidad? Referido a la gestión de la calidad",
        "respuestas": [
          "Cumplimiento de un requisito.",
          "Cumplimiento de un objetivo.",
          "Cumplimiento de un reto.",
          "El cumplimiento estricto de la norma ISO9000."
        ],
        "correcta": "Cumplimiento de un requisito.",
        "explicacion": "La respuesta correcta es: \"Cumplimiento de un requisito.\"."
      },
      {
        "pregunta": "B03-L31-Q025-En el contexto de la gestión de calidad, una no conformidad se define como",
        "respuestas": [
          "El incumplimiento de un requisito.",
          "Una desviación aceptable dentro del proceso.",
          "Una acción preventiva no aplicada.",
          "Una característica de calidad no cuantificable."
        ],
        "correcta": "El incumplimiento de un requisito.",
        "explicacion": "La respuesta correcta es: \"El incumplimiento de un requisito.\"."
      },
      {
        "pregunta": "B03-L31-Q026-En la gestión de calidad, la mejora continua consiste en",
        "respuestas": [
          "Mantener los procesos estables sin modificaciones.",
          "Implementar cambios graduales y sostenidos para aumentar la eficacia y eficiencia.",
          "Aumentar los recursos humanos para resolver fallos.",
          "Sustituir el sistema de calidad cada cierto tiempo."
        ],
        "correcta": "Implementar cambios graduales y sostenidos para aumentar la eficacia y eficiencia.",
        "explicacion": "La respuesta correcta es: \"Implementar cambios graduales y sostenidos para aumentar la eficacia y eficiencia.\"."
      },
      {
        "pregunta": "B03-L31-Q027-¿Cuál de estos no pertenece al ciclo de mejora continua PDCA?",
        "respuestas": [
          "Plan.",
          "Do.",
          "Control.",
          "Act."
        ],
        "correcta": "Control.",
        "explicacion": "La respuesta correcta es: \"Control.\"."
      },
      {
        "pregunta": "B03-L31-Q028-En la gestión de calidad, el concepto de “cliente interno” se refiere a",
        "respuestas": [
          "El usuario final que compra el producto.",
          "Los trabajadores o departamentos que reciben el resultado de otro dentro de la organización.",
          "Los proveedores que suministran materiales o servicios.",
          "El responsable del sistema de calidad."
        ],
        "correcta": "Los trabajadores o departamentos que reciben el resultado de otro dentro de la organización.",
        "explicacion": "La respuesta correcta es: \"Los trabajadores o departamentos que reciben el resultado de otro dentro de la organización.\"."
      },
      {
        "pregunta": "B03-L31-Q029-En el ciclo PDCA, la fase “Check” tiene como objetivo",
        "respuestas": [
          "Establecer los objetivos y procesos necesarios.",
          "Ejecutar las acciones planificadas.",
          "Verificar los resultados obtenidos frente a lo planificado.",
          "Implementar las acciones correctivas."
        ],
        "correcta": "Verificar los resultados obtenidos frente a lo planificado.",
        "explicacion": "La respuesta correcta es: \"Verificar los resultados obtenidos frente a lo planificado.\"."
      },
      {
        "pregunta": "B03-L31-Q030-En un sistema de gestión de calidad, la auditoría tiene como propósito principal",
        "respuestas": [
          "Detectar errores de los empleados.",
          "Garantizar que los productos cumplan las normas de diseño.",
          "Analizar los costes de producción.",
          "Evaluar si el sistema cumple con los requisitos establecidos y se aplica de forma eficaz."
        ],
        "correcta": "Evaluar si el sistema cumple con los requisitos establecidos y se aplica de forma eficaz.",
        "explicacion": "La respuesta correcta es: \"Evaluar si el sistema cumple con los requisitos establecidos y se aplica de forma eficaz.\"."
      },
      {
        "pregunta": "B03-L41-Q01-¿Cuál debería ser el objetivo del testing?",
        "respuestas": [
          "Control de la calidad.",
          "Encontrar defectos.",
          "Verificar el correcto funcionamiento del software.",
          "Ninguna de las anteriores."
        ],
        "correcta": "Encontrar defectos.",
        "explicacion": "La respuesta correcta es: \"Encontrar defectos.\"."
      },
      {
        "pregunta": "B03-L41-Q02-En testing, ¿qué se entiende por nivel de cobertura?",
        "respuestas": [
          "Medida en que un programa ha sido probado.",
          "Medida del número de tests que un software pasa con éxito.",
          "Medida del número de defectos encontrados en un programa.",
          "Medida del número de tests que un software no pasa con éxito"
        ],
        "correcta": "Medida en que un programa ha sido probado.",
        "explicacion": "La respuesta correcta es: \"Medida en que un programa ha sido probado.\"."
      },
      {
        "pregunta": "B03-L41-Q03-¿Cuál de los siguientes niveles de cobertura es menor?",
        "respuestas": [
          "Decisiones.",
          "Condiciones.",
          "Condiciones/decisiones.",
          "Sentencias."
        ],
        "correcta": "Sentencias.",
        "explicacion": "La respuesta correcta es: \"Sentencias.\"."
      },
      {
        "pregunta": "B03-L41-Q04-¿Cuál de los siguientes niveles de cobertura es mayor?",
        "respuestas": [
          "Requisitos.",
          "Condiciones.",
          "Múltiple de condiciones.",
          "Sentencias."
        ],
        "correcta": "Múltiple de condiciones.",
        "explicacion": "La respuesta correcta es: \"Múltiple de condiciones.\"."
      },
      {
        "pregunta": "B03-L41-Q05-¿Cuál de las siguientes pruebas no se realiza en un entorno de desarrollo?",
        "respuestas": [
          "Pruebas de integración.",
          "Pruebas unitarias.",
          "Pruebas de sistema.",
          "Ninguna de las anteriores."
        ],
        "correcta": "Pruebas de sistema.",
        "explicacion": "La respuesta correcta es: \"Pruebas de sistema.\"."
      },
      {
        "pregunta": "B03-L41-Q06-¿Cuál es la diferencia entre un error y un fallo en el contexto de testing?",
        "respuestas": [
          "No hay diferencia, fallo y error son sinónimos.",
          "Un error es una equivocación realizada por una persona, mientras que un fallo es una equivocación realizada por una máquina.",
          "Los fallos son desvíos respecto al comportamiento del sistema, mientras que los errores son equivocaciones por parte de una persona.",
          "Los fallos son errores por parte del programador, y los errores son las excepciones que saltan en el sistema."
        ],
        "correcta": "Los fallos son desvíos respecto al comportamiento del sistema, mientras que los errores son equivocaciones por parte de una persona.",
        "explicacion": "La respuesta correcta es: \"Los fallos son desvíos respecto al comportamiento del sistema, mientras que los errores son equivocaciones por parte de una persona.\"."
      },
      {
        "pregunta": "B03-L41-Q07-Selecciona la opción FALSA de las siguientes premisas sobre el oráculo",
        "respuestas": [
          "Puede ser una persona que decide si un programa se comportó adecuadamente ante un conjunto de datos.",
          "La máquina oráculo emitirá un veredicto y este será “paso” o “fallo”.",
          "Compara la salida esperada con la recibida en un caso de prueba.",
          "Los oráculos no pueden ser personas, solo maquinas automatizadas."
        ],
        "correcta": "Los oráculos no pueden ser personas, solo maquinas automatizadas.",
        "explicacion": "La respuesta correcta es: \"Los oráculos no pueden ser personas, solo maquinas automatizadas.\"."
      },
      {
        "pregunta": "B03-L41-Q08-¿Las pruebas de caja negra son opuestas a las pruebas de caja blanca?",
        "respuestas": [
          "Sí, son opuestos ya que son blanco y negro.",
          "Sí, son opuestas en cuanto a que conocemos la estructura interna de una pero no de la otra.",
          "No, pues conocemos la estructura interna de ambas.",
          "No, pues no tienen relación alguna."
        ],
        "correcta": "Sí, son opuestas en cuanto a que conocemos la estructura interna de una pero no de la otra.",
        "explicacion": "La respuesta correcta es: \"Sí, son opuestas en cuanto a que conocemos la estructura interna de una pero no de la otra.\"."
      },
      {
        "pregunta": "B03-L41-Q09-¿En cuantos niveles se puede decir que se separa el modelo en V del testing?",
        "respuestas": [
          "2, diseño y testing.",
          "Todo los tests están al mismo nivel.",
          "4, los niveles de diseño y sus correspondientes tests además del coding.",
          "6, los 6 niveles de testing que hay."
        ],
        "correcta": "4, los niveles de diseño y sus correspondientes tests además del coding.",
        "explicacion": "La respuesta correcta es: \"4, los niveles de diseño y sus correspondientes tests además del coding.\"."
      },
      {
        "pregunta": "B03-L41-Q10-¿Cuál es la veracidad de la siguiente frase:” En Orientación a Objetos se asume que la unidad de prueba es la clase o el método” ?",
        "respuestas": [
          "Falsa, la unidad de prueba también es un subsistema.",
          "Verdadera, es una asunción global.",
          "Falsa, la clase no puede ser una unidad de prueba.",
          "Falsa, la frase no tiene sentido en el ámbito del testing."
        ],
        "correcta": "Verdadera, es una asunción global.",
        "explicacion": "La respuesta correcta es: \"Verdadera, es una asunción global.\"."
      },
      {
        "pregunta": "B03-L41-Q11-¿Cuál es el principal objetivo al diseñar casos de prueba eficaces?",
        "respuestas": [
          "Probar todas las combinaciones posibles sin importar el tiempo.",
          "Encontrar la mayoría de los defectos con el menor número de casos.",
          "Documentar todos los requisitos del sistema.",
          "Validar el diseño del software."
        ],
        "correcta": "Encontrar la mayoría de los defectos con el menor número de casos.",
        "explicacion": "La respuesta correcta es: \"Encontrar la mayoría de los defectos con el menor número de casos.\"."
      },
      {
        "pregunta": "B03-L41-Q12-¿Qué técnica se basa en dividir el dominio de entrada en conjuntos disjuntos que representan comportamientos equivalentes?",
        "respuestas": [
          "Pruebas de mutación.",
          "Particiones o clases de equivalencia.",
          "Conjetura de errores.",
          "Pruebas de caja blanca."
        ],
        "correcta": "Particiones o clases de equivalencia.",
        "explicacion": "La respuesta correcta es: \"Particiones o clases de equivalencia.\"."
      },
      {
        "pregunta": "B03-L41-Q13-¿Qué tipo de prueba se realiza para comprobar la correcta integración entre unidades que ya pasaron pruebas unitarias?",
        "respuestas": [
          "Pruebas unitarias.",
          "Pruebas de integración.",
          "Pruebas de aceptación.",
          "Pruebas de sistema."
        ],
        "correcta": "Pruebas de integración.",
        "explicacion": "La respuesta correcta es: \"Pruebas de integración.\"."
      },
      {
        "pregunta": "B03-L41-Q14-En las pruebas de sistema, ¿cuál de los siguientes no es un subtipo común?",
        "respuestas": [
          "Pruebas de recuperación.",
          "Pruebas de seguridad.",
          "Pruebas unitarias.",
          "Pruebas de rendimiento."
        ],
        "correcta": "Pruebas unitarias.",
        "explicacion": "La respuesta correcta es: \"Pruebas unitarias.\"."
      },
      {
        "pregunta": "B03-L41-Q15-En el modelo en V del testing, ¿quién normalmente realiza las pruebas de aceptación?",
        "respuestas": [
          "Desarrolladores del software.",
          "Testers automatizados.",
          "Cliente o usuario final.",
          "Equipo de integración."
        ],
        "correcta": "Cliente o usuario final.",
        "explicacion": "La respuesta correcta es: \"Cliente o usuario final.\"."
      },
      {
        "pregunta": "B03-L41-Q16-Según el principio MINIMAX, ¿qué se busca al seleccionar valores de prueba?",
        "respuestas": [
          "Probar todos los valores posibles del dominio de entrada.",
          "Minimizar valores de prueba sin considerar la detección de fallos.",
          "Maximizar la detección de defectos con el menor número de casos de prueba.",
          "Obtener siempre una cobertura del 100%."
        ],
        "correcta": "Maximizar la detección de defectos con el menor número de casos de prueba.",
        "explicacion": "La respuesta correcta es: \"Maximizar la detección de defectos con el menor número de casos de prueba.\"."
      },
      {
        "pregunta": "B03-L41-Q17-¿Cuál de las siguientes afirmaciones sobre la cobertura es correcta?",
        "respuestas": [
          "Una cobertura alta garantiza que el software está completamente libre de fallos.",
          "La cobertura solo es útil en pruebas de caja negra.",
          "La cobertura indica qué partes del sistema han sido ejercitadas por las pruebas.",
          "La cobertura sustituye a la necesidad de diseñar casos de prueba."
        ],
        "correcta": "La cobertura indica qué partes del sistema han sido ejercitadas por las pruebas.",
        "explicacion": "La respuesta correcta es: \"La cobertura indica qué partes del sistema han sido ejercitadas por las pruebas.\"."
      },
      {
        "pregunta": "B03-L41-Q18-¿Cuál es el objetivo principal de la técnica de valores límite?",
        "respuestas": [
          "Dividir el dominio en clases disjuntas.",
          "Identificar los valores que tienen mayor probabilidad de provocar fallos.",
          "Ejecutar todas las combinaciones posibles de entrada.",
          "Generar automáticamente oráculos de prueba."
        ],
        "correcta": "Identificar los valores que tienen mayor probabilidad de provocar fallos.",
        "explicacion": "La respuesta correcta es: \"Identificar los valores que tienen mayor probabilidad de provocar fallos.\"."
      },
      {
        "pregunta": "B03-L41-Q19-¿Qué criterio de combinación requiere visitar al menos una vez todas las parejas posibles de valores entre parámetros?",
        "respuestas": [
          "Each-use.",
          "Pairwise.",
          "n-wise.",
          "Emparejador."
        ],
        "correcta": "Pairwise.",
        "explicacion": "La respuesta correcta es: \"Pairwise.\"."
      },
      {
        "pregunta": "B03-L41-Q20-¿Cuál de las siguientes pruebas siempre es de caja blanca según el temario?",
        "respuestas": [
          "Pruebas unitarias.",
          "Pruebas de sistema.",
          "Pruebas de aceptación.",
          "Pruebas de integración."
        ],
        "correcta": "Pruebas unitarias.",
        "explicacion": "La respuesta correcta es: \"Pruebas unitarias.\"."
      },
      {
        "pregunta": "B03-L41-Q21-¿Qué tipo de prueba se basa en conocer la estructura interna del código?",
        "respuestas": [
          "Pruebas de caja negra",
          "Pruebas de aceptación",
          "Pruebas de caja blanca",
          "Pruebas de rendimiento"
        ],
        "correcta": "Pruebas de caja blanca",
        "explicacion": "La respuesta correcta es: \"Pruebas de caja blanca\"."
      },
      {
        "pregunta": "B03-L41-Q22-¿Qué criterio de cobertura requiere recorrer la tabla de verdad completa de una decisión?",
        "respuestas": [
          "Cobertura de decisiones",
          "Cobertura de condiciones",
          "Cobertura condiciones/decisiones",
          "Cobertura múltiple de condiciones"
        ],
        "correcta": "Cobertura múltiple de condiciones",
        "explicacion": "La respuesta correcta es: \"Cobertura múltiple de condiciones\"."
      },
      {
        "pregunta": "B03-L41-Q23-¿Cuál es una desventaja principal de las pruebas de mutación?",
        "respuestas": [
          "No pueden aplicarse a pruebas de caja blanca.",
          "Requieren un alto coste temporal por el número de mutantes.",
          "No permiten mejorar el conjunto de pruebas existente.",
          "No ayudan a descubrir ambigüedades en el código."
        ],
        "correcta": "Requieren un alto coste temporal por el número de mutantes.",
        "explicacion": "La respuesta correcta es: \"Requieren un alto coste temporal por el número de mutantes.\"."
      },
      {
        "pregunta": "B03-L41-Q24-¿Qué metodología basada en pruebas utiliza el patrón Given–When–Then?",
        "respuestas": [
          "TDD.",
          "BDD.",
          "Pairwise Testing.",
          "Ninguna de las anteriores."
        ],
        "correcta": "BDD.",
        "explicacion": "La respuesta correcta es: \"BDD.\"."
      },
      {
        "pregunta": "B03-L41-Q25-Según el documento, las pruebas de sistema siempre son",
        "respuestas": [
          "Pruebas de caja blanca.",
          "Pruebas realizadas por el cliente.",
          "Pruebas de caja negra.",
          "Pruebas unitarias previas."
        ],
        "correcta": "Pruebas de caja negra.",
        "explicacion": "La respuesta correcta es: \"Pruebas de caja negra.\"."
      },
      {
        "pregunta": "B03-L41-Q26-En testing, ¿cuál se asume que es la unidad de prueba en Orientación a objetos?",
        "respuestas": [
          "La clase.",
          "El método.",
          "El constructor.",
          "A y B son correctas."
        ],
        "correcta": "A y B son correctas.",
        "explicacion": "La respuesta correcta es: \"A y B son correctas.\"."
      },
      {
        "pregunta": "B03-L41-Q27-¿Cuál de las siguientes no es un nivel de prueba en el testing?",
        "respuestas": [
          "Pruebas unitarias.",
          "Pruebas de Integración.",
          "Pruebas de Sistema.",
          "Pruebas de Cobertura."
        ],
        "correcta": "Pruebas de Cobertura.",
        "explicacion": "La respuesta correcta es: \"Pruebas de Cobertura.\"."
      },
      {
        "pregunta": "B03-L41-Q28-¿Cuál de las siguientes no es un tipo de cobertura en el testing?",
        "respuestas": [
          "Cobertura de sentencia.",
          "Cobertura de decisiones.",
          "Cobertura de condiciones.",
          "Cobertura de especificaciones."
        ],
        "correcta": "Cobertura de especificaciones.",
        "explicacion": "La respuesta correcta es: \"Cobertura de especificaciones.\"."
      },
      {
        "pregunta": "B03-L41-Q29-¿Cuáles de la siguientes son técnicas para la obtención de valores para generar los casos de prueba?",
        "respuestas": [
          "Clases de equivalencia.",
          "Valores límite.",
          "Conjetura de errores.",
          "Todas son correctas."
        ],
        "correcta": "Todas son correctas.",
        "explicacion": "La respuesta correcta es: \"Todas son correctas.\"."
      },
      {
        "pregunta": "B03-L41-Q30-¿Cuál de estos es una variante de los valores límite?",
        "respuestas": [
          "Variante ligera.",
          "Variante libre.",
          "Variante cerrada.",
          "Variante sencilla."
        ],
        "correcta": "Variante ligera.",
        "explicacion": "La respuesta correcta es: \"Variante ligera.\"."
      },
      {
        "pregunta": "B03-L51-Q01-¿Cuál es el objetivo principal del mantenimiento correctivo?",
        "respuestas": [
          "Incorporar nuevas funcionalidades solicitadas por el usuario",
          "Mejorar la mantenibilidad sin alterar las especificaciones",
          "Localizar y eliminar defectos que pueden causar fallos",
          "Adaptar el software a cambios en el entorno operativo"
        ],
        "correcta": "Localizar y eliminar defectos que pueden causar fallos",
        "explicacion": "La respuesta correcta es: \"Localizar y eliminar defectos que pueden causar fallos\"."
      },
      {
        "pregunta": "B03-L51-Q02-¿Cuál de las siguientes situaciones corresponde al mantenimiento adaptativo?",
        "respuestas": [
          "Corregir una salida incorrecta del programa",
          "Reestructurar el código para mejorar su legibilidad",
          "Añadir una nueva funcionalidad al sistema",
          "Ajustar el software para funcionar en un nuevo sistema operativo"
        ],
        "correcta": "Ajustar el software para funcionar en un nuevo sistema operativo",
        "explicacion": "La respuesta correcta es: \"Ajustar el software para funcionar en un nuevo sistema operativo\"."
      },
      {
        "pregunta": "B03-L51-Q03-¿Qué tipo de mantenimiento se orienta a mejorar la eficiencia de ejecución del software?",
        "respuestas": [
          "Perfectivo (Eficiencia)",
          "Preventivo",
          "Adaptativo",
          "Correctivo"
        ],
        "correcta": "Perfectivo (Eficiencia)",
        "explicacion": "La respuesta correcta es: \"Perfectivo (Eficiencia)\"."
      },
      {
        "pregunta": "B03-L51-Q04-Las pruebas de regresión se realizan con el objetivo de",
        "respuestas": [
          "Comprobar que el software modificado no ha introducido fallos en funcionalidades previas",
          "Asegurar que el cambio cumple las necesidades del usuario",
          "Verificar la integración del nuevo componente en el sistema",
          "Validar el diseño propuesto para la mejora solicitada"
        ],
        "correcta": "Comprobar que el software modificado no ha introducido fallos en funcionalidades previas",
        "explicacion": "La respuesta correcta es: \"Comprobar que el software modificado no ha introducido fallos en funcionalidades previas\"."
      },
      {
        "pregunta": "B03-L51-Q05-¿Cuál de los siguientes es un problema típico del mantenimiento de software?",
        "respuestas": [
          "Actualización automática de toda la documentación con cada modificación",
          "Reducción progresiva del tiempo necesario para comprender el programa",
          "Disminución de la complejidad estructural tras múltiples modificaciones",
          "Código heredado con herramientas en desuso o sin documentación"
        ],
        "correcta": "Código heredado con herramientas en desuso o sin documentación",
        "explicacion": "La respuesta correcta es: \"Código heredado con herramientas en desuso o sin documentación\"."
      },
      {
        "pregunta": "B03-L51-Q06-¿Cuáles son los tipos de mantenimiento existentes?",
        "respuestas": [
          "Adaptativo, correctivo, colaborativo y perfectivo.",
          "Evolutivo, correctivo, adaptativo y preventivo.",
          "Correctivo, de calidad, configuracional y preventivo.",
          "Evolutivo, adaptativo, correctivo y operacional."
        ],
        "correcta": "Evolutivo, correctivo, adaptativo y preventivo.",
        "explicacion": "La respuesta correcta es: \"Evolutivo, correctivo, adaptativo y preventivo.\"."
      },
      {
        "pregunta": "B03-L51-Q07-¿Cuáles son los subtipos del mantenimiento perfectivo?",
        "respuestas": [
          "Total y parcial.",
          "Homogéneo y heterogéneo.",
          "De ampliación y de eficiencia.",
          "De corrección y de prevención."
        ],
        "correcta": "De ampliación y de eficiencia.",
        "explicacion": "La respuesta correcta es: \"De ampliación y de eficiencia.\"."
      },
      {
        "pregunta": "B03-L51-Q08-¿A qué mantenimiento le dedican las empresas más parte del presupuesto?",
        "respuestas": [
          "Evolutivo.",
          "Correctivo.",
          "Preventivo.",
          "Adaptativo."
        ],
        "correcta": "Evolutivo.",
        "explicacion": "La respuesta correcta es: \"Evolutivo.\"."
      },
      {
        "pregunta": "B03-L51-Q09-¿Cuál de las siguientes afirmaciones del mantenimiento software es incorrecta?",
        "respuestas": [
          "Se realizan pruebas.",
          "Puede realizarse para corregir defectos.",
          "Generalmente solo se modifica el código.",
          "Puede realizarse para extender la funcionalidad."
        ],
        "correcta": "Generalmente solo se modifica el código.",
        "explicacion": "La respuesta correcta es: \"Generalmente solo se modifica el código.\"."
      },
      {
        "pregunta": "B03-L51-Q10-¿Cuál de los tipos de mantenimiento hace que los cambios introducidos no repercutan en una mayor complejidad del programa?",
        "respuestas": [
          "Correctivo.",
          "Preventivo.",
          "Adaptativo.",
          "No hay tal mantenimiento, todo cambio supone aumentar la complejidad."
        ],
        "correcta": "Preventivo.",
        "explicacion": "La respuesta correcta es: \"Preventivo.\"."
      },
      {
        "pregunta": "B03-L51-Q011-¿Cuál de las siguientes afirmaciones sobre la definición de mantenimiento es FALSA?",
        "respuestas": [
          "Se sucede después de haber entregado el producto software.",
          "Puede corregir defectos.",
          "Puede mejorar el rendimiento.",
          "Suele ser contraproducente."
        ],
        "correcta": "Suele ser contraproducente.",
        "explicacion": "La respuesta correcta es: \"Suele ser contraproducente.\"."
      },
      {
        "pregunta": "B03-L51-Q012-¿Cuál de los siguientes casos es un ejemplo claro de mantenimiento perfectivo?",
        "respuestas": [
          "Cuando los trenes pasaron de usar carbón a electricidad.",
          "Cuando un tren lleva la carga perfecta.",
          "Cuando un tren vuelve en perfectas condiciones.",
          "Cuando un tren previene una mala situación."
        ],
        "correcta": "Cuando los trenes pasaron de usar carbón a electricidad.",
        "explicacion": "La respuesta correcta es: \"Cuando los trenes pasaron de usar carbón a electricidad.\"."
      },
      {
        "pregunta": "B03-L51-Q013-Al código que ya no se usa, pero sigue en el software se le conoce como",
        "respuestas": [
          "Código inútil.",
          "Código muerto.",
          "Código antiguo.",
          "Código borrable."
        ],
        "correcta": "Código muerto.",
        "explicacion": "La respuesta correcta es: \"Código muerto.\"."
      },
      {
        "pregunta": "B03-L51-Q014-¿Cuál de las siguientes opciones NO es una dificultad del mantenimiento?",
        "respuestas": [
          "Código heredado.",
          "Necesidad de Cambio Continuo.",
          "Mantenimiento realizado de forma sistemática.",
          "Incremento de la Complejidad."
        ],
        "correcta": "Mantenimiento realizado de forma sistemática.",
        "explicacion": "La respuesta correcta es: \"Mantenimiento realizado de forma sistemática.\"."
      },
      {
        "pregunta": "B03-L51-Q015-¿Qué es la reingeniería del software?",
        "respuestas": [
          "hace posible llevar a cabo el mantenimiento evolutivo de sistemas de información existentes asumiendo riesgos y costes bajos.",
          "hace posible llevar a cabo el mantenimiento preventivo de sistemas de información existentes asumiendo riesgos y costes bajos.",
          "hace posible llevar a cabo el mantenimiento adaptativo de sistemas de información existentes asumiendo riesgos y costes bajos.",
          "hace posible llevar a cabo el mantenimiento correctivo de sistemas de información existentes asumiendo riesgos y costes bajos."
        ],
        "correcta": "hace posible llevar a cabo el mantenimiento evolutivo de sistemas de información existentes asumiendo riesgos y costes bajos.",
        "explicacion": "La respuesta correcta es: \"hace posible llevar a cabo el mantenimiento evolutivo de sistemas de información existentes asumiendo riesgos y costes bajos.\"."
      },
      {
        "pregunta": "B03-L51-Q016-¿Qué técnica permite analizar el impacto que tendrá una modificación en diferentes módulos del software?",
        "respuestas": [
          "Pruebas alfa",
          "Gestión de la configuración",
          "Análisis de impacto",
          "Refactorización preventiva"
        ],
        "correcta": "Análisis de impacto",
        "explicacion": "La respuesta correcta es: \"Análisis de impacto\"."
      },
      {
        "pregunta": "B03-L51-Q017-¿Cuál de los siguientes es un objetivo del mantenimiento preventivo?",
        "respuestas": [
          "Reducir la probabilidad de que aparezcan fallos en el futuro",
          "Adaptar el sistema a un nuevo hardware",
          "Añadir nuevas funcionalidades solicitadas",
          "Optimizar la eficiencia del código ejecutado"
        ],
        "correcta": "Reducir la probabilidad de que aparezcan fallos en el futuro",
        "explicacion": "La respuesta correcta es: \"Reducir la probabilidad de que aparezcan fallos en el futuro\"."
      },
      {
        "pregunta": "B03-L51-Q018-¿Qué actividad del mantenimiento implica reorganizar el código sin alterar el comportamiento externo del programa?",
        "respuestas": [
          "Reestructuración",
          "Corrección de errores",
          "Redocumentación",
          "Extensión funcional"
        ],
        "correcta": "Reestructuración",
        "explicacion": "La respuesta correcta es: \"Reestructuración\"."
      },
      {
        "pregunta": "B03-L51-Q019-¿Qué tipo de mantenimiento se ejecuta cuando es necesario que el software cumpla nuevas leyes o normativas obligatorias?",
        "respuestas": [
          "Correctivo",
          "Perfectivo",
          "Preventivo",
          "Adaptativo"
        ],
        "correcta": "Adaptativo",
        "explicacion": "La respuesta correcta es: \"Adaptativo\"."
      },
      {
        "pregunta": "B03-L51-Q020-¿Qué concepto describe el fenómeno por el cual el código se vuelve progresivamente más difícil de entender y mantener tras múltiples modificaciones acumuladas?",
        "respuestas": [
          "Deuda técnica",
          "Acoplamiento dinámico",
          "Redundancia estructural",
          "Integración regresiva"
        ],
        "correcta": "Deuda técnica",
        "explicacion": "La respuesta correcta es: \"Deuda técnica\"."
      },
      {
        "pregunta": "B03-L51-Q021-En la estructura organizativa del mantenimiento, ¿cuál es la función principal del Planificador?",
        "respuestas": [
          "Inspeccionar los cambios realizados y comprobar otros diseños",
          "Planificar la cola de peticiones de modificación",
          "Implementar la solicitud de modificación aprobada",
          "Analizar el impacto del cambio en el sistema"
        ],
        "correcta": "Planificar la cola de peticiones de modificación",
        "explicacion": "La respuesta correcta es: \"Planificar la cola de peticiones de modificación\"."
      },
      {
        "pregunta": "B03-L51-Q022-¿Cuál de los siguientes es un riesgo crítico al asignar personal inexperto a tareas de mantenimiento?",
        "respuestas": [
          "Aumento del presupuesto destinado al equipo de mantenimiento",
          "Desconocimiento técnico y del dominio del negocio que raramente corrige defectos",
          "Necesidad de reescribir completamente el software",
          "Reducción excesiva del número de defectos reportados"
        ],
        "correcta": "Desconocimiento técnico y del dominio del negocio que raramente corrige defectos",
        "explicacion": "La respuesta correcta es: \"Desconocimiento técnico y del dominio del negocio que raramente corrige defectos\"."
      },
      {
        "pregunta": "B03-L51-Q023-¿Cuál es la diferencia fundamental entre ingeniería inversa y reingeniería del software?",
        "respuestas": [
          "La reingeniería solo se aplica a código heredado mientras que la ingeniería inversa se aplica a software nuevo",
          "La ingeniería inversa es una etapa dentro del proceso de reingeniería",
          "La reingeniería corrige defectos mientras que la ingeniería inversa mejora el rendimiento",
          "No hay diferencia, son sinónimos en el contexto del mantenimiento"
        ],
        "correcta": "La ingeniería inversa es una etapa dentro del proceso de reingeniería",
        "explicacion": "La respuesta correcta es: \"La ingeniería inversa es una etapa dentro del proceso de reingeniería\"."
      },
      {
        "pregunta": "B03-L51-Q024-¿Cuál de los siguientes principios de Clean Code enfatiza que una función debe realizar exactamente lo que su nombre indica?",
        "respuestas": [
          "Principio DRY",
          "Principio KISS",
          "Principio Least Surprise",
          "Principio YAGNI"
        ],
        "correcta": "Principio Least Surprise",
        "explicacion": "La respuesta correcta es: \"Principio Least Surprise\"."
      },
      {
        "pregunta": "B03-L51-Q025-¿Cuál de las siguientes acciones forma parte de las buenas prácticas en la gestión estructurada del mantenimiento?",
        "respuestas": [
          "Realizar cambios sin documentarlos para acelerar el proceso",
          "Llevar un registro completo de todas las actividades de mantenimiento",
          "Ignorar los comentarios del código existente",
          "Modificar el código sin respetar el estilo previo"
        ],
        "correcta": "Llevar un registro completo de todas las actividades de mantenimiento",
        "explicacion": "La respuesta correcta es: \"Llevar un registro completo de todas las actividades de mantenimiento\"."
      },
      {
        "pregunta": "B03-L51-Q026-¿Cuál de las siguientes no es una prueba perteneciente a las actividades de mantenimiento?",
        "respuestas": [
          "Pruebas de integración",
          "Pruebas de transmisión",
          "Pruebas de aceptación",
          "Pruebas de regresión"
        ],
        "correcta": "Pruebas de transmisión",
        "explicacion": "La respuesta correcta es: \"Pruebas de transmisión\"."
      },
      {
        "pregunta": "B03-L51-Q027-¿Cuál no es una de las dificultades del mantenimiento?",
        "respuestas": [
          "Código heredado",
          "Necesidad de cambio continuo",
          "Recursos dedicados al mantenimiento",
          "Mantenimiento realizado de forma no sistemática"
        ],
        "correcta": "Recursos dedicados al mantenimiento",
        "explicacion": "La respuesta correcta es: \"Recursos dedicados al mantenimiento\"."
      },
      {
        "pregunta": "B03-L51-Q028-¿Cuál de los siguientes no pertenece a la documentación de los cambios?",
        "respuestas": [
          "Descripción del ejercicio",
          "Descripción del problema",
          "Descripción del proceso de cambio",
          "Descripción del cambio"
        ],
        "correcta": "Descripción del ejercicio",
        "explicacion": "La respuesta correcta es: \"Descripción del ejercicio\"."
      },
      {
        "pregunta": "B03-L51-Q029-¿En qué se basa la ingeniería inversa?",
        "respuestas": [
          "Código binario",
          "Ofrece una representación del artefacto software a un nivel conceptual de mayor abstracción",
          "Código Java",
          "Código JPA/Hibernate"
        ],
        "correcta": "Ofrece una representación del artefacto software a un nivel conceptual de mayor abstracción",
        "explicacion": "La respuesta correcta es: \"Ofrece una representación del artefacto software a un nivel conceptual de mayor abstracción\"."
      },
      {
        "pregunta": "B03-L51-Q030-¿Cuál es la definición de mantenibilidad?",
        "respuestas": [
          "Realiza modificaciones de un artefacto o modelo software en el mismo nivel de abstracción",
          "Ofrece una representación del artefacto software a un nivel conceptual de mayor abstracción",
          "Grado en que un sistema o programa de ordenador está compuesto de componentes discretos de forma tal que un cambio en un componente tenga un impacto mínimo en los demás",
          "Facilidad con que un sistema o componente software puede ser modificado para corregir defectos, mejorar el rendimiento u otros atributos, o adaptarse a un cambio de entorno"
        ],
        "correcta": "Facilidad con que un sistema o componente software puede ser modificado para corregir defectos, mejorar el rendimiento u otros atributos, o adaptarse a un cambio de entorno",
        "explicacion": "La respuesta correcta es: \"Facilidad con que un sistema o componente software puede ser modificado para corregir defectos, mejorar el rendimiento u otros atributos, o adaptarse a un cambio de entorno\"."
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