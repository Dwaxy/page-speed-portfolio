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
    <section class="technologies">
      <div class="technologies-used">
        <h2>Technologies Used</h2>
        <div>
          <ul>
            <li>
              <span>HTML</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="page-speed">
        <h2>Website Performance Score</h2>
        <span class="subhead">Tested with PageSpeed Insights</span>
        <div class="score-wrapper">
          <div class="score">
            <span>70%</span>
          </div>
        </div>
        <a href="#" class="button">View Live Site</a>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from "axios";
// import * as config from "../../../config";

export default {
  name: "ProjectHero",
  data: function() {
    return {
      article: {}
    };
  }
  // methods: {
  //   getProject: function(projectId) {
  //     return axios
  //       .get(`${config.apiUrl}/projects/${projectId}`)
  //       .then(response => {
  //         //handle success
  //         return response.data.article;
  //       })
  //       .catch(function(error) {
  //         //handle error
  //         console.log(error);
  //       });
  //   }
  // },
  // created: async function() {
  //   const projectId = this.$route.params.projectId;
  //   this.project = await this.getProject(projectId);
  // }
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
$green: rgba(57, 190, 108, 1);
$orange: rgba(234, 173, 57, 1);
$red: rgba(255, 101, 74, 1);

// Scoped styles
.score {
  height: 10em;
  width: 10em;
  border-radius: 50%;
  background-color: $green;
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 2em;
    color: $white;
  }
}

.score-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $global-gutters;
}

.technologies-used,
.page-speed {
  padding: $global-gutters;
}

.page-speed {
  h2 {
    margin-bottom: $global-gutters/4;
  }

  .subhead {
    font-family: "Bitter", serif;
  }
}
.hero-wrapper {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.technologies-used {
  ul {
    list-style-type: none;
  }

  span {
    background-color: $grey;
    border-radius: 20px;
    color: $white;
    padding: $global-gutters / 3 $global-gutters;

    &:hover {
      background-color: $accent;
    }
  }
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