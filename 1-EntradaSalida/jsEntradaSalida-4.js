/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
var nombre;

nombre= prompt("dime tu nombre");

document.getElementById("elNombre").value = nombre;

alert("tu nombre es: " +nombre);

//tambien se puede escribir como document.getElementById("elNombre").value y no es escribir elNombre.value=nombre
}

