<template>
  <div>
    <ProjectHero />
    <ProjectDetails />
  </div>
</template>

<script>
import ProjectDetails from "../components/projectDetails/ProjectDetails.vue";
import ProjectHero from "../components/projectHero/ProjectHero.vue";
export default {
  name: "ProjectPage",
  components: {
    ProjectDetails,
    ProjectHero
  }
};
</script>

<style lang ="scss">
</style>