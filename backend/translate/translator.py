# translate/translator.py

import requests

class Translator:
    def __init__(self):
        self.url = "https://api.mymemory.translated.net/get"

    def translate_si_to_en(self, text, source_lang='si', target_lang='en'):
        params = {
            "q": text,
            "langpair": f"{source_lang}|{target_lang}"
        }
        response = requests.get(self.url, params=params)
        result = response.json()
        return result['responseData']['translatedText']
    
    def translate_en_to_si(self, text, source_lang='en', target_lang='si'):
        params = {
            "q": text,
            "langpair": f"{source_lang}|{target_lang}"
        }
        response = requests.get(self.url, params=params)
        result = response.json()
        return result['responseData']['translatedText']
