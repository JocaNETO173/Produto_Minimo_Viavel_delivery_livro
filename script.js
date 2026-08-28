const livros = [
    {
        id: 1,
        capa: '/img/pequenoprincipe.jpg',
        titulo: 'O Pequeno Príncipe',
        autor: 'Antoine de Saint-Exupéry', 
        categoria: 'Literatura Infantil'
    },

    {
        id: 2,
        capa: '/img/domquixote.jpg',
        titulo: 'Dom Quixote',
        autor: 'Miguel de Cervantes', 
        categoria: 'Romance'
    },

    {
        id: 3,
        capa: '/img/coraline.jpg',
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

function filtrarLivros(){
    const termoPesquisa = pesquisa.value.toLowerCase();
    const livrosFiltrados = livros.filter(livro => 
        livro.titulo.toLowerCase().includes(termoPesquisa) ||
        livro.autor.toLowerCase().includes(termoPesquisa) ||
        livro.categoria.toLowerCase().includes(termoPesquisa)
    );

    catalogo.innerHTML = '';

    livrosFiltrados.forEach(livro =>{
        catalogo.innerHTML += `
            <div class="cards">
                <img src="${livro.capa}" alt="${livro.titulo}_imagem">
                <p class="titulo">${livro.titulo}</p>
                <p class="autor">${livro.autor}</p>
                <p class="categoria">${livro.categoria}</p>
                <button>Adicionar ao Carrinho</button>
            </div>
            `
    }
}

const telaUpagem = document.getElementById('telaUpagem');
const devIcon = document.querySelector('.dev-icon');
devIcon.addEventListener('click', () =>{
    if (telaUpagem.style.display === 'block') {
        telaUpagem.style.display = 'none';
    } else {
        telaUpagem.style.display = 'block';
    }
})

// function addLivro(){
//     const novoLivro = {
//         id: livros.length + 1,
//         capa: '/img/novo_livro.jpg',
//         titulo: 'Novo Livro',
//         autor: 'Autor Desconhecido',
//         categoria: 'Categoria Desconhecida'
//     };

//     livros.push(novoLivro);
//     renderizarLivros();
// }