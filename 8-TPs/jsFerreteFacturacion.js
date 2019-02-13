/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
	var primerNumero ;
	var segundoNumero ;
	var tercerNumero ;
	var resultado ;


	primerNumero = primerNumero.value;
	segundoNumero = segundoNumero.value ;
	tercerNumero = tercerNumero.value ;

	primerNumero = parseInt(primerNumero) ;
	segundoNumero = parseInt(segundoNumero) ;
	tercerNumero = parseInt(tercerNumero) ;

	resultado = primerNumero + segundoNumero + tercerNumero;

	alert("la suma es de " + resultado);
	
}
function Promedio () 
{
	
		
	var primerNumero ;
	var segundoNumero ;
	var tercerNumero ;
	var resultado ;


	primerNumero = primerNumero.value;
	segundoNumero = segundoNumero.value ;
	tercerNumero = tercerNumero.value ;

	primerNumero = parseInt(primerNumero) ;
	segundoNumero = parseInt(segundoNumero) ;
	tercerNumero = parseInt(tercerNumero) ;

	resultado = (primerNumero + segundoNumero + tercerNumero) / 3;

	alert("El promedio es de " + resultado);
	



}
function PrecioFinal () 
{
		
	var primerNumero ;
	var segundoNumero ;
	var tercerNumero ;
	var cuartoNumero;
	var resultado ;


	primerNumero = primerNumero.value;
	segundoNumero = segundoNumero.value ;
	tercerNumero = tercerNumero.value ;

	primerNumero = parseInt(primerNumero) ;
	segundoNumero = parseInt(segundoNumero) ;
	tercerNumero = parseInt(tercerNumero) ;

	cuartoNumero = primerNumero + segundoNumero + tercerNumero;

	resultado = (21 * 100) / cuartoNumero;

	alert("El resultado es " + resultado);
	
}