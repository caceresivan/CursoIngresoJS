/*
	Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )

*/


function mostrar()
{
	var marcaProducto;
	var peso;
	var temperatura;
	var respuesta="si";
	var cantTempPares=0;
	var marcaProductoPesado;
	var cantProductosBajoCero=0;
	var promedioPesoProductos;
	var pesoMaximo;
	var pesoMinimo;
	var par;
	var contador=0;
	var acumuladorPeso=0;

	while(respuesta!="no"){

		contador++;
		marcaProducto=prompt("Ingrese marca del producto.");
		peso=prompt("Ingrese el peso del producto.");
		peso=parseInt(peso);

		while(isNaN(peso)||peso<1||peso>100){
			peso=prompt("Error, ingrese un peso entre 1 y 100.");
			peso=parseInt(peso);			
		}

		temperatura=prompt("Ingrese temperatura de almacenamiento.");
		temperatura=parseInt(temperatura);

		while(isNaN(temperatura)||temperatura<(-30)||temperatura>30){
			temperatura=prompt("Error, ingrese una temperatura entre -30 y 30.");
			temperatura=parseInt(temperatura);			
		}

		respuesta=prompt("Desea continuar?");

	par=temperatura%2;
		if(par==0){
			cantTempPares++;
		}
		if(contador==1){
			marcaProductoPesado=peso;
			pesoMaximo=peso;
			pesoMinimo=peso;
		}else if(peso>marcaProductoPesado){
			marcaProductoPesado=peso;
		}
		if(temperatura<0){
			cantProductosBajoCero++;
		}
		if(peso>pesoMaximo){
			pesoMaximo=peso;
		}if(peso<pesoMinimo){
			pesoMinimo=peso;
		}

		acumuladorPeso=acumuladorPeso+peso;

	}//while(respuesta!="no")

	promedioPesoProductos=acumuladorPeso/contador;

	document.write("A- "+cantTempPares+"<br>");
	document.write("B- "+marcaProductoPesado+"<br>");
	document.write("C- "+cantProductosBajoCero+"<br>");
	document.write("D- "+promedioPesoProductos+"<br>");
	document.write("F- "+pesoMaximo+" y "+pesoMinimo);
}
