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
  selector: 'app-bbdd',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DividerModule, CardModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule, PaginatorModule],
  providers: [ConfirmationService],
  templateUrl: './bbdd.component.html',
  styleUrl: './bbdd.component.scss'
})
export class BbddComponent {
 temas: { [key: string]: any[] } = {
    "Preguntas": [
      {
        "pregunta": "¿Cuál es la principal función de una base de datos analítica?",
        "respuestas": [
          "Realizar operaciones diarias de una organización.",
          "Analizar y recuperar información.",
          "Procesar transacciones en línea.",
          "Gestionar la seguridad informática."
        ],
        "correcta": "Analizar y recuperar información."
      },
      {
        "pregunta": "¿Qué diferencia principal existe entre un Data Warehouse y un Data Mart?",
        "respuestas": [
          "Un Data Mart es un subconjunto de un Data Warehouse.",
          "Un Data Mart siempre es más grande que un Data Warehouse.",
          "Un Data Warehouse solo almacena datos operacionales.",
          "No hay diferencia entre ambos, son lo mismo."
        ],
        "correcta": "Un Data Mart es un subconjunto de un Data Warehouse."
      },
      {
        "pregunta": "¿Cuál de los siguientes no es un componente de un Data Warehouse?",
        "respuestas": [
          "Fuentes de Datos.",
          "Extracción y Transformación.",
          "Sistema de control de versiones.",
          "Repositorio de Metadatos."
        ],
        "correcta": "Sistema de control de versiones."
      },
      {
        "pregunta": "¿Qué significa el término 'ETL' en el contexto de un Data Warehouse?",
        "respuestas": [
          "Estructura, Transformación y Lectura.",
          "Extracción, Transformación y Carga.",
          "Evaluación, Testeo y Lanzamiento.",
          "Elaboración, Transferencia y Localización."
        ],
        "correcta": "Extracción, Transformación y Carga."
      },
      {
        "pregunta": "¿Cuál de las siguientes es una ventaja del uso de un Data Warehouse?",
        "respuestas": [
          "Ahorro en costes de producción.",
          "Mayor complejidad en el manejo de datos.",
          "Menor seguridad de la información.",
          "Mayor dependencia de sistemas operacionales."
        ],
        "correcta": "Ahorro en costes de producción."
      },
      {
        "pregunta": "¿Qué tecnología permite analizar datos en un Data Warehouse de manera multidimensional?",
        "respuestas": [
          "OLTP (Online Transaction Processing).",
          "SQL (Structured Query Language).",
          "OLAP (Online Analytical Processing).",
          "Data Mining."
        ],
        "correcta": "OLAP (Online Analytical Processing)."
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre las bases de datos analíticas es correcta?",
        "respuestas": [
          "Se utilizan principalmente para operaciones transaccionales en tiempo real.",
          "Su modelo de datos está completamente normalizado.",
          "Están optimizadas para consultas y análisis de datos históricos.",
          "No permiten realizar operaciones de agregación de datos."
        ],
        "correcta": "Están optimizadas para consultas y análisis de datos históricos."
      },
      {
        "pregunta": "¿Cuál de los siguientes factores es una diferencia clave entre Data Warehouse y Big Data?",
        "respuestas": [
          "El Data Warehouse maneja datos estructurados, mientras que Big Data puede manejar datos no estructurados.",
          "Big Data solo almacena datos transaccionales, mientras que un Data Warehouse almacena cualquier tipo de dato.",
          "Un Data Warehouse siempre requiere procesamiento en paralelo, mientras que Big Data no.",
          "Big Data se usa solo para almacenamiento, mientras que un Data Warehouse permite análisis en tiempo real."
        ],
        "correcta": "El Data Warehouse maneja datos estructurados, mientras que Big Data puede manejar datos no estructurados."
      },
      {
        "pregunta": "¿Cuál es la principal dificultad en la fase de Carga de Datos en un Data Warehouse?",
        "respuestas": [
          "Definir las fuentes de datos adecuadas.",
          "Gestionar la integridad y consistencia de los datos heredados.",
          "Implementar un sistema de consulta eficiente.",
          "Seleccionar un sistema de almacenamiento óptimo."
        ],
        "correcta": "Gestionar la integridad y consistencia de los datos heredados."
      },
      {
        "pregunta": "¿Qué característica define mejor a un sistema OLAP frente a una base de datos relacional tradicional?",
        "respuestas": [
          "Es más eficiente para el almacenamiento de grandes volúmenes de datos no estructurados.",
          "Se basa en un modelo de datos jerárquico en lugar de relacional.",
          "Permite realizar análisis multidimensionales sobre grandes volúmenes de datos.",
          "No permite realizar consultas SQL estándar."
        ],
        "correcta": "Permite realizar análisis multidimensionales sobre grandes volúmenes de datos."
      },
      {
        "pregunta": "¿Cuál es el propósito del repositorio de metadatos en un Data Warehouse?",
        "respuestas": [
          "Almacenar información sobre la estructura y significado de los datos.",
          "Guardar copias de seguridad de los datos operacionales.",
          "Ejecutar procesos ETL de manera automática.",
          "Optimizar la velocidad de las consultas mediante índices."
        ],
        "correcta": "Almacenar información sobre la estructura y significado de los datos."
      },
      {
        "pregunta": "En el contexto de Data Warehouse, ¿qué significa el término 'Diseño en estrella'?",
        "respuestas": [
          "Un modelo de almacenamiento en el que los datos se distribuyen en múltiples servidores.",
          "Una estructura de base de datos donde una tabla central (hechos) se relaciona con varias tablas de dimensión.",
          "Un método de extracción de datos desde múltiples fuentes al Data Warehouse.",
          "Un enfoque para normalizar completamente los datos antes de cargarlos."
        ],
        "correcta": "Una estructura de base de datos donde una tabla central (hechos) se relaciona con varias tablas de dimensión."
      },
      {
        "pregunta": "En un Data Warehouse, ¿por qué la carga de datos heredados es considerada una de las tareas más complejas?",
        "respuestas": [
          "Porque los datos heredados deben ser transformados a un formato compatible con OLAP.",
          "Porque la integración de datos históricos requiere validaciones complejas y resolución de inconsistencias.",
          "Porque los datos heredados suelen estar almacenados en bases de datos NoSQL, lo que dificulta la migración.",
          "Porque los sistemas transaccionales no permiten extraer datos para su integración en el Data Warehouse."
        ],
        "correcta": "Porque la integración de datos históricos requiere validaciones complejas y resolución de inconsistencias."
      },
      {
        "pregunta": "¿Cuál de los siguientes no es un problema habitual en la construcción de un Data Warehouse?",
        "respuestas": [
          "Inconsistencias en los datos provenientes de múltiples fuentes.",
          "Baja capacidad de escalabilidad en entornos OLTP.",
          "Definición incorrecta de las dimensiones en el modelo de datos.",
          "Dificultad para establecer políticas de calidad de datos homogéneas."
        ],
        "correcta": "Baja capacidad de escalabilidad en entornos OLTP."
      },
      {
        "pregunta": "En un esquema de diseño en copo de nieve, ¿qué diferencia principal tiene respecto al diseño en estrella?",
        "respuestas": [
          "Las tablas de dimensión están completamente desnormalizadas en el diseño en copo de nieve.",
          "Las tablas de dimensión en copo de nieve están normalizadas para reducir la redundancia de datos.",
          "El diseño en copo de nieve permite consultas más rápidas que el diseño en estrella.",
          "En el copo de nieve, las tablas de hechos contienen claves ajenas a múltiples niveles jerárquicos de dimensión."
        ],
        "correcta": "Las tablas de dimensión en copo de nieve están normalizadas para reducir la redundancia de datos."
      },
      {
        "pregunta": "En el contexto de un proceso ETL, ¿qué estrategia podría emplearse para garantizar la integridad de los datos al actualizar el Data Warehouse?",
        "respuestas": [
          "Utilizar estrategias de carga incremental con técnicas de versionado de datos.",
          "Realizar siempre una carga completa de los datos para evitar inconsistencias.",
          "Almacenar todas las versiones de los datos en una base de datos relacional separada.",
          "Eliminar los datos históricos antes de cada carga para asegurar datos frescos y precisos."
        ],
        "correcta": "Utilizar estrategias de carga incremental con técnicas de versionado de datos."
      },
      {
        "pregunta": "En un sistema OLAP, ¿cómo afecta el número de dimensiones a la eficiencia del procesamiento de consultas?",
        "respuestas": [
          "Un mayor número de dimensiones siempre mejora la velocidad de consulta.",
          "El aumento de dimensiones incrementa la complejidad de los índices, lo que puede ralentizar consultas.",
          "Las dimensiones no afectan la velocidad de consulta, ya que los sistemas OLAP manejan estructuras preagregadas.",
          "El número de dimensiones solo influye en consultas OLTP, no en OLAP."
        ],
        "correcta": "El aumento de dimensiones incrementa la complejidad de los índices, lo que puede ralentizar consultas."
      },
      {
        "pregunta": "En la implementación de un Data Warehouse, ¿cuál es el mayor desafío al integrar datos de múltiples fuentes heterogéneas?",
        "respuestas": [
          "Convertir los datos a un formato común sin perder información clave.",
          "Asegurar que cada fuente de datos utilice el mismo sistema de almacenamiento físico.",
          "Reducir el volumen de datos para minimizar el costo de almacenamiento.",
          "Evitar la duplicación de datos mediante normalización extrema."
        ],
        "correcta": "Convertir los datos a un formato común sin perder información clave."
      },
      {
        "pregunta": "¿Qué significa OLAP?",
        "respuestas": [
          "Online Analytical Processing.",
          "Organized Logical Application Programming.",
          "Operational Linked Analysis Procedure.",
          "Optimized Large-scale Analytical Processing."
        ],
        "correcta": "Online Analytical Processing."
      },
      {
        "pregunta": "¿Cuál de las siguientes no es una característica básica de OLAP?",
        "respuestas": [
          "Vista Multidimensional de los datos.",
          "Accesibilidad como mediador de datos.",
          "Capacidad para ejecutar transacciones en tiempo real.",
          "Manipulación intuitiva de los datos."
        ],
        "correcta": "Capacidad para ejecutar transacciones en tiempo real."
      },
      {
        "pregunta": "¿Qué tipos fundamentales de OLAP existen?",
        "respuestas": [
          "MOLAP y ROLAP.",
          "SQL y NoSQL.",
          "Batch OLAP y Stream OLAP.",
          "OLTP y OLAP."
        ],
        "correcta": "MOLAP y ROLAP."
      },
      {
        "pregunta": "¿Cuál es una ventaja de MOLAP?",
        "respuestas": [
          "Mayor rendimiento en procesamiento de consultas.",
          "Mayor capacidad de almacenamiento sin límites.",
          "Soporta solo bases de datos relacionales.",
          "Requiere menor potencia computacional."
        ],
        "correcta": "Mayor rendimiento en procesamiento de consultas."
      },
      {
        "pregunta": "¿Cuál de los siguientes no es un operador OLAP?",
        "respuestas": [
          "ROLL-UP.",
          "PIVOT.",
          "JOIN.",
          "SLICE & DICE."
        ],
        "correcta": "JOIN."
      },
      {
        "pregunta": "¿Qué característica tiene HOLAP?",
        "respuestas": [
          "Combina modelos ROLAP y MOLAP.",
          "Solo usa bases de datos relacionales.",
          "No permite análisis multidimensional.",
          "Solo almacena datos detallados sin agregaciones."
        ],
        "correcta": "Combina modelos ROLAP y MOLAP."
      },
      {
        "pregunta": "¿Cuál es una característica especial de OLAP?",
        "respuestas": [
          "Almacenamiento de datos completamente normalizados.",
          "Generación avanzada de informes con rendimiento independiente de la complejidad.",
          "Uso exclusivo en bases de datos relacionales.",
          "Limitación en la cantidad de dimensiones disponibles."
        ],
        "correcta": "Generación avanzada de informes con rendimiento independiente de la complejidad."
      },
      {
        "pregunta": "¿Cuál es una diferencia clave entre OLAP y los sistemas relacionales tradicionales?",
        "respuestas": [
          "OLAP permite la manipulación de datos de manera intuitiva y multidimensional.",
          "Los sistemas relacionales no pueden realizar consultas SQL.",
          "OLAP no permite realizar agregaciones o consolidaciones de datos.",
          "Los sistemas relacionales almacenan datos en estructuras multidimensionales como cubos."
        ],
        "correcta": "OLAP permite la manipulación de datos de manera intuitiva y multidimensional."
      },
      {
        "pregunta": "¿Cuál es la principal desventaja de ROLAP?",
        "respuestas": [
          "No permite realizar análisis multidimensional.",
          "Tiene menor rendimiento debido a que las operaciones multidimensionales se implementan en SQL.",
          "Requiere estructuras de datos adicionales para su funcionamiento.",
          "Solo soporta consultas básicas sin agregaciones complejas."
        ],
        "correcta": "Tiene menor rendimiento debido a que las operaciones multidimensionales se implementan en SQL."
      },
      {
        "pregunta": "¿Cuál de las siguientes es una operación OLAP?",
        "respuestas": [
          "ROLL-UP.",
          "MERGE JOIN.",
          "INDEX SCAN.",
          "COMMIT TRANSACTION."
        ],
        "correcta": "ROLL-UP."
      },
      {
        "pregunta": "En la arquitectura HOLAP, ¿cómo se manejan los datos?",
        "respuestas": [
          "Se almacenan algunos datos en un motor relacional y otros en una base de datos multidimensional.",
          "Todos los datos se almacenan en cubos multidimensionales.",
          "Los datos se procesan exclusivamente en bases de datos relacionales sin agregaciones previas.",
          "Los datos se extraen dinámicamente sin almacenamiento previo."
        ],
        "correcta": "Se almacenan algunos datos en un motor relacional y otros en una base de datos multidimensional."
      },
      {
        "pregunta": "¿Cómo permite OLAP la exploración de datos desde diferentes perspectivas?",
        "respuestas": [
          "A través de la navegación por dimensiones y jerarquías.",
          "Solo mediante consultas SQL predefinidas.",
          "Mediante la eliminación de la estructura de los datos.",
          "A través de la reducción del volumen de datos almacenados."
        ],
        "correcta": "A través de la navegación por dimensiones y jerarquías."
      },
      {
        "pregunta": "En un entorno OLAP, ¿qué impacto tiene la gestión de una matriz de datos dispersos?",
        "respuestas": [
          "Mejora la eficiencia del almacenamiento y reduce la redundancia de datos.",
          "Permite almacenar solo datos totalmente normalizados.",
          "Evita la necesidad de índices y estructuras de agregación.",
          "Hace que las consultas sean más rápidas sin importar el volumen de datos."
        ],
        "correcta": "Mejora la eficiencia del almacenamiento y reduce la redundancia de datos."
      },
      {
        "pregunta": "En la implementación de un sistema OLAP, ¿qué problema puede surgir al trabajar con un número ilimitado de dimensiones?",
        "respuestas": [
          "El rendimiento puede verse afectado debido a la explosión combinatoria de datos.",
          "La capacidad de análisis se reduce al manejar demasiadas variables a la vez.",
          "Se pierde la capacidad de realizar agregaciones y consolidaciones.",
          "El sistema OLAP deja de ser compatible con bases de datos relacionales."
        ],
        "correcta": "El rendimiento puede verse afectado debido a la explosión combinatoria de datos."
      },
      {
        "pregunta": "¿Por qué ROLAP puede ser menos eficiente que MOLAP en ciertas consultas analíticas?",
        "respuestas": [
          "Porque ROLAP depende de SQL para ejecutar consultas multidimensionales, lo que puede ser menos eficiente.",
          "Porque ROLAP no permite realizar análisis de datos en múltiples dimensiones.",
          "Porque ROLAP solo soporta bases de datos de pequeña escala.",
          "Porque ROLAP no puede manejar grandes volúmenes de datos."
        ],
        "correcta": "Porque ROLAP depende de SQL para ejecutar consultas multidimensionales, lo que puede ser menos eficiente."
      },
      {
        "pregunta": "En la arquitectura HOLAP, ¿cómo se optimiza la consulta de datos almacenados en diferentes formatos?",
        "respuestas": [
          "Distribuyendo cálculos preagregados en la base de datos multidimensional y manteniendo datos detallados en la base de datos relacional.",
          "Manteniendo todos los datos en estructuras tabulares y eliminando los cubos multidimensionales.",
          "Ejecutando todas las consultas directamente sobre la base de datos relacional sin preprocesamiento.",
          "Almacenando todos los datos en un único sistema sin distinción entre estructuras multidimensionales y relacionales."
        ],
        "correcta": "Distribuyendo cálculos preagregados en la base de datos multidimensional y manteniendo datos detallados en la base de datos relacional."
      },
      {
        "pregunta": "¿Cuál es una desventaja clave de DOLAP frente a otras arquitecturas OLAP?",
        "respuestas": [
          "Las consultas se limitan a los datos descargados y no reflejan información actualizada en tiempo real.",
          "Requiere una infraestructura de servidor dedicada para ejecutar consultas analíticas.",
          "No permite realizar análisis multidimensional ni agregaciones complejas.",
          "Solo puede manejar datos altamente estructurados, sin posibilidad de análisis avanzado."
        ],
        "correcta": "Las consultas se limitan a los datos descargados y no reflejan información actualizada en tiempo real."
      },
      {
        "pregunta": "En el contexto de OLAP, ¿qué ventaja tiene el uso de operadores como drill-down y roll-up?",
        "respuestas": [
          "Permiten analizar los datos en distintos niveles de agregación de manera flexible.",
          "Eliminan la necesidad de preagregar datos en estructuras multidimensionales.",
          "Optimizan la ejecución de consultas SQL en bases de datos relacionales.",
          "Permiten ejecutar cálculos en tiempo real sin requerir estructuras adicionales."
        ],
        "correcta": "Permiten analizar los datos en distintos niveles de agregación de manera flexible."
      },
      {
        "pregunta": "En un sistema MOLAP, ¿cómo afecta el aumento del número de dimensiones a la estructura de almacenamiento?",
        "respuestas": [
          "Provoca un crecimiento exponencial del tamaño del cubo, aumentando el consumo de memoria.",
          "Mejora el rendimiento del sistema al distribuir mejor los datos entre las dimensiones.",
          "Reduce la complejidad de las consultas al permitir segmentaciones más precisas.",
          "No tiene impacto en el almacenamiento, ya que MOLAP utiliza estructuras dinámicas."
        ],
        "correcta": "Provoca un crecimiento exponencial del tamaño del cubo, aumentando el consumo de memoria."
      },
      {
        "pregunta": "¿Cuál es la mayor complejidad en la optimización de consultas en un sistema ROLAP con grandes volúmenes de datos?",
        "respuestas": [
          "La necesidad de generar dinámicamente consultas SQL complejas para recuperar datos multidimensionales.",
          "La imposibilidad de realizar agregaciones sobre datos almacenados en tablas normalizadas.",
          "La falta de compatibilidad con estructuras de datos multidimensionales.",
          "El bajo rendimiento en consultas que no involucran agregaciones ni cálculos predefinidos."
        ],
        "correcta": "La necesidad de generar dinámicamente consultas SQL complejas para recuperar datos multidimensionales."
      },
      {
        "pregunta": "¿Qué representan las medidas en un Data Warehouse?",
        "respuestas": [
          "Son datos cualitativos utilizados para agrupar información.",
          "Son valores numéricos que se analizan y resumen en diferentes niveles.",
          "Son identificadores únicos de cada transacción en una base de datos.",
          "Son estructuras utilizadas para almacenar metadatos."
        ],
        "correcta": "Son valores numéricos que se analizan y resumen en diferentes niveles."
      },
      {
        "pregunta": "¿Cuál es la función principal de las dimensiones en un Data Warehouse?",
        "respuestas": [
          "Almacenar información de transacciones en tiempo real.",
          "Determinar los criterios bajo los cuales se analizarán las medidas.",
          "Optimizar la velocidad de consulta en bases de datos operacionales.",
          "Generar automáticamente reportes de ventas y finanzas."
        ],
        "correcta": "Determinar los criterios bajo los cuales se analizarán las medidas."
      },
      {
        "pregunta": "¿Qué caracteriza a una tabla de hechos en un modelo de Data Warehouse?",
        "respuestas": [
          "Contiene los valores de las medidas de negocio.",
          "Almacena únicamente datos categóricos sin valores numéricos.",
          "Agrupa datos históricos en formato de texto.",
          "Se utiliza solo en bases de datos transaccionales."
        ],
        "correcta": "Contiene los valores de las medidas de negocio."
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre el Diseño en Estrella es correcta?",
        "respuestas": [
          "Las tablas de hechos están normalizadas para reducir redundancia.",
          "Las tablas de dimensiones rodean una tabla central de hechos.",
          "El diseño en estrella es más lento que otros esquemas dimensionales.",
          "Solo se utiliza en sistemas OLTP y no en Data Warehouses."
        ],
        "correcta": "Las tablas de dimensiones rodean una tabla central de hechos."
      },
      {
        "pregunta": "¿Qué tipo de relación existe entre una tabla de hechos y sus tablas de dimensiones en un Diseño en Estrella?",
        "respuestas": [
          "Uno a uno.",
          "Uno a muchos con cada tabla de dimensión, y muchos a muchos en conjunto.",
          "Muchos a muchos exclusivamente.",
          "No existe relación directa entre las tablas."
        ],
        "correcta": "Uno a muchos con cada tabla de dimensión, y muchos a muchos en conjunto."
      },
      {
        "pregunta": "¿Cuál es una ventaja clave del Diseño en Estrella?",
        "respuestas": [
          "Facilita la consulta y navegación de datos de manera intuitiva.",
          "Evita por completo la necesidad de agregaciones y cálculos.",
          "Reduce significativamente el tamaño de almacenamiento en disco.",
          "Permite realizar transacciones en tiempo real sin latencia."
        ],
        "correcta": "Facilita la consulta y navegación de datos de manera intuitiva."
      },
      {
        "pregunta": "¿Cuál es la función de las tablas de dimensiones en un esquema de Diseño en Estrella?",
        "respuestas": [
          "Almacenar datos de medición y valores cuantitativos.",
          "Facilitar la agrupación y restricción de datos almacenados en la tabla de hechos.",
          "Optimizar el almacenamiento mediante la normalización de datos.",
          "Actuar como índices primarios en consultas SQL complejas."
        ],
        "correcta": "Facilitar la agrupación y restricción de datos almacenados en la tabla de hechos."
      },
      {
        "pregunta": "¿Qué impacto tiene la granularidad en la tabla de hechos?",
        "respuestas": [
          "Define el nivel de detalle con el que se almacenan los datos.",
          "Determina la cantidad de índices necesarios para optimizar consultas.",
          "Controla la velocidad de inserción de datos en la tabla de dimensiones.",
          "Permite relacionar múltiples hechos en un solo registro."
        ],
        "correcta": "Define el nivel de detalle con el que se almacenan los datos."
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre dimensiones de cambio lento es correcta?",
        "respuestas": [
          "Permiten registrar cambios históricos en atributos dimensionales.",
          "Se actualizan en tiempo real en cada transacción realizada.",
          "No afectan el diseño del Data Warehouse y pueden ignorarse.",
          "Requieren ser eliminadas y regeneradas periódicamente."
        ],
        "correcta": "Permiten registrar cambios históricos en atributos dimensionales."
      },
      {
        "pregunta": "¿Cómo afectan las dimensiones degeneradas a la estructura de un Data Warehouse?",
        "respuestas": [
          "Se almacenan dentro de la tabla de hechos en lugar de tener una tabla propia.",
          "Aumentan la complejidad del esquema en estrella al agregar relaciones adicionales.",
          "Disminuyen la velocidad de consulta al requerir múltiples uniones.",
          "Solo se utilizan en bases de datos transaccionales y no en Data Warehouses."
        ],
        "correcta": "Se almacenan dentro de la tabla de hechos en lugar de tener una tabla propia."
      },
      {
        "pregunta": "¿Por qué se prefiere un esquema en estrella en comparación con otros modelos dimensionales?",
        "respuestas": [
          "Porque permite consultas eficientes gracias a su estructura simple.",
          "Porque reduce la cantidad de datos almacenados mediante normalización.",
          "Porque evita el uso de claves foráneas en la tabla de hechos.",
          "Porque soporta transacciones en línea con mayor rapidez."
        ],
        "correcta": "Porque permite consultas eficientes gracias a su estructura simple."
      },
      {
        "pregunta": "En un diseño de Data Warehouse, ¿cuándo se debe considerar el uso de múltiples tablas de hechos?",
        "respuestas": [
          "Cuando se necesitan almacenar hechos con diferentes niveles de granularidad.",
          "Cuando se requiere reducir la cantidad de consultas SQL necesarias.",
          "Cuando el tamaño de la base de datos supera un umbral específico.",
          "Cuando se necesita consolidar todas las medidas en una única tabla."
        ],
        "correcta": "Cuando se necesitan almacenar hechos con diferentes niveles de granularidad."
      },
      {
        "pregunta": "En el diseño en estrella, ¿cuál es una posible desventaja de no aplicar normalización en las tablas de dimensiones?",
        "respuestas": [
          "Aumenta la redundancia y el tamaño de almacenamiento.",
          "Hace que las consultas sean más lentas al necesitar múltiples uniones.",
          "Impide el uso de claves primarias en las dimensiones.",
          "Dificulta la aplicación de agregaciones y cálculos en la tabla de hechos."
        ],
        "correcta": "Aumenta la redundancia y el tamaño de almacenamiento."
      },
      {
        "pregunta": "¿Por qué las claves ajenas en la tabla de hechos nunca deben ser nulas?",
        "respuestas": [
          "Porque las claves ajenas definen la relación entre las dimensiones y los hechos.",
          "Porque la presencia de valores nulos haría que las consultas sean más rápidas.",
          "Porque los valores nulos reducen la granularidad de la tabla de hechos.",
          "Porque las claves ajenas deben ser generadas dinámicamente en cada consulta."
        ],
        "correcta": "Porque las claves ajenas definen la relación entre las dimensiones y los hechos."
      },
      {
        "pregunta": "¿Cuál es la principal diferencia entre las medidas aditivas y semi-aditivas en una tabla de hechos?",
        "respuestas": [
          "Las medidas aditivas pueden ser agregadas en cualquier dimensión, mientras que las semi-aditivas solo en algunas.",
          "Las medidas semi-aditivas no pueden ser agregadas en ninguna dimensión.",
          "Las medidas aditivas solo pueden calcularse en bases de datos OLTP.",
          "Las medidas semi-aditivas siempre dependen de claves ajenas en la tabla de hechos."
        ],
        "correcta": "Las medidas aditivas pueden ser agregadas en cualquier dimensión, mientras que las semi-aditivas solo en algunas."
      },
      {
        "pregunta": "¿Qué problema puede surgir si no se mantiene una granularidad consistente en una tabla de hechos?",
        "respuestas": [
          "Se pueden generar inconsistencias en los cálculos y consultas agregadas.",
          "Se requiere normalizar completamente las tablas de dimensiones.",
          "No es posible almacenar múltiples dimensiones en una sola tabla de hechos.",
          "Las consultas siempre devolverán resultados incorrectos sin importar la estructura."
        ],
        "correcta": "Se pueden generar inconsistencias en los cálculos y consultas agregadas."
      },
      {
        "pregunta": "¿Por qué una dimensión degenerada puede ser útil en un esquema de diseño en estrella?",
        "respuestas": [
          "Permite almacenar valores únicos sin crear una tabla de dimensiones adicional.",
          "Reduce la redundancia en las tablas de dimensiones y mejora la velocidad de consulta.",
          "Permite realizar agregaciones en múltiples dimensiones simultáneamente.",
          "Evita la necesidad de claves primarias en la tabla de hechos."
        ],
        "correcta": "Permite almacenar valores únicos sin crear una tabla de dimensiones adicional."
      },
      {
        "pregunta": "En un esquema en estrella, ¿cómo se relacionan las claves ajenas de la tabla de hechos con las tablas de dimensiones?",
        "respuestas": [
          "Mediante una relación uno a muchos con cada tabla de dimensión.",
          "Mediante una relación muchos a muchos con todas las tablas de dimensiones.",
          "Las claves ajenas solo se utilizan en consultas de agregación y no en la estructura de datos.",
          "Las claves ajenas no son necesarias, ya que las dimensiones están almacenadas dentro de la tabla de hechos."
        ],
        "correcta": "Mediante una relación uno a muchos con cada tabla de dimensión."
      },
      {
        "pregunta": "En un modelo de diseño en estrella con grandes volúmenes de datos, ¿qué estrategia podría aplicarse para mejorar la eficiencia de consulta?",
        "respuestas": [
          "Implementar particionamiento de la tabla de hechos basado en las dimensiones más consultadas.",
          "Reducir la cantidad de dimensiones en la tabla de hechos eliminando claves ajenas.",
          "Convertir el diseño en estrella en un esquema completamente normalizado.",
          "Almacenar todas las medidas en una única columna para minimizar el tamaño de los datos."
        ],
        "correcta": "Implementar particionamiento de la tabla de hechos basado en las dimensiones más consultadas."
      },
      {
        "pregunta": "En un esquema en estrella altamente optimizado, ¿cómo se pueden manejar las dimensiones de cambio lento sin afectar el rendimiento?",
        "respuestas": [
          "Utilizando técnicas de versionado para mantener múltiples registros históricos de cada dimensión.",
          "Creando una nueva tabla de hechos cada vez que una dimensión cambia.",
          "Eliminando la dimensión afectada y recalculando todas las medidas en la tabla de hechos.",
          "No almacenando valores históricos y sobrescribiendo los datos anteriores."
        ],
        "correcta": "Utilizando técnicas de versionado para mantener múltiples registros históricos de cada dimensión."
      },
      {
        "pregunta": "¿Qué significa el término ETL en un Data Warehouse?",
        "respuestas": [
          "Extracción, Transformación y Carga.",
          "Evaluación, Transmisión y Listado.",
          "Estructuración, Tabulación y Lectura.",
          "Enlace, Transferencia y Localización."
        ],
        "correcta": "Extracción, Transformación y Carga."
      },
      {
        "pregunta": "¿Cuál de los siguientes procesos es parte de la fase de Extracción en ETL?",
        "respuestas": [
          "Leer datos de múltiples fuentes.",
          "Crear agregaciones y cálculos derivados.",
          "Eliminar datos inconsistentes en la base de datos destino.",
          "Actualizar medidas en las tablas de dimensiones."
        ],
        "correcta": "Leer datos de múltiples fuentes."
      },
      {
        "pregunta": "¿Por qué es importante la limpieza de datos en ETL?",
        "respuestas": [
          "Para asegurar que los datos sean precisos y confiables.",
          "Para aumentar la velocidad de las consultas SQL.",
          "Para reducir el tamaño del Data Warehouse.",
          "Para eliminar la necesidad de realizar agregaciones."
        ],
        "correcta": "Para asegurar que los datos sean precisos y confiables."
      },
      {
        "pregunta": "¿Qué se debe hacer cuando faltan datos en el proceso ETL?",
        "respuestas": [
          "Rellenarlos con valores predeterminados o inferirlos.",
          "Eliminar todas las filas que contengan valores faltantes.",
          "Detener el proceso ETL hasta que se resuelva el problema.",
          "Ignorar los valores perdidos y continuar con la carga."
        ],
        "correcta": "Rellenarlos con valores predeterminados o inferirlos."
      },
      {
        "pregunta": "¿Qué tipo de datos pueden considerarse 'datos sucios' en ETL?",
        "respuestas": [
          "Datos incompletos, incorrectos o inconsistentes.",
          "Datos altamente estructurados provenientes de bases OLAP.",
          "Datos que han sido previamente agregados y normalizados.",
          "Datos que han sido optimizados para consultas rápidas."
        ],
        "correcta": "Datos incompletos, incorrectos o inconsistentes."
      },
      {
        "pregunta": "¿Cuál es una ventaja de la sincronización periódica en ETL?",
        "respuestas": [
          "Permite actualizar el Data Warehouse sin recargar todos los datos.",
          "Elimina la necesidad de realizar transformaciones previas.",
          "Reduce el tiempo de extracción al eliminar metadatos.",
          "Asegura que los datos siempre estén en tiempo real."
        ],
        "correcta": "Permite actualizar el Data Warehouse sin recargar todos los datos."
      },
      {
        "pregunta": "¿Cuál de las siguientes es una estrategia efectiva para detectar cambios en los datos durante el proceso ETL?",
        "respuestas": [
          "Utilizar columnas timestamp para identificar registros modificados.",
          "Volver a extraer y cargar todos los datos en cada ciclo de ETL.",
          "Eliminar todos los registros antiguos antes de la carga.",
          "Convertir todos los datos en formato texto antes de analizarlos."
        ],
        "correcta": "Utilizar columnas timestamp para identificar registros modificados."
      },
      {
        "pregunta": "¿Qué problema puede causar la redundancia de datos en un Data Warehouse?",
        "respuestas": [
          "Puede generar inconsistencias al tener múltiples versiones del mismo dato.",
          "Aumenta la velocidad de procesamiento de consultas.",
          "Facilita la normalización y limpieza de datos.",
          "Reduce la necesidad de realizar transformaciones en el proceso ETL."
        ],
        "correcta": "Puede generar inconsistencias al tener múltiples versiones del mismo dato."
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre la transformación de datos en ETL es correcta?",
        "respuestas": [
          "Incluye la estandarización de formatos y la resolución de inconsistencias.",
          "Solo se aplica a datos provenientes de bases de datos relacionales.",
          "No afecta la estructura de los datos en el Data Warehouse.",
          "Se realiza después de la carga para optimizar el rendimiento."
        ],
        "correcta": "Incluye la estandarización de formatos y la resolución de inconsistencias."
      },
      {
        "pregunta": "¿Cómo puede afectar el uso de áreas intermedias ('staging areas') en ETL?",
        "respuestas": [
          "Permite realizar transformaciones y limpieza sin afectar el sistema de origen.",
          "Obliga a realizar consultas directas sobre el sistema OLTP.",
          "Elimina la necesidad de realizar procesos de limpieza de datos.",
          "Reduce la cantidad de datos almacenados en el Data Warehouse."
        ],
        "correcta": "Permite realizar transformaciones y limpieza sin afectar el sistema de origen."
      },
      {
        "pregunta": "¿Por qué la sincronización periódica en ETL puede ser más compleja que la carga inicial?",
        "respuestas": [
          "Debe identificar y actualizar solo los datos que han cambiado.",
          "Requiere más tiempo de procesamiento debido a la duplicación de datos.",
          "No permite realizar transformaciones en los datos extraídos.",
          "Obliga a recrear todas las tablas de dimensiones en cada ciclo."
        ],
        "correcta": "Debe identificar y actualizar solo los datos que han cambiado."
      },
      {
        "pregunta": "En un proceso ETL, ¿cuál es una forma efectiva de manejar datos perdidos?",
        "respuestas": [
          "Inferir los valores faltantes utilizando modelos probabilísticos.",
          "Eliminar cualquier registro que contenga un valor nulo.",
          "Dejar los valores en blanco sin ninguna intervención.",
          "Reemplazar todos los valores faltantes por ceros o cadenas vacías."
        ],
        "correcta": "Inferir los valores faltantes utilizando modelos probabilísticos."
      },
      {
        "pregunta": "¿Cuál es un desafío clave en la integración de datos de múltiples fuentes en un proceso ETL?",
        "respuestas": [
          "Garantizar la consistencia y resolución de conflictos entre diferentes formatos y estructuras.",
          "Asegurar que todos los datos provengan de bases de datos relacionales.",
          "Evitar la transformación de datos para mantener su estado original.",
          "Reducir la cantidad de datos antes de la extracción para minimizar el almacenamiento."
        ],
        "correcta": "Garantizar la consistencia y resolución de conflictos entre diferentes formatos y estructuras."
      },
      {
        "pregunta": "¿Por qué se considera que la detección de cambios en datos históricos es una tarea compleja en ETL?",
        "respuestas": [
          "Porque requiere comparar versiones previas y actuales de los datos para detectar modificaciones.",
          "Porque los datos históricos siempre deben ser sobrescritos en cada actualización.",
          "Porque solo es posible en sistemas que permiten consultas en tiempo real.",
          "Porque la detección de cambios solo funciona en bases de datos NoSQL."
        ],
        "correcta": "Porque requiere comparar versiones previas y actuales de los datos para detectar modificaciones."
      },
      {
        "pregunta": "En la fase de carga de un proceso ETL, ¿cuál de las siguientes estrategias es recomendable para evitar afectar el rendimiento del sistema OLTP?",
        "respuestas": [
          "Realizar la carga en horarios de baja actividad del sistema.",
          "Ejecutar actualizaciones en tiempo real sin buffers intermedios.",
          "Desactivar los índices de la base de datos para acelerar la carga.",
          "Eliminar registros antiguos antes de insertar nuevos datos."
        ],
        "correcta": "Realizar la carga en horarios de baja actividad del sistema."
      },
      {
        "pregunta": "¿Cómo pueden las áreas intermedias ('staging areas') mejorar el rendimiento del proceso ETL?",
        "respuestas": [
          "Reduciendo la carga sobre el sistema OLTP al realizar transformaciones fuera de él.",
          "Eliminando la necesidad de realizar validaciones de datos.",
          "Acelerando la ejecución de consultas en el sistema OLTP.",
          "Evadiendo el uso de metadatos en el almacenamiento de datos."
        ],
        "correcta": "Reduciendo la carga sobre el sistema OLTP al realizar transformaciones fuera de él."
      },
      {
        "pregunta": "¿Cuál es el principal problema que puede causar la redundancia de datos en un proceso ETL?",
        "respuestas": [
          "Inconsistencias en los resultados debido a múltiples versiones del mismo dato.",
          "Reducción del tiempo de ejecución del proceso ETL.",
          "Mejora en la velocidad de acceso a los datos mediante duplicación.",
          "Evita la necesidad de realizar limpieza de datos antes de la carga."
        ],
        "correcta": "Inconsistencias en los resultados debido a múltiples versiones del mismo dato."
      },
      {
        "pregunta": "¿Cuál es una desventaja del uso de Change Data Capture (CDC) en ETL?",
        "respuestas": [
          "Puede generar una sobrecarga en la base de datos al rastrear cambios continuamente.",
          "Requiere eliminar todos los registros antiguos antes de procesar nuevos datos.",
          "No permite identificar cambios en bases de datos transaccionales.",
          "No es compatible con bases de datos relacionales modernas."
        ],
        "correcta": "Puede generar una sobrecarga en la base de datos al rastrear cambios continuamente."
      },
      {
        "pregunta": "En un proceso ETL con múltiples fuentes de datos heterogéneas, ¿cuál es la mejor estrategia para manejar claves primarias duplicadas?",
        "respuestas": [
          "Utilizar una clave compuesta que incluya un identificador único de origen.",
          "Eliminar los registros duplicados antes de insertarlos en la tabla de hechos.",
          "Transformar todas las claves en valores hash para evitar colisiones.",
          "Asignar claves secuenciales generadas dinámicamente sin considerar su origen."
        ],
        "correcta": "Utilizar una clave compuesta que incluya un identificador único de origen."
      },
      {
        "pregunta": "¿Por qué la sincronización periódica en ETL puede generar problemas en la integridad de datos cuando se combinan múltiples fuentes?",
        "respuestas": [
          "Diferencias en las zonas horarias y latencias pueden generar inconsistencias en la actualización de datos.",
          "El proceso de sincronización periódica siempre sobrescribe todos los registros en cada ciclo.",
          "Solo se puede aplicar cuando todas las fuentes de datos están en el mismo formato estructural.",
          "La sincronización periódica solo funciona con bases de datos OLAP y no con sistemas transaccionales."
        ],
        "correcta": "Diferencias en las zonas horarias y latencias pueden generar inconsistencias en la actualización de datos."
      },
      {
        "pregunta": "¿Qué es el Data Mining?",
        "respuestas": [
          "Un proceso para descubrir patrones y relaciones en grandes volúmenes de datos.",
          "Un sistema para almacenar grandes cantidades de información en bases de datos relacionales.",
          "Un método para organizar datos de manera jerárquica en un Data Warehouse.",
          "Un software de administración de bases de datos relacionales."
        ],
        "correcta": "Un proceso para descubrir patrones y relaciones en grandes volúmenes de datos."
      },
      {
        "pregunta": "¿Cuál de las siguientes tareas de Data Mining se utiliza para clasificar nuevos objetos en categorías?",
        "respuestas": [
          "Clasificación.",
          "Pronóstico.",
          "Asociación.",
          "Regresión."
        ],
        "correcta": "Clasificación."
      },
      {
        "pregunta": "¿Cuál de las siguientes opciones es un ejemplo de una aplicación de Data Mining?",
        "respuestas": [
          "Detección de fraudes en tarjetas de crédito.",
          "Almacenamiento de datos históricos en bases de datos relacionales.",
          "Uso de SQL para consultas en bases de datos.",
          "Creación de índices para mejorar la velocidad de búsqueda."
        ],
        "correcta": "Detección de fraudes en tarjetas de crédito."
      },
      {
        "pregunta": "¿Cuál es el propósito del pronóstico en Data Mining?",
        "respuestas": [
          "Predecir un valor futuro basado en datos históricos.",
          "Dividir una población en grupos homogéneos.",
          "Determinar patrones ocultos en bases de datos.",
          "Descubrir relaciones entre diferentes atributos de datos."
        ],
        "correcta": "Predecir un valor futuro basado en datos históricos."
      },
      {
        "pregunta": "¿Qué tipo de análisis permite determinar qué productos se compran juntos en un supermercado?",
        "respuestas": [
          "Asociación.",
          "Clasificación.",
          "Regresión.",
          "Agrupamiento."
        ],
        "correcta": "Asociación."
      },
      {
        "pregunta": "¿Qué herramienta es clave en la fase exploratoria del Data Mining?",
        "respuestas": [
          "Visualización de datos mediante gráficos y colores.",
          "Creación de bases de datos relacionales.",
          "Generación de reportes en formato SQL.",
          "Optimización de índices en bases de datos."
        ],
        "correcta": "Visualización de datos mediante gráficos y colores."
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre el Data Mining es correcta?",
        "respuestas": [
          "Se aplica sobre bases de datos estructuradas y transformadas.",
          "Solo se utiliza en bases de datos transaccionales en tiempo real.",
          "Es un proceso manual que no puede ser automatizado.",
          "No requiere limpieza ni transformación de datos previos."
        ],
        "correcta": "Se aplica sobre bases de datos estructuradas y transformadas."
      },
      {
        "pregunta": "¿Cuál es la diferencia entre clasificación y agrupación en Data Mining?",
        "respuestas": [
          "La clasificación usa categorías predefinidas, mientras que la agrupación encuentra patrones sin categorías preexistentes.",
          "La agrupación siempre requiere supervisión humana, mientras que la clasificación no.",
          "La clasificación es un proceso aleatorio, mientras que la agrupación usa reglas matemáticas.",
          "La agrupación se usa para predecir valores futuros, mientras que la clasificación no."
        ],
        "correcta": "La clasificación usa categorías predefinidas, mientras que la agrupación encuentra patrones sin categorías preexistentes."
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre los árboles de decisión en Data Mining es correcta?",
        "respuestas": [
          "Permiten dividir conjuntos de datos en grupos basados en reglas de clasificación.",
          "Solo pueden ser utilizados para predicciones numéricas.",
          "Requieren datos completamente estructurados en formato tabular.",
          "No pueden manejar datos categóricos en sus reglas de clasificación."
        ],
        "correcta": "Permiten dividir conjuntos de datos en grupos basados en reglas de clasificación."
      },
      {
        "pregunta": "¿Cómo se utilizan las redes neuronales artificiales en Data Mining?",
        "respuestas": [
          "Simulan el funcionamiento del cerebro humano para identificar patrones en los datos.",
          "Utilizan bases de datos relacionales para almacenar datos en tiempo real.",
          "Se basan en reglas matemáticas simples para dividir datos en categorías.",
          "No pueden ser utilizadas en la predicción de valores futuros."
        ],
        "correcta": "Simulan el funcionamiento del cerebro humano para identificar patrones en los datos."
      },
      {
        "pregunta": "¿Qué técnica de Data Mining se utiliza para predecir el precio de una vivienda basado en sus características?",
        "respuestas": [
          "Regresión.",
          "Clasificación.",
          "Agrupación.",
          "Asociación."
        ],
        "correcta": "Regresión."
      },
      {
        "pregunta": "¿Cuál es la función principal de los algoritmos genéticos en Data Mining?",
        "respuestas": [
          "Optimizar parámetros en modelos predictivos utilizando principios de evolución.",
          "Clasificar datos en categorías predefinidas usando árboles de decisión.",
          "Predecir valores futuros basados en datos históricos.",
          "Reducir el tamaño de los conjuntos de datos eliminando información redundante."
        ],
        "correcta": "Optimizar parámetros en modelos predictivos utilizando principios de evolución."
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre la detección de fraudes con Data Mining es correcta?",
        "respuestas": [
          "Se basa en la identificación de patrones inusuales en los datos.",
          "Requiere la intervención manual en cada transacción para detectar fraudes.",
          "Solo puede realizarse en bases de datos pequeñas y bien estructuradas.",
          "No puede aplicarse a transacciones en tiempo real."
        ],
        "correcta": "Se basa en la identificación de patrones inusuales en los datos."
      },
      {
        "pregunta": "¿Por qué la limpieza y transformación de datos es crucial en el proceso de Data Mining?",
        "respuestas": [
          "Porque datos erróneos pueden generar patrones incorrectos o engañosos.",
          "Porque solo se pueden analizar datos completamente estructurados.",
          "Porque los algoritmos de Data Mining no pueden manejar datos grandes.",
          "Porque se deben eliminar todos los valores atípicos antes de iniciar el análisis."
        ],
        "correcta": "Porque datos erróneos pueden generar patrones incorrectos o engañosos."
      },
      {
        "pregunta": "En el contexto de Data Mining, ¿cuál es el principal problema al aplicar árboles de decisión a datos con muchas variables?",
        "respuestas": [
          "El modelo puede sobreajustarse y perder capacidad de generalización.",
          "El algoritmo no puede manejar datos categóricos.",
          "Los árboles de decisión no permiten realizar predicciones numéricas.",
          "El proceso de entrenamiento es demasiado rápido y no produce buenos resultados."
        ],
        "correcta": "El modelo puede sobreajustarse y perder capacidad de generalización."
      },
      {
        "pregunta": "¿Cuál es una desventaja clave del uso de redes neuronales artificiales en Data Mining?",
        "respuestas": [
          "Requieren grandes volúmenes de datos y tiempo de procesamiento para entrenarse adecuadamente.",
          "Solo pueden ser utilizadas en análisis de datos financieros.",
          "No permiten manejar datos estructurados y categóricos.",
          "Siempre generan modelos con interpretaciones claras y comprensibles."
        ],
        "correcta": "Requieren grandes volúmenes de datos y tiempo de procesamiento para entrenarse adecuadamente."
      },
      {
        "pregunta": "¿Cuál es la diferencia entre regresión y clasificación en Data Mining?",
        "respuestas": [
          "La regresión predice valores continuos, mientras que la clasificación asigna categorías discretas.",
          "La clasificación solo se usa para datos numéricos, mientras que la regresión para datos categóricos.",
          "La regresión es más precisa en todos los casos que la clasificación.",
          "Ambas técnicas se usan indistintamente sin diferencias significativas."
        ],
        "correcta": "La regresión predice valores continuos, mientras que la clasificación asigna categorías discretas."
      },
      {
        "pregunta": "En Data Mining, ¿cuál es una de las principales dificultades al trabajar con grandes volúmenes de datos?",
        "respuestas": [
          "El procesamiento y almacenamiento eficiente de datos requiere técnicas avanzadas.",
          "No es posible aplicar modelos predictivos sobre grandes volúmenes de datos.",
          "Los datos estructurados no pueden ser utilizados en modelos de Data Mining.",
          "Las técnicas de Data Mining solo funcionan en conjuntos de datos pequeños."
        ],
        "correcta": "El procesamiento y almacenamiento eficiente de datos requiere técnicas avanzadas."
      },
      {
        "pregunta": "¿Cómo afectan los datos desbalanceados a los modelos de clasificación en Data Mining?",
        "respuestas": [
          "Pueden hacer que el modelo favorezca la clase mayoritaria y tenga un rendimiento deficiente en la minoritaria.",
          "No afectan significativamente el rendimiento del modelo.",
          "Hacen que el modelo sea más preciso al tener más datos de entrenamiento.",
          "Obligan a eliminar la clase minoritaria antes de entrenar el modelo."
        ],
        "correcta": "Pueden hacer que el modelo favorezca la clase mayoritaria y tenga un rendimiento deficiente en la minoritaria."
      },
      {
        "pregunta": "¿Cuál es el propósito de los algoritmos genéticos en Data Mining?",
        "respuestas": [
          "Optimizar modelos y encontrar parámetros óptimos mediante evolución y selección natural.",
          "Clasificar datos en grupos predefinidos basados en patrones observados.",
          "Eliminar datos redundantes antes de aplicar técnicas de predicción.",
          "Determinar reglas fijas para el almacenamiento de datos en un Data Warehouse."
        ],
        "correcta": "Optimizar modelos y encontrar parámetros óptimos mediante evolución y selección natural."
      },
      {
        "pregunta": "En el análisis de datos de alta dimensionalidad, ¿qué técnica se puede utilizar para reducir la complejidad sin perder información relevante?",
        "respuestas": [
          "Análisis de Componentes Principales (PCA).",
          "Conversión de todos los datos a valores categóricos.",
          "Aplicación de redes neuronales sin capas ocultas.",
          "Eliminación aleatoria del 50% de las variables."
        ],
        "correcta": "Análisis de Componentes Principales (PCA)."
      },
      {
        "pregunta": "En el contexto de Data Mining, ¿qué ventaja ofrece el uso de modelos de ensemble como Random Forest sobre un solo árbol de decisión?",
        "respuestas": [
          "Reduce la varianza del modelo y mejora la capacidad de generalización.",
          "Aumenta la velocidad de entrenamiento al utilizar múltiples árboles.",
          "Elimina completamente la necesidad de preprocesamiento de datos.",
          "Evita la necesidad de limpiar los datos antes de la modelización."
        ],
        "correcta": "Reduce la varianza del modelo y mejora la capacidad de generalización."
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