function mostrar()
{

	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = promt("dime un numero");
	segundoNumero = prompt("dime otro numero");

<<<<<<< HEAD
=======
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
>>>>>>> 670305b6de9129e4d8d30921f455d026114ce757

	if(primerNumero == segundoNumero)
	{

<<<<<<< HEAD
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
=======
		alert(primerNumero+ " y " +segundoNumero);

	}
	else
		{

			if(primerNumero > segundoNumero)
			{

				alert(primerNumero - segundoNumero)

			}

			if (primerNumero < segundoNumero)
			{

			alert(primerNumero + segundoNumero)
			
			}

			else
			{

				
				
			}


}
>>>>>>> 670305b6de9129e4d8d30921f455d026114ce757
