function mostrar()
{
	
	var precio=prompt("digame el precio");
	var descuento=prompt("de cuanto es el descuento?");
	var precioFinal;
	
	precio=parseInt(precio);
	descuento=parseInt(descuento);

	descuento=descuento/100;
	precioFinal=precio*descuento;
	precioFinal=precio - precioFinal;
	elPrecioFinal.value=precioFinal;


}



