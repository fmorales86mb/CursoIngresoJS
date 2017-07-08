function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	// Utilizando el if.
	/*
	if (mesDelAño == "Enero"){
		alert("que comiences bien el año!!!.");
	} else if(mesDelAño=="Marzo"){
		alert("a clases!!!.");
	} else if(mesDelAño=="Julio"){
		alert("se vienen las vacaciones!!!.");
	} else if (mesDelAño == "Diciembre"){
		alert("Felices fiesta!!!.");
	}
	*/

	// Utilizando el switch.
	switch (mesDelAño){
		case "Enero":
			// Code block
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break
	}

	// El switch viene a reemplazar determinado caso de if en 
	// donde recibimos una variable y sabemos qué valores puede tener.
	// Dentro del Code block puedo anidar lógica, if y otro switch.

}//FIN DE LA FUNCIÓN