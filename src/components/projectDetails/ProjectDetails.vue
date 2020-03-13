<template>
  <div>
    <section class="project-details">
      <div class="project-content">
        <h2>Second Heading</h2>
        <p>
          Vaporware DIY chartreuse activated charcoal 8-bit, polaroid lyft
          blue bottle lumbersexual aesthetic. Lo-fi seitan quinoa, yr schlitz
          man braid locavore knausgaard vaporware banh mi. Intelligentsia
          viral heirloom pop-up VHS master cleanse shoreditch. Vice next level
          gochujang fam photo booth pug.
        </p>
      </div>
      <div class="project-image">
        <img src="#" alt="full width image" />
      </div>
    </section>
    <section class="project-goals">
      <div class="goals-inner">
        <div>
          <h2>Project Goals</h2>
          <p>Brief description of product goals</p>
          <div class="goals-list">
            <ol>
              <li>Goal</li>
              <li>Goal</li>
              <li>Goal</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="project-image">
        <img src="#" alt="project image" />
      </div>
    </section>
    <section class="project-pains">
      <div class="pains-inner">
        <div>
          <h2>Project Pain Points</h2>
          <p>Brief description of product pain points</p>
          <div class="pains-list">
            <ol>
              <li>Point</li>
              <li>Point</li>
              <li>Point</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="project-image">
        <img src="#" alt="project image" />
      </div>
    </section>
  </div>
</template>

<script>
// import axios from "axios";
// import * as config from "../../../config";

export default {
  name: "ProjectPage",
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
@import "../../lib/vars.scss";

// Scoped styles

section {
  padding: $global-gutters;
}
ol {
  list-style: decimal inside;
}

.project-goals,
.project-pains {
  @media screen and (min-width: $tablet) {
    display: flex;
    flex-direction: row-reverse;
  }
}

.project-pains {
  flex-direction: row;
}

.goals-inner,
.pains-inner {
  @media screen and (min-width: $tablet) {
    margin-left: $global-gutters;
    display: flex;
    width: 40%;
  }
}

.goals-inner {
  @media screen and (min-width: $tablet) {
    margin-left: $global-gutters;
  }
}

.pains-inner {
  @media screen and (min-width: $tablet) {
    margin-left: 0;
    margin-right: $global-gutters;
  }
}

.goals-list,
.pains-list {
  margin-bottom: $global-gutters;

  @media screen and (min-width: $tablet) {
    margin-bottom: 0;
  }
}

.project-image {
  width: 100%;
  height: auto;
  border: 1px solid white;
}
</style>