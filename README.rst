*************************************
metodista.site.tema
*************************************

.. contents:: Conteúdo
   :depth: 2

Introdução
----------

Produto de temas DIAZO para portais da Metodista de Educação Superior, Intranet, noticiosos e colégios.

Estado do pacote
----------------

O produto **metodista.site.tema** possui testes automatizados e cobertura de testes pelos serviços Travis e CoverAlls.

Segue abaixo imagens com estado atual do branch master dos testes e cobertura deste produto:

.. image:: https://travis-ci.org/MetodistaWeb/metodista.site.tema.svg?branch=master
   :target: https://travis-ci.org/MetodistaWeb/metodista.site.tema

.. image:: https://coveralls.io/repos/github/MetodistaWeb/metodista.site.tema/badge.svg
   :target: https://coveralls.io/github/MetodistaWeb/metodista.site.tema

    
Temas
-----------------

Izabela Hendrix
^^^^^^^^^^^^^^^

Completo.


Granbery
^^^^^^^^

Completo.


FAMES
^^^^^

Completo.

IPA
^^^

Completo.

Intranet
^^^^^^^^

Completo.

Colegios
^^^^^^^^

Completo.


Rudge Ramos Online
^^^^^^^^^^^^^^^^^^

Completo.


Instalação
----------

Para habilitar a instalação deste produto em um ambiente que utilize o
buildout:

1. Editar o arquivo buildout.cfg (ou outro arquivo de configuração) e
   adicionar o pacote ``metodista.site.tema`` à lista de eggs da instalação::

        [buildout]
        ...
        eggs =
            metodista.site.tema

2. Após alterar o arquivo de configuração é necessário executar
   ''bin/buildout'', que atualizará sua instalação.

3. Reinicie o Plone

4. Acesse o painel de controle e na opção **Temas** você verá os temas
providos por este pacote listados.
