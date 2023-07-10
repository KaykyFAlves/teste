
var conf = 1;

var btn_prod = document.getElementById("producao-mobile");
var btn_upg = document.getElementById("upgrades-mobile");
var prod_page = document.getElementById("prodpage");
var upg_page = document.getElementById("upgpage");
var left = document.getElementById("left-prod");
var right = document.getElementById("right-half");

btn_prod.addEventListener("click", function(){

    prod_page.style.display = "block";
    upg_page.style.display = "none";
    left.style.zIndex = "3";
    left.style.display = "block";
    right.style.display = "none";
    conf = 0;
})

btn_upg.addEventListener("click", function(){

    prod_page.style.display = "none";
    upg_page.style.display = "block";
    left.style.zIndex = "3";
    left.style.display = "block";
    pagenum = 2;
    right.style.display = "none";
    conf= 0;

    
})

var w;

var close = document.getElementById("voltar");

w = window.innerWidth;
if(w <= 600){

    close.innerHTML += "<- fechar";

    close.addEventListener("click", function(){
        left.style.display = "none";
        right.style.display = "block";
    });
        
}

