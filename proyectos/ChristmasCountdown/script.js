document.addEventListener('DOMContentLoaded', function () {
    // Define la fecha objetivo (en este caso, la fecha de Navidad)
    const christmasDate = new Date('Dec 25, 2023 00:00:00').getTime();

    // Actualiza la cuenta regresiva cada segundo
    setInterval(function () {
        // Obtiene la fecha y hora actuales
        const now = new Date().getTime();

        // Calcula la diferencia de tiempo entre ahora y Navidad
        const timeDifference = christmasDate - now;

        // Calcula días, horas, minutos y segundos
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Actualiza los elementos HTML con los nuevos valores
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }, 1000); // La función se ejecutará cada 1000 milisegundos (1 segundo)

    function updateTimer() {
        const now = new Date().getTime();
        const timeDifference = christmasDate - now;
    
        // ...
    
        updateTextVisibility(timeDifference);
    }
    
    function updateTextVisibility(timeDifference) {
        const textContainer = document.getElementById('text-container');
        const christmasText = document.getElementById('christmas');
        const dateText = document.getElementById('date');
    
        // Mostrar las palabras solo si la fecha actual es antes de Navidad
        if (timeDifference > 0) {
            textContainer.style.display = 'block';
            christmasText.style.opacity = 1;
            dateText.style.opacity = 1;
        } else {
            textContainer.style.display = 'none';
        }
    }
    function updateTextVisibility(timeDifference) {
        const textContainer = document.getElementById('text-container');
        const christmasText = document.getElementById('christmas');
        const dateText = document.getElementById('date');
        const merryChristmasText = document.getElementById('merry-christmas');
    
        // Mostrar las palabras solo si la fecha actual es antes de Navidad
        if (timeDifference > 0) {
            textContainer.style.display = 'block';
            christmasText.style.opacity = 1;
            dateText.style.opacity = 1;
    
            // Mostrar el mensaje "Merry Christmas" el día de Navidad
            if (timeDifference < 86400000) { // Menos de 24 horas (86400000 milisegundos)
                merryChristmasText.style.opacity = 1;
            } else {
                merryChristmasText.style.opacity = 0;
            }
        } else {
            textContainer.style.display = 'none';
        }
    }
    
});

