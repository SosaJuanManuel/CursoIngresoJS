function mostrar()
/* al realizar una compra, si compra de mas de dos productos se realiza un descuento del 10% y si supero los $2000 se agrega un descuento adicional de 15%, si el pago es con tarjeta y no efectivo al precio final se le agruega un 10% de recargo */
{
	var pago;
	var compra;
	var cantidad;
	var metodoPago;

	pago = prompt("digame de cuanto a sido la compra?");
	cantidad = prompt("digame cuantos productos?");
	metodoPago = prompt("inserte 1 para pagos con credito o 2 para pago en efectivo");

	pago = parseInt(pago);
	compra = parseInt(compra);
	cantidad = parseInt(cantidad);

	if(cantidad > 2)
	{
		compra = (pago * 90)/100;

		if(pago > 2000)
		{
			compra = (pago *85) / 100;
		}	
		else
		{
			compra = (pago *90) / 100;
		}
	}
	if(metodoPago == 1)
	{
		compra = (pago *110) / 100;
	}
	alert("el monto a pagar es de: " +compra);

}
