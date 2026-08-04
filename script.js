const livros = [
    {
        id: 1,
        capa: 'pequenoprincipe.jpg',
        titulo: 'O Pequeno Príncipe',
        autor: 'Antoine de Saint-Exupéry', 
        categoria: 'Literatura Infantil'
    },

    {
        id: 2,
        capa: 'domquixote.jpg',
        titulo: 'Dom Quixote',
        autor: 'Miguel de Cervantes', 
        categoria: 'Romance'
    },

    {
        id: 3,
        capa: 'coraline.jpg',
        titulo: 'Coraline',
        autor: 'Neil Gaiman', 
        categoria: 'Fantasia e Ficção  Científica'
    },

]

const catalogo = document.getElementById('catalogo');
const pesquisa = document.getElementById('pesquisa');

function renderizarLivros(){
    catalogo.innerHTML = '';

    livros.forEach(livro =>{
        catalogo.innerHTML += `
            <div class="cards">
                <img src="${livro.capa}" alt="${livro.titulo}_imagem">
                <p class="titulo">${livro.titulo}</p>
                <p class="autor">${livro.autor}</p>
                <p class="categoria">${livro.categoria}</p>
                <button>Adicionar ao Carrinho</button>
            </div>
            `
    })
}

renderizarLivros()