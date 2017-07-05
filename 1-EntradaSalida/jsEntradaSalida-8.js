/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var nro1;
	var nro2;
	var resultado;

	nro1=document.getElementById('numeroDividendo').value;
	nro2=document.getElementById('numeroDivisor').value;
	resultado=parseInt(nro1) % parseInt(nro2);

	alert("El resto es "+resultado);
}
