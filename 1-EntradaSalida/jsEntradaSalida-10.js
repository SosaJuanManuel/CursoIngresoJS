/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var primerNumero;
	var resultado;

	primerNumero = document.getElementById("importe").value;
	resultado = document.getElementById("resultado").value;

	primerNumero = parseInt(primerNumero);
	resultado = (primerNumero * 25 / 100);

	alert("el resultado es:" +resultado);
}
