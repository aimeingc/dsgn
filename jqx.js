var o, qi, qf, xi, xf;
function readQ(documento)
{
	o = documento;
	c = o.getElementById("cDistribuida");
	c.innerHTML = getTable_Q();
	reStart_Q();
	formato_Q();
	alert("Cargas distribuidas");
}
function formato_Q()
{
	var c, fs = "8px", wt = w/2;
	c = o.getElementById("txtQi");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("txtLi");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("txtQf");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("txtLf");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("lstQi");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("lstLi");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("lstQf");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("lstLf");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("cmdAddQ");
	c.style.fontSize = fs;
	c.style.width = wt;
	c = o.getElementById("cmdEdtQ");
	c.style.fontSize = fs;
	c.style.width = wt;
	c = o.getElementById("cmdErsQ");
	c.style.fontSize = fs;
	c.style.width = wt;
	c = o.getElementById("cmdClrQ");
	c.style.fontSize = fs;
	c.style.width = wt;
}
function getTable_Q()
{
	var st = ""+
	"<form id='frQ'>\n"+
	"<table>\n"+
	"	<tr>\n"+
	"		<th colspan='4'>CARGAS DISTRIBUIDAS</th>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td align='center'>\n"+
	"			<div><label for='txtQi'>W<sub>Ini</sub> (kN/m) +" + cesp("f-ar") + "</label></div>\n"+
	"			<input id='txtQi' type='number' onblur='dFocar(this)' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"		<td align='center'>\n"+
	"			<div><label for='txtLi'>L<sub>Ini</sub> (m)</label></div>\n"+
	"			<input id='txtLi' type='number' onblur='dFocar(this)' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"		<td align='center'>\n"+
	"			<div><label for='txtQf'>W<sub>Fin</sub> (kN/m) +" + cesp("f-ar") + "</label></div>\n"+
	"			<input id='txtQf' type='number' onblur='dFocar(this)' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"		<td align='center'>\n"+
	"			<div><label for='txtLf'>L<sub>Fin</sub> (m)</label></div>\n"+
	"			<input id='txtLf' type='number' onblur='dFocar(this)' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td align='center'>\n"+
	"			<select id='lstQi' type='select-one' onchange='sel_Qi()' size='3'></select>\n"+
	"		</td>\n"+
	"		<td align='center'>\n"+
	"			<select id='lstLi' type='select-one' onchange='sel_Li()' size='3'></select>\n"+
	"		</td>\n"+
	"		<td align='center'>\n"+
	"			<select id='lstQf' type='select-one' onchange='sel_Qf()' size='3'></select>\n"+
	"		</td>\n"+
	"		<td align='center'>\n"+
	"			<select id='lstLf' type='select-one' onchange='sel_Lf()' size='3'></select>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td align='center' colspan='4'>\n"+
	"			<table><tr>\n"+
	"				<td align='center'><input id='cmdAddQ' type='button' value='Agregar' onclick='addQ()'></td>\n"+
	"				<td align='center'><input id='cmdEdtQ' type='button' value='Modificar' onclick='edtQ()'></td>\n"+
	"				<td align='center'><input id='cmdErsQ' type='button' value='Borrar' onclick='ersQ()'></td>\n"+
	"				<td align='center'><input id='cmdClrQ' type='button' value='Limpiar' onclick='clrQ()'></td>\n"+
	"			</tr></table>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"</table>\n"+
	"</form>\n";
	return st;
}
function getXq(abscisa,Index)
{
	var i, q1, q2, qr, qx, x, x1, x2, xc;
	i = Index;
	q1 = Number(qi[i]);
	q2 = Number(qf[i]);
	x1 = Number(xi[i]);
	x2 = Number(xf[i]);
	if(abscisa < x1){
		x = Number(x1);
	}
	else{
		if(abscisa > x2){
			x = Number(x2);
		}
		else{
			x = Number(abscisa);
		}
	}
	qx = Number(getQx(x,i));
	xc = x1 + (1/3)*(x - x1)*(2*q2 + q1)/(q2 + q1);
	return xc;
}
function getQx(abscisa,Index)
{
	var i, q1, q2, qr, qx, x1, x2, x;
	i = Index;
	q1 = Number(qi[i]);
	q2 = Number(qf[i]);
	x1 = Number(xi[i]);
	x2 = Number(xf[i]);
	if(abscisa < x1){
		x = Number(x1);
	}
	else{
		if(abscisa > x2){
			x = Number(x2);
		}
		else{
			x = Number(abscisa);
		}
	}
	qx = ((q2 - q1)/(x2 - x1))*(x - x1) + q1;
	return qx;
}
function getQRx(abscisa,Index)
{
	var i, q1, q2, qr, qx, x1, x2, x;
	i = Index;
	q1 = Number(qi[i]);
	q2 = Number(qf[i]);
	x1 = Number(xi[i]);
	x2 = Number(xf[i]);
	if(abscisa < x1){
		x = Number(x1);
	}
	else{
		if(abscisa > x2){
			x = Number(x2);
		}
		else{
			x = Number(abscisa);
		}
	}
	qx = Number(getQx(x,i));
	qr = (qx + q1)*(x - x1)/2;
	return qr;
}
function getAnalisis_Q(abscisa,esCortante)
{
	var i, k = 0, m = 0, q, ra, rb, v = 0, x, xc, x1, x2;
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
	for(i in qi)
	{
		x1 = Number(xi[i]);
		x2 = Number(xf[i]);
		q = Number(getQRx(L,i));
		xc = Number(getXq(L,i));
		rb= Number(-(q*xc)/L);
		ra = Number(-(rb + q));
		if(x < x1){
			v += ra;
			m += ra*x;
		}
		else{
			q = Number(getQRx(x,i));
			xc = Number(getXq(x,i));
			v += ra + q;
			m += ra*x + q*(x - xc);
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
function clrQ()
{
	if(qi.length > 0){
		if(qi.length > 1){
			k = "¿Desea borrar las cargas distribuidas del listado actual?";
		}
		else{
			k = "¿Desea borrar la carga distribuida del listado actual?";
		}
		if(confirm(k)){
			reStart_Q();
			listar_Q();
			noSel_Q();
		}
	}
}
function ersQ()
{
	var c, i, j, k;
	var klon1 = new Array();
	var klon2 = new Array();
	var klon3 = new Array();
	var klon4 = new Array();
	if(qi.length > 0){
		c = o.getElementById("lstQi");
		i = c.selectedIndex;
		if(i >= 0){
			k = "¿Desea borrar la carga distribuida (" + qi[i] + " kN/m; " + xi[i] + " m) " + cesp("f-der") + " (" + qf[i] + " kN/m; " + xf[i] + "m) del listado actual?";
			if(confirm(k)){
				for(j in qi)
				{
					if(j != i){
						klon1.push(qi[j]);
						klon2.push(qf[j]);
						klon3.push(xi[j]);
						klon4.push(xf[j]);
					}
				}
				reStart_Q();
				qi = klon1;
				qf = klon2;
				xi = klon3;
				xf = klon4;
				listar_Q();
				noSel_Q();
			}
		}
		else{
			var ti = "Por favor seleccione, primero, la carga distribuida que desea borrar.";
			alert(ti);
		}
	}
}
function edtQ()
{
	var b, c, i, Li, Lj, txt = "EDT", Wi, Wj;
	b = o.getElementById("lstQi");
	i = b.selectedIndex;
	if(i >= 0){
		if(aceptar_Qx(txt)){
			if(aceptar_Lx(txt)){
				c = o.getElementById("txtQi");
				Wi = Number(c.value);
				c = o.getElementById("txtQf");
				Wj = Number(c.value);
				c = o.getElementById("txtLi");
				Li = Number(c.value);
				c = o.getElementById("txtLf");
				Lj = Number(c.value);
				qi[i] = Wi;
				qf[i] = Wj;
				xi[i] = Li;
				xf[i] = Lj;
				listar_Q();
				b.selectedIndex = i;
				sel_Qi();
			}
		}
	}
	else{
		var ti = "Por favor seleccione, primero,  la carga distribuida que desea modificar.";
		alert(ti);
	}
}
function addQ()
{
	var c, Li, Lj, txt = "ADD", Wi, Wj;
	if(aceptar_Qx(txt)){
		if(aceptar_Lx(txt)){
			c = o.getElementById("txtQi");
			Wi = Number(c.value);
			c = o.getElementById("txtQf");
			Wf = Number(c.value);
			c = o.getElementById("txtLi");
			Li = Number(c.value);
			c = o.getElementById("txtLf");
			Lf = Number(c.value);
			qi.push(Wi);
			qf.push(Wf);
			xi.push(Li);
			xf.push(Lf);
			listar_Q();
		}
	}
}
function sel_Lf()
{
	var c, i;
	c = o.getElementById("lstLf");
	i = c.selectedIndex;
	c = o.getElementById("lstLi");
	c.selectedIndex = i;
	c = o.getElementById("lstQf");
	c.selectedIndex = i;
	c = o.getElementById("lstQi");
	c.selectedIndex = i;
	c = o.getElementById("txtQi");
	c.value = qi[i];
	c = o.getElementById("txtLi");
	c.value = xi[i];
	c = o.getElementById("txtQf");
	c.value = qf[i];
	c = o.getElementById("txtLf");
	c.value = xf[i];
}
function sel_Li()
{
	var c, i;
	c = o.getElementById("lstLi");
	i = c.selectedIndex;
	c = o.getElementById("lstQi");
	c.selectedIndex = i;
	c = o.getElementById("lstQf");
	c.selectedIndex = i;
	c = o.getElementById("lstLf");
	c.selectedIndex = i;
	c = o.getElementById("txtQi");
	c.value = qi[i];
	c = o.getElementById("txtLi");
	c.value = xi[i];
	c = o.getElementById("txtQf");
	c.value = qf[i];
	c = o.getElementById("txtLf");
	c.value = xf[i];
}
function sel_Qf()
{
	var c, i;
	c = o.getElementById("lstQf");
	i = c.selectedIndex;
	c = o.getElementById("lstLi");
	c.selectedIndex = i;
	c = o.getElementById("lstQi");
	c.selectedIndex = i;
	c = o.getElementById("lstLf");
	c.selectedIndex = i;
	c = o.getElementById("txtQi");
	c.value = qi[i];
	c = o.getElementById("txtLi");
	c.value = xi[i];
	c = o.getElementById("txtQf");
	c.value = qf[i];
	c = o.getElementById("txtLf");
	c.value = xf[i];
}
function sel_Qi()
{
	var c, i;
	c = o.getElementById("lstQi");
	i = c.selectedIndex;
	c = o.getElementById("lstLi");
	c.selectedIndex = i;
	c = o.getElementById("lstQf");
	c.selectedIndex = i;
	c = o.getElementById("lstLf");
	c.selectedIndex = i;
	c = o.getElementById("txtQi");
	c.value = qi[i];
	c = o.getElementById("txtLi");
	c.value = xi[i];
	c = o.getElementById("txtQf");
	c.value = qf[i];
	c = o.getElementById("txtLf");
	c.value = xf[i];
}
function listar_Q()
{
	var i, Wi, Wj, Li, Lj;
	var c1, c2, x1, x2;
	c1 = o.getElementById("lstQi");
	c2 = o.getElementById("lstQf");
	x1 = o.getElementById("lstLi");
	x2 = o.getElementById("lstLf");
	reset_Q();
	for(i in qi)
	{
		Wi = qi[i];
		Wj = qf[i];
		Li = xi[i];
		Lj = xf[i];
		var Q1 = o.createElement("option");
		var Q2 = o.createElement("option");
		var n1 = o.createElement("option");
		var n2 = o.createElement("option");
		Q1.text = Wi.toFixed(4);
		Q1.value = i;
		Q2.text = Wj.toFixed(4);
		Q2.value = i;
		n1.text = Li.toFixed(4);
		n1.value = i;
		n2.text = Lj.toFixed(4);
		n2.value = i;
		c1.add(Q1);
		c2.add(Q2);
		x1.add(n1);
		x2.add(n2);
	}
}
function noSel_Q()
{
	c = o.getElementById("txtQi");
	c.value = "";
	c = o.getElementById("txtQf");
	c.value = "";
	c = o.getElementById("txtLi");
	c.value = "";
	c = o.getElementById("txtLf");
	c.value = "";
}
function aceptar_Lx(t)
{
	var c1, c2, EureK = false, k, Li, Lj, ti, vi;
	switch (t.toLowerCase())
	{
		case "add":
			k = " que desea agregar.";
			break;
		case "edt":
			k = " que desea asignar.";
			break;
		default:
			k = "";
	}
	c1 = o.getElementById("txtLi");
	c2 = o.getElementById("txtLf");
	vi = c1.value;
	if(isNaN(vi) == false){
		Li = Number(vi);
		if(0 <= Li && Li <= L){
			vi = c2.value;
			if(isNaN(vi) == false){
				Lj = Number(vi);
				if(0 <= Lj && Lj <= L){
					if(Li < Lj){
						EureK = true;
					}
					else{
						ti = "La magnitud numérica, que representa la posición donde inicia la carga distribuida, no debe ser mayor a la magnitud numérica, que representa la posición donde termina la carga distribuida.\n"+
						"Por favor, revise y redefina las posiciones donde inicia y termina la carga distribuida" + k;
						alert(ti);
					}
				}
				else{
					ti = "La magnitud numérica, que representa la posición donde termina la carga distribuida, está fuera de los límites de la viga.\n"+
					"Por favor, revise y redefina la posición donde termina la carga distribuida" + k;
					alert(ti);
					c2.focus();
				}
			}
			else{
				ti = "Por favor, defina la magnitud numérica que representa la posición donde termina la carga distribuida" + k;
				alert(ti);
				c2.focus();
			}
		}
		else{
			ti = "La magnitud numérica, que representa la posición donde inicia la carga distribuida, está fuera de los límites de la viga.\n"+
			"Por favor, revise y redefina la posición donde inicia la carga distribuida" + k;
			alert(ti);
			c1.focus();
		}
	}
	else{
		ti = "Por favor, defina la magnitud numérica que representa la posición de inicio de la carga distribuida" + k;
		alert(ti);
		c1.focus();
	}
	return EureK;
}
function aceptar_Qx(t)
{
	var c1, c2, EureK = false, k, q1, q2, ti, vi;
	switch (t.toLowerCase())
	{
		case "add":
			k = " que desea agregar.";
			break;
		case "edt":
			k = " que desea asignar.";
			break;
		default:
			k = "";
	}
	c1 = o.getElementById("txtQi");
	c2 = o.getElementById("txtQf");
	vi = c1.value;
	if(isNaN(vi) == false){
		q1 =  Number(vi);
		vi = c2.value;
		if(isNaN(vi) == false){
			q2 = Number(vi);
			if(((q1 + q2) == 0) && (q1 == 0 || q2 == 0)){//revisar por qué
				ti = "La carga distribuida, segun las magnitudes numéricas que definen sus valores inicial y final, es nula.\n"+
				"Por favor, revise y redefina las magnitudes numéricas que definen o representan los valores inicial y final de la carga distribuida" + k;
				alert(ti);
			}
			else{
				if((q1 > 0 && q2 < 0) || (q1 < 0 && q2 > 0)){
					ti = "El valor inicial y el valor final, de la carga distribuida, deben estar dispuestos en el mismo sentido o en la misma dirección.\n"+
					"Por favor, revise y redefina las magnitudes numéricas que representan o definen los valores inicial y final de la carga distribuida" + k;
					alert(ti);
				}
				else{
					EureK = true;
				}
			}
		}
		else{
			ti = "Por favor, defina la magnitud numérica que representa el valor final de la carga distribuida" + k;
			alert(ti);
			c2.focus();
		}
	}
	else{
		ti = "Por favor, defina la magnitud numérica, que representa el valor inicial de la carga distribuida" + k;
		alert(ti);
		c1.focus();
	}
	return EureK;
}
function reStart_Q()
{
	qi = new Array();
	qf = new Array();
	xi = new Array();
	xf = new Array();
}