

        var membres = [
            {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
            {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
            {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
            {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
          ];    
  

// -- 1 Vérifier si le pseudo est deja pris en temp réel la notification pseudoError doit s'afficher et le bouton "submit" être désactivé

// rendre le champ input qui parcours en temp reel la BDD

var pseudo = document.getElementById("pseudo");

console.log(pseudo)

function LaSaisieDeMonInput(){
    console.log(pseudo.value)
}

pseudo.addEventListener ('input', LaSaisieDeMonInput )

console.log(pseudo.value)


var isPseudoInArray = false;




for(let i = 0 ; i < membres.length ; i++) {

    if( pseudo === membres[i].pseudo) {
        
        isPseudoInArray = true;

console.log(membres[i].pseudo)

        // si le pseudo est deja pris afficher pseudo error

        var pseudoError = document.getElementsByClassName('pseudoError')

        document.body.appendChild(pseudoError)
    }

}

