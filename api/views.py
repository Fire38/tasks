from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Rubric, RubricItem
from .serializers import RubricSerializer, RubricItemSerializer
from django.utils.decorators import method_decorator


class GetRubric(APIView):
    def get(self, request):
        rubrics = Rubric.objects.filter(user=request.user)
        serializer = RubricSerializer(rubrics, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        user = request.user
        rubric = request.data
        obj, created = Rubric.objects.get_or_create(name=rubric['data']['rubricName'],
                                                    user=user
                                                    )
        return Response(status=status.HTTP_200_OK)


class AddRubric(APIView):
    def post(self, request):
        user = request.user
        rubric = request.data
        print(rubric)
        obj, created = Rubric.objects.get_or_create(name=rubric['rubricName'],
                                                    user=user
                                                    )
        return Response(status=status.HTTP_200_OK)


#@method_decorator(csrf_exempt, name='post')
class GetRubricItem(APIView):
    def get(self, request, task_type='all', filter_id=''):
        print(task_type, type(filter_id), filter_id)
        if filter_id != 'all' and filter_id != '':
            rubric = Rubric.objects.get(id=int(filter_id))
        if task_type == 'want':
            if filter_id == 'all':
                items = RubricItem.objects.filter(user=request.user, done=False)
            else:
                items = RubricItem.objects.filter(user=request.user, done=False, rubric=rubric)
        elif task_type == 'done':
            if filter_id == 'all':
                items = RubricItem.objects.filter(user=request.user, done=True)
            else:
                items = RubricItem.objects.filter(user=request.user, done=True, rubric=rubric)
        else:
            items = RubricItem.objects.filter(user=request.user)
        serializer = RubricItemSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AddRubricItem(APIView):

    def post(self, request):
        print(request.data)
        user = request.user
        rubric_item = request.data
        rubric = Rubric.objects.get(id=rubric_item['data']['selectedRubric'])
        rubric_item = RubricItem(name=rubric_item['data']['title'],
                                 description=rubric_item['data']['description'],
                                 rubric=rubric
                                 )
        rubric_item.save()
        rubric_item.user.add(user)

        print(rubric_item)
        print('Прилетел post')
        return Response(status=status.HTTP_200_OK)

    def put(self, request):
        print(request.data, request.user)
        task_id = request.data['data']['id']
        task_status = request.data['data']['done']
        task = RubricItem.objects.get(user=request.user, id=task_id)
        task.done = task_status
        task.save()


        return Response(status=status.HTTP_200_OK)


