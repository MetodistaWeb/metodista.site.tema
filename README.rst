*************************************
metodista.site.tema
*************************************

.. contents:: Conteúdo
   :depth: 2

Introdução
----------

Produto de temas DIAZO para portais da Metodista de Educação Superior, Intranet, noticiosos e colégios.

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

A fazer.


Rudge Ramos Online
^^^^^^^^^^^^^^^^^^

A fazer.


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
