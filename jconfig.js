var o, mt, vt, w = 110;
function cargar(documento)
{
	var c, st;
	o = documento;
	o.body.innerHTML = getTable_00();
	c = o.getElementById("c-01");
	c.innerHTML = getTable_01();
	alert("Configurando...");
	fm_S();
	o.title = "VIGA - ANALISIS Y DISEÑO"
}
function fm_S()
{
	var c, fs = 12;
	c= o.getElementById("copyr");
	c.style.color = "rgb(0,0,125)";
	c.style.fontSize = fs;
	c.style.fontWeight = "bold";
	c.style.textAlign = "center";
}
function getTablr_02()
{
	var st = ""+
	"	<table valign='top'>\n"+
	"	</table>\n";
	return st;
}
function getTable_01()
{
	var st = ""+
	"	<table valign='top'>\n"+
	"		<tr>\n"+
	"			<td id='pGeometria'>\n"+
	"			</td>\n"+
	"		</tr>\n"+
	"		<tr>\n"+
	"			<td id='cMomento'>\n"+
	"			</td>\n"+
	"		</tr>\n"+
	"		<tr>\n"+
	"			<td id='cConcentrada'>\n"+
	"			</td>\n"+
	"		</tr>\n"+
	"		<tr>\n"+
	"			<td id='cDistribuida'>\n"+
	"			</td>\n"+
	"		</tr>\n"+
	"		<tr>\n"+
	"			<td id='sDiseno'>\n"+
	"			</td>\n"+
	"		</tr>\n"+
	"		<tr>\n"+
	"			<td id='pDiseno'>\n"+
	"			</td>\n"+
	"		</tr>\n"+
	"	</table>\n";
	return st;
}
function getTable_00()
{
	var anm = "Alexander Ibarg" + cesp("u..") + "en Mendoza\n"+
	"<div>Ingeniero Civil</div>\n"+
	"<div>alscipion@gmail.com - aimeing.c@gmail.com</div>\n"+
	"<div>Tel" + cesp("e") + "fono m" + cesp("o") + "vil: +573147783240</div>\n"+
	"<div>WhatsApp: +573147783240<div>";
	var st = "\n"+
	"<table align='center' id='tb-00'>\n"+
	"	<tr><td id='c-01' valign='top'></td><td id='Diagramas' valign='top'></td></tr>\n"+
	"</table><br>\n"+
	//"<hr><div id='copyr'>" + cesp("(c)") + " 2018 Alexander Ibarg" + cesp("u..") + "en Mendoza</div>\n";
	"<hr><div id='copyr'>" + cesp("(c)") + " 2018 " + anm + "</div>\n";
	return st;
}
function dFocar(txt)
{
	txt.style.background = "white";
	txt.style.color = "black";
	txt.style.fontWeight = "normal";
}
function eFocar(txt)
{
	txt.style.background = "yellow";
	txt.style.color = "brown";
	txt.style.fontWeight = "bold";
	txt.select();
}
function reset_Q()
{
	var c1, c2, c3, c4, i, j, n;
	c1 = o.getElementById("lstQi");
	c2 = o.getElementById("lstQf");
	c3 = o.getElementById("lstLi");
	c4 = o.getElementById("lstLf");
	n = c1.length;
	for(i=n; i>=1; i--)
	{
		j = i - 1;
		c1.remove(j);
		c2.remove(j);
		c3.remove(j);
		c4.remove(j);
	}
}
function reset_M()
{
	var c1, c2, i, j, n;
	c1 = o.getElementById("lstM");
	c2 = o.getElementById("lstLm");
	n = c1.length;
	for(i=n; i>=1; i--)
	{
		j = i - 1;
		c1.remove(j);
		c2.remove(j);
	}
}
function reset_C()
{
	var c1, c2, i, j, n;
	c1 = o.getElementById("lstP");
	c2 = o.getElementById("lstLp");
	n = c1.length;
	for(i=n; i>=1; i--)
	{
		j = i - 1;
		c1.remove(j);
		c2.remove(j);
	}
}
function cesp(a)
{
	var k = "?";
	switch (a)
	{
		case "a":
			k = "&#225";
			break;
		case "e":
			k = "&#233";
			break;
		case "i":
			k = "&#237";
			break;
		case "o":
			k = "&#243";
			break;
		case "u":
			k = "&#250";
			break;
		case "A":
			k = "&#193";
			break;
		case "E":
			k = "&#201";
			break;
		case "I":
			k = "&#205";
			break;
		case "O":
			k = "&#211";
			break;
		case "U":
			k = "&#218";
			break;
		case "lambda":
			k = "&#955";
			break;
		case "alfa":
			k = "&#945";
			break;
		case "beta":
			k = "&#946";
			break;
		case "teta":
			k = "&#952";
			break;
		case "ro":
			k = "&#961";
			break;
		case "mu":
			k = "&#956";
			break;
		case "nu":
			k = "&#957";
			break;
		case "pi":
			k = "&#960";
			break;
		case "phi":
			k = "&#934";
			break;
		case "Omega":
			k = "&#911";
			break;
		case "Delta":
			k = "&#916";
			break;
		case "suma":
			k = "&#931";
			break;
		case "r":
			k = "&#933";
			break;
		case "n":
			k = "&#942";
			break;
		case "ñ":
			k = "&#241";
			break;
		case "Ñ":
			k = "&#209";
			break;
		case "delta":
			k = "&#948";
			break;
		case "Q":
			k = "&#963";
			break;
		case "t":
			k = "&#9618";
			break;
		case "2":
			k = "&#178";
			break;
		case "3":
			k = "&#179";
			break;
		case "1/8":
			k = "&#8539";
			break;
		case "1/4":
			k = "&#188";
			break;
		case "1/2":
			k = "&#189";
			break;
		case "3/8":
			k = "&#8540";
			break;
		case "5/8":
			k = "&#8541";
			break;
		case "3/4":
			k = "&#190";
			break;
		case "7/8":
			k = "&#8542";
			break;
		case "D":
			k = "&#1060";
			break;
		case "d":
			k = "&#1092";
			break;
		case "Suma":
			k = "&#8721";
			break;
		case "gc":
			k = "&#8451";
			break;
		case "gf":
			k = "&#8457";
			break;
		case "#":
			k = "&#8470";
			break;
		case "f-de":
			k = "&#8594";
			break;
		case "f-iz":
			k = "&#8592";
			break;
		case "f-ar":
			k = "&#8593";
			break;
		case "f-ab":
			k = "&#8595";
			break;
		case "u..":
			k = "&#252";
			break;
		case "(r)":
			k = "&#174";
			break;
		case "(c)":
			k = "&#169";
			break;
		default:
	}
	return k;
}