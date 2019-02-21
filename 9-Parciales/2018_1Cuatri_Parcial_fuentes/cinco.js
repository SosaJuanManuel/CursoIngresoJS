function mostrar()
/*{
	var planeta=prompt("dime un planeta del sistema solar");
	mensaje = "";
	switch(planeta)
	{
		case "mercurio":
		case "venus":
		mensaje="acá hace más calor";
		break;

		case "tierra":
		mensaje= "acá vivimos";
		break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		mensaje="acá hace más frio";
		break;

		default
		mensaje="no es un planeta valido";
		break;
	}
	alert(mensaje);
}*/

{//cada habitacion de un hotel tiene un precio hay promociones segun el tipo de pago si es con visa 10% si es con paypal 15 con mpercado pago 10, efectivo 20 cualquier otro medio solo 5
	si compraste el paquete"todo incluido" y pagas con paypal se te suma 10 al descuento
	si pagas en efectivo tenees varias opciiones de paquete "solodesayunos" te suma 10 al descuento, si el paquete es "todoincliodo" te suma un 15 y para el resto de los paquetes no tiene descuento adicional

	var precio
	var descuento
	var metodoPago
	var precioFinal
	var paquete
	var mensaje

	precio=prompt("de cuanto estamos hablando?");
	metodoPago=prompt("diga su metodo de pago,1 para visa, 2 para paypal, 3 para mercado pago, 4 si es en efectivo y 0 si fue con otro metodo");
	paquete=prompt("a comprado alguna promocion? a para todoIncluido, b para soloDesayunos y c para otros");

	precio = parseInt(precio);
	precioFinal = parseInt(precioFinal);
	descuento = parseInt(descuento);

	switch(metodoPago)
	{
		case "1":
		case "3":
		precioFinal=precio*0,9;
		break;

		case "2":
		switch(paquete)
		{case "a":
			precioFinal=precio*0,75;
			break;
	  	}
		precioFinal=precio*0,85;
		break;

		case "4":
		precioFinal=precio*0,8;
		switch(paquete)
		{
			case "a":
			precioFinal=precio*0,65
			break;

			case "b":
			precioFinal=precio*0,7;
			break;
		}
		break;

		default:
		precioFinal=precio*0,95
		break;
		
		switch(paquete)
		{
			default:
			precioFinal=precio;
			break;
		}
		break;
	}
}


