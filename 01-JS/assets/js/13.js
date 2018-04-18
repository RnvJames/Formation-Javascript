
/*  ---------------------------------- LE DOM ---------------------------------------- */


/**
 *      Le dom est une interface de dévelopement en JS pour  HTML. Grace au DOM je vais etre en mesure d'accéder ou encore
 *      modifier mon HTML.
 * 
 *      L'Objet document : c'est le point d'entrée vers mon contenue HTML. 
 * 
 *      Chaque page chargée dans mon navigateur à un objet "document". 
 * 
 */


 /*
        - comment puis je faire pour récupérer 
            les différentes informations de ma page HTML ?
 */


 /* -----------------------------       document.getElementById    ------------------------------ */

 /**
  * document.getElementById() est une fonction qui va permettre de récupérer un élement HTML à partir de son identifiant unique : ID
  * 
  */


  var Bonjour = document.getElementById('bonjour');
  console.log(bonjour);




  /* -----------------------------       document.getElementsByClassName    ------------------------------ */

  /**
   *        document.getElementsByClassName() : C'est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur classe.
   * 
   */

   var contenu = document.getElementsByClassName('contenu');
   console.log(contenu) 

   //-- Me renvoi un tableau JS avec mes éléments HTML (Collection HTML) ! .




/* -----------------------------       document.getElementsByTagName    ------------------------------ */

/**
 *          document.getElementsByTagName() :  C'est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur *nom de balise *
 *
 */


var span = document.getElementsByTagName('span')
console.log(span)










