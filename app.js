
let nMax = 0;
let nMin = 0;

function atribuirValorCampo(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

atribuirValorCampo('h1', 'NumberSecret-Game');
atribuirValorCampo('p', `Escolha um número entre ${nMin} e ${nMax}`);


