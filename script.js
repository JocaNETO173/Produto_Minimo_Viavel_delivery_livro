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
const botaoCarrinho = document.getElementById('botaoCarrinho');

function addCarrinho(livro) {
    carrinho.push(livro);

    botaoCarrinho.textContent = 'Adicionado ao Carrinho!';


    renderizarLivrosCarrinho();
}

const telaCarrinho = document.getElementById('tela-carrinho');
const shopIcon = document.getElementById('shop-icon');
shopIcon.addEventListener('click', () => {
    if (telaCarrinho.style.display === 'block') {
        telaCarrinho.style.display = 'none';
    } else {
        telaCarrinho.style.display = 'block';
    }
})

telaCarrinho.addEventListener('click', (event) => {
    event.stopPropagation();
});

function renderizarLivrosCarrinho() {
    const c = document.getElementById('carrinho-livros');
    c.innerHTML = "";
    carrinho.forEach(cLivro => {
        c.innerHTML += `
            <div class="card-carrinho">
                <div class="imagem" style="background-image: url('${cLivro.capa || './img/default.jpg'}');"></div>
                <p class="titulo">${cLivro.titulo}</p>
                <p class="autor">${cLivro.autor}</p>
                <p class="preco">${cLivro.preco}</p>
            </div>
            <div class="card-barra"></div>
            `;
    });
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
                <button id="botaoCarrinho" onclick="addCarrinho(livro)">Adicionar ao Carrinho</button>
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