/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var primerNumero=numeroDividendo.value;
	var segundoNumero=numeroDivisor.value;
	var numeroResto;


	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
	numeroResto=(primerNumero%segundoNumero);

	alert(numeroResto);




}


