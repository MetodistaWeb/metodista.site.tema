$(window).load(function(){     
       if ($('.wrapper').width() <= 750 ){
              $('.portlet-static-menu-do-curso').contents().appendTo('#viewlet-above-content');
       }

jQuery("body.section-administracao #logo img, body.section-arquitetura-e-urbanismo #logo img, body.section-biomedicina #logo img, body.section-ciencias-biologicas #logo img, body.section-ciencias-contabeis #logo img, body.section-design-de-interiores #logo img, body.section-direito #logo img, body.section-educacao-fisica #logo img, body.section-enfermagem #logo img, body.subsection-engenharia-ambiental-e-sanitaria #logo img, body.subsection-engenharia-civil #logo img, body.subsection-engenharia-de-producao #logo img, body.section-fisioterapia #logo img, body.section-fonoaudiologia #logo img, body.section-jornalismo #logo img, body.section-musica #logo img, body.section-pedagogia #logo img, body.section-teologia #logo img, body.section-pastoral #logo img, body.section-estagios #logo img, body.section-bibliotecas #logo img, body.section-relacoes-internacionais #logo img, body.section-clinicas #logo img, body.section-comite-de-etica #logo img, body.section-pos-graduacao #logo img, body.section-humanidades #logo img, body.subsection-conhecimento-e-saber #logo img, body.subsection-ser-humano-relacoes #logo img, body.subsection-sociedade-e-movimentos #logo img, body.subsection-meio-ambiente-e-consciencia-planetaria #logo img, body.subsection-museu #logo img" ).each(function( index ) {
    var urlbase = $("base").attr('href');
    $(this).attr('src', urlbase + "/logo-secao.jpg");
    $(this).addClass('logosecao');
    $(this).after('<a class=logolinksecao href="' + urlbase + '"></a>' );
})
       
});