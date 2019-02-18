function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje = ""	

switch(mesDelAño)
{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		alert("falta para el invierno");
		break;

		case "Junio":
		case "Julio":
		case "Agosto":
		alert("Abrigate que hace frio.");
		default:
		alert( "Este mes tiene 30 o más días");
		break;
}	
if (mensaje != "") 
	{
		alert(mensaje);
	}


}//FIN DE LA FUNCIÓN