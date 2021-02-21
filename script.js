// Syntax 

// FUNCOES
/*
    function nomeDaFuncao (pametros){
        bloco de codigo
    }
*/

// LOOPS
/* for (index= 0; index < 10; index++) {}
    for (index in array);
*/

// Função que cria card
function createCard(imagPath, describe, title) {

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
    
    // Adicionando texto
    titulo.innerText = title;
    paragrafo.innerText = describe;
    
    // Caminho para foto;
    image.setAttribute("src", imagPath);

    // Adicionando paragrafo ao elemento ancora
    div.appendChild(titulo)
    div.appendChild(paragrafo);
    sessaoCards.appendChild(div);
    sessaoCards.appendChild(image);

}


// Lopp que esta renderizando cards com dados do Data,js
for (index in data) {
    createCard( data[index].imagePath, data[index].describe, data[index].titulo )
}







