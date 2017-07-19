/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
	if (nroIngresado == numeroSecreto) 
	{	
		switch (contadorIntentos)
		{
			case 1:
				respuesta = "usted es un Psíquico";
				break;
			case 2:
				respuesta = "excelente percepción";
				break;
			case 3:
				respuesta = "Esto es suerte";
				break;
			case 4:
				respuesta = "Excelente técnica";
				break;
			case 5:
				respuesta = "usted está en la media";
				break;
			case 6:				
			case 7:
			case 8:
			case 9:
			case 10:
				respuesta = "falta técnica";
				break;
			default:
				respuesta = "afortunado en el amor!!";				
		}
	} 

	else if (nroIngresado < numeroSecreto) respuesta = "falta..";
	else respuesta = "se pasó.."

	// Devuelvo respuesta.
	alert(respuesta);
}