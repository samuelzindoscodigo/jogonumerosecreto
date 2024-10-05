let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

let conteudo = document.querySelector('.container__conteudo');
let botaobaixo = document.querySelector('.botao2');
let container = document.querySelector('.container');
let video = document.querySelector('.video');

const tagVideo = `
          <video loop="true" autoplay="autoplay" width="100%" height="auto">
              <source src="./img/video.mp4" type="video/mp4" />
          </video> 
`

botaobaixo.style.display = 'none'

function exibirTextoNaTela(tag,texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

 function exibirMensagemInicial () {
  exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
  exibirTextoNaTela ('p', 'Escolha um numero de 1 a 10');
 }

 exibirMensagemInicial();

function verificarChute() { 
   let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) { 
    console.log(chute == reiniciarJogo);
  
    exibirTextoNaTela ('h1', 'Você acertou!');
    let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Parabéns você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela ('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');   
    conteudo.style.display= 'none'
    video.innerHTML = tagVideo
    container.style.display = 'block'
    botaobaixo.style.display = 'block'
  } else {
    if (chute > numeroSecreto) exibirTextoNaTela ('p', 'O número secreto e menor');
    if (chute < numeroSecreto) exibirTextoNaTela ('p' , 'O número secreto e maior'); 
  } 

  tentativas++;
  limparCampo();
}
   
function gerarNumeroAleatorio () {
  return parseInt (Math.random () * 10 + 1 ); 
}

function limparCampo() {
  let chute = document.querySelector('input');
  chute.value = ``;
}

function reiniciarJogo () { 
  numeroSecreto = gerarNumeroAleatorio() ;
  limparCampo ();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
  video.innerHTML = ''
  conteudo.style.display = 'block'
  botaobaixo.style.display = 'none'
}


