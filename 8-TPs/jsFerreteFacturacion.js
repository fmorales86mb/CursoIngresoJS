/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var Nro1;
var Nro2;
var Nro3;
var Resultado;

function Sumar () 
{
	Nro1 = document.getElementById('PrecioUno').value;
	Nro2 = document.getElementById('PrecioDos').value;
	Nro3 = document.getElementById('PrecioTres').value;

	Resultado = parseInt(Nro1) + parseInt(Nro2) + parseInt(Nro3);
	alert(Resultado);
}
function Promedio () 
{
	Nro1 = document.getElementById('PrecioUno').value;
	Nro2 = document.getElementById('PrecioDos').value;
	Nro3 = document.getElementById('PrecioTres').value;

	Resultado = (parseInt(Nro1) + parseInt(Nro2) + parseInt(Nro3))/3;
	alert(Resultado);
}
function PrecioFinal () 
{
	Nro1 = document.getElementById('PrecioUno').value;
	Nro2 = document.getElementById('PrecioDos').value;
	Nro3 = document.getElementById('PrecioTres').value;

	Resultado = (parseInt(Nro1) + parseInt(Nro2) + parseInt(Nro3))*1.21;
	alert(Resultado);
}