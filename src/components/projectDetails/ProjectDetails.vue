<template>
  <div>
    <section class="secondary">
      <div class="content">
        <h2>Second Heading</h2>
        <p>
          Vaporware DIY chartreuse activated charcoal 8-bit, polaroid lyft
          blue bottle lumbersexual aesthetic. Lo-fi seitan quinoa, yr schlitz
          man braid locavore knausgaard vaporware banh mi. Intelligentsia
          viral heirloom pop-up VHS master cleanse shoreditch. Vice next level
          gochujang fam photo booth pug.
        </p>
      </div>
      <div class="image">
        <img src="#" alt="full width image" />
      </div>
    </section>
    <section class="goals">
      <div class="inner">
        <div class="content">
          <h2>Project Goals</h2>
          <p>Brief description of product goals</p>
          <div class="list">
            <ol>
              <li>Goal</li>
              <li>Goal</li>
              <li>Goal</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="image">
        <img src="#" alt="project image" />
      </div>
    </section>
    <section class="pains">
      <div class="inner">
        <div class="content">
          <h2>Project Pain Points</h2>
          <p>Brief description of product pain points</p>
          <div class="list">
            <ol>
              <li>Point</li>
              <li>Point</li>
              <li>Point</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="image">
        <img src="#" alt="project image" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjectPage",
  components: {}
};
</script>

<style lang="scss" scoped>

// Global variables
$global-gutters: 1.5rem;
$tablet: 700px;
$desktop: 1440px;

// Scoped styles
ol {
  list-style: decimal inside;
}

.secondary {
  max-width: 45em;
  width: auto;
  margin: 0 auto;
}

.goals, .pains {
  max-width: 45rem;
  width: auto;
  margin: 0 auto;
  @media screen and (min-width: $tablet) {
    display: flex;
    flex-direction: row-reverse;
  }

  .inner {
    @media screen and (min-width: $tablet) {
      margin-left: $global-gutters;
    }
  }
}

.pains {
  flex-direction: row;
  .inner {
    @media screen and (min-width: $tablet) {
      margin-left: 0;
      margin-right: $global-gutters;
    }
  }
}

.inner {
    @media screen and (min-width: $tablet) {
      display: flex;
      width: 40%;
    }
  }

.content {
    width: 100%;
  }

.image {
    width: 100%;
    height: auto;
    border: 1px solid white;
}

.list {
  margin-bottom: $global-gutters;
}
</style>