function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var preciocondescuento;
	var Iva;
	var soloIva;

	precio=prompt("Ingrese un precio:");
	porcentaje=prompt("Ingrese un porcentaje");
	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;
	preciocondescuento=precio-descuento;
	Iva=preciocondescuento*1.21;
	soloIva=Iva-preciocondescuento;

	alert("El decuento en dinero es: "+descuento+", el precio con descuento es: "+preciocondescuento+" y el iva es: "+soloIva);
	document.getElementById('elPrecioFinal').value=Iva;
}
