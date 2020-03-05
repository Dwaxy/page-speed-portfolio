<template>
  <section class="hero">
    <img src="#" alt="hero image" />
    <div class="hero-description"></div>
  </section>
</template>

<script>
export default {
  name: "ProjectHero"
};
</script>

<style lang="scss" scoped>
// Global variables
$global-gutters: 1.5rem;
$tablet: 700px;
$desktop: 1440px;

// Scoped styles

#app {
  position: relative;
}

.hero {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  background-color: red;
  margin: 0;
  padding: 0;
  z-index: 1;

  img {
    border: 1px solid white;
  }
}
</style>