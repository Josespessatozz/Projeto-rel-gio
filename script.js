function atualizarTempo(){
    var display = document.querySelector('.display');

    var agora = new Date();

    var horario = corrigirHorário(agora.getHours()) + ':' + corrigirHorário(agora.getMinutes()) + ':' + corrigirHorário(agora.getSeconds());

     display.textContent = horario

}

function corrigirHorário(numero){
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
    
}

atualizarTempo();


setInterval(atualizarTempo, 1000);

console.log(horario);