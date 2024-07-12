from django.shortcuts import render

# Create your views here.
# translate/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .translator import Translator

class TranslateView1(APIView):
    def get(self, request):
        text = request.GET.get('text', '')
        if not text:
            return JsonResponse({'error': 'No text provided'}, status=status.HTTP_400_BAD_REQUEST)

        translator = Translator()
        translation = translator.translate_si_to_en(text)
        return JsonResponse({'translation': translation}, status=status.HTTP_200_OK)
    
class TranslateView2(APIView):
    def get(self, request):
        text = request.GET.get('text', '')
        if not text:
            return JsonResponse({'error': 'No text provided'}, status=status.HTTP_400_BAD_REQUEST)

        translator = Translator()
        translation = translator.translate_en_to_si(text)
        return JsonResponse({'translation': translation}, status=status.HTTP_200_OK)

