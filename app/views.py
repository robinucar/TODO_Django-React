from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Todo
from .serializers import TodoSerializer

# Create your views here.

# CRUD API Requests GET AND POST
@api_view(["GET", "POST"])

def todo_list(request):
  if request.method == "GET":
    # Retrieve all Todo objects and serialize them
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)
  elif request.method == "POST":
    #Create a new serializer with data from the request
    serializer = TodoSerializer(data=request.data)
    # Save data if it is valid and return 201 status, else return 400 status
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status= status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
# CRUD API Requests GET PATCH AND DELETE
@api_view(["GET","PATCH", "DELETE"])
def todo_detail(request, pk):
  todo = get_object_or_404(Todo, id=pk)

  # get spesific todo by id
  if request.method == "GET":
    serializer = TodoSerializer(todo)
    return Response(serializer.data)
  
  # update any fields 
  elif request.method == "PATCH":
    serializer = TodoSerializer(todo, data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  # delete todo
  elif request.method == 'DELETE':
    todo.delete()
    return Response(status= status.HTTP_204_NO_CONTENT)