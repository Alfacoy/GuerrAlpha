//Botonera ARMAS.
const IDespada = document.querySelector('#espada');
IDespada.addEventListener('click',ModoEspada);
const IDarco = document.querySelector('#arco');
IDarco.addEventListener('click',ModoArco);


//Botonera MODO.
const IDagresivo = document.querySelector('#agresivo');
IDagresivo.addEventListener('click',ModoAtk);
const IDdefensivo = document.querySelector('#defensivo');
IDdefensivo.addEventListener('click',ModoDef);

//Botonera DEFINIR HEROE.
const IDclase = document.querySelector('#heroe');
IDclase.addEventListener('click',QueSos);
