from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from PIL import Image
import pytesseract
import os
import tempfile
import fitz  # PyMuPDF
from ocr.forms import ImageUploadForm
import logging
from rest_framework import status
from rest_framework.decorators import api_view

# Set up logging
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.DEBUG)

@api_view(['POST'])
def upload_image(request):
    if request.method == 'POST':
        form = ImageUploadForm(request.POST, request.FILES)
        if form.is_valid():
            file = request.FILES['file']
            file_extension = file.name.split('.')[-1].lower()

            try:
                if file_extension in ['jpg', 'jpeg', 'png', 'gif']:  # Check if file is an image
                    image_path = handle_image(file)
                    text = perform_ocr(image_path)
                    return JsonResponse({'result': f"{text}"}, status=status.HTTP_200_OK)
                elif file_extension == 'pdf':  # Check if file is a PDF
                    pdf_image_paths = handle_pdf(file)
                    texts = ""
                    for page_image_path in pdf_image_paths:
                        text = perform_ocr(page_image_path)
                        texts += text
                    return JsonResponse({'result': f"{texts}"}, status=status.HTTP_200_OK)
                else:
                    logger.error("Unsupported file format")
                    return JsonResponse({"error": "Unsupported file format. Please upload an image (JPEG, PNG, GIF) or a PDF."}, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                logger.error(f"Error processing file: {e}")
                return JsonResponse({"error": f"An error occurred: {e}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return JsonResponse({"error": "Invalid form data"}, status=status.HTTP_400_BAD_REQUEST)
    else:
        pass

def handle_image(image_file):
    try:
        image_path = default_storage.save('tmp/' + image_file.name, ContentFile(image_file.read()))
        return default_storage.path(image_path)
    except Exception as e:
        logger.error(f"Error handling image: {e}")
        raise e

def handle_pdf(pdf_file):
    try:
        temp_dir = tempfile.mkdtemp()
        pdf_path = default_storage.save('tmp/' + pdf_file.name, ContentFile(pdf_file.read()))
        pdf_full_path = default_storage.path(pdf_path)

        pdf_image_paths = []

        pdf_document = fitz.open(pdf_full_path)

        for i, page in enumerate(pdf_document):
            try:
                # Adjust DPI for better image quality
                zoom = 2.0  # Increase zoom factor for higher DPI
                mat = fitz.Matrix(zoom, zoom)
                page_image = page.get_pixmap(matrix=mat)

                page_image_path = os.path.join(temp_dir, f"page_{i + 1}.png")
                page_image.save(page_image_path)
                pdf_image_paths.append(page_image_path)
            except Exception as e:
                logger.error(f"Error processing page {i + 1}: {e}")

        pdf_document.close()
        return pdf_image_paths
    except Exception as e:
        logger.error(f"Error handling PDF: {e}")
        raise e

def perform_ocr(image_path):
    try:
        pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'  # Adjust this path if necessary
        text = pytesseract.image_to_string(Image.open(image_path))
        return text
    except Exception as e:
        logger.error(f"OCR error: {e}")
        return f"An error occurred during OCR processing: {e}"
