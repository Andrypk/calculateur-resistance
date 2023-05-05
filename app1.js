//Fonction pour kechoix de calcul resistances equivalentes
const calculerEnSerie =()=>{

//On pointe sur l'élément de message
const resultatSerie = document.getElementById("resultatSerie");

//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de la premier  resistances
const premierResistance = document.getElementById("premierResistance");

//On pointe sur l'élément de champ de saisie de la second  resistances
const secondResistance = document.getElementById("secondResistance");

// recupere le valeur de deux resistance et convertir en entier
const  resistance1Serie =parseInt(premierResistanceSerie.value);
console.log(resistance1Serie);
const resistance2Serie=parseInt(secondResistanceSerie.value);
console.log(resistance2Serie);
const resistanceEnSerie =resistance1Serie + resistance2Serie;
console.log(resistanceEnSerie);
resultatSerie.innerHTML =  " resistance en serie " + resistanceEnSerie +" ohms";
}

//Resistances en paralleles...
const calculerEnParallele =()=>{

//On pointe sur l'élément de message
const resultatParallele = document.getElementById("resultatParalleles");

//On pointe sur l'élément de bouton
const bouton2 = document.getElementById("bouton2");
//On pointe sur l'élément de champ de saisie de la premier  resistances
const premierResistanceParalleles = document.getElementById("premierResistanceParalleles");

//On pointe sur l'élément de champ de saisie de la second  resistances
const secondResistanceParalleles = document.getElementById("secondResistanceParalleles");

// recupere le valeur de deux resistance et convertir en entier
const  resistance1Paralleles =parseInt(premierResistanceParalleles.value);
console.log(resistance1Paralleles);
const resistance2Paralleles=parseInt(secondResistanceParalleles.value);
console.log(resistance2Paralleles);
const resistanceEnParalleles =(1/resistance1Paralleles) + (resistance2Paralleles);
console.log(resistanceEnParalleles);

resultatParallele.innerHTML = " resistance en paralleles" + resistanceEnParalleles + " ohms";



}
//evenement produire au cliquer sur le bouton
bouton1.addEventListener('click', calculerEnSerie);
bouton2.addEventListener('click', calculerEnParallele);