function mostrar()
{

var repetciones = prompt("ingrese el número de repeticiones");

	var numeroIngresado;
	var numeroAnterior;
	var acumulador=0;
	var recorrido;

	numeroIngresado=prompt("dime un numero");
	numeroIngresado=parseInt(numeroIngresado);

for(recorrido=numeroIngresado-1;recorrido>1;recorrido--)
	{
		for(numeroAnterior=recorrido-1;numeroAnterior>0;numeroAnterior--)
		{
			console.log(numeroAnterior);
			if(numeroAnterior%numeroIngresado==0)
			{
				acumulador+numeroAnterior=acumulador;
			}
		}	
		if(acumulador==numeroIngresado)
		{
			console.log("es perfecto "+numeroIngresado);
		}
	}	
}	
//FIN DE LA FUNCIÓN, puta, va haber que rehacerlo, no te olvides.