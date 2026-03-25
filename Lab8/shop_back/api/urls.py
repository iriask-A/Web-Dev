from django.urls import path
from .views import product_list,category_list,product_detail,category_detail,category_products

urlpatterns = [
    path('products/',product_list,name="products"),
    path('categories/',category_list,name="categories"),
    path('products/<int:id>',product_detail,name="products"),
    path('categories/<int:id>',category_detail,name="categories"),
    path('categories/<int:id>/products',category_products,name="categories"),
]