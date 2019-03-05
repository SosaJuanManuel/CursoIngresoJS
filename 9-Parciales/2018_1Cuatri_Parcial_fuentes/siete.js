function mostrar()
{
	/*var nota;
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
	alert("la cantidad de varones cuya nota es mayor o igual a 6 es de "+cantidadVarones);*/


	var numero;
	var sexo;
	var contador=0 ;
	var promedio ;
	var acumulador= 0;
	var notaMasBaja ;
	var sexoNotaBaja ;
	var contadorVarones=0 ;

	isNaN();

	while (contador < 5)
	{
		contador++;
	
		numero = prompt ("Ingrese nota entre 0 y 10.") ;
		numero = parseInt (numero) ;
		while (isNaN(numero) ==true || numero < 0 || numero > 10)
		//isNaN(numero)==false
		{
			numero = prompt ("error ,reingrese una nota valida entre 0 y 10.") ;
			numero = parseInt (numero) ;
		}

		sexo = prompt ("Ingrese f ó m .");
		while (isNaN(numero) ==true ||  sexo != "f" && sexo != "m")
		// !isNaN(numero)==true
		{
			sexo = prompt ("error ,reingrese un sexo válido, f ó m.") ;
		}
		if (contador==1)
		{
			notaMasBaja = numero ;
			sexoNotaBaja = sexo ;
		}
		else
		{
			if (numero<notaMasBaja)
			{
				notaMasBaja = numero ;
				sexoNotaBaja = sexo ;
			}
		}

		if (sexo == "m" && numero >= 6)
		{
			contadorVarones = contadorVarones + 1 ;
		}

		
		acumulador = acumulador + numero ;
	}
	
	
	
	promedio = acumulador / 5 ;

	alert ("El promedio de las notas totales es: " +promedio) ;
	alert ("La nota mas baja es " +notaMasBaja+ " y el sexo de esa persona es: " +sexoNotaBaja) ;
	alert ("Cantidad de varones que su nota fue mayor o igual a 6 es: " +contadorVarones) ;

}
