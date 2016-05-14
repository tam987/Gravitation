function fonction(a) {

	return (3.0*m*Math.pow(a,2) - a + m/Math.pow(L,2));

						}


function calcul_des_coefficients_de_a(n) {

	j[0] = n*dphi;
	j[1] =(n+k[0]/2)*dphi;
	j[2] =(n+k[1]/2)*dphi;
	j[3] =(n+k[2])*dphi;

											}

function calcul_des_coefficients_de_A(m) {

	k[0]=fonction(m)*dphi;
	k[1]=fonction(m+j[0]/2)*dphi;
	k[2]=fonction(m+j[1]/2)*dphi;
	k[3]=fonction(m+j[2])*dphi;

											}

function rungekutta_4_1(p) {

	a = a + (1./6.)*(j[0]+2.*(j[1]+j[2])+j[3]);

	calcul_des_coefficients_de_a(a);

	return a;

								}

function rungekutta_4_2(p1) {

	A = A + (1./6.)*(k[0]+2.*(k[1]+k[2])+k[3]);

	calcul_des_coefficients_de_A(A);

	return A;

								}
