//INICIO DE BOTONERAS.
//Botonera ARMAS.
const IDespada = document.querySelector('#espada');
IDespada.addEventListener('click',ModoEspada);
const IDarco = document.querySelector('#arco');
IDarco.addEventListener('click',ModoArco);


//Botonera MODO.
const IDagresivo = document.querySelector('#agresivo');
IDagresivo.addEventListener('click',ModoAtk);
const IDdefensivo = document.querySelector('#defensivo');
IDdefensivo.addEventListener('click',ModoDef);

//Botonera DEFINIR HEROE.
const IDclase = document.querySelector('#heroe');
IDclase.addEventListener('click',Heroe);


//Botonera RESETEAR ATRIBUTOS.
const IDreset = document.querySelector('#reset');
IDreset.addEventListener('click',Reset)

//FIN DE BOTONERAS.






//DEFINICION DEL ROL DEL PERSONAJE!!
function ModoAtk(){
  agresivo = true;
  defensivo = false;
  IDagresivo.classList.add("btn-danger");
  IDdefensivo.classList.remove("btn-danger");
  return consola.innerHTML = "Defensa: "+ defensivo + " Agresivo: "+agresivo;
}

function ModoDef(){
  defensivo = true;
  agresivo = false;
  IDdefensivo.classList.add("btn-danger");
  IDagresivo.classList.remove("btn-danger");
  return consola.innerHTML = "Defensa: "+ defensivo + " Agresivo: "+agresivo;
}

function ModoEspada(){
  espada = true;
  arco = false;
  IDespada.classList.add("btn-danger");
  IDarco.classList.remove("btn-danger");
  return consola.innerHTML = "Espada: "+ espada + " Arco: "+arco;
}
function ModoArco(){
  espada = false;
  arco = true;
  IDarco.classList.add("btn-danger");
  IDespada.classList.remove("btn-danger");
  return consola.innerHTML = "Espada: "+ espada + " Arco: "+arco;
}


//FIN DEFINICION DEL ROL DEL PERSONAJE!!





function Heroe(){
  if(espada){
    player.hpv += (player.hp * 5)/100;
    player.def += (player.def * 10)/100;
    player.atk += (player.atk * 20)/100;
    salud.innerHTML = "Salud: "+ player.hpv;
    defensa.innerHTML = "Defensa: "+ player.def;
    ataque.innerHTML = "Fuerza: "+ player.atk;
    clase.innerHTML = "Clase: Guerrero";
    ok = true;
  }

  IDespada.classList.add("disabled");
  IDespada.setAttribute('disabled','disabled');

  IDarco.classList.add("disabled");
  IDarco.setAttribute('disabled','disabled');

  IDagresivo.classList.add("disabled");
  IDagresivo.setAttribute('disabled','disabled');

  IDdefensivo.classList.add("disabled");
  IDdefensivo.setAttribute('disabled','disabled');

  IDclase.classList.add("disabled");
  IDclase.setAttribute('disabled','disabled');

  IDreset.classList.remove('invisible');
}


function Reset(){
    agresivo = false;
    defensivo = false;
    espada = false;
    arco = false;
    ok = false;

  IDespada.classList.remove("disabled");
  IDespada.removeAttribute('disabled','active');
  IDespada.classList.remove("btn-danger");

  IDarco.classList.remove("disabled");
  IDarco.removeAttribute('disabled','active');
  IDarco.classList.remove("btn-danger");

  IDagresivo.classList.remove("disabled");
  IDagresivo.removeAttribute('disabled','active');
  IDagresivo.classList.remove("btn-danger");

  IDdefensivo.classList.remove("disabled");
  IDdefensivo.removeAttribute('disabled','active');
  IDdefensivo.classList.remove("btn-danger");

  IDclase.classList.remove("disabled");
  IDclase.removeAttribute('disabled','active');

  IDreset.classList.add('invisible');

  clase.innerHTML = "Clase: Desconocida !";
  salud.innerHTML = "Salud: " + 500;
  defensa.innerHTML = "Defensa: " + 12;
  ataque.innerHTML = "Fuerza: " + 15;
}
