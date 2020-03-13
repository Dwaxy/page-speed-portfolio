<template>
  <section class="about">
    <hr />
    <div class="about-content">
      <div>
        <h1>About Me</h1>
        <span>
          Vaporware DIY chartreuse activated charcoal 8-bit, polaroid lyft blue
          bottle lumbersexual aesthetic. Lo-fi seitan quinoa, yr schlitz man
          braid locavore knausgaard vaporware banh mi.
        </span>
      </div>
      <div>
        <img src="#" alt="profile picture" />
      </div>
    </div>
    <hr />
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  components: {}
};
</script>

<style lang="scss" scoped>
// Global variables
@import "../../lib/vars.scss";

// Scoped styles
.about {
  padding: $global-gutters;
  hr {
    height: 0.031em;
    color: $grey;
    background-color: $grey;
    border-color: $grey;
  }

  img {
    display: none;

    @media screen and (min-width: $desktop) {
      display: block;
      padding-right: $global-gutters;
      width: 104px;
    }
  }

  &-content {
    max-width: 34.375em;
    width: auto;
    margin: 0 auto;
    padding: $global-gutters 0;

    @media screen and (min-width: $desktop) {
      max-width: 54em;
      display: flex;
      flex-direction: row-reverse;
      padding: $global-gutters * 2 0;
    }
  }
}
</style>
