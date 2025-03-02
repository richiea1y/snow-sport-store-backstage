import './assets/main.css'
// import '@/styles/style.scss'; // scss入口檔案
import 'element-plus/dist/index.css';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import SvgIcon from '@/components/SvgIcon.vue'; // 上課時會解釋這個組件幹嘛用的
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 全局註冊 SvgIcon 組件，給自定義 icon 使用
// app.component('SvgIcon', SvgIcon);

app.mount('#app');