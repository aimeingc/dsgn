var o, mt, vt, xt, aInf, aSup;
function readD(objeto)
{
	var c;
	o = objeto;
	c = o.getElementById("Diagramas");
	c.innerHTML = getTable_Draw();
	c = o.getElementById("Vx-draw");
	c.innerHTML =  getTable_Vx();
	c = o.getElementById("Mx-draw");
	c.innerHTML =  getTable_Mx();
	c = o.getElementById("control-draw");
	c.innerHTML = getTabla_Ct();
	c = o.getElementById("dY-draw");
	c.innerHTML = getTable_Dy();
	fm_Dg();
}
function reNew(){
	var c = o.getElementById("txtX");
	c.value = "";
	c = o.getElementById("txtVx");
	c.value = "";
	c = o.getElementById("txtMx");
	c.value = "";
	c = o.getElementById("txtDy");
	c.value = "";
	c = o.getElementById("txtAi");
	c.value = "";
	c = o.getElementById("txtAs");
	c.value = "";
	c = o.getElementById("txtS");
	c.value = "";
	reset_X();
	/*
	c = o.getElementById("d-Cortante");
	c.getContext("2d");
	c.beginPath();
	c.clearRect(0,0,c.width,c.height);
	c.closePath();
	c = o.getElementById("d-Momento");
	c.getContext("2d");
	c.beginPath();
	c.clearRect(0,0,c.width,c.height);
	c.closePath();
	c = o.getElementById("d-Deflexion");
	c.getContext("2d");
	c.beginPath();
	c.clearRect(0,0,c.width,c.height);
	c.closePath();
	*/
}
function fm_Dg()
{
	var c, fs = 12
	c = o.getElementById("t-Cortante");
	c.style.fontSize = fs;
	c.style.textAlign = "center";
	c = o.getElementById("t-Momento");
	c.style.fontSize = fs;
	c.style.textAlign = "center";
	c = o.getElementById("txtX");
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("txtVx");
	c.disabled = true;
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("txtMx");
	c.disabled = true;
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("txtDy");
	c.disabled = true;
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("txtAs");
	c.disabled = true;
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("txtAi");
	c.disabled = true;
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("txtS");
	c.disabled = true;
	c.style.textAlign = "right";
	c.style.width = w;
	c = o.getElementById("cmdGraph");
	c.style.fontSize = "13px";
	c.style.height = "50px";
	c.style.width = "90px";
	c = o.getElementById("cmdQuest");
	c.style.fontSize = "13px";
	c.style.height = "30px";
	c.style.width = "100px";
	c = o.getElementById("t-Cortante");
	c.innerHTML = "DIAGRAMA DE FUERZAS CORTANTES (Vx)"
	c.style.fontSize = "14px";
	c.style.fontWeight = "bold";
	c.style.textAlign = "center";
	c = o.getElementById("t-Momento");
	c.innerHTML = "DIAGRAMA DE MOMENTOS FLEXORES (Mx)"
	c.style.fontSize = "14px";
	c.style.fontWeight = "bold";
	c.style.textAlign = "center";
	c = o.getElementById("t-Deflexion");
	c.innerHTML = "DIAGRAMA DE DEFLEXIONES ELÁSTICAS (" + cesp("Delta") + "y)"
	c.style.fontSize = "14px";
	c.style.fontWeight = "bold";
	c.style.textAlign = "center";
}
function dibujarMe()
{
	Seccionar();
	analizarMe();
	dibujar_Ejes();
}
function dibujar_Curva(tip)
{
	var i, j, k, k1, k2, x, x1, x2, y, y1, y2;
	var klon = new Array;
	switch (tip.toLowerCase())
	{
		case "a":
		case "m":
			c = o.getElementById("d-Momento");
			k = "M";
			if(c.getContext){
				cx = c.getContext("2d");
			}
			klon = mt;
			k1 = "rgb(0,125,0)";
			k2 = "rgba(0,125,0,0.15)";
			break;
		case "v":
			c = o.getElementById("d-Cortante");
			k = "V";
			if(c.getContext){
				cx = c.getContext("2d");
			}
			klon = vt;
			k1 = "rgb(100,0,50)";
			k2 = "rgba(100,0,50,0.15)";
			break;
		case "y":
			c = o.getElementById("d-Deflexion");
			k = "Y";
			if(c.getContext){
				cx = c.getContext("2d");
			}
			klon = gy;
			k1 = "rgb(225,0,0)";
			k2 = "rgba(225,0,0,0.15)";
			break;
		default:
	}
	cx.beginPath();
	cx.strokeStyle = k1;
	cx.fillStyle = k2;
	cx.lineWidth = 1;
	x1 = getX(0);
	y1 = getY(0,tip);
	x2 = getX(L);
	y2 = y1;
	cx.moveTo(x1,y1);
	for(i in xt)
	{
		x = getX(xt[i]);
		if(tip.toLowerCase() == "m"){
			y = getY(klon[i],tip);
		}
		else{
			y = getY(-klon[i],tip);
		}
		cx.lineTo(x,y);
	}
	cx.lineTo(x2,y2);
	cx.stroke();
	if (k.toLowerCase() != "y"){ cx.fill(); }
	cx.closePath();
}
function dibujar_ESecundario(tip)
{
	var c, cr = "black", cx, dx, dy, ft = "8px Tahoma", k, kt, st, x, x1, x2, y, y1, y2, ymax;
	var strokeColor = "rgb(150,150,150)";
	var textoColor = "rgb(0,0,0)"
	var k1, k2;
	switch (tip.toLowerCase())
	{
		case "a":
		case "m":
			c = o.getElementById("d-Momento");
			k = "M";
			if(c.getContext){
				cx = c.getContext("2d");
				ymax = 1.2*getMax(k);
			}
			break;
		case "v":
			c = o.getElementById("d-Cortante");
			k = "V";
			if(c.getContext){
				cx = c.getContext("2d");
				ymax = 1.2*getMax(k);
			}
			break;
		case "y":
			c = o.getElementById("d-Deflexion");
			k = "Y";
			if(c.getContext){
				cx = c.getContext("2d");
				ymax = 1.2*getMax(k);
			}
			break;
		default:
	}
	cx.beginPath();
	cx.clearRect(0,0,c.width,c.height);
	x1 = getX(0);
	x2 = getX(L);
	dy = getDelta(ymax);
	cx.lineWidth = 0.15;
	for(y=dy; y<=ymax; y+=dy)
	{
		y1 = getY(y,k);
		y2 = getY(-y,k);
		cx.strokeStyle = strokeColor;
		cx.moveTo(x1,y1);
		cx.lineTo(x2,y1);
		cx.stroke();
		cx.moveTo(x1,y2);
		cx.lineTo(x2,y2);
		cx.stroke();
		switch (k.toLowerCase())
		{
			case "a":
				kt = " mm²";
				break;
			case "m":
				kt = " kN-m";
				break;
			case "v":
				kt = " kN";
				break;
			case "y":
				kt = " mm";
				break;
			default:
				kt = "?";
		}
		cx.fillStyle = "rgb(0,0,0)";
		cx.textBaseline = "middle";
		cx.textAlign = "right";
		k1 = -0.05*(0.1*L);
		k2 = 1.1*L + k1;
		x = getX(k1);
		st = y.toFixed(2) + kt;
		x = getX(k1);
		cx.fillText(st,x,y2);
		x = getX(k2);
		cx.fillText(st,x,y2);
		x = getX(k1);
		st = (-1*y).toFixed(2) + kt;
		x = getX(k1);
		cx.fillText(st,x,y1);
		x = getX(k2);
		cx.fillText(st,x,y1);
		cx.fill();
	}
	cx.closePath();
	cx.beginPath();
	dx = getDelta(L);
	y = 1.2*getMax(k);
	cx.lineWidth = 0.15;
	cx.strokeStyle = strokeColor;
	for(x=dx; x<=L; x+=dx)
	{
		x1 = getX(x);
		y1 = getY(y,k);
		y2 = getY(-y,k);
		cx.moveTo(x1,y1);
		cx.lineTo(x1,y2);
		cx.stroke();
		st = x.toFixed(2) + " m";
		cx.fillStyle = cr
		cx.font = ft;
		cx.textAlign = "center";
		cx.textBaseline = "bottom";
		cx.fillText(st,x1,y1);
		cx.textBaseline = "top";
		cx.fillText(st,x1,y2);
		cx.fill();
	}
	cx.closePath();
}
function dibujar_EPrincipal(tip)
{
	var c, cx, dy, k, x, x1, x2, y, y1, y2, ymax;
	switch (tip.toLowerCase())
	{
		case "a":
		case "m":
			c = o.getElementById("d-Momento");
			k = "M";
			if(c.getContext){
				cx = c.getContext("2d");
				ymax = 1.2*getMax(k);
			}
			break;
		case "v":
			c = o.getElementById("d-Cortante");
			k = "V";
			if(c.getContext){
				cx = c.getContext("2d");
				ymax = 1.2*getMax(k);
			}
			break;
		case "y":
			c = o.getElementById("d-Deflexion");
			k = "Y";
			if(c.getContext){
				cx = c.getContext("2d");
				ymax = 1.2*getMax(k);
			}
			break;
		default:
	}
	cx.beginPath();
	x1 = getX(0);
	x2 = getX(L);
	y = getY(0,k);
	cx.lineWidth = 2;
	cx.strokeStyle = "black";
	cx.moveTo(x1,y);
	cx.lineTo(x2,y);
	cx.stroke();
	cx.closePath();
}
function dibujar_Ejes()
{
	dibujar_ESecundario("V");
	dibujar_EPrincipal("V");
	dibujar_ESecundario("M");
	dibujar_EPrincipal("M");
	dibujar_Curva("V");
	dibujar_Curva("M");
	dibujar_ESecundario("Y");
	dibujar_EPrincipal("Y");
	dibujar_Curva("Y");
}
function getDelta(Longitud)
{
	var bn, dL, n, nc, pd, st;
	st = Number(Longitud).toFixed(0);
	nc = st.length;
	pd = st.substring(0,1);
	switch (pd)
	{
		case "1":
			dL = 0.2;
			break;
		case "2":
			dL = 0.4;
			break;
		case "3":
			dL = 0.6;
			break;
		case "4":
			dL = 0.8;
			break;
		case "5":
			dL = 1;
			break;
		case "6":
			dL = 1.2;
			break;
		case "7":
			dL = 1.5;
			break;
		case "8":
			dL = 1.5;
			break;
		case "9":
			dL = 1.5;
			break;
		default:
			dL = 0.05;
	}
	if(nc > 1){
		bn = nc - 1;
		dL = dL*Number(Math.pow(10,bn));
	}
	return dL;
}
function getX(valor)
{
	var k, sW, W, x, xs;
	xs = Number(valor);
	k = Number(0.15*L);
	W = Number(o.getElementById("d-Cortante").width);
	sW = Number(1.3*L);
	x = (xs + k)*W/sW;
	return x;
}
function getY(valor, tipo)
{
	var h, k, sH, y, ys;
	ys = Number(valor);
	switch (tipo.toLowerCase())
	{
		case "v":
			k = getMax("V");
			H = Number(o.getElementById("d-Cortante").height);
			break;
		case "m":
			k = getMax("M");
			H = Number(o.getElementById("d-Momento").height);
			break;
		case "y":
			k = getMax("Y");
			H = Number(o.getElementById("d-Deflexion").height);
			break;
		default:
	}
	sH = Number(2.4*k);
	k = Number(1.2*k);
	y = (ys + k)*H/sH;
	return y;
}
function getTable_Draw()
{
	var st = ""+
	"<table cellpadding='0px' cellspacing='0px'>\n"+
	"	<tr><td id='control-draw'>\n"+
	"	</td></tr>\n"+
	"	<tr><td id='Vx-draw'>\n"+
	"	</td></tr>\n"+
	"	<tr><td id='Mx-draw'>\n"+
	"	</td></tr>\n"+
	"	<tr><td id='dY-draw'>\n"+
	"	</td></tr>\n"+
	"	<tr><td id='As-draw'>\n"+
	"	</td></tr>\n"+
	"</table>";
	return st;
}
function getTable_Mx()
{
	var H = 250, W = 800;
	var st = ""+
	"		<table border='1px' bordercolor='rgb(200,200,200)' cellspacing='0px'>\n"+
	"			<tr>\n"+
	"				<td>\n"+
	"					<div id='t-Momento'></div>\n"+
	"					<canvas id='d-Momento' height='" + H + "' width='" + W + "'></canvas>\n"+
	"				</td>\n"+
	"			</tr>\n"+
	"		</table>";
	return st;
}
function getTable_Vx()
{
	var H = 250, W = 800;
	var st = ""+
	"		<table border='1px' bordercolor='rgb(200,200,200)' cellspacing='0px'>\n"+
	"			<tr>\n"+
	"				<td>\n"+
	"					<div id='t-Cortante'></div>\n"+
	"					<canvas id='d-Cortante' height='" + H + "' width='" + W + "'></canvas>\n"+
	"				</td>\n"+
	"			</tr>\n"+
	"		</table>\n";
	return st;
}
function getTable_Dy()
{
	var H = 250, W = 800;
	var st = ""+
	"		<table border='1px' bordercolor='rgb(200,200,200)' cellspacing='0px'>\n"+
	"			<tr>\n"+
	"				<td>\n"+
	"					<div id='t-Deflexion'></div>\n"+
	"					<canvas id='d-Deflexion' height='" + H + "' width='" + W + "'></canvas>\n"+
	"				</td>\n"+
	"			</tr>\n"+
	"		</table>\n";
	return st;
}
function getTable_Rf()
{
	var H = 250, W = 800;
	var st = ""+
	"		<table border='1px' bordercolor='rgb(200,200,200)' cellspacing='0px'>\n"+
	"			<tr>\n"+
	"				<td>\n"+
	"					<div id='t-FlexShear'></div>\n"+
	"					<canvas id='d-FlexShear' height='" + H + "' width='" + W + "'></canvas>\n"+
	"				</td>\n"+
	"			</tr>\n"+
	"		</table>\n";
	return st;
}
function getTabla_Ct()
{
	var st =""+
	"		<table>\n"+
	"			<tr>\n"+
	"				<td align='center' rowspan='2' valign='center' width='160px'>\n"+
	"					<input id='cmdGraph' type='button' value='GRAFICAR' onclick='dibujarMe()'>\n"+
	"				</td>\n"+
	"				<td align='center'>\n"+
	"					<div><label for='txtX'>x (m)</label></div>\n"+
	"					<input id='txtX' type='number' onblur='dFocar(this)' onfocus='eFocar(this)'>\n"+
	"				</td>\n"+
	"				<td align='center'>\n"+
	"					<div><label for='txtVx'>Vx (kN)</label></div>\n"+
	"					<input id='txtVx' type='number'>\n"+
	"				</td>\n"+
	"				<td align='center'>\n"+
	"					<div><label for='txtMx'>Mx (kN-m)</label></div>\n"+
	"					<input id='txtMx' type='number'>\n"+
	"				</td>\n"+
	"				<td align='center'>\n"+
	"					<div><label for='txtDy'>" + cesp("Delta") + "y (mm)</label></div>\n"+
	"					<input id='txtDy' type='number'>\n"+
	"				</td>\n"+
	"			</tr>\n"+
	"			<tr>\n"+
	"				<td align='center' width='158px'>\n"+
	"					<input id='cmdQuest' type='button' value='Consultar x' onclick='consultarMe()'>\n"+
	"				</td>\n"+
	"				<td align='center' width='158px'>\n"+
	"					<div><label for='txtAs'>As <sub>Superior</sub> (mm" + cesp("2") + ")</label></div>\n"+
	"					<input id='txtAs' type='number'>\n"+
	"				</td>\n"+
	"				<td align='center' width='158px'>\n"+
	"					<div><label for='txtAi'>As <sub>Inferior</sub> (mm" + cesp("2") + ")</label></div>\n"+
	"					<input id='txtAi' type='number'>\n"+
	"				</td>\n"+
	"				<td align='center' width='158px'>\n"+
	"					<div><label for='txtS'>s/Av (mm/mm" + cesp("2") + ")</label></div>\n"+
	"					<input id='txtS' type='number'>\n"+
	"				</td>\n"+
	"			</tr>\n"+
	"		</table>\n";
	return st;
}
function getMax(tipoDiagrama)
{
	var i, k, v, m, x, y;
	var k1 = 0, k2 = 0, k3 = 0;
	var km = 0, kv = 0, ky = 0;
	for(i in vt)
	{
		m = Math.abs(mt[i]);
		v = Math.abs(vt[i]);
		y = Math.abs(gy[i]);
		x = xt[i];
		if(m > k1){ k1 = m; km = x; }
		if(v > k2){ k2 = v; kv = x; }
		if(y > k3){ k3 = y; ky = x; }
	}
	switch (tipoDiagrama.toLowerCase())
	{
		case "m":
			k = k1;
			break;
		case "v":
			k = k2;
			break;
		case "x-m":
			k = km;
			break;
		case "x-v":
			k = kv;
			break;
		case "x-y":
			k = ky;
			break;
		case "y":
			k = k3;
			break;
		default:
			k = 0;
	}
	return k;
}
function consultarMe()
{
	var c, k, dy, mx = 0, vx = 0, x;
	var cx, x1, x2, y1, y2;
	var chk = o.getElementById("chkYesDs");
	c = o.getElementById("txtX");
	k = c.value;
	if(ma.length == 0 && pa.length == 0 && qi.length == 0){
		return;
	}
	if(k < 0){
		x = 0;
	}
	else{
		if(k > L){
			x = Number(L);
		}
		else{
			x = Number(k);
		}
	}
	c.value = x;
	vx += getAnalisis_M(x,true);
	mx += getAnalisis_M(x,false);
	vx += getAnalisis_C(x,true);
	mx += getAnalisis_C(x,false);
	vx += getAnalisis_Q(x,true);
	mx += getAnalisis_Q(x,false);
	dy = Number(getDeflexion(x)*1000);
	if(chk.checked){
	   var xD = new Design();
	   xD.setSolicitaciones(vx,mx);
	   x1 = xD.getRefuerzo_Inferior();
	   x2 = xD.getRefuerzo_Superior();
	   y1 = xD.getRefuerzo_Transversal();
	   o.getElementById("txtAs").value = x2.toFixed(0);
	   o.getElementById("txtAi").value = x1.toFixed(0);
	   o.getElementById("txtS").value = y1.toFixed(5);
	   xD = null;
	}
	dibujarMe();
	c = o.getElementById("txtVx");
	c.value = vx.toFixed(2);
	c = o.getElementById("txtMx");
	c.value = mx.toFixed(2);
	c = o.getElementById("txtDy");
	c.value = dy.toFixed(2);
	c = o.getElementById("d-Cortante");
	if(c.getContext){
		cx = c.getContext("2d");
		cx.beginPath();
		cx.lineWidth = 1;
		cx.strokeStyle = "blue";
		x = getX(x);
		x1 = getX(-0.1*L);
		x2 = getX(1.1*L);
		y = getY(-vx,"V")
		cx.moveTo(x,0);
		cx.lineTo(x,c.height);
		cx.moveTo(x1,y);
		cx.lineTo(x2,y);
		cx.fillStyle = "blue";
		cx.arc(x,y,3,0,2*Math.PI);
		cx.stroke();
		cx.fill();
		cx.closePath();
	}
	c = o.getElementById("d-Momento");
	if(c.getContext){
		cx = c.getContext("2d");
		cx.beginPath();
		cx.lineWidth = 1;
		cx.strokeStyle = "blue";
		cx.moveTo(x,0);
		cx.lineTo(x,c.height);
		x1 = getX(-0.1*L);
		x2 = getX(1.1*L);
		y = getY(mx,"M");
		cx.moveTo(x1,y);
		cx.lineTo(x2,y);
		cx.fillStyle = "blue";
		cx.arc(x,y,3,0,2*Math.PI);
		cx.fill();
		cx.stroke();
		cx.closePath();
	}
	c = o.getElementById("d-Deflexion");
	if(c.getContext){
		cx = c.getContext("2d");
		cx.beginPath();
		cx.lineWidth = 1;
		cx.strokeStyle = "blue";
		cx.moveTo(x,0);
		cx.lineTo(x,c.height);
		x1 = getX(-0.1*L);
		x2 = getX(1.1*L);
		y = getY(-dy,"Y");
		cx.moveTo(x1,y);
		cx.lineTo(x2,y);
		cx.fillStyle = "blue";
		cx.arc(x,y,3,0,2*Math.PI);
		cx.fill();
		cx.stroke();
		cx.closePath();
	}
}
function analizarMe()
{
	var i, j, m = 0, v = 0;
	reset_VM();
	reset_Flex();
	for(i in xt)
	{
		v = 0; m = 0;
		//Momentos flexores
		v += getAnalisis_M(xt[i],true);
		m += getAnalisis_M(xt[i],false);
		//Cargas concentradas
		v += getAnalisis_C(xt[i],true);
		m += getAnalisis_C(xt[i],false);
		//Cargas distribuidas
		v += getAnalisis_Q(xt[i],true);
		m += getAnalisis_Q(xt[i],false);
		mt.push(m);
		vt.push(v);
	}
	for(i in xt)
	{
		m = 1000*Number(getDeflexion(xt[i]));
		gy.push(m);
	}
}
function Seccionar()
{
	var dL, i, j, n = 200;
	dL = Number(L/n);
	reset_X();
	for(i=1; i<=n; i++)
	{
		j = i - 1;
		xt.push(j*dL);
	}
	xt.push(L);
}
function reset_VM()
{
	mt = new Array();
	vt = new Array();
	reStart_gy();
}
function reset_X()
{
	xt = new Array();
	reset_VM();
	reset_Flex()
}
function reset_Flex(){
	aInf = new Array();
	aSup = new Array();
}
