<template>
  <div>
    <AboutMe />
    <ProjectList />
  </div>
</template>

<script>
import AboutMe from "../components/aboutMe/AboutMe.vue";
import ProjectList from "../components/projectList/ProjectList.vue";

export default {
  name: "ProfilePage",
  components: {
    AboutMe,
    ProjectList
  }
};
</script>

<style>
</style>