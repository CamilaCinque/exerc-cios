/* 🟢 Nível Básico

1. Verificar maioridade

Crie um programa que solicite a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade. */

let idade01 = Number(prompt("Informe a sua idade:"))

if (Number.isNaN(idade01)) {
    alert("Idade inválida. Informe somente números.")

} else if (idade01 <18) {
    alert("Você é menor de idade.")
} else {
    alert("Você é maior de idade.")
}

/* 2. Positivo ou Negativo

Solicite um número ao usuário e informe se ele é positivo ou negativo. Considere o número 0 como negativo. */

let numero = Number(prompt("Informe um número:"))

if (Number.isNaN(numero)) {
    alert("Valor inválido. Informe somente números.")

} else if (numero <=0) {
    alert("Este número é negativo.")
} else {
    alert("Este número é positivo.")
}

/* 3. Aprovação em uma prova

Peça ao usuário a nota final de um aluno (de 0 a 100). Caso a nota seja 60 ou maior, informe que ele foi aprovado. Caso contrário, informe que foi reprovado. */

let nota = Number(prompt("Informe a nota do aluno:"))

if (Number.isNaN(nota)) {
    alert("Valor inválido. Informe somente números.")

} else if (nota <=59) {
    alert("O aluno foi reprovado.")

} else  if (nota >= 60 && nota <= 100){ 
    alert("O aluno foi aprovado.")
} else {
    alert("Inválido. Informe um valor entre 0 e 100.")
}

/* 4. Positivo, Negativo ou Zero

Leia um número informado pelo usuário e indique se ele é: positivo, negativo ou zero. */

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

/* 5. Classificação por idade

Solicite a idade de uma pessoa e classifique-a conforme as regras abaixo: criança: de 0 a 12 anos; adolescente: de 13 a 17 anos; adulto: 18 anos ou mais. 

Caso seja informada uma idade negativa, exiba uma mensagem de idade inválida. */

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

/* 6. Par ou Ímpar

Solicite um número inteiro ao usuário e informe se ele é par ou ímpar. */

let numero02 = Number(prompt("Informe um número:"))
let resultado = numero02 % 2

if (resultado === 0) {
    alert("Número par!")
} else {
    alert("Número ímpar!") 
}

/* 🟡 Nível Intermediário

1. Calculadora simples

Crie uma calculadora que: solicite o primeiro número; solicite a operação desejada (+, -, * ou /); solicite o segundo número. 

Ao final, exiba o resultado da operação escolhida. Caso seja informada uma operação inválida, exiba uma mensagem de erro. */

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
} 

/* 2. Maior entre três números

Solicite três números diferentes ao usuário e informe qual deles é o maior. */

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
}

/* 3. Desconto em compras
Uma loja oferece 10% de desconto para compras acima de R$ 100,00. Solicite o valor da compra e informe o valor final que deverá ser pago.

Caso a compra não atinja esse valor, informe o preço sem desconto. */

let valor = Number(prompt("Informe o valor total da compra:"))
let desconto = valor - (valor * 0.1)

if (Number.isNaN(valor)) {
    alert("Valor inválido. Informe somente números.")
} else if (valor < 100) {
    alert("Valor mínimo não atendido.")
} else {
    alert("O valor da compra com desconto é: R$" + desconto + ".")
}

/* 4. Sistema de login

Crie um programa que solicite um nome de usuário e uma senha. Considere que: usuário - admin | senha - 1234 .

Caso ambos estejam corretos, exiba a mensagem "Login bem-sucedido". Caso contrário, exiba "Acesso negado". */

const usuario = prompt("Informe o usuário:")
const senha = prompt("Informe a senha:")

const acessoAdmin = (usuario === "admin" && senha === "1234")

if (acessoAdmin) {
    alert("Acesso liberado!")
} else {
    alert("Acesso negado!")
}

