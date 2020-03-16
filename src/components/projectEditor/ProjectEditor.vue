<template>
  <section>
    <h1 v-if="!isEdit">New Project</h1>
    <h1 v-if="isEdit">Edit Project</h1>
    <div v-if="errors.length">
      <span>Please correct the following error(s):</span>
      <ul>
        <li v-for="error in errors" :key="error">{{error}}</li>
      </ul>
    </div>
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
        <input type="text" placeholder="Hero Image URL" v-model="project.heroImage" />
      </div>
      <div class="project-technologies wrapper">
        <label for="technologies" class="technologies-label">Technologies Used</label>
        <div v-for="(technology, index) in project.technologies" :key="index">
          <div class="desktop-wrapper">
            <input
              type="text"
              placeholder="Technology"
              v-model="technology.technology"
              class="technology"
            />
          </div>
        </div>
        <a
          v-if="project.technologies && project.technologies.length < 6"
          @click="addTechnology"
          class="button"
        >Add Technology</a>
      </div>
      <div class="project-link wrapper">
        <label for="link">Link to Live Project</label>
        <input type="text" placeholder="Live Project URL" v-model="project.liveSite" />
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
      <div v-if="!isEdit" class="project-goals wrapper">
        <label for="goals">Goals</label>
        <div v-for="(goal, index) in project.goals" :key="index">
          <input type="text" placeholder="Goal" v-model="goal.goal" class="goal" />
        </div>
        <a v-if="project.goals && project.goals.length < 3" @click="addGoal" class="button">Add Goal</a>
      </div>
      <div v-if="!isEdit" class="project-pains wrapper">
        <label for="pains">Pains</label>
        <div v-for="(pain, index) in project.pains" :key="index">
          <input type="text" placeholder="Pain" v-model="pain.pain" class="pain" />
        </div>
        <a v-if="project.pains && project.pains.length < 3" @click="addPain" class="button">Add Pain</a>
      </div>
      <div v-if="isEdit" class="project-pains wrapper">
        <label for="pains">Pain Points</label>
        <input type="text" placeholder="Point One" v-model="project.pains[0].pain" class="pain" />
        <input type="text" placeholder="Point Two" v-model="project.pains[1].pain" class="pain" />
        <input type="text" placeholder="Point Three" v-model="project.pains[2].pain" class="pain" />
      </div>
      <div v-if="isEdit" class="project-goals wrapper">
        <label for="goals">Goals</label>
        <input type="text" placeholder="Goal One" v-model="project.goals[0].goal" class="goal" />
        <input type="text" placeholder="Goal Two" v-model="project.goals[1].goal" class="goal" />
        <input type="text" placeholder="Goal Three" v-model="project.goals[2].goal" class="goal" />
      </div>
      <div class="submit-wrapper">
        <input v-if="!isEdit" type="submit" class="button" value="Create Project" />
        <input v-if="isEdit" type="submit" class="button" value="Update Project" />
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
      project: {
        technologies: [],
        goals: [],
        pains: []
      },
      errors: [],
      isEdit: false
    };
  },
  methods: {
    checkForm: function(event) {
      event.preventDefault();
      this.errors = [];

      if (!this.project.title) {
        this.errors.push("Project Title Required");
      }
      if (!this.project.description) {
        this.errors.push("Project Description Required");
      }
      if (!this.project.heroImage) {
        this.errors.push("Project Hero Image Required");
      }
      if (!this.project.liveSite) {
        this.errors.push("Project Live Link Required");
      }
      if (!this.project.heading) {
        this.errors.push("Project Heading Required");
      }
      if (!this.project.copy) {
        this.errors.push("Project Body Copy Required");
      }
      if (!this.project.firstImage) {
        this.errors.push("Project First Image Required");
      }
      if (!this.project.secondImage) {
        this.errors.push("Project Second Image Required");
      }
      if (!this.project.thirdImage) {
        this.errors.push("Project Third Image Required");
      }
      if (!this.errors.length) {
        this.isEdit ? this.updateProject() : this.createProject();
      }
    },
    addTechnology: function() {
      this.project.technologies.push({ technology: "" });
    },
    addGoal: function() {
      this.project.goals.push({ goal: "" });
    },
    addPain: function() {
      this.project.pains.push({ pain: "" });
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
    },
    getProjectById: function(projectId) {
      return axios
        .get(`${config.apiUrl}/projects/${projectId}`)
        .then(function(response) {
          //handle success
          return response.data.project;
        })
        .catch(function(error) {
          //handle error
          console.log(error);
        });
    },
    updateProject: function() {
      return axios
        .put(`${config.apiUrl}/projects/${this.project.id}`, this.project)
        .then(() => {
          //handle success
          this.$router.push({ path: "/profile" });
        })
        .catch(function(error) {
          //handle error
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
  padding: $global-gutters;

  @media screen and (min-width: $desktop) {
    max-width: 95rem;
    padding: $global-gutters;
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

input.pain,
input.goal,
input.technology {
  width: 100%;
  margin-bottom: $global-gutters;
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