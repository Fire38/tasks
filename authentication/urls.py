from django.urls import path
from rest_framework_simplejwt import views
from .views import CustomUserCreate, GetUser


urlpatterns = [
    path('token/obtain/', views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('user/create/', CustomUserCreate.as_view(), name='create_user'),

    path('get_user/', GetUser.as_view())
]