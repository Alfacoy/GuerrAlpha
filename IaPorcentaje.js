const MAX_HP = 5980
let VAR_HP = 3490

function porce(HPD,HPE){
  const FIN = 100
  const CUANTO = Math.round(( HPD * FIN ) / HPE)
  return CUANTO
}

console.log(porce(19,32))
