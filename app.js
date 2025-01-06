let nMax = 30;
let nMin = 1;
let numerosSorteados = [];

startPartida();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {

        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa. UHUU. PARABÉNS!!!! ";
        atribuirValorCampo('h1', 'Parabéns! Acertou!');
        atribuirValorCampo('p', `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`.toString());

        //habilitando o botão de reiniciar após acertar número
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else if (chute > numeroSecreto) {
        atribuirValorCampo('p', `O número secreto é menor que: ${chute}`.toString());
    } else {
        atribuirValorCampo('p', `O número secreto é maior que: ${chute}`.toString());
    }
    tentativas++;
    limparCampo();

}

function atribuirValorCampo(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * (nMax - nMin + 1)) + nMin;
    let quantidadeDeElementosLista = numerosSorteados.length;

    if(quantidadeDeElementosLista == nMax){
        numerosSorteados = [];
    }
    
    if(numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    document.querySelector('input').value = '';
}

function startPartida(){
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    atribuirValorCampo('h1', 'NumberSecret-Game');
    atribuirValorCampo('p', `Escolha um número entre ${nMin} e ${nMax}`.toString());
}

function reiniciarJogo() {
    limparCampo();
    startPartida();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