/* 🔴 Nível Avançado

1. Classificação de triângulos
Solicite ao usuário os comprimentos dos três lados de um possível triângulo.
Primeiro, verifique se os valores realmente podem formar um triângulo.
Caso possam, classifique-o como:
Equilátero (todos os lados iguais); 
Isósceles (dois lados iguais); 
Escaleno (todos os lados diferentes). 
Caso não seja possível formar um triângulo, informe isso ao usuário. */

let triangulo1 = Number(prompt("Informe a 1ª medida:"))
let triangulo2 = Number(prompt("Informe a 2ª medida:"))
let triangulo3 = Number(prompt("Informe a 3ª medida:"))

if (triangulo1 + triangulo2 > triangulo3 && triangulo1 + triangulo3 > triangulo2 && triangulo2 + triangulo3 > triangulo1)
{ if (Number.isNaN(triangulo1, triangulo2, triangulo3)) {
    alert("Valor inválido. Informe somente números.")
} else if (triangulo1 === triangulo2 && triangulo2 === triangulo3) {
    alert("Este triângulo é equilátero (todos os lados são iguais.)")
} else if (triangulo1 === triangulo2  || triangulo2 === triangulo3 || triangulo1 === triangulo3) {
    alert("Este triângulo é isósceles (somente dois lados são iguais.)")
} else {
    alert("Este triângulo é escaleno (todos os lados são diferentes).")
}}

/* 2. Conversão de notas (Conceitos)
Solicite uma nota entre 0 e 100 e converta-a para um conceito conforme a tabela abaixo:
A: 90 a 100 
B: 80 a 89 
C: 70 a 79 
D: 60 a 69 
E: abaixo de 60 
Exiba o conceito correspondente. */

let nota01 = Number(prompt("Informe a sua nota:"))

if (Number.isNaN(nota01)){
    alert("Valor inválido. Informe somente números.")
} else if (nota01 <= 100 && nota01 >= 90) {
    alert("O conceito é: A")
} else if (nota01 >= 80) {
    alert("O conceito é: B")
} else if (nota01 >= 70) {
    alert("O conceito é: C")
} else if (nota01 >= 60) {
    alert("O conceito é: D")
} else if (nota01 <60 && nota01 >= 0) {
    alert("O conceito é: E")
} else {
    alert("Valor inválido. Informe um número entre 0 e 100.")
}

/* 3. Cálculo de IMC
Solicite o peso (em quilogramas) e a altura (em metros) de uma pessoa.
Calcule o Índice de Massa Corporal (IMC) e informe sua classificação:
Abaixo do peso 
Peso normal 
Sobrepeso 
Obesidade */

let peso = Number(prompt ("Informe o seu peso (kg):"))
let altura = Number(prompt("Informe a sua altura (m):"))

let imc = peso / (altura ** 2)

if (imc < 18.5) {
    alert("IMC = " + imc.toFixed(2) + ". ⚠️ Você está abaixo do seu peso ideal. ⚠️")
} else if (imc >= 18.5 && imc <= 24.9){
    alert("IMC = " + imc.toFixed(2) + ". ✅ Você está no seu peso ideal. ✅")
} else if (imc >= 25 && imc <= 29.9) {
    alert("IMC = " + imc.toFixed(2) + ". ⚠️ Você está com sobrepeso. ⚠️")
} else {
    alert("IMC = " + imc.toFixed(2) + ". ⚠️ Você está com obesidade. ⚠️")
}

/* 4. Ano Bissexto
Solicite ao usuário um ano e informe se ele é bissexto ou não bissexto.
Considere as seguintes regras:
Um ano é bissexto se for divisível por 400; ou 
Se for divisível por 4 e não for divisível por 100. 
Caso contrário, o ano não é bissexto. */

let ano = Number(prompt("Informe um ano:"))

if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
    alert(ano + " é um ano bissexto.")
} else {
    alert(ano + " não é um ano bissexto.")
}