/* --
    CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];
        
// -- LesFlemards.js
function l(e) {
    console.log(e);
}

function w(f) {
    document.write(f);
}

// -- Déclaration des Variables
// EstCeQueLeMailEstDansLeTableau = faux;
var isEmailInArray = false;

// -- 1. Demander à l'utilisateur son email/mot de passe
var email   = prompt('Bonjour, Quel est votre email ?','<Saisissez votre email>');
var mdp     = prompt('votre mot de passe ?','<Saisissez votre mot de passe>');

// -- 2. Parcourir l'ensemble des données de mon tableau
// for(let user of BaseDeDonnees) {...}
for(let i = 0 ; i < BaseDeDonnees.length ; i++) {

    // -- 2a. Vérifier l'identification de l'utilisateur
    if(email === BaseDeDonnees[i].email && mdp === BaseDeDonnees[i].mdp) {
        
        // -- J'ai trouvé une correspondance
        isEmailInArray = true;
        w('Bonjour ' + BaseDeDonnees[i].prenom + ' !');

        // -- Je stop la boucle for, j'ai trouvé ce que je cherche.
        break;
    }

}

if(!isEmailInArray) {
    // -- Aucune correspondance
    alert('ATTENTION, Email / Mot de Passe incorrect !');
    

// -- 3. Vérifier si l'email et le mot de passe saisie par l'utilisateur correspond avec la BDD.

    for(let i = 0 ; i < BaseDeDonnees.length ; i++)  {
    
        console.log(BaseDeDonnees[i])
        
          if (emailUser === BaseDeDonnees[i].email && mdpUser === BaseDeDonnees[i].mdp) {
   
            alert('Bienvenue sur mon site internet'); 
            
          } else {
             alert('ATTENTION, email/mot de passe incorrect.');
         
         }
         
         }
<<<<<<< HEAD

<<<<<<< HEAD
}
=======
>>>>>>> f0480bea20b18c8efb3d4172a7f7b29bad0e7662
=======
         
    
}

>>>>>>> f0480bea20b18c8efb3d4172a7f7b29bad0e7662
