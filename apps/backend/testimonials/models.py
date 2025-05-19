from django.db import models

class Testimonial(models.Model):
    author = models.CharField(max_length=255)
    content = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.author
