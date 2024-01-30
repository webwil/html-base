function imprimirNoBrowser() {
    armazenaTexto('title', 'Portifólio');
    armazenaTexto('h1', 'texto H1');
    armazenaTexto('p', 'Texto Paragrafo');
}

function armazenaTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

imprimirNoBrowser();