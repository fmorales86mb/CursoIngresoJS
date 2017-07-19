/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	// Limpio tb.
	document.getElementById('numero').value = "";
	document.getElementById('intentos').value = "";

	// Receteo contador.
	contadorIntentos = 0;

	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random()*100)+1;
	console.log(numeroSecreto); 	
}

function verificar()
{	
	// Defino variables
	var nroIngresado;
	var respuesta;

	// Tomo el nro ingresado.
	nroIngresado = document.getElementById('numero').value;
	nroIngresado = parseInt (nroIngresado);	
	
	// Actualizo contador y lo muestro.
	contadorIntentos++;
	document.getElementById('intentos').value = contadorIntentos;

	// Comparo y resuelvo.
	if (nroIngresado == numeroSecreto) respuesta = "Usted es un ganador!!! y en solo " + contadorIntentos + " intentos";
	else if (nroIngresado < numeroSecreto) respuesta = "falta...";
	else respuesta = "se pasó...";

	// Devuelvo respuesta.
	alert(respuesta);
}	