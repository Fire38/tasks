from django.contrib.auth.models import User
from django.db import models


class Rubric(models.Model):
    name = models.CharField(max_length=50, blank=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                             related_name='rubrics', null=False)

    def __str__(self):
        return self.name


class RubricItem(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    done = models.BooleanField(default=False)
    rubric = models.ForeignKey(Rubric, on_delete=models.CASCADE,
                               related_name='rubric_items', null=True)
    user = models.ManyToManyField(User, related_name='wanted_items')
    added_date = models.DateTimeField(auto_now_add=True)
    done_date = models.DateTimeField(null=True, blank=True)
    description = models.CharField(max_length=1000, blank=True, null=True)

    def __str__(self):
        return self.name
