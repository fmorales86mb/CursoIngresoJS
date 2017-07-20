/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;

function comenzar()
{	
	var colorId;	
	
	tiempoInicio = new Date();	
	colorId = Math.floor(Math.random()*6)+1;	

	switch (colorId)
	{
		case 1:
			ColorSecreto = "azul";
			break;
		case 2:
			ColorSecreto = "amarillo";
			break;
		case 3:
			ColorSecreto = "marrón";
			break;
		case 4:
			ColorSecreto = "verde";
			break;
		case 5:
			ColorSecreto = "celeste";
			break;
		case 6	:
			ColorSecreto = "rojo";
			break;
	}

	document.getElementById('ColorElejido').value = ColorSecreto;
	tiempoInicio = tiempoInicio.getTime();	
}

function Responder(colorParametro)
{
	var tiempoFinal = new Date();
	var diferenciaTiempo = new Date();

	if (colorParametro == ColorSecreto)
	{
		tiempoFinal = tiempoFinal.getTime();
		diferenciaTiempo = (tiempoFinal - tiempoInicio)/1000;
		alert ("Su tiempo fue: "+diferenciaTiempo+" segundos.");
	} else 
	{
		alert ("Inténtelo nuevamente.")
	}	
}
