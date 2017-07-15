function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	/*
	numero = prompt ("Ingrese número:");
	 
	if (numero<0) negativo = numero;
	else positivo = numero;

	var respuesta = prompt ("'Si' si quiere seguir ingresando números:");
	
	while (respuesta =="Si"){
		numero = prompt ("Ingrese número:");

		if (numero < 0) negativo = negativo * numero; 
		else positivo = positivo + numero;
		
		respuesta = prompt ("'Si' si quiere seguir ingresando números:");	
		contador++;
	}
	*/
	respuesta = "si";

	while (respuesta =="si"){
		numero = prompt ("Ingrese número:");
		numero = parseInt(numero);

		if (numero < 0) negativo = negativo * numero; 
		else positivo = positivo + numero;
		
		respuesta = prompt ("'si' si quiere seguir ingresando números:");		
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN