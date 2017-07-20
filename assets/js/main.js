var api = {
  url: 'http://localhost:3000/api/registerNumber'
}

var cargarPagina = function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $("#ingreso-numero").keypress(ingresoNumero);
  $(".checkbox_terminos").click(ingresoNumero);
  $(".btn-continuar").click(generarCodigoAleatorio);
  // $(".btn-continuar").click(metodoPost);

}

var ingresoNumero = function(e){
  var ascii = e.keyCode;
  var cuenta = $("#icon_telephone").val().length;
  var checkbox = $(".checkbox_terminos");

  if(ascii <= 46 || ascii >= 59) {
    return false;
  }

  if(cuenta >= 10){
    $("#icon_telephone").attr("disabled", true);
  }

//ya no moverrrrr!!!!
  if(cuenta == 10 && !checkbox.checked){
    $(".btn-continuar").removeAttr("disabled");
  }
}

var generarCodigoAleatorio = function (e) {
  $('.modal').modal();

  var digito1=Math.floor(Math.random()*10).toString();
  var digito2 = Math.floor(Math.random()*10).toString();
  var digito3 = Math.floor(Math.random()*10).toString();
  var codigoAleatorio = $("#codigoAleatorio");

  localStorage.digito1=digito1;
  localStorage.digito2=digito2;
  localStorage.digito3=digito3;

  var tuCodigo = $("<p>");
  tuCodigo.text(digito1 + digito2 + digito3);
  codigoAleatorio.append(tuCodigo);
}

$(document).ready(cargarPagina);
