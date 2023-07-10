var r = 0;
var g = 0;
var b = 0;


setInterval(function () {
        console.log("teste");
        
        var num = 0;
        r = Math.floor(Math.random() * 235);
        g = Math.floor(Math.random() * 225);
        b = Math.floor(Math.random() * 245);
        document.getElementById("main-title").style = `border: 4px rgb(${r}, ${g}, ${b}) solid;`;
        //document.getElementById("teste").style = `color:rgba(${r}, ${g}, ${b});`;
}, 200);

