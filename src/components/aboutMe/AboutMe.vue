<template>
  <section class="about-me">
    <hr />
    <div class="content">
      <div>
        <h1>About Me</h1>
        <span>
          Vaporware DIY chartreuse activated charcoal 8-bit, polaroid lyft blue
          bottle lumbersexual aesthetic. Lo-fi seitan quinoa, yr schlitz man
          braid locavore knausgaard vaporware banh mi.
        </span>
      </div>
      <div>
        <img src alt="profile picture" />
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
$global-gutters: 1.5rem;
$grey: #a0a1a4;
$tablet: 700px;
$desktop: 1440px;

img {
  display: none;

  @media screen and (min-width: $desktop) {
    display: block;
    padding-right: $global-gutters;
    width: 104px;
  }
}

hr {
  border: none;
  height: 0.031em;
  color: $grey;
  background-color: $grey;
}

.content {
  max-width: 34.375em;
  width: auto;
  margin: 0 auto;
  padding: $global-gutters 0;

  @media screen and (min-width: $desktop) {
    max-width: 59.375em;
    display: flex;
    flex-direction: row-reverse;
    padding: $global-gutters * 2 0;
  }
}
</style>
