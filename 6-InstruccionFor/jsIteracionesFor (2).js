function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var recorrido;
	numeroIngresado=prompt("dime un numero");
	numeroIngresado=parseInt(numeroIngresado);

for(recorrido=numeroIngresado-1;recorrido>1;recorrido--)
	{
		for(rnumeroAnterior=recorrido-1;numeroAnterior>1;numeroAnterior--)
		{
			console.log(numeroAnterior);
			if(recorrido%numeroIngresado==0)
			{
				break;
			}
		}	
		if(numeroAnterior==1)
		{
			console.log("es primo"+recorrido);
		}
	}	
}	