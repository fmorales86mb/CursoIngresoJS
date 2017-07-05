/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var nro1;
	var nro2;
	var resultado;

	nro1=document.getElementById('numeroUno').value;
	nro2=document.getElementById('numeroDos').value;
	resultado=parseInt(nro1) + parseInt(nro2);

	alert("La suma es "+resultado);
}

function restar()
{
	var nro1;
	var nro2;
	var resultado;

	nro1=document.getElementById('numeroUno').value;
	nro2=document.getElementById('numeroDos').value;
	resultado=parseInt(nro1) - parseInt(nro2);

	alert("La resta es "+resultado);
}

function multiplicar()
{ 
	var nro1;
	var nro2;
	var resultado;

	nro1=document.getElementById('numeroUno').value;
	nro2=document.getElementById('numeroDos').value;
	resultado=parseInt(nro1) * parseInt(nro2);

	alert("La multiplicación es "+resultado);
}

function dividir()
{
	var nro1;
	var nro2;
	var resultado;

	nro1=document.getElementById('numeroUno').value;
	nro2=document.getElementById('numeroDos').value;
	resultado=parseInt(nro1) / parseInt(nro2);

	alert("La división es "+resultado);
}

