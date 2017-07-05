/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
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