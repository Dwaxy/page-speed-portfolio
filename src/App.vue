<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "App",
}
</script>

<style lang="scss">
@import "./lib/vars";
// Global styles
html, body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  #app {
    background-color: $black;
    color: $grey;
    height: 100vh;
    }

    section {
      max-width: 45rem;
      width: auto;
      margin: 0 auto;
      padding: $global-gutters 0;

      @media screen and (min-width: $desktop) {
        max-width: 75rem;
        padding: $global-gutters * 2 0;
      }
    }

    h1,
    h2 {
      font-family: "Open Sans", serif;
      font-size: 1.125rem;
      color: $white;
      margin-bottom: $global-gutters;

      @media screen and (min-width: $tablet) {
        font-size: 1.325rem;
      }

      @media screen and (min-width: $desktop) {
        font-size: 1.625rem;
      }
    }

    p,
    span,
    ol {
      font-family: "Source Sans Pro", serif;
      font-size: 0.813rem;
      line-height: 1.813;

      @media screen and (min-width: $tablet) {
        font-size: 1.013rem;
      }

      @media screen and (min-width: $desktop) {
        font-size: 1.125rem;
      }
    }

    p {
      margin-bottom: $global-gutters;
    }

    a:not(.footer-link, .info-link) {
      display: inline-block;
      width: 100%;
      padding: 0.6em 0;
      border-radius: 5px;
      color: $white;
      background-color: $accent;
      font-family: "Open Sans", serif;
      font-size: 0.813rem;
      font-weight: 600;
      letter-spacing: 0.625;
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
      margin-top: $global-gutters;

      @media screen and (min-width: $tablet) {
        font-size: 1.013rem;
      }

      @media screen and (min-width: $desktop) {
        width: 10em;
        font-size: 1.125rem;
      }
    }

</style>
