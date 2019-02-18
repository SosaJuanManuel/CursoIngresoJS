function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Enero":
		case "Diciembre":
		alert("este mes tiene 31 dias");
		break;
		
		case "Febrero":
		alert("este mes tiene 28 dias");
		break;

		/* asi no esta mal pero con default(que funciona como else) se ahorra mas procesador
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Novimebre":
		alert("este mes tiene 30 dias");
		break;*/

	default:
	alert("este mes tiene 30 dias");
		break;



	}
	



}//FIN DE LA FUNCIÓN