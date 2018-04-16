/* LES FONCTIONS */

/**
 * Déclarer une fonction 
 * NB : Cette fonction ne retourne aucune valeur et ne prend pas de paramètres.
 */

 function Bonjour() {
     alert('Bonjour !')
 }

 /**
  * Je vais executer ma fonction "Bonjour"
  * et déclencher ses instructions.
  */

  Bonjour();

/**
     * Déclarer une fonction qui prend des variables en parametre.
     * @param {string} Prenom
     * @param {string} Nom
     */

  function ditBonjour(Prenom, Nom){
      document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> ! </p>");
  }

  /** Appeler / Executer une function avec des paramètres. */
ditBonjour("James", "Ranaivoson");


/* ---------------------
  EXERCICE :
  Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre.
---------------------- */


function addition(nb1, nb2,) {
 return nb1 + nb2;
}

document.write( "<p>" + addition(10,5) + "</p>");