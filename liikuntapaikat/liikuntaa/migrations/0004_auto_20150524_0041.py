# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('liikuntaa', '0003_auto_20150524_0024'),
    ]

    operations = [
        migrations.AddField(
            model_name='liikuntapaikat',
            name='katuosoite',
            field=models.TextField(null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='liikuntapaikat',
            name='puhelinnum',
            field=models.TextField(null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='kunta_nimi',
            field=models.TextField(null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='lisatieto',
            field=models.TextField(null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='muokattu_v',
            field=models.TextField(verbose_name='muokkaus_pvm', blank=True, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='postitoimi',
            field=models.TextField(null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='tyyppi_ni1',
            field=models.TextField(verbose_name='type', blank=True, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='tyyppi_nim',
            field=models.TextField(verbose_name='tyyppi', blank=True, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='yllapitaja',
            field=models.TextField(null=True, blank=True),
            preserve_default=True,
        ),
    ]
