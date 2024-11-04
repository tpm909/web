document.addEventListener("DOMContentLoaded", main)

var parafo = document.createElement("h1")

function main() {


    document.getElementById("boto").addEventListener("click", validacionmax)





}


function validacionmax() {
    if (validacionNom() & validacionEmail() & validacionTel()) {
document.getElementById("form").reset();
document.getElementById("rec").innerText = document.getElementById("queja").value;
       document.getElementById("conf").style.display="block";
       
       
       


    } else { 
        
        
        
        
        parafo.innerText = "" }



}



function validacionNom() {

    let campo = document.getElementById("fname");

    let ok = campo.value.length <= 20 && campo.value != "";

    if (ok) {
        document.getElementById("valn").innerText = "";
document.getElementById("NOM").innerText = campo.value;

    } else {
        document.getElementById("valn").innerText = "ingrese datos validos";
    };

    return ok;


}

function validacionEmail() {

    let campo = document.getElementById("mail");
    let cosa = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;

    let ok = cosa.test(campo.value);
    if (ok) {
        document.getElementById("valm").innerText = "";
        document.getElementById("email").innerText = campo.value;

    } else {
        document.getElementById("valm").innerText = "ingrese datos validos";
    }


    return ok;

}

function validacionTel() {

    let campo = document.getElementById("tel");
    let cosa = /[0-9]/;
    let ok = campo.value.length == 10 && cosa.test(campo.value)
    if (ok) {
        document.getElementById("valt").innerText = "";
        document.getElementById("tele").innerText = campo.value;

    } else {
        document.getElementById("valt").innerText = "ingrese datos validos";
    }


    return ok;

}

window.onclick = function(event) {
    if (event.target == document.getElementById("conf")) {
        document.getElementById("conf").style.display = "none";
    }
  }