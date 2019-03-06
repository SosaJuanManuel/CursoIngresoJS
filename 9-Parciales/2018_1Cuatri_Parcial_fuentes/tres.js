function mostrar()
{
	

	var precio=prompt("digame el precio");
	var descuento=prompt("de cuanto es el descuento?");
	var precioDescuento;

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	descuento=descuento/100;
	precioDescuento=precio*descuento;
	precioDescuento=precio-precioDescuento;
	elPrecioFinal.value=precioDescuento;

}



