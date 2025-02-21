from rest_framework import viewsets
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

from . import models
from . import serializers
from utils.poui_custom_viewset import PouiViewset

class PacienteViewSet(PouiViewset):
    queryset            = models.Paciente.objects.all()
    serializer_class    = serializers.PacienteSerialize

    filter_backends     = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields    = ['nome_completo', 'email']
    search_fields       = ['nome_completo', 'email']