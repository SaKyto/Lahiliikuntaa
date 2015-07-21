from django.contrib.gis.db import models
from django.contrib.gis.geos import GEOSGeometry
import json

class WorldBorder(models.Model):
    # Regular Django fields corresponding to the attributes in the
    # world borders shapefile.
    name = models.CharField(max_length=50)
    area = models.IntegerField()
    pop2005 = models.IntegerField('Population 2005')
    fips = models.CharField('FIPS Code', max_length=2)
    iso2 = models.CharField('2 Digit ISO', max_length=2)
    iso3 = models.CharField('3 Digit ISO', max_length=3)
    un = models.IntegerField('United Nations Code')
    region = models.IntegerField('Region Code')
    subregion = models.IntegerField('Sub-Region Code')
    lon = models.FloatField()
    lat = models.FloatField()

    # GeoDjango-specific: a geometry field (MultiPolygonField), and
    # overriding the default manager with a GeoManager instance.
    mpoly = models.MultiPolygonField()
    objects = models.GeoManager()

    # Returns the string representation of the model.
    def __str__(self):              # __unicode__ on Python 2
        return self.name
    
class LiikuntaPaikat(models.Model):
    # Model for Lipas point data
    fid = models.IntegerField()
    tyyppikood = models.IntegerField()
    tyyppi_nim = models.TextField('tyyppi', blank=True, null=True)
    tyyppi_ni1 = models.TextField('type', blank=True, null=True)
    nimi_fi = models.TextField(blank=True, null=True)
    www = models.URLField(blank=True, null=True)
    sahkoposti = models.EmailField(blank=True, null=True)
    puhelinnum = models.TextField(blank=True, null=True)
    yllapitaja = models.TextField(blank=True, null=True)
    katuosoite = models.TextField(blank=True, null=True)
    postinumer = models.IntegerField(blank=True, null=True)
    postitoimi = models.TextField(blank=True, null=True)
    kuntanumer = models.IntegerField(blank=True, null=True)
    kunta_nimi = models.TextField(blank=True, null=True)
    lisatieto = models.TextField(blank=True, null=True)

    lon = models.FloatField()
    lat = models.FloatField()

    # GeoDjango-specific: a geometry field (PointField), and
    # overriding the default manager with a GeoManager instance.
    point = models.PointField()
    objects = models.GeoManager()

    def as_geojson(self):
        lp_dict = {}
        prop_dict = {}
        lp_dict['type'] = 'Feature'
        lp_dict['geometry'] = json.loads(self.point.json)
        prop_dict['nimi_fi'] = self.nimi_fi
        prop_dict['lisatieto'] = self.lisatieto
        prop_dict['tyyppikoodi'] = self.tyyppikood
        prop_dict['tyyppi'] = self.tyyppi_nim
        prop_dict['url'] = self.www
        prop_dict['osoite'] = self.katuosoite
        lp_dict['properties'] = prop_dict

        return lp_dict
    # Returns the string representation of the model.
    def __str__(self):              # __unicode__ on Python 2
        return self.nimi_fi