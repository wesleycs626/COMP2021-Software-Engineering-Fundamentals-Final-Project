from django.db import models

# Create your models here.

class GoodsRelease(models.Model):
    release_form_number = models.CharField(max_length=100)
    date = models.DateField()
    warehouse_location = models.CharField(max_length=100)
    client_name = models.CharField(max_length=100)
    client_address = models.CharField(max_length=255)
    prepared_by = models.CharField(max_length=100)
    transporter_name = models.CharField(max_length=100)
    vehicle_no = models.CharField(max_length=50)
    driver_name = models.CharField(max_length=100)
    checked_by = models.CharField(max_length=100)
    approved_by = models.CharField(max_length=100)
    approval_date = models.DateField()
    remarks = models.TextField(blank=True)

class GoodsItem(models.Model):
    release = models.ForeignKey(GoodsRelease, on_delete=models.CASCADE, related_name="items")
    item_code = models.CharField(max_length=100)
    item_name = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()
    unit = models.CharField(max_length=50)
    location = models.CharField(max_length=100)

from django.db import models

class ApprovalRelease(models.Model):
    release_code = models.CharField(max_length=20)
    release_date = models.DateField()
    approved_by = models.CharField(max_length=100)
    remarks = models.TextField(blank=True)

    def __str__(self):
        return f"{self.release_code} - {self.approved_by}"
