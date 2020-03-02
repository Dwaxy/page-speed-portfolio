<template>
  <section class="projects">
    <ul>
      <li>
        <div class="project">
          <div class="header">
            <div>
              <h1>Project Title</h1>
            </div>
            <div>
              <font-awesome-icon icon="edit" class="admin-icon" />
              <font-awesome-icon icon="trash-alt" class="admin-icon" />
            </div>
          </div>
          <div class="image">
            <img src alt="project image" />
          </div>
          <div class="description">
            <p>
              Vaporware DIY chartreuse activated charcoal 8-bit, polaroid lyft
              blue bottle lumbersexual aesthetic. Lo-fi seitan quinoa, yr schlitz
              man braid locavore knausgaard vaporware banh mi. Intelligentsia
              viral heirloom pop-up VHS master cleanse shoreditch. Vice next level
              gochujang fam photo booth pug.
            </p>
            <div class="button">
              <a href="#">View More</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ProjectList"
};
</script>

<style lang="scss" scoped>
// Global variables
$global-gutters: 1.5rem;
$tablet: 700px;
$desktop: 1440px;

// Scoped styles
ul {
  list-style-type: none;
}

.project {
  max-width: 45em;
  width: auto;
  margin: 0 auto;

  @media screen and (min-width: $desktop) {
    max-width: 75rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: $global-gutters * 2;
    grid-template-rows: repeat(2, auto);
  }

  .header {
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: $desktop) {
      grid-column: 2/3;
      grid-row: 1/2;
    }

    h1 {
      line-height: 1;
    }

    .admin-icon {
      margin-left: $global-gutters;
      font-size: 1.125rem;

      @media screen and (min-width: $tablet) {
        font-size: 1.325rem;
      }

      @media screen and (min-width: $desktop) {
        font-size: 1.625rem;
      }
    }
  }

  .description {
    @media screen and (min-width: $desktop) {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }

  .image {
    border: 1px solid white;
    margin: 0 0 $global-gutters 0;

    @media screen and (min-width: $desktop) {
      grid-column: 1/2;
      grid-row: 1/3;
      margin: 0;
    }
  }

  .button {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
