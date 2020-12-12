var bv, hv, L, o;
function readG(documento)
{
	var c;
	o = documento;
	bv = 250; hv = 400; L = 4;
	c = o.getElementById("pGeometria");
	c.innerHTML = getTableG();
	fm_G();
	alert("Geometría: ¡Listo!");
}
function fm_G()
{
	var c;
	c = o.getElementById("txtB");
	c.style.textAlign = "right";
	c.style.width = w;
	c.value = bv;
	c = o.getElementById("txtH");
	c.style.textAlign = "right";
	c.style.width = w;
	c.value = hv;
	c = o.getElementById("txtL");
	c.style.textAlign = "right";
	c.style.width = w;
	c.value = L;
	c = o.getElementById("txtEv");
	c.style.textAlign = "right";
	c.style.width = w;
	c.value = 21500;
}
function getTableG()
{
	var st = ""+
	"<table>\n"+
	"	<tr>\n"+
	"		<th colspan='3'>PROPIEDADES DE LA VIGA</th>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td>\n"+
	"			<label for='txtB'>Ancho (b)</label>\n"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtB' type='number' onblur='dFocar(this)' onfocus='eFocar(this)' onchange='actualizar_B()'>\n"+
	"		</td>\n"+
	"		<td>mm</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td>\n"+
	"			<label for='txtH'>Espesor (h)</label>\n"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtH' type='number' onblur='dFocar(this)' onfocus='eFocar(this)' onchange='actualizar_H()'>\n"+
	"		</td>\n"+
	"		<td>mm</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td>\n"+
	"			<label for='txtL'>Longitud (L)</label>\n"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtL' type='number' onblur='dFocar(this)' onfocus='eFocar(this)' onchange='actualizar_L()'>\n"+
	"		</td>\n"+
	"		<td>m</td>\n"+
	"	</tr>\n"+
	
	"	<tr>\n"+
	"		<td>\n"+
	"			<label for='txtEv'>M" + cesp("o") + "dulo de elasticidad (E)</label>\n"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtEv' type='number' onblur='dFocar(this)' onfocus='eFocar(this)' onchange='actualizar_Ev()'>\n"+
	"		</td>\n"+
	"		<td>MPa</td>\n"+
	"	</tr>\n"+
	"</table>\n";
	return st;
}
function actualizar_Ev()
{
	var k;
	reNew()
	c = o.getElementById("txtEv");
	k = Number(c.value);
	if(k > 0){
		//L = k;
		//Seccionar();
	}
	else{
		var st = "La magnitud numérica, que representa el modulo de elasticidad de la viga, está mal definida.\n"+
		"Por favor defina, dicha magnitud, utilizando números reales.";
		alert(st);
		c.focus();
	}
}
function actualizar_L()
{
	var k;
	c = o.getElementById("txtL");
	k = Number(c.value);
	if(k > 0){
		L = k;
		Seccionar();
		reNew()
	}
	else{
		var st = "La magnitud numérica, que representa la 'longitud' de la viga, está mal definida.\n"+
		"Por favor defina, dicha magnitud, utilizando números reales.";
		alert(st);
		c.focus();
	}
}
function actualizar_H()
{
	var k;
	reNew()
	c = o.getElementById("txtH");
	k = Number(c.value);
	if(k > 0){
		hv = k;
	}
	else{
		var st = "La magnitud numérica, que representa el 'espesor' o 'peralte' de la viga, está mal definida.\n"+
		"Por favor defina, dicha magnitud, utilizando números reales.";
		alert(st);
		c.focus();
	}
}
function actualizar_B()
{
	var k;
	reNew()
	c = o.getElementById("txtB");
	k = Number(c.value);
	if(k > 0){
		bv = k;
	}
	else{
		var st = "La magnitud numérica, que representa el 'ancho' de la viga, está mal definida.\n"+
		"Por favor defina, dicha magnitud, utilizando números reales.";
		alert(st);
		c.focus();
	}
}