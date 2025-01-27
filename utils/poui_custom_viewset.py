from rest_framework import viewsets


class PouiViewset(viewsets.ModelViewSet):
    def list(self, request, *args, **kwargs):

      queryset = self.filter_queryset(self.get_queryset())

      filter_backends = self.filter_backends

      for backend in filter_backends:
        queryset = backend().filter_queryset(request, queryset, self)

      page = self.paginate_queryset(queryset)

      serializerQuery = self.get_serializer(queryset, many=True)

      if page is not None:
        serializer = self.get_serializer(page, many=True)
        paginator = self.paginator.get_paginated_response(serializer).data
