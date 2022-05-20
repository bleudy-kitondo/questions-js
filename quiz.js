let container1= document.getElementById("container1");
container1.style=" display: none";
let container2= document.getElementById("container2");
container2.style=" display: none";
let container3= document.getElementById("container3");
container3.style=" display: none";
let container4= document.getElementById("container4");
container4.style=" display: none";
let container5= document.getElementById("container5");
container5.style=" display: none";
let container6= document.getElementById("container6");
container6.style=" display: none";
let container7= document.getElementById("container7");
container7.style=" display: none";
let container8= document.getElementById("container8");
container8.style=" display: none";
let container9= document.getElementById("container9");
container9.style=" display: none";
let container10= document.getElementById("container10");
container10.style=" display: none";
let container11= document.getElementById("container11");
container11.style=" display: none";
let container12= document.getElementById("container12");
container12.style=" display: none";
let container13= document.getElementById("container13");
container13.style=" display: none";
let container14= document.getElementById("container14");
container14.style=" display: none";
let container15= document.getElementById("container15");
container15.style=" display: none";

let nom =document.getElementById("nom");
let email=document.getElementById("email");

let accueil= document.getElementById("accueil");
const form = document.querySelector("form");
let commencer = document.getElementById("submit");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let username = nom.value;
    let usermail = email.value;
    console.log(username);
    console.log(usermail);

    accueil.style=" display: none";
    container1.style=" display: block";
});

let suivant1 = document.getElementById("suivant1");
suivant1.addEventListener("click", function(){
container2.style="display: block";
container1.style="display: none";
});

let suivant2 = document.getElementById("suivant2");
suivant2.addEventListener("click", function(){
container3.style="display: block";
container2.style="display: none";
});

let suivant3 = document.getElementById("suivant3");
suivant3.addEventListener("click", function(){
container4.style="display: block";
container3.style="display: none";
});

let suivant4 = document.getElementById("suivant4");
suivant4.addEventListener("click", function(){
container5.style="display: block";
container4.style="display: none";
});

let suivant5 = document.getElementById("suivant5");
suivant5.addEventListener("click", function(){
container6.style="display: block";
container5.style="display: none";
});

let suivant6 = document.getElementById("suivant6");
suivant6.addEventListener("click", function(){
container7.style="display: block";
container6.style="display: none";
});

let suivant7 = document.getElementById("suivant7");
suivant7.addEventListener("click", function(){
container8.style="display: block";
container7.style="display: none";
});

let suivant8 = document.getElementById("suivant8");
suivant8.addEventListener("click", function(){
container9.style="display: block";
container8.style="display: none";
});

let suivant9 = document.getElementById("suivant9");
suivant9.addEventListener("click", function(){
container10.style="display: block";
container9.style="display: none";
});

let suivant10 = document.getElementById("suivant10");
suivant10.addEventListener("click", function(){
container11.style="display: block";
container10.style="display: none";
});

let suivant11 = document.getElementById("suivant11");
suivant11.addEventListener("click", function(){
container12.style="display: block";
container11.style="display: none";
});

let suivant12 = document.getElementById("suivant12");
suivant12.addEventListener("click", function(){
container13.style="display: block";
container12.style="display: none";
});

let suivant13 = document.getElementById("suivant13");
suivant13.addEventListener("click", function(){
container14.style="display: block";
container13.style="display: none";
});

let suivant14 = document.getElementById("suivant14");
suivant14.addEventListener("click", function(){
container15.style="display: block";
container14.style="display: none";
});

let suivant15 = document.getElementById("suivant15");
suivant15.addEventListener("click", function(){
accueil.style="display: block";
container15.style="display: none";
});