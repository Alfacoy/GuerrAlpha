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

//Clases
class humano {
  constructor() {
    this.hp = 500
    this.hpv = this.hp
    this.atk = 13
  }
  atacar(bety){
    bety.hpv=bety.hpv - this.atk;
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
  atacar(who){
    who.hpv=who.hpv - this.atk
  }

  answer(hpv,hp){
    const cien = 100
    const porcentaje = Math.round((hpv * cien ) / hp)

    if (porcentaje < 40) {
      console.log("Vida enemiga menor a 40 .. "+porcentaje)
    }else {
      console.log("Vida enemiga mayor a 40.."+porcentaje)
    }
  }

  live(hpv){
    if (hpv <= 0)
    {
      console.log("Moriste Enemigo")
    }
  }
}


//Llamamos a los jugadores!
  function iniciar(){
    let player = prompt("Como te llamaras?","Ragnar");
    if (player !=null) {
      nombre.innerHTML = "Jugador: "+ player;
    }
  }

player = new humano;
aa.innerHTML = "Hp Max: " +player.hp;
a.innerHTML = "Hp: " + player.hpv;
b.innerHTML = "Atk: " + player.atk;

let bety = new enemigo;


//Añadiendo eventos a la botonera
IDatacar.addEventListener('click',player.atacar);
