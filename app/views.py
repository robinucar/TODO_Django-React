from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Todo
from .serializers import TodoSerializer

# Create your views here.

# Requests
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