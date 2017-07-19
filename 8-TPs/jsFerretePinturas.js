/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var Temperatura;
var Conversion;
function FahrenheitCentigrados () 
{
	Temperatura =  document.getElementById('Temperatura').value;
	Conversion = parseInt (Temperatura) - 32;
	alert (Conversion);
}

function CentigradosFahrenheit () 
{
	Temperatura =  document.getElementById('Temperatura').value;
	Conversion = parseInt (Temperatura) + 32;
	alert (Conversion);	
}
