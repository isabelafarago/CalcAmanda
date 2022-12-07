function Limpar(id1, id2){
    document.getElementById(id1).value="";
    document.getElementById(id2).value="";
}
function Calcular(numero1, numero2, operacao){
    var num1 = document.getElementById(numero1).value;
    var num2 = document.getElementById(numero2).value;
    var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
    var expressao = num1 + operador + num2;
    resultado = eval(expressao);
    document.innerHTML = resultado;
    if ((num2.length >0) && (num1.length >0)) { 
    var a = ("A soma entre "+num1+ " e "+num2+ " é: "+resultado);
if (operador === "+"){
    document.getElementById('mensagem').innerHTML = a;
    
}
var s = ("A diferença entre "+num1+ " e "+num2+ " é: "+resultado);
if (operador === "-"){
    document.getElementById('mensagem').innerHTML = s;
}
var d = (" O quociente de "+num1+ " dividido por "+num2+ " é: "+resultado);
if (operador === "/"){
    document.getElementById('mensagem').innerHTML = d;

}
var m = (" O produto de "+num1+ " por "+num2+ " é: "+resultado);
if (operador === "*"){
    document.getElementById('mensagem').innerHTML = m;

}
}else{
    var aeo = ("Preencha todos os campos");
    document.getElementById('mensagem').innerHTML = aeo;
}
}