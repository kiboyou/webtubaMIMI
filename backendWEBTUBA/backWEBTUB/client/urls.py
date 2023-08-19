from rest_framework.routers import DefaultRouter

from .views import ClientModelViewSet, CNModelViewSet, RVModelViewSet

router = DefaultRouter()

router.register('client', ClientModelViewSet, basename='client')
router.register('contactez_nous', CNModelViewSet, basename='contactez_nous')
router.register('rendez_vous', RVModelViewSet, basename='rendez_vous')


urlpatterns = router.urls