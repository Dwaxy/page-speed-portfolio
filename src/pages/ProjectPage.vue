<template>
  <div>
    <Header :linkHistory="linkHistory" />
    <ProjectHero />
    <ProjectDetails />
    <Footer />
  </div>
</template>

<script>
import ProjectDetails from "../components/projectDetails/ProjectDetails.vue";
import ProjectHero from "../components/projectHero/ProjectHero.vue";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import getUser from "../services/user-info-provider"

export default {
  name: "ProjectPage",
  components: {
    ProjectDetails,
    ProjectHero,
    Footer,
    Header,
  },
  data: function() {
    return {
      linkHistory: "",
      userData: {}
    };
  },
  created: async function() {
    this.linkHistory = "/users/" + this.$route.params.user;
    this.userData = getUser("5e6f0cbcff91a906e86fcdc6");
  }
};
</script>

<style lang ="scss" scoped>
</style>