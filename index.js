/* Desafio do Felipão. utilizando a logica de programação. Junto com um insetivo do felipão. 
Que foi para não ter medo de explorar coisas novas. Utilizei o conhecimento adquirido nas aulas. com um pouco de curiosidade e criatividade propria. 
Fiz o exercicio solicitado usando funções para realizar um calculadorr de partida ranqueada. junto a esse metodo solicitado pelo desafio. 
Optei por ciar uma função randomica de geração de numeros. para simular um jogador ganhando seus propior pontos. e integrando essa função com o restante do codigo. 
Só solicitar o  console que imprima o resultado, sem precisar utilizar parametros manuais e manipulasdos.
*/ 


let resultado = calcular (numeroAleatorio(1, 120), 10 )
let  rank = classificacao ()

function main() {
    classificacao ()
    calcular ()
    numeroAleatorio ()
}
function numeroAleatorio (a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}
function calcular (win, losse){
    return win - losse
}
function classificacao(){
    if (resultado < 0 ){
        return "Plastico"
    }else if (resultado >= 0 && resultado <= 10){
        return "Ferro"
    } else if (resultado >= 11 && resultado <= 20){
        return "Bronze"
    }else if (resultado >= 21 && resultado <= 50){
        return "Prata"
    }else if (resultado >= 51 && resultado <= 80){
        return "Ouro"
    }else if(resultado >= 81 && resultado <= 90){
        return "Diamante"
    } else if (resultado >= 91 && resultado <=100){
        return "Lendario"
    } else if( resultado  >= 100){
        return "Imortal"
    } 
}
console.log("O Herói tem um saldo de " + resultado +" pontos e ele está no nivel " + rank )