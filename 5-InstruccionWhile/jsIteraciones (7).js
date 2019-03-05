function mostrar()
{
	var primerNumero;
	var contador=0;
	var acumulador=0;
	var respuesta ="si";

	while(respuesta =="si")
	{
		primerNumero=prompt("ingrese un Numero");
		primerNumero=parseInt(primerNumero);
		contador=primerNumero+contador
		contador++
		respuesta=prompt("desea continuar?");
		
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador

}//FIN DE LA FUNCIÓN