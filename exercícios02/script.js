// 🟢 Nível Básico
// 1. Contagem de 1 a 10
// Crie um programa que exiba todos os números de 1 até 10, um por linha.

// for (let numero = 1; numero <= 10; numero ++)
//     {
//     console.log(numero)  
//     }   

// 2. Tabuada de um número
// Solicite um número ao usuário e exiba sua tabuada de multiplicação de 1 a 10.
// Exemplo para o número 5:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

// const numero = Number(prompt("Tabuada de qual número?"))

// if (Number.isNaN(numero)) {
//     console.log("Valor inválido. Informe somente números.");

// } else {
//     console.log("Tabuada do: " + numero)
// }

// for (let i = 0; i <= 10; i++) {

//     const resultado = numero * i
//     console.log(numero + " X " + i + " = " + resultado);
// }

// 3. Soma dos primeiros N números
// Solicite um número inteiro positivo ao usuário e calcule a soma de todos os números de 1 até esse valor.
// Exemplo:
// Entrada: 5 
// Saída: 15 
// (1 + 2 + 3 + 4 + 5 = 15)

// const numeroinformado = Number(prompt("Informe um número inteiro:"))

// let resultado = 0;
// for (let i = 1; i <= numeroinformado; i++) {

//     resultado += i 
// }

// console.log(resultado);

// 🟡 Nível Intermediário
// 4. Números pares de 1 a 50
// Exiba todos os números pares entre 1 e 50, um por linha.

// 5. Jogo de adivinhação
// Crie um programa que gere um número aleatório entre 1 e 100.
// O usuário deverá informar palpites até acertar o número.
// Durante o jogo:
// Se o palpite for maior que o número secreto, informe que o número é menor. 
// Se o palpite for menor que o número secreto, informe que o número é maior. 
// Quando acertar, exiba uma mensagem de parabéns e encerre o programa. 

// 6. Contagem regressiva
// Solicite um número inteiro ao usuário e faça uma contagem regressiva até 0, exibindo cada número.
// Exemplo:
// Entrada:
// 5
// Saída:
// 5
// 4
// 3
// 2
// 1
// 0

// 🔴 Nível Avançado
// 7. Soma dos dígitos
// Solicite um número inteiro positivo ao usuário e calcule a soma de todos os seus dígitos.
// Exemplo:
// Entrada: 1234 
// Saída: 10 
// (1 + 2 + 3 + 4 = 10)


// 8. Fatorial
// Solicite um número inteiro positivo ao usuário e calcule o seu fatorial.
// O fatorial de um número é obtido multiplicando esse número por todos os inteiros positivos menores que ele, até chegar em 1.
// Exemplo:
// 5! = 5 × 4 × 3 × 2 × 1 = 120 
// 4! = 4 × 3 × 2 × 1 = 24 
// 3! = 3 × 2 × 1 = 6 
// Ao final, exiba o resultado do cálculo.

// 9. Inverter número
// Solicite um número inteiro positivo ao usuário e exiba esse número com seus dígitos na ordem inversa.
// Exemplo:
// Entrada: 12345 
// Saída: 54321 

// 10. Números perfeitos até 1000
// Um número perfeito é aquele cuja soma de todos os seus divisores positivos, exceto ele mesmo, é igual ao próprio número.
// Exemplo:
// Divisores de 6: 1, 2 e 3 
// 1 + 2 + 3 = 6 
// Crie um programa que encontre e exiba todos os números perfeitos entre 1 e 1000.

