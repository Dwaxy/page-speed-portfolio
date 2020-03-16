<template>
  <section>
    <h1>Login</h1>
    <form @submit="checkForm">
      <div class="form-email-address">
        <label for="email-address">Email Address</label>
        <input type="text" placeholder="Email Address" v-model="user.email" />
      </div>
      <div class="form-name">
        <label for="name" id="name" class="ohnohoney">Name</label>
        <input type="text" name="name" placeholder="Name" v-model="ohNoHoney" class="ohnohoney" />
      </div>
      <div>
        <input class="submit" type="submit" value="Submit" />
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import * as config from "../../config";

export default {
  name: "Login",
  data: function() {
    return {
      user: {
        email: ""
      },
      ohNoHoney: "",
      errors: []
    };
  },
  methods: {
    checkForm: function(event) {
      event.preventDefault();

      this.errors = [];
      if (this.ohNoHoney) {
        this.errors.push("Gotcha");
      }
      if (!this.user.email) {
        this.errors.push("Email Address required");
      }
      if (!this.errors.length) {
        this.loginUser();
      }
    },
    loginUser: function() {
      return axios
        .post(`${config.apiUrl}users/login`, this.user)
        .then(response => {
          let user = response.data.user;
          if (user) {
            localStorage.userEmail = user.email;
          } else {
            //show message
          }

          console.log('user', response.data.user);
          // handle success
            //   this.$router.push({ path: "/" });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
    div {
    display: flex;
    flex-direction: column;
    }

    .ohnohoney {
    opacity: 0;
    width: 0;
    height: 0;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    }
</style>