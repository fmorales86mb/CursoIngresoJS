/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	// Tomo el dato del tb por el prompt.
	var dato = prompt("Ingrese dato:");
	

	// Muestro el dato por el alert.
	document.getElementById("elNombre").value = dato;
}

