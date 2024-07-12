from rest_framework import serializers

class TranslationSerializer(serializers.Serializer):
    text = serializers.CharField(max_length=255)
    translation = serializers.CharField(max_length=255, read_only=True)
