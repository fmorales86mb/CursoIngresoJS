function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var max;
	var min;

	var respuesta='si';

	while(respuesta!='no')
	{
		numero = prompt ("Ingrese numero:");
		numero = parseInt (numero);

		if (contador == 0)
		{
			max = numero;
			min = numero;
		}
		else
		{
			if (numero > max) max = numero;
			else if (numero < min) min = numero;
			//if (numero < min) min = numero;
		}
		
		respuesta = prompt("'no' para salir.");
		contador++;
	}

	document.getElementById('maximo').value = max;
	document.getElementById('minimo').value = min;

}//FIN DE LA FUNCIÓN