

/*  ---------------------------- LA MANIPULATION DES CONTENUS ! -----------------------------  */ 



function l(e) {
    console.log(e)
}

// l = e => console.log(e)

// Nouvelle Syntaxe ECMA 6 avec les fonctions fléchées
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es


// -- je souhaite récupérer mon lien google ; comment procéder  ?

var google = document.getElementById('google');
l(google)

//-- Maintenant, je souhaite accéder aux informations de ce lien ...

// -- A : Le lien vers lequel pointe la balise
l(google.href)

// --- B : l'ID de la balise 
l(google.id)

// --- C : La classe de la balise 
l(google.className);

//--- D : Le texte de la balise 
l(google.textContent);

/**
 * Maintenant je souhaite modifier le contenue de mon lien !
 * Comme une variable classique, je vais simplement venir affecter une nouvelle valeur à mon "textContent".
 */

google.textContent = "Mon lien vers GooOoOOoogle !";



/* ---------------------------  AJOUTER UN ELEMENT DANS MA PAGE ------------------------------- */

/**
 * Nous allons utiliser 2 étapes :
 * 
 * 1. La fonction document.createElement() va permettre de générer un nouvel élément dans le DOM ; que je pourrais
 * modifier par la suite avec les méthodes que nous venons de voir...
 * 
 * NB : Ce nouvel élément est placé en mémoire ...
 * 
 */

 // -- Définition de l'élément

 var span = document.createElement('span')

 // -- si je souhaite lui donner un ID

 span.id = "MonSpan";

 // -- lui attribuer du contenu

 span.textContent = "Mon Beau texte en JS";

 // -- Comment ajouter l'élément dans ma page ?

 google.appendChild(span)


 /* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */
// -- créer la balise h1

var h1 = document.createElement('h1');
// -- créer la balise a 
var a = document.createElement('a');
// -- titre de l'article
a.textContent = "Titre de mon article"
// -- je donne un lien a mon lien
a.href = "#";
// -- je met mon lien a , dans mon h1
h1.appendChild(a);

// -- je met mon h1 dans la page 

document.body.appendChild(h1);

// -- je veux que mon lien soit en rouge

a.style.color = "red"
// -- je ne veux pas que mon text ne soit pas osuligné

a.style.textDecoration = "none"