<template>
  <section>
    <ul>
      <li>
        <div class="content">
          <div class="content__header">
            <div>
              <h1>Project Title</h1>
            </div>
            <div class="content__admin-icons">
              <font-awesome-icon icon="edit" class="content__icon" />
              <font-awesome-icon icon="trash-alt" class="content__icon" />
            </div>
          </div>
          <div class="content__image">
            <img src alt="project image" />
          </div>
          <div class="content__description">
            <p>
              Vaporware DIY chartreuse activated charcoal 8-bit, polaroid lyft
              blue bottle lumbersexual aesthetic. Lo-fi seitan quinoa, yr schlitz
              man braid locavore knausgaard vaporware banh mi. Intelligentsia
              viral heirloom pop-up VHS master cleanse shoreditch. Vice next level
              gochujang fam photo booth pug.
            </p>
            <div class="content__button">
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
$global-gutters: 1.5rem;
$tablet: 700px;
$desktop: 1440px;

ul {
  list-style-type: none;
}

.content {
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

  h1 {
    line-height: 1;
  }

  &__image {
    border: 1px solid white;
    margin: 0 0 $global-gutters 0;

    @media screen and (min-width: $desktop) {
      grid-column: 1/2;
      grid-row: 1/3;
      margin: 0;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: $desktop) {
      grid-column: 2/3;
      grid-row: 1/2;
    }
  }

  &__description {
    @media screen and (min-width: $desktop) {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }

  &__icon {
    margin-left: $global-gutters;
    font-size: 1.125rem;

    @media screen and (min-width: $tablet) {
      font-size: 1.325rem;
    }

    @media screen and (min-width: $desktop) {
      font-size: 1.625rem;
    }
  }

  &__button {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
