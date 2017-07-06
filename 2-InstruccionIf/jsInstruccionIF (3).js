function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;

	if (edad>17){
		alert("Mayor de edad");
	} 
	else{
		alert("Menor de edad");
	}
}//FIN DE LA FUNCIÓN