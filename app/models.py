from django.db import models

# Create your models here.
class Todo(models.Model):
  title = models.CharField(max_length=200)
  completed = models.BooleanField(default=False)
  created = models.DateField(auto_now_add=True)

# return title of a Todo Object 
  def __str__(self):
    return self.title