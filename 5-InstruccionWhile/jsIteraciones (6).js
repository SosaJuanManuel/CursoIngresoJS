function mostrar()
{
	var primerNumero;
	var contador=0;
	var acumulador=0;
	while(contador <5)
	{
		primerNumero=prompt("primerNumero");
		primerNumero=parseInt("primerNumero");
		contador=primerNumero+contador
		contador++
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN