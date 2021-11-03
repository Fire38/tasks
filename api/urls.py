from django.urls import path
from api import views


urlpatterns = [
    path('get-rubrics/', views.GetRubric.as_view()),
    path('add-rubric/', views.AddRubric.as_view()),
    path('get-rubric-items/<task_type>/<filter_id>/', views.GetRubricItem.as_view()),
    path('add-rubric-items/', views.AddRubricItem.as_view()),

]