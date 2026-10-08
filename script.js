const livros = [
    {
        id: 1,
        capa: '/img/pequenoprincipe.jpg',
        titulo: 'O Pequeno Príncipe',
        autor: 'Antoine de Saint-Exupéry',
        categoria: 'Literatura Infantil',
        preco: 'R$ 29,90'
    },

    {
        id: 2,
        capa: '/img/domquixote.jpg',
        titulo: 'Dom Quixote',
        autor: 'Miguel de Cervantes',
        categoria: 'Romance',
        preco: 'R$ 39,90'
    },

    {
        id: 3,
        capa: '/img/coraline.jpg',
        titulo: 'Coraline',
        autor: 'Neil Gaiman',
        categoria: 'Fantasia e Ficção  Científica',
        preco: 'R$ 24,90'
    },
    {
        id: 4,
        capa: '/img/harrypotter.jpg',
        titulo: 'Harry Potter e a Pedra Filosofal',
        autor: 'J.K. Rowling',
        categoria: 'Fantasia e Ficção Científica',
        preco: 'R$ 34,90'
    },
    {
        id: 5,
        capa: '/img/1984.jpg',
        titulo: '1984',
        autor: 'George Orwell',
        categoria: 'Distopia e Ficção Científica',
        preco: 'R$ 29,90'
    },
    {
        id: 6,
        capa: '/img/hobbit.jpg',
        titulo: 'O Hobbit',
        autor: 'J.R.R. Tolkien',
        categoria: 'Fantasia e Ficção Científica',
        preco: 'R$ 39,90'
    }

]

const carrinho = []
let precoTotal = 0;

function calcularPrecoTotal() {
    precoTotal = carrinho.reduce((total, livro) => {
        const precoNumerico = parseFloat(livro.preco.replace('R$ ', '').replace(',', '.'));
        return total + precoNumerico;
    }, 0);

    const precoTotalElement = document.getElementById('preco-total');
    precoTotalElement.textContent = `Preço Total: R$ ${precoTotal.toFixed(2).replace('.', ',')}`;
}

function addCarrinho(id, botao) {
    const livroSelecionado = livros.find(livro => livro.id === id);
    if (livroSelecionado) {
        carrinho.push(livroSelecionado);
        botao.textContent = 'Adicionado ao Carrinho!';
        renderizarLivrosCarrinho();
        setInterval(() => {
            botao.textContent = 'Adicionar ao Carrinho';
        }, 2000);
    }
    calcularPrecoTotal()
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

function excluirLivroCarrinho(id) {
    const index = carrinho.findIndex(livro => livro.id === id);
    if (index !== -1) {
        carrinho.splice(index, 1);
        renderizarLivrosCarrinho();
        calcularPrecoTotal();
    }
}

function renderizarLivrosCarrinho() {
    const c = document.getElementById('carrinho-livros');
    c.innerHTML = "";
    carrinho.forEach(cLivro => {
        c.innerHTML += `
            <div class="card-carrinho">
                <div class="card-carrinho-excluir">
                    <button class="botaoExcluir" onclick="excluirLivroCarrinho(${cLivro.id})">X</button>
                </div>
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
                <p class="preco">${livro.preco}</p>
                <button class="botaoCarrinho" onclick="addCarrinho(${livro.id}, this)">Adicionar ao Carrinho</button>
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
                <button class="botaoCarrinho" onclick="addCarrinho(${livro.id}, this)">Adicionar ao Carrinho</button>
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