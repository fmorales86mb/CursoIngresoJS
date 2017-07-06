function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;

	// Forma de resolver el problema con mayor perfonrmance. 
	// Se utiliza al procesador a lo sumo dos veces. Como min una.

	if (edad<13){
		alert("Niño/a");
	}
	else{
		if (edad>17){
			alert("Mayor de edad");
		}else{
			alert("Adolescente");
		}
	}
}//FIN DE LA FUNCIÓN