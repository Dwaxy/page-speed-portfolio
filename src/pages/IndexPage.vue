<template>
  <div class="home-holder">
    <h1 class="hero-title">Team Name</h1>
    <span class="sub-title">Group Portfolio</span>
    <!-- TODO Add login component here -->
    <div class="login">
      <span>Login</span>
    </div>
    <div class="card-holder">
      <div v-for="card in cards" :key="card.name">
        <HomeCard v-bind:userData="card"/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCard from "../components/home/HomeCard"
export default {
name: 'IndexPage',
  components: {
    HomeCard
  },
  data: function() {
    return {
      cards: [
        {
          name: "John",
          imageUrl: "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
          role: "Web Developer"
        },
        {
          name: "Lea",
          imageUrl: "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
          role: "Web Designer"
        },
        {
          name: "Max",
          imageUrl: "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
          role: "UI / UX Designer"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-holder {
    width: calc(380px * 3);
    margin: 0 auto;
    padding-top: 60px;
  }
  .card-holder {
    display: flex;
    justify-content: center;
  }
  .login {
    float: right;
    margin-top: -130px;
  }
  .hero-title {
    font-size: 5rem;
    margin: 0;
  }
  .sub-title {
    color: #a0a1a4;
    font-family: "bitter";
    font-size: 1.875rem;
  }
</style>