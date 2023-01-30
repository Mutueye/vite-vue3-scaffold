import { RouteRecordData } from '@/router/types';
import Home from './views/Home.vue';

const routeData: RouteRecordData = {
  base: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
  ],
};

export default routeData;
