from rest_framework.pagination import PageNumberPagination
from django.core.paginator import EmptyPage, PageNotAnInteger
from math import ceil
from django.http import Http404
class BlogPagination(PageNumberPagination):
    page_size = 1
    page_size_query_param = "page_size"
    max_page_size = 10

    def get_next_link(self):
        print( not self.page.has_next())
        if not self.page.has_next():
            print('returning none')
            return None
        next_page_number = self.page.next_page_number()
        return f'?page={next_page_number}'
    def get_previous_link(self):
        if not self.page.has_previous():
            return None
        previous_page_number = self.page.previous_page_number()
        if previous_page_number == 1:
            return "/"
        return f"?page={previous_page_number}"

    def paginate_queryset(self, queryset, request, view=None):
        self.page_number = request.GET.get('page')
        self.page_size = self.get_page_size(request)
        print("pagination understanding")

        paginator = self.django_paginator_class(queryset.reverse(), self.page_size)

        try:
            self.page = paginator.page(self.page_number)
        except (PageNotAnInteger, EmptyPage):
            raise Http404("Invalid page number")
        
        if self.page.paginator.count == 0:
            return []

        return list(self.page)