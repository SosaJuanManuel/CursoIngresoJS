function mostrar()
{
	var sexo;
	var notas;
	var contador=0;
	var promedioNotas;
	var acumulador=0;
	var notaMasBaja;
	var contadorVarones=0;
	var sexoNotaMasBaja;

	notas=parseInt(notas)

	

	while(contador > 5)
	{
		sexo=prompt("ingrese f para femenino y m para masculino");
		notas=prompt("ingrese las notas");
		contador++;
		while(notas  11)
		{
			notas=prompt("ingrese una nota entre 0 y 10")
		}
		while(sexo != "f" || sexo != "m")
		{
			alert("ingrese un sexo valido");
		}	
		if (contador ==1) 
		{
			notaMasBaja = notas;
			sexoNotaMasBaja=sexo;
		}
		if(sexo == "m" && notas >=6)
		{
			contador = contador + 1;
		}
		else
		{
			if(notas<notaMasBaja)
				{
					notaMasBaja=notas;
					sexoNotaMasBaja=sexo;
				}
		}
	}
alert(sexo)
alert(nota)
alert(promedio)
}
