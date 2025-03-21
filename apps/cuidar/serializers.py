from rest_framework import routers, serializers, viewsets

from . import models


class PacienteSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model   = models.Paciente
        fields  = '__all__'
        read_only_fields = ('codigo','created_at','updated_at')
        extra_kwargs = {
            'url': {'lookup_field': 'codigo'}
        }


class PacienteListSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model   = models.Paciente
        fields  = ('codigo','nome_completo','genero','data_nascimento','data_admissao','cadastro_ativo')
        extra_kwargs = {
            'url': {'lookup_field': 'codigo'}
        }