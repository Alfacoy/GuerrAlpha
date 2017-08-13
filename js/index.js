let player = new Player("Lothar",500,15,12);
Nombre.innerHTML += " "+ player.nombre;
Salud.innerHTML += " "+ player.hpv;
Defensa.innerHTML += " "+ player.def;
Ataque.innerHTML += " "+ player.atk;

let bety = new Player("Bety",100,20,14);


player.atacar(player,bety);
