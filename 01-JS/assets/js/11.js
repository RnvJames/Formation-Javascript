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

// -- 1. Demander à l'utilisateur son email


var emailUser = prompt("Veuillez saisir votre email", "<Saisir votre Email>");


// -- 2. Demander son mot de passe


var mdpUser = prompt ("Veuillez saisir votre mot de passe", "<Saisir votre mot de passe>");



// -- 3. Vérifier si l'email et le mot de passe saisie par l'utilisateur correspond avec la BDD.


for(let i = 0 ; i < BaseDeDonnees.length ; i++) {
    
    let donnees = BaseDeDonnees[i];


    for(let email in donnees.email); {

    for(let mdp in donnees.mdp); {
console.log(donnees)






function monUtilisateurEstCorrect(emailPasseEnParam, mdpPasseEnParam) {

    if(emailPasseEnParam === donnees.email && mdpPasseEnParam === donnees.mdp) {
        return true;
    } else {
        return false;
    }

}
}
}


if(monUtilisateurEstCorrect(emailUser, mdpUser)) {
    // -- 3a. Si tout est ok, alors, BIENVENUE
    alert('Bienvenue ' + emailUser + ' !');
} else {
    alert('ATTENTION, email/mot de passe incorrect.');
    // -- 3b. Sinon, on affiche un message d'erreur.


}


}








