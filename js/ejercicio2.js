// capturo los botones por id y los almaceno en variables
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");

//  caputuro el div con el id caja para despues colocar el color dependiendo el boton
const caja = document.getElementById("caja");

// leo el evento click del boton 1
btn1.addEventListener("click", function (evento) {
  // capturo la propiedad backgroundColor del evento del boton al hacer click
  const backgroundColor = evento.target.style.backgroundColor;
  // coloco el color de la caja
  caja.style.backgroundColor = backgroundColor;
});
// MISMOS COMENTARIOS PARA TODOS LOS DEMAS
btn2.addEventListener("click", function (evento) {
  const backgroundColor = evento.target.style.backgroundColor;
  caja.style.backgroundColor = backgroundColor;
});
btn3.addEventListener("click", function (evento) {
  const backgroundColor = evento.target.style.backgroundColor;
  caja.style.backgroundColor = backgroundColor;
});
btn4.addEventListener("click", function (evento) {
  const backgroundColor = evento.target.style.backgroundColor;
  caja.style.backgroundColor = backgroundColor;
});
btn5.addEventListener("click", function (evento) {
  const backgroundColor = evento.target.style.backgroundColor;
  caja.style.backgroundColor = backgroundColor;
});
btn6.addEventListener("click", function (evento) {
  const backgroundColor = evento.target.style.backgroundColor;
  caja.style.backgroundColor = backgroundColor;
});
