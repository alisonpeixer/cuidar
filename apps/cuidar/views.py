from rest_framework import viewsets

from . import models
from . import serializers


class PacienteViewSet(viewsets.ModelViewSet):
    queryset            = models.Paciente.objects.all()
    serializer_class    = serializers.PacienteSerialize