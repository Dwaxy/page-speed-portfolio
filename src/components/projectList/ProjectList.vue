<template>
  <section class="projects">
    <ul>
      <li v-for="project in projects" :key="project.id">
        <div class="project">
          <div class="project-header">
            <div>
              <h1>{{project.title}}</h1>
            </div>
            <div>
              <router-link
                v-if="isLoggedIn"
                :to="{
            name: 'project-editor',
            params: {projectId: project.id}
          }"
                class="edit-link"
              >
                <font-awesome-icon icon="edit" class="admin-icon" />
              </router-link>
              <a
                v-if="isLoggedIn"
                href="#"
                @click.prevent="deleteProject(project.id)"
                class="delete-link"
              >
                <font-awesome-icon icon="trash-alt" class="admin-icon" />
              </a>
            </div>
          </div>
          <div class="project-image">
            <img :src="project.heroImage" alt="project image" />
          </div>
          <div class="project-description">
            <p>{{project.description}}</p>
            <div class="project-button">
              <router-link
                :to="{
                name: 'project',
                params: {projectId: project.id}
                
              }"
                class="button"
              >View More</router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
import * as config from "../../../config";

export default {
  name: "ProjectList",
  data: function() {
    return {
      projects: [],
      // change to false once log in is all set up
      isLoggedIn: true
    };
  },
  methods: {
    getProjects: function() {
      return axios
        .get(`${config.apiUrl}/projects`)
        .then(response => {
          //handle success
          return response.data.projects;
        })
        .catch(function(error) {
          //handle error
          console.log(error);
        });
    },
    deleteProject: function(projectId) {
      return axios
        .delete(`${config.apiUrl}/projects/${projectId}`)
        .then(async () => {
          // handle success
          this.projects = await this.getProjects();
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  },
  watch: {
    source: async function() {
      this.projects = await this.getProjects();
    }
  },
  created: async function() {
    this.projects = await this.getProjects();
    // this.isLoggedIn = authService.isLoggedIn();
  }
};
</script>

<style lang="scss" scoped>
// Global variables
@import "../../lib/vars.scss";
// Scoped styles
ul {
  list-style-type: none;
}

li {
  margin-bottom: $global-gutters * 2;
}

.projects {
  padding: $global-gutters;
}

a.edit-link,
a.delete-link {
  text-decoration: none;
  color: $grey;
}

.project {
  @media screen and (min-width: $desktop) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: $global-gutters * 2;
    grid-template-rows: 50px auto;
  }

  h1 {
    line-height: 1;
  }

  .admin-icon {
    // display: none;
    margin-left: $global-gutters;
    font-size: 1.125rem;

    @media screen and (min-width: $tablet) {
      font-size: 1.325rem;
    }

    @media screen and (min-width: $desktop) {
      font-size: 1.625rem;
    }
  }

  &-header {
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: $desktop) {
      grid-column: 2/3;
      grid-row: 1/2;
    }
  }

  &-description {
    @media screen and (min-width: $desktop) {
      grid-column: 2/3;
      grid-row: 2/3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  &-image {
    margin: 0 0 $global-gutters 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    @media screen and (min-width: $desktop) {
      grid-column: 1/2;
      grid-row: 1/3;
      margin: 0;
    }
  }

  &-button {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
