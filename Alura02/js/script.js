function imprimirNoBrowser() {
    armazenaTexto('title', 'Portifólio');
    armazenaTexto('h1', 'Eleve seu negócio digital a outro nível <strong></strong>');
    armazenaTexto('strong', 'com um Front-end de qualidade!');
    armazenaTexto('p', 'Olá! Sou Joana Santos, desenvolvedora Front-end com especialidade em React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem em prática boas ideias. Vamos conversar?');
}

function armazenaTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

imprimirNoBrowser();