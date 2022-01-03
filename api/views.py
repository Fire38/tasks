from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Rubric, RubricItem
from .serializers import RubricSerializer, RubricItemSerializer


class GetRubric(APIView):
    def get(self, request):
        rubrics = Rubric.objects.filter(user=request.user)
        serializer = RubricSerializer(rubrics, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AddRubric(APIView):
    def post(self, request):
        user = request.user
        rubric = request.data
        obj, created = Rubric.objects.get_or_create(name=rubric['rubricName'],
                                                    user=user
                                                    )
        if created:
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_501_NOT_IMPLEMENTED)


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
        user = request.user
        rubric_item = request.data
        rubric = Rubric.objects.get(id=rubric_item['data']['selectedRubric'])
        if RubricItem.objects.filter(
            name=rubric_item['data']['title'],
            description=rubric_item['data']['description'],
            rubric=rubric,
            user=user
        ).exists():
            return Response(status=status.HTTP_501_NOT_IMPLEMENTED)
        else:
            rubric_item = RubricItem(name=rubric_item['data']['title'],
                                       description=rubric_item['data']['description'],
                                       rubric=rubric,
                                     )
            rubric_item.save()
            rubric_item.user.add(user)
            return Response(status=status.HTTP_201_CREATED)

    def put(self, request):
        task_id = request.data['data']['id']
        task_status = request.data['data']['done']
        task = RubricItem.objects.get(user=request.user, id=task_id)
        task.done = task_status
        task.save()
        return Response(status=status.HTTP_200_OK)
