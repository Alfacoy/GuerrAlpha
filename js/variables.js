//VARIABLES GENERALES DEL JUEGO.
//Estados.
  var agresivo = false;
  var defensivo = false;
//Armamento.
  var espada = false;
  var arco = false;
//Objetos.
  var potHp = 5;
//Proximo a usar.
  var ok = false;

//Datos del Jugador.
  var Clase = document.querySelector('#clase').innerHTML += " Desconocida!";
  var nombre = document.querySelector('#nombre');
  var salud = document.querySelector('#salud');
  var defensa = document.querySelector('#defensa');
  var ataque = document.querySelector('#fuerza');
  var potHp = document.querySelector('#potHp');
  var Consola = document.querySelector('#consola').innerHTML = "Texto de Batalla.";
//FIN Datos del Jugador.
//FIN VARIABLES GENERALES DEL JUEGO.



//VARIABLES DEL MAPEADO.
//Linea numero uno
  var a = document.querySelector('#box0');
  var b = document.querySelector('#box1');
  var c = document.querySelector('#box2');

//Linea numero dos
  var d = document.querySelector('#box3');
  var e = document.querySelector('#box4');
  var f = document.querySelector('#box5');

//Linea numero tres
  var g = document.querySelector('#box6');
  var h = document.querySelector('#box7');
  var i = document.querySelector('#box8');


  var casillas = new Array(9);
    casillas = [ [a,b,c],[d,e,f],[g,h,i] ];

//FIN VARIABLES DEL MAPEADO.
