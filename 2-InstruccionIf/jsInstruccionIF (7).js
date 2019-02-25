function mostrar()
{
//tomo la edad  

	
	var primerNumero=edad.value;
	var estado=estadoCivil.value;

	primerNumero=parseInt(primerNumero);

	if (primerNumero <=17&& estado !="Soltero")
	{ 
		alert("Es muy pequeño para NO ser soltero")
	}
}//FIN DE LA FUNCIÓN