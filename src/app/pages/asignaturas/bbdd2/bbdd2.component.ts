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
  selector: 'app-bbdd2',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DividerModule, CardModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule, PaginatorModule],
  providers: [ConfirmationService],
  templateUrl: './bbdd2.component.html',
  styleUrl: './bbdd2.component.scss'
})
export class Bbdd2Component {
 temas: { [key: string]: any[] } = {
    "Preguntas": [
        {
          "pregunta": "Generally, which type of data warehouse has the smallest size?",
          "respuestas": [
            "Data Mart",
            "Data Warehouse"
          ],
          "correcta": "Data Mart"
        },
        {
          "pregunta": "¿En qué consiste la transformación en el proceso de ETL?",
          "respuestas": [
            "Lectura de datos de las diferentes fuentes",
            "Limpieza de datos dándole contexto y significado",
            "Actualización de las tablas de dimensiones y hechos"
          ],
          "correcta": "Limpieza de datos dándole contexto y significado"
        },
        {
          "pregunta": "What do the measures represent?",
          "respuestas": [
            "What to analyze",
            "How to analyze"
          ],
          "correcta": "What to analyze"
        },
        {
          "pregunta": "Respecto a la carga en el proceso de ETL, ¿qué tipo de carga es más compleja de diseñar y de hacerla de manera eficiente?",
          "respuestas": [
            "Carga periódica o incremental",
            "Carga inicial"
          ],
          "correcta": "Carga inicial"
        },
        {
          "pregunta": "¿Qué caracteriza a la arquitectura MOLAP?",
          "respuestas": [
            "Datos detallados",
            "Mayor rendimiento en el procesado de consultas con cálculos más complejos",
            "Análisis de una cantidad enorme de datos"
          ],
          "correcta": "Mayor rendimiento en el procesado de consultas con cálculos más complejos"
        },
        {
          "pregunta": "¿Un diseño en estrella está formado por?",
          "respuestas": [
            "Únicamente una tabla de hechos",
            "Una o más tablas de hechos"
          ],
          "correcta": "Una o más tablas de hechos"
        },
        {
          "pregunta": "¿Cuál es la funcionalidad del Data Mining?",
          "respuestas": [
            "Descubrir relaciones, reglas o patrones",
            "Manejar y transformar los datos",
            "Almacenamiento y visualización más eficiente"
          ],
          "correcta": "Descubrir relaciones, reglas o patrones"
        },
        {
          "pregunta": "¿Cuál es la parte más compleja en la construcción de un almacén de datos?",
          "respuestas": [
            "Extracción de datos.",
            "Carga de datos.",
            "Transformación de datos.",
            "Fuentes de datos."
          ],
          "correcta": "Carga de datos."
        },
        {
          "pregunta": "¿Cuál es la clave primaria de una tabla de hechos en un almacén de datos?",
          "respuestas": [
            "El identificador de la misma.",
            "Las claves ajenas de las tablas de hechos del diseño.",
            "Las claves ajenas de las tablas de dimensiones que relaciona.",
            "El identificador de la misma y las claves ajenas de las tablas de dimensiones que relaciona."
          ],
          "correcta": "Las claves ajenas de las tablas de dimensiones que relaciona."
        },
        {
          "pregunta": "¿Cuál es el principal problema en los almacenes de datos?",
          "respuestas": [
            "Costes",
            "Limpieza de datos",
            "Análisis de datos",
            "Carga de datos"
          ],
          "correcta": "Limpieza de datos"
        },
        {
          "pregunta": "¿Por qué se asocia generalmente el concepto de OLAP a un almacén de datos?",
          "respuestas": [
            "Porque permite realizar transacciones rápidas en bases de datos operacionales.",
            "Porque optimiza el almacenamiento de datos en formato relacional normalizado.",
            "Porque facilita el análisis multidimensional de grandes volúmenes de datos de manera eficiente.",
            "Porque produce reglas o patrones para extraer conocimiento del almacén de datos."
          ],
          "correcta": "Porque facilita el análisis multidimensional de grandes volúmenes de datos de manera eficiente."
        },
        {
          "pregunta": "En un diseño en estrella, ¿qué relación representan las tablas de hechos con otras tablas de hechos y con las tablas de dimensiones?",
          "respuestas": [
            "Con otras tablas de hechos: N:M. Con las tablas de dimensiones: N:1.",
            "Con otras tablas de hechos: N:1. Con las tablas de dimensiones: N:1.",
            "Con otras tablas de hechos: N:1. Con las tablas de dimensiones: N:M.",
            "Con otras tablas de hechos: N:M. Con las tablas de dimensiones: N:M."
          ],
          "correcta": "Con otras tablas de hechos: N:M. Con las tablas de dimensiones: N:1."
        },
        {
          "pregunta": "¿Cuál de los siguientes NO es un objetivo principal de las áreas intermedias o 'staging areas'?",
          "respuestas": [
            "Aumentar la eficiencia de los procesos ETL.",
            "Garantizar la integridad y la calidad de los datos del DW.",
            "Realizar operaciones con los datos fuera del sistema operacional.",
            "Producir reglas y patrones de conocimiento sobre los datos antes de cargarlos en el DW."
          ],
          "correcta": "Producir reglas y patrones de conocimiento sobre los datos antes de cargarlos en el DW."
        },
        {
          "pregunta": "En un diseño en estrella, ¿qué ocurre cuando una tabla de hechos contiene claves foráneas que están normalizadas en lugar de desnormalizadas?",
          "respuestas": [
            "Se pierde eficiencia en la consulta ya que las tablas de dimensiones se vuelven más complejas.",
            "Se mejora el rendimiento de las consultas OLAP debido a la mayor integridad referencial.",
            "Las consultas pueden volverse más lentas debido a la necesidad de un mayor número de uniones entre tablas.",
            "La duplicación de datos en las tablas de hechos se reduce, mejorando la eficiencia de almacenamiento."
          ],
          "correcta": "Las consultas pueden volverse más lentas debido a la necesidad de un mayor número de uniones entre tablas."
        },
        {
          "pregunta": "What is the main difference between the Star schema and the Snowflake schema in a Data Warehouse?",
          "respuestas": [
            "The Star schema normalizes dimension tables, while the Snowflake schema denormalizes them.",
            "The Snowflake schema uses more joins due to normalization, whereas the Star schema has fewer joins.",
            "The Star schema is more complex and requires more storage than the Snowflake schema.",
            "The Star schema is used only for operational analysis, while the Snowflake schema is used for historical analysis."
          ],
          "correcta": "The Snowflake schema uses more joins due to normalization, whereas the Star schema has fewer joins."
        },
        {
          "pregunta": "Which of the following statements best describes the role of Clustering in Data Mining?",
          "respuestas": [
            "It groups similar data points together without predefined labels.",
            "It divides data into disjoint sets based on predefined rules.",
            "It predicts future values based on historical data trends.",
            "It transforms raw data into a structured format for storage."
          ],
          "correcta": "It groups similar data points together without predefined labels."
        },
        {
          "pregunta": "¿Cuál es la principal diferencia entre un Data Warehouse y una base de datos operacional (OLTP)?",
          "respuestas": [
            "El Data Warehouse se actualiza constantemente y es crítico para las transacciones diarias.",
            "El Data Warehouse almacena datos históricos y está orientado a la toma de decisiones.",
            "La base de datos operacional utiliza esquemas en estrella para análisis.",
            "La base de datos operacional no almacena datos transaccionales."
          ],
          "correcta": "El Data Warehouse almacena datos históricos y está orientado a la toma de decisiones."
        },
        {
          "pregunta": "¿Qué significa el término 'ETL'?",
          "respuestas": [
            "Extract, Transform, Load",
            "Evaluate, Translate, Link",
            "Example, Tabulate, Launch",
            "Enforce, Transfer, Log"
          ],
          "correcta": "Extract, Transform, Load"
        },
        {
          "pregunta": "¿Cuál de los siguientes enunciados describe mejor el proceso de Data Mining en el contexto de un Data Warehouse?",
          "respuestas": [
            "Se limita a generar informes predefinidos y ejecutar SQL para agrupar datos por categorías.",
            "Son técnicas automatizadas que identifican patrones y relaciones complejas en grandes volúmenes de datos, para apoyar la toma de decisiones.",
            "Es un sistema de actualizaciones transaccionales que asegura la integridad referencial de las tablas de dimensiones.",
            "Equivale únicamente a la etapa de limpieza de datos antes de cargar los registros en el Data Warehouse."
          ],
          "correcta": "Son técnicas automatizadas que identifican patrones y relaciones complejas en grandes volúmenes de datos, para apoyar la toma de decisiones."
        },
        {
          "pregunta": "Which of the following best describes a slowly changing dimension (SCD) in a Data Warehouse?",
          "respuestas": [
            "A dimension that needs updates every minute to capture real-time changes",
            "A dimension whose attribute values may change infrequently, requiring special handling to preserve history",
            "A type of fact table designed for performing predictive analytics",
            "A dimension that is replaced entirely with each load to avoid duplicates"
          ],
          "correcta": "A dimension whose attribute values may change infrequently, requiring special handling to preserve history"
        },
        {
          "pregunta": "¿Cuál es el principal objetivo de la fase de limpieza de datos (data cleaning) dentro del proceso ETL?",
          "respuestas": [
            "Aumentar la complejidad de las dimensiones",
            "Reducir el tamaño de la base de datos eliminando cualquier registro antiguo",
            "Detectar y corregir valores incorrectos, inconsistentes o incompletos antes de cargar al DW",
            "Añadir datos sin revisar directamente a la tabla de hechos"
          ],
          "correcta": "Detectar y corregir valores incorrectos, inconsistentes o incompletos antes de cargar al DW"
        },
        {
          "pregunta": "¿Para qué se utilizan principalmente las áreas intermedias o 'staging areas' en el proceso de carga de datos?",
          "respuestas": [
            "Para almacenar los metadatos críticos del Data Warehouse",
            "Para montar cubos multidimensionales en memoria sin necesidad de OLAP",
            "Para realizar transformaciones y validaciones fuera del entorno operacional, evitando interferir en el OLTP",
            "Para permitir consultas simultáneas de grandes volúmenes de datos en la misma base de producción"
          ],
          "correcta": "Para realizar transformaciones y validaciones fuera del entorno operacional, evitando interferir en el OLTP"
        },
        {
          "pregunta": "In a star schema design, what is the typical purpose of a dimension table?",
          "respuestas": [
            "To store transactional data and periodic updates from the operational system",
            "To provide descriptive attributes for filtering, grouping, and labeling measures in the fact table",
            "To store advanced analytical functions for real-time calculations",
            "To replace the staging area and metadata repository in an ETL process"
          ],
          "correcta": "To provide descriptive attributes for filtering, grouping, and labeling measures in the fact table"
        },
        {
          "pregunta": "¿En qué etapa del proceso ETL corresponde la tarea o fase de 'Sincronización Periódica o Actualización incremental'?",
          "respuestas": [
            "Extracción.",
            "Carga.",
            "Transformación.",
            "Todas son falsas."
          ],
          "correcta": "Carga."
        },
        {
          "pregunta": "¿Cuál de las siguientes características describe mejor un Data Warehouse?",
          "respuestas": [
            "Es un sistema orientado a operaciones diarias, con actualizaciones constantes.",
            "Almacena datos históricos y no volátiles para análisis y toma de decisiones.",
            "Es exclusivamente un sistema para transacciones bancarias.",
            "Está optimizado para procesos de inserción y borrado masivo sin agregaciones."
          ],
          "correcta": "Almacena datos históricos y no volátiles para análisis y toma de decisiones."
        },
        {
          "pregunta": "¿Cuál de estas opciones corresponde a una dimensión típica en un diseño de Data Warehouse?",
          "respuestas": [
            "Dimensión Producto",
            "Dimensión Actualizaciones Incrementales",
            "Dimensión Ganancia Derivada",
            "Dimensión ETL"
          ],
          "correcta": "Dimensión Producto"
        },
        {
          "pregunta": "¿Qué componente de un sistema de Data Warehouse se encarga principalmente de extraer datos de distintas fuentes, transformarlos y cargarlos en el DW?",
          "respuestas": [
            "OLAP (On-Line Analytical Processing)",
            "ETL (Extract, Transform, Load)",
            "DBA (Database Administrator)",
            "Data Mart"
          ],
          "correcta": "ETL (Extract, Transform, Load)"
        },
        {
          "pregunta": "In a star schema, which table typically contains numeric and aggregable data, such as measures or indicators?",
          "respuestas": [
            "Dimension table",
            "Fact table",
            "Metadata repository",
            "Operational database"
          ],
          "correcta": "Fact table"
        },
        {
          "pregunta": "¿Cuál es la razón principal para mantener un modelo de datos desnormalizado en un Data Warehouse, en lugar de uno altamente normalizado?",
          "respuestas": [
            "Reducir espacio de almacenamiento y minimizar redundancia",
            "Aumentar la complejidad de las consultas",
            "Mejorar el rendimiento en las consultas analíticas y simplificar la navegación",
            "Exigir un mantenimiento más riguroso de la integridad referencial"
          ],
          "correcta": "Mejorar el rendimiento en las consultas analíticas y simplificar la navegación"
        },
        {
          "pregunta": "¿Cuál de los siguientes procesos corresponde a una de las tareas principales en una fase de transformación de datos durante el ETL?",
          "respuestas": [
            "Agregar índices de partición en la base transaccional",
            "Utilizar triggers de base de datos para realizar copias de seguridad",
            "Corregir valores incompletos, homogeneizar formatos y unificar codificaciones",
            "Crear instancias de Data Mart independientes del Data Warehouse"
          ],
          "correcta": "Corregir valores incompletos, homogeneizar formatos y unificar codificaciones"
        },
        {
          "pregunta": "What is one main difference between MOLAP and ROLAP architectures regarding data storage and query performance?",
          "respuestas": [
            "MOLAP stores data in relational tables and usually requires complex SQL queries, leading to slower performance.",
            "MOLAP stores data in a multidimensional structure with precalculated aggregates, providing faster query performance for typical OLAP operations.",
            "ROLAP stores data in special text files without any indexing or aggregation.",
            "ROLAP requires converting all data to unstructured format to enable advanced cube operations."
          ],
          "correcta": "MOLAP stores data in a multidimensional structure with precalculated aggregates, providing faster query performance for typical OLAP operations."
        },
        {
          "pregunta": "Un … se usa específicamente en una unidad de negocio a nivel departamental y consiste en un almacén de datos de tamaño reducido.",
          "respuestas": [
            "Data Mart",
            "Data Warehouse",
            "Data Mining",
            "Big Data"
          ],
          "correcta": "Data Mart"
        },
        {
          "pregunta": "¿Qué función deben cumplir las herramientas de extracción?",
          "respuestas": [
            "Obtener información de fuentes externas para actualizar el DW.",
            "Depurar y completar los datos obtenidos, reestructurar los campos, eliminar información irrelevante, añadir y traducir campos, entre otras correcciones de errores.",
            "Transferir y cargar los datos desde los sistemas de origen",
            "Todas son correctas"
          ],
          "correcta": "Todas son correctas"
        },
        {
          "pregunta": "¿Cuál es una característica del Análisis OLAP?",
          "respuestas": [
            "Vista Unidimensional de los datos",
            "Tratamiento de datos normalizados",
            "Generación flexible de informes",
            "Todas son correctas"
          ],
          "correcta": "Generación flexible de informes"
        },
        {
          "pregunta": "En los sistemas relacionales:",
          "respuestas": [
            "La toma de decisiones no tiene soporte directo",
            "El resultado se presenta de manera matricial",
            "Se pueden usar operadores como drill, roll y pivot",
            "Se pueden descubrir relaciones y patrones"
          ],
          "correcta": "La toma de decisiones no tiene soporte directo"
        },
        {
          "pregunta": "¿Cuál de las siguientes arquitecturas OLAP se caracteriza por almacenar los datos en cubos multidimensionales precalculados para mejorar el rendimiento de las consultas?",
          "respuestas": [
            "MOLAP",
            "ROLAP",
            "HOLAP",
            "DOLAP"
          ],
          "correcta": "MOLAP"
        },
        {
          "pregunta": "¿Cómo afecta la inclusión de dimensiones degeneradas en un diseño en estrella a la normalización y la optimización de consultas en un Data Warehouse?",
          "respuestas": [
            "Mejora la normalización al reducir la redundancia de datos",
            "Aumenta la complejidad de las consultas al crear dependencias entre hechos y dimensiones",
            "No afecta ni a la normalización ni a la optimización de consultas",
            "No tiene impacto en la normalización, pero simplifica las consultas al reducir la cantidad de tablas de dimensiones"
          ],
          "correcta": "No tiene impacto en la normalización, pero simplifica las consultas al reducir la cantidad de tablas de dimensiones"
        },
        {
          "pregunta": "En el proceso de carga inicial de datos en un Data Warehouse, en lo que respecta a la carga de las tablas de dimensiones:",
          "respuestas": [
            "Se puede realizar durante todo el día sin afectar el rendimiento del sistema",
            "Las tablas de dimensiones no requieren transformaciones previas y pueden ser cargadas en cualquier momento",
            "Debe hacerse antes que la carga de las tablas de hechos para evitar posibles inconsistencias en los datos",
            "Es un proceso simple y se suele hacer cuando el sistema no está siendo muy demandado"
          ],
          "correcta": "Es un proceso simple y se suele hacer cuando el sistema no está siendo muy demandado"
        },
        {
          "pregunta": "What is a characteristic of OLAP Analysis?",
          "respuestas": [
            "Unidimensional view of the data",
            "Handling of normalized data",
            "Flexible report generation",
            "All answers are correct"
          ],
          "correcta": "Flexible report generation"
        },
        {
          "pregunta": "How does the inclusion of degenerate dimensions in a star schema design affect normalization and query optimization in a Data Warehouse?",
          "respuestas": [
            "It improves normalization by reducing data redundancy",
            "It increases query complexity by creating dependencies between facts and dimensions",
            "It has no impact on normalization or query optimization",
            "It has no impact on normalization but simplifies queries by reducing the number of dimension tables"
          ],
          "correcta": "It has no impact on normalization but simplifies queries by reducing the number of dimension tables"
        },
        {
          "pregunta": "¿Qué significa ETL en el contexto de Data Warehousing?",
          "respuestas": [
            "Extraer, Transformar y Cargar",
            "Eliminar, Transferir y Localizar",
            "Evaluar, Traducir y Limpiar",
            "Editar, Truncar y Lograr"
          ],
          "correcta": "Extraer, Transformar y Cargar"
        },
        {
          "pregunta": "¿Cuál de las siguientes estrategias se puede usar para la detección de cambios en un Data Warehouse?",
          "respuestas": [
            "Data mirroring",
            "Clustering index",
            "Timestamp columns",
            "Round-robin scheduling"
          ],
          "correcta": "Timestamp columns"
        },
        {
          "pregunta": "¿Cuál de las siguientes afirmaciones sobre el diseño en estrella es correcta?",
          "respuestas": [
            "Cada tabla de hechos representa una relación 'uno a uno' con las tablas de dimensiones.",
            "La clave primaria de la tabla de hechos está compuesta por claves ajenas de las tablas de dimensiones.",
            "En un esquema en estrella, todas las tablas están normalizadas.",
            "Las tablas de dimensiones en un diseño en estrella deben contener solo claves primarias."
          ],
          "correcta": "La clave primaria de la tabla de hechos está compuesta por claves ajenas de las tablas de dimensiones."
        },
        {
          "pregunta": "¿Cuál de las siguientes opciones NO es una ventaja del diseño en estrella?",
          "respuestas": [
            "Crea una base de datos con tiempos de respuesta rápidos.",
            "Proporciona un diseño fácil de modificar.",
            "Mantiene la integridad referencial mediante reglas de normalización estrictas.",
            "Facilita la interacción con herramientas de acceso a datos."
          ],
          "correcta": "Mantiene la integridad referencial mediante reglas de normalización estrictas."
        },
        {
          "pregunta": "¿Cuál es el propósito principal del Data Mining?",
          "respuestas": [
            "Recolectar datos sin procesarlos.",
            "Buscar relaciones y patrones en grandes bases de datos.",
            "Crear bases de datos transaccionales.",
            "Organizar archivos en sistemas operativos."
          ],
          "correcta": "Buscar relaciones y patrones en grandes bases de datos."
        },
        {
          "pregunta": "¿Cuál de las siguientes NO es una tarea típica del Data Mining?",
          "respuestas": [
            "Clasificación",
            "Asociación",
            "Compilación de código",
            "Regresión"
          ],
          "correcta": "Compilación de código"
        },
        {
          "pregunta": "¿Cuál de las siguientes técnicas de Data Mining se basa en simular el funcionamiento del cerebro humano para aprender patrones y hacer predicciones?",
          "respuestas": [
            "Algoritmos genéticos",
            "Árboles de decisión",
            "Redes neuronales artificiales",
            "Lógica borrosa"
          ],
          "correcta": "Redes neuronales artificiales"
        },
        {
          "pregunta": "Which of the following statements about the star design is correct?",
          "respuestas": [
            "Each fact table represents a 'one-to-one' relationship with the dimension tables.",
            "The primary key of the fact table is composed of foreign keys from the dimension tables.",
            "In a star schema, all tables are normalized.",
            "Dimension tables in a star layout should contain only primary keys."
          ],
          "correcta": "The primary key of the fact table is composed of foreign keys from the dimension tables."
        },
        {
          "pregunta": "Which of the following is NOT a typical Data Mining task?",
          "respuestas": [
            "Classification",
            "Association",
            "Code compilation",
            "Regression"
          ],
          "correcta": "Code compilation"
        },
        {
          "pregunta": "What is one of the main applications of Data Mining?",
          "respuestas": [
            "Detecting fraud in credit card usage",
            "Formatting text in a document",
            "Sending emails automatically",
            "Installing software updates"
          ],
          "correcta": "Detecting fraud in credit card usage"
        },
        {
          "pregunta": "¿Cuál es el principal objetivo de un Data Warehouse?",
          "respuestas": [
            "Almacenar datos de forma operativa en tiempo real.",
            "Facilitar el análisis de grandes volúmenes de datos históricos.",
            "Servir como un sistema transaccional para consultas rápidas.",
            "Reemplazar todas las bases de datos de una empresa."
          ],
          "correcta": "Facilitar el análisis de grandes volúmenes de datos históricos."
        },
        {
          "pregunta": "What is the main objective of a Data Warehouse?",
          "respuestas": [
            "To store data operationally in real-time.",
            "To facilitate the analysis of large volumes of historical data.",
            "To serve as a transactional system for fast queries.",
            "To replace all company databases."
          ],
          "correcta": "To facilitate the analysis of large volumes of historical data."
        },
        {
          "pregunta": "¿Qué significa ETL en el contexto de un Data Warehouse?",
          "respuestas": [
            "Evaluación, Transformación y Listado.",
            "Extracción, Transformación y Carga.",
            "Exportación, Transferencia y Localización.",
            "Estimación, Tratamiento y Logística."
          ],
          "correcta": "Extracción, Transformación y Carga."
        },
        {
          "pregunta": "¿Cuál es una diferencia clave entre un Data Warehouse y una base de datos operacional?",
          "respuestas": [
            "Un Data Warehouse está diseñado para el procesamiento transaccional en línea (OLTP).",
            "Una base de datos operacional almacena datos históricos y facilita el análisis de tendencias.",
            "Un Data Warehouse está optimizado para consultas analíticas y toma de decisiones.",
            "Un Data Warehouse solo almacena datos en tiempo real."
          ],
          "correcta": "Un Data Warehouse está optimizado para consultas analíticas y toma de decisiones."
        },
        {
          "pregunta": "¿Cuál es una de las principales ventajas del diseño en estrella en un Data Warehouse?",
          "respuestas": [
            "Maximiza la normalización de los datos.",
            "Facilita consultas rápidas y eficientes.",
            "Evita completamente la redundancia de datos.",
            "Solo se utiliza en bases de datos OLTP."
          ],
          "correcta": "Facilita consultas rápidas y eficientes."
        },
        {
          "pregunta": "What is one of the main advantages of the star schema design in a Data Warehouse?",
          "respuestas": [
            "It maximizes data normalization.",
            "It facilitates fast and efficient queries.",
            "It completely avoids data redundancy.",
            "It is only used in OLTP databases."
          ],
          "correcta": "It facilitates fast and efficient queries."
        },
        {
          "pregunta": "En minería de datos, ¿qué técnica se utiliza para predecir valores futuros basados en datos históricos?",
          "respuestas": [
            "Clasificación.",
            "Agrupamiento.",
            "Pronóstico.",
            "Asociación."
          ],
          "correcta": "Pronóstico."
        },
        {
          "pregunta": "En el contexto de Data Warehousing, ¿cuál es la diferencia clave entre MOLAP y ROLAP?",
          "respuestas": [
            "MOLAP almacena datos en un modelo relacional, mientras que ROLAP los almacena en estructuras multidimensionales.",
            "ROLAP permite análisis más rápidos que MOLAP en todos los casos.",
            "MOLAP utiliza cubos de datos preprocesados para optimizar consultas, mientras que ROLAP accede directamente a bases de datos relacionales.",
            "MOLAP y ROLAP son exactamente lo mismo."
          ],
          "correcta": "MOLAP utiliza cubos de datos preprocesados para optimizar consultas, mientras que ROLAP accede directamente a bases de datos relacionales."
        },
        {
          "pregunta": "¿Cuál de los siguientes es un ejemplo de una dimensión de cambio lento (Slowly Changing Dimension - SCD) Tipo 2 en Data Warehousing?",
          "respuestas": [
            "Sobrescribir las antiguas direcciones de los clientes con la nueva.",
            "Mantener registros históricos de las direcciones de los clientes con fechas de inicio y fin efectivas.",
            "Ignorar los cambios en las direcciones de los clientes por completo.",
            "Almacenar solo las cinco versiones más recientes de la dirección de un cliente."
          ],
          "correcta": "Mantener registros históricos de las direcciones de los clientes con fechas de inicio y fin efectivas."
        },
        {
          "pregunta": "¿Cuál no es una característica de las bases de datos operacionales?",
          "respuestas": [
            "Su actualización es continua.",
            "Se utiliza un SGBDR que implementa un modelo normalizado manejado mediante SQL.",
            "Se utilizan para el Análisis y la Recuperación de Información.",
            "Suelen ser utilizadas para las operaciones diarias de la organización."
          ],
          "correcta": "Se utilizan para el Análisis y la Recuperación de Información."
        },
        {
          "pregunta": "¿En qué consiste el proceso ETL?",
          "respuestas": [
            "En Elegir, Transformar y Cargar",
            "En Elegir, Transformar y Lanzar",
            "En Extraer, Transformar y Cargar",
            "En Extraer, Transformar y Lanzar"
          ],
          "correcta": "En Extraer, Transformar y Cargar"
        },
        {
          "pregunta": "¿Cuál no es una técnica de Data Mining?",
          "respuestas": [
            "Árboles de expansión",
            "Redes Neuronales",
            "Algoritmos genéticos",
            "Teoría del caos"
          ],
          "correcta": "Árboles de expansión"
        },
        {
          "pregunta": "¿Qué impulsa el cambio en las organizaciones de tener islas de información a tener un almacén que contenga toda la información disponible para ser analizada?",
          "respuestas": [
            "Data warehouse",
            "Big data",
            "Data Mart",
            "Ninguna es correcta ya que el concepto isla de información no existe."
          ],
          "correcta": "Data warehouse"
        },
        {
          "pregunta": "¿Cuál es la idea básica de un diseño en estrella?",
          "respuestas": [
            "Tener una tabla de dimensiones que aglutine las tablas de hechos.",
            "Tener una tabla de hechos que aglutine las tablas de dimensiones.",
            "Estructurar las tablas dibujando una estrella es meramente estético.",
            "Tener una tabla de centro que aglutine todas las tablas de extremos."
          ],
          "correcta": "Tener una tabla de hechos que aglutine las tablas de dimensiones."
        },
        {
          "pregunta": "¿Qué regla no pertenece a las reglas básicas de un sistema OLAP?",
          "respuestas": [
            "Transparencia de la implementación física",
            "Visión Conceptual Unidimensional",
            "Soporte Multiusuario",
            "Número ilimitado de dimensiones y niveles de agregación"
          ],
          "correcta": "Visión Conceptual Unidimensional"
        },
        {
          "pregunta": "Si queremos ver un nivel de detalle mayor en un conjunto de datos agregados, ¿qué operación OLAP deberíamos realizar?",
          "respuestas": [
            "Drill-Down.",
            "Roll-Up.",
            "SLICE.",
            "PIVOT."
          ],
          "correcta": "Drill-Down."
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