function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
	
	// El case funciona como compuerta. Se ejecuta desde donde entra hasta el break.
	// Si por ej el case entra en Febrero, puedo agregar codigo que se ejecuta y luego se ejecuta el alert en Junio terminando en el break.
	switch (mesDelAño){
		case "Enero":
			
		case "Febrero":
			
		case "Marzo":
			
		case "Abril":
			
		case "Mayo":
			
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio":
			
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
			
		case "Octubre":
			
		case "Noviembre":
			
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break
	}
//alert (mesDelAño);

}//FIN DE LA FUNCIÓN