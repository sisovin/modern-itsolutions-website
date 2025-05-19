from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=50)
    team_members = models.ManyToManyField('team.TeamMember')

    def __str__(self):
        return self.title
