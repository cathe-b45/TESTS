import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HeadbarComponent } from '../../../headbar/headbar.component';

@Component({
  selector: 'app-ssdd-ejercicios',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, DividerModule, CardModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './ssdd-ejercicios.component.html',
  styleUrl: './ssdd-ejercicios.component.scss'
})
export class SsddEjerciciosComponent {
  ejerciciosKeys = ['Ejercicio 1', 'Ejercicio 2', 'Ejercicio 3', 'Ejercicio 4', 'Ejercicio 5'];
  ejercicioActual = 0;
  mostrarDialogo = false; // Controla la visibilidad del diálogo
  mostrarImagenDialogo = false;

  preguntaPrincipal = '';
  imagenActual = '';
  preguntasActuales: any[] = [];
  testFinalizado = false;
  explicacionActual = '';

  ejercicios: Record<
    string,
    {
        preguntaPrincipal: string;
        imagen: string;
        preguntas: {
            pregunta: string;
            respuestas: string[];
            correcta: string;
            explicacion: string;
        }[];
    }
> = {
    'Ejercicio 1': {
        preguntaPrincipal: 'Considere el siguiente conjunto de eventos que tienen lugar en los procesos p1, p2 y p3 de un sistema distribuido:',
        imagen: 'assets/ejercicios/2020_21_Ejercicio1.png', // Ruta donde guardarás la imagen
        preguntas: [
            {
                pregunta: '¿Cuál es el valor del reloj lógico (RL) de los eventos e, j y n?',
                respuestas: [
                    'RL(e)=5; RL(j)=6; RL(n)=7',
                    'RL(e)=7; RL(j)=7; RL(n)=8',
                    'RL(e)=6; RL(j)=6; RL(n)=6',
                    'RL(e)=6; RL(j)=7; RL(n)=6'
                ],
                correcta: 'RL(e)=6; RL(j)=7; RL(n)=6',
                explicacion: 'El cálculo del reloj lógico se realiza de acuerdo con las reglas de sincronización en sistemas distribuidos, teniendo en cuenta los eventos locales e intercambios de mensajes.'
            },
            {
                pregunta: '¿Cuál es el valor del reloj vectorial de los eventos e, j y n?',
                respuestas: [
                    'RV(e)=[6,6,4]; RV(j)=[6,4,3]; RV(n)=[5,4,5]',
                    'RV(e)=[5,3,2]; RV(j)=[5,5,2]; RV(n)=[1,4,4]',
                    'RV(e)=[5,4,3]; RV(j)=[6,5,3]; RV(n)=[5,4,3]',
                    'RV(e)=[6,3,4]; RV(j)=[6,5,4]; RV(n)=[3,5,5]'
                ],
                correcta: 'RV(e)=[6,6,4]; RV(j)=[6,4,3]; RV(n)=[5,4,5]',
                explicacion: 'El reloj vectorial de cada evento se calcula propagando los valores vectoriales entre procesos según los eventos locales y mensajes recibidos.'
            },
            {
                pregunta: 'Si el valor del reloj vectorial de dos eventos a y b son RV(a)=[1,2,3] y RV(b)=[3,2,1], entonces:',
                respuestas: [
                    'a -> b',
                    'b -> a',
                    'a y b son concurrentes',
                    'RV(a) = RV(b)'
                ],
                correcta: 'a y b son concurrentes',
                explicacion: 'Dos eventos son concurrentes si no existe una relación de causalidad directa o indirecta entre ellos.'
            },
            {
                pregunta: 'Sea un corte C={h1,h2,h3} donde h1, h2 y h3 son los prefijos de historia de p1, p2 y p3, respectivamente, definidos como h1=[a,b,c] y h3=[k,l,m,n]. ¿Cuál sería un prefijo de historia h2 válido para que C sea consistente?',
                respuestas: [
                    'h2 = [f,g]',
                    'h2 = [f,g,h]',
                    'h2 = [f,g,h,i]',
                    'No es posible definir un prefijo de historia h2 tal que C sea consistente'
                ],
                correcta: 'h2 = [f,g,h]',
                explicacion: 'Un corte consistente requiere que todos los eventos que causan eventos en el corte también estén incluidos en el corte.'
            }
        ]
    },
    'Ejercicio 2': {
      preguntaPrincipal: 'Considere el siguiente diagrama de estados globales:',
      imagen: 'assets/ejercicios/2020_21_Ejercicio2.png', // Ruta donde guardarás la imagen
      preguntas: [
          {
              pregunta: 'El estado S21 es un estado global:',
              respuestas: [
                  'a) inconsistente.',
                  'b) consistente e inalcanzable.',
                  'c) consistente y alcanzable.',
                  'd) inconsistente e inalcanzable.'
              ],
              correcta: 'c) consistente y alcanzable.',
              explicacion: 'El estado S21 es consistente porque no viola ninguna regla de consistencia global, y es alcanzable porque existe un camino válido en el grafo de estados.'
          },
          {
              pregunta: 'Suponga que se evalúa un cierto predicado global P sobre este diagrama con el siguiente resultado: P(S00)=F, P(S01)=F, P(S10)=T, P(S11)=F, P(S21)=F, P(S22)=F, P(S32)=T, con F=False y T=True ¿cuál sería el resultado de evaluar definitivamente P?',
              respuestas: [
                  'a) True',
                  'b) False',
                  'c) Indefinido',
                  'd) No se puede saber con la información proporcionada en el enunciado.'
              ],
              correcta: 'b) False',
              explicacion: 'La evaluación del predicado global P para los estados del diagrama resulta ser Falso (False) porque no hay un camino donde todos los estados satisfagan el predicado.'
          }
      ]
  },
  'Ejercicio 3': {
        preguntaPrincipal: 'El siguiente diagrama representa la ejecución de un sistema distribuido, donde S000 es el estado global inicial:',
        imagen: 'assets/ejercicios/2020_21_EjercicioEx.png', // Ruta donde guardarás la imagen
        preguntas: [
            {
                pregunta: '¿Cuántos procesos están implicados en la ejecución del sistema distribuido representado en el diagrama?',
                respuestas: [
                    'a) 5',
                    'b) 10',
                    'c) 2',
                    'd) 3'
                ],
                correcta: 'd) 3',
                explicacion: 'El diagrama muestra tres procesos diferentes implicados en la ejecución del sistema distribuido.'
            },
            {
                pregunta: 'En el estado global S311, ¿cuántos eventos han ocurrido?',
                respuestas: [
                    'a) 5',
                    'b) 8',
                    'c) 2',
                    'd) No se puede saber'
                ],
                correcta: 'b) 8',
                explicacion: 'El estado S311 incluye la ocurrencia de 8 eventos en los diferentes procesos según el diagrama.'
            },
            {
                pregunta: '¿Cuál sería el resultado de evaluar el predicado «definitivamente X» si el estado global S111 se evalúa como True y el resto de estados se evalúan como False?',
                respuestas: [
                    'a) True',
                    'b) False',
                    'c) No se puede saber',
                    'd) Depende del estado inicial'
                ],
                correcta: 'b) False',
                explicacion: 'Para que un predicado se evalúe como «definitivamente X», debe ser True en todos los caminos posibles después de S111, lo cual no ocurre aquí.'
            },
            {
                pregunta: 'Indique cuál sería una posible ejecución de este sistema distribuido:',
                respuestas: [
                    'a) S000 ->S001 ->S011 ->S111 ->S211 ->S311',
                    'b) S000 ->S010 ->S011 ->S112',
                    'c) S000 ->S001 ->S011 ->S111 ->S121',
                    'd) a) y b) son ciertas'
                ],
                correcta: 'a) S000 ->S001 ->S011 ->S111 ->S211 ->S311',
                explicacion: 'La ejecución mencionada en la opción A sigue el flujo correcto de estados según el diagrama proporcionado.'
            },
            {
                pregunta: 'El estado global S221 es:',
                respuestas: [
                    'a) Inconsistente.',
                    'b) Consistente.',
                    'c) Consistente pero inalcanzable.',
                    'd) No refleja la ejecución del Sistema Distribuido.'
                ],
                correcta: 'c) Consistente pero inalcanzable.',
                explicacion: 'El estado S221 es consistente, pero no es alcanzable desde el estado inicial según el diagrama proporcionado.'
            }
        ]
    }, 
    'Ejercicio 4': {
        preguntaPrincipal: 'La figura de la izquierda representa el diagrama de eventos de un SD formado por tres procesos. Para cada evento se muestra su estado local, asumiendo que el valor inicial es 0 para todos los procesos. El diagrama de la derecha (que contiene un error) es el diagrama de transición de estados globales correspondiente:',
        imagen: 'assets/ejercicios/2022_23_Ejercicio.png', // Ruta donde guardarás la imagen
        preguntas: [
            {
                pregunta: '¿Cuál sería el valor del reloj lógico vectorial del segundo evento de P3?',
                respuestas: [
                    'a) (3,2,2)',
                    'b) (3,1,2)',
                    'c) (0,3,1)',
                    'd) (0,1,2)'
                ],
                correcta: 'd) (0,1,2)',
                explicacion: 'El reloj lógico vectorial del segundo evento de P3 se calcula considerando las dependencias de los eventos previos y el diagrama dado.'
            },
            {
                pregunta: '¿Cuántos eventos han ocurrido en el estado global S221?',
                respuestas: [
                    'a) 2',
                    'b) 4',
                    'c) 5',
                    'd) No es determinista'
                ],
                correcta: 'b) 4',
                explicacion: 'El estado global S221 incluye cuatro eventos considerando el progreso en cada proceso individual hasta ese estado.'
            },
            {
                pregunta: '¿Cuáles son los valores de a, b y c después de ocurrir el segundo evento de P1?',
                respuestas: [
                    'a) a=2, b=2, c=1',
                    'b) a=2, b=3, c=1',
                    'c) a=2, b=2, c=indeterminado',
                    'd) No es determinista'
                ],
                correcta: 'a) a=2, b=2, c=1',
                explicacion: 'Los valores de los eventos reflejan las actualizaciones locales después de que ocurre el segundo evento en P1, como se describe en el diagrama.'
            },
            {
                pregunta: 'Dada la función g = a + c > b, ¿cuáles serían los resultados de evaluar los predicados «posiblemente(g)» y «definitivamente(g)»?',
                respuestas: [
                    'a) false, false',
                    'b) false, true',
                    'c) true, false',
                    'd) true, true'
                ],
                correcta: 'c) true, false',
                explicacion: 'El predicado «posiblemente(g)» evalúa si hay al menos un estado donde g es verdadero, mientras que «definitivamente(g)» requiere que g sea verdadero en todos los caminos posibles desde un estado determinado.'
            },
            {
                pregunta: '¿Qué transición se ha omitido en el diagrama de transición de estados globales?',
                respuestas: [
                    'a) S030 - S130',
                    'b) S011 - S111',
                    'c) S321 - S332',
                    'd) S130 - S221'
                ],
                correcta: 'b) S011 - S111',
                explicacion: 'La transición S011 - S111 está omitida en el diagrama, lo que representa un error en el diseño de los estados globales.'
            }
        ]
    },
    'Ejercicio 5': {
        preguntaPrincipal: 'La figura de la izquierda representa el diagrama de eventos de un SD formado por tres procesos. Para cada evento se muestra su estado local, asumiendo que el valor inicial es 0 para todos los procesos. El diagrama de la derecha es el diagrama de transición de estados globales correspondiente:',
        imagen: 'assets/ejercicios/2023_24_EjercicioEx.png', // Ruta donde guardarás la imagen
        preguntas: [
            {
                pregunta: '¿Cuál es el valor del reloj lógico vectorial del segundo evento de P2?',
                respuestas: [
                    'a) (0,1,0)',
                    'b) (0,2,0)',
                    'c) (0,3,0)',
                    'd) (1,2,0)'
                ],
                correcta: 'b) (0,2,0)',
                explicacion: 'El reloj lógico vectorial del segundo evento de P2 refleja las actualizaciones locales en P2 y las dependencias en otros procesos hasta ese punto.'
            },
            {
                pregunta: '¿Cómo cambiaría el recuento de estados globales si se hubiera enviado un mensaje en el evento c=2 que llega a P2 en el evento b=3?',
                respuestas: [
                    'a) No habría cambios',
                    'b) 4 estados más',
                    'c) 3 estados menos',
                    'd) 6 estados menos'
                ],
                correcta: 'b) 4 estados más',
                explicacion: 'El envío del mensaje crea nuevas dependencias entre procesos, aumentando el número de estados globales posibles en el diagrama.'
            },
            {
                pregunta: '¿Qué habría que añadir o eliminar en el diagrama de eventos de la izquierda para que hubiera una transición entre los estados S030 y S131 en el diagrama de la derecha?',
                respuestas: [
                    'a) Un evento nuevo en P2 entre b=2 y b=3.',
                    'b) Eliminar el evento c=2.',
                    'c) Un mensaje entre a=2 y b=2.',
                    'd) No es posible.'
                ],
                correcta: 'c) Un mensaje entre a=2 y b=2.',
                explicacion: 'Añadiendo un mensaje entre a=2 y b=2 se crea la dependencia necesaria para la transición entre los estados S030 y S131.'
            },
            {
                pregunta: '¿Cuáles son los valores de a, b y c después del segundo evento de P2?',
                respuestas: [
                    'a) (a=1, b=2, c=0)',
                    'b) (a=1, b=2, c=1)',
                    'c) (a=indeterminado, b=2, c=1)',
                    'd) (a=indeterminado, b=2, c=indeterminado)'
                ],
                correcta: 'a) (a=1, b=2, c=0)',
                explicacion: 'Los valores de a, b y c después del segundo evento de P2 reflejan las actualizaciones en P2 y la propagación de valores entre procesos.'
            },
            {
                pregunta: 'Dada la función f = (2a > b + c), ¿cuáles serían los resultados de evaluar los predicados «posiblemente(f)» y «definitivamente(f)»?',
                respuestas: [
                    'a) (false, false)',
                    'b) (false, true)',
                    'c) (true, false)',
                    'd) (true, true)'
                ],
                correcta: 'c) (true, false)',
                explicacion: '«Posiblemente(f)» evalúa si hay al menos un estado donde f es verdadero, mientras que «definitivamente(f)» requiere que f sea verdadero en todos los caminos posibles desde un estado determinado.'
            }
        ]
    }
};

