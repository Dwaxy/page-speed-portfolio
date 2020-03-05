<template>
  <div id="app">
    <Header v-if="!'home'.includes($route.name)"/>
    <router-view></router-view>
    <Footer v-if="!'home'.includes($route.name)"/>
  </div>
</template>
<script>
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">

// Global variables
$global-gutters: 1.5rem;
$white: #fcfdfd;
$grey: #a0a1a4;
$black: #1a1b1f;
$accent: #8676ea;
$tablet: 700px;
$desktop: 1440px;

// Global styles
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  #app {
    padding: $global-gutters;
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

    a {
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
