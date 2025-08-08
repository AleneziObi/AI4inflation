from django.urls import path
from .views import analyze_inflation

urlpatterns = [
    path("analyze/", analyze_inflation),
]