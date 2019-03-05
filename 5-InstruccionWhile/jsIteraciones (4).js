function mostrar()
{

	var primerNumero=prompt("ingrese un numero del 0 al 9");

	var primerNumero=parseInt(primerNumero);

	while(isNan(primerNumero) || primerNumero <0 || primerNumero > 9)
	{
		primerNumero=prompt("NUMERO INVALIDO, vuelva a intentar");
		primerNumero=parseInt(primerNumero);
	}
	getElementById(Numero).value=primerNumero;

}//FIN DE LA FUNCIÓN