from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from apps.user.models import User
@admin.register(User)
class UserAdmin(BaseUserAdmin):
    fieldsets =(
        (None,{'fields':('username', 'password')}),
        ('Personal info',{'fields':('first_name','last_name','email','tipo_documento','numero_documento','rol')}),
        ('Permissions',{'fields':('is_active','is_staff','is_superuser','groups','user_permissions')}),
        ('Important dates',{'fields':('last_login','date_joined')}),
    )
