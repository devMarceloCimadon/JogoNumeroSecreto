function verificaValorDoChute(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div> Valor inválido </div>`
        return
    }

    if(numeroForaDoRange(numero)){
        elementoChute.innerHTML += `<div> Valor inválido:
         o número precisa estar entre ${menorValor} e 
         ${maiorValor} </div>`
         return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = 
            `<h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            
            <button id="jogarNovamente" class ="btnJogar">Jogar Novamente</button>`
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += 
        `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    } else{
        elementoChute.innerHTML += 
        `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }
}

function numeroForaDoRange(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogarNovamente'){
        window.location.reload()
    }
})
