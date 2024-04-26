function jogar(escolhaUsuario) {
    var escolhaComputador = Math.random() < 0.5 ? 'azul' : 'vermelho';
    var resultado = document.getElementById('resultado');

    if (escolhaUsuario === escolhaComputador) {
        resultado.innerText = 'Você venceu!';
        resultado.style.color = 'green';
    } else {
        resultado.innerText = 'Você perdeu!';
        resultado.style.color = 'red';
    }
}
