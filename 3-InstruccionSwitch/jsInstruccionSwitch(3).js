function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert("Este mes tiene 30 dias");
		break;
		case "Febrero":
		alert(" Este mes no tiene más de 29 días.");
		break;
		default:
		alert( "Este mes tiene 31 o más días")
		break;
	}

	


}//FIN DE LA FUNCIÓN