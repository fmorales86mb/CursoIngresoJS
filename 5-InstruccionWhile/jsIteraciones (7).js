function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var nro;

	while (respuesta == "si"){
		nro = prompt("Ingrese número:");
		nro = parseInt(nro);
		acumulador = acumulador + nro;
		contador = contador + 1;

		respuesta = prompt("Ingrese 'si' para continuar")
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN