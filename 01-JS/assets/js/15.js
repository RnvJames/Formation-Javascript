

/*   ------------    LES EVENEMENTS -----------------  */

/**
 *      Les évenements vont me premetttre de déclencher une fonction, 
 *      c'est a dire une série d'instruction ; suite à une action de mon utilisateur ...
 * 
 * 
 *      OBJECTIF : Etre en mesure de capturer ces évènements afin d'executer une fonction.
 * 
 * 
 *      Les Evenement : MOUSE ( Souris)
 *          
 * 
 *          click : au clic sur un élément 
 *          mouseenter : la souris passe au dessus de la zone d'un élément.
 *          mouseleave : la souris sort de cette zone.
 * 
 * 
 *      Les Evenement : Keyboard  
 * 
 *
 *          keydown : une touche du clavier est enfoncée ; 
 *          keyup : une touche du clavier a été relachée
 * 
 * 
 *      Les Evenement : WINDOW (Fenêtre)
 * 
 *         scroll : défilement de la fenêtre
 *         resize : redimensionnement de la fenêtre.
 * 
 * 
 *      Les Evenement : FORM (formulaire)
 * 
 *          change : pour les élément, <input> , <select> et <textarea> ;
 *          submit : à l'envoi ( soumission ) du formulaire ;
 *          input : pour capter la saisie d'un utilisateur sur un champ <input>. 

 */

 /* --------------------- LES ECOUTEURS D'EVENEMENT -------------------------------- */

 /**
  *         Pour attacher un événement à un élément ou autrement dit , pour déclarer un écouteur d'évenement qui se chargera de déclencher une fonction, je vais utiliser la     *         syntaxe suivante : 
  *
  */

  var p = document.getElementById('MonParagraphe')

  // -- je souhaite que mon paragraphe soit rouge au clic de la souris . 

  function changerLaCouleurEnRouge(){
      p.style.color = "red";

  }

  p.addEventListener ('click',changerLaCouleurEnRouge)

  /* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/


// Créer un champ input avec un ID

var input = document.createElement('input')

//-- attribution d'un attribut

input.setAttribute('type','text');
input.setAttribute('placeholder', 'saisissez du contenu')

input.id = "MonID"

document.body.appendChild(input);

function VoirLaSaisieDeMonInput(){
    console.log(input.value)
    alert(input.value)
}

input.addEventListener ('change', VoirLaSaisieDeMonInput )