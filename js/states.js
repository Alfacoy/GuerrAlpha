//DEFINICION DEL ROL DEL PERSONAJE!!
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
      }else if (defensivo) {
        clase.innerHTML = "Clase: Paladin";
      }

    }else if (arco) {
      return clase.innerHTML = "Clase: Arquero";
    }else {
      return clase.innerHTML = "Clase: (ATENCION!!) Debes elegir tus atributos previamente!";
    }
    return;
}

//FIN DEFINICION DEL ROL DEL PERSONAJE!!
