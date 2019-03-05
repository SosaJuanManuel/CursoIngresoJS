function mostrar()
{
//tomo la edad  

	var primerNumero=edad.value;

	primerNumero=parseInt(primerNumero);

	if (primerNumero >= 18) 
	{
		alert("usted es mayor de edad");
	}
	else
		if (primerNumero >= 13 && primerNumero <=17) 
		{
			alert("usted es un adolescente");
		}
		else
		{
			alert("usted es un niño");
		}


}//FIN DE LA FUNCIÓN