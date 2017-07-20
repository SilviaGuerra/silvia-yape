var cargarPagina = function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $("#ingreso-numero").keypress(ingresoNumero);
  $(".checkbox_terminos").click(ingresoNumero);
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

$(document).ready(cargarPagina);
