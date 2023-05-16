const menorValor = 0
const maiorValor = 1000
const numeroSecreto = GerarNumeroAleatorio()

function GerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1) 
    //Gera um número inteiro aleatório de 1 a 1000. +1 para incluir o 1000, já que o Math.random não inclui o maior valor
}

console.log("Número gerado: ", numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor 
//Agora o código altera automaticamente a aparição no HTML dos valores que serão sorteados
