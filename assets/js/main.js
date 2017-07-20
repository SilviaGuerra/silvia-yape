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

  if(cuenta == 9){
      $(".btn-continuar").removeAttr("disabled");
  } else {
    $(".btn-continuar").attr("disabled", true);
  }


  // if(cuenta == 9){
  //   if(!checkbox.checked){
  //     $(".btn-continuar").removeAttr("disabled");
  //   }
  // }
  // else if(cuenta > 9 ) {
  //   $(".btn-continuar").attr("disabled", true);
  // }


  // if(){
  //   $(".btn-continuar").removeAttr("disabled");
  // } else {
  //   $(".btn-continuar").attr("disabled", true);
  // }
}

$(document).ready(cargarPagina);
