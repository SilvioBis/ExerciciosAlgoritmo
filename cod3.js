/*3) Um cliente de um banco tem um saldo positivo de R$ 500,00. Fazer um algoritmo que leia um cheque que entrou e calcule o saldo, 
mostrando (escrevendo) o novo saldo na tela.*/

 alert("Saldo atual é de R$500,00")

var num1 = parseFloat(prompt("Digite o valor do cheque"));

alert("O novo saldo é de: R$" + (num1 + 500))