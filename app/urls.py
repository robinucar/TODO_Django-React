from django.urls import path
from . import views
# routing Http requests
# HTTP request with the path /todos will be routed to the todo_list
urlpatterns = [
  path("todos", views.todo_list)
]