  constructor(private router: Router, private confirmationService: ConfirmationService) {
      this.cargarEjercicioActual();
  }

  cargarEjercicioActual() {
      const ejercicio = this.ejercicios[this.ejerciciosKeys[this.ejercicioActual]];
      this.preguntaPrincipal = ejercicio.preguntaPrincipal;
      this.imagenActual = ejercicio.imagen;
      this.preguntasActuales = ejercicio.preguntas;
      this.testFinalizado = false;
  }

  ejercicioAnterior() {
      if (this.ejercicioActual > 0) {
          this.ejercicioActual--;
          this.cargarEjercicioActual();
          window.scrollTo({ top: 0, behavior: 'smooth' }); // Vuelve al inicio de la página
      }
  }

  siguienteEjercicio() {
      if (this.ejercicioActual < this.ejerciciosKeys.length - 1) {
          this.ejercicioActual++;
          this.cargarEjercicioActual();
          window.scrollTo({ top: 0, behavior: 'smooth' }); // Vuelve al inicio de la página
      }
  }

  finalizarTest() {
      this.testFinalizado = true;
  }

  mostrarExplicacion(explicacion: string) {
    console.log('Explicación recibida:', explicacion);
    this.explicacionActual = explicacion;
    this.mostrarDialogo = true;
}

  
  abrirDialogoImagen() {
      this.mostrarImagenDialogo = true;
  }

  goBack() {
      this.router.navigate(['/ssdd']);
  }
}
