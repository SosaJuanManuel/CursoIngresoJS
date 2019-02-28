var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

{
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina)
	{
		case 1:
		mensaje="usted empato"
		ContadorDeEmpates++;
		break;
		case 2:
		mensaje="usted perdio"
		ContadorDePerdidas++;
		break;
		case 3:
		mensaje="usted gano"
		ContadorDeGanadas++;
		break;
	}
alert(mensaje);
}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina)
	{ 
		case 1:
		mensaje="usted gano"
		break;
		case 2:
		mensaje="usted empato"
		break;
		case 3:
		mensaje="usted perdio"
		break;
	}	
alert(mensaje);
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina)
	{ 
		case 1:
		mensaje="usted perdio"
		break;
		case 2:
		mensaje="usted gano"
		break;
		case 3:
		mensaje="usted empato"
		break;
	}	
alert(mensaje);
}