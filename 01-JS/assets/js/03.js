/* LA CONCATENATION  */


/**
 * Aujourd'hui 16/04/2018, sont présent
 * 12 apprenants.
 */

 var DebutDePhrase = "Aujourd'hui ";
 var DateDuJour     = new Date();
 var SuiteDePhrase  = ", sont présents : ";
 var NbApprenants   = 12;
 var FinDePhrase    = " apprenants.<br>";

 /**
  * Nous souhaitons maitenant, grâce à la concaténation, afficher tout ce petit monde en un seul morceau.
  
  */

  document.write(DebutDePhrase + DateDuJour.getDate() + "/" + (DateDuJour.getMonth() + 1) + "/" + DateDuJour.getFullYear() + SuiteDePhrase + NbApprenants + FinDePhrase )

   /* ----------------------------------------------------------
  EXERCICE :
  Créez une concaténation à partir des éléments suivants :  
---------------------------------------------------------- */

var phrase1 = "Je m'appelle ";
var phrase2 = "James et j'ai ";
var age     = 24;
var phrase3 = " ans !<br>";

document.write(phrase1 + phrase2 + age + phrase3 )

