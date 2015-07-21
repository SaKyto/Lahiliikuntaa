# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.contrib.gis.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('liikuntaa', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='LiikuntaPaikat',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('fid', models.IntegerField()),
                ('tyyppikood', models.IntegerField()),
                ('tyyppi_nim', models.TextField(verbose_name='tyyppi')),
                ('tyyppi_ni1', models.TextField(verbose_name='type')),
                ('nimi_fi', models.TextField()),
                ('www', models.URLField()),
                ('sahkoposti', models.EmailField(max_length=75)),
                ('muokattu_v', models.TextField(verbose_name='muokkaus_pvm')),
                ('yllapitaja', models.TextField()),
                ('postinumer', models.IntegerField()),
                ('postitoimi', models.TextField()),
                ('kuntanumer', models.IntegerField()),
                ('kunta_nimi', models.TextField()),
                ('lisatieto', models.TextField()),
                ('lon', models.FloatField()),
                ('lat', models.FloatField()),
                ('mpoly', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
