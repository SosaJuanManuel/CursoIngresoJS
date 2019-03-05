/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero=numeroUno.value;
	var segundoNumero=numeroDos.value;
	var resultado;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero + segundoNumero;

	alert("la suma es de: "+resultado);




	//*tambien se puede agregar valor escribiendo primerNumero = getelementbyId(numeroUno).value;





	}








