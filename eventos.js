document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('button-container');
    const boton = document.getElementById('button-greet');

    div.addEventListener('click' , () => {
        alert('Hola! Soy el div');
    });

    boton.addEventListener('click', (event) => {
        event.stopPropagation();
    })

});