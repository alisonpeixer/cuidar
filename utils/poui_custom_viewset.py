from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError

class PouiViewset(viewsets.ModelViewSet):
    def list(self, request, *args, **kwargs):
      try:

        queryset = self.filter_queryset(self.get_queryset())

        # Filtering query parameters
        filter_backends = self.filter_backends
        for backend in filter_backends:
          queryset = backend().filter_queryset(request, queryset, self)

        page = self.paginate_queryset(queryset)

        serializerQuery = self.get_serializer(queryset, many=True)

        if page is not None:
          serializer = self.get_serializer(page, many=True)
          paginator = self.paginator.get_paginated_response(serializer).data

          return Response({
            "items": serializer.data,
            "hasNext": paginator["next"] is not None
          }, status=status.HTTP_200_OK)

        return Response({
          "items": serializerQuery.data,
          "hasNext": (self.paginator.page_size < len(serializerQuery.data))
        }, status=status.HTTP_200_OK)

      except ValidationError as e:
        return Response(e.detail, status.HTTP_400_BAD_REQUEST)
      except Exception as e:
        return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)
