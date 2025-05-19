from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from services.views import ServiceViewSet
from projects.views import ProjectViewSet
from team.views import TeamMemberViewSet
from testimonials.views import TestimonialViewSet
from blog.views import BlogPostViewSet
from contact.views import ContactFormViewSet

router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'team', TeamMemberViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'blog', BlogPostViewSet)
router.register(r'contact', ContactFormViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
