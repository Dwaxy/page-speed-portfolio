<template>
  <div>
    <section class="project-details">
      <div class="project-content">
        <h2>{{project.heading}}</h2>
        <p>{{project.copy}}</p>
      </div>
      <div class="project-image">
        <img :src="project.firstImage" alt="full width image" />
      </div>
    </section>
    <section class="project-goals">
      <div class="goals-inner">
        <div>
          <h2>Project Goals</h2>
          <div class="goals-list">
            <ol>
              <li v-for="goal in project.goals" :key="goal.goal">{{goal.goal}}</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="project-image">
        <img :src="project.secondImage" alt="project image" />
      </div>
    </section>
    <section class="project-pains">
      <div class="pains-inner">
        <div>
          <h2>Project Pain Points</h2>
          <div class="pains-list">
            <ol>
              <li v-for="pain in project.pains" :key="pain.pain">{{pain.pain}}</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="project-image">
        <img :src="project.thirdImage" alt="project image" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import * as config from "../../../config";

export default {
  name: "ProjectPage",
  data: function() {
    return {
      project: {
        goals: [],
        pains: []
      }
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
    }
  },
  created: async function() {
    const projectId = this.$route.params.projectId;
    this.project = await this.getProject(projectId);
  }
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
  height: 100%;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
}
</style>