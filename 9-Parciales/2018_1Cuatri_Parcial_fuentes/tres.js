function mostrar()
{
	
	var precio=prompt("dime el precio");
	var descuento=prompt("dime de cuanto es el desceunto");
	var precioDescuento=elPrecioFinal.value;

	precio=parseInt(precio);
	descuento=parseInt(descuento);
	precioDescuento=parseInt(precioDescuento);

	descuento=descuento/100;
	precioDescuento=precio*descuento
	precioDescuento=precio-precioDescuento
	alert(precioDescuento)




}



