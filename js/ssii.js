// Preguntas organizadas por temas
const temas = {
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

// Variables de control
let modoSeleccionado = "";
let temaActual = 0;
let temasKeys = Object.keys(temas);
// Mostrar el botón de volver al iniciar el test
function iniciarTest(modo) {
    modoSeleccionado = modo;
    document.getElementById('modoTest').classList.add('d-none');
    document.getElementById('seccionTest').classList.remove('d-none');
    document.getElementById('btnVolver').classList.remove('d-none'); // Mostrar el botón de volver

    if (modo === 'TODO') {
        document.getElementById('tituloTest').innerText = "Test Completo";
        cargarPreguntas(Object.values(temas).flat());
        document.getElementById('btnAnteriorTema').classList.add('d-none');
        document.getElementById('btnSiguienteTema').classList.add('d-none');
    } else {
        document.getElementById('tituloTest').innerText = `${temasKeys[temaActual]}`;
        cargarPreguntas(temas[temasKeys[temaActual]]);
        actualizarBotonesNavegacion();
    }
}
// Cargar preguntas
function cargarPreguntas(preguntas) {
    const contenedor = document.getElementById('preguntas');
    contenedor.innerHTML = "";

    // Mezclar las preguntas aleatoriamente
    preguntas = preguntas.sort(() => Math.random() - 0.5);

    preguntas.forEach((p, index) => {
        // Mezclar las respuestas aleatoriamente
        p.respuestas.sort(() => Math.random() - 0.5);

        contenedor.innerHTML += `
            <div class="card mt-3" id="pregunta${index}">
                <div class="card-body">
                    <h5 class="card-title">${index + 1}. ${p.pregunta}</h5>
                    ${p.respuestas.map(r => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta${index}" value="${r}">
                            <label class="form-check-label">${r} <span class="icono-respuesta"></span></label>
                        </div>
                    `).join('')}
                    <div id="respuesta${index}" class="mt-2"></div>
                </div>
            </div>
        `;
    });
}


// Finalizar Test
function finalizarTest() {
    let respuestasCorrectas = 0;
    const preguntas = document.querySelectorAll('.form-check-input');

    preguntas.forEach((input) => {
        if (input.checked) {
            const label = input.nextElementSibling.querySelector('.icono-respuesta');
            const pregunta = Object.values(temas).flat().find(p => p.respuestas.includes(input.value));
            const respuestaDiv = input.closest('.card-body').querySelector('.mt-2');

            if (pregunta && input.value === pregunta.correcta) {
                respuestasCorrectas++;
                label.innerHTML = `<i class="fa-solid fa-check-circle text-success ms-2"></i>`;
                respuestaDiv.innerHTML = `
                    <div class="alert alert-warning mt-2" role="alert">
                        <strong>Respuesta correcta:</strong> ${pregunta.correcta}
                    </div>
                `;
            } else {
                label.innerHTML = `<i class="fa-solid fa-times-circle text-danger ms-2"></i>`;
                respuestaDiv.innerHTML = `
                    <div class="alert alert-warning mt-2" role="alert">
                        <strong>Respuesta correcta:</strong> ${pregunta.correcta}
                    </div>
                `;
            }
        } else {
            const label = input.nextElementSibling.querySelector('.icono-respuesta');
            const pregunta = Object.values(temas).flat().find(p => p.respuestas.includes(input.value));
            const respuestaDiv = input.closest('.card-body').querySelector('.mt-2');

            if (pregunta) {
                respuestaDiv.innerHTML = `
                    <div class="alert alert-warning mt-2" role="alert">
                        <strong>Respuesta correcta:</strong> ${pregunta.correcta}
                    </div>
                `;
            }
        }
    });

    alert(`¡Test finalizado! Has acertado ${respuestasCorrectas} preguntas.`);
}


// Siguiente Tema
function siguienteTema() {
    if (temaActual < temasKeys.length - 1) {
        temaActual++;
        document.getElementById('tituloTest').innerText = `${temasKeys[temaActual]}`;
        cargarPreguntas(temas[temasKeys[temaActual]]);
        actualizarBotonesNavegacion();
    } else {
        alert("¡Has completado todos los temas!");
    }
}

// Tema Anterior
function temaAnterior() {
    if (temaActual > 0) {
        temaActual--;
        document.getElementById('tituloTest').innerText = `${temasKeys[temaActual]}`;
        cargarPreguntas(temas[temasKeys[temaActual]]);
        actualizarBotonesNavegacion();
    } else {
        alert("Estás en el primer tema.");
    }
}

// Actualizar botones de navegación
function actualizarBotonesNavegacion() {
    const btnAnterior = document.getElementById('btnAnteriorTema');
    const btnSiguiente = document.getElementById('btnSiguienteTema');

    if (temaActual === 0) {
        btnAnterior.classList.add('d-none');
    } else {
        btnAnterior.classList.remove('d-none');
    }

    if (temaActual === temasKeys.length - 1) {
        btnSiguiente.classList.add('d-none');
    } else {
        btnSiguiente.classList.remove('d-none');
    }
}

// Función para regresar al menú inicial
function volverAlInicio() {
    // Oculta la sección del test
    document.getElementById('seccionTest').classList.add('d-none');
    // Muestra la sección de selección de test
    document.getElementById('modoTest').classList.remove('d-none');
    // Oculta el botón de volver
    document.getElementById('btnVolver').classList.add('d-none');
    // Reinicia variables de control
    temaActual = 0;
    modoSeleccionado = "";
}