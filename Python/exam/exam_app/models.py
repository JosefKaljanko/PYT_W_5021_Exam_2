from django.db import models

class User(models.Model):
    username = models.CharField(max_length=64, unique=True)
    password = models.CharField(max_length=64)
    last_update = models.DateField(auto_now=True)

    def __str__(self):
        return self.username

class Settings(models.Model):
    setting_key = models.CharField(max_length=64)
    value = models.CharField(max_length=64)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='settings')

    def __str__(self):
        return f"{self.setting_key} - {self.value}"