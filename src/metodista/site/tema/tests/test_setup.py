# -*- coding: utf-8 -*-

from plone.app.theming.utils import getAvailableThemes
from plone.app.theming.utils import getTheme
from metodista.site.tema.testing import INTEGRATION_TESTING
import unittest


class InstallTestCase(unittest.TestCase):

    layer = INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']

    def test_temas_disponiveis(self):
        themes = getAvailableThemes()
        # Nosso tema + os dois do Plone
        self.assertEqual(len(themes), 3)

    def test_tema_disponivel(self):
        theme = getTheme('Tema')
        self.assertTrue(theme is not None)
        self.assertEqual(theme.__name__, 'tema')
        self.assertEqual(theme.title, 'Tema')
        self.assertEqual(theme.description,
                         'Tema para portal')
        self.assertEqual(theme.rules, '/++theme++tema/rules.xml')
        self.assertEqual(theme.absolutePrefix, '/++theme++tema')
        self.assertEqual(theme.doctype, '<!DOCTYPE html>')
