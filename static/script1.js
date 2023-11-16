// script.js

function guardarHabit() {
    // Obtener los valores del formulario
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var habito = document.getElementById("habito").value;

    // Crear un objeto para representar la información del hábito
    var habitInfo = {
        fecha: fecha,
        hora: hora,
        habito: habito
    };

    // Obtener los hábitos almacenados en el servidor o inicializar un arreglo vacío
    var habits = JSON.parse(localStorage.getItem('habits')) || [];

    // Agregar el nuevo hábito al arreglo
    habits.push(habitInfo);

    // Almacenar el arreglo actualizado en localStorage
    localStorage.setItem('habits', JSON.stringify(habits));

    // Enviar los hábitos al servidor utilizando AJAX
    fetch('/guardar_habitos/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),  // Asegúrate de enviar el token CSRF
        },
        body: JSON.stringify({ habits: habits }),
    })
    .then(response => response.json())
    .then(data => {
        // Redirigir a la nueva vista después de guardar el hábito
        window.location.href = "/mis_habits.html";
    })
    .catch(error => console.error('Error al enviar hábitos al servidor:', error));
}
