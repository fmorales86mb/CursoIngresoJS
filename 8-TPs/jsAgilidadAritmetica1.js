/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{	
	// Defino variables.
	var nro1;
	var nro2;
	var operacion;
	var simbolo;

	// Genero nros random.
	nro1 = Math.floor(Math.random()*10)+1;
	nro2 = Math.floor(Math.random()*10)+1;
	operacion = Math.floor(Math.random()*4)+1;

	// Lleno tb y defino respuesta.
	document.getElementById('PrimerNumero').value = nro1;
	document.getElementById('SegundoNumero').value = nro2;

	switch (operacion)
	{
		case 1:
			simbolo = "+";
			respuesta = nro1 + nro2;
			break;
		case 2:
			simbolo = "-";
			respuesta = nro1 - nro2;
			break;
		case 3:
			simbolo = "x";
			respuesta = nro1 * nro2;
			break;
		case 4:
			simbolo = "%";
			respuesta = nro1 / nro2;
			break;
	}

	document.getElementById('Operador').value = simbolo;

}

function Responder()
{
	// Defino variables.
	var nroIngresado;

	// Tomo nro ingresado.
	nroIngresado = document.getElementById('Respuesta').value;
	nroIngresado = parseInt(nroIngresado);

	if (nroIngresado == respuesta) alert ("Correcto.");
	else alert ("Incorrecto.");
}
