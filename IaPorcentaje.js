const hp = 5980
let hpv = 3490
//Esta funcion toma por atributos el HPV y HP multiplicando por cien al hpv 
//y dividiendolo por hp para asi, tener un porcentaje redondeado de su vida
//y preguntarse que hacer.

function answer(hpv,hp){
  const cien = 100
  const porcentaje = Math.round(( hpv * cien ) / hp)
  return porcentaje
}


answer(hpv,hp)
