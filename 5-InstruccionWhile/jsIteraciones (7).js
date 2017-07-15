function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var nro;

	// Ejercicio 
	/*
	while (respuesta == "si"){
		nro = prompt("Ingrese número:");
		nro = parseInt(nro);
		acumulador = acumulador + nro;
		contador = contador + 1;

		respuesta = prompt("Ingrese 'si' para continuar")
	}*/

	var contador = 0;
	var nota;
	var notaMayor;
	var notaMenor;
	
	// Funciona pero repito una línea que se puede evitar.
	
	/*
	nota = prompt("Ingrese nota:");
	notaMenor = nota;
	notaMayor = nota;
	
	while (contador < 2){
		contador++;		
		nota = prompt("Ingrese nota:");

		if (nota > notaMayor) notaMayor = nota;
		else if (nota < notaMenor) notaMenor = nota;		
	}
	*/
	
	// Forma más eficiente.
	
	while (contador < 3){		
		nota = prompt("Ingrese nota:");
		
		if (contador == 0)
		{
			notaMayor = nota;
			notaMenor = nota;
		}		

		else 
		{
			if (nota > notaMayor) notaMayor = nota;
			if (nota < notaMenor) notaMenor = nota;//ver si va o no un else.
		}
		contador++;
	}
	

	console.log(notaMayor);
	console.log(notaMenor);

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN