function mostrar()
{
	var ingreso;
	var letra;
	var numero;
	var respuesta="si";
	var contador = 0;
	var promedio;
	var acumulador=0;
	var promedio = 0;
	var sexo;
	var cantidadVarones = 0;
	var notaBaja = 11;
	var sexoBajo;
	isNaN()

		ingreso = prompt("Ingrese un numero");
		ingreso = parseInt(ingreso);
	while(respuesta=="si")
		{ 
			while(isNaN(ingreso)==true || ingreso < -100 || ingreso > 100)
			{
				ingreso = prompt("ERROR, ingese un numero");
				ingreso = parseInt(ingreso);
				letra=prompt("ingrese una letra");
			}
			while(isNaN(letra)== false)
			{
				letra=prompt("ERROR, ingrese una letra");
				respuesta= ("Desea ingresar otro numero? si para continuar, no para detener");
			}
			
		}
}
