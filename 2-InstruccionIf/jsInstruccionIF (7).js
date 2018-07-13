function mostrar()
{
	//tomo la edad  
	var edad;
	var estcivil;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	estcivil=document.getElementById('estadoCivil').value;

	if (edad<18 && estcivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}
	


}//FIN DE LA FUNCIÓN