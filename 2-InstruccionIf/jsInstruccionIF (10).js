function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	// round me redondea el nro.
	// random me da un nro del [0 al 1)
	nota = Math.round(Math.random()*10);
	
	if (nota >= 9){
		alert(nota + " EXELENTE");	
	} else if (nota >= 4){
		alert(nota + " APROBÓ");	
	} else {
		alert(nota + " Vamos, la próxima se puede.");	
	}

}//FIN DE LA FUNCIÓN