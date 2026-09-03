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

const carrinho = []

function addCarrinho() {
    carrinho.
}

renderizarLivrosCarrinho(){
    
}

renderizarLivrosCarrinho()

const catalogo = document.getElementById('catalogo');
const pesquisa = document.getElementById('pesquisa');

function renderizarLivros() {
    catalogo.innerHTML = '';

    livros.forEach(livro => {
        catalogo.innerHTML += `
            <div class="cards">
                <img src="${livro.capa}" alt="${livro.titulo}_imagem">
                <p class="titulo">${livro.titulo}</p>
                <p class="autor">${livro.autor}</p>
                <p class="categoria">${livro.categoria}</p>
                <button onclick="addCarrinho()">Adicionar ao Carrinho</button>
            </div>
            `
    })
}



renderizarLivros()

function filtrarLivros() {
    const termoPesquisa = pesquisa.value.toLowerCase();
    const livrosFiltrados = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(termoPesquisa) ||
        livro.autor.toLowerCase().includes(termoPesquisa) ||
        livro.categoria.toLowerCase().includes(termoPesquisa)
    );

    catalogo.innerHTML = '';

    livrosFiltrados.forEach(livro => {
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
    )
}

pesquisa.addEventListener('input', filtrarLivros);

const telaUpagem = document.getElementById('telaUpagem');
const devIcon = document.getElementById('dev-icon');
devIcon.addEventListener('click', () => {
    if (telaUpagem.style.display === 'block') {
        telaUpagem.style.display = 'none';
    } else {
        telaUpagem.style.display = 'block';
    }
})

telaUpagem.addEventListener('click', (event) => {
    event.stopPropagation();
});

function addLivro(capaUpada, tituloUpado, autorUpado, categoriaUpada) {
    const novoLivro = {
        id: livros.length + 1,
        capa: capaUpada.value,
        titulo: tituloUpado.value,
        autor: autorUpado.value,
        categoria: categoriaUpada.value
    };

    livros.push(novoLivro);
    renderizarLivros();
}