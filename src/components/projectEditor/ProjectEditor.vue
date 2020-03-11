<template>
  <section>
    <h1 v-if="!isEdit">Add Project</h1>
    <h1 v-if="isEdit">Edit Project</h1>
    <form @submit="checkForm">
      <div class="project-title">
        <label for="title">Title</label>
        <input type="text" placeholder="Title" v-model="project.title" />
      </div>
      <div class="project-description">
        <label for="description">Description</label>
        <textarea name="description" placeholder="Description" v-model="project.description" />
      </div>
      <div class="project-hero">
        <label for="hero">Hero Image</label>
        <input type="text" placeholder="Hero Image URL" v-model="project.hero" />
      </div>
      <div class="project-heading">
        <label for="heading">Heading</label>
        <input type="text" placeholder="Heading" v-model="project.heading" />
      </div>
      <div class="project-copy">
        <label for="copy">Copy</label>
        <textarea name="copy" placeholder="Copy" v-model="project.copy" />
      </div>
      <div class="project-first-image">
        <label for="first-image">First Image</label>
        <input type="text" placeholder="Main Image" v-model="project.firstImage" />
      </div>
      <div class="project-second-image">
        <label for="second-image">Second Image</label>
        <input type="text" placeholder="Second Image" v-model="project.secondImage" />
      </div>
      <div class="project-third-image">
        <label for="third-image">Third Image</label>
        <input type="text" placeholder="Third Image" v-model="project.thirdImage" />
      </div>
      <!-- <div class="project-goals">
        <label for="goals">Goals</label>
        <input type="text" placeholder="Goal One" v-model="project.goals" />
        <input type="text" placeholder="Goal Two" v-model="project.goals" />
        <input type="text" placeholder="Goal Three" v-model="project.goals" />
      </div>
      <div class="project-pains">
        <label for="pains">Pain Points</label>
        <input type="text" placeholder="Point One" v-model="project.pains" />
        <input type="text" placeholder="Point Two" v-model="project.pains" />
        <input type="text" placeholder="Point Three" v-model="project.pains" />
      </div>-->
      <div>
        <input type="submit" class="submit" value="Create Project" />
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
div {
  margin-bottom: 1em;
}
</style>