from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Rubric, Rubric_item
from .serializers import RubricSerializer, RubricItemSerializer


@csrf_exempt
def rubric_list(request):
    if request.method == 'GET':
        rubrics = Rubric.objects.all()
        serializer = RubricSerializer(rubrics, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = RubricSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def rubric_detail(request, pk):
    try:
        rubric = Rubric.objects.get(pk=pk)
    except Rubric.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = RubricSerializer(rubric)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = RubricSerializer(rubric, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        rubric.delete()
        return HttpResponse(status=204)

