function mostrar()
/* al realizar una compra, si compra de mas de dos productos se realiza un descuento del 10% y si supero los $2000 se agrega un descuento adicional de 15%, si el pago es con tarjeta y no efectivo al precio final se le agruega un 10% de recargo */
{/*
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = prompt("por favor, dime un numero");
	segundoNumero = prompt("dime otro numero");

	if(primerNumero == segundoNumero)
	 {
	 	alert(primerNumero + segundoNumero);
	 }
	 else
		{
			if(primerNumero > segundoNumero)
			{
				resultado = primerNumero - segundoNumero;
				alert(resultado);
			}
			else
				{
					resultado = primerNumero + segundoNumero;
					alert(resultado);	
						if(resultado > 10)
						{		
						alert("la suma es "+resultado+" y supero el 10");
						}
				}	
		}
}*/

{
	var primerNumero;
	var segundoNumero;
	var tercerNumero;
	var cuartoNumero;
	var precioFinal;
	var descuento;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	tercerNumero = parseInt(tercerNumero);
	cuartoNumero = parseInt(cuartoNumero);
	precioFinal = parseInt(precioFinal);
	descuento = parseInt(descuento);

	primerNumero = prompt("digame el primer importe");
	segundoNumero = prompt("digame el segundo importe");
	tercerNumero = prompt("digame el tercer importe");
	cuartoNumero = prompt("digame el cuarto importe");

	precioFinal = primerNumero + segundoNumero + tercerNumero + cuartoNumero;

if (primerNumero >= segundoNumero) 
	{	
		alert(primerNumero);
	}
else
	{
		if(segundoNumero >= tercerNumero)
		{
			alert(segundoNumero);
		}
		if(tercerNumero >= cuartoNumero)
		{
			alert(tercerNumero);
		}
		else
		{
			alert(cuartoNumero);
		}	
	}	
if(precio Final > 100)
	{	
		descuento = precioFinal*0,9;
		alert(descuento);
	}
	else
		{if(precioFinal < 50)
			{
				descuento= precioFinal*0,95;
				alert(descuento);
			 }
			 else
			 {
			 	descuento = precioFinal*1,15;
			 	alert(descuento);
			 }
		}	 
}