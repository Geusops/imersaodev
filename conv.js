//variaveis
var numDec
var valorEmHexadecimal

//Funcoes para as conversoes
//conversao para de Decimal para Hexadecimal
function convDecimal(){
  numDec = parseInt(document.getElementById('decnum').value);
  valorEmHexadecimal = numDec.toString(16);
  document.getElementById('hexnum').value = valorEmHexadecimal;
}

//limpeza dos campos
function limpar(){
 document.getElementById('decnum').value = "";
 document.getElementById('hexnum').value = "";
}

//setAttribute('value', valorEmHexadecimal)