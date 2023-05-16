const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition
//Faz com que quando o site seja aberto, também se inicie a API de reconhecimento de voz

const recognition = new SpeechRecognition()
//Cria uma instancia para controlar as informações do reconhecimento
recognition.lang = 'pt-BR'
//Define a linguagem do reconhecimento de voz como portugues do Brasil
recognition.start()
//Inicia o reconhecimento

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaValorDoChute(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = 
        `<div>Você disse: </div>
        <span class="box">${chute}</span>`
}

recognition.addEventListener('end', () => recognition.start()) //Faz com que o microfone não pare de ser captado no primeiro chute