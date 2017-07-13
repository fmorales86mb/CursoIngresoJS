function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	/*
	// Con el conjunto de error.
	while (numero<0 || numero>9){
		alert ("Reingresar");
		numero = prompt("Reingrese un número entre 0 y 10.");		
	}
	*/

	// Negando el conjunto de acierto.
	while (!(numero>=0 && numero<=9)){
		alert ("Reingresar");
		numero = prompt("Reingrese un número entre 0 y 10.");
	}


	alert("bienvenido!");

}//FIN DE LA FUNCIÓN