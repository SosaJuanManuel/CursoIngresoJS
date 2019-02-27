function mostrar()
{

	var elNumero = prompt("ingrese un número entre 0 y 9");

	elNumero=parseInt(elNumero)

	while(elNumero <0 || elNumero < 9)
	{
		elNumero=prompt("por favor, ingrese un numero entre 0 y 9");
	}	

	elNumero=Numero.value;
}//FIN DE LA FUNCIÓN