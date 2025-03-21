from rest_framework import filters
from rest_framework.generics import get_object_or_404
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
    ordering            = ['codigo']
    lookup_field        = 'codigo'

    http_method_names   = ['get', 'post', 'put']
    view_name           = 'paciente'


class PacienteListViewSet(PouiViewset):
    queryset            = models.Paciente.objects.all()
    serializer_class    = serializers.PacienteListSerialize

    filter_backends     = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields    = ['nome_completo', 'email']
    search_fields       = ['nome_completo', 'email']
    ordering            = ['email']
    lookup_field        = 'codigo'
    
    http_method_names   = ['get']
    
    view_name           = 'pacientes'

          