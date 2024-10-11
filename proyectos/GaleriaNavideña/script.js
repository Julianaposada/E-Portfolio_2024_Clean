document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalMessage = document.getElementById("modal-message");
    const closeBtn = document.getElementById("close");

    // Array con las frases y rutas de las imágenes
    const cardsData = [

        { id: 1, message: '¡Feliz Navidad!', image: 'images/pexels-adriaan-greyling-760110.jpg' },
        { id: 2, message: 'Que la paz y la alegría te acompañen', image: 'images/pexels-ekaterina-bolovtsova-5702980.jpg' },
        { id: 3, message: 'Que tus sueños se hagan realidad en esta Navidad', image: 'images/pexels-amy-t-1661905.jpg' },
        { id: 4, message: 'Felices fiestas y próspero Año Nuevo', image: 'images/pexels-anthony-📷📹🙂-133640.jpg' },
        { id: 5, message: 'Deseándote amor, alegría y magia en esta Navidad', image: 'images/pexels-barry-plott-753501.jpg' },
        { id: 6, message: 'Que la estrella de Belén ilumine tu camino', image: 'images/pexels-cottonbro-studio-3153502.jpg' },
        { id: 7, message: 'Paz en la Tierra, buenos deseos para todos', image: 'images/pexels-dominika-roseclay-755380.jpg' },
        { id: 8, message: 'Espero que tu hogar se llene de amor y felicidad', image: 'images/pexels-engin-akyurt-13088177.jpg' },
        { id: 9, message: 'Feliz Navidad y próspero Año Nuevo', image: 'images/pexels-goochie-poochie-grooming-3361714.jpg' },
        { id: 10, message: 'Que la magia de la Navidad te envuelva', image: 'images/pexels-jill-wellington-259583.jpg' },
        { id: 11, message: 'Te deseo una Navidad llena de momentos especiales', image: 'images/pexels-jill-wellington-3309878.jpg' },
        { id: 12, message: 'Que encuentres alegría en cada rincón de tu vida', image: 'images/pexels-karolina-grabowska-4397839.jpg' },
        { id: 13, message: 'Que la felicidad de la Navidad permanezca contigo siempre', image: 'images/pexels-leeloo-thefirst-5723953.jpg' },
        { id: 14, message: 'Tiempo de amor, tiempo de compartir', image: 'images/pexels-leeloo-thefirst-5802137.jpg' },
        { id: 15, message: 'Deseo que tu hogar se llene de risas y alegría', image: 'images/pexels-luis-angel-alejos-espinoza-19054427.jpg' },
        { id: 16, message: '¡Felices fiestas para ti y tus seres queridos!', image: 'images/pexels-luke-seago-14836670.jpg' },
        { id: 17, message: 'Que esta Navidad traiga consigo amor y prosperidad', image: 'images/pexels-monstera-production-5708999.jpg' },
        { id: 18, message: 'Espero que tengas una Navidad llena de momentos inolvidables', image: 'images/pexels-monstera-production-5709053.jpg' },
        { id: 19, message: '¡Feliz Navidad! Que todos tus deseos se hagan realidad', image: 'images/pexels-nguyen-huy-14695163.jpg' },
        { id: 20, message: 'Te deseo una Navidad mágica y llena de sorpresas', image: 'images/pexels-oleksandr-p-3036525.jpg' }

    ];

    cardsData.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.style.backgroundImage = `url(${card.image})`;

        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message-container");
        messageContainer.innerHTML = `<p>${card.message}</p>`;
        cardElement.appendChild(messageContainer);

        cardElement.addEventListener("click", () => showModal(index));
        gallery.appendChild(cardElement);
    });

    function showModal(index) {
        const selectedCard = cardsData[index];
        modalImage.src = selectedCard.image;
        modal.style.display = "flex";
    }

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
