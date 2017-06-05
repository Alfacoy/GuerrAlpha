//Cuenta con una vida inicial y un ataque..

class humano {
  constructor() {
    this.hp = 500
    this.atk = 13
  }
  atacar(who){
    who.hp=who.hp - this.atk
  }
}


class enemigo {
  constructor() {
    this.hp = 400
    this.atk = 20
  }
  atacar(who){
    who.hp=who.hp - this.atk
  }
}
