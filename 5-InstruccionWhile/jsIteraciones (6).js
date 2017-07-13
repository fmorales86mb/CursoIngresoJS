function Mostrar()
{

	var contador=0; // tiene esta forma "contador = contador + 1"
	var acumulador=0; // tiene esta forma "acumulador = acumulador + variable"
	var nro;

	while (contador<5){
		nro=prompt("Ingrese el "+(contador+1)+"º número:");
		nro=parseInt(nro);
		acumulador=acumulador+nro;
		contador=contador+1;
	}
		
	/*
	// Si no hay nada dentro del while da error.
	var bool= true;
	while (bool){
		console.log("Hola.");
		
		
		// Con break salgo del while y no ejecuto lo que está debajo.
		//break;  
		//console.log("Chau."); 
		

		// De esta manera sí se ejecuta el "chau" y luego sale del while.
		bool = false;
		console.log("Chau."); 
	}
	*/

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5; // acà en vez de 5 puedo poner al contador.

}//FIN DE LA FUNCIÓN