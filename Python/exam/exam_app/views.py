from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views import View
from .models import User, Settings


# Create your views here.
class LoginView(View):
    def get(self,request):
        return render(request, "exam_app/task_forms.html")
    def post(self,request):
        username = request.POST.get("username")
        password = request.POST.get("password")

        user_exists = User.objects.filter(username=username, password=password).exists()

        context = {}

        if user_exists:
            response = render(request, "exam_app/task_forms.html", {"message":"Logged in"})
            response.set_cookie("logged_in", True, max_age=86400)
        else:
            response = render(request, "exam_app/task_forms.html", {"message":"Login Error!!"})
            response.delete_cookie("logged_in")

        return response

class EmptyView(View):
    def get(self,request):
        return redirect("login")
    def post(self,request):
        ...

class DivideView(View):
    def get(self,request, a, b):
        try:
            result = int(a) / int(b)
            return HttpResponse(f"Result: {result}")
        except ZeroDivisionError:
            return HttpResponse(f"Can't divide by zero")

