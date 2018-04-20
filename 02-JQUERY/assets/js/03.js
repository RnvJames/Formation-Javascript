/*---------------- LE CHAINAGE DE METHODE AVEC JQUERY------------------------------- */

$(function(){

    console.log($('div'));

// -- je souhaite cacher toutes les balise 'div' 

$('div').hide('slow',function() {

/**
 * Une fois que la méthode hide() est terminé, mon alerte peut s'exécuter !
 * NB : La fonction s'ececutere pour l'ensemble des éléments du sélecteur.
 */

// alert('Fin du Hide');

// $('div').css('color', 'red');
// $('div').css('background', 'yellow');
// $('div').show('slow');

// $('p').hide(1000).css('color','blue').css('font-size' , '20px').delay(2000).show(500);

$('p').hide(1000).css({'color': 'blue' , 'font-size' : '20px'}).delay(2000).show(500);



    }); //-- fin du hide()


});  // -- fin du $()