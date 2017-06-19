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
var nombre = document.querySelector('#name');
var a = document.querySelector('#hp');
var aa = document.querySelector('#hpMax');
var b = document.querySelector('#atk');
var c = document.querySelector('#console');
c.innerHTML = "Texto de batalla";

//Botonera de accion
let IDatacar = document.querySelector('#atacar');
const IDdefender = document.querySelector('#defender');
const IDfirstaid =  document.querySelector('#firstAid');

// -----> Clases
class humano {
  constructor() {
    this.hp = 500
    this.hpv = this.hp
    this.atk = 13
  }
  atacar(bety){
    bety.hpv=bety.hpv - this.atk;
    c.innerHTML = "Ataco"
  }

  live(hpv){
    if (hpv <= 0)
    {
      console.log("Moriste Humano")
    }
  }
}

class enemigo {
  constructor() {
    this.hp = 400
    this.hpv = this.hp
    this.atk = 20
  }
  atacar(player){
    player.hpv = player.hpv - this.atk
  }

  answer(hpv,hp){
    const cien = 100
    const porcentaje = Math.round((hpv * cien ) / hp)
  }
  }
// -----> /Fin de Clases

//Llamamos a los jugadores!
  function iniciar(){
    let player = prompt("Como te llamaras?","Ragnar");
    if (player !=null) {
      nombre.innerHTML = "Jugador: "+ player;
    }
  }
window.onload=iniciar();
player = new humano;
aa.innerHTML = "Hp Max: " +player.hp;
a.innerHTML = "Hp: " + player.hpv;
b.innerHTML = "Atk: " + player.atk;

let bety = new enemigo;


//Añadiendo eventos a la botonera
IDatacar.addEventListener('click',player.atacar);


//Inicia el bucle..
var turno = 0;

while (player.hpv >0 && bety.hpv >0) {

  if (turno == 0) {

    if(player.atacar){
      console.log("Atacaste")
      turno = 1;
    }

  }else{
    if (turno == 1) {
      bety.answer(bety.hpv,bety.hp);
      if (bety.answer >= 40) {
        console.log("Ataco");
        turno = 0;
      }
      else {
        if (bety.answer <=40) {
          console.log("no ataco");
          turno = 0;
        }
      }
    }
  }

}
