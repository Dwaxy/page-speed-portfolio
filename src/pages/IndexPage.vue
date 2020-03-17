<template>
  <div class="home-holder">
    <h1 class="hero-title">Team Name</h1>
    <span class="sub-title">Group Portfolio</span>
    <!-- TODO Add login component here -->
    <div class="login">
      <span>Login</span>
    </div>
    <div class="card-holder">
      <div v-for="user in users" :key="user.id">
        <HomeCard v-bind:userData="user" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCard from "../components/home/HomeCard";
import getUserDetails from "../services/user-info-provider"

export default {
  name: "IndexPage",
  components: {
    HomeCard
  },
  data: function() {
    return {
      users: {}
    };
  },
  created: async function() {
    this.users = await getUserDetails.getUsers();
    console.log(this.users);
  }
};
</script>

<style lang="scss" scoped>
.home-holder {
  width: calc(380px * 3);
  margin: 0 auto;
  padding-top: 60px;
  height: 100vh;
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