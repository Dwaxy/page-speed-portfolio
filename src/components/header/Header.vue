<template>
  <header>
    <div class="left">
      <!-- TODO make arrow go back using routs -->
      <font-awesome-icon icon="chevron-left" class="back-button" />
    </div>

    <div class="mid">
      <div class="name">{{info.name}}</div>
      <span class="role">{{info.role}}</span>
      <div class="links">
        <a :href="info.email" class="info-link">
          <font-awesome-icon icon="envelope" class="info-icon" />
        </a>
        <a :href="info.linkedin" class="info-link">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="info-icon" />
        </a>
        <a :href="info.github" class="info-link">
          <font-awesome-icon :icon="['fab', 'github']" class="info-icon" />
        </a>
      </div>
    </div>
    <div class="right"></div>
  </header>
</template>

<script>

export default {
  name: "Header",
  props: ["userData"],
  data: function() {
    return {
      info: {
        name: "Joel",
        role: "Web Developer",
        email: "",
        linkedin: "",
        github: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../lib/vars.scss";

header {
  display: flex;
  max-width: 42.5rem;
  margin: 0 auto;
  justify-content: space-between;
}
.left,
.right {
  height: 170px;
  width: 300px;
  position: relative;
  display: flex;
  align-items: center;
}
.mid {
  text-align: center;
  font-family: "Open Sans", serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  .name {
    color: $white;
    font-size: 1.2rem;
  }
  .role {
    font-family: "Bitter", "Source Sans Pro", serif;
    font-size: 0.9rem;
  }
  .login-buttons {
    color: $white;
  }
  .copy {
    font-size: 0.6rem;
  }
}
.links {
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  .info-icon {
    font-size: 20px;
    color: $grey;
  }
}
.back-button {
  font-size: 1.5rem;
  color: $white;
}
</style>