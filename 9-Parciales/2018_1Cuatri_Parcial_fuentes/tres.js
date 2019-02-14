function mostrar()
{

	var precio;
	var descuento;
	var resultado;

	precio = prompt("cual es el precio?");
	descuento = prompt("de cuanto es el decuento?");

	precio = parseInt(precio);
	descuento =parseInt(descuento);
	resultado = parseInt(resultado);

	resultado = (precio * descuento) / 100;

	elPrecioFinal.value = resultado

	alert(precio - resultado);

	elPrecioFinal.value


}


