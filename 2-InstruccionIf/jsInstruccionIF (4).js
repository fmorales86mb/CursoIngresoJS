function Mostrar()
{
//tomo la edad 
	 var edad;

	 edad=document.getElementById('edad').value;

	 if (edad>12){
	 	if (edad<18){
	 		alert("Adolecente");
	 	}
	 }

	 // Otra manera
	 /*
	 if (edad>12 && edad<18){
	 	alert("Adolecente");
	 }
	 */
}//FIN DE LA FUNCIÓN