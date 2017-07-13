function Mostrar()
{
	// PASOS PARA VALIDACIÓN DE DATOS:
	
	// Tomo el dato. 
	var clave = prompt("ingrese el número clave.");

	// Lo valido con el while. Entra si es erroneo el dato.
	while (clave != "utn750"){		
		alert("Reingrese");
		// Modifico la variable del while.
		clave = prompt("Reingrese el número clave.");
	}

	alert ("Bienvenido");

}//FIN DE LA FUNCIÓN
