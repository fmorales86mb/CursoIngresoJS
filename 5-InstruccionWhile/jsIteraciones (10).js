function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	/*
	Ejemplo de obtención, validación y extracción de información. De esta encuesta
	se debe informar:
	1) Cuántas mujeres y cuántos hombres fueron entrevistados.
	2) La persona de mayor edad.
	3) El promedio de edad.
	4) Quién ganará las elecciones.
	5) Informar cuántas mujeres mayores de edad hay.
	6) Informar cuántos hombres menores a 30 años hay.
	7) Informar la altura del hombre que menos edad tiene.
	8) Informar cuántos hombres votaron a "otro".
	9) De las mujeres informar cuantas votaron a "op".
	10) Cuántas personas de 50 años votaron.
	11) Cuántas personas de 50 años eran mujeres.
	12) Cuántas mujeres de 50 años, de más de un metro votaron al "gob".
	*/

	var sexo;
	var edad;
	var cantM = 0;
	var cantF = 0;
	var edadMayor = 0;
	var acumulador = 0;
	var voto;
	var gob;
	var op;
	var otro;

	while(respuesta!="no")
	{
		// Punto 1)
		sexo = prompt("'m' masculino; 'f' femenino:");
		
		// Validación:
		while(sexo!="m" && sexo!="f")
		{
			sexo = prompt("'m' masculino; 'f' femenino:");	
		}

		if (sexo == "m") cantM ++;
		else cantF ++;

		// Punto 2)
		edad = prompt("Ingrese la edad:");
		edad = parseInt(edad);
		
		// Validación:
		while (edad<0 || edad>100)
		{
			edad = prompt("Ingrese la edad:");
			edad = parseInt(edad);
		}

		// Max
		if (edad > edadMayor) edadMayor = edad;

		// Punto 3)

		// Sumo las edades para luego hacer el promedio
		acumulador = acumulador + edad;

		// Punto 4)
		voto = prompt("¿A quién va a votar?");

		// Valido
		while (voto != "gob" && voto != "op" && voto != "otro")
		{
			voto = prompt("¿A quién va a votar?");			
		}
		
		switch (voto)
		{
			case "gob":
				gob++;
				break;
			case "op":
				op++;
				break
			case "otro":
				otro++;
				break;
		}
		
		respuesta = prompt("Continuar?");
	}

	alert ("La cantidad de mujeres fue " + f + " y la de hombres" + m);

}//FIN DE LA FUNCIÓN