//-----> CLASES BASE DEL JUEGO.
//Acciones de Clases.
function Skills(){
  this.atacar = Atacar;

  function Atacar(jugador,enemigo){
    if (agresivo){
      enemigo.hpv = enemigo.hpv - jugador.atk;
      consola.innerHTML= "Vida de "+ enemigo.nombre + ": " + enemigo.hpv;
    }else {
      enemigo.hpv = enemigo.hpv - jugador.atk;
      consola.innerHTML= "Vida de "+ enemigo.nombre + ": " + enemigo.hpv;
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
