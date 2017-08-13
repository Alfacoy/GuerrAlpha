//FUNCIONES VISUALES.
//Ciclo diurno.
const x = document.querySelector('#noche');
x.addEventListener('click',noche);

const y = document.querySelector('#dia');
y.addEventListener('click',dia);

//Ciclo nocturno.
function noche() {
  x.style.display="none";
  y.style.display="block";
  document.body.style.backgroundColor="black";
}
function dia() {
  x.style.display="block";
  y.style.display="none";
  document.body.style.backgroundColor="yellow";
}

noche();//DEFAULT.
