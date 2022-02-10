const modalOverlay = document.querySelector('.modal-overlay')/*document.querySelector vai selecionar o a tag .modal-overlay */
const cards = document.querySelectorAll('.card')  /* aqui ele seleciona um grupo no caso sera o a Tag card */
const modal = document.querySelector('.modal')
const $iframe = document.getElementsByTagName('iframe') [0]
const fullscreen = modalOverlay.querySelector('.fullscreen-modal')

fullscreen.addEventListener('click', function (){
    modal.style.width = '100%';
    modal.style.height = '100vh';
    modal.style.marginTop = '0px';
    $iframe.style.height = 'calc(100vh - 40px)';
  })

for (let card of cards){
    card.addEventListener("click", function(){
        const modalId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `/modal/${modalId}.html`
        //        modalOverlay.querySelector("iframe").src = `/${modalId}.html`

    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modal.style.width = '90%';
    modal.style.height = '90vh';
    modal.style.marginTop = '5vh';
    modal.style.marginBottom = '5vh';
    $iframe.style.height = 'calc(90vh - 40px)';
    modalOverlay.querySelector("iframe").src = ""
})