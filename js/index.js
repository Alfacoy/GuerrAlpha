//Nos conectamos al HTML

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



//Datos Dinamicos
var Nombre = document.querySelector('#name');
var Salud = document.querySelector('#hp');
var SaludMax = document.querySelector('#hpMax');
var Ataque = document.querySelector('#atk');
var Consola = document.querySelector('#console').innerHTML = "Texto de Batalla";


// -----> Clases


function Skills(){
  this.atacar = Atacar;

  function Atacar(jugador,enemigo){
    enemigo.hpv = enemigo.hpv - jugador.atk;
    return console.log("Vida de "+ enemigo.nombre + ": " + enemigo.hpv);
  }

}

function IA(enemigo){
  this.consulta = Answer;
  this.dialogo = Dialogar;
  this.dado = Dado;


  function  Answer(hpv,hp){
      const cien = 100
      const porcentaje = Math.round((hpv * cien ) / hp)
      return console.log(porcentaje);
    }

  function Dado(){
    let caraDado = Math.round(Math.random()*9)+1;
    return console.log(caraDado);
  }

  function Dialogar(){
    //Proximo a realizar
  }

}


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

// -----> /Fin de Clases






//Llamamos a los jugadores!

let player = new Player("Lothar",500,15,12);
let bety = new Player("Bety",100,20,14);

Nombre.innerHTML = "Jugador: " + player.name;
SaludMax.innerHTML = "Salud Maxima: " +player.hp;
Salud.innerHTML = "Salud Actual: " + player.hpv;
Ataque.innerHTML = "Fuerza de Ataque: " + player.atk;


//Ronda de juegos



function iniciar(){
  while(0 == 0){

    console.log("Holaaaaaaaa")

  }
}



//Botonera de accion
const IDatacar = document.querySelector('#atacar');
IDatacar.addEventListener('Click',player.atacar)
const IDdefender = document.querySelector('#defender');

const IDfirstaid =  document.querySelector('#firstAid');
