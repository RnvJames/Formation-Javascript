/* ---------------------- LA GESTION DU TEMPS ------------------------------- */

/**
 * la fonction "setTimeout" me permet de spécifier une fonction à éxécuter au bout d'une durée définie.
 */

 function Hello() {
     alert('Bonjour toi ! que fais-tu ici ?')
 }

 /**
  * 1. La fonction à éxécuter
  * 2. La durée en millisecondes.
  */

  setTimeout(Hello, 3000);

  /**
   * La fonction "setInterval " me permet d'executer une fonction à un interval régulier défini
   */

   setInterval(Hello, 3000);