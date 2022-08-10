window.variavelControle = "X";
function marcarComXouD(id){
  
   var mensagemRetorno = " ";

if(document.getElementById(id).value == " "){

if(window.variavelControle == "X") {
  document.getElementById(id).value = "X";
  window.variavelControle = "O";

} 
else{
window.variavelControle = "X";
document.getElementById(id).value = "O";
}
var d1 = document.getElementById('d1').value;
var d2 = document.getElementById('d2').value;
var d3 = document.getElementById('d3').value;
var d4 = document.getElementById('d4').value;
var d5 = document.getElementById('d5').value;
var d6 = document.getElementById('d6').value;
var d7 = document.getElementById('d7').value;
var d8 = document.getElementById('d8').value;
var d9 = document.getElementById('d9').value;

//1
if(d1 == d2 && d2 == d3 && d1 != " "){
  mensagemRetorno = "Ganhou! " + document.getElementById(id).value;
  alert(mensagemRetorno);
}
//2
else if(d4 == d5 && d5 == d6 && d4 != " "){
  mensagemRetorno = "Ganhou! " + document.getElementById(id).value;
  alert(mensagemRetorno);
}
//3
else if(d7 == d8 && d8 == d9 && d7 != " "){
  mensagemRetorno = "Ganhou! " + document.getElementById(id).value;
  alert(mensagemRetorno);
}
//4
else if(d1 == d4 && d4 == d7 && d1 != " "){
  mensagemRetorno = "Ganhou! " + document.getElementById(id).value;
  alert(mensagemRetorno);
}
//5
else if(d2 == d5 && d5 == d8 && d2 != " "){
  mensagemRetorno = "Ganhou! " + document.getElementById(id).value;
  alert(mensagemRetorno);
}
//6
else if(d3 == d6 && d6 == d9 && d3 != " "){
  mensagemRetorno = "Ganhou! " + document.getElementById(id).value;
  alert(mensagemRetorno);
}
//7
else if(d1 == d5 && d5 == d9 && d1 != " "){
  mensagemRetorno = "Ganhou! " + document.getElementById(id).value;
  alert(mensagemRetorno);
}
//8
else if(d3 == d5 && d5 == d7 && d3 != " "){
  mensagemRetorno = "Ganhou! " + document.getElementById(id).value;
  alert(mensagemRetorno);
}
// DEU VELHA
else if(d1 != " " && d2 != " " && d3 != " " && d4 != " " && d5 != " " && d6 != " " && d7 != " " && d8 != " " && d9 != " ") {
  mensagemRetorno = "Ninguem ganhou!"
  alert(mensagemRetorno);
}

  }

}

 
  

  


