
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.views.static import serve


urlpatterns = [
    
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    
    path('api/users/', include('accounts.apiUrls')),
    path('admin/', admin.site.urls),

]


urlpatterns += [re_path(r'^static/(?P<path>.*)$', serve, {"document_root": settings.STATIC_ROOT})]
urlpatterns += [re_path(r'^.*$', TemplateView.as_view(template_name="base.html"))]



# urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)