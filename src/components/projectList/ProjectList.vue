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
                :to="{
            name: 'project-editor',
            params: {projectId: project.id}
          }"
                class="edit-link"
              >
                <font-awesome-icon icon="edit" class="admin-icon" />
              </router-link>
              <a href="#" @click.prevent="deleteArticle(article.id)" class="delete-link">
                <font-awesome-icon icon="trash-alt" class="admin-icon" />
              </a>
            </div>
          </div>
          <div class="project-image">
            <img src alt="project image" />
          </div>
          <div class="project-description">
            <p>{{project.description}}</p>
            <div class="project-button">
              <a href="#" class="button">View More</a>
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
      projects: []
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

.projects {
  padding: $global-gutters;
}

a.edit-link,
a.delete-link {
  text-decoration: none;
  color: white;
}

.project {
  @media screen and (min-width: $desktop) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: $global-gutters * 2;
    grid-template-rows: repeat(2, auto);
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
    }
  }

  &-image {
    border: 1px solid white;
    margin: 0 0 $global-gutters 0;

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
