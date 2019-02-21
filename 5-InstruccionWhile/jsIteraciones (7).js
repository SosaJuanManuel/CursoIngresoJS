function mostrar()
{
	var primerNumero;
	var contador=0;
	var acumulador=0;
	var respuesta ="si";

;	while(respuesta == "si")
	{
		primerNumero=prompt("dime un numero");
		primerNumero=parseInt(primerNumero);
		contador ++;
		acumulador = primerNumero + acumulador;	
		respuesta = prompt("ingrese si para continuar")

	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador

}//FIN DE LA FUNCIÓN