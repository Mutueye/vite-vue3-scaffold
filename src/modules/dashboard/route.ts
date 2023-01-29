import { RouteRecordData } from '@/router/layoutRouteConfig';
import Dashboard from './views/Dashboard.vue';

const routeData: RouteRecordData = {
  admin: [
    {
      path: 'dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
};

export default routeData;
