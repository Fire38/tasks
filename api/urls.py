from django.urls import path
from api import views


urlpatterns = [
    path('rubrics/', views.rubric_list),
    path('rubrics/<int:pk>/', views.rubric_detail),
]