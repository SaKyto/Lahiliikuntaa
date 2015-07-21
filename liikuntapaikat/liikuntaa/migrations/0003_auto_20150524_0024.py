# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('liikuntaa', '0002_liikuntapaikat'),
    ]

    operations = [
        migrations.RenameField(
            model_name='liikuntapaikat',
            old_name='mpoly',
            new_name='point',
        ),
    ]
