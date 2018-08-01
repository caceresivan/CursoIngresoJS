function mostrar()
{
	var nombreAnimal;
	var peso;
	var temperatura;
	var respuesta="si";
	var contador=0;
	var cantTemperaturaPar=0;
	var cantAnimalBajocero=0;
	var promedioPesoTotal;
	var par;
	var animalPesado;
	var temperaturaPesado;
	var pesoPesado;
	var acumuladorPeso=0;
	var pesoMaximo;
	var pesoMinimo;



	while(respuesta!="no"){
		contador++;

		nombreAnimal=prompt("Ingresar nombre de animal.");
		peso=prompt("Ingresar peso de animal entre 1 y 1000.");
		peso=parseInt(peso);
		while(isNaN(peso)||peso<1 || peso>1000){
			peso=prompt("Error, ingresar peso de animal entre 1 y 1000.");
			peso=parseInt(peso);
		}


		temperatura=prompt("Ingresar temperatura entre -30 y 30.");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)||temperatura<(-30)||temperatura>30)
			temperatura=prompt("Error, ingresar temperatura entre -30 y 30.");
			temperatura=parseInt(temperatura);



		respuesta=prompt("Desea continuar?");


		par=temperatura%2;
		if(par==0){
			cantTemperaturaPar++;
		}
		if(contador==1){
			animalPesado=nombreAnimal;
			temperaturaPesado=temperatura;
			pesoPesado=peso;
			pesoMaximo=peso;
			pesoMinimo=peso;
		}else if(peso>pesoPesado){
			animalPesado=nombreAnimal;
			temperaturaPesado=temperatura;
			pesoPesado=peso;
		}if(temperatura<0){
			cantAnimalBajocero++;
			
			if(peso>pesoMaximo){
				pesoMaximo=peso;
			}
			if(peso<pesoMinimo){
				pesoMinimo=peso;
			}
		}



		acumuladorPeso=acumuladorPeso+peso;


	}//while(respuesta!="no")
	promedioPesoTotal=acumuladorPeso/contador;

document.write("A- "+cantTemperaturaPar+"<br> B- "+animalPesado+""+temperaturaPesado+"<br> C- "+cantAnimalBajocero+"<br> D- "+promedioPesoTotal+"<br> F- "+pesoMaximo+" y "+pesoMinimo);


}
