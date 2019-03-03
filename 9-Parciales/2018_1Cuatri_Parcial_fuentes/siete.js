function mostrar()
{
	/*var nota;
	var sexo;
	var promedio=0;
	var sexoNotaMasBaja;
	var notaMasBaja=11;
	var contador;
	var cantidadVarones=0;

	for(contador=0;contador<5;contador++)
	{
		nota=prompt("ingrese la nota")
		nota=parseInt(nota);

		while(isNaN(nota) || nota<0 || nota>10)
		{
			nota=prompt("ERROR, NOTA INVALIDA, re ingrese una nota");
			nota=parseInt(nota);
		}

		sexo=prompt("ingrese un sexo");
		while(sexo != "f" && sexo != "m")
		{
			sexo=prompt("ERROR, ingrese un sexo valido");
		}
		promedio=promedio+notas;

		if(sexo="m" && nota >= 6)
		{
			cantidadVarones=cantidadVarones+1;
		}
		if(nota < notaMasBaja)
		{
			nota=notaMasBaja;
			sexo=sexoNotaMasBaja;
		}
	}
	if (sexoNotaMasBaja = "m") 
	{
		sexoNotaMasBaja="masculino";
	}
	else
	{
		sexoNotaMasBaja="femenino";
	}
	promedio=promedio/5;

	alert("el promedio es de "+promedio);
	alert("la nota mas baja es "+notaMasBaja+" y el sexo es "+sexoNotaMasBaja);
	alert("la cantidad de varones cuya nota es mayor o igual a 6 es de "+cantidadVarones);*/

	var nota;
	var sexo;
	var contador;
	var promedio=0;
	var sexoBajo;
	var notaMasBaja=11;
	var cantidadVarones=0;

	for(contador=0;contador<5;contador++)
	{
		nota=prompt("ingrese una nota");
		nota=parseInt(nota);

		while(isNaN(nota) || nota<0 || nota >10)
		{
			nota=prompt("ERROR, nota invalida");
			nota=parseInt(nota);
		}
		sexo=prompt("ingrese el sexo, f o m");
		while(sexo !="f" && sexo!= "m")
		{
			sexo=prompt("ERROR,ingrese un sexo valido")
		}	
		promedio=promedio+nota;
		if(sexo="m" && nota >=6)
		{
			cantidadVarones=cantidadVarones+1;
		}
		if(nota<notaMasBaja)
		{
			notaMasBaja=nota;
			sexo=sexoBajo;
		}
	}
	if(sexoNotaMasBaja= "m")
	{
	sexoNotaMasBaja="masculino";
	}
	else
	{
		sexoNotaMasBaja="femenino"
	}
	promedio=promedio/5
	alert("el promedio es de "+promedio);
	alert("la nota mas baja es "+notaMasBaja+" y el sexo es "+sexoNotaMasBaja);
	alert("la cantidad de varones cuya nota es mayor o igual a 6 es de "+cantidadVarones);
}
