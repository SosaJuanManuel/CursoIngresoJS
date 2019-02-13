function mostrar()
{

	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = promt("dime un numero");
	segundoNumero = prompt("dime otro numero");


	if(primerNumero == segundoNumero)
	{

		resultado = primerNumero + segundoNumero;

		alert(resultado);

	}

	else
		{

			primerNumero = parseInt(primerNumero);
			segundoNumero = parseInt(segundoNumero);

			if(primerNumero > segundoNumero)
			
			{
			
			resultado = (primerNumero - segundoNumero);

			alert(resultado);
			
			}

		else

			{

			resultado = (primerNumero + segundoNumero) ;

					if (resultado > 10)

				{

						alert ("La suma es " +resultado+ " y supero el 10.") ;

				}

					else 
					{
						
						alert (resultado) ;
					
					}
			}
	}
}