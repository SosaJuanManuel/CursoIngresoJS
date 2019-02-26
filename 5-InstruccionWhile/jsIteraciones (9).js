function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var numeroAlto=maximo.value;
	var numeroBajo=minimo.value;

	numero=parseInt(numero);
	numeroBajo=parseInt(numeroBajo);
	numeroAlto=parseInt(numeroAlto);

	while(respuesta!='no')
	{
		numero=prompt("ingrese un numero");

		if(numero > numeroAlto)
		{
			numero = numeroAlto;
			alert(numero);
		}
		if(numero < numeroBajo)
		{
			numero=numeroBajo;
			alert(numero);
		}
		respuesta=prompt("quieres ingresar otro numero?")
	}




}//FIN DE LA FUNCIÓN