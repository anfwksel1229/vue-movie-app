import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
import loadImage from './plugins/loadImage.js'


createApp(App)
  .use(router) // .use > 프로젝트내에서 특정한 플러그인을 연결할때쓰는 메소드
  .use(store)
  .use(loadImage)
  .mount('#app')