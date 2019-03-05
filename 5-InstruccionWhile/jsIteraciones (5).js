function mostrar()
{

var elSexo=prompt("ingrese un elSexo, f o m")

while(elSexo != "f" && elSexo!="m")
{
	elSexo=prompt("Sexo invalido")
}
getElementById(Sexo).value=elSexo;
}//FIN DE LA FUNCIÓN