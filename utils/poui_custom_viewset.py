from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError

from utils.poui_api_response import Erro,Lista,Menssages,Menssage

class PouiViewset(viewsets.ModelViewSet):
    ##############################################
    # Listando
    ##############################################
    def list(self, request, *args, **kwargs):
      try:

        queryset = self.filter_queryset(self.get_queryset())

        filter_backends = self.filter_backends
        for backend in filter_backends:
          queryset = backend().filter_queryset(request, queryset, self)

        page = self.paginate_queryset(queryset)

        serializerQuery = self.get_serializer(queryset, many=True)

        if page is not None:
          serializer = self.get_serializer(page, many=True)
          paginator = self.paginator.get_paginated_response(serializer).data
         
          return Response(Lista(serializer.data, bool(paginator['next'])))

        return Response(Lista(serializerQuery.data,(self.paginator.page_size < len(serializerQuery.data))))

      except ValidationError as e:
        return Response(Erro(e.detail), status.HTTP_400_BAD_REQUEST)
      except Exception as e:
        return Response(Erro(str(e),500), status.HTTP_500_INTERNAL_SERVER_ERROR)
      
    ##############################################
    # Pegando Unico
    ##############################################
    def retrieve(self, request, *args, **kwargs):
      try:
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
      
      except ValidationError as e:
        return Response(Erro(e.detail), status.HTTP_400_BAD_REQUEST)
      except Exception as e:
        return Response(Erro(str(e),404), status.HTTP_404_NOT_FOUND)
    
    ##############################################
    # Criando
    ##############################################
    def create(self, request, *args, **kwargs):
      try:
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        return Response(Menssages(serializer.data,[Menssage(f"{self.view_name.upper()}: Incluido com sucesso!")]),headers=headers)
      
      except ValidationError as e:
        if len(e.detail) > 0:
          menssages = []
          for field in e.detail:
            menssages.append(Menssage(f"{field.upper()}: {e.detail[field][0].upper()}", "warning",400))

          return Response(Erro(f"{self.view_name.upper()} - Erro ao criar registro",400,"",menssages), status.HTTP_400_BAD_REQUEST)
 
        return Response(Erro(e.detail), status.HTTP_400_BAD_REQUEST)
      except Exception as e:
        return Response(Erro(str(e),500), status.HTTP_500_INTERNAL_SERVER_ERROR)
      
    ##############################################
    # Atualizando
    ##############################################
    def update(self, request, *args, **kwargs):
      try:
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(Menssages(serializer.data,[Menssage(f"{self.view_name.upper()} Atualizado com sucesso!")]))
      
      except ValidationError as e:
        if len(e.detail) > 0:
          menssages = []
          for field in e.detail:
            menssages.append(Menssage(f"{field.upper()}: {e.detail[field][0].upper()}", "warning",400))
            
          return Response(Erro(f"{self.view_name.upper()} - Erro ao atualizar registro",400,"",menssages), status.HTTP_400_BAD_REQUEST)
        return Response(Erro(e.detail), status.HTTP_400_BAD_REQUEST)
      except Exception as e:
        return Response(Erro(str(e),500), status.HTTP_500_INTERNAL_SERVER_ERROR)
      
    ##############################################
    # Deletando
    ##############################################
    def destroy(self, request, *args, **kwargs):
      try:
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(Menssage(f"{self.view_name.upper()}: Deletado com sucesso!"), status=status.HTTP_204_NO_CONTENT)
      
      except ValidationError as e:
        return Response(Erro(e.detail), status.HTTP_400_BAD_REQUEST)
      except Exception as e:
        return Response(Erro(str(e),500), status.HTTP_500_INTERNAL_SERVER_ERROR)
    

      