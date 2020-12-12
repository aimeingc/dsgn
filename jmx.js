var ma, lm, o;
function readM(documento)
{
	o = documento;
	c = o.getElementById("cMomento");
	c.innerHTML = getTable_M();
	reStart_M();
	formato_M();
	alert("Momentos flexores");
}
function formato_M()
{
	var c, fs = "8px", wt = w/2;
	c = o.getElementById("txtM");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("txtLm");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("lstM");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("lstLm");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("cmdAddM");
	c.style.fontSize = fs;
	c.style.width = wt;
	c = o.getElementById("cmdEdtM");
	c.style.fontSize = fs;
	c.style.width = wt;
	c = o.getElementById("cmdErsM");
	c.style.fontSize = fs;
	c.style.width = wt;
	c = o.getElementById("cmdClrM");
	c.style.fontSize = fs;
	c.style.width = wt;
}
function getTable_M()
{
	var st = ""+
	"<form id='frM'>\n"+
	"<table>\n"+
	"	<tr>\n"+
	"		<th colspan='2'>MOMEMTOS FLEXORES</th>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td align='center'>\n"+
	"			<div><label for='txtM'>M (kN-m)</label></div>\n"+
	"			<input id='txtM' type='number' onblur='dFocar(this)' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"		<td align='center'>\n"+
	"			<div><label for='txtLm'>La (m)</label></div>\n"+
	"			<input id='txtLm' type='number' onblur='dFocar(this)' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td align='center'>\n"+
	"			<select id='lstM' type='select-one' onchange='sel_M()' size='3'></select>\n"+
	"		</td>\n"+
	"		<td align='center'>\n"+
	"			<select id='lstLm' type='select-one' onchange='sel_Lm()' size='3'></select>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td align='center' colspan='2'>\n"+
	"			<table><tr>\n"+
	"				<td align='center'><input id='cmdAddM' type='button' value='Agregar' onclick='addM()'></td>\n"+
	"				<td align='center'><input id='cmdEdtM' type='button' value='Modificar' onclick='edtM()'></td>\n"+
	"				<td align='center'><input id='cmdErsM' type='button' value='Borrar' onclick='ersM()'></td>\n"+
	"				<td align='center'><input id='cmdClrM' type='button' value='Limpiar' onclick='clrM()'></td>\n"+
	"			</tr></table>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"</table>\n"+
	"</form>\n";
	return st;
}
function getAnalisis_M(abscisa,esCortante)
{
	var i, k, La, M, m = 0, ra = 0, rb = 0, v = 0, x;
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
	for(i in ma)
	{
		M = Number(ma[i]);
		La = Number(lm[i]);
		rb = Number(-M/L);
		ra = Number(-rb);
		v += ra;
		if(x < La){
			m += ra*x;
		}
		else{
			if(La == L && x == La){
				m += M;
			}
			else{
				m += ra*x - M;
			}
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
function clrM()
{
	if(ma.length > 0){
		if(ma.length > 1){
			k = "¿Desea borrar los momentos flexores del listado actual?";
		}
		else{
			k = "¿Desea borrar el momento flexor del listado actual?";
		}
		if(confirm(k)){
			reStart_M();
			listar_M();
			noSel_M();
		}
	}
}
function ersM()
{
	var c, i, j, k, klon1 = new Array(), klon2= new Array();
	if(ma.length > 0){
		c = o.getElementById("lstM");
		i = c.selectedIndex;
		k = "¿Desea borrar el momento flexor (" + ma[i].toFixed(4) + " kN-m; " + lm[i].toFixed(4) + " m) del listado actual?";
		if(i >= 0){
			if(confirm(k)){
				for(j in ma)
				{
					if(j != i){
						klon1.push(ma[j]);
						klon2.push(lm[j]);
					}
				}
				reStart_M();
				ma = klon1;
				lm = klon2;
				listar_M();
				noSel_M();
			}
		}
		else{
			alert("Por favor seleccione, primero, el momento flexor que desea borrar.");
		}
	}
}
function edtM()
{
	var b, c, i, k, La, M;
	if(ma.length > 0){
		b = o.getElementById("lstM");
		i = b.selectedIndex;
		if(i >= 0){
			c = o.getElementById("txtM");
			k = Number(c.value);
			if(k != 0){
				M = k;
				c = o.getElementById("txtLm");
				k = Number(c.value);
				if(0 <= k && k <= L){
					La = k;
					ma[i] = M;
					lm[i] = La;
					listar_M();
					b.selectedIndex = i;
					sel_M();
				}
				else{
					alert("La magnitud numérica que representa la ubicación del momento flexor, que desea asignar, está mal definida.");
					c.focus();
				}
			}
			else{
				alert("La magnitud numérica que representa el momento flexor, que desea asignar, está mal definida.");
				c.focus();
			}
		}
		else{
			alert("Por favor seleccione, primero, el momento flexor que desea modificar.");
		}
	}
}
function addM()
{
	var c, k, La, M;
	c = o.getElementById("txtM");
	k = Number(c.value);
	if(k != 0){
		M = k;
		c = o.getElementById("txtLm");
		k = Number(c.value);
		if(k >= 0 && k <= L){
			La = k;
			ma.push(M);
			lm.push(La)
			listar_M()
		}
		else{
			alert("La magnitud que representa la posición del momento flexor, que desea agregar, está mal defdefinida.");
			c.focus();
		}
	}
	else{
		alert("La magnitud que define el momento flexor, que desea agregar, está mal definida.");
		c.focus();
	}
}
function sel_Lm()
{
	var c, i;
	c = o.getElementById("lstLm");
	i = c.selectedIndex;
	c = o.getElementById("txtM");
	c.value = ma[i];
	c = o.getElementById("txtLm");
	c.value = lm[i];
	c = o.getElementById("lstM");
	c.selectedIndex = i;
}
function sel_M()
{
	var c, i;
	c = o.getElementById("lstM");
	i = c.selectedIndex;
	c = o.getElementById("txtM");
	c.value = ma[i];
	c = o.getElementById("txtLm");
	c.value = lm[i];
	c = o.getElementById("lstLm");
	c.selectedIndex = i;
}
function listar_M()
{
	var i, La, M, c1, c2;
	c1 = o.getElementById("lstM");
	c2 = o.getElementById("lstLm");
	reset_M();
	for(i in ma)
	{
		La = lm[i];
		M = ma[i];
		var n1 = o.createElement("option");
		var n2 = o.createElement("option");
		n1.text = M.toFixed(4);
		n1.value = i;
		n2.text = La.toFixed(4);
		n2.value = i;
		c1.add(n1);
		c2.add(n2);
	}
}
function noSel_M()
{
	o.getElementById("txtM").value = "";
	o.getElementById("txtLm").value = "";
}
function reStart_M()
{
	ma = new Array();
	lm = new Array();
}