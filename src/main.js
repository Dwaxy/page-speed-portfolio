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
import ProjectEditorPage from '../src/pages/ProjectEditorPage.vue';
import AccountPage from '../src/pages/AccoutPage.vue';
import LogIn from '../src/pages/LogIn'

Vue.config.productionTip = false;

//import required font awesome icons and add them to the library
library.add(faEdit, faTrashAlt, faArrowLeft, faArrowRight, faGithub, faLinkedin, faEnvelope, faChevronLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);

//vue router
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path: '/login',
    component: LogIn,
    name: 'login'
  },
  {
    path: '/signup',
    component: AccountPage,
    name: 'signup'
  },
  {
    path: '/',
    component: IndexPage,
    name: 'home'
  },
  {
    path: '/profile/:user',
    component: ProfilePage,
    name: 'profile',
    props: true
  },
  {
    path: '/profile/:project',
    component: ProjectPage,
    props: true, //this enables route params
    name: 'project'
  },
  {
    path: '/admin/project-editor',
    component: ProjectEditorPage,
    props: true, //this enables route params
    name: 'project-editor'
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
