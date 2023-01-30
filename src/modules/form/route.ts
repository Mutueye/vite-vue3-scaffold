import { RouteRecordData } from '@/router/types';
import FormExample from './views/FormExample.vue';
import FormInteractive from './views/FormInteractive.vue';

const routeData: RouteRecordData = {
  admin: [
    {
      path: '/form',
      name: 'form',
      redirect: '/formexample',
      meta: {
        title: '表单',
        menuConfig: {
          order: 2,
          iconClass: 'i-mdi-form-textbox-password',
        },
      },
      children: [
        {
          path: '/formexample',
          name: 'formexample',
          component: FormExample,
          meta: {
            title: '常用字段验证规则(讨论稿)',
            menuConfig: {
              order: 1,
            },
          },
        },
        {
          path: '/forminteractive',
          name: 'forminteractive',
          component: FormInteractive,
          meta: {
            title: '表单交互细节范例(讨论稿)',
            menuConfig: {
              order: 2,
            },
          },
        },
      ],
    },
  ],
};

export default routeData;
