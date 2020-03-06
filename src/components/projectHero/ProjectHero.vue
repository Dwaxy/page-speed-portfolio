<template>
  <div>
    <div class="hero-wrapper">
     <div class="hero-image">
      <img src="#" alt="hero image" />
    </div>
    <section class="hero">
      <div class="hero-content">
          <h1>Project Title</h1>
          <p>
            Vaporware DIY chartreuse activated charcoal 8-bit, polaroid lyft
            blue bottle lumbersexual aesthetic. Lo-fi seitan quinoa, yr schlitz
            man braid locavore knausgaard vaporware banh mi. Intelligentsia
            viral heirloom pop-up VHS master cleanse shoreditch. Vice next level
            gochujang fam photo booth pug.
          </p>
      </div>
    </section>
    </div>
</div>
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
$white: #fcfdfd;
$grey: #a0a1a4;
$black: #1a1b1f;
$accent: #8676ea;

// Scoped styles

.hero-wrapper {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0;
  padding: 0;
  z-index: 1;

    @media (min-width: $tablet) {
      height: 212px;
    }

  @media (min-width: $desktop) {
      height: 308px;
    }

  img {
    border: 1px solid white;
  }
}

.hero {
  position: relative;
  z-index: 5;
  padding: $global-gutters;

    p {
    color: $white;
  }

  &-content {
    max-width: 45rem;
    width: auto;

    @media (min-width: $desktop) {
      max-width: calc(75rem / 2);
    }
  }
}
</style>