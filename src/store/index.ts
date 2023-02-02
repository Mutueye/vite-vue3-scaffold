import { createPinia } from 'pinia';
import persist from 'pinia-plugin-persist';

const pinia = createPinia();
pinia.use(persist);

export default pinia;
