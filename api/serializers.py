from rest_framework import serializers
from .models import Rubric, RubricItem


class RubricSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rubric
        fields = '__all__'


class RubricItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = RubricItem
        fields = '__all__'
