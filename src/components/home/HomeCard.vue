<template>
  <div class="home-card">
      <img class="profile" :alt="userData.firstName" :src="userData.profileImageUrl">
      <h1 class="name">{{userData.firstName}}</h1>
      <span class="role">{{userData.jobDescription}}</span>
      <router-link :to="{ 
        name: 'profile', 
        params: { user: userData.id },
      }">View Profile</router-link>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: ["userData"],
}
</script>

<style lang="scss" scoped>
  $global-gutters: 1.5rem;
  .home-card {
    width: 300px;
    background-color: white;
    margin: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 13px;
    .profile {
      object-fit: cover;
      border-radius: 50%;
      width: 140px;
      height: 140px;
      margin: $global-gutters * 2 0 $global-gutters * 2 0;
    }
    .name {
      text-align: center;
      color: #707070;
      margin: 0;
    }
    .name {
      font-size: 1.125rem;
    }
    a {
      margin-bottom: 30px
    }
  }
</style>