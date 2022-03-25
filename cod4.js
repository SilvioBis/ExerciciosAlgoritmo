/*4) Considerando que para um consórcio, sabe-se o número total de prestações, a quantidade de prestações pagas e o valor atual da prestação, 
escreva um algoritmo que determine o total pago pelo consorciado e o saldo devedor. */


var base = parseFloat(prompt("DIGITE O VALOR DO CONSORCIO"));
var prt = parseFloat(prompt("DIGITE O TOTAL DE PRESTAÇÕES"));
var qnt = parseFloat(prompt("DIGITE A QUANTIDADE DE PARCELAS PAGAS"));
/* var vlr_prt = parseInt(prompt("DIGITE O VALOR ATUAL DA PRESTAÇÃO")); */

alert(" TOTAL PAGO ATÉ O MOMENTO É DE: R$" + ( ( base / prt ) * qnt ) )
alert(" SALDO DEVEDOR ATÉ O MOMENTO É DE: R$" + ( base - ( ( base / prt ) * qnt ) ))

