from django.db import models
# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    def to_json(self):
        return f"name: {self.name}, price: {self.price}, description: {self.description}, count: {self.count}"


class Category(models.Model):
    name = models.CharField(max_length=100)
    def to_json(self):
        return f"name: {self.name}"

