var cargarPagina = function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $("#ingreso-numero").keypress(ingresoNumero);
  $(".checkbox_terminos").click(aceptoTerminos);
}

var ingresoNumero = function(e){
  var ascii = e.keyCode;
  var cuenta = $("#icon_telephone").val().length;

  if(cuenta == 9 && ascii >= 46) {
    $(".btn-continuar").removeAttr("disabled");
  }else if(cuenta <= 10 && ascii >= 59) {
    $(".btn-continuar").attr("disabled", true);
  }
}

var aceptoTerminos = function(){
  var checkbox = $(".checkbox_terminos");

  if(checkbox == false){
    $(".btn-continuar").removeAttr("disabled");
  } else {
    $(".btn-continuar").attr("disabled", true);
  }
}


$(document).ready(cargarPagina);
