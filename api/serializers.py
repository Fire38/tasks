from rest_framework import serializers
from .models import Rubric, Rubric_item


class RubricSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rubric
        fields = '__all__'

class RubricItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rubric_item
        fields = '__all__'
