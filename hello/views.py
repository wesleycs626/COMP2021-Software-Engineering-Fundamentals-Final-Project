# from django.shortcuts import render

# # Create your views here.

from django.shortcuts import render

def index(request):
    return render(request, "hello/index.html", {
        "username": request.user.username if request.user.is_authenticated else "Guest"
    })

# from django.shortcuts import render, redirect
# from .forms import GoodsReleaseForm
# from .models import GoodsItem

# def approval_release_view(request):
#     if request.method == 'POST':
#         form = GoodsReleaseForm(request.POST)
#         if form.is_valid():
#             release = form.save()
#             # Logic to save GoodsItem can be added here
#             return redirect('dashboard')  # Change to your desired URL
#     else:
#         form = GoodsReleaseForm()

#     goods_items = GoodsItem.objects.all()  # or filtered by user/session
#     return render(request, 'warehouse/approval_release_form.html', {
#         'form': form,
#         'goods_items': goods_items
#     })

from django.shortcuts import render

def index(request):
    return render(request, 'hello/index.html')

def client_registration(request):
    return render(request, 'hello/1client_registrationForm.html')

def item_registration(request):
    return render(request, 'hello/2item_registrationForm.html')

def employee_registration(request):
    return render(request, 'hello/3employee_registrationForm.html')

def login_form(request):
    return render(request, 'hello/4user_loginForm.html')

def user_profile(request):
    return render(request, 'hello/5user_profileForm.html')

def goods_receipt(request):
    return render(request, 'hello/6goods_receiptForm.html')

def approval_goods_receipt(request):
    return render(request, 'hello/7approval_goodsreceiptsForm.html')

def stock_taking(request):
    return render(request, 'hello/8stocktakingForm.html')

def goods_release(request):
    return render(request, 'hello/9goods_releaseForm.html')

def approval_goods_release(request):
    return render(request, 'hello/10approval_releaseForm.html')

from django.shortcuts import render

def home(request):
    return render(request, 'hello/index.html') 

from django.shortcuts import render, redirect
from django.contrib import messages

# def login_form(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')

#         # Cek kredensial
#         if username == 'admin1' and password == '123456':
#             request.session['user_logged_in'] = True  # Simpan status login
#             return redirect('user_profile')  # Ganti ke halaman tujuan kamu
#         else:
#             messages.error(request, 'Username or password wrong.')
#             return render(request, 'hello/4user_loginForm.html')  # Tetap di form login

#     return render(request, 'hello/4user_loginForm.html')

# from django.shortcuts import render, redirect
# from django.contrib import messages

# def login_form(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')

#         if username == 'admin1' and password == '123456':
#             request.session['user_logged_in'] = True
#             request.session['username'] = username
#             return redirect('user_profile')  # Redirect ke halaman dashboard / profile
#         else:
#             messages.error(request, 'Username or password wrong.')

#     return render(request, 'hello/4user_loginForm.html')

# from django.shortcuts import render, redirect
# from .forms import LoginForm

# def login_view(request):
#     if request.method == 'POST':
#         form = LoginForm(request.POST)
#         if form.is_valid():
#             username = form.cleaned_data['username']
#             password = form.cleaned_data['password']
#             if username == "admin1" and password == "123456":
#                 # Simulasi login
#                 return redirect('index')
#             else:
#                 return render(request, 'hello/login.html', {
#                     'form': form,
#                     'error': 'Invalid username or password.'
#                 })
#     else:
#         form = LoginForm()
#     return render(request, 'hello/login.html', {'form': form})
    
# def index_view(request):
#     return render(request, 'hello/index.html')

from django.shortcuts import render, redirect
from .forms import LoginForm

def login_view(request):
    form = LoginForm()

    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            if username == "admin1" and password == "123456":
                request.session["username"] = username
                return redirect("index.html")
            else:
                return render(request, "hello/login.html", {
                    "form": form,
                    "error": "Invalid username or password."
                })

    return render(request, "hello/login.html", {"form": form})




