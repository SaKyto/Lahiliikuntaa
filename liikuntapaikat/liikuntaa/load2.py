import os
from django.contrib.gis.utils import LayerMapping
from liikuntaa.models import LiikuntaPaikat

liikunta_mapping = {
    'fid' : 'id',
    'tyyppikood' : 'tyyppikood',
    'tyyppi_nim' : 'tyyppi_nim',
    'tyyppi_ni1' : 'tyyppi_ni1',
    'nimi_fi' : 'nimi_fi',
    'www' : 'www',
    'sahkoposti' : 'sahkoposti',
    'puhelinnum' : 'puhelinnum',
    'yllapitaja' : 'yllapitaja',
    'katuosoite' : 'katuosoite',
    'postinumer' : 'postinumer',
    'postitoimi' : 'postitoimi',
    'kuntanumer' : 'kuntanumer',
    'kunta_nimi' : 'kunta_nimi',
    'lisatieto' : 'lisatieto_',
    'lon' : 'x_4326',
    'lat' : 'y_4326',
    'point' : 'POINT',
}

''' Path, HARD-CODED '''
liikuntapaikat = os.path.abspath(os.path.join(os.path.dirname(__file__), 'data/lipas/Lipas_lisaa_espoo_hki_kaun_vantaa.shp'))

def run(verbose=True):
    lm = LayerMapping(LiikuntaPaikat, liikuntapaikat, liikunta_mapping,
                      transform=False, encoding='iso-8859-1')

    lm.save(strict=False, verbose=verbose)