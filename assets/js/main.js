var cargarPagina = function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $("#ingreso-numero").keypress(ingresoNumero);
}

var ingresoNumero = function(e){
  var ascii = e.keyCode;
  var cuenta = $("#icon_telephone").val().length;

  if(cuenta <= 10 || ascii >= 46) {
    $(".btn-continuar").attr("disabled", true);
  }

  if(cuenta == 9 || ascii == 59) {
    $(".btn-continuar").removeAttr("disabled");
  }
}


$(document).ready(cargarPagina);
