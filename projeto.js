function calcularNivelRankeado(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Saldo de vitórias e o nível
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

//Exemplo
let nickname = "Felipe";
const vitorias = 80;
const derrotas = 20;
const nivel = calcularNivelRankeado(vitorias, derrotas);


console.log("O Herói " + nickname + " tem saldo de " + (vitorias - derrotas) + " vitórias está no nível de " + nivel +".");
