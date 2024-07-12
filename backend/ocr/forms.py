import sys
from pathlib import Path # if you haven't already done so
file = Path(__file__).resolve()
parent, root = file.parent, file.parents[1]
sys.path.append(str(root))

# Additionally remove the current file's directory from sys.path
try:
    sys.path.remove(str(parent))
except ValueError: # Already removed
    pass

from django import forms
from  ocr.models import ImageUpload



class ImageUploadForm(forms.ModelForm):
    class Meta:
        model = ImageUpload
        fields = ['file']
