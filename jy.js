var gy, o;
function readY(documento)
{
	o = documento;
	reStart_gy();
	alert("Deflexiones");
}
function getDeflexion(abscisa)
{
	var li, lj, lo, wi, wj, wo;
	var qr, qx, wx;
	var xr, xc, x = 0;
	var y = 0;
	var Ev = o.getElementById("txtEv").value;
	if(isNaN(abscisa) == false)
	{
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
		if(mt.length > 0){
			for(i=2; i<=mt.length; i++)
			{
				var ra = 0, rb = 0;
				var ini = i - 2;
				var fin = i - 1;
				wi = Number(mt[ini]);
				wj = Number(mt[fin]);
				li = Number(xt[ini]);
				lj = Number(xt[fin]);
				qr = Number((wi + wj)*(lj - li)/2);
				xr = Number(li + ((2*wj + wi)/(wj + wi))*(lj - li)/3);
				rb = Number(-(qr*xr/L));
				ra = Number(-(rb + qr));
				if(x < li){
					y += Number(ra*x);
				}
				else{
					if(x <= lj){
						wx = Number((wj - wi)/(lj - li)*(x - li) + wi);
						xc = Number(li + (2*wx + wi)/(wx + wi)*(x - li)/3);
						qx = Number((wx + wi)*(x - li)/2);
						y += Number(ra*x + qx*(x - xc));
					}
					else{
						y += Number(ra*x + qr*(x - xr));
					}
				}
			}
		}
	}
	return Number(y/Ev);
}
function reStart_gy()
{
	gy = new Array();
}