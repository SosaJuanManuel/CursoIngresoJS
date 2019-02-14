function mostrar()
{
	var precio;
	var recargo;
	var preciofinal;

	precio = prompt("cual es el precio en efectivo?");

	precio = parseInt(precio);

	recargo = parseInt(recargo);

	preciofinal = parseInt (preciofinal);

	recargo = (precio *10/100);

	preciofinal = precio + recargo;

	alert("el precio del producto es:$ "+precio+" , con tarjeta tiene un recargo del 10 % que seria $"+recargo+" de recargo, costandole final "+precio final);


}
