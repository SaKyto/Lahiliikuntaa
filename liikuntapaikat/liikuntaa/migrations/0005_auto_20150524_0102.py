# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('liikuntaa', '0004_auto_20150524_0041'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='liikuntapaikat',
            name='muokattu_v',
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='kuntanumer',
            field=models.IntegerField(null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='nimi_fi',
            field=models.TextField(null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='postinumer',
            field=models.IntegerField(null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='sahkoposti',
            field=models.EmailField(max_length=75, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='liikuntapaikat',
            name='www',
            field=models.URLField(null=True, blank=True),
            preserve_default=True,
        ),
    ]
