function mostrar()
{

	var contador;
	contador=0 

	for(;;)
	{
		contador++
		console.log(contador);
		
		if(contador<5){
			break;
		}
		
	}
	console.log("final "+contador);
}