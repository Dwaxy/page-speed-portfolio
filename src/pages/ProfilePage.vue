<template>
  <div>
    <Header :userData="info"/>
    <AboutMe />
    <ProjectList />
    <Footer :userData="info"/>
  </div>
</template>

<script>
import AboutMe from "../components/aboutMe/AboutMe.vue";
import ProjectList from "../components/projectList/ProjectList.vue";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import getUserDetails from "../services/user-info-provider"
  
export default {
  name: "ProfilePage",
  
  components: {
    AboutMe,
    ProjectList,
    Header,
    Footer,
  },
  data: function() {
    return {
      info: {}
    };
  },
  created: async function() {
    this.info = await getUserDetails.getUser(this.$route.params.user);
  }
};
</script>

<style>
</style>