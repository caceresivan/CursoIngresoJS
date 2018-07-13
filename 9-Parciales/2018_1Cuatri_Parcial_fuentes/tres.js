function mostrar()
{
	var precio;
	var porcentaje;
	var preciofinal;

	precio=prompt("Ingrese el precio:");
	porcentaje=prompt("Ingrese el porcentaje de descuento:");
	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);
	preciofinal=precio*porcentaje/100;

	document.getElementById('elPrecioFinal').value=preciofinal;
}
