from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_form, name='index'),
    path('index/', views.index, name='index'),
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


