from django.http import JsonResponse
from .models import Category,Product
# Create your views here.
def product_list(request):
    products = Product.objects.all()
    products_list = [p.to_json() for p in products]
    return JsonResponse(products_list, safe=False)
def category_list(request):
    categories = Category.objects.all()
    categories_list = [c.to_json() for c in categories]
    return JsonResponse(categories_list, safe = False)
def product_detail(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse(product.to_json(), safe = False)
def category_detail(request,id):
    category = Category.objects.get(id = id)
    return JsonResponse(category.to_json(), safe = False)
def category_products(request,id):
    category = Category.objects.get(id = id)
    products = category.products.all()
    products_list = [p.to_json() for p in products]
    return JsonResponse(products_list, safe = False)