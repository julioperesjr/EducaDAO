let numero1 = document.getElementById("numero1") || 0;
let numero2 = document.getElementById("numero2") || 0;
let resultado_valor = document.getElementById("resultado_valor") || "Não encontrado";
let operacao_valor = document.getElementById("operacao_valor")
mensagem = document.getElementById("mensagem");

const listaInteiros = [10, 67 , 785];
const palavras = ["Aula", "de", "Programação"]
const inteiro = parseFloat(6.2)
const numero = 56;

console.log(inteiro)
console.log("89")
console.log(numero.toString())

class Pessoa{
    constructor(_idade, _nome){
        this.idade = _idade;
        this.nome = _nome;
    }
}

const eu = new Pessoa(44 , "Julio");
const gabriel = new Pessoa(37 , "Gabriel");

console.log(eu.nome);
console.log(gabriel.nome);

function executar(){
    if(operacao_valor.value === "soma"){
        resultado_valor.value = parseInt(numero1.value) + parseInt(numero2.value);
    } else if(operacao_valor.value === "subtracao"){
            resultado_valor.value = parseInt(numero1.value) - parseInt(numero2.value);
    } else if(operacao_valor.value === "multiplicacao"){
            resultado_valor.value = parseInt(numero1.value) * parseInt(numero2.value);
    } else if(operacao_valor.value === "divisao"){
            resultado_valor.value = parseInt(numero1.value) / parseInt(numero2.value);
    } else if(operacao_valor.value === "exponenciacao"){
            resultado_valor.value = parseInt(numero1.value) ** parseInt(numero2.value);
    }else if(operacao_valor.value === "porcentagem"){
            const porcentagem = parseInt(numero2.value) / 100;
            resultado_valor.value = parseInt(numero1.value) * porcentagem;
    } else {
        let mensagem_erro = "Operação não encontrada!"
        // verificar!!!  mensagem.innerHTML = "<div class="mensagem_erro">"
        //mensagem.innerText = mensagem_erro
        console.log(mensagem_erro)
        //alert("Operação não encontrada!")
    }
}

// Operadores
// === Igual
// !== Diferente
// ! Não
// || OU