document.addEventListener('DOMContentLoaded', function() {
    const fecha = new Date();
    const mesAnio = document.getElementById('mes-anio');
    const dias = document.getElementById('dias');
    const botonAnterior = document.getElementById('anterior');
    const botonSiguiente = document.getElementById('siguiente');

    function mostrarCalendario() {
        const primerDia = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
        const ultimoDia = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
        const primerDiaSemana = primerDia.getDay();
        const ultimoDiaMes = ultimoDia.getDate();

        mesAnio.textContent = `${meses[fecha.getMonth()]} ${fecha.getFullYear()}`;
        dias.innerHTML = '';

        let dia = 1;
        for (let i = 0; i < 6; i++) {
            const fila = document.createElement('tr');
            for (let j = 0; j < 7; j++) {
                const celda = document.createElement('td');
                if (i === 0 && j < primerDiaSemana) {
                    celda.className = 'otro-mes';
                } else if (dia > ultimoDiaMes) {
                    celda.className = 'otro-mes';
                } else {
                    celda.textContent = dia;
                    if (fecha.getFullYear() === hoy.getFullYear() && fecha.getMonth() === hoy.getMonth() && dia === hoy.getDate()) {
                        celda.classList.add('hoy');
                    }
                    dia++;
                }
                fila.appendChild(celda);
            }
            dias.appendChild(fila);
        }
    }

    botonAnterior.addEventListener('click', function() {
        fecha.setMonth(fecha.getMonth() - 1);
        mostrarCalendario();
    });

    botonSiguiente.addEventListener('click', function() {
        fecha.setMonth(fecha.getMonth() + 1);
        mostrarCalendario();
    });

    const hoy = new Date();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    mostrarCalendario();
});

document.addEventListener('DOMContentLoaded', function() {
    // Estructura de datos para almacenar eventos
    const eventos = {};

    // Función para mostrar eventos en el calendario
    function mostrarEventos() {
        const celdas = document.querySelectorAll('td');
        celdas.forEach(celda => {
            const dia = parseInt(celda.textContent);
            if (eventos[dia]) {
                celda.innerHTML += '<ul>';
                eventos[dia].forEach(evento => {
                    celda.innerHTML += `<li>${evento}</li>`;
                });
                celda.innerHTML += '</ul>';
            }
        });
    }

    // Agregar un evento
    function agregarEvento(dia, evento) {
        if (!eventos[dia]) {
            eventos[dia] = [];
        }
        eventos[dia].push(evento);
    }

    // Escuchar clics en las celdas del calendario
    document.querySelector('.calendario').addEventListener('click', function(event) {
        if (event.target.tagName === 'TD') {
            const dia = parseInt(event.target.textContent);
            const evento = prompt('Ingrese un evento para el día ' + dia);
            if (evento) {
                agregarEvento(dia, evento);
                mostrarEventos();
            }
        }
    });

    // Inicializar el calendario
    // ... Código para mostrar el calendario y resaltar el día actual ...

    // Mostrar eventos al cargar la página
    mostrarEventos();


    document.addEventListener('DOMContentLoaded', function() {
        const lista = document.getElementById('miLista');
        const botonRealizarTareas = document.getElementById('realizarTareas');
    
        botonRealizarTareas.addEventListener('click', function() {
            const tareasRealizadas = [];
            const checkboxes = lista.querySelectorAll('input[type="checkbox"]:checked');
            
            checkboxes.forEach(checkbox => {
                tareasRealizadas.push(checkbox.value);
            });
    
            if (tareasRealizadas.length === 0) {
                alert("No se han seleccionado tareas.");
            } else {
                alert("Tareas realizadas: " + tareasRealizadas.join(", "));
            }
        });
    });
    
});
