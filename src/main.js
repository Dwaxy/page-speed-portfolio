import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import IndexPage from '../src/pages/IndexPage.vue';
import ProfilePage from '../src/pages/ProfilePage.vue';
import ProjectPage from '../src/pages/ProjectPage.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  path: '/',
  component: IndexPage
}, 
{
  path: '/profile',
  component: ProfilePage
},
{
  path: '/profile/:project',
  component: ProjectPage,
  props: true //this enables route params
},
];

const router = new VueRouter({
  routes,
  mode: 'history'
  })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
