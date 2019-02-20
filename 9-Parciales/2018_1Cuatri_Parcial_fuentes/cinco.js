function mostrar()
{
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
}

