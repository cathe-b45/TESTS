import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HeadbarComponent } from '../../../../headbar/headbar.component';
import { Router } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-test-completo-ssii',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DividerModule, CardModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule, PaginatorModule],
  providers: [ConfirmationService],
  templateUrl: './test-completo-ssii.component.html',
  styleUrl: './test-completo-ssii.component.scss'
})
export class TestCompletoSsiiComponent {
  temas: { [key: string]: any[] } = {
    "Tema 0": [
        {
            pregunta: "¿Se puede obtener la solución de un PSR mediante el algoritmo AC3?",
            respuestas: [
              "Sí, pero sólo cuando todos los dominios tienen un único valor se puede extraer una solución.",
              "No, es un algoritmo para la reducción de los dominios de las variables y no para la búsqueda de soluciones.",
              "No, sólo se puede determinar si no hay solución.",
              "Todas las respuestas anteriores son erróneas."
            ],
            correcta: "Sí, pero sólo cuando todos los dominios tienen un único valor se puede extraer una solución."
          },
          {
            pregunta: "Dado un arco X → Y que refleja la relación X < Y, marque los dominios que lo hacen inconsistente.",
            respuestas: [
              "X=[0, 1, 4], Y=[8, 2, 6, 0]",
              "X=[0, 9], Y=[1, 10]",
              "X=[5, 7], Y=[8, 7]",
              "X=[3, 9, 4], Y=[8, 3, 6]"
            ],
            correcta: "X=[5, 7], Y=[8, 7]"
          },
          {
            pregunta: "En PSR con 5 variables con dominios de tres valores:",
            respuestas: [
              "La complejidad temporal es 5³ = 125.",
              "La complejidad temporal es 3⁵ = 243.",
              "La profundidad es 3 y el factor de ramificación es 5.",
              "Todas las respuestas anteriores son erróneas."
            ],
            correcta: "La complejidad temporal es 3⁵ = 243."
          },
          {
            pregunta: "Sea un mundo grid de 3x4 (filas x columnas) con un muro en la casilla (1,1), donde se recibe un refuerzo R de -0.03 en todas las casillas excepto en la casilla (0,3) que es igual a 1 y en las demás es 0. Se usa un modelo de transición con una probabilidad de 0.8 de realizar un movimiento (arriba, abajo, izquierda y derecha) y 0.1 si sus movimientos perpendiculares son posibles. Si el agente intenta cruzar el muro o sale del área se mantiene en la misma casilla. Mediante la técnica de iteración de valores calcular U₀(1,0) sabiendo que γ = 0.8.",
            respuestas: [
              "0.2619",
              "0.1619",
              "0.3619",
              "0.0619"
            ],
            correcta: "0.2619"
          },
          {
            pregunta: "Dado un arco X → Y que refleja la relación X < Y, marque los dominios que lo hacen consistente.",
            respuestas: [
              "X=[5, 11, 7], Y=[8, 9, 10]",
              "X=[3, 4, 10], Y=[9, 7]",
              "X=[8, 1, 6], Y=[10, 5]",
              "X=[6, 11, 5], Y=[9, 2, 10]"
            ],
            correcta: "X=[8, 1, 6], Y=[10, 5]"
          },
          {
            pregunta: "En enfriamiento simulado, la probabilidad de intercambiar la solución actual por una mejor...",
            respuestas: [
              "Se incrementa en proporción a como es mejor la solución.",
              "Decrece en el tiempo y de como de mala es la solución.",
              "Depende de la función de decrecimiento de T.",
              "Es siempre 1."
            ],
            correcta: "Depende de la función de decrecimiento de T."
          },
          {
            pregunta: "Dado un árbol de juego, con un nodo MAX con unos valores V=5, α = 7, β = 9. Según el algoritmo de poda α − β ¿Qué valor de sus hijos produciría una poda?",
            respuestas: [
              "4",
              "8",
              "7",
              "12"
            ],
            correcta: "7"
          },
          {
            pregunta: "Indica cuál de las siguientes frases es falsa:",
            respuestas: [
              "En los Procesos de Decisión de Markov, la probabilidad de encontrar el sistema en un estado depende de los estados previos.",
              "El algoritmo de iteración de valores se basa en la Ecuación de Bellman’s.",
              "La política óptima es la política que maximiza la utilidad esperada.",
              "Una política determina la acción apropiada dado el estado actual."
            ],
            correcta: "En los Procesos de Decisión de Markov, la probabilidad de encontrar el sistema en un estado depende de los estados previos."
          },
          {
            pregunta: "El algoritmo de ascensión de colinas:",
            respuestas: [
              "Pertenece al subgrupo de técnicas de búsqueda localizada.",
              "En cada iteración siempre escoge el vecino menor.",
              "Es un método de maximización.",
              "Es un método de maximización local o minimización local."
            ],
            correcta: "Es un método de maximización local o minimización local."
          },
          {
            pregunta: "En Minimax:",
            respuestas: [
              "La función de utilidad obtiene la valoración del estado del Max.",
              "La función de utilidad se aplica a un estado en la profundidad máxima.",
              "La función de evaluación se aplica al estado final.",
              "Ninguna respuesta es correcta."
            ],
            correcta: "Ninguna respuesta es correcta."
          },
          {
            pregunta: "En el algoritmo mini-max la complejidad temporal es equivalente al de una búsqueda...",
            respuestas: [
              "Intermedia entre la profundidad de la cota y la de anchura acotada.",
              "Anchura de profundidad acotada.",
              "Al valor de profundidad de la cota.",
              "La cota factorial."
            ],
            correcta: "Anchura de profundidad acotada."
          },
          {
            pregunta: "¿En qué partes se divide un esquema de acción en STRIPS?",
            respuestas: [
              "Precondición, efecto y parámetros.",
              "Precondición, parámetros y acción.",
              "Acción, efecto y nombre.",
              "Nombre, precondición, efecto."
            ],
            correcta: "Precondición, efecto y parámetros."
          },
          {
            pregunta: "En el algoritmo AC3 se define un arco consistente A → B como...",
            respuestas: [
              "Para todos los valores de la variable A existe algún valor compatible en B.",
              "Todos los valores de la variable B tienen valores compatibles en la variable A.",
              "Algunos valores de la variable B son compatibles con algunos de la variable A.",
              "Para todos los valores de B hay al menos un valor de la variable A que es compatible."
            ],
            correcta: "Para todos los valores de la variable A existe algún valor compatible en B."
          },
          {
            pregunta: "En un problema de satisfacción de restricciones (PSR) con 5 variables con dominios de 3 valores, señalar qué afirmación sobre la complejidad es cierta.",
            respuestas: [
              "Tiene una complejidad temporal de 5³=15.",
              "Tiene una complejidad temporal de 3⁵=243.",
              "Es de profundidad 3 y nivel de ramificación 5.",
              "La complejidad temporal de 5³=125."
            ],
            correcta: "Tiene una complejidad temporal de 3⁵=243."
          },
          {
            pregunta: "En un algoritmo de enfriamiento simulado (Annealing), si la función de energía de los máximos locales tiende a ser menor que la solución candidata, se:",
            respuestas: [
              "Actualizar la SA por una SC mejor con una probabilidad menor a e^(ΔE/KT).",
              "Actualizar la SA por una SC peor con una probabilidad menor a e^(ΔE/KT).",
              "Actualizar la SA por una SC mejor.",
              "Actualizar la solución actual (SA) por cualquier candidata (SC)."
            ],
            correcta: "Actualizar la SA por una SC peor con una probabilidad menor a e^(ΔE/KT)."
          },
          {
            pregunta: "Dado un individuo con valor 7, generado tras una selección y un cruce entre individuos con valores entre [0,15], con una representación genética binaria de 4 bits, y una tasa de probabilidad de mutación de 0.001, ¿qué generación tendrá la mutación si tiene un valor de 6?",
            respuestas: [
              "5",
              "3",
              "6",
              "1"
            ],
            correcta: "6"
          },
          {
            pregunta: "Una de las siguientes palabras claves no pertenece al lenguaje PDDL:",
            respuestas: [
              "action",
              "goal",
              "objects",
              "initial"
            ],
            correcta: "initial"
          },
          {
            pregunta: "En el algoritmo STRIP cuando se encuentra un objetivo como resultado en la pila, para resolverlo se busca una acción que...",
            respuestas: [
              "Contenga el objetivo en sus variables en su lista de efectos.",
              "Contenga en su lista de adición una unificación válida del objetivo y estado actual.",
              "Contenga una unificación válida del objetivo y estado actual en su lista de precondiciones.",
              "Contenga el objetivo en su lista de precondiciones."
            ],
            correcta: "Contenga el objetivo en sus variables en su lista de efectos."
          },
          {
            pregunta: "En un algoritmo mini-max con poda alfa-beta, si estamos en el nodo raíz (MAX):",
            respuestas: [
              "Se podará solo si su valor es menor que el de beta.",
              "Se podará solo si su valor es mayor que el de beta.",
              "Se podará solo si su valor es mayor que el de alfa.",
              "Una poda no depende de alfa o beta."
            ],
            correcta: "Se podará solo si su valor es mayor que el de beta."
          },
          {
            pregunta: "Un problema de satisfacción de restricciones viene definido por:",
            respuestas: [
              "Un conjunto de dominios de variables y restricciones entre ellas.",
              "Un conjunto de restricciones de variables y un conjunto de valores válidos para dichas variables.",
              "Un conjunto de restricciones de posibles variables para la solución del problema.",
              "Un conjunto de valores válidos y relaciones unarias y binarias."
            ],
            correcta: "Un conjunto de dominios de variables y restricciones entre ellas."
          }
          
          
    ],
    "Tema 3": [
        {
            pregunta: "En el enfriamiento simulado la selección de una peor solución que la actual depende de:",
            respuestas: [
                "Como de mala es la nueva solución con respecto a la actual, exclusivamente.",
                "Del tiempo que resta para que el algoritmo termine y de cómo de mala es la nueva solución respecto a la actual.",
                "No se realiza ningún cambio bajo esta premisa.",
                "El tiempo que resta hasta que el algoritmo termina (temperatura)"
            ],
            correcta: "Del tiempo que resta para que el algoritmo termine y de cómo de mala es la nueva solución respecto a la actual."
        },
        {
            pregunta: "Con una población de cinco individuos y una función de aptitud [10,30,20,40] y usando la técnica de selección de la ruleta, ¿Qué valor es el seleccionado con un valor aleatorio igual a 0.39?",
            respuestas: ["30", "20", "40", "10"],
            correcta: "30"
        },
        {
            pregunta: "La operación de mutación en un algoritmo genético se realiza:",
            respuestas: [
                "combinando los dos individuos generados.",
                "durante la selección.",
                "antes del cruce y después de la selección.",
                "en cada nuevo individuo generado antes de ser añadido a la población."
            ],
            correcta: "en cada nuevo individuo generado antes de ser añadido a la población."
        },
        {
            pregunta: "Los algoritmos de búsqueda local son apropiados cuando:",
            respuestas: [
                "la secuencia de acciones es relevante.",
                "el número de soluciones es mínimo.",
                "el factor de ramificación no es muy alto.",
                "no importa el camino al objetivo."
            ],
            correcta: "no importa el camino al objetivo."
        }
    ],
    "Tema 4": [
        {
            pregunta: "¿Cuál de los siguientes algoritmos no es una técnica para la resolución de PSRs?",
            respuestas: [
                "Comprobación Hacia Adelante.",
                "Búsqueda con Backtracking.",
                "Todas las demás respuestas son falsas.",
                "Arcos Consistentes."
            ],
            correcta: "Arcos Consistentes"
        },
        {
            pregunta: "Indica la respuesta verdadera relativa al algoritmo AC3:",
            respuestas: [
                "Todas las respuestas son verdaderas.",
                "Se puede considerar una técnica de preprocesamiento.",
                "A veces son capaces de encontrar también la solución del PSR.",
                "La idea es reducir el dominio de las variables al máximo antes de buscar una solución del PSR."
            ],
            correcta: "Todas las respuestas son verdaderas"
        },
        {
            pregunta: "La restricción A=B, siendo A y B variables, es una relación unaria:",
            respuestas: ["Falso.", "Verdadero."],
            correcta: "Falso."
        },
        {
            pregunta: "Una red es arco consistente si:",
            respuestas: [
                "los arcos asociados a las variables principales son consistentes y del resto parcialmente consistentes.",
                "los dominios de las variables contienen un único valor.",
                "todas las demás respuestas son falsas.",
                "todos sus arcos son consistentes."
            ],
            correcta: "todos sus arcos son consistentes."
        },
        {
            pregunta: "El alcance de una restricción es el conjunto de valores válidos del dominio de las variables afectadas por la restricción:",
            respuestas: ["Verdadero.", "Falso."],
            correcta: "Falso."
        },
        {
            pregunta: "En AC3 un arco X,r(X,Y) necesita ser revisitado si el dominio de Y ha sido reducido:",
            respuestas: ["Falso.", "Verdadero."],
            correcta: "Verdadero."
        },
        {
            pregunta: "Una solución de un PSR es una asignación de un valor a cada variable que satisfaga las restricciones:",
            respuestas: ["Verdadero.", "Falso."],
            correcta: "Verdadero."
        },
        {
            pregunta: "En un PSR modelado como un problema de búsqueda, un estado es una abstracción del mundo real:",
            respuestas: ["Verdadero.", "Falso."],
            correcta: "Falso."
        },
        {
            pregunta: "La comprobación hacia adelante proporciona una detección temprana de todos los fallos:",
            respuestas: ["Falso.", "Verdadero."],
            correcta: "Falso."
        },
        {
            pregunta: "Indica cuál no es una heurística en un PSR.",
            respuestas: [
                "Arcos Consistentes.",
                "Valor Menos Restrictivo.",
                "Mínimos Valores Restantes.",
                "Grado."
            ],
            correcta: "Arcos Consistentes."
        }
    ],
    "Tema 5": [
        {
            pregunta: "La exploración en un árbol de juegos se corresponde con la estrategia de búsqueda:",
            respuestas: ["Primero en Anchura.", "Primero en Profundidad."],
            correcta: "Primero en Profundidad."
        },
        {
            pregunta: "En un árbol de juegos el nodo raíz no tiene porque ser siempre un nodo Max:",
            respuestas: ["Verdadero.", "Falso."],
            correcta: "Verdadero."
        },
        {
            pregunta: "La complejidad temporal aproximada asociada a un árbol de juegos para el ajedrez sería:",
            respuestas: ["2*120.", "35*100.", "35^100.", "2^120."],
            correcta: "35^100."
        },
        {
            pregunta: "Indica qué respuesta es falsa relativa a la limitación de recursos (tiempo y memoria) en la construcción de árboles de juegos:",
            respuestas: [
                "No se puede limitar la profundidad del árbol de juegos porque el rendimiento disminuye de manera crítica.",
                "Se utiliza una función de evaluación que estima la deseabilidad de una jugada en vez de una función de utilidad.",
                "Sabiendo el tiempo máximo de respuesta por jugada o turno se puede determinar la profundidad del árbol a construir.",
                "La calidad del comportamiento esperado se mantiene bajo cualquier transformación monótona de la función de evaluación."
            ],
            correcta: "No se puede limitar la profundidad del árbol de juegos porque el rendimiento disminuye de manera crítica."
        },
        {
            pregunta: "En un árbol minimax para múltiples jugadores (más de 2):",
            respuestas: [
                "Todas las respuestas son verdaderas.",
                "Todos los jugadores son Max.",
                "Cada nivel está asignado a un jugador.",
                "La función de evaluación viene dada por un vector."
            ],
            correcta: "Todas las respuestas son verdaderas."
        },
        {
            pregunta: "Indica qué respuesta es falsa relativa a la poda alfa-beta:",
            respuestas: [
                "Alfa es el mejor valor (para max) encontrado en el camino actual.",
                "La poda afecta el resultado final.",
                "Una ordenación concreta de los posibles movimientos mejora la efectividad de la poda.",
                "Beta es el mejor valor (para min) encontrado en el camino actual."
            ],
            correcta: "La poda afecta el resultado final."
        },
        {
            pregunta: "¿Cuál de las siguientes definiciones se corresponde con la de Valor Minimax?:",
            respuestas: [
                "Todas las demás respuestas son falsas.",
                "Minimización de la profundidad Máxima del árbol para acotar el tiempo de respuesta.",
                "Movimiento para cada posible respuesta del oponente.",
                "Mayor recompensa alcanzable contra la mejor jugada."
            ],
            correcta: "Mayor recompensa alcanzable contra la mejor jugada."
        },
        {
            pregunta: "En este tema se estudian las técnicas concretas asociadas a juegos no determinísticos con información perfecta:",
            respuestas: ["Falso.", "Verdadero."],
            correcta: "Falso."
        },
        {
            pregunta: "Cada nueva jugada del computador se debe construir el árbol de juegos completo:",
            respuestas: ["Falso.", "Verdadero."],
            correcta: "Verdadero."
        },
        {
            pregunta: "Con una ordenación perfecta la poda alfa-beta puede triplicar la profundidad solucionable:",
            respuestas: ["Falso.", "Verdadero."],
            correcta: "Falso."
        }
    ],
    "Tema 6": [
        {
            pregunta: "Indique cuál de las siguientes afirmaciones es verdadera:",
            respuestas: [
                "En los Procesos de Decisión de Markov, la probabilidad de encontrar al sistema en un estado dado depende sólo del estado anterior.",
                "La función de política óptima es la política que maximiza la utilidad esperada.",
                "Todas las respuestas son verdaderas.",
                "La función asociada a la política selecciona la acción apropiada dado el estado actual."
            ],
            correcta: "Todas las respuestas son verdaderas."
        },
        {
            pregunta: "Indica qué respuesta es falsa relativa al algoritmo de iteración de valores:",
            respuestas: [
                "Su objetivo es determinar la política óptima para cada estado.",
                "Termina cuando se alcanza un nivel de convergencia aceptable.",
                "La recompensa de un estado viene determinada por la elección de una política.",
                "Se basa en la ecuación de Bellman."
            ],
            correcta: "La recompensa de un estado viene determinada por la elección de una política."
        },
        {
            pregunta: "Cuál de las siguientes frases se puede considerar como un posible resultado del aprendizaje:",
            respuestas: [
                "El rango de comportamientos puede ser expandido: el agente puede hacer más.",
                "La precisión en tareas es mejorada: el agente puede hacer las cosas mejor.",
                "Todas las otras respuestas son verdaderas.",
                "La velocidad se mejora: el agente puede hacer cosas más rápido."
            ],
            correcta: "Todas las otras respuestas son verdaderas."
        },
        {
            pregunta: "El factor de descuento determina hasta qué punto la nueva información adquirida sobrescribe o sustituye a la información anterior:",
            respuestas: ["Falso.", "Verdadero."],
            correcta: "Falso."
        },
        {
            pregunta: "En el algoritmo de Q-learning si la tasa de aprendizaje es 1, esto hará que el agente sólo considere la información más reciente:",
            respuestas: ["Falso.", "Verdadero."],
            correcta: "Verdadero."
        },
        {
            pregunta: "La explotación en aprendizaje por refuerzo utiliza el conocimiento ya aprendido para decidir cuál es la mejor acción:",
            respuestas: ["Falso.", "Verdadero."],
            correcta: "Verdadero."
        },
        {
            pregunta: "La función de valor representa cómo de bueno es un estado para que un agente esté en él:",
            respuestas: ["Verdadero.", "Falso."],
            correcta: "Verdadero."
        },
        {
            pregunta: "La Q-tabla tiene una entrada por cada par (estado,recompensa) válido:",
            respuestas: ["Verdadero.", "Falso."],
            correcta: "Falso."
        },
        {
            pregunta: "En los problemas de aprendizaje por refuerzo, la retroalimentación es:",
            respuestas: [
                "obtenida mediante el algoritmo de iteración de valores.",
                "la secuencia de acciones que lleva a una mayor recompensa.",
                "un valor escalar que puede retrasarse en el tiempo.",
                "Todas las demás respuestas son falsas."
            ],
            correcta: "un valor escalar que puede retrasarse en el tiempo."
        },
        {
            pregunta: "En aprendizaje por refuerzo, el problema de atribución de la culpa plantea la dificultad de determinar qué acción era responsable de una recompensa o castigo:",
            respuestas: ["Verdadero.", "Falso."],
            correcta: "Verdadero."
        }
    ]
};

preguntasActuales: any[] = [];
testFinalizado: boolean = false;
respuestasUsuario: string[] = []; // Respuestas seleccionadas por el usuario.
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
    ...this.temas["Tema 0"],
    ...this.temas["Tema 3"],
    ...this.temas["Tema 4"],
    ...this.temas["Tema 5"],
    ...this.temas["Tema 6"]
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
  
/**
 * Volver a la página anterior.
 */
goBack() {
  this.router.navigate(['/ssii']);
}
}

