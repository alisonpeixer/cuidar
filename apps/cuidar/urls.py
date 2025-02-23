from django.urls import path, include
from rest_framework import routers


from . import views

router = routers.DefaultRouter()
router.register(r'paciente', views.PacienteViewSet, basename='paciente')
router.register(r'pacientes', views.PacienteListViewSet, basename='pacientes')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]