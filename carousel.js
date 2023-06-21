//pegando os elemenos do DOM

const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');

//Dados para o slider

const images = [
"img1.jpg",
"img2.jpg",
"img3.jpg"
];

const headings = [
"New York, USA",
"Tokyo, Japan",
"Dubai, UAE"
];

const descriptions = [
    "The city that never sleeps",
    "The city of lights",
    "Home to the tallest skyscraper"
];

// ID do slider

let id = 0;

//função do slider

function slide(id) {
    slider.style.backgroundImage = `url(img/${images[id]})`;

    //animação fade

    slider.classList.add('image-fade');

    //remove a animação depois que terminar para ser reutilizada
    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);

    //mudar cabeçalho
    heading.innerText = headings[id];
    //mudar a descrição
    description.innerText = descriptions[id];
}
console.log(id);

//adiciona evento de clique esquerdo

arrLeft.addEventListener('click', () => {
    id--;

//checando se id é menor que os numeros disponiveis
if (id < 0) {
    //muda a ultima imagem
    id = images.length -1;
}
slide(id);

});

//adiciona evento de clique direito

arrRight.addEventListener('click', () => {
    id++;
    if (id > images.length -1) {
        id = 0;
    }
    slide(id);

});
