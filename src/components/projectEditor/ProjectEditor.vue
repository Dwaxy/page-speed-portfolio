<template>
  <section>
    <h1 v-if="!isEdit">New Project</h1>
    <h1 v-if="isEdit">Edit Project</h1>
    <form @submit="checkForm">
      <div class="project-title wrapper">
        <label for="title">Title</label>
        <input type="text" placeholder="Title" v-model="project.title" />
      </div>
      <div class="project-description wrapper">
        <label for="description">Description</label>
        <textarea
          name="description"
          placeholder="Description"
          v-model="project.description"
          rows="8"
        />
      </div>
      <div class="project-hero wrapper">
        <label for="hero">Hero Image</label>
        <input type="text" placeholder="Hero Image URL" v-model="project.hero" />
      </div>
      <div class="project-technologies wrapper">
        <label for="technologies">Technologies Used</label>
        <div class="desktop-wrapper">
          <input
            type="text"
            placeholder="Technology"
            v-model="project.technologies"
            class="technology"
          />
          <input
            type="text"
            placeholder="Technology"
            v-model="project.technologies"
            class="technology"
          />
        </div>
        <div class="desktop-wrapper">
          <input
            type="text"
            placeholder="Technology"
            v-model="project.technologies"
            class="technology"
          />
          <input
            type="text"
            placeholder="Technology"
            v-model="project.technologies"
            class="technology"
          />
        </div>
        <div class="desktop-wrapper">
          <input
            type="text"
            placeholder="Technology"
            v-model="project.technologies"
            class="technology"
          />
          <input
            type="text"
            placeholder="Technology"
            v-model="project.technologies"
            class="technology"
          />
        </div>
      </div>
      <div class="project-link wrapper">
        <label for="link">Link</label>
        <input type="text" placeholder="Link" v-model="project.link" />
      </div>
      <div class="project-heading wrapper">
        <label for="heading">Heading</label>
        <input type="text" placeholder="Heading" v-model="project.heading" />
      </div>
      <div class="project-copy wrapper">
        <label for="copy">Body Copy</label>
        <textarea name="copy" placeholder="Body Copy" v-model="project.copy" rows="8" />
      </div>
      <div class="project-first-image wrapper">
        <label for="first-image">First Image</label>
        <input type="text" placeholder="First Image" v-model="project.firstImage" />
      </div>
      <div class="project-second-image wrapper">
        <label for="second-image">Second Image</label>
        <input type="text" placeholder="Second Image" v-model="project.secondImage" />
      </div>
      <div class="project-third-image wrapper">
        <label for="third-image">Third Image</label>
        <input type="text" placeholder="Third Image" v-model="project.thirdImage" />
      </div>
      <div class="project-goals wrapper">
        <label for="goals">Goals</label>
        <input type="text" placeholder="Goal One" v-model="project.goals" class="goal" />
        <input type="text" placeholder="Goal Two" v-model="project.goals" class="goal" />
        <input type="text" placeholder="Goal Three" v-model="project.goals" class="goal" />
      </div>
      <div class="project-pains wrapper">
        <label for="pains">Pain Points</label>
        <input type="text" placeholder="Point One" v-model="project.pains" class="pain" />
        <input type="text" placeholder="Point Two" v-model="project.pains" class="pain" />
        <input type="text" placeholder="Point Three" v-model="project.pains" class="pain" />
      </div>
      <div class="submit-wrapper">
        <input type="submit" class="button" value="Create Project" />
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import * as config from "../../../config";

export default {
  name: "ProjectEditor",
  data: function() {
    return {
      project: {},
      errors: [],
      isEdit: false
    };
  },
  methods: {
    checkForm: function(event) {
      event.preventDefault();
      this.createProject();
    },
    createProject: function() {
      return axios
        .post(`${config.apiUrl}/projects`, this.project)
        .then(() => {
          // handle success
          this.$router.push({ path: "/" });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  },
  created: async function() {
    const projectId = this.$route.params.projectId;
    if (projectId) {
      this.isEdit = true;
      this.project = await this.getProjectById(projectId);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../lib/vars.scss";

section {
  max-width: 45rem;
  width: auto;
  margin: 0 auto;
  padding: $global-gutters 0;

  @media screen and (min-width: $desktop) {
    max-width: 95rem;
    padding: $global-gutters * 2 0;
  }
}

input,
textarea {
  padding: $global-gutters / 3;
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

input.button {
  border: none;
}

input.pain:not(:last-of-type),
input.goal:not(:last-of-type),
input.technology {
  margin-bottom: $global-gutters;
}

input.technology {
  &:nth-of-type(odd) {
    @media screen and (min-width: $desktop) {
      margin-right: $global-gutters;
    }
  }
  @media screen and (min-width: $desktop) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
}

label {
  font-family: "Open Sans", serif;
  color: $white;
  padding: $global-gutters/2 0;
  font-size: 0.813rem;
  line-height: 1.813;
  @media screen and (min-width: $tablet) {
    font-size: 1.013rem;
  }

  @media screen and (min-width: $desktop) {
    font-size: 1.125rem;
  }
}

.wrapper {
  margin-bottom: $global-gutters;
  display: flex;
  flex-direction: column;
}

.submit-wrapper {
  @media screen and (min-width: $desktop) {
    display: flex;
    justify-content: flex-end;
  }
}

.desktop-wrapper {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: $desktop) {
    flex-direction: row;
  }
}
</style>