function translate(){
  var title = document.getElementById("form-signin-heading");
  var email= document.getElementById("inputEmail");
  var pasword = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Ingresa tu correo electronico";
  pasword.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar sesión";
}
translate();

function print(){
  var correo = document.getElementById("inputEmail").value;
  var contraseña = document.getElementById("inputPassword").value;
  var datos = document.getElementById("datos");
  datos.innerHTML= "<br>"+"<h3>"+"Datos de Formulario"+"</h3>"+
                    "El correo electronico ingresado es: "+"<br>"+correo + "<br>"+
                    "La clave ingresada es: "+"<br>"+contraseña;
};
