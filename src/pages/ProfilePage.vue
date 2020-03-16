<template>
  <div>
    <Header userData="userData"/>
    <AboutMe />
    <ProjectList />
    <Footer />
  </div>
</template>

<script>
import AboutMe from "../components/aboutMe/AboutMe.vue";
import ProjectList from "../components/projectList/ProjectList.vue";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default {
  name: "ProfilePage",
  props: ["userData"],
  components: {
    AboutMe,
    ProjectList,
    Header,
    Footer,
  }
};
</script>

<style>
</style>