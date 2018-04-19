var membres = [
    { 'pseudo': 'Hugo', 'age': 26, 'email': 'wf3@hl-media.fr', 'mdp': 'wf3' },
    { 'pseudo': 'Rodrigue', 'age': 56, 'email': 'rodrigue@hl-media.fr', 'mdp': 'roro' },
    { 'pseudo': 'James', 'age': 78, 'email': 'james@hl-media.fr', 'mdp': 'james8862' },
    { 'pseudo': 'Emilio', 'age': 18, 'email': 'milio@hl-media.fr', 'mdp': 'milioDu62' }
];

// -- Récupération des éléments
var pseudo          = document.getElementById('pseudo');
var age             = document.getElementById('age');
var email           = document.getElementById('email');
var mdp             = document.getElementById('mdp');
var submit          = document.getElementById('submit');
var bienvenue       = document.getElementById('Bienvenue');
var inscriptionform = document.getElementById('InscriptionForm');

var pseudoerror = document.getElementsByClassName('pseudoError')[0];
var ageerror    = document.getElementsByClassName('ageError')[0];

// -- ETAPE 1 & 3

/**
 * Lors de la saisie de notre utilisateur dans
 * le champ "pseudo", notre fonction anonyme
 * sera déclenchée.
 */
pseudo.addEventListener('input', function () {

    // console.log(pseudo.value);
    // console.log('Input event fired');
    console.log('Searching for member');

    for (let i = 0; i < membres.length; i++) {
        
        // console.log(membres[i]);

        /**
         * Si la saisie d'un pseudo en cours par mon
         * utilisateur correspond à un pseudo dans
         * mon tableau JS de membres ; alors ma 
         * condition s'applique.
         * 
         * NOTA BENE : La condition vérifie, la saisie
         * de mon utilisateur pour tous les membres
         * du tableau !
         */

        if(pseudo.value === membres[i].pseudo) {

            /**
             * J'ai trouvé une correspondance,
             * j'affiche pseudoError (alerte).
             */
            
            console.log('Member found !');

            pseudoerror.style.display = "block";
            submit.disabled = true;
            bienvenue.textContent = 'Bienvenue !';

            // -- On arrête de parcourir le tableau.
            break;

<<<<<<< HEAD
        } else {
            
            // console.log('Member not found !');

            pseudoerror.style.display = "none";
            submit.disabled = false;
            bienvenue.textContent = 'Bienvenue ' + pseudo.value + ' !';

        }

    }
=======
var errorPseudo = document.getElementById('form').getElementsByTagName('div')

var error = document.getElementsByTagName("div")

var formulaire = document.getElementsByTagName("form")


errorPseudo.style.display="initial";



>>>>>>> f0480bea20b18c8efb3d4172a7f7b29bad0e7662

});

<<<<<<< HEAD
// -- ETAPE 2
=======
>>>>>>> f0480bea20b18c8efb3d4172a7f7b29bad0e7662

<<<<<<< HEAD
age.addEventListener('change', function () {
    
    if(age.value < 18) {

        ageerror.style.display = "block";
        submit.disabled = true;

    } else {

<<<<<<< HEAD
        ageerror.style.display = "none";
        submit.disabled = false;
=======
var errorPseudo = document.getElementById('form').getElementsByTagName('div')

var error = document.getElementsByTagName("div")

var formulaire = document.getElementsByTagName("form")


errorPseudo.style.display="initial";



>>>>>>> f0480bea20b18c8efb3d4172a7f7b29bad0e7662

    }

});

// -- Etape 4A

/**
 * Lors de la soumission du formulaire par l'utilisateur,
 * ma fonction anonyme sera exécuté, et recevra de js,
 * en paramètre " event ", l'évènement "submit".
 */
inscriptionform.addEventListener('submit', function (event) {
    
    // console.log(e);
    console.log('Inscription form is submitted');

<<<<<<< HEAD
    // -- Stopper la redirection HTTP de notre " event "
    event.preventDefault();
=======
>>>>>>> f0480bea20b18c8efb3d4172a7f7b29bad0e7662

    // -- Créer un objet membre à ajouter au tableau
    let membre = {
        pseudo  : pseudo.value,
        age     : age.value,
        email   : email.value,
        mdp     : mdp.value
    };

    // console.log(membre); 
    
    // -- J'ajoute le nouvel objet au tableau de membres.
    membres.push(membre);
    console.log('Member inserted');

    // -- Vérification...
    console.log(membres);
=======


<<<<<<< HEAD
=======

>>>>>>> f0480bea20b18c8efb3d4172a7f7b29bad0e7662
/* for(let i = 0 ; i < membres.length ; i++) {

    function LaSaisieDeMonInput()
    { 
    pseudo.addEventListener ('input', LaSaisieDeMonInput )
   console.log(pseudo.value) }
    if( pseudo === membres[i].pseudo) {
<<<<<<< HEAD
>>>>>>> f0480bea20b18c8efb3d4172a7f7b29bad0e7662

    // -- Etape 4B
=======
>>>>>>> f0480bea20b18c8efb3d4172a7f7b29bad0e7662

    var p = document.createElement('p');
    p.innerHTML = "Merci " + pseudo.value + "! <br><strong>Tu es maintenant inscrit.</strong><br><br><u>Voici la liste de nos membres :</u>";
    
    document.body.appendChild(p);

<<<<<<< HEAD
    // -- Générer la liste des membres
    var ul = document.createElement('ul');
    for(let i = 0 ; i < membres.length ; i++) {

<<<<<<< HEAD
        let li = document.createElement('li');
        let liste = membres[i].pseudo + " : " + membres[i].age + " ans";

        li.textContent = liste;
        ul.appendChild(li);

=======

    
>>>>>>> f0480bea20b18c8efb3d4172a7f7b29bad0e7662
=======

    
>>>>>>> f0480bea20b18c8efb3d4172a7f7b29bad0e7662
    }

    document.body.appendChild(ul);

});










LaSaisieDeMonInput()
 */



LaSaisieDeMonInput()
 */

