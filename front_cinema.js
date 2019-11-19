


//JE CREE DES DIV pour la landing page 
 var lp = document.createElement('div');
 lp.setAttribute('id', 'presentation');
 landingpage.appendChild(lp);


 //je cree un titre pour la landing page
var titreLp = document.createElement('h1');
titreLp.setAttribute('id', 'titreLp');
lp.appendChild(titreLp);

//je rempli le texte dans la balise h1
var contentTitreLp = document.createTextNode("Présentation du cinémas");
titreLp.appendChild(contentTitreLp);


//je cree une balise p à l'interieur de lp
var paragraphe = document.createElement('p');
paragraphe.setAttribute('id','p1');
lp.appendChild(paragraphe);

// rempli le paragraphe avec du texte
var contentlp = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        paragraphe.appendChild(contentlp);

//LE TABLEAU JS EST PASSé DANS UNE FONCTION
function afficherPlusieursFilms(tableauDeFilms) {
    tableauDeFilms.forEach(function (film) {


         //JE CREE DES DIV QUI AURONT POUR ID MON PRODUCT NAME
         var elementFilms = document.createElement('div');
         elementFilms.setAttribute('id', 'box');
         container.appendChild(elementFilms);




        //JE CREE DES BALISE A
         var linkFilms = document.createElement('a');
         linkFilms.setAttribute('id', 'link');
         linkFilms.setAttribute('href', '#');

         elementFilms.appendChild(linkFilms);
 

         //JE CREE DES IMG AVEC URL DE MES FILMS
         var imageFilms = document.createElement('img');

         imageFilms.setAttribute('src', film.image);
         imageFilms.setAttribute('id', 'photo');
         linkFilms.appendChild(imageFilms);


         
        //JE CREE DES ZONES DE TEXTE QUI VONT CHERCHER LE PRIX ET LE NOM
        


        var NameFilm = document.createElement('p');
        linkFilms.appendChild(NameFilm);

        var priceFilm = document.createElement('p');
        linkFilms.appendChild(priceFilm);

        var dateFilm = document.createElement('p');
        linkFilms.appendChild(dateFilm);

        var typeFilm = document.createElement('p');
        linkFilms.appendChild(typeFilm);

        var btn_reservation = document.createElement('button');
        btn_reservation.setAttribute('id', 'btn_reservation');
        linkFilms.appendChild(btn_reservation);
        var textBtnReservation = document.createTextNode("Réserver");
        btn_reservation.appendChild(textBtnReservation);


        //injection des datas dans les balise
        var textName = document.createTextNode(film.nom);

        var textPrix = document.createTextNode("prix:" +film.prix);

        var textDate = document.createTextNode("Date de sortie:" +film.date_sortie);

        var textCommentaire = document.createTextNode(film.commentaires);


        NameFilm.appendChild(textName);

        priceFilm.appendChild(textPrix);

        dateFilm.appendChild(textDate);

        typeFilm.appendChild(textCommentaire);



    })};

       
//je creer un container 'div' pour la newletter
 var newLetter = document.createElement('div');
 newLetter.setAttribute('id', 'newsletters');
 containerNewLetter.appendChild(newLetter);

 //je creer une balise titre newsletters
 var titreNewLetter=document.createElement('h1');
 titreNewLetter.setAttribute('id', 'titreNewsLetters');
 newLetter.appendChild(titreNewLetter);

 // je remplie la balise titre avec du contenu
var contentTitreNewLetter = document.createTextNode('Inscription NewsLetters!');
titreNewLetter.appendChild(contentTitreNewLetter);

 //je creer un formulaire newletter
 var formNewLetter = document.createElement('form');
 formNewLetter.setAttribute('id', 'letterForm');
 formNewLetter.setAttribute('method', 'post');
 newLetter.appendChild(formNewLetter);

 //je creer une balise titre
 var titreInput = document.createElement('h3');
 titreInput.setAttribute('id','idInput');
 formNewLetter.appendChild(titreInput);

 //j'entre le content dans la balise h3
var contentTitreInput = document.createTextNode('Email');
titreInput.appendChild(contentTitreInput);

 //je creer des inputs formulaire newsletters
 var inputNewLetter = document.createElement('input');
 inputNewLetter.setAttribute('id','inputEmail');
 inputNewLetter.setAttribute('name', 'newsletters_email');
 formNewLetter.appendChild(inputNewLetter);

 
 //je creer un boutton submit pour le formulaire newletter
 var bouttonNewLetter = document.createElement('button');
 bouttonNewLetter.setAttribute('id', 'bouttonNewsLetters');
 bouttonNewLetter.setAttribute('onclick','send()');
 bouttonNewLetter.type = "button";
        bouttonNewLetter.style = 'width: 70px; height: 55px;';
        bouttonNewLetter.innerHTML = "Submit";
 formNewLetter.appendChild(bouttonNewLetter);
    
//je creer un container 'div' pour le footer
 var foot = document.createElement('div');
 foot.setAttribute('id', 'footer');
 piedDePage.appendChild(foot);



//je cree un titre pour le footer
var titreFooter = document.createElement('h1');
titreFooter.setAttribute('id', 'titreFt');
foot.appendChild(titreFooter);
 
//je rempli le texte dans la balise h1
var contentTitreFt = document.createTextNode("cinémas les milles et un film");
titreFooter.appendChild(contentTitreFt);


//je cree une balise p à l'interieur de lp
var paragraphe2 = document.createElement('p');
paragraphe2.setAttribute('id','p2');
foot.appendChild(paragraphe2);

// rempli le paragraphe avec du texte
var contentP2 = document.createTextNode("Copyright © 2019. Tous droits réservés");
        paragraphe2.appendChild(contentP2);


        $.get("http://localhost:20001", function (response, error) {
       
        console.log(error);
        console.log(response);
     afficherPlusieursFilms(response);
});


//post formulaire vers >>> back_cinema.js

function send() {
    // ENVOI LES INFOS ENTRER DANS LE FORMULAIRE VERS LE BACK 
    // POUR LES STOCKER DANS LA TABLE COMMENT
   
    const input = document.querySelector('#inputEmail').value;

    $.post(
        'http://localhost:20001/newsletters', // defini l'URL d'envoie vers le serveur
        { newsletters_email: input }, // defini ce qu'il envoie au serveur
        function (response) { // defini la fonction execute quand le serveur repond
           
            console.log(response);
        });
}




