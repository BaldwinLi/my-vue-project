
import Router from 'vue-router';
// import * as Hello from '@/components/Hello';
import * as Hello from '@/components/homePage';

window['Vue'].use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
