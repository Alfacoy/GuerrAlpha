//Cuenta con una vida inicial y un ataque..

class humano {
  constructor() {
    this.hp = 500
    this.hpv = this.hp
    this.atk = 13
  }
  atacar(who){
    who.hpv=who.hpv - this.atk
  }

  live(hpv){
    if (hpv <= 0)
    {
      console.log("Moriste Humano")
    }
  }
}


class enemigo {
  constructor() {
    this.hp = 400
    this.hpv = this.hp
    this.atk = 20
  }
  atacar(who){
    who.hpv=who.hpv - this.atk
  }

  answer(hpv,hp){
    const cien = 100
    const porcentaje = Math.round((hpv * cien ) / hp)

    if (porcentaje < 40) {
      console.log("Vida enemiga menor a 40 .. "+porcentaje)
    }else {
      console.log("Vida enemiga mayor a 40.."+porcentaje)
    }
  }

  live(hpv){
    if (hpv <= 0)
    {
      console.log("Moriste Enemigo")
    }
  }
}
