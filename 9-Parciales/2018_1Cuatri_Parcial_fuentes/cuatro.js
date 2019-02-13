function mostrar()
{

	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = promt("dime un numero");
	segundoNumero = prompt("dime otro numero");

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	if(primerNumero == segundoNumero)
	{

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
