/*5) Construa um algoritmo que leia o nome de um aluno e três notas obtidas 
durante o semestre, ao final mostre o nome do aluno e a média aritmética das notas. */
var nome = prompt("Digite o Seu Nome");
var nota1 = parseFloat(prompt("Digite a Primeira Nota"));
var nota2 = parseFloat(prompt("Digite a Segunda Nota"));
var nota3 = parseFloat(prompt("Digite a Terceira Nota"));

alert("A Media do Aluno: " + nome + " é " + ( ( nota1 + nota2 + nota3 ) / 3 ) )