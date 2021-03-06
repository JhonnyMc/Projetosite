// Função que cria card
function createCard(imagPath, describe, title) {

    // Selecinando Elemento HTML
    const sessaoCards = document.getElementById('sectionCards');
    
    /*Criando ELementos */
    const image = document.createElement('img');
    const titulo = document.createElement('h2');
    const paragrafo = document.createElement('p');
    const div = document.createElement('div');
    const card = document.createElement('section');
    
    // adicionando Classes
    div.className = 'CardDescribe';
    image.className = 'Imagecontainer';
    
    // Adicionando texto
    titulo.innerText = title;
    
    // Caminho para foto;
    image.setAttribute("src", imagPath);

    // Adicionando paragrafo ao elemento ancora
    div.appendChild(titulo)
    div.appendChild(paragrafo);
    card.appendChild(div);
    card.appendChild(image);
    sessaoCards.appendChild(card);

}

// Loop que esta renderizando cards com dados do Data,js
for (index in data) {
    createCard( data[index].imagePath, data[index].describe, data[index].titulo )
}
