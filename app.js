// Pika-pika suerte!

const colorsNode = document.querySelector('#colors');
const pikachuNode = document.querySelector('#pikachu');

colorsNode.addEventListener('click', (e) => {
    // option 1
    // pikachuNode.style.background = e.target.id;
    
    // option 2
    pikachuNode.style.background = window.getComputedStyle(e.target).backgroundColor;
})