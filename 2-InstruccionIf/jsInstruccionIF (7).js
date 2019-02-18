function mostrar()
{
//tomo la edad  

	
	var primerNumero;
	var estado;

	primerNumero = edad.value;
	estado = estadoCivil.value;

	primerNumero = parseInt(primerNumero);

	if (primerNumero < 17 && estado != "Soltero") 
	
	{

		alert("usted es muy pequeño para no ser Soltero");

	}




}//FIN DE LA FUNCIÓN