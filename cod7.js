/*

7) 
Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês.

*/
var vendedor = prompt("Vendedor");
var salario_fixo = parseFloat(prompt("Salario Fixo"));
var vendas = parseInt(prompt("Digite o Total do Valor das Vendas "));
var porcentagem = ( 15 / 100 );

alert("O Vendedor " + vendedor + " Tem o salario fixo de: R$" + salario_fixo + ", então o Salario final do mês é: R$" + (salario_fixo + (vendas * porcentagem))); 