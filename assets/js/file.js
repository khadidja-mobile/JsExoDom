var p = document.getElementById("parag1");
var list = p.classList;

/*function changer_style(){
    list.add('blanc', 'bg', 'border', 'm5');
    // ou p.style.color="white";
    // p.style.background = "black";
    // p.style.border = "1px solid #000";
    // p.style.margin = -5px
}
// ou */

function changer_style(){ 
    p.className += "active";
}

// exo2

var newDiv = document.getElementById("exo2");
var href = document.querySelector("a").getAttribute('href');
var hreflang = document.querySelector("a").getAttribute('hreflang');
var rel = document.querySelector("a").getAttribute('rel');
var target = document.querySelector("a").getAttribute('target');
//var newP = document.createElement("p");

function getAttributes(){
    newDiv.innerHTML += "<p>Les attributs href, hreflang, rel, target sont :  </p>" + href + ' | ' + hreflang  + ' | ' + rel  + ' | ' + target;
}

// exo3
var div3 = document.getElementById("exo3");
var form = document.getElementById("form1").value;
//var prenom = document.getElementsByTagName("fname").value;
//var nom = document.getElementsByTagName("lname").value;
var prenom = document.getElementsByTagName("input")[0].value;
var nom = document.getElementsByTagName("input")[1].value;
//var prenom = document.querySelector('#form1 input:first-child').value; 
//var nom = document.querySelector('#form1 input:nth-of-type(2)').value; 
/*function getFormvalue(){
    //div3.innerHTML = nom;
    newDiv.innerHTML += nom;
    newDiv.innerHTML += prenom;
    //return false;
}*/

function getFormvalue(){
    document.open();
    document.write("Nom et prénom récupérés du formulaire : " + nom + ' ' + prenom);
    document.close();
}