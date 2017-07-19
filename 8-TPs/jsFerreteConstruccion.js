/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var Largo;
var Ancho;
var Radio;
var Resultado;

function Rectangulo () 
{
	var perimetro;

	Largo = document.getElementById('Largo').value;
	Ancho = document.getElementById('Ancho').value;
	
	perimetro = (parseInt(Largo) + parseInt(Ancho)) * 2;
	Resultado = perimetro * 3;

	alert("Cantidad de alambre: " + Resultado);
}
function Circulo () 
{
	var perimetro;	
	
	Radio = document.getElementById('Radio').value;

	perimetro = 2 * Math.PI * parseInt(Radio);
	Resultado = perimetro * 3;

	alert("Cantidad de alambre: " + Resultado);	
}
function Materiales () 
{
	var areaRectangulo;
	var areaCirculo;
	var respuesta;
	var cemento;
	var cal;

	Largo = document.getElementById('Largo').value;
	Ancho = document.getElementById('Ancho').value;
	Radio = document.getElementById('Radio').value;
	
	if (Largo != "" && Ancho != ""){
		areaRectangulo = parseInt(Largo) * parseInt(Ancho);
		cemento = areaRectangulo * 2;
		cal = areaRectangulo * 3;
		respuesta = "Para el terreno rectangular se requieren: " + cemento + " bosas de cemento y " + cal + " bolsas de cal. ";
		
		if (Radio != ""){
			areaCirculo = (Math.PI * parseInt(Radio)) ^ 2;
			cemento = areaCirculo * 2;
			cal = areaCirculo * 3;
			respuesta += "Para el terreno circular se requieren: " + cemento + " bosas de cemento y " + cal + " bolsas de cal. ";
		}
	
	} else if (Radio != ""){
			areaCirculo = (Math.PI * parseInt(Radio)) ^ 2;
			cemento = areaCirculo * 2;
			cal = areaCirculo * 3;
			respuesta = "Para el terreno circular se requieren: " + cemento + " bosas de cemento y " + cal + " bolsas de cal. ";
	
	} else {
		respuesta = "Faltan ingresar datos.";
	}

	alert (respuesta);
}