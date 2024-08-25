//se asigna una variable = método para acceder a los elementos
//declarando dos parámetros que recibe la función

let numSec = 0;
let intentos=0;
let listaNumSort=[];
let numMax=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

//declarando función (encapsulamiento de una acción)
function verifInt(){
    let numUs= parseInt(document.getElementById('valorUsuario').value);
    
    if(numUs===numSec){
        asignarTextoElemento('p', `acertaste el número en ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //cuando el usuario no acertó
        if(numUs>numSec){
            asignarTextoElemento('p', 'el número secreto es menor');
        } else{
            asignarTextoElemento('p', 'el número screto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
   // valorCaja.value='';
}

function genNumSec() {
    let numGen=Math.floor(Math.random()*numMax)+1;
    console.log(numGen);
    console.log(listaNumSort);
    //si ya sorteamos todos los números
    if(listaNumSort.length==numMax){
        asignarTextoElemento('p', 'ya se sortearon los números posibles');
    }else{
        //si el número generado está incluido en la lista
        
    if(listaNumSort.includes(numGen)){
        return genNumSec();
    }else {
        listaNumSort.push(numGen);
        return numGen;
        
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del número secreto');
    asignarTextoElemento('p', `indica un número del 1 al ${numMax}`);
    numSec = genNumSec();
    intentos=1;

}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //generar número aleatorio
    //inicializar número de intentos 
       //deshabilitar botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    
}

condicionesIniciales();
