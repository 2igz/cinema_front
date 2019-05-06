

var afficherImageFilm = document.getElementById('fiche2');

  
    $.get("http://localhost:20001", function (response, error) {
        for (let index = 0; index < response.length; index++) {
            let div = afficherImageFilm.cloneNode(true);
            let bdd = response[index];
           div.getElementsByClassName('image')[0].setAttribute('src', bdd.image);
           div.getElementsByClassName('test')[0].innerHTML = bdd.name;
           div.getElementsByClassName('test2')[0].innerHTML = bdd.prix;
           div.getElementsByClassName('test3')[0].innerHTML = bdd.description;

           document.getElementById('fiches').appendChild(div);
        }

    });

    
