function imprimirNoBrowse(params) {
    armazenaTagTexto('title', 'Portifólio');
    armazenaTagTexto('h1', 'Isso é um titulo');
    armazenaTagTexto('p', 'Isso é um parágrafo');
}

function armazenaTagTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
imprimirNoBrowse();