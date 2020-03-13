<template>
  <div>
    <Header/>
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

export default {
  name: "ProjectPage",
  components: {
    ProjectDetails,
    ProjectHero,
    Footer,
    Header,
  }
};
</script>

<style lang ="scss" scoped>
</style>