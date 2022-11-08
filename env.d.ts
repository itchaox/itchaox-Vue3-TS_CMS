/// <reference types="vite/client" />

// 声明 vue 文件
declare module "*.vue" {
  import { DefaultComponent } from "vue";
  const component: DefaultComponent;
  export default component;
}
