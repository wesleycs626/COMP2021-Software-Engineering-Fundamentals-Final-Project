"""
URL configuration for web_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from hello import views  

urlpatterns = [
    path('', views.home, name='index'),  
    path('client-registration/', views.client_registration, name='client_registration'),
    path('item-registration/', views.item_registration, name='item_registration'),
    path('employee-registration/', views.employee_registration, name='employee_registration'),
    path('login/', views.login_form, name='login'),
    path('user-profile/', views.user_profile, name='user_profile'),
    path('goods-receipt/', views.goods_receipt, name='goods_receipt'),
    path('approval-goods-receipt/', views.approval_goods_receipt, name='approval_goods_receipt'),
    path('stocktaking/', views.stock_taking, name='stock_taking'),
    path('goods-release/', views.goods_release, name='goods_release'),
    path('approval-goods-release/', views.approval_goods_release, name='approval_goods_release'),
]

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),        
    path('', include('hello.urls')),        
]
