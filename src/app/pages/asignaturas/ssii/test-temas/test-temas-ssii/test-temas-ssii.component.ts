import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeadbarComponent } from '../../../../headbar/headbar.component';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-test-temas-ssii',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule,DividerModule, CardModule, RadioButtonModule, HeadbarComponent,MessagesModule, ConfirmDialogModule],
  providers: [ConfirmationService],

  templateUrl: './test-temas-ssii.component.html',
  styleUrl: './test-temas-ssii.component.scss'
})
export class TestTemasSsiiComponent {
  temas: { [key: string]: any[] } = {
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
temaActual: number = 0;
  temasKeys: string[] = [];
  preguntasActuales: any[] = [];
  tituloTema: string = '';
  testFinalizado: boolean = false;
  respuestasUsuario: string[] = []; // Array para almacenar respuestas seleccionadas por el usuario.

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
  /**
   * Volver a la página anterior.
   */
  goBack() {
    this.router.navigate(['/ssii']);
  }
}
