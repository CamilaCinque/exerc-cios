/* 1. Verificar maioridade

Crie um programa que solicite a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade. */

/* let idade = Number(prompt("Informe a sua idade:"))

if (Number.isNaN(idade)) {
    alert("Idade inválida. Informe somente números.")

} else if (idade <18) {
    alert("Você é menor de idade.")
} else {
    alert("Você é maior de idade.")
} */

/* 2. Positivo ou Negativo

Solicite um número ao usuário e informe se ele é positivo ou negativo. Considere o número 0 como negativo. */

/*
let numero = Number(prompt("Informe um número:"))

if (Number.isNaN(numero)) {
    alert("Valor inválido. Informe somente números.")

} else if (numero <=0) {
    alert("Este número é negativo.")
} else {
    alert("Este número é positivo.")
} */

/* 3. Aprovação em uma prova

Peça ao usuário a nota final de um aluno (de 0 a 100). Caso a nota seja 60 ou maior, informe que ele foi aprovado. Caso contrário, informe que foi reprovado. */
/*
let nota = Number(prompt("Informe a nota do aluno:"))

if (Number.isNaN(nota)) {
    alert("Valor inválido. Informe somente números.")

} else if (nota <=59) {
    alert("O aluno foi reprovado.")

} else  if (nota >= 60 && nota <= 100){ 
    alert("O aluno foi aprovado.")
} else {
    alert("Inválido. Informe um valor entre 0 e 100.")
} */

/* 4. Positivo, Negativo ou Zero

Leia um número informado pelo usuário e indique se ele é:
Positivo; 
Negativo; 
Zero. */
/*
let numero01 = Number(prompt("Informe um número:"))

if (Number.isNaN(numero01)) {
    alert("Valor inválido. Informe somente números.")
} else if (numero01 <0) {
    alert("Este número é negativo.")
} else if (numero01 =0){
    alert("Este número é o 0.")
} else {
    alert("Este número é positivo.")
}
*/

/* 5. Classificação por idade

Solicite a idade de uma pessoa e classifique-a conforme as regras abaixo:
Criança: de 0 a 12 anos; 
Adolescente: de 13 a 17 anos; 
Adulto: 18 anos ou mais. 

Caso seja informada uma idade negativa, exiba uma mensagem de idade inválida. */
/*
let idade = Number(prompt("Informe a idade:"))

if (Number.isNaN(idade)) {
    alert("Valor inválido. Informe somente números.")
} else if (idade >= 0 && idade <= 12){
    alert("É uma crianca.")
} else if (idade >= 13 && idade <= 17) {
    alert("É um adolescente.")
} else {
    alert("É um adulto.")
}
*/

/* 6. Par ou Ímpar

Solicite um número inteiro ao usuário e informe se ele é par ou ímpar. */
/*
let numero02 = Number(prompt("Informe um número:"))
let resultado = numero02 % 2

if (resultado === 0) {
    alert("Número par!")
} else {
    alert("Número ímpar!") 
}
*/

/* 1. Calculadora simples
Crie uma calculadora que:
Solicite o primeiro número; 
Solicite a operação desejada (+, -, * ou /); 
Solicite o segundo número. 
Ao final, exiba o resultado da operação escolhida. Caso seja informada uma operação inválida, exiba uma mensagem de erro. */

/*
let numero03 = Number(prompt("Informe o primeiro número:"))
let operação = prompt ("Informe a operação desejada (+, -, * ou /)")
let numero04 = Number(prompt("Informe o segundo número:"))

if (Number.isNaN(numero03)) {
    alert("Valor inválido. Informe somente números.")
} else if (Number.isNaN(numero04)) {
    alert("Valor inválido. Informe somente números.")
} else if (operação === "+"){
    alert("O resultado é: " + (numero03 + numero04))
} else if (operação === "-"){
    alert("O resultado é: " + (numero03 - numero04))
} else if (operação === "*"){
    alert("O resultado é: " + (numero03 * numero04))
} else if (operação === "/"){
    if (numero04 == 0) {alert("Não é possível realizar a divisão por 0.")

} else
    alert("O resultado é: " + (numero03 / numero04))
} else {
    alert("Operação inválida. Escolha uma das operações a seguir: +, -, *, ou /.")
} */

/* 2. Maior entre três números

Solicite três números diferentes ao usuário e informe qual deles é o maior. */

/*

let numero05 = Number(prompt("Informe o primeiro número:"))
let numero06 = Number(prompt("Informe o segundo número:"))
let numero07 = Number(prompt("Informe o terceiro número:"))

if (Number.isNaN(numero05, numero06, numero07)) {
    alert("Valor inválido. Informe somente números.")
} else if (numero05 === numero06 && numero06 === numero07) {
    alert("Os três números são iguais.")
} else if (numero05 > numero06 && numero05 > numero07) {
    alert("O primeiro número é maior.")
} else if (numero06 > numero05 && numero06 > numero07) {
    alert("O segundo número é maior.")
} else {
    alert("O terceiro número é maior.")
} */

/* 3. Desconto em compras
Uma loja oferece 10% de desconto para compras acima de R$ 100,00.
Solicite o valor da compra e informe o valor final que deverá ser pago.
Caso a compra não atinja esse valor, informe o preço sem desconto. */

/*
let valor = Number(prompt("Informe o valor total da compra:"))
let desconto = valor - (valor * 0.1)

if (Number.isNaN(valor)) {
    alert("Valor inválido. Informe somente números.")
} else if (valor < 100) {
    alert("Valor mínimo não atendido.")
} else {
    alert("O valor da compra com desconto é: R$" + desconto + ".")
} */

/* 4. Sistema de login
Crie um programa que solicite um nome de usuário e uma senha.
Considere que:
Usuário: admin 
Senha: 1234 
Caso ambos estejam corretos, exiba a mensagem "Login bem-sucedido". Caso contrário, exiba "Acesso negado". */
 /*
const usuario = prompt("Informe o usuário:")
const senha = prompt("Informe a senha:")

const acessoAdmin = (usuario === "admin" && senha === "1234")

if (acessoAdmin) {
    alert("Acesso liberado!")
} else {
    alert("Acesso negado!")
} */