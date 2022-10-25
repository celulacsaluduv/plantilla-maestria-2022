function cambiarNavbarDependiendoDeScroll() {
  var navbar = $(".js-pleca");
  // var texto_tema = $('.pleca__ee');
  if ($(window).scrollTop() > 200) {
    navbar.addClass("fixed-top");
    navbar.addClass("nav-show");
    navbar.addClass("d-block");
    navbar.removeClass("d-none");
    $("#BtnUp").addClass("d-block");
    $("#BtnUp").removeClass("d-none");
    // texto_tema.addClass('aparecer-desaparecer');
  } else {
    navbar.removeClass("fixed-top");
    navbar.removeClass("d-block");
    navbar.removeClass("nav-show");
    navbar.addClass("d-none");
    $("#BtnUp").removeClass("nav-show");
    $("#BtnUp").addClass("d-none");
    // texto_tema.removeClass('aparecer-desaparecer');
  }
}

$(window).scroll(function (event) {
  cambiarNavbarDependiendoDeScroll();
});




$(document).ready(function(){

  $("#BtnUp").click(function () {
    window.scrollTo(0, 0);
  });
  $(".btn-color").click(function () {
var d=$(this).data("c");
$(":root").css({"--primario": colores[d].primario});
$(":root").css({"--primario-hover": colores[d]["primario-over"]});
$(":root").css({"--secundario": colores[d].secundario});
$(":root").css({"--fondo-secundario": colores[d]["fondo-secundario"]});
$(":root").css({"--subtitulos": colores[d].subtitulos});
$(":root").css({"--degrado-inicio": colores[d]["degrado-inicio"]});
$(":root").css({"--degrado-fin": colores[d]["degrado-fin"]});

  });
});

let colores = [
  {
    "primario": "#18529D",
    "primario-over": "#86CABF",
    "secundario": "#009688",
    "fondo-secundario": "#B2DFDB",
    "subtitulos": "#009688",
    "degrado-inicio": "24,82,157",
    "degrado-fin":"0, 150, 136",
  },
  {
    "primario": "#18529D",
    "primario-over": "#86CABF",
    "secundario": "#9E9E9E",
    "fondo-secundario": "#B2DFDB",
    "subtitulos": "#9E9E9E",
    "degrado-inicio": "24,82,157",
    "degrado-fin":"158, 158, 158",
  },
  {
    "primario": "#18529D",
    "primario-over": "#FFE082",
    "secundario": "#AFB42B",
    "fondo-secundario": "#FFF59D",
    "subtitulos": "#AFB42B",
    "degrado-inicio": "24,82,157",
    "degrado-fin":"205, 220, 57",
  },
  {
    "primario": "#18529D",
    "primario-over": "#FFE082",
    "secundario": "#F57F17",
    "fondo-secundario": "#FFF59D",
    "subtitulos": "#F57F17",
    "degrado-inicio": "24,82,157",
    "degrado-fin":"245, 127, 23",
  },
  {
    "primario": "#18529D",
    "primario-over": "#86CABF",
    "secundario": "#009688",
    "fondo-secundario": "#B2DFDB",
    "subtitulos": "#009688",
    "degrado-inicio": "24,82,157",
    "degrado-fin":"0, 150, 136",
  },
  {
    "primario": "#18529D",
    "primario-over": "#86CABF",
    "secundario": "#009688",
    "fondo-secundario": "#B2DFDB",
    "subtitulos": "#009688",
    "degrado-inicio": "24,82,157",
    "degrado-fin":"0, 150, 136",
  },
];
