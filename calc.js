var nombreUn =Number(prompt("entrez un premier nombre"));
var nombreDeux =Number(prompt("entrez un second nombre"));

//alert("la somme de vos nombres est : " + add(nombreUn,nombreDeux)+" \nLe produit de vos nombres est : "+ mult(nombreUn,nombreDeux));

var monTitre = document.querySelector('h1');
monTitre.textContent = "La somme de vos nombres est : " + add(nombreUn,nombreDeux);

var monTitre2 = document.querySelector('h2');
monTitre2.textContent = "Le produit de vos nombres est : "+mult(nombreUn,nombreDeux);

//document.querySelector('html').onclick = function() {
  //  alert('Aïe, arrêtez de cliquer !!');
//}

function add(n1, n2){
	return n1 + n2;
}
function mult(n1, n2){
	return n1 * n2;
}
