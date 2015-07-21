from django.conf.urls import patterns, include, url
from django.contrib.gis import admin
from liikuntaa.views import index, allPoints

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'liikuntapaikat.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', index, name='liikuntapaikat-index'),
    url(r'^all/$', allPoints, name='all'),
)
