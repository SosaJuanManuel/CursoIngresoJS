function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var primerNumero
	
	var respuesta='si';

	while(respuesta == si)
	{
		primerNumero=prompt("ingrese un numero");
		primerNumero=parseInt(primerNumero);
		if(primerNumero<0)
		{
			negativo=negativo * primerNumero
		}
		else
		{
			positivo=positivo+primerNumero
		}
	contador++;
	respuesta=prompt("desea ingresar otro numero?, si para continuar ")
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN