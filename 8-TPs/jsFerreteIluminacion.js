/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var primerNumero;
 	var sello;
 	var valor;
 	var precioFinal;
 	var precioIngresoBruto;

 	primerNumero = Cantidad.value;
 	sello = Marca.value;
 	
 	primerNumero = parseInt(primerNumero);
 	valor = parseInt(valor);
 	precioFinal= parseInt(precioFinal);
 	precioIngresoBruto= parseInt(precioIngresoBruto);

 	valor = primerNumero * 35;

 	if(primerNumero >= 6)
 	{
 		precioFinal = (valor * 50) / 100;
 	
 	}
 	else
 		{
 			if(primerNumero == 5)
 			{
 				if(sello == "ArgentinaLuz")
 				{
 				
 				precioFinal = (valor *60) / 100;
				
				}
 				else
 				{	
 				
 				precioFinal = (valor *70) / 100;
 				
 				}
 		if (primerNumero == 4)
 			{
 				if (sello == "ArgentinaLuz"  || sello == "FelipeLamparas")
 				{ 
 					precioFinal = (valor * 75) /100 ;
 				}
 				else 
 				{
 					precioFinal = (valor * 80) / 100 ;
 				}
 			}
 			if (primerNumero == 3)
 			{
 				if (sello == "ArgentinaLuz")
 				{
 					precioFinal = (valor * 85) / 100 ;
 				}
 				else 
 				{	
 					if (sello == "FelipeLamparas")
 					{
 						precioFinal = (valor * 90) / 100 ;
 					}
 					else 
 					{ 
 						precioFinal = (valor * 95) / 100 ;
 					}
 				}
 			}
 		}
 	if (precioFinal >= 120)
 	{
 		precioIngresoBruto = (precioFinal * 10) / 100 ;
 	}
 }
alert ("Usted pago " +precioIngresoBruto+ " de IIBB");

}	

