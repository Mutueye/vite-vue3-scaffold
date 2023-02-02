import { RouteRecordData } from '@/router/types';
import ThemeEditor from './views/ThemeEditor.vue';

const routeData: RouteRecordData = {
  admin: [
    {
      path: '/themeeditor',
      name: 'themeeditor',
      component: ThemeEditor,
      meta: {
        title: '主题编辑器',
        menuConfig: {
          order: 3,
          iconClass: 'i-mdi-clover',
        },
      },
    },
  ],
};

export default routeData;
