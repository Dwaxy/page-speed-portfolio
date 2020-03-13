<template>
  <footer>
    <div class="left">
      <a class="footer-link" href :style="{ backgroundImage: `url(${prev.imageUrl})` }">
        <div class="link-text">
          <font-awesome-icon icon="arrow-left" class="admin-icon" />
          <span>To {{prev.title}}</span>
        </div>
      </a>
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
      <!-- TODO Log in / sign up link -->
      <div class="login-buttons">
        <div>Log in or Sign Up</div>
      </div>
      <span class="copy">Copyright 2020</span>
    </div>

    <div class="right">
      <a
        class="footer-link"
        href
        v-bind:style="{ 'background-image': 'url(' + next.imageUrl + ')' }"
      >
        <div class="link-text">
          <span>To {{next.title}}</span>
          <font-awesome-icon icon="arrow-right" class="admin-icon" />
        </div>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: function() {
    return {
      prev: {
        title: "test prev",
        imageUrl:
          "https://colorlib.com/wp/wp-content/uploads/sites/2/sketch_templates_featured.png",
        herf: ""
      },

      next: {
        title: "test next",
        imageUrl:
          "https://miro.medium.com/max/6016/1*E0AtatuxAJ1saRXZaF8BlQ.jpeg",
        herf: ""
      },
      // TODO Pass in portfolio info
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
@import "../../lib/vars";
footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  // position: absolute;
  // bottom: 0;
}
.left,
.right {
  height: 170px;
  width: 300px;
  background-color: white;
  position: relative;
  .link-text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 20px;
    color: $black;
    span {
      margin: 0 20px 0 20px;
      font-size: 20px;
    }
  }
}
.links {
  display: flex;
  justify-content: space-around;
  margin: 10px 0 10px 0;
  .info-icon {
    font-size: 20px;
    color: $grey;
  }
}
.mid {
  text-align: center;
  font-family: "Open Sans", serif;
  .name {
    color: $white;
    font-size: 1.2rem;
  }
  .role {
    font-family: "Bitter", "Source Sans Pro", serif;
  }
  .login-buttons {
    color: $white;
  }
  .copy {
    font-size: 0.6rem;
  }
}
</style>