var api = {
  url: 'http://localhost:3000/api/registerNumber'
}

var cargarPagina = function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $("#ingreso-numero").keypress(ingresoNumero);
  $(".checkbox_terminos").click(ingresoNumero);
  $(".btn-continuar").click(generarCodigoAleatorio);
  $('.modal').modal();
  // $("#codigosms").click(validarCodigo);
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
  e.preventDefault();

  var phone = $("#icon_telephone").val();
  var terms = $(".checkbox_terminos").val();

  $.post(api.url, {phone: phone, terms: terms}, function(respuesta){
    if(respuesta.success){
      var codigoAleatorio = $("#codigoAleatorio");

      var tuCodigo = $("<p>");
      tuCodigo.text(respuesta.data.code);
      codigoAleatorio.append(tuCodigo);
    }else{
      $("#icon_telephone").attr("disabled", false);
      alert(respuesta.message);
    }
  }, "json");
}

// var validarCodigo = function(){
//   var telefonoRegistrado = $("#icon_telephone").val();
//
//   $.post(api.url, {phone: telefonoRegistrado}, function(telefono){
//     console.log(telefonoRegistrado);
//   });
// }


$(document).ready(cargarPagina);
