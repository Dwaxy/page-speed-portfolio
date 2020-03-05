<template>
  <footer>

    <div class="left">
      <a class="footer-link" href="" v-bind:style="{ 'background-image': 'url(' + prev.imageUrl + ')' }">
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
        <a href="" class="info-link"></a>
        <a href="" class="info-link"></a>
        <a href="" class="info-link"></a>
      </div>
      <!-- TODO Log in / sign up link -->
      <div>Log in or Sign Up</div>
      <span>Copyright 2020</span>
    </div>

    <div class="right">
      <a class="footer-link" href="" v-bind:style="{ 'background-image': 'url(' + next.imageUrl + ')' }">
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
        imageUrl: "https://colorlib.com/wp/wp-content/uploads/sites/2/sketch_templates_featured.png",
        herf: ""
      },

      next: {
        title: "test next",
        imageUrl: "https://miro.medium.com/max/6016/1*E0AtatuxAJ1saRXZaF8BlQ.jpeg",
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

    }
  }
  
};

</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
  }
  .left, .right {
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
      span {
        margin: 0 20px 0 20px;
        font-size: 20px;
      }
    }
  }
</style>