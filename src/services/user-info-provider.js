import config from "../../config.js";
import axios from "axios";

const getUserDetails = {
    getUsers: function() {
        return axios
          .get(`${config.apiUrl}/users`)
          .then(function(response) {
            return response.data.users;
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          });
    },
    getUser: function(userId) {
        return axios
          .get(`${config.apiUrl}/users/${userId}`)
          .then(function(response) {
            return response.data.user;
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          });
    }
}

export default getUserDetails;