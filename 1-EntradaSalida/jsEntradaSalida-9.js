/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()

{ 
	var primerNumero;
	var resultado;

	primerNumero = document.getElementById("sueldo").value;
	resultado = document.getElementById("resultado").value;

	primerNumero = parseInt(primerNumero);
	resultado = (primerNumero * 110 / 100);

	alert("el resultado es:" +resultado);


	

//modelo del ej 9 y 10

//var numeroUno ;
//var resultado ;

//numeroUno = document.getElementById('sueldo').value ;
//resultado = document.getElementById('resultado').value ;

//numeroUno = parseInt (numeroUno) ;
//resultado = (numeroUno * 110 / 100) ;

//alert ("El aumento es:" +resultado) ;






	}