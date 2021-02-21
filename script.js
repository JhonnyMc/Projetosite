
// Selecinando Elemento HTML
const sessaoCards = document.getElementById('sectionCards');

/*Criando ELementos */
const image = document.createElement('img');
const titulo = document.createElement('h2');
const paragrafo = document.createElement('p');
const div = document.createElement('div');



// adicionando Classes
div.className = 'cardDescribe';
image.className = 'Imagecontainer';

// Adicionando texto ao paragrafo
titulo.innerText = 'Titulo'
paragrafo.innerText = 'Olá mundo';




// Caminho para foto;
image.setAttribute("src", "https://source.unsplash.com/random");



// Adicionando paragrafo ao elemento ancora
div.appendChild(titulo)
div.appendChild(paragrafo);
sessaoCards.appendChild(div);
sessaoCards.appendChild(image);




