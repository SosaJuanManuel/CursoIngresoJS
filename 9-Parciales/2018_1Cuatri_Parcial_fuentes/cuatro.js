function mostrar()
/* al realizar una compra, si compra de mas de dos productos se realiza un descuento del 10% y si supero los $2000 se agrega un descuento adicional de 15%, si el pago es con tarjeta y no efectivo al precio final se le agruega un 10% de recargo */
/*
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
	var primerNumero=prompt("digame un numero");
	var segundoNumero=prompt("diga otro numero")
	var resultado;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	if(primerNumero == segundoNumero)
	{
		alert( primerNumero + segundoNumero );
	}
	else
	{
		if (primerNumero > segundoNumero) 
		{
			resultado= primerNumero - segundoNumero;
			alert(resultado);
		}
		else
		{
			resultado=primerNumero + segundoNumero;
			alert(resultado)
			if (resultado > 10)
			{
				alert("el resultado es de "+resultado+" y supero a el 10" );
			}
		}
	}









}