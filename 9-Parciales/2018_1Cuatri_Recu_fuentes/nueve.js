function mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var respuesta="si";
	var temperaturaPar;
	var pesoPromedio;
	var contadorPeso=0;
	var animalMasPesado;
	var animalMasPesadoTemperatura;
	var animalMasLiviano;
	var animalSubCero=0;
	var promedio=0;
	var pesoPromedio;
	var pesoAnimalSubcero;

	while (respuesta != "no")
	{
		nombre=prompt("introduzca el nombre del animal");
		while(isNaN(nombre==true))
		{
			nombre=prompt("ERROR, ANIMAL NO VALIDO");
		}

		peso=prompt("introduzca el peso del animal");
		peso=parseInt(peso);
		while(isNaN(peso) || peso < 1 || peso > 1000)
		{
			peso=promt("ERROR;PESO INVALIDO");
			peso=parseInt(peso);
		}
		temperatura=prompt("introduzca la temperatura del habitat de dicho animal");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
		{
			temperatura=prompt("ERROR INTRODUZCA UNA TEMPERATURA VALIDA");
			temperatura=parseInt(temperatura);

		}
		if(temperatura%2==0)
		{
			temperaturaPar=temperaturaPar+1;
		}
		if(peso>0)
		{
			animalMasPesado=nombre;
			animalMasPesadoTemperatura= temperatura;
			contadorPeso=contadorPeso+1;
			pesoPromedio= pesoPromedio + peso;

		}
		if(temperatura < 0)
		{	
			animalSubCero = animalSubCero +1;

			if(peso < animalMasPesado)
			{
				animalMasPesado = peso;
			}
			else
			{	
				if(peso > animalMasLiviano)
				{
					animalMasLiviano=peso;
				}
			}

		}		
	respuesta=prompt("quieres introducir otro animal, si o no");
	}
	pesoPromedio= promedio / contadorPeso;

alert("la cantidad de ")

}	
