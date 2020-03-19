<template>
  <section class="about">
    <hr />
    <div class="about-content">
      <div>
        <h1>About Me</h1>
        <!-- <span>{{user.bio}}</span> -->
      </div>
      <div>
        <!-- <img :src="user.profileImage" alt="profile picture" /> -->
      </div>
    </div>
    <hr />
  </section>
</template>

<script>
// import axios from "axios";
// import * as config from "../../../config";

export default {
  name: "AboutMe",
  data: function() {
    return {
      user: {}
    };
  },
  methods: {
    // getUser: function(userId) {
    //   return axios
    //     .get(`${config.apiUrl}/users/${userId}`)
    //     .then(response => {
    //       //handle success
    //       return response.data.user;
    //     })
    //     .catch(function(error) {
    //       //handle error
    //       console.log(error);
    //     });
    // }
  },
  created: async function() {
    const userId = this.$route.params.userId;
    this.user = await this.getUser(userId);
  }
};
</script>

<style lang="scss" scoped>
// Global variables
@import "../../lib/vars.scss";

// Scoped styles
.about {
  padding: $global-gutters;
  hr {
    height: 0.031em;
    color: $grey;
    background-color: $grey;
    border-color: $grey;
  }

  img {
    display: none;

    @media screen and (min-width: $desktop) {
      display: block;
      padding-right: $global-gutters;
      width: 104px;
    }
  }

  &-content {
    max-width: 34.375em;
    width: auto;
    margin: 0 auto;
    padding: $global-gutters 0;

    @media screen and (min-width: $desktop) {
      max-width: 54em;
      display: flex;
      flex-direction: row-reverse;
      padding: $global-gutters * 2 0;
    }
  }
}
</style>
