//Prototipo de inteligencia artificial!

class enemigo {
  constructor() {
    this.hp = 400
    this.hpv = this.hp
    this.atk = 20
  }
  atacar(player){
    player.hpv=player.hpv - this.atk
  }

  answer(hpv,hp){
    const cien = 100
    const porcentaje = Math.round((hpv * cien ) / hp)

    if (porcentaje < 40) {
      console.log("Vida de bety menor a 40 .. "+porcentaje)
    }else {
      console.log("Vida de bety mayor a 40.."+porcentaje)
    }
  }

  live(hpv){
    if (hpv <= 0)
    {
      console.log("Moriste Enemigo")
    }
  }
}
