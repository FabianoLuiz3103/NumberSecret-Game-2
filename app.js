
let nMax = 30;
let nMin = 1;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function atribuirValorCampo(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

atribuirValorCampo('h1', 'NumberSecret-Game');
atribuirValorCampo('p', `Escolha um número entre ${nMin} e ${nMax}`);


function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        atribuirValorCampo('h1', 'Parabéns! Acertou!');
        atribuirValorCampo('p', `Você descobriu o número secreto!`);
    } else if (chute > numeroSecreto){
        atribuirValorCampo('p', `O número secreto é menor que: ${chute}`);
    } else {
        atribuirValorCampo('p', `O número secreto é maior que: ${chute}`);
    }
}

function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * (nMax - nMin + 1)) + nMin;
}