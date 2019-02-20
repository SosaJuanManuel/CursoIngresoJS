function mostrar()
{
	var planeta;

	planeta = prompt("dime un planeta del sistema solar");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
		alert("acá hace más calor");
		break;

		case "tierra":
		alert("acá vivimos");
		break;

		default
		alert("acá hace más frio");
		break;
	}
}
