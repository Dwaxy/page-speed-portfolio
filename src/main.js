import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEdit, faTrashAlt, faArrowLeft, faArrowRight, faEnvelope, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import IndexPage from '../src/pages/IndexPage.vue';
import ProfilePage from '../src/pages/ProfilePage.vue';
import ProjectPage from '../src/pages/ProjectPage.vue';

Vue.config.productionTip = false;

//import required font awesome icons and add them to the library
library.add(faEdit, faTrashAlt, faArrowLeft, faArrowRight, faGithub, faLinkedin, faEnvelope, faChevronLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);

//vue router
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  path: '/',
  component: IndexPage,
  name: "home"
}, 
{
  path: '/profile',
  component: ProfilePage,
  name: "profile"
},
{
  path: '/profile/:project',
  component: ProjectPage,
  props: true, //this enables route params
  name: "project"
},
];

const router = new VueRouter({
  routes,
  mode: 'history'
  })

new Vue({
  render: h => h(App),
  router
}).$mount('#app');

