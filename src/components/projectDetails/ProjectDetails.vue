<template>
  <div>
    <section class="secondary">
      <div class="content__secondary">
        <h2>Second Heading</h2>
        <p>
          Vaporware DIY chartreuse activated charcoal 8-bit, polaroid lyft
          blue bottle lumbersexual aesthetic. Lo-fi seitan quinoa, yr schlitz
          man braid locavore knausgaard vaporware banh mi. Intelligentsia
          viral heirloom pop-up VHS master cleanse shoreditch. Vice next level
          gochujang fam photo booth pug.
        </p>
      </div>
      <div class="image-1">
        <img src="#" alt="full width image" />
      </div>
    </section>
    <section class="goals">
      <div class="goals__inner">
        <div class="content__goals">
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
      <div class="image-2">
        <img src="#" alt="project image" />
      </div>
    </section>
    <section class="pains">
      <div class="pains__inner">
        <div class="content__pains">
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
      <div class="image-3">
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

<style lang="scss">
$global-gutters: 1.5rem;
$tablet: 700px;
$desktop: 1440px;

ol {
  list-style: decimal inside;
}

.goals {
  max-width: 45rem;
  @media screen and (min-width: $tablet) {
    display: flex;
    flex-direction: row-reverse;
  }

  &__inner {
    @media screen and (min-width: $tablet) {
      display: flex;
      margin: 0 auto;
    }
  }
}

.pains {
  max-width: 45rem;
  @media screen and (min-width: $tablet) {
    display: flex;
  }

  &__inner {
    @media screen and (min-width: $tablet) {
      display: flex;
      margin: 0 auto;
    }
  }
}

.list {
  margin-bottom: $global-gutters;
}

.image-1,
.image-2,
.image-3 {
  border: 1px solid white;
  margin: 0 0 $global-gutters 0;
  height: 250px;
  width: 100%;
}

.image-1 {
  @media screen and (min-width: $tablet) {
    margin: 0;
  }
}

.image-2 {
  @media screen and (min-width: $tablet) {
    margin: 0 $global-gutters * 2 0 0;
    width: 65%;
  }
}

.image-3 {
  @media screen and (min-width: $tablet) {
    margin: 0 0 0 $global-gutters * 2;
    width: 65%;
  }
}
</style>