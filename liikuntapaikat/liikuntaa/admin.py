from django.contrib.gis import admin
from liikuntaa.models import WorldBorder, LiikuntaPaikat

admin.site.register(WorldBorder, admin.GeoModelAdmin)
admin.site.register(LiikuntaPaikat, admin.GeoModelAdmin)