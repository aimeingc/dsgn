var pa, lp, o;
function readC(documento)
{
	o = documento;
	c = o.getElementById("cConcentrada");
	c.innerHTML = getTable_C();
	reStart_C();
	formato_C();
	alert("Cargas concentradas");
}
function formato_C()
{
	var c, fs = "8px", wt = w/2;
	c = o.getElementById("txtP");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("txtLp");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("lstP");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("lstLp");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("cmdAddC");
	c.style.fontSize = fs;
	c.style.width = wt;
	c = o.getElementById("cmdEdtC");
	c.style.fontSize = fs;
	c.style.width = wt;
	c = o.getElementById("cmdErsC");
	c.style.fontSize = fs;
	c.style.width = wt;
	c = o.getElementById("cmdClrC");
	c.style.fontSize = fs;
	c.style.width = wt;
}
function getTable_C()
{
	var st = ""+
	"<form id='frC'>\n"+
	"<table>\n"+
	"	<tr>\n"+
	"		<th colspan='2'>CARGAS CONCENTRADAS</th>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td align='center'>\n"+
	"			<div><label for='txtP'>P (kN) +" + cesp("f-ar") + "</label></div>\n"+
	"			<input id='txtP' type='number' onblur='dFocar(this)' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"		<td align='center'>\n"+
	"			<div><label for='txtLp'>La (m)</label></div>\n"+
	"			<input id='txtLp' type='number' onblur='dFocar(this)' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td align='center'>\n"+
	"			<select id='lstP' type='select-one' onchange='sel_P()' size='3'></select>\n"+
	"		</td>\n"+
	"		<td align='center'>\n"+
	"			<select id='lstLp' type='select-one' onchange='sel_Lp()' size='3'></select>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td align='center' colspan='2'>\n"+
	"			<table><tr>\n"+
	"				<td align='center'><input id='cmdAddC' type='button' value='Agregar' onclick='addC()'></td>\n"+
	"				<td align='center'><input id='cmdEdtC' type='button' value='Modificar' onclick='edtC()'></td>\n"+
	"				<td align='center'><input id='cmdErsC' type='button' value='Borrar' onclick='ersC()'></td>\n"+
	"				<td align='center'><input id='cmdClrC' type='button' value='Limpiar' onclick='clrC()'></td>\n"+
	"			</tr></table>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"</table>\n"+
	"</form>\n";
	return st;
}
function getAnalisis_C(abscisa,esCortante)
{
	var i, k, La, P, m = 0, ra = 0, rb = 0, v = 0, x;
	if(abscisa < 0){
		x = 0;
	}
	else{
		if(abscisa > L){
			x = Number(L);
		}
		else{
			x = Number(abscisa);
		}
	}
	for(i in pa)
	{
		P = Number(pa[i]);
		La = Number(lp[i]);
		rb = Number(-P*La/L);
		ra = Number(-rb - P);
		if(x < La){
			v += ra;
			m += ra*x;
		}
		else{
			v += ra + P;
			m += ra*x + P*(x - La);
		}
	}
	switch (esCortante)
	{
		case false:
			k = m;
			break;
		case true:
			k = v;
			break;
		default:
			k = 0;
	}
	return k;
}
function clrC()
{
	if(pa.length > 0){
		if(pa.length > 1){
			k = "¿Desea borrar las cargas concentradas del listado actual?";
		}
		else{
			k = "¿Desea borrar la carga concentrada del listado actual?";
		}
		if(confirm(k)){
			reStart_C();
			listar_C();
			noSel_C();
		}
	}
}
function ersC()
{
	var c, i, j, k, klon1 = new Array(), klon2= new Array();
	if(pa.length > 0){
		c = o.getElementById("lstP");
		i = c.selectedIndex;
		k = "¿Desea borrar la carga concentrada (" + pa[i].toFixed(4) + " kN; " + lp[i].toFixed(4) + " m) del listado actual?";
		if(i >= 0){
			if(confirm(k)){
				for(j in pa)
				{
					if(j != i){
						klon1.push(pa[j]);
						klon2.push(lp[j]);
					}
				}
				reStart_C();
				pa = klon1;
				lp = klon2;
				listar_C();
				noSel_C();
			}
		}
		else{
			alert("Por favor seleccione, primero, la carga concentrada que desea borrar.");
		}
	}
}
function edtC()
{
	var b, c, i, k, La, P;
	if(pa.length > 0){
		b = o.getElementById("lstP");
		i = b.selectedIndex;
		if(i >= 0){
			c = o.getElementById("txtP");
			k = Number(c.value);
			if(k != 0){
				P = k;
				c = o.getElementById("txtLp");
				k = Number(c.value);
				if(0 <= k && k <= L){
					La = k;
					pa[i] = P;
					lp[i] = La;
					listar_C();
					b.selectedIndex = i;
					sel_P();
				}
				else{
					alert("La magnitud numérica que representa la ubicación de la carga concentrada, que desea asignar, está mal definida.");
					c.focus();
				}
			}
			else{
				alert("La magnitud numérica que representa la carga concentrada, que desea asignar, está mal definida.");
				c.focus();
			}
		}
		else{
			alert("Por favor seleccione, primero, la carga concentrada que desea modificar.");
		}
	}
}
function addC()
{
	var c, k, La, P;
	c = o.getElementById("txtP");
	k = Number(c.value);
	if(k != 0){
		P = k;
		c = o.getElementById("txtLp");
		k = Number(c.value);
		if(k >= 0 && k <= L){
			La = k;
			pa.push(P);
			lp.push(La)
			listar_C()
		}
		else{
			alert("La magnitud que representa la posición de la carga concentrada, que desea agregar, está mal defdefinida.");
			c.focus();
		}
	}
	else{
		alert("La magnitud que define la carga concentrada, que desea agregar, está mal definida.");
		c.focus();
	}
}
function sel_Lp()
{
	var c, i;
	c = o.getElementById("lstLp");
	i = c.selectedIndex;
	c = o.getElementById("txtP");
	c.value = pa[i];
	c = o.getElementById("txtLp");
	c.value = lp[i];
	c = o.getElementById("lstP");
	c.selectedIndex = i;
}
function sel_P()
{
	var c, i;
	c = o.getElementById("lstP");
	i = c.selectedIndex;
	c = o.getElementById("txtP");
	c.value = pa[i];
	c = o.getElementById("txtLp");
	c.value = lp[i];
	c = o.getElementById("lstLp");
	c.selectedIndex = i;
}
function listar_C()
{
	var i, La, P, c1, c2;
	c1 = o.getElementById("lstP");
	c2 = o.getElementById("lstLp");
	reset_C();
	for(i in pa)
	{
		La = lp[i];
		P = pa[i];
		var n1 = o.createElement("option");
		var n2 = o.createElement("option");
		n1.text = P.toFixed(4);
		n1.value = i;
		n2.text = La.toFixed(4);
		n2.value = i;
		c1.add(n1);
		c2.add(n2);
	}
}
function noSel_C()
{
	o.getElementById("txtP").value = "";
	o.getElementById("txtLp").value = "";
}
function reStart_C()
{
	pa = new Array();
	lp = new Array();
}