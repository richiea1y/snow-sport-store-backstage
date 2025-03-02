import './assets/main.css'
// import '@/styles/style.scss'; // scss入口檔案
import 'element-plus/dist/index.css';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import SvgIcon from '@/components/SvgIcon.vue'; // 上課時會解釋這個組件幹嘛用的
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

/**
 * App 通常指的是 Vue 應用程式的「根元件」（Root Component），也就是最上層的元件。
  •	它一般定義在一個名為 App.vue 的檔案中。
  •	所有的其他元件都會被包裹在這個根元件裡。
 */
import App from './App.vue';
import router from './router';

// createApp：用來建立 Vue 應用程式實例。
// App：就是你的根元件，應用程式的起始點。
const app = createApp(App);

app.use(createPinia());
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 全局註冊 SvgIcon 組件，給自定義 icon 使用
// app.component('SvgIcon', SvgIcon);

app.mount('#app');