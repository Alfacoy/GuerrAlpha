//VARIABLES GENERALES DEL JUEGO.
var agresivo = false;
var defensivo = false;
var espada = false;
var arco = false;

//Datos del Jugador.
var Clase = document.querySelector('#clase').innerHTML += " Desconocida!"
var Nombre = document.querySelector('#nombre');
var Salud = document.querySelector('#salud');
var Defensa = document.querySelector('#defensa');
var Ataque = document.querySelector('#fuerza');
var Consola = document.querySelector('#consola').innerHTML = "Texto de Batalla.";
//FIN Datos del Jugador.
//FIN VARIABLES GENERALES DEL JUEGO.





//-----> CLASES BASE DEL JUEGO.
//Acciones de Clases.
function Skills(){
  this.atacar = Atacar;

  function Atacar(jugador,enemigo){
    if (agresivo){
      enemigo.hpv = enemigo.hpv - (jugador.atk * 20);
      return console.log("Vida de "+ enemigo.nombre + ": " + enemigo.hpv);
    }else {
      enemigo.hpv = enemigo.hpv - jugador.atk;
      return console.log("Vida de "+ enemigo.nombre + ": " + enemigo.hpv);
    }

  }

}


//Funciones de la IA.
function IA(enemigo){
  this.consulta = Answer;
  this.dialogo = Dialogar;


  function  Answer(hpv,hp){
      const cien = 100
      const porcentaje = Math.round((hpv * cien ) / hp)
      return console.log(porcentaje);
    }

  function Dialogar(){
    //Proximo a realizar
  }

}

//Plantilla basica del Jugador.
function Player(nombre,hp,atk,def){
    this.nombre = nombre;
    this.hp = hp;
    this.hpv = this.hp;
    this.atk = atk;
    this.def = def;

    Skills.call(this);

    if (this.nombre === "Bety") {
      IA.call(this);
    }
}



//Tratando de generar un ambiente.
/*function Castillo(caras){
  function Dado(caras){
    var caraDado = Math.round(Math.random()*caras)+1;
    return caraDado;
  }

  if (caraDado === 1) {
    return console.log("Estas en una habitacion del castillo.");
  }
  else if (caraDado === 2) {
    return console.log("Estas en el baño del castillo.");
  }
  else if (caraDado === 3) {
    return console.log("Estas en la cocina del castillo.");
  }else {
    return console.log("Estas re perdido.");
  }

}
*/


//-----> FIN CLASES BASE DEL JUEGO.




//Botonera ESPADA / ARCO.
const IDespada = document.querySelector('#espada');
IDespada.addEventListener('click',ModoEspada);
const IDarco = document.querySelector('#arco');
IDarco.addEventListener('click',ModoArco);

function ModoEspada(){
  espada = true;
  arco = false;
  return consola.innerHTML = "Espada: "+ espada + " Arco: "+arco;
}
function ModoArco(){
  espada = false;
  arco = true;
  return consola.innerHTML = "Espada: "+ espada + " Arco: "+arco;
}

//FIN Botonera ESPADA / ARCO.


//Botonera AGRESIVO / DEFENSIVO.
const IDagresivo = document.querySelector('#agresivo');
IDagresivo.addEventListener('click',ModoAtk);
const IDdefensivo = document.querySelector('#defensivo');
IDdefensivo.addEventListener('click',ModoDef);

function ModoAtk(){
  agresivo = true;
  defensivo = false;
  return consola.innerHTML = "Defensa: "+ defensivo + " Agresivo: "+agresivo;
}

function ModoDef(){
  defensivo = true;
  agresivo = false;
  return consola.innerHTML = "Defensa: "+ defensivo + " Agresivo: "+agresivo;
}

//FIN Botonera AGRESIVO / DEFENSIVO.











//-----> INICIAMOS EL JUEGO.

//Llamamos a los jugadores!

let player = new Player("Lothar",500,15,12);
let bety = new Player("Bety",100,20,14);


Nombre.innerHTML += " "+ player.nombre;
Salud.innerHTML += " "+ player.hpv;
Defensa.innerHTML += " "+ player.def;
Ataque.innerHTML += " "+ player.atk;



//DEFINICION DEL ROL DEL PERSONAJE!!
const IDclase = document.querySelector('#heroe');
IDclase.addEventListener('click',QueSos);

function QueSos(){
  if(espada){
      if (agresivo) {
        player.hpv += (player.hp * 5)/100;
        player.def += (player.def * 10)/100;
        player.atk += (player.atk * 20)/100;
        Salud.innerHTML = "Salud: "+ player.hpv;
        Defensa.innerHTML = "Defensa: "+ player.def;
        Ataque.innerHTML = "Fuerza: "+ player.atk;
        clase.innerHTML = "Clase: Guerrero";
        return
      }else {
        return clase.innerHTML = "Clase: Paladin";
      }
    }else if (arco) {
      return clase.innerHTML = "Clase: Arquero";
    }else {
      return clase.innerHTML = "Clase: (ATENCION!!) Debes elegir tus atributos previamente!";
    }
    return;
}

//FIN DEFINICION DEL ROL DEL PERSONAJE!!








//Ronda de juegos


player.atacar(player,bety);


//-----> FIN = INICIAMOS EL JUEGO.


















//FUNCIONES APARTE!!
//Ciclo del dia
const x = document.querySelector('#noche');
x.addEventListener('click',noche);

const y = document.querySelector('#dia');
y.addEventListener('click',dia);

noche();

function noche() {
  x.style.display="none";
  y.style.display="block";
  document.body.style.backgroundColor="black";
}
function dia() {
  x.style.display="block";
  y.style.display="none";
  document.body.style.backgroundColor="yellow";
}

//FIN FUNCIONES APARTE!!
