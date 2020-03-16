<template>
  <div>
    <div class="hero-wrapper">
      <div class="hero-image">
        <img :src="project.heroImage" alt="hero image" />
      </div>
      <section class="hero">
        <div class="hero-content">
          <h1>{{project.title}}</h1>
          <p>{{project.description}}</p>
        </div>
      </section>
    </div>
    <section class="technologies">
      <div class="technologies-used">
        <h2>Technologies Used</h2>
        <span class="subhead">Project built with</span>
        <div>
          <ul>
            <li v-for="technology in project.technologies" :key="technology">
              <span class="chip">{{technology.technology}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="page-speed">
        <h2>Website Performance Score</h2>
        <span class="subhead">Tested with PageSpeed Insights</span>
        <div class="score-wrapper">
          <div class="score">
            <span>{{project.pageSpeedScore}}</span>
          </div>
        </div>
        <div class="button-wrapper">
          <a href="#" class="button">View Live Site</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import * as config from "../../../config";

export default {
  name: "ProjectHero",
  data: function() {
    return {
      project: {}
    };
  },
  methods: {
    getProject: function(projectId) {
      return axios
        .get(`${config.apiUrl}/projects/${projectId}`)
        .then(response => {
          //handle success
          return response.data.project;
        })
        .catch(function(error) {
          //handle error
          console.log(error);
        });
    },
    getPageSpeed: function() {
      return axios
        .get(
          `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://developers.google.com&key=AIzaSyA8SzpE4etWEq1Hr5tMmEzfXlVpIiIFQQw`
        )
        .then(response => {
          return response.data.loadingExperience.overall_category;
        })
        .catch(function(error) {
          //handle error
          console.log(error);
        });
    }
  },
  created: async function() {
    const projectId = this.$route.params.projectId;
    this.project = await this.getProject(projectId);
    this.project.pageSpeedScore = await this.getPageSpeed();
  }
};
</script>

<style lang="scss" scoped>
// Global variables
@import "../../lib/vars.scss";

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
  padding: $global-gutters 0;
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
  position: relative;
  &:after {
    @media (min-width: $desktop) {
      content: "";
      width: 1px;
      height: 100%;
      background-color: $grey;
      position: absolute;
      top: 0;
      right: -12px;
    }
  }
  h2 {
    margin-bottom: $global-gutters/4;
  }
  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: $global-gutters;
    overflow-y: scroll;
    padding: $global-gutters 0;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: $tablet) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  li {
    // display: flex;
    // justify-content: center;
  }

  .chip {
    background-color: $grey;
    border-radius: 20px;
    color: $white;
    padding: $global-gutters / 3 $global-gutters;
    line-height: 2.5em;

    @media (min-width: $tablet) {
      padding: $global-gutters / 3 $global-gutters * 2;
    }
  }

  .subhead {
    font-family: "Bitter", serif;
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
    border: 1px solid $white;
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

.technologies {
  @media (min-width: $desktop) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: $global-gutters;
  }
}

.button-wrapper {
  @media (min-width: $desktop) {
    display: flex;
    justify-content: center;
  }
}
</style>