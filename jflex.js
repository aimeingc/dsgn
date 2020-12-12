var o;
function readDp(documento)
{
	var c;
	alert("bieeew")
	o = documento;
	alert(o.body);
	c = o.getElementById("sDiseno");
	c.innerHTML = getTable_Chk();
}
function fm_Dp()
{
	var c;
	c = o.getElementById("txtC");
	c.style.textAlign = "right";
	c.value = 21.1;
	c.style.width = w;
	c = o.getElementById("txtYh");
	c.style.textAlign = "right";
	c.value = 240;
	c.style.width = w;
	c = o.getElementById("txtYt");
	c.style.textAlign = "right";
	c.value = 240;
	c.style.width = w;
	c = o.getElementById("txtLb");
	c.style.textAlign = "right";
	c.value = 1;
	c.style.width = w;
	c = o.getElementById("txtRs");
	c.style.textAlign = "right";
	c.value = 40;
	c.style.width = w;
	c = o.getElementById("txtRi");
	c.style.textAlign = "right";
	c.value = 40;
	c.style.width = w;
	c = o.getElementById("txtFC");
	c.style.textAlign = "right";
	c.value = 1;
	c.style.width = w;
	c = o.getElementById("txtRF");
	c.style.textAlign = "right";
	c.value = 0.9;
	c.style.width = w;
	c = o.getElementById("txtRC");
	c.style.textAlign = "right";
	c.value = 0.7;
	c.style.width = w;
}
function viewTab()
{
	var c = o.getElementById("pDiseno");
	var chk = o.getElementById("chkYesDs");
	if(chk.checked){
		c.innerHTML = getTable_Dis();
		c = o.getElementById("pMateriales");
		c.innerHTML = getTable_Mat();
		c = o.getElementById("rSeccion");
		c.innerHTML = getTable_Rec();
		c = o.getElementById("fDiseno");
		c.innerHTML = getTable_FC();
		fm_Dp();
	}
	else{
		c.innerHTML = "";
	}
}
function getTable_Chk()
{
	var st = ""+
	"<table>\n"+
	"	<tr>\n"+
	"		<td valign='center'>\n"+
	"			<input id='chkYesDs' name='QuestDs' type='checkBox' onclick='viewTab()'>\n"+
	"			<label for='chkYesDs'>Optener dise" + cesp("ñ") + "o para concreto reforzado</label>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"</table>";
	alert(st)
	return st;
}
function getTable_Rec()
{
	var st = ""+
	"<table>\n"+
	"	<tr>\n"+
	"		<th colspan='3'>Recubrimientos</th>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td>\n"+
	"			<label for='txtRs'>Refuerzo superior (d'<sub>Sup.</sub>)</label>\n"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtRs' type='number' onblur='dFocar(this)' onchange='' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"		<td>mm</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td width='190px'>\n"+
	"			<label for='txtRi'>Refuerzo inferior (d'<sub>Inf.</sub>)</label>\n"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtRi' type='number' onblur='dFocar(this)' onchange='' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"		<td>mm</td>\n"+
	"	</tr>\n"+
	"</table>\n";
	return st;
}
function getTable_Mat()
{
	var st = ""+
	"<table>\n"+
	"	<tr>\n"+
	"		<th colspan='3'>Propiedades de los materiales</th>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td>\n"+
	"			<label for='txtC'>Resistencia concreto (f'c)</label>\n"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtC' type='number' onblur='dFocar(this)' onchange='' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"		<td>MPa</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td>\n"+
	"			<label for='txtLb'>Coeficiente modificaci" + cesp("o") + "n (" + cesp("lambda") + ")</label>\n"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtLb' type='number' onblur='dFocar(this)' onchange='' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"		<td>MPa</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td>\n"+
	"			<label for='txtYh'>Resistencia refuerzo longitudinal (fy<sub>h</sub>)</label>\n"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtYh' type='number' onblur='dFocar(this)' onchange='' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"		<td>MPa</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td width='190px'>\n"+
	"			<label for='txtYt'>Resistencia refuerzo transversal (fy<sub>t</sub>)</label>\n"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtYt' type='number' onblur='dFocar(this)' onchange='' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"		<td>MPa</td>\n"+
	"	</tr>\n"+
	"</table>\n";
	return st;
}
function getTable_FC()
{
	var st = ""+
	"<table>\n"+
	"	<tr>\n"+
	"		<th colspan='3'>Magnificar solicitaciones externas</th>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td>\n"+
	"			<label for='txtFC'>Factor de carga</label>\n"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtFC' type='number' onblur='dFocar(this)' onchange='' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<th colspan='3'>Reducci" + cesp("o") + "n de resistencia</th>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td>\n"+
	"			<label for='txtRF'>Reducci" + cesp("o") + "n flexi" + cesp("o") + "n</label>"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtRF' type='number' onblur='dFocar(this)' onchange='' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td width='190px'>\n"+
	"			<label for='txtRC'>Reducci" + cesp("o") + "n cortante</label>"+
	"		</td>\n"+
	"		<td>\n"+
	"			<input id='txtRC' type='number' onblur='dFocar(this)' onchange='' onfocus='eFocar(this)'>\n"+
	"		</td>\n"+
	"	</tr>\n"+
	"</table>\n";
	return st;
}
function getTable_Dis()
{
	var st = ""+
	"<table>\n"+
	"	<tr>\n"+
	"		<td id='pMateriales'></td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td id='rSeccion'></td>\n"+
	"	</tr>\n"+
	"	<tr>\n"+
	"		<td id='fDiseno'></td>\n"+
	"	</tr>\n"+
	"</table>";
	return st;
}
