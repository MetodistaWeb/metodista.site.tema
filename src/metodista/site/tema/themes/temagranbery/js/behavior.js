$(window).load(function(){     
       if ($('.wrapper').width() <= 750 ){
              $('.portlet-static-menu-do-curso').contents().appendTo('#viewlet-above-content');
       }

jQuery("body.section-pedagogia #logo img, body.section-museu #logo img, body.section-pastoral #logo img, body.section-projeto-contadores-de-historias #logo img, body.section-administracao #logo img, body.section-direito #logo img, body.section-educacao-fisica #logo img, body.section-sistemas-de-informacao #logo img, body.section-graduacao #logo img, body.section-pos-graduacao #logo img, body.section-pesquisa #logo img, body.section-intercambio #logo img, body.section-financeiro #logo img, body.section-famidade #logo img, body.section-extensao #logo img, body.section-centro-de-esportes #logo img, body.section-biblioteca #logo img, body.section-avaliacao-institucional #logo img").each(function( index ) {
    var urlbase = $("base").attr('href');
    $(this).attr('src', urlbase + "/logo-secao.jpg");
    $(this).addClass('logosecao');
    $(this).after('<a class=logolinksecao href="' + urlbase + '"></a>' );
})
       
}); 