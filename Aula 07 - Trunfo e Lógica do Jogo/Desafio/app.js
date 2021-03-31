var cartaPaulo = {
    nome:"Seiya de Pegasu",
    imagem:"https://i.pinimg.com/originals/e9/c1/77/e9c1778727e6c604ace92a2ec73ce52b.jpg",
    atributos:{
        ataque:80,
        defesa:60,
        magia:90.
    }  
}

var cartaRafa = {
    nome:"Bulbasauro",
    imagem:"https://rebellion.nerdfitness.com/uploads/monthly_2017_09/59b5f223ec853_Vinewhip.JPG.64181947c38bc7970692c89427196f35.JPG",
    atributos:{
        ataque:70,
        defesa:65,
        magia:85
    }
}

var cartaGui = {
    nome:"Lorde Darth Vader",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHPvZDnXfdMuctMZRRvm9q_XOcT9YbGWaKA&usqp=CAU",
    atributos:{
        ataque:88,
        defesa:62,
        magia:90
    } 
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)

    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
   
    exibirOpcoes()
    exibirCartaJogador()
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo.toUpperCase()

    }
    opcoes.innerHTML = opcoesTexto
}
//reforçar
function obtemAtributosSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributosSelecionado()
    var res = document.getElementById('resultado')

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        res.innerHTML = 'Você venceu a maquina'
    }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        res.innerHTML = 'Perdeu. Carta da maquina é maior'
    }else {
        res.innerHTML = 'Empatou!'
    }
    exibirCartaMaquina()
}

function exibirCartaJogador() {
    var nomeJogador = document.getElementById('cartaJogadorNome')
    var divCartaJogadorImg = document.getElementById('cartaJogadorImg')
    
    var divCartaAtributo = document.getElementById('cartaJogadorAtributo')

    nomeJogador.innerHTML = cartaJogador.nome
    
    divCartaJogadorImg.innerHTML = "<img src='" + cartaJogador.imagem + "'>"

    var html = "<ul>"
    for (var atributo in cartaJogador.atributos) {
        html += "<li>" + atributo.toUpperCase() + ";" + cartaJogador.atributos[atributo]
    }
    html += "</ul>"

    divCartaAtributo.innerHTML = html
}

function exibirCartaMaquina() {
    var nomeMaquina = document.getElementById('cartaMaquinaNome')
    var divCartaMaquinaImg = document.getElementById('cartaMaquinaImg')
    
    var divCartaAtributo = document.getElementById('cartaMaquinaAtributo')

    nomeMaquina.innerHTML = cartaMaquina.nome

    divCartaMaquinaImg.innerHTML = "<img src='" + cartaMaquina.imagem + "'>"

    var html = "<ul>"
    for (var atributo in cartaMaquina.atributos) {
        html += "<li>" + atributo.toUpperCase() + ";" + cartaMaquina.atributos[atributo]
    }
    html += "</ul>"

    divCartaAtributo.innerHTML = html
}