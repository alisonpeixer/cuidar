from rest_framework import routers, serializers, viewsets

from . import models


class PacienteSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model   = models.Paciente
        fields  = '__all__'