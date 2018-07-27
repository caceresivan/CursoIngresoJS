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
 	var lamparas;
 	var cantlamparas;
 	var marca;
 	var descuento;
 	var preciodescuento;
 	var iibb;

 	lamparas=35;
 	cantlamparas=document.getElementById('Cantidad').value;
 	marca=document.getElementById('Marca').value;

 	cantlamparas=parseInt(cantlamparas);

 	if(cantlamparas>5)
 	{
 		descuento=50;
 		
 	}

 	switch(cantlamparas)
 	{
 		case 5:

 			switch (marca)
 			{

 				case "ArgentinaLuz":
 					descuento=40;
 					break;
 				default:
 					descuento=30;
 					break;	
 			}
 			break;

 		case 4:

 			switch(marca)
 			{
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 				descuento=25;
 				break;
 			default:
 				descuento=20;
 				break;
 			}
 			break;

 		case 3:

 			switch(marca)
 			{
 				case "ArgentinaLuz":
 				descuento=15;
 				break;
 				case "FelipeLamparas":
 				descuento=10;
 				break;
 			default:
 				descuento=5;
 				break;	
 			}
 			break;

 		case 2:

 		case 1:
 			descuento=0;
 			break;
 		default:
 			descuento=50;
 			break;		
 	}//switch(cantlamparas)

 	descuento=(100-descuento)/100;
 	preciodescuento=(lamparas*cantlamparas)*descuento;

 	if(preciodescuento>120)
 	{
 		iibb=preciodescuento*0.10;
 		preciodescuento=preciodescuento+iibb;
 		document.getElementById('precioDescuento').value=preciodescuento;
 		alert("IIBB Usted pago "+preciodescuento+" siendo "+iibb+" el impuesto que se pagó.");
 	}
 	else
 	{
 		document.getElementById('precioDescuento').value=preciodescuento;
 	}	
}
