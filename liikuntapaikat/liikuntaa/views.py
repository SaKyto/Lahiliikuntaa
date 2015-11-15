from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.gis.geos import Point
from django.contrib.gis.measure import D

from liikuntaa.models import LiikuntaPaikat
import json

def index(request):
    return render(request, 'map.html')

def allPoints(request):
    sites = LiikuntaPaikat.objects.all()
    features = []    
    for feature in sites:
        features.append(feature.as_geojson())
    result = { 'type': 'FeatureCollection', 'features': features }
    return HttpResponse(json.dumps(result), content_type="application/vnd.geo+json")
