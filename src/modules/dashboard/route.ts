import { RouteRecordData } from '@/router/types';
import Dashboard from './views/Dashboard.vue';

const routeData: RouteRecordData = {
  admin: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title: '首页',
        menuConfig: {
          order: 1,
          iconClass: 'i-mdi-collage',
        },
      },
    },
  ],
};

export default routeData;
