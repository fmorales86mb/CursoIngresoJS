function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	// Con el conjunto de error.
	while (sexo!="f" && sexo !="m"){
		alert("Reingrese sexo.");
		sexo = prompt("Reingrese f ó m .");		
	}
	
	/*
	// Con el conjunto de acierto.		
	while (!(sexo == "f" || sexo =="m"){
		alert("Reingrese sexo.");
		sexo = prompt("Reingrese f ó m .");		
	}
	*/

	alert("bienvenido");

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN