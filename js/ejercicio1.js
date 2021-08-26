// capturo el formulario por id
let form = document.getElementById("formulario");
// escucho con el evento addEventListener el evento submit del formulario
form.addEventListener("submit", function (e) {
  // e.preventDefault(); sirve para evitar que el formulario se envíe
  e.preventDefault();
  limpiarErrores();
  // almaceno en varibles los campos de mi formulario
  // los capturo por selector de id
  let nombre = document.getElementById("nombre").value;
  let asunto = document.getElementById("asunto").value;
  let mensaje = document.getElementById("mensaje").value;
  // valido los campos con mi función validar()
  // le paso los parametros que necesita la función
  let resultado = validar(nombre, asunto, mensaje);
  // si la función validar() retorna true, es que todo funciono correctamente
  if (resultado) {
    // si la validación es exitosa, llamo a la función exito()
    exito();
  }
});

// limpia los errores del formulario
const limpiarErrores = () => {
  // los selecciono por selector de clase y los vacio con su propiedad innerHTML
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
};

// la funcion exito() sirve para mostrar el mensaje
const exito = () => {
  // selecciono por selector de clase el div que contiene el .resultado
  // y lo lleno con la frase correspondiente con su propiedad innerHTML
  document.querySelector(".resultado").innerHTML =
    "Formulario pasó la validación";
};

// validar() es para mostrar de forma correcta los mensajes de error
const validar = (nombre, asunto, mensaje) => {
  // almaceno en una variable el resultado de la validación
  let pasamosLaValidacion = true;
  // creo la expresión regular que me permite solo texto de a-z y A-Z
  let expresionRegularTexto = /[a-zA-Z]/gim;
  // valido el nombre con mi expresión regular
  if (!expresionRegularTexto.test(nombre)) {
    //  si falla, selecciono el div por selector de clase y le pongo el mensaje
    document.querySelector(".errorNombre").innerHTML = "Ingrese nombre válido";
    // coloco el valor de la variable pasamosLaValidacion a false
    // esto es para enviar false si falla la validación
    pasamosLaValidacion = false;
  }
  // valido el asunto con mi expresión regular
  if (!expresionRegularTexto.test(asunto)) {
    document.querySelector(".errorAsunto").innerHTML = "Ingrese asunto válido";
    // coloco el valor de la variable pasamosLaValidacion a false
    // esto es para enviar false si falla la validación
    pasamosLaValidacion = false;
  }
  // valido el mensaje con mi expresión regular
  if (!expresionRegularTexto.test(mensaje)) {
    document.querySelector(".errorMensaje").innerHTML =
      "Ingrese mensaje válido";
    // coloco el valor de la variable pasamosLaValidacion a false
    // esto es para enviar false si falla la validación
    pasamosLaValidacion = false;
  }
  // si todo funciona bien retornaremos pasamosLaValidacion que contiene true;
  return pasamosLaValidacion;
};
