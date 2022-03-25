/* 9) Faça um algoritmo que leia uma temperatura em Graus Fahrenheits e 
mostre a temperatura em Graus Celsius. Para isso pesquise a fórmula na internet.*/

var F = parseFloat(prompt("Digite a temperatura em Fahrenheits: "));
var C = (F - 32) * (5/9);
alert("A temperatura em celsius é : " + C + "º");