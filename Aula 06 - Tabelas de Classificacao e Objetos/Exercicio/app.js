var paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

var rafa = {
    nome: "Rafa",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}


rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
    var html = ""

    for(var i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota("+ i + ")'>Derrota</button></td></tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    var jogador1 = jogadores[0]
    jogador1.empates++
    jogador1.pontos = calculaPontos(jogador1)

    var jogador2 = jogadores[1]
    jogador2.empates++
    jogador2.pontos = calculaPontos(jogador2)

    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}

function adicionarJogador(i){
    var player = {
        nome: prompt("Qual o nome do novo jogador?"),
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    }
    
    player.pontos = calculaPontos(player)
    jogadores.push(player)
    exibirJogadoresNaTela(jogadores)
}
