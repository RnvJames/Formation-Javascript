 // alert('WOW Tu es toujours avec moi ...')

 // Deux slash pour faire un commentaire uniligne.


 /*  

        Ici, je peux faire un commentaire sur plusieurs lignes.

        RACCOURCI : ctrl + : 
            ou : alt + shift + a

 */        


 //  -- 1. Déclarer une variable en JS

var Prenom;

// -- 2. Affecter une valeur

Prenom = "Hugo"

// --3. Afficher la valeur de ma variable dans la console 

console.log(Prenom);


/*-------------------------------------------------- 
| ~ ~ ~ ~ ~   LES TYPES DE VARIABLES   ~ ~ ~ ~ ~ ~ |
---------------------------------------------------*/

// -- Ici typepof permet de connaitre le type de ma variable.

console.log(typeof Prenom);

// -- Déclaration d'un nombre 

var Age = 40;

// -- Afficher dans la console 

console.log(Age)

// -- Connaitre son type

console.log(typeof Age);


/* LA PORTEE DES VARIABLES 

Les variables déclarées directement à la racine du fichier JS  sont appelées variables GLOBALES.

Elles sont dispnibles dans l'ensemble de votre document, y compris dans les fonctions.

-----------------------------------------------------

Les variables déclarées à l'intérieur d'une fonction sont appelées variables LOCALES.
Elles sont disponible uniquement dans le contexte de la fonction, ou du bloc qui les contient. 

-----------------------------------------------------

Depuis ECMA 6 ; vous pouvez déclarer une variable avec le mot-clé "let".

Votre variable sera alors accessible uniquement dans le bloc dans lequel, elle est contenue.

Si elle est déclarée dans une condition, elle sera disponible uniquement dans le bloc de la condition.

----------------------------------------------------*/



// -- Les variables FLOAT

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (VRAI / FAUX )
var unBooleen = false; // true;
console.log(unBooleen);
console.log(typeof unBooleen);

//-- Les Constantes 

/**
 * la déclaration CONST permet de créer une constante accessible uniquement en lecture. Sa valeur ne pourra pas etre modifiée par des réaffectations ultérieures.
 * Une constante ne peut pas etre déclarée à nouveau.
 * 
 * Généralement, par convention, les constantes sont en majuscule.
 * 
 * Depuis ECMA 6, on recommande l'utilisation des constantes plutôt que var ou let s'il n'y aura pas de modification de valeur à votre variable.
 * 
 */

 const HOST = "localhost";
 const USER = "root";
 const PASSWORD = "mysql";

 //-- je ne peux pas faire cela...
 // USER = "HUGO"

 // Uncaught TypeError: Assignment to constant variable.

 //const USER = "HUGO";

 // Uncaught SyntaxError: Identifier 'USER' has already been declared




 /*----------------------------------------
| ~ ~ ~ ~ ~   LA MINUTE INFO   ~ ~ ~ ~ ~ ~ |
-------------------------------------------*/

/* Au fur et a mesure que l'on affecte ou ré-affecte des valeurs à une variable, celle-ci prend la nouvelle valeur et le nouveau type.

En Javascprit (ECMA script) ; les variables sont auto-typées. 

Pour convertir une variable de type NUMBER en STRING et STRING en number je peux utiliser les fonction natives de javascript.

------------------------------------------------- */

var unNombre = "24";
console.log (unNombre);
console.log(typeof unNombre);

/**
 * La fonction parseInt() pour retourner
 * un Entier  à partir de mon string.
 */

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- je ré-affecte une valeur à ma variable parsefloat pour les décimales

unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//-- Conversion d'un Nombre en String avec toString()

unNombre = 10;
var monNombreEnString = unNombre.toString();
console.log(unNombre);
console.log(typeof unNombre);
console.log(monNombreEnString);
console.log(typeof monNombreEnString);
