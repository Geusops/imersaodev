//variaveis
var numDec
var valorEmHexadecimal

//Funcoes para as conversoes
//conversao para de Decimal para Hexadecimal
function convDecimal(){
  //conversao para int
  numDec = parseInt(document.getElementById('decnum').value);
  //conversao para hexa
  valorEmHexadecimal = numDec.toString(16);
  //impressao do valor
  document.getElementById('resultado').innerHTML = "O número em Hexadecimal é: " + valorEmHexadecimal;
}

//limpeza dos campos
function limpar(){
 document.getElementById('decnum').value = "";
}

//setAttribute('value', valorEmHexadecimal)

