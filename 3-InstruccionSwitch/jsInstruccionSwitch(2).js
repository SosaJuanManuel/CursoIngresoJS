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
switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
		mensaje="Abrigate que hace frio.";
		break; 

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		mensaje="Ya pasamos el frio, ahora calor!!!.";
		break;
	

		default
		mensaje="Falta para el invierno.";
		break;
	}
if(mensaje != "")
	{
		alert(mensaje);
	}