/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;


	primerNumero =numeroUno.value;
	segundoNumero =numeroDos.value;

	primerNumero =parseInt(primerNumero);
	segundoNumero =parseInt(segundoNumero);

	alert((primerNumero) + (segundoNumero));



}


function restar()
{
	var primerNumero
	var segundoNumero


primerNumero =numeroUno.value;
	segundoNumero =numeroDos.value;

	primerNumero =parseInt(primerNumero);
	segundoNumero =parseInt(segundoNumero);

	alert((primerNumero) - (segundoNumero));



}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;

	
	primerNumero =numeroUno.value;
	segundoNumero =numeroDos.value;

	alert((primerNumero) * (segundoNumero));

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);


}

function dividir()
{
	
	var primerNumero;
	var segundoNumero;

	
	primerNumero =numeroUno.value;
	segundoNumero =numeroDos.value;

	alert((primerNumero) / (segundoNumero));

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);


}

