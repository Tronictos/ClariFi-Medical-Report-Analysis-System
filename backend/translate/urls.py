# translate/urls.py

from django.urls import path
from translate.views import TranslateView1
from translate.views import TranslateView2

urlpatterns = [
    path('si_to_en/', TranslateView1.as_view(), name='translate_si_to_en'),
    path('en_to_si/', TranslateView2.as_view(), name='translate_en_to_si')
]
