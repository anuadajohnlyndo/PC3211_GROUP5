const txt1 = document.getElementById('imgtxt1');
const txt2 = document.getElementById('imgtxt2');
const txt3 = document.getElementById('imgtxt3');
const txt4 = document.getElementById('imgtxt4');
const txt5 = document.getElementById('imgtxt5');
const txt6 = document.getElementById('imgtxt6');
const txt7 = document.getElementById('imgtxt7');

const lbl1x = document.getElementById('lbl1');
const lbl2x = document.getElementById('lbl2');
const lbl3x = document.getElementById('lbl3');
const lbl4x = document.getElementById('lbl4');
const lbl5x = document.getElementById('lbl5');
const lbl6x = document.getElementById('lbl6');
const lbl7x = document.getElementById('lbl7');


function lbl1(){
    txt1.style.display = "block";
    txt1.style.animation = "0.5s pop-right ease-in-out forwards"

    lbl1x.style.color = "#34c759";
    lbl2x.style.color = "#fefefe";
    lbl3x.style.color = "#fefefe";
    lbl4x.style.color = "#fefefe";
    lbl5x.style.color = "#fefefe";
    lbl6x.style.color = "#fefefe";
    lbl7x.style.color = "#fefefe";
    

    txt2.style.display = "none";
    txt3.style.display = "none";
    txt4.style.display = "none";
    txt5.style.display = "none";
    txt6.style.display = "none";
    txt7.style.display = "none";
}

function lbl2(){
    txt2.style.display = "block";
    txt2.style.animation = "0.5s pop-right ease-in-out forwards"

    lbl1x.style.color = "#fefefe";
    lbl2x.style.color = "#34c759";
    lbl3x.style.color = "#fefefe";
    lbl4x.style.color = "#fefefe";
    lbl5x.style.color = "#fefefe";
    lbl6x.style.color = "#fefefe";
    lbl7x.style.color = "#fefefe";

    txt1.style.display = "none";
    txt3.style.display = "none";
    txt4.style.display = "none";
    txt5.style.display = "none";
    txt6.style.display = "none";
    txt7.style.display = "none";
}

function lbl3(){
    txt3.style.display = "block";
    txt3.style.animation = "0.5s pop-right ease-in-out forwards"

    lbl1x.style.color = "#fefefe";
    lbl2x.style.color = "#fefefe";
    lbl3x.style.color = "#34c759";
    lbl4x.style.color = "#fefefe";
    lbl5x.style.color = "#fefefe";
    lbl6x.style.color = "#fefefe";
    lbl7x.style.color = "#fefefe";

    txt1.style.display = "none";
    txt2.style.display = "none";
    txt4.style.display = "none";
    txt5.style.display = "none";
    txt6.style.display = "none";
    txt7.style.display = "none";
}

function lbl4(){
    txt4.style.display = "block";
    txt4.style.animation = "0.5s pop-right ease-in-out forwards"


    lbl1x.style.color = "#fefefe";
    lbl2x.style.color = "#fefefe";
    lbl3x.style.color = "#fefefe";
    lbl4x.style.color = "#34c759";
    lbl5x.style.color = "#fefefe";
    lbl6x.style.color = "#fefefe";
    lbl7x.style.color = "#fefefe";

    txt1.style.display = "none";
    txt2.style.display = "none";
    txt3.style.display = "none";
    txt5.style.display = "none";
    txt6.style.display = "none";
    txt7.style.display = "none";
}

function lbl5(){
    txt5.style.display = "block";
    txt5.style.animation = "0.5s pop-right ease-in-out forwards"


    
    lbl1x.style.color = "#fefefe";
    lbl2x.style.color = "#fefefe";
    lbl3x.style.color = "#fefefe";
    lbl4x.style.color = "#fefefe";
    lbl5x.style.color = "#34c759";
    lbl6x.style.color = "#fefefe";
    lbl7x.style.color = "#fefefe";


    txt1.style.display = "none";
    txt2.style.display = "none";
    txt4.style.display = "none";
    txt3.style.display = "none";
    txt6.style.display = "none";
    txt7.style.display = "none";
}

function lbl6(){
    txt6.style.display = "block";
    txt6.style.animation = "0.5s pop-right ease-in-out forwards"

 
    lbl1x.style.color = "#fefefe";
    lbl2x.style.color = "#fefefe";
    lbl3x.style.color = "#fefefe";
    lbl4x.style.color = "#fefefe";
    lbl5x.style.color = "#fefefe";
    lbl6x.style.color = "#34c759";
    lbl7x.style.color = "#fefefe";

    txt1.style.display = "none";
    txt2.style.display = "none";
    txt4.style.display = "none";
    txt5.style.display = "none";
    txt3.style.display = "none";
    txt7.style.display = "none";
}

function lbl7(){
    txt7.style.display = "block";
    txt7.style.animation = "0.5s pop-right ease-in-out forwards"

    lbl1x.style.color = "#fefefe";
    lbl2x.style.color = "#fefefe";
    lbl3x.style.color = "#fefefe";
    lbl4x.style.color = "#fefefe";
    lbl5x.style.color = "#fefefe";
    lbl6x.style.color = "#fefefe";
    lbl7x.style.color = "#34c759";

    txt1.style.display = "none";
    txt2.style.display = "none";
    txt4.style.display = "none";
    txt5.style.display = "none";
    txt6.style.display = "none";
    txt3.style.display = "none";
}

function next(){
    window.location = "type.html";
}