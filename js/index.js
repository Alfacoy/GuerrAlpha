let player = new Player("Lothar",500,15,12);
nombre.innerHTML += " "+ player.nombre;
salud.innerHTML += " "+ player.hpv;
defensa.innerHTML += " "+ player.def;
ataque.innerHTML += " "+ player.atk;
potHp.innerHTML += " Solucionar problema..." ;//Solucionar error al mostrar pociones
let bety = new Player("Bety",100,20,14);


//INICIADOR DE JUEGO!!//Botonera INICIAR JUEGO.
const IDiniciar = document.querySelector('#iniciar');
IDiniciar.addEventListener('click',Inicio);

function Inicio(){
  if(ok == true){
    IDiniciar.classList.add("disabled");
    IDiniciar.setAttribute('disabled','disabled');
    while (bety.hpv > 0) {
      player.atacar(player,bety);
    }
  }else{
    consola.innerHTML = "Debes seleccionar una clase.";
  }

}
//FIN INICIADOR DE JUEGO!!
