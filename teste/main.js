var mat_sec=0;
var mat_click =1
var mat_total = 0;
var prod_cards=[];
var multiplier = 1;
var img_matheus = document.getElementById("matheus-img");
img_matheus.addEventListener("mousedown", clique);
img_matheus.addEventListener("mouseup", release);

var prod_page = document.getElementById("prodpage");
var upg_page = document.getElementById("upgpage");
var btn_prod = document.getElementById("producao");
var btn_upg = document.getElementById("upgrades");
var pagenum = 1;


var prod_precos = [15, 100, 600, 2250, 7000, 14000];
var prod_boosts = [1, 5, 10, 40, 75, 100];
var prod_qtd = [0,0,0,0,0,0];

function refresh(){
    document.getElementById("matheus-count").innerHTML = `${mat_total.toFixed(0)} matheus`;
}


setInterval(function(){
    mat_total += mat_sec*multiplier;
    refresh();
}, 1000);

//cliques
let timeout;
function clique(){

    img_matheus.style.width = "35%";
        
    
}

function release(){
        
    mat_total += mat_click;
    document.getElementById("matheus-count").innerHTML = `${mat_total} matheus`;
    img_matheus.style.width = "40%";
}


//producao
var img_prod = ["dogchapeu", "pugluan", "gatojoinha",
"dogcalvo", "dogespadachim", "matheusverso"];
var title_prod = ["dog de chapeu","pug do luan","gato joinha","dog calvo","dog espadachim","matheusverso"];
var img_card;
var title_card
for(let i=0; i<6; i++){
    document.getElementById(`price${i+1}`).innerHTML = `${prod_precos[i]} m$| ${prod_qtd[i]}`;
}
for(let i=0; i<6; i++){
    document.getElementById(`card${i+1}`).addEventListener("click", function(){
        console.log("ola");

        if(mat_total >= prod_precos[i]){
            mat_sec += prod_boosts[i];
            console.log(mat_sec);
            img_card = document.getElementById(`image${i+1}`);
            img_card.src = `images/${img_prod[i]}.png`;
            
            title_card = document.getElementById(`title${i+1}`);
            title_card.innerHTML = `${title_prod[i]}`;
            //prod_precos[i] = prod_precos[i].toFixed(1);
            console.log(prod_precos)
            mat_total -= prod_precos[i];
            prod_qtd[i] += 1;
            prod_precos[i] += Math.round(prod_precos[i].toFixed(0)/3);
            document.getElementById("matheus-sec").innerHTML = `${mat_sec} matheus p/secundo`;
            document.getElementById(`price${i+1}`).innerHTML = `${prod_precos[i]} m$| ${prod_qtd[i]}`;
        }
    }
    

    );
    console.log("oi");
}

btn_prod.addEventListener("click", function(){
    if(pagenum = 2){
        pagenum=1
        prod_page.style.display = "block";
        upg_page.style.display = "none";
    }
})

btn_upg.addEventListener("click", function(){
    if(pagenum = 1){
        prod_page.style.display = "none";
        upg_page.style.display = "block";
        pagenum = 2;
    }
    
})

var upg_id =    [1,   2,    3];
var upg_price = [100, 1500, 20000];
var upg_img =   ["chapeu.png", "matheusdog.png", "Matue.jpg"];
var upg_title = ["chapeu de aniversario", "matheus dog", "matuê"];
var upg_effect= ["produção 2x","click vale mais 5","produção 2x"]
var upg_page = document.getElementById("upgpage");
upg_id.forEach(function(item, i){
    upg_page.innerHTML += `<div class="upg" id="upg${i+1}">
    <img class="upgimage" src="images/${upg_img[i]}">
    <h3 class="upgname" id="upg1">${upg_title[i]}</h3><br>
    <div class="upgbox">
    <p class="upgtext">${upg_effect[i]}</p>
    <p class="upgtext">custa ${upg_price[i]}m$</p>
    </div>
</div>`
});

for(let i=0; i<upg_id.length; i++){
    document.getElementById(`upg${i+1}`).addEventListener("click", function(){
        if(mat_total >= upg_price[i]){
            document.getElementById(`upg${i+1}`).remove();
            mat_total -= upg_price[i];
            if(upg_id[i] == 1){
                img_matheus.src = "images/matheuschapeu.png";
                multiplier = multiplier*2;
            }
            if(upg_id[i] == 2){
                img_matheus.src = "images/matheusdog.png";
                mat_click += 5;
            }
            if(upg_id[i] == 3){
                img_matheus.src = "images/Matue.jpg";
                multiplier = multiplier*2;

            }
        }
    });
}




