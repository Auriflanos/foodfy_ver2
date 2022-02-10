const modalOverlay = document.querySelector('.modal-overlay')/*document.querySelector vai selecionar o a tag .modal-overlay */
const cards = document.querySelectorAll('.card')  /* aqui ele seleciona um grupo no caso sera o a Tag card */

for (let card of cards) {
    card.addEventListener("click", function () {
        console.log('card clicked', card);
        const foodId = card.getAttribute("id")
        window.location.href = `/food/${foodId}`
    })
}


