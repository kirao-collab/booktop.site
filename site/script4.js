const conteudoDaGaveta = localStorage.getItem("nomes");
let galeria;

if (conteudoDaGaveta) {
    galeria = JSON.parse(conteudoDaGaveta);
} else {
    galeria = [];
}

const formulario = document.getElementById('booktop-formulario');
const colecao = document.getElementById('colecao');


function criarCard(item) {
    const novoCard = `
    <div class="card">
        <div class="texto">
            <h3>${item.titulo}</h3>
            <p>${item.lastName}</p>
        </div>
    </div>`;

    colecao.innerHTML += novoCard;
}


galeria.forEach(item => {
    criarCard(item);
});


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const novo = { 
        titulo: document.getElementById('titulo').value,
        lastName: document.getElementById('lastName').value
    };

    galeria.push(novo);
    localStorage.setItem('nomes', JSON.stringify(galeria));
    criarCard(novo);
    formulario.reset();
    document.body.style.backgroundColor = '#a18677';
});


formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const novoLivro = new ObraDeLivro(t, desc, img, alt);

    fetch('/api/lista', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoLivro)
    })
    .then(()=> {
        window.location.href = 'index.html';
    });
});