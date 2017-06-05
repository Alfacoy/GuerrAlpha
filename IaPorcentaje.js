const hp = 5980
let hpv = 3490

function answer(hpv,hp){
  const cien = 100
  const porcentaje = Math.round(( hpv * cien ) / hp)
  return porcentaje
}


answer(hpv,hp)
