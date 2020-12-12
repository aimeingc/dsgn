/**
=====================================================================================================
									+++	DESIGN (jDesign.js)	+++
=====================================================================================================	
Script para obtener el areas teoricas de refuerzo transversal para resistir fuerzas cortantes y
refuerzo longitudinal (inferior y superior) para resistir momentos por flexión en vigas de seccion
rectangular en concreto reforzado.

La metodologia utilizada en el analisis es basada en el principio de la Resistencia Ultima o principio
de la Resistencia.

Escrito y programado por: Ingeniero Civil Alexander Ibarguen Mendoza.	
**/
var o;
function readDesign(documento){
	o = documento;
	alert("El diseñador está listo y en modo espera.");
}
function Design()
{
	var aInf = 0, aSup = 0, aTra = 0, sp, V = 0, M = 0;
	//Revisión de las variables para diseño estructural por cortante y por flexión.
	function can_Design(){
		var w;
		function is_Ok(txt){
			var k = true;
			if(Number(txt.value) == 0){
				k = false;
			}
			return k;
		}
		function rev_Seccion(){
			var k = false;
			var t = o.getElementById("txtB");
			if(is_Ok(t)){
				t = o.getElementById("txtH");
				if(is_Ok(t)){
					k = true;
				}
				else{
					alert("Por favor, defina la magnitud del espesor de la seccion transversal de la viga.");
					t.focus();
				}
			}
			else{
				alert("Por favor, defina la magnitud del ancho de la seccion transversal de la viga.");
				t.focus();
			}
			return k;
		}
		function rev_Coeficientes(){
			var k = false;
			var t = o.getElementById("txtRF");
			if(is_Ok(t)){
				t = o.getElementById("txtRC");
				if(is_Ok(t)){
					k = true;
				}
				else{
					alert("Por favor, defina la magnitud del coeficiente reductor de resistencia nominal por cortante.");
					t.focus();
				}
			}
			else{
				alert("Por favor, defina la magnitud del coeficiente reductor de resistencia nominal por flexión.");
				t.focus();
			}
			return k;
		}
		function rev_FactorCarga(){
			var k = false;
			var t = o.getElementById("txtFC");
			if(is_Ok(t)){
				k = true;
			}
			else{
				alert("Por favor, defina la magnitud del factor de cargas.");
				t.focus();
			}
			return k;
		}
		function rev_Recubrimientos(){
			var k = false;
			var t = o.getElementById("txtRs");
			if(is_Ok(t)){
				t = o.getElementById("txtRi");
				if(is_Ok(t)){
					k = true;
				}
				else{
					alert("Por favor, defina la magnitud del recubrimiento, en concreto, para el refuerzo inferior.");
					t.focus();
				}
			}
			else{
				alert("Por favor, defina la magnitud del recubrimiento, en concreto, para el refuerzo superior.");
				t.focus();
			}
			return k;
		}
		function rev_Materiales(){
			var k = false;
			var t = o.getElementById("txtC");
			if(is_Ok(t)){
				t = o.getElementById("txtLb");
				if(is_Ok(t)){
					t = o.getElementById("txtYh")
					if(is_Ok(t)){
						t = o.getElementById("txtYt");
						if(is_Ok(t)){
							k = true;
						}
						else{
							alert("Por favor, defina la magnitud de la resistencia nominal del refuerzo transversal a la fluencia");
							t.focus();
						}
					}
					else{
						alert("Por favor, defina la magnitud de la resistencia nominal del refuerzo longitudinal a la fluencia.");
						t.focus();
					}
				}
				else{
					alert("Por favor, defina la magnitud del factor que modifica las propiedades mecanicas reducidas del concreto.");
					t.focus();
				}
			}
			else{
				alert("Por favor, defina la magnitud de la resistencia nominal del concreto a la compresion");
				t.focus();
			}
			return k;
		}
		if(rev_Seccion() && rev_Materiales() && rev_Recubrimientos() && rev_FactorCarga() && rev_Coeficientes()){
			w = true;
		}
		else{
			w = false;
		}
		return w;
	}
	function CalcularC(){
		//variables de la seccion transversal
		var b, h, ri, d;
		//variables de las propiedades de los materiales
		var fc, fy, lmb;
		//variables de coeficientes y factores
		var fi, U;
		//variables de fuerzas cortantes factoradas
		var Vc, Vd, Vs, Vu;
		//otras variables en el diseño
		var g, Kv, K1, K2, m = 1;
		if(sp){
			b = Number(o.getElementById("txtB").value);
			h = Number(o.getElementById("txtH").value);
			ri = Number(o.getElementById("txtRi").value);
			d = h - ri;
			fc = Number(o.getElementById("txtC").value);
			fy = Number(o.getElementById("txtYt").value);
			lmb = Number(o.getElementById("txtLb").value);
			fi = Number(o.getElementById("txtRC").value);
			U = Number(o.getElementById("txtFC").value);
			Kv = Number((lmb*fi*Math.pow(fc,0.5))*(b*d)) //magnitud en Newtons
			Vc = Number(0.17*Kv);
			Vd = Number(U*V);
			Vu = 1000*Math.abs(Vd); //convierte kN a N
			if(Vu > Vc){//requiere que se defina el refuerzo por fuerza cortante
				Vs = Vu - Vc;
				K1 = 0.67*Kv;
				K2 = 0.33*Kv;
				if(Vs > K1){//la seccion transversal es insuficiente
					m = 0.5;
					alert("La sección transversal es insuficiente para resistir la fuerza cortante Vu = " + Vu.toFixed(2) + " kN.");
				}
				else{
					if(Vs > K2){
						m = 0.5;
					}
				}
				g = Number(fi*fy*d/Vs);
			}
			else{//se asigna refuerzo minimo por fuerza cortante
				if(Vu < (Vc/2)){//no requiere refuerzo por fuerza cortante
					g = 0;
				}
				else{
					g = Number(3*fy/b);
				}
			}
			aTra = Number(g*m);
		}
	}
	function CalcularF(){
			//variables de la seccion transversal
			var b, h, ri, rs, d, d1;
			//variables de las propiedades de los materiales
			var B1, Es = 200000, euc = 0.003, fc, fy, fs, kc, ks;
			//variables de coeficientes y factores
			var fi, U;
			//variables de fuerzas cortantes factoradas
			var M2, Md, Mmax, Mu;
			//variables de cuatias
			var cuantBal, cuantMax, cuantMin, cuant1, cuant2, cuant;
			//otras variables
			var k1, ku, xc, xf;
			if(sp){
				fc = Number(o.getElementById("txtC").value);
				fy = Number(o.getElementById("txtYh").value);
				b = Number(o.getElementById("txtB").value);
				h = Number(o.getElementById("txtH").value);
				ri = Number(o.getElementById("txtRi").value);
				rs = Number(o.getElementById("txtRs").value);
				fi = Number(o.getElementById("txtRF").value);
				U = Number(o.getElementById("txtFC").value);
				Md = Number(U*M);
				Mu = Math.abs(Md*1000000);
				kc = Number(0.85*fc);
				ks = Number(euc*Es);
				fs = fy - kc
				k1 = Number(0.85 - 0.005*(fc-28)/7);
				if(k1 < 0.65){
					B1 = 0.65;
				}
				else{
					if(k1 > 0.85){
						B1 = 0.85;
					}
					else{
						B1 = k1;
					}
				}
				if(Md < 1){
					d = h - rs;
					d1 = ri;
				}
				else{
					d = h - ri;
					d1 = rs;
				}
				cuant1 = Number(Math.pow(fc,0.5)/(4*fy));
				cuant2 = Number(1.4/fy);
				cuantBal = Number(B1*(kc/fy)*(ks/(ks + fy)));
				cuantMax = Number(0.75*cuantBal);
				cuantMin = Math.max(cuant1,cuant2);
				Mmax = Number(fi*cuantMax*(fy)*(1 - 0.59*cuantMax*fy/fc))*Number(b*Math.pow(d,2));//N-mm/mm
				if(Mu > Mmax){//la seccion transversal requiere refuerzo en la zona de compresión
					M2 = Mu - Mmax;
					xf = Number(cuantMax*b*d) + Number(M2/(fi*fy*(d-d1)));
					xc = Number(M2/(fi*(fs)*(d-d1)));
				}
				else{//la seccion transversal requiere refuerzo solo en la zona de traccion
					xc = 0;
					ku = Number(Mu/(fi*b*Math.pow(d,2)));
					cuant = (kc/fy)*(1-Math.pow((1-2*k1/kc),0.5));
					//Controlando la cuantía
					if(cuant < cuantMin){ cuant = cuantMin; }
					xf = Number(cuant*b*d);
				}
				if(Md >= 0){
					aInf = xf;
					aSup = xc;
				}
				else{
					aInf = xc;
					aSup = xf;
				}
			}
		}
	//Lectura de solicitaciones externas de cortante y flexion en kN y kN-m
	this.setSolicitaciones = function(Fuerza_Cortante, Momento_Flexor){
		var k;
		V = Number(Fuerza_Cortante);
		M = Number(Momento_Flexor);
		aInf = 0; aSup = 0, aTra = 0;
		sp = can_Design();
		if(sp){
			CalcularC();
			CalcularF();
		}
	}
	/*
	this.Cortante = function(){
		this.getRefuerzo_Transversal = function(){
			return Number(aTra);
		}
	}
	this.Flexion = function(){
		var aInf = 0, aSup = 0;
		this.getRefuerzo_Inferior = function(){
			return Number(aInf);
		}
		this.getRefuerzo_Superior = function(){
			return Number(aSup);
		}
	}
	*/
	this.getRefuerzo_Transversal = function(){
		return Number(aTra);
	}
	this.getRefuerzo_Inferior = function(){
		return Number(aInf);
	}
	this.getRefuerzo_Superior = function(){
		return Number(aSup);
	}
}
