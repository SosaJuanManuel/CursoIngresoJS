function mostrar()
{
//tomo la edad  

	var primerNumero=edad.value;
	var estado=estadoCivil.value;

	primerNumero=parseInt(primerNumero);

	if(primerNumero >= 18 && estado== "Soltero")
		{
			alert("Es soltero y no es menor");
		}



}//FIN DE LA FUNCIÓN