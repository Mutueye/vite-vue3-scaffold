import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export const useRouteInfo = () => {
  const router = useRouter();
  const route = useRoute();

  const allRoutes = computed(() => router.options.routes);

  return { allRoutes, router, route };
};
