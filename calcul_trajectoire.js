function trajectoire() {

	var c,G,r0,Vphi,M,m,L,a,A,x1,y1,x2,y2,phi,dphi,k,j;
	c = 299792458;													// Ici nous déclarons puis initialisons nos variables. Remarque:
	G = 6.6742*Math.pow(10,-11);									// Ne pas oublier de convertir en chiffres les valeurs de nos paramètres qui 
	r0 = Number(document.getElementById("r0").value);				// rentrés par l'utilisateur et qui resteront sinon des valeurs TEXTES!!!
	Vphi = Number(document.getElementById("Vphi0").value) ; 
	M = Number(document.getElementById("M").value); 
	m = G*M/Math.pow(c,2);
	L = Vphi0*r0/c;
	a = 1.0/r0;
	A = -Vr/(Vphi*r0);
	phi = 0.0;
	dphi = 0.001;
	p = 0;



	x1 = r0*cos(phi);	//Ici on initialise la position de notre particule et donc x1 et y1 représente ses coordonnées à l'instant initiale 
	y1 = r0*sin(phi); 	// le but du bout de code qui suit ( particulière celui dans la conditionnelle if ) est de calculer pour des instants
						// t voisins, la valeur de a (donc de r) , puis celle de x2 et y2 à l'instant d'après. 
	k=[0,0,0,0];
	j=[0,0,0,0];

	if(r0!=0.0) {

			a = rungekutta_4_1(phi);
			r = 1.0/a;
			A = rungekutta_4_2(phi);
			x2 = (100/r0)*r*cos(phi);
			y2 = (100/r0)*r*sin(phi);
			x1 = x2;
			y1 = y2;
			phi = phi + dphi;

					}
	
