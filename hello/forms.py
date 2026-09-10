# from django import forms
# from .models import GoodsRelease

# class GoodsReleaseForm(forms.ModelForm):
#     class Meta:
#         model = GoodsRelease
#         fields = [
#             'release_form_number', 'date', 'warehouse_location', 'client_name',
#             'client_address', 'prepared_by', 'transporter_name', 'vehicle_no',
#             'driver_name', 'checked_by', 'approved_by', 'approval_date', 'remarks'
#         ]

from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(
        label="Username",
        max_length=100,
        widget=forms.TextInput(attrs={'class': 'input-text'})
    )
    password = forms.CharField(
        label="Password",
        widget=forms.PasswordInput(attrs={'class': 'input-text'})
    )

