from rest_framework.routers import DefaultRouter

from .views import BlogModelViewSet

router = DefaultRouter()

router.register('', BlogModelViewSet, basename='blog')


urlpatterns = router.urls