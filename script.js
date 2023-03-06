var dupla_1 = {
    nome: "Dupla 1",
    truco: 0,
    pontoseco: 0,
    seizada: 0,
    nove: 0,
    doze:0,
    reset:0,
    pontos: 0
};

var dupla_2 = {
    nome: "Dupla 2",
    truco: 0,
    pontoseco: 0,
    seizada: 0,
    nove: 0,
    doze:0,
    reset:0,
    pontos: 0
};



var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
    elementoTabela.innerHTML = `
        <tr>
            <td>${dupla_1.nome}</td>
            <td>${dupla_1.pontoseco}</td>
            <td>${dupla_1.truco}</td>
            <td>${dupla_1.seizada}</td>
            <td>${dupla_1.nove}</td>
            <td>${dupla_1.doze}</td>
            <td>${dupla_1.pontos}</td>
        </tr>
        <tr>
        <td>Ações</td>
            <td><button onClick="adicionarPonto(dupla_1)">1 ponto</button></td>
            <td><button onClick="adicionarTrucada(dupla_1)">3 pontos</button></td>
            <td><button onClick="adicionarSeis(dupla_1)">6 pontos</button></td>
            <td><button onClick="adicionarNove(dupla_1)">9 pontos</button></td>
            <td><button onClick="adicionarDoze(dupla_1)">12 pontos</button></td>
            <td><button onClick="zeraContagem(dupla_1)">Zerar Pontos</button></td>
        </tr>
        <br>
        <tr>
            <td>${dupla_2.nome}</td>
            <td>${dupla_2.pontoseco}</td>
            <td>${dupla_2.truco}</td>
            <td>${dupla_2.seizada}</td>
            <td>${dupla_2.nove}</td>
            <td>${dupla_2.doze}</td>
            <td>${dupla_2.pontos}</td>
        </tr>
        <tr> 
            <td>Ações</td>   
            <td><button onClick="adicionarPonto(dupla_2)">1 ponto</button></td>
            <td><button onClick="adicionarTrucada(dupla_2)">3 pontos</button></td>
            <td><button onClick="adicionarSeis(dupla_2)">6 pontos</button></td>
            <td><button onClick="adicionarNove(dupla_2)">9 pontos</button></td>
            <td><button onClick="adicionarDoze(dupla_2)">12 pontos</button></td>
            <td><button onClick="zeraContagem(dupla_2)">Zerar Pontos</button></td>
        </tr>
 `;

 
}

function adicionarTrucada(jogador) {
    jogador.truco++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTela();
}

function adicionarPonto(jogador) {
    jogador.pontoseco++;
    jogador.pontos++;
    exibirNaTela();
}

function adicionarSeis(jogador) {
    jogador.seizada++;
    jogador.pontos = jogador.pontos + 6;
    exibirNaTela();
}

function adicionarNove(jogador) {
    jogador.nove++;
    jogador.pontos = jogador.pontos + 9;
    exibirNaTela();
}

function adicionarDoze(jogador) {
    jogador.doze++;
    jogador.pontos = jogador.pontos + 12;
    exibirNaTela();
}

function zeraContagem(jogador) {
    jogador.truco = 0;
    jogador.pontoseco = 0;
    jogador.seizada = 0;
    jogador.nove = 0;
    jogador.doze = 0;
    jogador.pontos = jogador.pontos - jogador.pontos;
    exibirNaTela();
}
