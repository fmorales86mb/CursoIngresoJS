function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
	
	// Caso sin usar default.
	/*
	switch (mesDelAño){
		
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
		case "Marzo":
			
		case "Abril":
			
		case "Mayo":
			
		case "Junio":
			
		case "Julio":
			
		case "Agosto":
			
		case "Septiembre":
			
		case "Octubre":
			
		case "Noviembre":
			
		case "Diciembre":
			
		case "Enero":
			alert("Este mes tiene 30 o más días");
			break
	}
	*/

	// Caso con default
	switch (mesDelAño){
		
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");
			// En este caso no hace falta usar el break ya que luego termina el switch.			
	}

//alert (mesDelAño);
	
}//FIN DE LA FUNCIÓN