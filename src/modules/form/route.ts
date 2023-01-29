import { RouteRecordData } from '@/router/layoutRouteConfig';
import FormExample from './views/FormExample.vue';
import FormInteractive from './views/FormInteractive.vue';

const routeData: RouteRecordData = {
  base: [
    {
      path: '/formexample',
      name: 'formexample',
      component: FormExample,
    },
    {
      path: '/forminteractive',
      name: 'forminteractive',
      component: FormInteractive,
    },
  ],
};

export default routeData;
