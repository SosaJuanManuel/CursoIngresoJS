function mostrar()
{
	var primerNumero;
	var contador=0;
	var acumulador=0;
	while(contador < 5)
	{
		primerNumero=prompt("dime un numero");
		primerNumero=parseInt(primerNumero);
		contador ++;
		acumulador = primerNumero + acumulador;
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN