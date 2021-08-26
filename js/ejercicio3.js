// capturo los botones de sumar y restar por id
const botonSumar = document.getElementById("btn-sumar");
const botonRestar = document.getElementById("btn-restar");

// camputuro los inputs de valores 1 y 2 por id
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

// campturo el elemnto <span></span> de resultado por id
const resultado = document.querySelector(".resultado");

// escucho el evento click del boton sumar
botonSumar.addEventListener("click", function () {
  // extraigo los valores 1 y 2 de las variables en la cual la teniamos almacenadas
  // esto lo extraigo de la propiedad value
  const num1 = +valor1.value;
  const num2 = +valor2.value;
  // creo la variable suma que contendra la suma de los dos valores
  const suma = num1 + num2;
  // coloco el valor de suma en la propiedad innerHTML de la variable resultado
  // donde teniamos capturado el span por id
  resultado.innerHTML = suma;
});
// escucho el evento click del boton restar
botonRestar.addEventListener("click", function () {
  // extraigo los valores 1 y 2 de las variables en la cual la teniamos almacenadas
  // esto lo extraigo de la propiedad value
  const num1 = +valor1.value;
  const num2 = +valor2.value;
  // creo la variable resta que contendra la resta de los dos valores
  let resta = num1 - num2;
  // valido con la funcion Math.sign(numero) que retorna -1 si es negativo o 1 si es positivo
  if (Math.sign(resta) === -1) {
    // si es negativo(-1) cambio el valor de la variable resta a 0
    resta = 0;
  }
  // luego de esto coloco el valor en la propiedad innerHTML de la variable resultado
  resultado.innerHTML = resta;
});
