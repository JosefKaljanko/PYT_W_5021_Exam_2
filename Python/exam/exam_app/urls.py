from django.urls import path, include
from .views import LoginView, EmptyView, DivideView

urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("", EmptyView.as_view(), name="index"),
    path("divide/<int:a>/<int:b>", DivideView.as_view()),
]
